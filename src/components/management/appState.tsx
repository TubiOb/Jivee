import { createContext, useContext, useReducer, ReactNode } from 'react';

// Define types
interface AppState {
  selectedChat: boolean | undefined;
  user: {};
  sideBar: {
    open: boolean;
    type: string;
  };
  isLoggedIn: boolean;
  tab: number;
  snackbar: {
    open: boolean | null;
    severity: string | null;
    message: string | null;
  };
  users: any[];
  userProfile: any[];
  all_users: any[];
  friends: any[];
  friendRequests: any[];
  chat_type: string | null;
  room_id: string | null;
  call_logs: any[];
}

type AppAction =
  | { type: 'FETCH_CALL_LOGS'; payload: { callLogs: any[] } }
  | { type: 'FETCH_USER'; payload: { user: {} } }
  | { type: 'FETCH_USER_PROFILE'; payload: { user: any } }
  | { type: 'UPDATE_USER'; payload: { user: {} } }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'UPDATE_SIDEBAR_TYPE'; payload: { type: string } }
  | { type: 'UPDATE_TAB'; payload: { tab: number } }
  | { type: 'OPEN_SNACKBAR'; payload: { severity: string; message: string } }
  | { type: 'CLOSE_SNACKBAR' }
  | { type: 'UPDATE_USERS'; payload: { users: any[] } }
  | { type: 'UPDATE_ALL_USERS'; payload: { users: any[] } }
  | { type: 'UPDATE_FRIENDS'; payload: { friends: any[] } }
  | { type: 'UPDATE_FRIEND_REQUESTS'; payload: { requests: any[] } }
  | { type: 'UPDATE_CALL_LOGS'; payload: { callLogs: any[] } }
  | { type: 'SELECT_CONVERSATION'; payload: { room_id: string } };

const initialState: AppState = {
  user: {},
  sideBar: { open: false, type: 'CONTACT' },
  isLoggedIn: true,
  tab: 0,
  snackbar: { open: null, severity: null, message: null },
  users: [],
  userProfile: [],
  all_users: [],
  friends: [],
  friendRequests: [],
  chat_type: null,
  room_id: null,
  call_logs: [],
  selectedChat: undefined
};

const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<AppAction> } | undefined>(undefined);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'FETCH_CALL_LOGS':
      return { ...state, call_logs: action.payload.callLogs };
    case 'FETCH_USER':
      return { ...state, user: action.payload.user };
    case 'FETCH_USER_PROFILE':
      return { ...state, userProfile: action.payload.user };
    case 'UPDATE_USER':
      return { ...state, user: action.payload.user };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sideBar: { ...state.sideBar, open: !state.sideBar.open } };
    case 'UPDATE_SIDEBAR_TYPE':
      return { ...state, sideBar: { ...state.sideBar, type: action.payload.type } };
    case 'UPDATE_TAB':
      return { ...state, tab: action.payload.tab };
    case 'OPEN_SNACKBAR':
      return { ...state, snackbar: { open: true, severity: action.payload.severity, message: action.payload.message } };
    case 'CLOSE_SNACKBAR':
      return { ...state, snackbar: { open: false, severity: null, message: null } };
    case 'UPDATE_USERS':
      return { ...state, users: action.payload.users };
    case 'UPDATE_ALL_USERS':
      return { ...state, all_users: action.payload.users };
    case 'UPDATE_FRIENDS':
      return { ...state, friends: action.payload.friends };
    case 'UPDATE_FRIEND_REQUESTS':
      return { ...state, friendRequests: action.payload.requests };
    case 'SELECT_CONVERSATION':
      return { ...state, chat_type: 'individual', room_id: action.payload.room_id };
    default:
      return state;
  }
}

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
