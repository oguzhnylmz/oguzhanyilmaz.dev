import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getDashboardStats,
  type DashboardStats,
} from "../../services/dashboardService";

import { getProjects } from "../../services/projectService";
import type { Project } from "../../types/Project";

function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadDashboard() {
    try {
      setError("");

      const [statsData, projectsData] = await Promise.all([
        getDashboardStats(),
        getProjects(),
      ]);

      setStats(statsData);
      setProjects(projectsData.slice(0, 5));
    } catch (error) {
      console.error(error);
      setError("Dashboard data could not be loaded.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-zinc-500">
          Welcome back.
        </p>

        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-white">
          Overview
        </h1>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 rounded-2xl border border-red-900/50 bg-red-950/20 p-4">
          <p className="text-sm text-red-400">
            {error}
          </p>
        </div>
      )}

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Total Projects */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="text-sm text-zinc-500">
            Total Projects
          </p>

          <p className="mt-3 text-3xl font-semibold text-white">
            {loading ? "—" : stats?.total_projects ?? 0}
          </p>
        </div>

        {/* Featured */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="text-sm text-zinc-500">
            Featured
          </p>

          <p className="mt-3 text-3xl font-semibold text-white">
            {loading ? "—" : stats?.featured_projects ?? 0}
          </p>
        </div>

        {/* Active */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="text-sm text-zinc-500">
            Active
          </p>

          <p className="mt-3 text-3xl font-semibold text-white">
            {loading ? "—" : stats?.active_projects ?? 0}
          </p>
        </div>
      </div>

      {/* Project Status */}
      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
        <h2 className="text-lg font-medium text-white">
          Project Status
        </h2>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {/* Active */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
            <p className="text-sm text-zinc-500">
              Active
            </p>

            <p className="mt-2 text-2xl font-semibold text-white">
              {loading ? "—" : stats?.active_projects ?? 0}
            </p>
          </div>

          {/* Draft */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
            <p className="text-sm text-zinc-500">
              Draft
            </p>

            <p className="mt-2 text-2xl font-semibold text-white">
              {loading ? "—" : stats?.draft_projects ?? 0}
            </p>
          </div>

          {/* Archived */}
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
            <p className="text-sm text-zinc-500">
              Archived
            </p>

            <p className="mt-2 text-2xl font-semibold text-white">
              {loading ? "—" : stats?.archived_projects ?? 0}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Projects */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 p-6">
          <div>
            <h2 className="text-lg font-medium text-white">
              Recent Projects
            </h2>

            <p className="mt-1 text-sm text-zinc-500">
              Your latest portfolio projects.
            </p>
          </div>

          <Link
            to="/admin/projects"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            View all →
          </Link>
        </div>

        {/* Loading */}
        {loading && (
          <div className="p-6">
            <p className="text-sm text-zinc-500">
              Loading projects...
            </p>
          </div>
        )}

        {/* Empty */}
        {!loading && projects.length === 0 && (
          <div className="p-6">
            <p className="text-sm text-zinc-500">
              No projects found.
            </p>
          </div>
        )}

        {/* Projects */}
        {!loading && projects.length > 0 && (
          <div className="divide-y divide-zinc-800">
            {projects.map((project) => (
              <div
                key={project.id}
                className="
                  flex flex-col gap-4 p-6
                  transition hover:bg-zinc-900
                  sm:flex-row sm:items-center sm:justify-between
                "
              >
                {/* Project Info */}
                <div className="min-w-0">
                  <p className="truncate font-medium text-white">
                    {project.title}
                  </p>

                  <p className="mt-1 truncate text-sm text-zinc-500">
                    {project.description}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex shrink-0 items-center gap-3">
                  {project.featured && (
                    <span
                      className="
                        rounded-full
                        border border-emerald-400/20
                        bg-emerald-400/5
                        px-3 py-1
                        text-xs
                        text-emerald-400
                      "
                    >
                      Featured
                    </span>
                  )}

                  <span
                    className="
                      rounded-full
                      border border-zinc-700
                      px-3 py-1
                      text-xs
                      text-zinc-300
                    "
                  >
                    {project.status}
                  </span>

                  <span className="text-sm text-zinc-600">
                    {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;