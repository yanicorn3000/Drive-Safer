import { BrowserRouter } from "react-router-dom";
import Layout from "../routes/layout.tsx";
import Routes from "../routes/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../utils/api";
import { AppProvider } from "../utils/appContext.tsx";

const App = () => {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </AppProvider>
  );
};

export default App;
