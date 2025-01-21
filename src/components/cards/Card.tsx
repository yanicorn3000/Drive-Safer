import { FC } from "react";
import Button from "../button/Button";
import styles from "./Card.module.scss";
import { Link } from "react-router";
import { Tip } from "../../utils/tips";
import Likes from "../reactions/Likes";
import Tags from "../reactions/Tags";

const Card: FC<Tip> = ({ title, img, alt, description, id }) => {
  const href = `/tip/${id}`;

  return (
    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow flex flex-col">
      <div className="rounded-t-lg overflow-hidden">
        <img className="object-cover h-40 w-full" src={img} alt={alt} />
      </div>
      <div className="flex flex-col p-5 justify-end flex-grow gap-4">
        <a href={href}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p
          className={`line-clamp-5 font-normal text-gray-700 dark:text-gray-400 flex-grow max-h-[7.5rem] mb-auto`}
        >
          {description}
        </p>
        <Tags />
        <div className="flex justify-between items-center mt-3">
          <Likes entityType="tip" entityId={id} disabled />
          <span>Comments</span>
          <Link to={href}>
            <Button variant="primary">
              Więcej <span className={styles.arrow}></span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
