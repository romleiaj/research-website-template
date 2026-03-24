import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";

const sectionHeadingClass =
  "font-serif text-lg font-semibold mb-5 tracking-wide uppercase text-zinc-900";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:py-14">
        {/* Grid: 5fr / 8fr — wider main column than 5/12 + 7/12 */}
        <div className="grid grid-cols-1 md:grid-cols-[5fr_8fr] gap-x-4 gap-y-2">
          {/* Left Column - Fixed Info */}
          <div className="min-w-0 space-y-5 mb-5 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-8 space-y-4">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="min-w-0 space-y-12 md:space-y-14">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <p
                  className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section
                        key={sectionName}
                        className="border-t border-zinc-300/80 pt-8 first:border-t-0 first:pt-0"
                      >
                        <h2 className={sectionHeadingClass}>
                          News
                        </h2>
                        <div className="space-y-6">
                          {newsData.map((news, index) => (
                            <div key={index}>
                              <NewsEntry news={news} />
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section
                        key={sectionName}
                        className="border-t border-zinc-300/80 pt-8 first:border-t-0 first:pt-0"
                      >
                        <h2 className={sectionHeadingClass}>
                          Education
                        </h2>
                        <div className="space-y-6">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section
                        key={sectionName}
                        className="border-t border-zinc-300/80 pt-8 first:border-t-0 first:pt-0"
                      >
                        <h2 className={sectionHeadingClass}>
                          Publications
                        </h2>
                        <div className="space-y-6">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-4" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section
                        key={sectionName}
                        className="border-t border-zinc-300/80 pt-8 first:border-t-0 first:pt-0"
                      >
                        <h2 className={sectionHeadingClass}>
                          Experience
                        </h2>
                        <div className="space-y-6">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section
                        key={sectionName}
                        className="border-t border-zinc-300/80 pt-8 first:border-t-0 first:pt-0"
                      >
                        <h2 className={sectionHeadingClass}>
                          Portfolio
                        </h2>
                        <div className="space-y-6">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
