import { AuthStore } from 'features/auth';
import { createContext } from 'react';

interface IStore {
	authStore: AuthStore;
}

const authStore = new AuthStore();

export const Context = createContext<IStore>({
  authStore,
});

export const AppContext = ({ children }: { children: React.ReactNode }) => {
  return <Context.Provider value={{ authStore }}>{children}</Context.Provider>;
};
