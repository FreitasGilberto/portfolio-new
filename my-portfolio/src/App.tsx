import { useEffect, useState } from "react";
import { AppFrame } from "./components/AppFrame";
import type { TabKey } from "./components/NavbarPills";
import { NavbarPills } from "./components/NavbarPills";
import { HomeSection } from "./components/HomeSection";
import { ResumeSection } from "./components/ResumeSection";
import { portfolio } from "./data/portfolio";

function parseTab(hash: string): TabKey {
  const raw = (hash || "#home").replace("#", "");
  if (raw === "resume" || raw === "contact") return raw;
  return "home";
}

export default function App() {
  const [tab, setTab] = useState<TabKey>(() => parseTab(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setTab(parseTab(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <AppFrame>
      <NavbarPills active={tab} />

      {tab === "home" && (
        <HomeSection
          name={portfolio.name}
          role={portfolio.role}
          headline={portfolio.headline}
          location={portfolio.location}
          avatar={portfolio.avatar}
          socials={[...portfolio.socials]}
        />
      )}

      {tab === "resume" && (
        <ResumeSection
          summaryPills={[...portfolio.resume.summaryPills]}
          experience={portfolio.resume.experience.map((exp) => ({
            ...exp,
            bullets: [...exp.bullets],
            tags: [...exp.tags],
          }))}
          cvHref={portfolio.links.cv}
        />
      )}
    </AppFrame>
  );
}
