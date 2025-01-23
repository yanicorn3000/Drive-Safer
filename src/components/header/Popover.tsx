import { useState, useRef, useEffect, FC, ReactNode } from "react";
import styles from "./Header.module.scss";

type PopoverProps = {
  buttonLabel: string;
  children: ReactNode;
};

const Popover: FC<PopoverProps> = ({ buttonLabel, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <button
        onClick={togglePopover}
        className="flex items-center gap-3 font-semibold text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-0 bg-green-400 p-2"
      >
        {" "}
        <span className={styles.user}></span>
        {buttonLabel}
        <span className={styles.chevron}></span>
      </button>
      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-4 flex flex-col ">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Popover;
