export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
}

// Repos that are never "projects" to feature: the portfolio site itself and
// the profile README repo.
const EXCLUDED_REPOS = new Set(["mirandacr.github.io", "mirandacr"]);

export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`
  );
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }
  const repos: GithubRepo[] = await res.json();
  return repos.filter(
    (repo) => !repo.fork && !EXCLUDED_REPOS.has(repo.name.toLowerCase())
  );
}
