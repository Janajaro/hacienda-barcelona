import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Tickets from "./pages/Tickets/Tickets";

import "./variables.css";
import "./App.css";
import BandsSection from "./components/BandsSection/BandsSection";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/cs" replace />} />

        <Route path="/:lang" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="lineup" element={<BandsSection />} />
          <Route path="tickets" element={<Tickets />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />  

      </Routes>
    </BrowserRouter>
  );
}

export default App;