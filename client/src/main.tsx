import React, { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from '@app/App.js'
import AuthStore from '@app/stores/authStore';
import PostStore from '@app/stores/postStore';

interface State {
  authStore: AuthStore,
  postStore: PostStore,
}

const authStore = new AuthStore()
const postStore = new PostStore()

export const Context = createContext<State>({
  authStore, postStore
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Context.Provider value={{
    authStore, postStore
  }}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Context.Provider>
)
