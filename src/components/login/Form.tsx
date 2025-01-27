import Button from "../button/Button";
import { FC } from "react";

type FormProps = {
  submit: (e: React.MouseEvent<HTMLButtonElement>) => void; //
  error?: string;
  email: string;
  password: string;
  dispatch: (action: { type: string; payload: unknown }) => void;
};

const Form: FC<FormProps> = ({ submit, error, email, password, dispatch }) => {
  return (
    <form className="flex flex-col max-w-sm mx-auto">
      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded text-center text-sm place-self-center">
          {error}
        </div>
      )}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Login
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) =>
            dispatch({ type: "SET_EMAIL", payload: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block w-full p-2.5"
          placeholder="email@example.com"
          required
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
          onChange={(e) =>
            dispatch({ type: "SET_PASSWORD", payload: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-violet-500 focus:border-violet-500 block 
        p-2.5 w-full"
          required
        />
      </div>

      <Button
        onClick={submit}
        className="place-self-center"
        variant="secondary"
      >
        Zaloguj się
      </Button>
    </form>
  );
};

export default Form;
