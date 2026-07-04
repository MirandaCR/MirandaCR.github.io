"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { fetchGithubRepos, type GithubRepo } from "@/lib/github";
import { siteConfig } from "@/data/siteConfig";
import SectionTag from "@/components/SectionTag";
import RepoCard from "@/components/RepoCard";

type Status = "loading" | "error" | "success";

export default function GithubProjects() {
  const { t } = useLanguage();
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

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
      <SectionTag>{t("projects.kicker")}</SectionTag>
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

      {status === "success" && repos.length === 0 && (
        <p className="text-sm text-foreground/60">{t("projects.empty")}</p>
      )}

      {status === "success" && repos.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
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
