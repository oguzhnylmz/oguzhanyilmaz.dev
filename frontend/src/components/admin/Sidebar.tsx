import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-zinc-800 bg-zinc-950">
      <div className="flex h-20 items-center border-b border-zinc-800 px-6">
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-white">
            DevFolio
          </h1>

          <p className="text-xs text-zinc-500">
            Admin Panel
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `flex items-center rounded-lg px-4 py-3 text-sm transition ${
              isActive
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/projects"
          className={({ isActive }) =>
            `flex items-center rounded-lg px-4 py-3 text-sm transition ${
              isActive
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
            }`
          }
        >
          Projects
        </NavLink>
      </nav>

      <div className="border-t border-zinc-800 p-4">
        <p className="px-4 text-xs text-zinc-600">
          DevFolio Admin
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;