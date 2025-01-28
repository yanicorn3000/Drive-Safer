import { FC, useState, useRef } from "react";
import Button from "../../components/button/Button";
import AddCommentsForm from "../../components/comments/AddCommentsForm";
import QuizModal from "./modal/QuizModal";
import Quiz from "../../components/quiz/Quiz";
import { useParams, Link } from "react-router";
import Likes from "../../components/reactions/Likes";
import Tags from "../../components/reactions/Tags";
import Comments from "../../components/reactions/Comments";
import CopyUrlButton from "../../components/reactions/CopyUrlButton";
import { useTip } from "../../utils/api";

const SingleTip: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const params = useParams();
  const { data } = useTip(params.id ?? "");

  const commentSectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (commentSectionRef.current) {
      commentSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return data ? (
    <section className="mx-auto mt-10 max-w-5xl flex flex-col justify-center gap-7 items-center">
      <h2 className="text-3xl font-bold border-b-2 border-green-300 text-center">
        {data.title}
      </h2>
      <div className="flex flex-col justify-between overflow-hidden bg-white border border-gray-200 rounded-lg shadow">
        <img
          src={data.img}
          alt={data.alt}
          className="w-full h-60 object-cover"
        />
        <div className="p-6 flex flex-col gap-3 items-start justify-between">
          <p className="font-normal text-gray-700">{data.description}</p>
          <Tags tags={data.tags} />
          <div className="flex justify-between w-full items-cente mt-7">
            <Link to="/">
              <Button variant="primary">Powrót na główną</Button>
            </Link>

            <div className="flex items-center gap-5">
              <Likes
                entityType="tip"
                entityUUID={data.uuid}
                likes={data.likes}
              />
              <Comments comments={data.comments} onClick={handleScroll} />
              <CopyUrlButton />
              <Button variant="secondary" onClick={() => setModalOpen(true)}>
                Trening
              </Button>
            </div>
          </div>
        </div>
      </div>
      <QuizModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Trening"
      >
        <Quiz onClose={() => setModalOpen(false)} />
      </QuizModal>
      <AddCommentsForm
        ref={commentSectionRef}
        comments={data.comments}
        entityUUID={data.uuid}
      />
    </section>
  ) : null;
};

export default SingleTip;
