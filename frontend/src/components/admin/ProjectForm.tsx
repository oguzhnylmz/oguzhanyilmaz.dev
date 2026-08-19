import { useState } from "react";
import type { FormEvent } from "react";

import api from "../../services/api";
import type { Project } from "../../types/Project";

interface ProjectFormProps {
  project?: Project;
  onSuccess: () => void;
  onCancel: () => void;
}

function ProjectForm({
  project,
  onSuccess,
  onCancel,
}: ProjectFormProps) {
  const isEditing = Boolean(project);

  const [title, setTitle] = useState(project?.title ?? "");
  const [description, setDescription] = useState(
    project?.description ?? ""
  );

  const [stack, setStack] = useState(
    project?.stack?.join(", ") ?? ""
  );

  const [github, setGithub] = useState(
    project?.github ?? ""
  );

  const [demo, setDemo] = useState(
    project?.demo ?? ""
  );

  const [featured, setFeatured] = useState(
    project?.featured ?? false
  );

  const [image, setImage] = useState(
    project?.image ?? ""
  );

  const [year, setYear] = useState(
    project?.year ?? String(new Date().getFullYear())
  );

  const [status, setStatus] = useState(
    project?.status ?? "active"
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const projectData = {
        title,
        description,

        stack: stack
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        github: github || null,
        demo: demo || null,
        featured,
        image: image || null,
        year: String(year),
        status,
      };

      if (isEditing && project) {
        await api.put(
          `/projects/${project.id}`,
          projectData
        );
      } else {
        await api.post("/projects", projectData);
      }

      onSuccess();
    } catch (error) {
      console.error(error);
      setError(
        isEditing
          ? "Project could not be updated."
          : "Project could not be created."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-full flex-col"
    >
      <div className="flex-1 space-y-5 overflow-y-auto p-6">
        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-400"
            placeholder="My awesome project"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Description
          </label>

          <textarea
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            required
            rows={4}
            className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-400"
            placeholder="Describe your project..."
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Stack
          </label>

          <input
            type="text"
            value={stack}
            onChange={(event) =>
              setStack(event.target.value)
            }
            required
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-400"
            placeholder="React, TypeScript, FastAPI"
          />

          <p className="mt-1 text-xs text-zinc-600">
            Separate technologies with commas.
          </p>
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            GitHub URL
          </label>

          <input
            type="url"
            value={github}
            onChange={(event) =>
              setGithub(event.target.value)
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-400"
            placeholder="https://github.com/..."
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Demo URL
          </label>

          <input
            type="url"
            value={demo}
            onChange={(event) =>
              setDemo(event.target.value)
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-400"
            placeholder="https://..."
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-zinc-300">
            Image URL
          </label>

          <input
            type="url"
            value={image}
            onChange={(event) =>
              setImage(event.target.value)
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-400"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Year
            </label>

            <input
              type="number"
              value={year}
              onChange={(event) =>
                setYear(event.target.value)
              }
              required
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Status
            </label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(event.target.value)
              }
              className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-zinc-400"
            >
              <option value="active">
                Active
              </option>

              <option value="draft">
                Draft
              </option>

              <option value="archived">
                Archived
              </option>
            </select>
          </div>
        </div>

        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={featured}
            onChange={(event) =>
              setFeatured(event.target.checked)
            }
            className="h-4 w-4 rounded border-zinc-700 bg-zinc-950"
          />

          <span className="text-sm text-zinc-300">
            Featured project
          </span>
        </label>

        {error && (
          <p className="rounded-lg border border-red-900/50 bg-red-950/20 p-3 text-sm text-red-400">
            {error}
          </p>
        )}
      </div>

      <div className="flex gap-3 border-t border-zinc-800 p-6">
        <button
          type="button"
          onClick={onCancel}
          disabled={loading}
          className="flex-1 rounded-lg border border-zinc-700 px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-900"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={loading}
          className="flex-1 rounded-lg bg-white px-4 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? isEditing
              ? "Saving..."
              : "Creating..."
            : isEditing
              ? "Save Changes"
              : "Create Project"}
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;