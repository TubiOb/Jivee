import { useAppContext } from './appState';
import { database } from '../../firebase';
import { ref, get, set } from 'firebase/database';

const useApi = () => {
  const { state, dispatch } = useAppContext();

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const dbRef = ref(database, 'users');
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const users = Object.values(snapshot.val()); // Assuming users are stored as an array
        dispatch({ type: 'UPDATE_USERS', payload: { users } });
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Fetch all verified users
  const fetchAllUsers = async () => {
    try {
      const dbRef = ref(database, 'all_users');
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const allUsers = Object.values(snapshot.val()); // Assuming all users are stored as an array
        dispatch({ type: 'UPDATE_ALL_USERS', payload: { users: allUsers } });
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching all users:', error);
    }
  };

  // Fetch friends
  const fetchFriends = async () => {
    try {
      const dbRef = ref(database, 'friends');
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const friends = Object.values(snapshot.val()); // Assuming friends are stored as an array
        dispatch({ type: 'UPDATE_FRIENDS', payload: { friends } });
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching friends:', error);
    }
  };

  // Fetch friend requests
  const fetchFriendRequests = async () => {
    try {
      const dbRef = ref(database, 'friend_requests');
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const friendRequests = Object.values(snapshot.val()); // Assuming friend requests are stored as an array
        dispatch({ type: 'UPDATE_FRIEND_REQUESTS', payload: { requests: friendRequests } });
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching friend requests:', error);
    }
  };

  // Fetch call logs
  const fetchCallLogs = async () => {
    try {
      const dbRef = ref(database, 'call_logs');
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const callLogs = Object.values(snapshot.val()); // Assuming call logs are stored as an array
        dispatch({ type: 'UPDATE_CALL_LOGS', payload: { callLogs } });
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching call logs:', error);
    }
  };

  const fetchUserProfile = async (userId: string) => {
    try {
      const dbRef = ref(database, `users/${userId}`);
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        const userProfile = snapshot.val();
        dispatch({ type: 'FETCH_USER_PROFILE', payload: { user: userProfile } });
      } else {
        console.log('No data available');
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  // Update user profile
  const updateUserProfile = async (userId: any, updates: unknown) => {
    try {
      const dbRef = ref(database, `users/${userId}`);
      await set(dbRef, updates);
      // Optionally update state or notify user of successful update
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const selectConversation = (room_id: string) => {
    dispatch({ type: 'SELECT_CONVERSATION', payload: { room_id } });
  };

  const showSnackbar = (severity: string, message: string) => {
    dispatch({ type: 'OPEN_SNACKBAR', payload: { severity, message } });
    setTimeout(() => {
      dispatch({ type: 'CLOSE_SNACKBAR' });
    }, 4000);
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
