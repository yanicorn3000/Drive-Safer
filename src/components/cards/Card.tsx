import { FC } from "react";
import Button from "../button/Button";
import styles from "./Card.module.scss";
import { Link } from "react-router";

export type TCard = {
  title: string;
  img: string;
  alt: string;
  description: string;
  id: number;
};

const Card: FC<TCard> = ({ title, img, alt, description, id }) => {
  const href = `/tip/${id}`;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="rounded-t-lg overflow-hidden">
        <img className="object-cover h-40 w-full" src={img} alt={alt} />
      </div>
      <div className="p-5">
        <a href={href}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span>Heart</span>
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
