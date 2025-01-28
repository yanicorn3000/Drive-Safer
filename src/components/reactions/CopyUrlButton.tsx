import { useState, FC, useEffect, useRef } from "react";
import styles from "./Reactions.module.scss";
import clsx from "clsx";

const CopyUrlButton: FC = () => {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null
  );
  const timeoutRef = useRef<number>();

  const copyUrl = async (): Promise<void> => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      displayStatusMessage("URL został skopiowany do schowka!", "success");
    } catch (error: unknown) {
      displayStatusMessage("Nie udało się skopiować URL.", "error");
    }
  };
  const displayStatusMessage = (
    message: string,
    type: "success" | "error"
  ): void => {
    setStatusMessage(message);
    setStatusType(type);
    timeoutRef.current = setTimeout(() => {
      setStatusMessage(null);
      setStatusType(null);
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative">
      <button onClick={copyUrl} className={styles.share}></button>
      {statusMessage && (
        <div className="absolute bottom-9 whitespace-nowrap -translate-x-1/2">
          <p
            className={clsx(
              "mt-4 text-sm bg-green-100 rounded-md text-center p-1",
              statusType === "success" ? "text-green-500" : "text-pink-500"
            )}
          >
            {statusMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default CopyUrlButton;
