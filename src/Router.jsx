import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaymentCardCreatePage from "./Layouts/PaymentCardCreateContainer/PaymentCardCreateContainer";
import PaymentMainPage from "./Layouts/PaymentMainContainer/PaymentMainContainer";
import PaymentManagementPage from "./Layouts/PaymentManagementContainer/PaymentManagementContainer";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentMainPage />} />
        <Route path="/create" element={<PaymentCardCreatePage />} />
        <Route path="/management" element={<PaymentManagementPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
