import api from "./api";

export interface DashboardStats {
  total_projects: number;
  featured_projects: number;
  active_projects: number;
  draft_projects: number;
  archived_projects: number;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const response = await api.get<DashboardStats>(
    "/dashboard/stats"
  );

  return response.data;
}