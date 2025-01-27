import { useState } from "react";
import style from "./Header.module.scss";
import Button from "../button/Button";
import { useAppContext } from "../../utils/appContext";
import Popover from "./Popover";
import { Link } from "react-router";
import Modal from "./Modal";

const navLinks = [
  {
    href: "#",
    title: "O nas",
    style:
      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0",
  },

  {
    href: "/tips",
    title: "Porady",
    style:
      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0",
  },
  {
    href: "#",
    title: "Kontakt",
    style:
      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0",
  },
];

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { user, logout } = useAppContext();

  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <nav className="bg-white sticky w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600"
          >
            <span className={style.car} />
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Drive Safer
            </h1>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <Popover buttonLabel={user}>
                <p className="text-gray-700">
                  Liczba punktów:<span className="font-bold ml-4">10</span>
                </p>
                <Button
                  variant="primary"
                  className="mt-2 px-2 py-1 flex items-center gap-3 justify-center"
                  onClick={logout}
                >
                  Wyloguj się
                  <span className={style.logout}></span>
                </Button>
              </Popover>
            ) : (
              <Button variant="primary" onClick={() => setModalOpen(true)}>
                Zaloguj się{" "}
              </Button>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              {navLinks.map((link) => {
                return (
                  <li key={link.title}>
                    <Link to={link.href} className={link.style}>
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      <Modal isOpen={isModalOpen} onClose={onClose} />
    </>
  );
};

export default Header;
