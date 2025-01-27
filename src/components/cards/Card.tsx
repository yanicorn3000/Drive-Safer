import { FC } from "react";
import Button from "../button/Button";
import styles from "./Card.module.scss";
import { Link } from "react-router";
import Likes from "../reactions/Likes";
import Tags from "../reactions/Tags";
import Comments from "../reactions/Comments";
import { Tip } from "../../utils/types";

const Card: FC<Tip> = ({
  title,
  img,
  alt,
  description,
  uuid,
  tags,
  likes,
  comments,
}) => {
  const href = `/tip/${uuid}`;

  return (
    <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow flex flex-col">
      <div className="rounded-t-lg overflow-hidden">
        <img className="object-cover h-40 w-full" src={img} alt={alt} />
      </div>
      <div className="flex flex-col p-5 justify-end flex-grow gap-4">
        <a href={href}>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p
          className={`line-clamp-5 font-normal text-gray-700 flex-grow max-h-[7.5rem] mb-auto`}
        >
          {description}
        </p>
        <Tags tags={tags} />
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-4">
            <Likes entityType="tip" entityUUID={uuid} disabled likes={likes} />
            <Comments disabled comments={comments} />
          </div>

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
