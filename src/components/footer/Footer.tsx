import style from "./Footer.module.scss";

const links = [
  {
    href: "#",
    title: "O nas",
  },

  {
    href: "#",
    title: "Regulamin",
  },

  {
    href: "#",
    title: "Kontakt",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white mt-24">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse text-gray-600"
          >
            <span className={style.car} />
            <h2 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Drive Safer
            </h2>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-7">
            {links.map((link) => {
              return (
                <li key={link.title}>
                  <a href={link.href} className="hover:underline">
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 w-full" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="#" className="hover:underline">
            Drive Safer™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
