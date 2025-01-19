import { Routes, Route, Navigate } from "react-router-dom";
import IndexPage from "./pages";
import SingleTip from "./pages/SingleTip";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={IndexPage} />
      {/* <Route
        path="/login"
        Component={
          user.isLoggedIn ? () => <Navigate to="/pulpit" /> : LoginPage
        }
      />
      <Route
        path="/register"
        Component={
          user.isLoggedIn ? () => <Navigate to="/pulpit" /> : RegisterPage
        }
      /> */}
      <Route path="/tip/:id" Component={SingleTip} />
      {/* <Route path="/pulpit" Component={UserPulpit} />
      <Route path="/product/:id" Component={ProductItem} />
      <Route path="/product/:id/similar" Component={SimilarProducts} />
      <Route path="/user" Component={UserData} />
      <Route path="/user/products" Component={UserProducts} /> */}
    </Routes>
  );
};

export default RoutesComponent;
