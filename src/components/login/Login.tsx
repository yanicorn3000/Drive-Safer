import { useReducer, ReactNode } from "react";
import { FC } from "react";
import { useAppContext } from "../../utils/appContext";
import LoginForm from "./LoginForm";

type LoginState = {
  email: string;
  password: string;
  error: string | null;
};

export type Action = {
  type: "SET_EMAIL" | "SET_PASSWORD" | "SET_ERROR" | "CLEAR_ERROR";
  payload?: string;
};

const initialState: LoginState = {
  email: "",
  password: "",
  error: null,
};

const loginReducer = (state: LoginState, action: Action): LoginState => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload || "" };
    case "SET_PASSWORD":
      return { ...state, password: action.payload || "" };
    case "SET_ERROR":
      return { ...state, error: action.payload || null };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return state;
  }
};

const Login: FC<{ formToggler: ReactNode }> = ({ formToggler }) => {
  const { login, user } = useAppContext();
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!state.email || !state.password) {
      dispatch({
        type: "SET_ERROR",
        payload: "Pole nie moze być puste",
      });
      return;
    }
    try {
      const success = await login(state.email, state.password);
      if (!success) {
        dispatch({
          type: "SET_ERROR",
          payload: "Nieprawidłowe e-mail lub hasło",
        });
        return;
      }
      dispatch({ type: "CLEAR_ERROR" });
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({
          type: "SET_ERROR",
          payload: error.message,
        });
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: "Wystąpił błąd podczas logowania.",
        });
      }
    }
  };

  return (
    <>
      {user ? (
        <div
          className="p-4 mb-4 text-green-500 border border-green-500 rounded-lg bg-green-50 text-center"
          role="alert"
        >
          <h3 className="text-lg font-medium">Jesteś zalogowany!</h3>
        </div>
      ) : (
        <>
          <LoginForm
            submit={handleSubmit}
            email={state.email}
            password={state.password}
            error={state.error}
            dispatch={dispatch}
          />
          {formToggler}
        </>
      )}
    </>
  );
};

export default Login;
