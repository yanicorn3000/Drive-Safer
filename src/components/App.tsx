import { BrowserRouter } from "react-router-dom";
import Layout from "../routes/layout.tsx";
import Routes from "../routes/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../utils/api";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
