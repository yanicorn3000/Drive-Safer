import { FC, ReactNode } from "react";
import Button from "../../../components/button/Button";
import styles from "./Login.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
};

const LoginModal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3">
        <div className="flex justify-between items-center border-b px-4 py-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <Button variant="close" onClick={onClose}>
            <span className={styles.close}></span>
          </Button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default LoginModal;
