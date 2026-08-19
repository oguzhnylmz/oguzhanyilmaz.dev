import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Projects from "./pages/admin/Projects";

import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;