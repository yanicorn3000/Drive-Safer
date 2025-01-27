import { useState, FC } from "react";
import LoginModal from "../../routes/pages/modal/LoginModal";
import Login from "../login/Login";
import Register from "../register/Register";

const Modal: FC<{
  isOpen?: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const resetOnClose = () => {
    setIsLogin(true);
    onClose();
  };

  const formToggler = (
    <div className="flex mt-3 justify-center">
      <button
        onClick={toggleForm}
        className="text-sm text-violet-500 bg-transparent hover:underline border-none outline-none"
      >
        {isLogin
          ? "Nie masz konta? Zarejestruj się"
          : "Masz już konto? Zaloguj się"}
      </button>
    </div>
  );

  return (
    <LoginModal
      isOpen={!!isOpen}
      onClose={resetOnClose}
      title={isLogin ? "Logowanie" : "Rejestracja"}
    >
      {isLogin ? (
        <Login formToggler={formToggler} />
      ) : (
        <Register formToggler={formToggler} />
      )}
    </LoginModal>
  );
};

export default Modal;
