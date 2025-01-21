import { useState } from "react";
import style from "./Header.module.scss";
import Button from "../button/Button";
import LoginModal from "../../routes/pages/modal/LoginModal";
import Login from "../login/Login";

const navLinks = [
  {
    href: "#",
    title: "O nas",
    style:
      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
  },

  {
    href: "#",
    title: "Porady",
    style:
      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
  },
  {
    href: "#",
    title: "Kontakt",
    style:
      "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-violet-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",
  },
];

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600"
          >
            <span className={style.car} />
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Drive Safer
            </h1>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button variant="primary" onClick={() => setModalOpen(true)}>
              Zaloguj się{" "}
            </Button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((link) => {
                return (
                  <li key={link.title}>
                    <a href={link.href} className={link.style}>
                      {link.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Logowanie"
      >
        <Login />
      </LoginModal>
    </>
  );
};

export default Header;
