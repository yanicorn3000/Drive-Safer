import Card, { TCard } from "./Card";

const cards: TCard[] = [
  {
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "src/assets/tip-1.jpg",
    alt: "",
    id: 1,
  },

  {
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "src/assets/tip-2.jpg",
    alt: "",
    id: 2,
  },

  {
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "src/assets/tip-3.jpg",
    alt: "",
    id: 3,
  },
];

const CardList = () => {
  return (
    <section className="flex flex-col mx-auto mt-14 max-w-5xl gap-7 items-center">
      <h2 className="text-3xl font-bold border-b-2 border-green-300 text-center">
        Porady
      </h2>
      <div className="flex gap-5">
        {cards.map((e) => {
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
