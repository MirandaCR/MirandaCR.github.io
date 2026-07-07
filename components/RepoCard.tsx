import { Brain, TrendingUp, Atom, Map } from "lucide-react";
import type { GithubRepo } from "@/lib/github";
import type { FeaturedRepo } from "@/data/featuredRepos";

const tagIcon = {
  ai: Brain,
  trading: TrendingUp,
  quantum: Atom,
  data: Map,
};

const tagStyle: Record<FeaturedRepo["tag"], string> = {
  ai: "bg-accent-green/10 text-accent-green",
  trading: "bg-accent-orange/10 text-accent-orange",
  quantum: "bg-accent-purple/10 text-accent-purple",
  data: "bg-accent-blue/10 text-accent-blue",
};

const tagLabel: Record<FeaturedRepo["tag"], { en: string; es: string }> = {
  ai: { en: "AI", es: "IA" },
  trading: { en: "Trading", es: "Trading" },
  quantum: { en: "Quantum", es: "Quantum" },
  data: { en: "Data", es: "Data" },
};

export default function RepoCard({
  repo,
  description,
  tag,
  lang,
}: {
  repo: GithubRepo;
  description: string;
  tag: FeaturedRepo["tag"];
  lang: "en" | "es";
}) {
  const TagIcon = tagIcon[tag];

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl bg-surface border border-foreground/10 p-6 transition-all duration-200 hover:border-accent-cyan/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-foreground-bright truncate">
          {repo.name}
        </h3>
        <span
          className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[10px] font-mono uppercase tracking-wide ${tagStyle[tag]}`}
        >
          <TagIcon size={11} />
          {tagLabel[tag][lang]}
        </span>
      </div>
      <p className="text-sm text-foreground/70 mb-4 line-clamp-2 min-h-[2.5rem]">
        {description}
      </p>
      <div className="flex items-center gap-4 font-mono text-xs text-foreground/50">
        {repo.language && <span>{repo.language}</span>}
        <span>★ {repo.stargazers_count}</span>
      </div>
    </a>
  );
}
