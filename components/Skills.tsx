"use client";

import {
  Wrench,
  BrainCircuit,
  Atom,
  Database,
  TrendingUp,
  Gamepad2,
  Award,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { skillGroups } from "@/data/skills";
import SectionTag from "@/components/SectionTag";
import SkillsChart from "@/components/SkillsChart";
import CertificationBadges from "@/components/CertificationBadges";

const iconFor = {
  "brain-circuit": BrainCircuit,
  atom: Atom,
  database: Database,
  "trending-up": TrendingUp,
  gamepad: Gamepad2,
};

const chipStyle: Record<string, string> = {
  green: "border-accent-green/40 text-accent-green hover:bg-accent-green/10",
  purple: "border-accent-purple/40 text-accent-purple hover:bg-accent-purple/10",
  blue: "border-accent-blue/40 text-accent-blue hover:bg-accent-blue/10",
  orange: "border-accent-orange/40 text-accent-orange hover:bg-accent-orange/10",
  cyan: "border-accent-cyan/40 text-accent-cyan hover:bg-accent-cyan/10",
};

const iconAccent: Record<string, string> = {
  green: "text-accent-green",
  purple: "text-accent-purple",
  blue: "text-accent-blue",
  orange: "text-accent-orange",
  cyan: "text-accent-cyan",
};

export default function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16">
      <SectionTag icon={Wrench}>{t("skills.kicker")}</SectionTag>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground-bright mb-10">
        {t("skills.title")}
      </h2>

      <SkillsChart />

      <div className="space-y-6">
        {skillGroups.map((group) => {
          const Icon = iconFor[group.icon];
          return (
            <div key={group.id}>
              <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground/50 mb-3">
                <Icon size={14} className={iconAccent[group.accent]} />
                {group.label[lang]}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${chipStyle[group.accent]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-foreground/50 mt-12 mb-3">
        <Award size={14} className="text-accent-purple" />
        {t("skills.certsTitle")}
      </p>
      <CertificationBadges />
    </section>
  );
}
