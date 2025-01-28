import Button from "../button/Button";
import { FC, Dispatch, ReactNode } from "react";
import { ActionRegister } from "./Register";

type RegisterFormProps = {
  formToggler: React.ReactNode;
  handleAddUser: (e: React.FormEvent) => Promise<void>;
  dispatch: Dispatch<ActionRegister>;
  email: string;
  password: string;
  repeatPassword: string;
  error: ReactNode;
};

const RegisterForm: FC<RegisterFormProps> = ({
  formToggler,
  handleAddUser,
  dispatch,
  email,
  password,
  repeatPassword,
  error,
}) => {
  return (
    <>
      <form className="flex flex-col max-w-sm mx-auto">
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded text-center text-sm place-self-center">
            {error}
          </div>
        )}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-90"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            placeholder="example@example.com"
            required
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Hasło
          </label>
          <input
            type="password"
            id="password"
            value={password}
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            onChange={(e) =>
              dispatch({
                type: "SET_PASSWORD",
                payload: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Powtórz hasło
          </label>
          <input
            type="password"
            value={repeatPassword}
            id="repeat-password"
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
            onChange={(e) =>
              dispatch({ type: "SET_REPEAT_PASSWORD", payload: e.target.value })
            }
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-violet-300"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Akceptuję {""}
            <a href="#" className="text-violet-600 hover:underline">
              regulamin i politykę prywatności
            </a>
          </label>
        </div>
        <Button
          className="place-self-center"
          variant="primary"
          onClick={handleAddUser}
        >
          Zarejestruj się
        </Button>
      </form>
      {formToggler}
    </>
  );
};

export default RegisterForm;
