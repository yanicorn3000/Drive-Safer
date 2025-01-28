import { FC } from "react";
import Button from "../button/Button";
import styles from "./Tip.module.scss";
import { Link } from "react-router";
import { Tip } from "../../utils/types";
import Likes from "../reactions/Likes";
import Tags from "../reactions/Tags";
import Comments from "../reactions/Comments";

const TipOfDay: FC<Tip> = ({
  title,
  uuid,
  description,
  img,
  alt,
  tags,
  likes,
  comments,
}) => {
  const href = `/tip/${uuid}`;
  return (
    <section className="mx-auto mt-10 max-w-5xl flex flex-col justify-center gap-7 items-center">
      <h2 className="text-3xl font-bold border-b-2 border-green-300">
        Porada Dnia
      </h2>
      <div className="flex flex-row justify-between overflow-hidden bg-white border border-gray-200 rounded-lg shadow">
        <img src={img} alt={alt} className="max-w-lg" />
        <div className="p-6 flex flex-col gap-3 items-start justify-between">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p className="font-normal line-clamp-5 text-gray-700 dark:text-gray-400 ">
            {description}
          </p>
          <Tags tags={tags} />

          <div className="flex justify-between w-full items-center">
            <div className="flex gap-4">
              <Likes
                entityType="tip"
                entityUUID={uuid}
                disabled={true}
                likes={likes}
              />
              <Comments comments={comments} disabled />
            </div>
            <Link to={href}>
              <Button variant="primary">
                Więcej <span className={styles.arrow}></span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TipOfDay;
