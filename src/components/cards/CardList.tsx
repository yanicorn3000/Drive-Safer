import Card from "./Card";
import { FC } from "react";
import { Tip } from "../../utils/types";

const CardList: FC<{ tips: Tip[]; tag?: string }> = ({ tips, tag }) => {
  return (
    <section className="flex flex-col mx-auto mt-14 max-w-5xl gap-7 items-center">
      <h2 className="text-3xl font-bold border-b-2 border-green-300 text-center">
        {tag ? `#${tag}` : "Porady"}
      </h2>
      <div className="grid grid-cols-3 gap-7">
        {tips.map((tip) => {
          return <Card key={tip.uuid} {...tip} />;
        })}
      </div>
    </section>
  );
};

export default CardList;
