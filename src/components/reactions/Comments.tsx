import styles from "./Reactions.module.scss";
import { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { Comment } from "../../utils/types";

type CommentsProps = {
  disabled?: boolean;
  comments: Comment[];
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Comments: FC<CommentsProps> = ({
  disabled = false,
  comments,
  ...rest
}) => {
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => {
          console.log("reply");
        }}
        className={clsx(
          styles.reply,
          "bg-transparent border-none focus:outline-none p-0"
        )}
        disabled={disabled}
        {...rest}
      ></button>
      <span className="text-sm text-slate-400">{comments.length}</span>
    </div>
  );
};

export default Comments;
