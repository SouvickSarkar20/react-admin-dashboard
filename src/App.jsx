import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import OverviewPage from "./pages/OverviewPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-auto">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />

      <div className="flex-1 relative z-10">
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
