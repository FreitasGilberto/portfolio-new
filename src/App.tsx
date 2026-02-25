import { AppFrame } from "./components/AppFrame";
import { HomeSection } from "./components/HomeSection";
import { ResumeSection } from "./components/ResumeSection";
import { portfolio } from "./data/portfolio";

export default function App() {
  return (
    <AppFrame>
      <HomeSection
        name={portfolio.name}
        role={portfolio.role}
        headline={portfolio.headline}
        location={portfolio.location}
        avatar={portfolio.avatar}
        socials={[...portfolio.socials]}
      />

      <div className="pt-6" />

      <ResumeSection
        summaryPills={[...portfolio.resume.summaryPills]}
        experience={portfolio.resume.experience.map((exp) => ({
          ...exp,
          bullets: [...exp.bullets],
          tags: [...exp.tags],
        }))}
        cvHref={portfolio.links.cv}
      />
    </AppFrame>
  );
}
