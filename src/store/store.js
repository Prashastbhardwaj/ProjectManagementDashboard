import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import projectsReducer from './slice/projectsSlice';
import themeSlice from './slice/themeSlice'; 
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  version:1
};

// Combine reducers
const rootReducer = combineReducers({
  projects: projectsReducer,
  theme: themeSlice, 
});


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
