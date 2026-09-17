import React from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { GhatDivider } from '../components/common/GhatDivider';
import { GhatStepBand } from '../components/common/GhatStepBand';
import { Scale, Eye, HeartHandshake, Lock, AlertTriangle, ShieldCheck } from 'lucide-react';

export const ResponsibleAIPage: React.FC = () => {
  const pillars = [
    {
      id: 'fairness',
      title: 'Fairness',
      subtitle: 'Equitable Civic Representation Across Localities',
      icon: <Scale className="w-5 h-5 text-[#F6C667]" />,
      body: 'Civic water monitoring systems must never prioritize affluent commercial or tourist corridors over dense residential mohallas or underprivileged riverfront settlements. JalRakshak is designed to assess sampling density across all six municipal zones equally, preventing data bias where high-profile ghats receive disproportionate diagnostic attention compared to inland wards.',
      considerations: [
        'Geographic parity in monitoring attention across riverfront and inland sectors.',
        'Avoiding demographic or socio-economic profiling in civic advisories.',
        'Continuous scrutiny against algorithmic bias favoring central commercial areas.'
      ]
    },
    {
      id: 'transparency',
      title: 'Transparency',
      subtitle: 'Open Logic & Traceable Civic Provenance',
      icon: <Eye className="w-5 h-5 text-[#E29433]" />,
      body: 'Every citizen has the right to understand why an environmental advisory was triggered. The platform avoids opaque, black-box decision models. If a water-stress flag or conservation notice is formulated, the platform exposes the underlying thresholds, sensor timestamps, and published municipal reports that generated the alert.',
      considerations: [
        'Zero obfuscation: algorithms and rules published in human-readable terms.',
        'Explicit provenance citations for every municipal data feed.',
        'Clear distinction between raw observations and derived advisory guidance.'
      ]
    },
    {
      id: 'ethics',
      title: 'Ethics',
      subtitle: 'Stewardship Without Panicking or Misleading the Public',
      icon: <HeartHandshake className="w-5 h-5 text-[#135C63]" />,
      body: 'Environmental information carries emotional, economic, and cultural significance in Varanasi. Presenting alarmist or inaccurate water reports harms local communities, pilgrimage livelihoods, and public health confidence. JalRakshak holds ethics as a foundational restraint: conservative communication, radical humility, and zero tolerance for speculative forecasting.',
      considerations: [
        'No predictive panic: absence of sensationalist water crisis headlines.',
        'Humility regarding sensor measurement limitations and geographic variances.',
        'Commitment to protecting public well-being through verified corroboration.'
      ]
    },
    {
      id: 'privacy',
      title: 'Privacy',
      subtitle: 'Zero Citizen Tracking & Data Minimization',
      icon: <Lock className="w-5 h-5 text-[#F6C667]" />,
      body: 'JalRakshak is built as a public information commons, not a user-tracking service. The platform does not require user accounts, phone numbers, location trackers, or persistent cookies. Citizens can explore environmental and municipal context anonymously, with zero personal data logged, stored, or monetized.',
      considerations: [
        'No mandatory user registration, telephone capture, or identity gates.',
        'No cross-site tracking pixels or commercial marketing analytics.',
        'Zero geolocation storage: ward selection remains client-side and ephemeral.'
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      <PageHeader
        eyebrow="Governance &amp; Stewardship"
        badge="Ethical Framework"
        title="Responsible AI &amp; Civic Governance"
        subtitle="Our conceptual framework for ensuring civic technologies in Varanasi remain fair, transparent, ethical, and privacy-preserving."
      />

      {/* Mandatory Disclaimer on Certification & Compliance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 w-full" aria-label="Regulatory Disclaimer">
        <div className="p-5 rounded-xs bg-[#0E293B] border-l-4 border-[#E29433] shadow-md flex items-start gap-4">
          <AlertTriangle className="w-5 h-5 text-[#E29433] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-sm">
            <span className="font-semibold text-[#EEF2F1] block mb-1">
              Framework Intent &amp; Scope Notice
            </span>
            <p className="text-[#9BB0AC] leading-relaxed">
              JalRakshak is designed to conscientiously consider these four ethical pillars throughout its architecture. This framework constitutes a conceptual design commitment developed for an academic internship portfolio; it does not constitute official third-party ISO certification, legal guarantee, or regulatory compliance endorsement.
            </p>
          </div>
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full" aria-label="The Four Ethical Pillars">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <GhatStepBand
              key={pillar.id}
              stepLevel={((idx % 3) + 1) as 1 | 2 | 3}
              variant="night"
              className="p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xs bg-[#135C63]/25 border border-[#135C63]">
                    {pillar.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#E29433] uppercase tracking-wider block">
                      Pillar {idx + 1}
                    </span>
                    <h2 className="font-serif text-2xl text-[#EEF2F1]">
                      {pillar.title}
                    </h2>
                  </div>
                </div>

                <GhatDivider variant="dark" className="my-3" />

                <p className="text-sm text-[#9BB0AC] leading-relaxed mb-6">
                  {pillar.body}
                </p>
              </div>

              {/* Design Considerations */}
              <div className="pt-4 border-t border-[#1B394E]">
                <span className="text-xs font-semibold text-[#F6C667] uppercase tracking-wider block mb-2">
                  Architectural Safeguards:
                </span>
                <ul className="space-y-2 text-xs text-[#9BB0AC]" role="list">
                  {pillar.considerations.map((item, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E29433] shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GhatStepBand>
          ))}
        </div>
      </section>

      {/* Human In The Loop Principle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 w-full" aria-label="Human in the loop">
        <div className="p-8 rounded-xs bg-[#EEF2F1] text-[#0A1E2C] border-t-2 border-[#135C63]">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#135C63] shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-2xl text-[#0A1E2C] mb-2">
                Human Agency &amp; Municipal Primacy
              </h2>
              <p className="text-sm sm:text-base text-[#2D4543] leading-relaxed max-w-3xl">
                Algorithmic aids and interactive civic platforms should inform human judgment, never supersede it. Official public health guidelines, municipal boil-water advisories, and flood alerts from the Varanasi District Disaster Management Authority remain the supreme authority. JalRakshak positions itself as a respectful civic companion, maintaining radical humility in all digital touchpoints.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
