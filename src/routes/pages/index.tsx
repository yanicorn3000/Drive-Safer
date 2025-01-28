import TipOfDay from "../../components/tip/TipOfDay";
import CardList from "../../components/cards/CardList";
import { useTips, useTipOfTheDay } from "../../utils/api";

const IndexPage = () => {
  const { data } = useTips(3);
  const { data: dataTipOfTheDay } = useTipOfTheDay();

  if (!data || !dataTipOfTheDay) return null;

  return (
    <>
      {dataTipOfTheDay ? <TipOfDay {...dataTipOfTheDay} /> : null}
      {data ? <CardList tips={data} /> : null}
    </>
  );
};

export default IndexPage;
