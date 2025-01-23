import { FC } from "react";
import Button from "../button/Button";
import styles from "./Tip.module.scss";
import { Link } from "react-router";
import { Tip as TTip } from "../../utils/tips";
import Likes from "../reactions/Likes";
import Tags from "../reactions/Tags";
import Comments from "../reactions/Comments";

const Tip: FC<TTip> = ({ title, id, description, img, alt }) => {
  const href = `/tip/${id}`;
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
          <Tags />

          <div className="flex justify-between w-full items-center">
            <div className="flex gap-2">
              <Likes entityType="tip" entityId={id} disabled={true} />
              <Comments disabled />
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

export default Tip;
