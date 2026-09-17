import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { GhatDivider } from '../components/common/GhatDivider';
import { GhatStepBand } from '../components/common/GhatStepBand';
import { FileSearch, Split, Scale, FileText, AlertCircle } from 'lucide-react';

export const MethodologyPage: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Gather verified public information',
      subtitle: 'Authoritative Municipal & Environmental Sourcing',
      icon: <FileSearch className="w-5 h-5 text-[#F6C667]" />,
      description:
        'The platform is designed to ingest data strictly from published government gazettes, Central Ground Water Board (CGWB) annual surveys, Uttar Pradesh Jal Nigam reports, and certified open sensor networks. Every datapoint will carry an immutable provenance record detailing the publishing department and collection timestamp.',
      status: 'Planned Integration Architecture'
    },
    {
      num: '02',
      title: 'Clearly distinguish live and bundled data',
      subtitle: 'Explicit Temporal Categorization',
      icon: <Split className="w-5 h-5 text-[#E29433]" />,
      description:
        'A critical failure of modern civic interfaces is blending historical estimates with real-time conditions. JalRakshak will enforce distinct UI tags: real-time sensor streams (e.g. river gauge heights) will be visually and structurally segregated from static historical baselines (e.g. decadal groundwater surveys).',
      status: 'Design System Specification'
    },
    {
      num: '03',
      title: 'Apply transparent advisory rules',
      subtitle: 'Deterministic, Open Civic Heuristics',
      icon: <Scale className="w-5 h-5 text-[#135C63]" />,
      description:
        'Civic advisories (such as seasonal water conservation recommendations during peak summer drawdowns) will rely on deterministic, audited rule engines rather than opaque generative models. Advisory rules will be published in plain language so any citizen can trace why a specific recommendation was generated.',
      status: 'Framework Formulation'
    },
    {
      num: '04',
      title: 'Explain limits and sources',
      subtitle: 'Radical Civic Humility & Source Citation',
      icon: <FileText className="w-5 h-5 text-[#F6C667]" />,
      description:
        'Whenever an advisory is issued or an environmental index is queried, the interface will display explicit boundaries: geographical confidence intervals, potential sensor calibration offsets, and direct links to the primary public report. JalRakshak will never present machine inference as definitive truth.',
      status: 'Integrity Requirement'
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      <PageHeader
        eyebrow="System Architecture"
        badge="Methodological Blueprint"
        title="How JalRakshak Works"
        subtitle="A plain-language breakdown of the planned end-to-end data pipeline, verification checkpoints, and civic advisory logic."
      />

      {/* Mandatory Non-Implementation Caveat */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 w-full" aria-label="Methodology Caveat">
        <div className="p-4 sm:p-5 rounded-xs bg-[#0E293B] border-l-4 border-[#135C63] shadow-md flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#F6C667] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm">
            <span className="font-semibold text-[#EEF2F1] block mb-1">
              Methodology Blueprint — Future Implementation Roadmap
            </span>
            <p className="text-[#9BB0AC] leading-relaxed">
              The steps documented below describe the architectural and governance pipeline designed for future implementation phases. None of these automated pipelines or live rule engines are currently active in this portfolio foundation.
            </p>
          </div>
        </div>
      </section>

      {/* Four Steps Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full" aria-label="The 4 Pipeline Steps">
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <GhatStepBand
              key={step.num}
              stepLevel={((idx % 3) + 1) as 1 | 2 | 3}
              variant="night"
              className="p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-1 flex items-center lg:justify-center">
                  <span className="font-serif text-3xl sm:text-4xl text-[#135C63] font-bold">
                    {step.num}
                  </span>
                </div>

                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-1.5 rounded-xs bg-[#135C63]/25 border border-[#135C63]">
                      {step.icon}
                    </div>
                    <span className="text-xs font-mono text-[#E29433] tracking-wide uppercase">
                      {step.subtitle}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl text-[#EEF2F1] mb-3">
                    {step.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#9BB0AC] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="lg:col-span-3 flex lg:justify-end">
                  <span className="inline-block px-3 py-1.5 rounded-xs bg-[#0A1E2C] border border-[#1B394E] text-xs font-mono text-[#F6C667]">
                    {step.status}
                  </span>
                </div>
              </div>
            </GhatStepBand>
          ))}
        </div>
      </section>

      {/* Advisory Principles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full" aria-label="Advisory Philosophy">
        <div className="p-8 rounded-xs bg-[#EEF2F1] text-[#0A1E2C] border-t-2 border-[#E29433]">
          <h2 className="font-serif text-2xl text-[#0A1E2C] mb-2">
            Why Explainability Over Automation?
          </h2>
          <GhatDivider variant="light" className="my-3" />
          <p className="text-sm sm:text-base text-[#2D4543] leading-relaxed max-w-3xl">
            In municipal environmental stewardship, black-box AI predictions create mistrust and administrative friction. JalRakshak prioritizes clear, auditable logic over speculative generative output. By ensuring every advisory rule is understandable to civic workers and citizens alike, we protect the community from synthetic hallucinations.
          </p>
        </div>
      </section>
    </div>
  );
};
