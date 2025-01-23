import Button from "../button/Button";
import {
  useState,
  useEffect,
  FormEvent,
  forwardRef,
  ForwardedRef,
} from "react";
import CommentsList from "./CommentsList";

export type Comment = {
  id: number;
  message: string;
  name?: string;
  date: string;
  likes: number;
  isLiked: boolean;
};

type AddCommentsFormProps = {};

const AddCommentsForm = forwardRef<HTMLDivElement, AddCommentsFormProps>(
  (_, ref: ForwardedRef<HTMLDivElement>) => {
    const [newComment, setNewComment] = useState<string>("");
    const [comments, setComments] = useState<Comment[]>([]);
    const [currentDate, setCurrentDate] = useState<string>("");

    useEffect(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString("pl-PL", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      setCurrentDate(formattedDate);
    }, []);

    const handleAddComment = (e: FormEvent) => {
      e.preventDefault();
      if (newComment.trim()) {
        const newCommentObject: Comment = {
          id: comments.length + 1,
          message: newComment,
          date: currentDate,
          likes: 0,
          isLiked: false,
        };
        setComments([newCommentObject, ...comments]);
        setNewComment("");
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
          <CommentsList comments={comments} />
        </div>
      </>
    );
  }
);
export default AddCommentsForm;
