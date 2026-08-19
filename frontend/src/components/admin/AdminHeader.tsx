import { useNavigate } from "react-router-dom";

import { logout } from "../../services/authService";

interface AdminHeaderProps {
  title: string;
}

function AdminHeader({ title }: AdminHeaderProps) {
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/admin/login");
  }

  return (
    <header className="flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8">
      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <button
        onClick={handleLogout}
        className="rounded-lg border border-zinc-700 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
      >
        Logout
      </button>
    </header>
  );
}

export default AdminHeader;