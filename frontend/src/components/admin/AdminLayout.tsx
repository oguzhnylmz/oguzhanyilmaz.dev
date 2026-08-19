import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import AdminHeader from "./AdminHeader";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Sidebar />

      <div className="pl-64">
        <AdminHeader title="Dashboard" />

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;