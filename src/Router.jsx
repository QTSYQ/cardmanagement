import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentCardCreatePage from "./pages/PaymentCardCreatePage";
import PaymentMainPage from "./pages/PaymentMainPage";
import PaymentManegementPage from "./pages/PaymentManagementPage";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentMainPage></PaymentMainPage>} />
        <Route
          path="/create"
          element={<PaymentCardCreatePage></PaymentCardCreatePage>}
        />
        <Route
          path="/management"
          element={<PaymentManegementPage></PaymentManegementPage>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
