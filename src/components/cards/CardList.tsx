import Card from "./Card";
import { Tip } from "../../utils/tips";
import { FC } from "react";

const CardList: FC<{ tips: Tip[] }> = ({ tips }) => {
  return (
    <section className="flex flex-col mx-auto mt-14 max-w-5xl gap-7 items-center">
      <h2 className="text-3xl font-bold border-b-2 border-green-300 text-center">
        Porady
      </h2>
      <div className="grid grid-cols-3 gap-7">
        {tips.map((e) => {
          return (
            <Card
              key={e.id}
              title={e.title}
              img={e.img}
              alt={e.alt}
              description={e.description}
              id={e.id}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CardList;
