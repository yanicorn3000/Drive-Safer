import { useState } from "react";
import { FC } from "react";
import Button from "../../components/button/Button";
import AddCommentsForm from "../../components/comments/AddCommentsForm";
import QuizModal from "./modal/QuizModal";
import Quiz from "../../components/quiz/Quiz";
import { useQuery } from "@tanstack/react-query";
import { getTipById } from "../../utils/tips";
import { useParams } from "react-router";
import Likes from "../../components/reactions/Likes";
import styles from "./SingleTip.module.scss";
import Tags from "../../components/reactions/Tags";

const SingleTip: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const params = useParams();

  const tip = useQuery({
    queryKey: ["singleTip", params.id],
    queryFn: () => getTipById(Number(params.id)),
  });

  return tip.data ? (
    <section className="mx-auto mt-10 max-w-5xl flex flex-col justify-center gap-7 items-center">
      <h2 className="text-3xl font-bold border-b-2 border-green-300 text-center">
        {tip.data.title}
      </h2>
      <div className="flex flex-col justify-between overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          src={tip.data.img}
          alt={tip.data.alt}
          className="w-full h-60 object-cover"
        />
        <div className="p-6 flex flex-col gap-3 items-start justify-between">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {tip.data.description}
          </p>
          <Tags />
          <div className="flex justify-end gap-5 w-full items-center">
            <Likes entityType="tip" entityId={tip.data.id} />
            <button className={styles.share}></button>

            <Button variant="secondary" onClick={() => setModalOpen(true)}>
              Trening
            </Button>
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
      <AddCommentsForm />
    </section>
  ) : null;
};

export default SingleTip;
