// import { useEffect } from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
// import { RouterProvider } from 'react-router-dom';
// import router from './router';
// import theme from "./theme/theme";
// import './index.css'
// import { onAuthStateChanged } from 'firebase/auth';
// import { onValue, ref as dbRef } from 'firebase/database';
// import { getDownloadURL, ref as storageRef } from 'firebase/storage';
// import { auth, database, storage } from './firebase';
// import { useAppContext } from './components/management/appState';

// function App() {
//   const  { state, dispatch } = useAppContext();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("Currently signed in user:", user);
//         dispatch({ type: 'SET_AUTH_STATE', payload: { user: user, isLoggedIn: true } });
//       } else {
//         dispatch({ type: 'SET_AUTH_STATE', payload: { user: null, isLoggedIn: false } });
//       }
//     });

//     return () => unsubscribe();
//   }, [auth, dispatch]);

//   useEffect(() => {
//     let unsubscribeProfile: () => void | undefined;

//     console.log('user state:', state.user);

//     if (state.user) {
//       const userUid = state.user.uid;
//       const userProfileDbRef = dbRef(database, `users/${userUid}`);

//       console.log("DB Path:", userUid);
//       console.log("", userProfileDbRef.)

//       unsubscribeProfile = onValue(userProfileDbRef, async (snapshot) => {
//         if (snapshot.exists()) {
//           const profileData = snapshot.val();
//           const username = profileData.username || 'User';
//           let userImage = profileData.userImage || '';

//           console.log("", username)
//           console.log("", userImage)

//           if (userImage.startsWith('userImages/')) {
//             try {
//               const imageStorageRef = storageRef(storage, userImage);
//               userImage = await getDownloadURL(imageStorageRef);
//             } catch (imageError) {
//               console.error('Error fetching user image from Storage:', imageError);
//               userImage = 'https://placehold.co/100x100/A0AEC0/FFFFFF?text=No+Image';
//             }
//           } else if (!userImage) {
//              userImage = 'https://placehold.co/100x100/A0AEC0/FFFFFF?text=No+Image';
//           }

//           dispatch({
//             type: 'SET_USER_PROFILE_DATA',
//             payload: { username: username, userImage: userImage }
//           });
//         } else {
//           dispatch({
//             type: 'SET_USER_PROFILE_DATA',
//             payload: { username: 'User', userImage: 'https://placehold.co/100x100/A0AEC0/FFFFFF?text=No+Image' }
//           });
//           console.log(`User profile data not found for ${userUid}.`);
//         }
//       }, (error) => {
//         console.error('Error subscribing to user profile data:', error);
//         dispatch({
//           type: 'SET_USER_PROFILE_DATA',
//           payload: { username: 'User', userImage: 'https://placehold.co/100x100/A0AEC0/FFFFFF?text=Error' }
//         });
//       });
//     } else {
//       dispatch({
//         type: 'SET_USER_PROFILE_DATA',
//         payload: { username: null, userImage: null }
//       });
//     }

//     return () => {
//       if (unsubscribeProfile) {
//         unsubscribeProfile();
//       }
//     };
//   }, [state.user, database, storage, dispatch]);

//   return (
//       <ChakraProvider theme={theme}>
//         <RouterProvider router={router}></RouterProvider>
//       </ChakraProvider>
//   )
// }

// export default App














import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import theme from "./theme/theme";
import './index.css';
import { onAuthStateChanged } from 'firebase/auth';
import { onValue, ref as dbRef } from 'firebase/database';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { auth, database, storage } from './firebase';
import { useAppContext } from './components/management/appState';

function App() {
  const { dispatch } = useAppContext();

  useEffect(() => {
    let unsubscribeProfile: () => void;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: 'SET_AUTH_STATE', payload: { user: user, isLoggedIn: true } });

        const userUid = user.uid;
        const userProfileDbRef = dbRef(database, `users/${userUid}`);

        unsubscribeProfile = onValue(userProfileDbRef, async (snapshot) => {

          if (snapshot.exists()) {
            const profileData = snapshot.val();

            const userName = profileData.username;
            let userImage = profileData.userImage;

            if (userImage.startsWith('userImages/')) {
              try {
                const imageStorageRef = storageRef(storage, userImage);

                userImage = await getDownloadURL(imageStorageRef);

                dispatch({ type: 'SET_USER_PROFILE_DATA', payload: { username: userName, userImage: userImage } });
              }
              catch (imageError) {
                userImage = 'https://placehold.co/100x100/A0AEC0/FFFFFF?text=No+Image';
              }
            }
            else if (!userImage) {
              userImage = 'https://placehold.co/100x100/A0AEC0/FFFFFF?text=No+Image';
            }


            dispatch({ type: 'SET_USER_PROFILE_DATA', payload: { username: userName, userImage: userImage } });
          }
          else {
            dispatch({
              type: 'SET_USER_PROFILE_DATA',
              payload: { username: 'User ', userImage: 'https://placehold.co/100x100/A0AEC0/FFFFFF?text=No+Image' }
            });
          }
        }, () => {
          dispatch({
            type: 'SET_USER_PROFILE_DATA',
            payload: { username: 'User ', userImage: 'https://placehold.co/100x100/A0AEC0/FFFFFF?text=Error' }
          });
        });
      }
      else {
        dispatch({ type: 'SET_AUTH_STATE', payload: { user: null, isLoggedIn: false } });
        dispatch({ type: 'SET_USER_PROFILE_DATA', payload: { username: null, userImage: null } });
      }
    });

    return () => {
      unsubscribe();
      if (unsubscribeProfile) {
        unsubscribeProfile();
      }
    };
  }, [auth, dispatch]);

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}

export default App;