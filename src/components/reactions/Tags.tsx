import { FC } from "react";
import { Link } from "react-router";

type TagsProps = {
  tags: string[];
};

const Tags: FC<TagsProps> = ({ tags }) => {
  return (
    <ul className="flex gap-2 flex-wrap">
      {tags.map((tag, index) => {
        return (
          <li key={index}>
            <Link
              to={`/tips/tags/${tag}`}
              className="bg-slate-200 py-1 px-2 text-sm rounded-md text-gray-500"
            >
              {`#${tag}`}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
