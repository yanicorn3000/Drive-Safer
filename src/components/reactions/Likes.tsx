import { ButtonHTMLAttributes, useState } from "react";
import clsx from "clsx";
import styles from "./Reactions.module.scss";

type ClassNameProp = {
  className?: string;
};

type ReactionProps = {
  entityType: "tip" | "comment";
  entityId: number;
} & ClassNameProp &
  ButtonHTMLAttributes<HTMLButtonElement>;

const db = {
  "tip:1": 10,
  "tip:2": 12,
  "tip:3": 9,
  "tip:4": 17,
  "comment:1": 10,
  "comment:2": 1,
  "comment:3": 30,
} as Record<string, number>;

const Likes = ({
  className,
  disabled,
  entityId,
  entityType,
  ...rest
}: ReactionProps) => {
  const [likes, setLikes] = useState(db[`${entityType}:${entityId}`]);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikes((prevState) => prevState + (liked ? -1 : 1));
    setLiked((prevState) => !prevState);
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => {
          handleLike();
        }}
        className={clsx(
          styles.like,
          "flex bg-transparent gap-1 border-none focus:outline-none focus:ring-0 p-0",
          liked ? "text-pink-400" : "text-slate-400",
          className
        )}
        disabled={disabled}
        {...rest}
      ></button>
      <span
        className={clsx("text-sm", liked ? "text-pink-400" : "text-slate-400")}
      >
        {likes}
      </span>
    </div>
  );
};
export default Likes;
