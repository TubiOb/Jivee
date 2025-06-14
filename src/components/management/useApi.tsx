import { useAppContext } from './appState';
import { database } from '../../firebase';
import { ref, set, onValue } from 'firebase/database';

const useApi = () => {
  const { state, dispatch } = useAppContext();

  // Fetch all users
  // const fetchUsers = async () => {
  //   try {
  //     const dbRef = ref(database, 'users');
  //     const snapshot = await get(dbRef);
  //     if (snapshot.exists()) {
  //       const users = Object.values(snapshot.val()); // Assuming users are stored as an array
  //       dispatch({ type: 'UPDATE_USERS', payload: { users } });
  //     } else {
  //       console.log('No data available');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //   }
  // }
  const fetchUsers = async () => {
    dispatch({ type: 'SET_LOADING_USERS', payload: { loading: true } });
    const dbRef = ref(database, 'users');
    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const users = Object.values(snapshot.val() || {});
        dispatch({ type: 'UPDATE_USERS', payload: { users } });
      } else {
        dispatch({ type: 'UPDATE_USERS', payload: { users: [] } }); // Clear users if no data
        console.log('No user data available');
      }
      dispatch({ type: 'SET_LOADING_USERS', payload: { loading: false } });
    }, (error) => {
      console.error('Error subscribing to users:', error);
      dispatch({ type: 'SET_LOADING_USERS', payload: { loading: false } });
      // Dispatch an error snackbar or state update
    });
    return unsubscribe;
  } 

  // Fetch all verified users
  // const fetchAllUsers = async () => {
  //   try {
  //     const dbRef = ref(database, 'all_users');
  //     const snapshot = await get(dbRef);
  //     if (snapshot.exists()) {
  //       const allUsers = Object.values(snapshot.val()); // Assuming all users are stored as an array
  //       dispatch({ type: 'UPDATE_ALL_USERS', payload: { users: allUsers } });
  //     } else {
  //       console.log('No data available');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching all users:', error);
  //   }
  // };
  const fetchAllUsers = async () => {
    try {
      const dbRef = ref(database, 'all_users');
      const unsubscribe = onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          const allUsers = Object.values(snapshot.val() || {});
          dispatch({ type: 'UPDATE_ALL_USERS', payload: { users: allUsers } });
        } else {
          dispatch({ type: 'UPDATE_ALL_USERS', payload: { users: [] } });
          console.log('No all_users data available in Realtime Database.');
        }
      }, (error) => {
        console.error('Error subscribing to all users:', error);
        showSnackbar('error', 'Failed to load all users.');
      });
      return unsubscribe;
    } catch (error) {
      console.error('Error fetching all users:', error);
    }
  };

  // Fetch friends
  // const fetchFriends = async () => {
  //   try {
  //     const dbRef = ref(database, 'friends');
  //     const snapshot = await get(dbRef);
  //     if (snapshot.exists()) {
  //       const friends = Object.values(snapshot.val()); // Assuming friends are stored as an array
  //       dispatch({ type: 'UPDATE_FRIENDS', payload: { friends } });
  //     } else {
  //       console.log('No data available');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching friends:', error);
  //   }
  // };
  const fetchFriends = async (currentUserId: string) => {
    try {
      const dbRef = ref(database, `users/${currentUserId}/friends`);
      const unsubscribe = onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          const friends = Object.values(snapshot.val() || {});
          dispatch({ type: 'UPDATE_FRIENDS', payload: { friends } });
        } else {
          dispatch({ type: 'UPDATE_FRIENDS', payload: { friends: [] } });
          console.log('No friends data available');
        }
      }, (error) => {
        console.error('Error subscribing to friends:', error);
      });
      return unsubscribe;
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };

  // Fetch friend requests
  // const fetchFriendRequests = async () => {
  //   try {
  //     const dbRef = ref(database, 'friend_requests');
  //     const snapshot = await get(dbRef);
  //     if (snapshot.exists()) {
  //       const friendRequests = Object.values(snapshot.val()); // Assuming friend requests are stored as an array
  //       dispatch({ type: 'UPDATE_FRIEND_REQUESTS', payload: { requests: friendRequests } });
  //     } else {
  //       console.log('No data available');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching friend requests:', error);
  //   }
  // };
  const fetchFriendRequests = async (currentUserId: string) => {
    try {
      const dbRef = ref(database, `users/${currentUserId}/friendRequests`);
      const unsubscribe = onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          const friendRequests = Object.values(snapshot.val() || {});
          dispatch({ type: 'UPDATE_FRIEND_REQUESTS', payload: { requests: friendRequests } });
        } else {
          dispatch({ type: 'UPDATE_FRIEND_REQUESTS', payload: { requests: [] } });
          console.log('No friend requests data available');
        }
      }, (error) => {
        console.error('Error subscribing to friend requests:', error);
      });
      return unsubscribe;
    } catch (error) {
      console.error('Error fetching friend requests:', error);
    }
  };

  // Fetch call logs
  // const fetchCallLogs = async () => {
  //   try {
  //     const dbRef = ref(database, 'call_logs');
  //     const snapshot = await get(dbRef);
  //     if (snapshot.exists()) {
  //       const callLogs = Object.values(snapshot.val()); // Assuming call logs are stored as an array
  //       dispatch({ type: 'UPDATE_CALL_LOGS', payload: { callLogs } });
  //     } else {
  //       console.log('No data available');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching call logs:', error);
  //   }
  // };
  const fetchCallLogs = async (currentUserId: string) => {
    try {
      const dbRef = ref(database, `users/${currentUserId}/callLogs`);
      const unsubscribe = onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          const callLogs = Object.values(snapshot.val() || {});
          dispatch({ type: 'UPDATE_CALL_LOGS', payload: { callLogs } });
        } else {
          dispatch({ type: 'UPDATE_CALL_LOGS', payload: { callLogs: [] } });
          console.log('No call logs data available');
        }
      }, (error) => {
        console.error('Error subscribing to call logs:', error);
      });
      return unsubscribe;
    } catch (error) {
      console.error('Error fetching call logs:', error);
    }
  };

  // const fetchUserProfile = async (userId: string) => {
  //   try {
  //     const dbRef = ref(database, `users/${userId}`);
  //     const snapshot = await get(dbRef);
  //     if (snapshot.exists()) {
  //       const userProfile = snapshot.val();
  //       dispatch({ type: 'FETCH_USER_PROFILE', payload: { user: userProfile } });
  //     } else {
  //       console.log('No data available');
  //     }
  //   } catch (error) {
  //     console.error('Error fetching user profile:', error);
  //   }
  // };
  const fetchUserProfile = async (userId: string) => {
    try {
      const dbRef = ref(database, `users/${userId}`);
      const unsubscribe = onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          const userProfile = snapshot.val();
          dispatch({ type: 'FETCH_USER_PROFILE', payload: { user: userProfile } });
        } else {
          dispatch({ type: 'FETCH_USER_PROFILE', payload: { user: null } });
        }
      }, (error) => {
        console.error('Error subscribing to user profile:', error);
      });
      return unsubscribe;
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  // Update user profile
  const updateUserProfile = async (userId: any, updates: Record<string, any>) => {
    try {
      const dbRef = ref(database, `users/${userId}`);
      await set(dbRef, updates);
      showSnackbar('success', 'Profile updated successfully!');
      // Optionally update state or notify user of successful update
    } catch (error) {
      console.error('Error updating user profile:', error);
      showSnackbar('error', 'Failed to update profile.');
    }
  };

  const selectConversation = (room_id: string) => {
    dispatch({ type: 'SELECT_CONVERSATION', payload: { room_id } });
  };

  const showSnackbar = (severity: string, message: string) => {
    dispatch({ type: 'OPEN_SNACKBAR', payload: { severity, message } });
    setTimeout(() => {
      dispatch({ type: 'CLOSE_SNACKBAR' });
    }, 9000);
  };

  const toggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  }

  const updateSidebarType = (type: string) => {
    dispatch({ type: 'UPDATE_SIDEBAR_TYPE', payload: { type } });
  };

  const updateTab = (tab: number) => {
    dispatch({ type: 'UPDATE_TAB', payload: { tab } });
  };
  
  return {
    fetchUsers,
    fetchAllUsers,
    fetchFriends,
    fetchFriendRequests,
    fetchCallLogs,
    fetchUserProfile,
    updateUserProfile,
    selectConversation,
    showSnackbar,
    toggleSidebar,
    state,
    updateSidebarType,
    updateTab,
  };
};

export default useApi;
