import { FC, ReactNode, useReducer } from "react";
import RegisterForm from "./RegisterForm";
import { useAppContext } from "../../utils/appContext";

type RegisterState = {
  email: string;
  password: string;
  repeatPassword: string;
  isSamePassword: boolean;
  error: string | null;
};

export type ActionRegister = {
  type:
    | "SET_EMAIL"
    | "SET_PASSWORD"
    | "SET_REPEAT_PASSWORD"
    | "SET_ERROR"
    | "CLEAR_ERROR";
  payload?: string;
};

const initialState: RegisterState = {
  email: "",
  password: "",
  repeatPassword: "",
  isSamePassword: true,
  error: null,
};

const registerReducer = (
  state: RegisterState,
  action: ActionRegister
): RegisterState => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload || "" };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload || "",
        isSamePassword: state.password === action.payload,
      };
    case "SET_REPEAT_PASSWORD":
      return {
        ...state,
        repeatPassword: action.payload || "",
        isSamePassword: state.password === action.payload,
      };

    case "SET_ERROR":
      return { ...state, error: action.payload || null };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return state;
  }
};

const Register: FC<{ formToggler: ReactNode; onClose: () => void }> = ({
  formToggler,
  onClose,
}) => {
  const [state, dispatch] = useReducer(registerReducer, initialState);
  const { register } = useAppContext();

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!state.email || !state.password) {
      dispatch({
        type: "SET_ERROR",
        payload: "Pole nie moze być puste",
      });
      return;
    }

    try {
      dispatch({
        type: "CLEAR_ERROR",
      });
      await register(state.email, state.password);
      onClose();
    } catch (error: unknown) {
      console.error("Wystąpił błąd:", error);

      if (
        error &&
        typeof error === "object" &&
        "message" in error &&
        error.message
      ) {
        if (error.message === "User with this email already exists") {
          dispatch({
            type: "SET_ERROR",
            payload: "Taki uzytkownik juz jest zarejestrowany.",
          });
          return;
        }
      }

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
  console.log(state);
  return (
    <RegisterForm
      formToggler={formToggler}
      handleAddUser={handleAddUser}
      dispatch={dispatch}
      email={state.email}
      password={state.password}
      repeatPassword={state.repeatPassword}
      error={
        state.error ||
        (!state.isSamePassword ? "Hasła nie są identyczne" : undefined)
      }
    />
  );
};

export default Register;
