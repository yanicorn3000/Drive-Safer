import styles from "./CommentsList.module.scss";
import Likes from "../reactions/Likes";
import { Comment } from "./AddCommentsForm";
import { FC } from "react";

type CommentsListProps = {
  comments: Comment[];
};
const CommentsList: FC<CommentsListProps> = ({ comments }) => {
  return (
    <section className="w-full flex flex-col gap-5">
      <h5 className="text-xl font-bold tracking-tight text-gray-900">
        Komentarze
      </h5>
      <ul className="w-full divide-y divide-gray-200">
        {comments.map((comment) => {
          return (
            <li key={comment.id} className="p-5 sm:pb-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 self-start flex justify-center items-center w-10 h-10  bg-green-100 rounded-full">
                  <span className={styles.user}></span>
                </div>
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {comment.name}
                  </p>

                  <p className="text-sm text-gray-500">{comment.message}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">
                      {comment.date}
                    </span>
                    <div className="flex gap-1 text-xs">
                      <Likes entityType="comment" entityId={comment.id} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CommentsList;
