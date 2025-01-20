import { useQuery } from "@tanstack/react-query";
import Tip from "../../components/tip/Tip";
import CardList from "../../components/cards/CardList";
import { getTipOfDay, getTips } from "../../utils/tips";

const IndexPage = () => {
  const tip = useQuery({
    queryKey: ["tipOfDay"],
    queryFn: getTipOfDay,
  });

  const tips = useQuery({
    queryKey: ["tipList"],
    queryFn: () => getTips(true),
  });

  return (
    <>
      {tip.data ? <Tip {...tip.data} /> : null}
      {tips.data ? <CardList tips={tips.data} /> : null}
    </>
  );
};

export default IndexPage;
