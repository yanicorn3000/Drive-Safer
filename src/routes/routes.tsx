import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
import SingleTip from "./pages/SingleTip";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={IndexPage} />
      <Route path="/tip/:id" Component={SingleTip} />
    </Routes>
  );
};

export default RoutesComponent;
