import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { GhatDivider } from '../components/common/GhatDivider';
import { GhatStepBand } from '../components/common/GhatStepBand';
import { Award, Code2, Globe, Heart, ShieldCheck, Compass, Mail } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-20">
      <PageHeader
        eyebrow="Civic Context &amp; Attribution"
        badge="Academic Project"
        title="About JalRakshak"
        subtitle="An environmental advisory and civic water-awareness platform created for Varanasi and inspired by the enduring heritage of the Ganga."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 w-full" aria-label="Project Background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Mission Statement */}
            <GhatStepBand stepLevel={1} variant="night" className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xs bg-[#135C63]/25 border border-[#135C63]">
                  <Compass className="w-5 h-5 text-[#F6C667]" aria-hidden="true" />
                </div>
                <h2 className="font-serif text-2xl text-[#EEF2F1]">
                  Civic Purpose &amp; Cultural Heritage
                </h2>
              </div>
              <GhatDivider variant="dark" className="my-3" />
              <p className="text-sm sm:text-base text-[#9BB0AC] leading-relaxed mb-4">
                Varanasi’s relationship with water spans millennia. The city’s 84 stone ghats represent an architectural and social commons where spiritual reverence, community ritual, and daily municipal life intersect. However, modern urbanization, groundwater depletion, and climate variability present intricate challenges for sustainable water stewardship along the riverfront.
              </p>
              <p className="text-sm sm:text-base text-[#9BB0AC] leading-relaxed">
                <strong>JalRakshak</strong> was conceived to transform public water awareness from speculative hearsay into a calm, transparent, and aesthetically respectful civic interface. Rather than treating water monitoring as a dry engineering dashboard, JalRakshak embeds environmental telemetry within the cultural geography of Varanasi’s historic wards.
              </p>
            </GhatStepBand>

            {/* Academic Internship Context */}
            <GhatStepBand stepLevel={2} variant="night" className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xs bg-[#E29433]/20 border border-[#E29433]">
                  <Award className="w-5 h-5 text-[#F6C667]" aria-hidden="true" />
                </div>
                <h2 className="font-serif text-2xl text-[#EEF2F1]">
                  1M1B–IBM SkillsBuild Internship
                </h2>
              </div>
              <GhatDivider variant="dark" className="my-3" />
              <p className="text-sm sm:text-base text-[#9BB0AC] leading-relaxed mb-4">
                This project was created as a portfolio contribution for the <strong>1M1B–IBM SkillsBuild AI for Sustainability Virtual Internship</strong>. The internship challenges young technologists to envision ethical, technology-driven solutions addressing United Nations Sustainable Development Goals (SDG 6: Clean Water and Sanitation, and SDG 11: Sustainable Cities and Communities).
              </p>
              <div className="p-4 rounded-xs bg-[#0A1E2C] border border-[#1B394E] text-xs text-[#9BB0AC] leading-relaxed space-y-2">
                <div className="flex items-center gap-2 text-[#F6C667] font-semibold">
                  <span>🤖 Assisted by IBM Bob &amp; IBM SkillsBuild</span>
                </div>
                <p>
                  Development and ideation were accelerated using <strong>IBM Bob</strong> (the AI assistive coding environment provided under the IBM SkillsBuild curriculum). IBM Bob supported project scoping, rapid TypeScript interface scaffolding, and formulating our 4-pillar Responsible AI governance framework.
                </p>
              </div>
            </GhatStepBand>

            {/* Development Stack & Tooling Documentation */}
            <GhatStepBand stepLevel={3} variant="night" className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xs bg-[#135C63]/25 border border-[#135C63]">
                  <Code2 className="w-5 h-5 text-[#F6C667]" aria-hidden="true" />
                </div>
                <h2 className="font-serif text-2xl text-[#EEF2F1]">
                  Engineering Stack &amp; Design Architecture
                </h2>
              </div>
              <GhatDivider variant="dark" className="my-3" />
              <p className="text-sm text-[#9BB0AC] leading-relaxed mb-4">
                To fulfill modern web performance and accessibility mandates, the visual foundation was engineered with modern standards:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#9BB0AC]" role="list">
                <li className="p-3 rounded-xs bg-[#0A1E2C] border border-[#1B394E]">
                  <strong className="text-[#EEF2F1] block">IBM Bob AI Assistive Tooling</strong>
                  Used for initial prompt engineering, data schema scaffolding (`types/index.ts`), and ethical governance alignment.
                </li>
                <li className="p-3 rounded-xs bg-[#0A1E2C] border border-[#1B394E]">
                  <strong className="text-[#EEF2F1] block">React 18 &amp; TypeScript</strong>
                  Strict type safety with explicit type definitions for every locality, river stage reading, and air quality index.
                </li>
                <li className="p-3 rounded-xs bg-[#0A1E2C] border border-[#1B394E]">
                  <strong className="text-[#EEF2F1] block">Tailwind CSS v4 &amp; Vite 6</strong>
                  Sub-second HMR and a custom color token system reflecting the natural hues of the Kashi riverfront.
                </li>
                <li className="p-3 rounded-xs bg-[#0A1E2C] border border-[#1B394E]">
                  <strong className="text-[#EEF2F1] block">Three.js &amp; React Three Fiber</strong>
                  Living water surface shader running procedurally with zero external asset bloat and full prefers-reduced-motion compliance.
                </li>
                <li className="p-3 rounded-xs bg-[#0A1E2C] border border-[#1B394E]">
                  <strong className="text-[#EEF2F1] block">Framer Motion &amp; Accessibility</strong>
                  Subtle, respectful micro-interactions with full support for prefers-reduced-motion and WCAG AA contrast.
                </li>
              </ul>
            </GhatStepBand>
          </div>

          {/* Sidebar Context Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Developer Card */}
            <div className="p-6 rounded-2xl liquid-glass border border-white/15 shadow-xl">
              <span className="text-[11px] font-mono text-[#E29433] uppercase tracking-wider block mb-1">
                Project Lead &amp; Developer
              </span>
              <h3 className="font-serif text-xl text-[#EEF2F1] mb-1">
                Aaradhy Singh
              </h3>
              <p className="text-xs text-[#CBD5D1] leading-relaxed mb-4">
                1M1B–IBM SkillsBuild AI for Sustainability Virtual Intern. Creator and lead engineer of the JalRakshak civic water-awareness platform.
              </p>

              <div className="flex flex-col gap-2">
                <a
                  href="https://www.linkedin.com/in/aaradhy-singh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl liquid-glass border border-white/15 text-xs text-white/90 hover:text-white hover:border-[#F6C667]/50 hover:bg-white/10 transition-all duration-200 group"
                  aria-label="Aaradhy Singh LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-current text-[#0A66C2] shrink-0" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/Aaradhy-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl liquid-glass border border-white/15 text-xs text-white/90 hover:text-white hover:border-[#F6C667]/50 hover:bg-white/10 transition-all duration-200 group"
                  aria-label="Aaradhy Singh GitHub Profile"
                >
                  <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub Profile</span>
                </a>

                <a
                  href="mailto:aaradhysingh12@gmail.com"
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl liquid-glass border border-white/15 text-xs text-white/90 hover:text-white hover:border-[#F6C667]/50 hover:bg-white/10 transition-all duration-200 group"
                  aria-label="Email Aaradhy Singh"
                >
                  <Mail className="w-4 h-4 text-[#E29433] shrink-0" />
                  <span className="truncate">aaradhysingh12@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0E293B] border border-[#1B394E]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E29433] mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>INTEGRITY STANDARD</span>
              </div>
              <h3 className="font-serif text-lg text-[#EEF2F1] mb-2">
                Honest Disclosure
              </h3>
              <p className="text-xs text-[#9BB0AC] leading-relaxed">
                JalRakshak practices rigorous transparency. Development was scaffolded using IBM Bob for architectural ideation and schema formulation, while production data relies on verified public APIs and open standards.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#EEF2F1] text-[#0A1E2C] border-t-2 border-[#135C63]">
              <h3 className="font-serif text-lg text-[#0A1E2C] mb-2 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#135C63]" />
                Dedicated to Kashi
              </h3>
              <p className="text-xs text-[#2D4543] leading-relaxed">
                Inspired by the timeless stone steps of Varanasi, the morning arati at Assi, and the citizens who work tirelessly to maintain the purity of the Maa Ganga.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
