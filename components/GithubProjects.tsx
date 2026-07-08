"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { fetchGithubRepos, type GithubRepo } from "@/lib/github";
import { siteConfig } from "@/data/siteConfig";
import { featuredRepos } from "@/data/featuredRepos";
import SectionTag from "@/components/SectionTag";
import RepoCard from "@/components/RepoCard";
import LanguageChart from "@/components/LanguageChart";
import { GithubIcon } from "@/components/icons";

type Status = "loading" | "error" | "success";

const MAX_SHOWN = 6;

export default function GithubProjects() {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState<Status>("loading");
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetchGithubRepos(siteConfig.githubUsername)
      .then((data) => {
        if (cancelled) return;
        setRepos(data);
        setStatus("success");
      })
      .catch(() => {
        if (cancelled) return;
        setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const repoByName = new Map(repos.map((r) => [r.name.toLowerCase(), r]));
  const curated = featuredRepos
    .map((meta) => {
      const repo = repoByName.get(meta.name.toLowerCase());
      return repo ? { repo, meta } : null;
    })
    .filter((x): x is { repo: GithubRepo; meta: (typeof featuredRepos)[number] } => x !== null)
    .slice(0, MAX_SHOWN);

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16">
      <SectionTag icon={GithubIcon}>{t("projects.kicker")}</SectionTag>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground-bright mb-10">
        {t("projects.title")}
      </h2>

      {status === "loading" && (
        <p className="text-sm text-foreground/60">{t("projects.loading")}</p>
      )}

      {status === "error" && (
        <p className="text-sm text-accent-pink max-w-xl">
          {t("projects.error")}
        </p>
      )}

      {status === "success" && curated.length === 0 && (
        <p className="text-sm text-foreground/60">{t("projects.empty")}</p>
      )}

      {status === "success" && curated.length > 0 && (
        <>
          <LanguageChart repos={curated.map((c) => c.repo)} />
          <div className="grid gap-6 sm:grid-cols-2">
            {curated.map(({ repo, meta }) => (
              <div key={repo.id} className={meta.demoUrl ? "sm:col-span-2" : undefined}>
                <RepoCard
                  repo={repo}
                  description={meta.description[lang]}
                  tag={meta.tag}
                  demoUrl={meta.demoUrl}
                  lang={lang}
                />
              </div>
            ))}
          </div>
        </>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
        <a
          href={siteConfig.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-widest text-accent-purple hover:underline underline-offset-4"
        >
          {t("projects.viewProfile")}
        </a>
        <p className="text-xs text-foreground/40">{t("projects.footnote")}</p>
      </div>
    </section>
  );
}
