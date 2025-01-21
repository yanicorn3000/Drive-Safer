const tags = ["testtg", "testtag", "testtag"];
const Tags = () => {
  return (
    <ul className="flex gap-1">
      {tags.map((tag, index) => {
        return (
          <li key={index}>
            <span className="bg-slate-200 py-1 px-2 text-sm rounded-md text-gray-500">
              {`#${tag}`}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Tags;
