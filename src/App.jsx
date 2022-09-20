import React from "react";
import "./style/reset-style.scss";
import "./style/App.scss";
import { Route, Routes } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
