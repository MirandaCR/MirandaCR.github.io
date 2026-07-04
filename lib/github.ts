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

const MAX_REPOS = 6;

export async function fetchGithubRepos(username: string): Promise<GithubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=12`
  );
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }
  const repos: GithubRepo[] = await res.json();
  return repos.filter((repo) => !repo.fork).slice(0, MAX_REPOS);
}
