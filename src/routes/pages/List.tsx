import CardList from "../../components/cards/CardList";
import { FC } from "react";
import { useTips } from "../../utils/api";

const List: FC = () => {
  const { data, error, isLoading } = useTips();
  if (isLoading || data === undefined) {
    return <div>Ładowanie tipów...</div>;
  }

  if (error) {
    return <div>Błąd podczas pobierania tipów: {error.message}</div>;
  }

  return <CardList tips={data} />;
};

export default List;
