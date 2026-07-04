"use client";

import { Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/siteConfig";
import SectionTag from "@/components/SectionTag";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="border-t border-foreground/10">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <SectionTag icon={Mail}>{t("footer.kicker")}</SectionTag>
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground-bright mb-6">
          {t("footer.title")}
        </h2>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-accent-cyan hover:underline underline-offset-4"
          >
            <Mail size={16} />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent-cyan hover:underline underline-offset-4"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent-cyan hover:underline underline-offset-4"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
        <p className="mt-12 text-xs text-foreground/50">
          {t("footer.builtWith")}
        </p>
      </div>
    </footer>
  );
}
