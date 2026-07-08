import { Brain, TrendingUp, Atom, Map, ArrowUpRight } from "lucide-react";
import type { GithubRepo } from "@/lib/github";
import type { FeaturedRepo } from "@/data/featuredRepos";
import { GithubIcon } from "@/components/icons";

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

const copy = {
  live: { en: "Live", es: "En vivo" },
  viewLiveAnalysis: { en: "View live analysis →", es: "Ver análisis en vivo →" },
  source: { en: "Source", es: "Código" },
};

export default function RepoCard({
  repo,
  description,
  tag,
  demoUrl,
  lang,
}: {
  repo: GithubRepo;
  description: string;
  tag: FeaturedRepo["tag"];
  demoUrl?: string;
  lang: "en" | "es";
}) {
  const TagIcon = tagIcon[tag];

  const header = (
    <div className="flex items-start justify-between gap-3 mb-2">
      <h3 className="font-semibold text-foreground-bright truncate">
        {repo.name}
      </h3>
      <div className="flex shrink-0 items-center gap-1.5">
        {demoUrl && (
          <span className="flex items-center gap-1 rounded-full bg-accent-cyan/10 px-2 py-1 text-[10px] font-mono uppercase tracking-wide text-accent-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
            {copy.live[lang]}
          </span>
        )}
        <span
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-mono uppercase tracking-wide ${tagStyle[tag]}`}
        >
          <TagIcon size={11} />
          {tagLabel[tag][lang]}
        </span>
      </div>
    </div>
  );

  const meta = (
    <div className="flex items-center gap-4 font-mono text-xs text-foreground/50">
      {repo.language && <span>{repo.language}</span>}
      <span>★ {repo.stargazers_count}</span>
    </div>
  );

  if (!demoUrl) {
    return (
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl bg-surface border border-foreground/10 p-6 transition-all duration-200 hover:border-accent-cyan/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
      >
        {header}
        <p className="text-sm text-foreground/70 mb-4 line-clamp-2 min-h-[2.5rem]">
          {description}
        </p>
        {meta}
      </a>
    );
  }

  return (
    <div className="rounded-2xl bg-surface border border-accent-cyan/30 p-6 transition-all duration-200 hover:border-accent-cyan/60 hover:shadow-lg hover:shadow-black/20">
      {header}
      <p className="text-sm text-foreground/70 mb-4">{description}</p>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {meta}
        <div className="flex items-center gap-4">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-foreground/60 hover:text-foreground-bright transition-colors"
          >
            <GithubIcon size={14} />
            {copy.source[lang]}
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-full bg-accent-cyan px-4 py-2 text-xs font-semibold text-background transition-all hover:opacity-90 hover:scale-[1.03]"
          >
            {copy.viewLiveAnalysis[lang]}
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
