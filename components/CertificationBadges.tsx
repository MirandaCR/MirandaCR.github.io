"use client";

import { useLanguage } from "@/context/LanguageContext";
import {
  featuredCertifications,
  totalCertificationsCount,
} from "@/data/skills";
import { siteConfig } from "@/data/siteConfig";

export default function CertificationBadges() {
  const { t } = useLanguage();
  const moreCount = totalCertificationsCount - featuredCertifications.length;

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {featuredCertifications.map((cert) => (
          <div
            key={cert.title}
            className="group rounded-xl border border-foreground/10 px-4 py-3 transition-all hover:border-accent-cyan/40 hover:bg-surface hover:-translate-y-0.5"
          >
            <p className="text-sm font-medium text-foreground-bright leading-snug group-hover:text-accent-cyan transition-colors">
              {cert.title}
            </p>
            <p className="mt-1 font-mono text-[11px] text-foreground/50">
              {cert.issuer} · {cert.date}
            </p>
          </div>
        ))}
      </div>

      {moreCount > 0 && (
        <a
          href={siteConfig.linkedinCertificationsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-accent-purple hover:underline underline-offset-4"
        >
          +{moreCount} {t("skills.certsMoreLabel")}
        </a>
      )}
    </div>
  );
}
