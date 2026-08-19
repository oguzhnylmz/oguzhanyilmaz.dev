import { useEffect, useState } from "react";

import { getProjects } from "../../services/projectService";
import type { Project } from "../../types/Project";

import ProjectForm from "../../components/admin/ProjectForm";
import api from "../../services/api";

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showCreateForm, setShowCreateForm] =
    useState(false);

  const [editingProject, setEditingProject] =
    useState<Project | null>(null);
  const [deletingProject, setDeletingProject] =
  useState<Project | null>(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

  async function loadProjects() {
    try {
      setError("");

      const data = await getProjects();

      setProjects(data);
    } catch (error) {
      console.error(error);
      setError("Projects could not be loaded.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  function handleCreateSuccess() {
    setShowCreateForm(false);
    loadProjects();
  }

  function handleEditSuccess() {
    setEditingProject(null);
    loadProjects();
  }
  async function handleDelete() {
    if (!deletingProject) {
        return;
    }

    try {
        setDeleteLoading(true);

        await api.delete(`/projects/${deletingProject.id}`);

        setDeletingProject(null);

        await loadProjects();
    } catch (error) {
        console.error(error);
        setError("Project could not be deleted.");
    } finally {
        setDeleteLoading(false);
    }
}
  if (loading) {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
        <p className="text-sm text-zinc-500">
          Loading projects...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-900/50 bg-red-950/20 p-6">
        <p className="text-sm text-red-400">
          {error}
        </p>
      </div>
    );
  }
  

  return (
    <>
      <div>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500">
              Portfolio management
            </p>

            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-white">
              Projects
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setShowCreateForm(true)}
            className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            + Add Project
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-zinc-800 bg-zinc-900">
                <tr>
                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Project
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Status
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Featured
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-zinc-800">
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="transition hover:bg-zinc-900"
                  >
                    <td className="px-6 py-5">
                      <div>
                        <p className="font-medium text-white">
                          {project.title}
                        </p>

                        <p className="mt-1 max-w-md truncate text-sm text-zinc-500">
                          {project.description}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
                        {project.status}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      {project.featured ? (
                        <span className="text-sm text-white">
                          Yes
                        </span>
                      ) : (
                        <span className="text-sm text-zinc-600">
                          No
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-5 text-right">
                      <button
                        type="button"
                        onClick={() =>
                          setEditingProject(project)
                        }
                        className="text-sm text-zinc-400 transition hover:text-white"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => setDeletingProject(project)}
                        className="ml-4 text-sm text-red-400 transition hover:text-red-300"
                        >
                        Delete
                        </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {projects.length === 0 && (
          <div className="mt-4 rounded-2xl border border-zinc-800 p-8 text-center">
            <p className="text-sm text-zinc-500">
              No projects found.
            </p>
          </div>
        )}
      </div>

      {/* CREATE DRAWER */}
      {showCreateForm && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowCreateForm(false)}
          />

          <div className="absolute inset-y-0 right-0 flex w-full max-w-xl flex-col border-l border-zinc-800 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
              <div>
                <p className="text-xs text-zinc-500">
                  Portfolio
                </p>

                <h2 className="mt-1 text-xl font-semibold text-white">
                  Add Project
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowCreateForm(false)
                }
                className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="min-h-0 flex-1">
              <ProjectForm
                onSuccess={handleCreateSuccess}
                onCancel={() =>
                  setShowCreateForm(false)
                }
              />
            </div>
          </div>
        </div>
      )}

      {/* EDIT DRAWER */}
      {editingProject && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() =>
              setEditingProject(null)
            }
          />

          <div className="absolute inset-y-0 right-0 flex w-full max-w-xl flex-col border-l border-zinc-800 bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">
              <div>
                <p className="text-xs text-zinc-500">
                  Portfolio
                </p>

                <h2 className="mt-1 text-xl font-semibold text-white">
                  Edit Project
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setEditingProject(null)
                }
                className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="min-h-0 flex-1">
              <ProjectForm
                project={editingProject}
                onSuccess={handleEditSuccess}
                onCancel={() =>
                  setEditingProject(null)
                }
              />
            </div>
          </div>
        </div>
      )}
            {/* DELETE MODAL */}
        {deletingProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => {
                if (!deleteLoading) {
                setDeletingProject(null);
                }
            }}
            />

            <div className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl">
            <div>
                <p className="text-xs uppercase tracking-wider text-red-400">
                Delete project
                </p>

                <h2 className="mt-2 text-xl font-semibold text-white">
                Are you sure?
                </h2>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                You are about to delete{" "}
                <span className="font-medium text-zinc-300">
                    {deletingProject.title}
                </span>
                .
                </p>

                <p className="mt-2 text-sm text-zinc-600">
                This action cannot be undone.
                </p>
            </div>

            <div className="mt-6 flex justify-end gap-3">
                <button
                type="button"
                disabled={deleteLoading}
                onClick={() => setDeletingProject(null)}
                className="rounded-lg border border-zinc-700 px-4 py-2.5 text-sm text-zinc-300 transition hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                Cancel
                </button>

                <button
                type="button"
                disabled={deleteLoading}
                onClick={handleDelete}
                className="rounded-lg bg-red-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                {deleteLoading ? "Deleting..." : "Delete Project"}
                </button>
            </div>
            </div>
        </div>
        )}
    </>
  );
}

export default Projects;