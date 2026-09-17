import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { GhatDivider } from '../components/common/GhatDivider';
import { GhatStepBand } from '../components/common/GhatStepBand';
import { Clock, BookOpen, Sparkles, ShieldCheck } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const topics = [
    {
      title: 'Seasonal Monsoonal Hydrology & Ghat Sedimentation Patterns',
      category: 'Hydrological Study (Forthcoming)',
      description: 'An editorial investigation into post-monsoon silt accumulation across northern and central ghats, and its implications for public riverfront access.'
    },
    {
      title: 'Decentralized Rainwater Harvesting in Dense Heritage Alleys',
      category: 'Civic Infrastructure (Forthcoming)',
      description: 'Examining architectural opportunities for localized rooftop aquifer recharge within the high-impermeability galis of Chowk and Bhelupur.'
    },
    {
      title: 'Comparative Piezometric Well Tracking Across Trans-Ganga Banks',
      category: 'Groundwater Context (Forthcoming)',
      description: 'A study framework for assessing riparian aquifer recharge differences between the urban west bank (Varanasi) and agricultural east bank (Ramnagar).'
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      <PageHeader
        eyebrow="Civic Research &amp; Analysis"
        badge="Coming Soon"
        title="Civic Water Insights"
        subtitle="In-depth editorial analyses and verified environmental briefings focused on the Varanasi watershed."
      />

      {/* Editorial Coming Soon Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 w-full" aria-label="Editorial Status">
        <GhatStepBand stepLevel={2} variant="night" className="p-8 sm:p-12 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#135C63]/25 border border-[#135C63] flex items-center justify-center text-[#F6C667] mb-6">
              <Clock className="w-7 h-7" aria-hidden="true" />
            </div>

            <span className="text-xs font-mono uppercase tracking-wider text-[#E29433] mb-2">
              Research &amp; Editorial Pipeline
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#EEF2F1] mb-4">
              Civic briefings are currently undergoing verification
            </h2>

            <GhatDivider variant="dark" align="center" className="my-4" />

            <p className="text-sm sm:text-base text-[#9BB0AC] leading-relaxed mb-6">
              To uphold our data integrity mandate, no simulated findings, estimated trendlines, or speculative research conclusions are published here. Research articles will be published only after complete peer review against verified public records.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#0A1E2C] border border-[#1B394E] text-xs text-[#9BB0AC]">
              <ShieldCheck className="w-4 h-4 text-[#135C63]" aria-hidden="true" />
              <span>Status: Editorial reviews in progress • No fabricated statistics</span>
            </div>
          </div>
        </GhatStepBand>

        {/* Planned Editorial Briefings */}
        <div className="mt-14">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E29433]">
              Scheduled Research Topics
            </span>
            <h2 className="font-serif text-2xl text-[#EEF2F1] mt-1">
              Forthcoming Research Briefings
            </h2>
            <GhatDivider variant="dark" className="my-2" />
            <p className="text-xs sm:text-sm text-[#9BB0AC]">
              The following topics are currently in development under the research framework:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topics.map((topic, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xs bg-[#0E293B] border border-[#1B394E] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-[#F6C667] uppercase tracking-wider">
                      {topic.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-xs bg-[#0A1E2C] border border-[#1B394E] text-[10px] text-[#9BB0AC]">
                      Review Pending
                    </span>
                  </div>

                  <h3 className="font-serif text-lg text-[#EEF2F1] mb-3 leading-snug">
                    {topic.title}
                  </h3>

                  <p className="text-xs text-[#9BB0AC] leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1B394E]/60 flex items-center gap-2 text-xs text-[#E29433]">
                  <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Subject to source audit</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
