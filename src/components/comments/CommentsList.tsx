import styles from "./CommentsList.module.scss";

const comments = [
  {
    name: "Alice",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure hic, rem voluptas adipisci quasi asperiores vitae architecto accusantium non porro inventore quod delectus nulla voluptatum fugiat minima sapiente laudantium repudiandae! Modi molestias labore provident autem enim dolor assumenda natus fugit, animi suscipit! Quidem pariatur ea libero assumenda hic consequuntur ",
  },

  {
    name: "Mike",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure hic ",
  },

  {
    name: "Bob",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At iure hic, rem voluptas adipisci quasi asperiores vitae architecto accusantium non porro inventore quod delectus nulla voluptatum fugiat",
  },
];

const CommentsList = () => {
  return (
    <section className="w-full flex flex-col gap-5">
      <h5 className="text-xl font-bold tracking-tight text-gray-900">
        Komentarze
      </h5>
      <ul className="w-full divide-y divide-gray-200">
        {comments.map((comment) => {
          return (
            <li className="p-5 sm:pb-6">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-shrink-0 self-start flex justify-center items-center w-10 h-10  bg-green-100 rounded-full">
                  <span className={styles.user}></span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {comment.name}
                  </p>
                  <p className="text-sm text-gray-500">{comment.message}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default CommentsList;
