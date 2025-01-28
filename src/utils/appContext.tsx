import { createContext, useContext, ReactNode, FC } from "react";
import { useLocalStorageState } from "./localStorage";
import {
  useUserData,
  useLogin,
  useAddUser,
  useUserPoints,
  USER_LS_KEY,
} from "../utils/api";

type User = {
  email: string;
  points: number;
  username: string;
  uuid: string;
};

type AppContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updatePoints: (points: number) => Promise<boolean>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const { data: user, isLoading, isError, refetch } = useUserData();
  const { mutateAsync: loginUser } = useLogin();
  const { mutateAsync: addUser } = useAddUser();
  const [token, setToken] = useLocalStorageState<string | null>(
    USER_LS_KEY,
    null
  );
  const { mutateAsync: addPoints } = useUserPoints();

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const data = await loginUser({ email, password });
      setToken(data.token);
      refetch();
      return true;
    } catch (error) {
      console.error("Błąd logowania:", error);
      return false;
    }
  };
  const logout = (): void => {
    refetch();
    setToken(null);
  };
  const register = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    const data = await addUser({ email, password });
    setToken(data.token);
    refetch();
    return true;
  };

  const updatePoints = async (points: number): Promise<boolean> => {
    try {
      await addPoints({ points });
      refetch();
      return true;
    } catch (error) {
      console.error("Błąd podczas dodawania punktów:", error);
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{ user, login, logout, register, updatePoints }}
    >
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
