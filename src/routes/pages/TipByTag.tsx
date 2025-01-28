import { useTipTag } from "../../utils/api";
import { useParams, Navigate } from "react-router";
import CardList from "../../components/cards/CardList";

const TipByTag = () => {
  const params = useParams();
  const { data, isLoading } = useTipTag(params.tag ?? "");

  if (isLoading) {
    return null;
  }

  return data ? <CardList tips={data} tag={params.tag} /> : <Navigate to="/" />;
};

export default TipByTag;
