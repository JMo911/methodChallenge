import * as React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { PayoutPage } from "./components/PayoutPage";
import { ReportingPage } from "./components/ReportingPage";
import { NotificationsPage } from "./components/NotificationsPage";

import ResponsiveAppBar from "./components/AppBar";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/payouts" element={<PayoutPage />} />
        <Route path="/reporting" element={<ReportingPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route exact path="/" element={<Navigate replace to="/payouts" />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
