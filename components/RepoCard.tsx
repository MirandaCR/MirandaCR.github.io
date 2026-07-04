import type { GithubRepo } from "@/lib/github";

export default function RepoCard({ repo }: { repo: GithubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl bg-surface border border-foreground/10 p-6 hover:border-accent-cyan/50 transition-colors"
    >
      <h3 className="font-semibold text-foreground-bright mb-2 truncate">
        {repo.name}
      </h3>
      <p className="text-sm text-foreground/70 mb-4 line-clamp-2 min-h-[2.5rem]">
        {repo.description || "—"}
      </p>
      <div className="flex items-center gap-4 font-mono text-xs text-foreground/50">
        {repo.language && <span>{repo.language}</span>}
        <span>★ {repo.stargazers_count}</span>
      </div>
    </a>
  );
}
