import { ButtonHTMLAttributes, useMemo } from "react";
import clsx from "clsx";
import styles from "./Reactions.module.scss";
import { EntityType } from "../../utils/types";
import { FC } from "react";
import { useAddLike, useRemoveLike } from "../../utils/api";

type ReactionProps = {
  entityType: EntityType;
  entityUUID: string;
  likes: string[];
} & ButtonHTMLAttributes<HTMLButtonElement>;

const userUUID = "test";

const Likes: FC<ReactionProps> = ({
  disabled,
  entityUUID,
  entityType,
  likes,
  ...rest
}) => {
  const { mutateAsync: addLike } = useAddLike();
  const { mutateAsync: removeLike } = useRemoveLike();

  const liked = useMemo(() => {
    return !!likes.find((usernameUUID) => usernameUUID === userUUID);
  }, [likes, userUUID]);

  const handleLike = () => {
    if (!liked) {
      addLike({
        usernameUUID: userUUID,
        entityUUID,
        entityType,
      });
    } else {
      removeLike({
        usernameUUID: userUUID,
        entityUUID,
        entityType,
      });
    }
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
          liked ? "text-pink-400" : "text-slate-400"
        )}
        disabled={disabled}
        {...rest}
      ></button>
      <span
        className={clsx("text-sm", liked ? "text-pink-400" : "text-slate-400")}
      >
        {likes.length}
      </span>
    </div>
  );
};
export default Likes;
