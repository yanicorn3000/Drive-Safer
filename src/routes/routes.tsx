import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
import SingleTip from "./pages/SingleTip";
import List from "./pages/List";
import TipByTag from "./pages/TipByTag";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={IndexPage} />
      <Route path="/tip/:id" Component={SingleTip} />
      <Route path="/tips" Component={List} />
      <Route path="/tips/tags/:tag" Component={TipByTag} />
    </Routes>
  );
};

export default RoutesComponent;
