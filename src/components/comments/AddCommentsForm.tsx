import Button from "../button/Button";
import { useState, FormEvent, forwardRef, ForwardedRef } from "react";
import CommentsList from "./CommentsList";
import { Comment } from "../../utils/types";
import { useAddComment } from "../../utils/api";

type AddCommentsFormProps = {
  comments: Comment[];
  entityUUID: string;
};

const AddCommentsForm = forwardRef<HTMLDivElement, AddCommentsFormProps>(
  (
    { comments: propsComments, entityUUID },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { mutateAsync: addComment } = useAddComment();
    const [newComment, setNewComment] = useState<string>("");

    const handleAddComment = (e: FormEvent) => {
      e.preventDefault();
      if (newComment.trim()) {
        addComment({
          entityUUID,
          username: "",
          message: newComment,
        }).then(() => {
          setNewComment("");
        });
      }
    };

    return (
      <>
        <div className="w-full flex justify-center">
          <form
            className="w-3/4 flex flex-col gap-4 mt-8"
            onSubmit={handleAddComment}
          >
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-semibold text-gray-900"
            >
              Masz pytanie?
            </label>
            <textarea
              id="message"
              className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-violet-500 focus:border-violet-500 "
              placeholder="Napisz wiadomość..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            ></textarea>
            <Button variant="primary" type="submit" className="self-end">
              Wyślij wiadomość
            </Button>
          </form>
        </div>
        <div ref={ref} className="w-full">
          <CommentsList comments={propsComments} />
        </div>
      </>
    );
  }
);
export default AddCommentsForm;
