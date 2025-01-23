import styles from "./Reactions.module.scss";
import { FC, ButtonHTMLAttributes } from "react";

type CommentsProps = {
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Comments: FC<CommentsProps> = ({ disabled = false, ...rest }) => {
  return (
    <button
      onClick={() => {
        console.log("reply");
      }}
      className="flex bg-transparent gap-1 border-none focus:outline-none"
      disabled={disabled}
      {...rest}
    >
      <span className={styles.reply}></span>
    </button>
  );
};

export default Comments;
