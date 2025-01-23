import { createContext, useContext, useState, ReactNode, FC } from "react";
// import { useLocalStorageState } from "./localStorage";

type AppContextType = {
  user: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

// const USER_LS_KEY = "user_data";

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (email === "test@test.pl" && password === "test") {
      setUser(email);
      return true;
    }
    return false;
  };

  const logout = (): void => {
    setUser(null);
  };

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Error useAppContet should be inside AppProvider");
  }
  return context;
};
