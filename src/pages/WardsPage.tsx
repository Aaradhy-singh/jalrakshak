import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LOCALITIES } from '../data/localities';
import { PageHeader } from '../components/common/PageHeader';
import { GhatDivider } from '../components/common/GhatDivider';
import { GhatStepBand } from '../components/common/GhatStepBand';
import { WardInteractiveMap } from '../components/common/WardInteractiveMap';
import { MapPin, ShieldAlert, CheckCircle2, Info, Compass, Waves } from 'lucide-react';

export const WardsPage: React.FC = () => {
  const [selectedLocality, setSelectedLocality] = useState(LOCALITIES[0]);

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Editorial Header */}
      <PageHeader
        eyebrow="Civic Geography"
        badge="Interactive Map"
        title="Varanasi Ward Explorer &amp; Riverfront Map"
        subtitle="Explore geographical, architectural, and riverfront settings across six prominent Varanasi localities along the Ganga basin."
      />

      {/* Primary Locality & Spatial Explorer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 w-full" aria-label="Locality Selector and Spatial Map">
        {/* Locality Chips */}
        <div className="mb-6">
          <div className="flex items-center justify-between gap-4 mb-3">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#CBD5D1]">
              Select Locality (6 Civic Focus Areas)
            </label>
            <span className="text-xs text-[#E29433] font-mono hidden sm:inline">
              Real map • OpenStreetMap
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3" role="tablist" aria-label="Locality selector">
            {LOCALITIES.map((loc) => {
              const isSelected = selectedLocality.id === loc.id;
              return (
                <button
                  key={loc.id}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`locality-panel-${loc.id}`}
                  id={`locality-tab-${loc.id}`}
                  onClick={() => setSelectedLocality(loc)}
                  className={`relative px-4 py-2.5 rounded-xs text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer border focus-visible:ring-2 focus-visible:ring-[#E29433] focus-visible:outline-hidden select-none hover:-translate-y-0.5 ${
                    isSelected
                      ? 'bg-[#135C63] text-[#F6C667] border-[#E29433] shadow-md'
                      : 'bg-[#0E293B]/70 text-[#EEF2F1]/85 hover:bg-[#1B394E] hover:text-[#EEF2F1] hover:border-[#135C63]/60 border-[#1B394E]'
                  }`}
                >
                  <MapPin
                    className={`w-3.5 h-3.5 transition-colors ${
                      isSelected ? 'text-[#E29433]' : 'text-[#9BB0AC]'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{loc.name}</span>
                  <span className="text-xs text-[#CBD5D1]/80 font-serif">({loc.hindiName})</span>

                  {/* Animated Selection Pill Underline */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeLocalityTab"
                      className="absolute -bottom-1 left-2 right-2 h-[2px] bg-[#E29433] rounded-full shadow-[0_0_6px_rgba(226,148,51,0.6)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Interactive Spatial Ward Map */}
        <div className="mb-10">
          <WardInteractiveMap
            localities={LOCALITIES}
            selectedLocality={selectedLocality}
            onSelectLocality={setSelectedLocality}
          />
        </div>

        {/* 2. Selected Locality Details Grid */}
        <div
          id={`locality-panel-${selectedLocality.id}`}
          role="tabpanel"
          aria-labelledby={`locality-tab-${selectedLocality.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Main Locality Overview */}
          <div className="lg:col-span-8">
            <GhatStepBand stepLevel={2} variant="night" className="p-6 sm:p-8 h-full">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#1B394E]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#E29433]">
                    {selectedLocality.zone}
                  </span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#EEF2F1]">
                      {selectedLocality.name}
                    </h2>
                    <span className="text-2xl font-serif text-[#F6C667]">
                      {selectedLocality.hindiName}
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#0A1E2C] border border-[#135C63] text-xs text-[#EEF2F1] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#E29433]" />
                  Selected focus area
                </span>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-serif text-lg text-[#F6C667] mb-2 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#E29433]" aria-hidden="true" />
                    Civic &amp; Cultural Heritage
                  </h3>
                  <p className="text-sm sm:text-base text-[#CBD5D1] leading-relaxed">
                    {selectedLocality.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg text-[#F6C667] mb-2 flex items-center gap-2">
                    <Waves className="w-4 h-4 text-[#1D7A84]" aria-hidden="true" />
                    Environmental Setting &amp; Topography
                  </h3>
                  <p className="text-sm sm:text-base text-[#CBD5D1] leading-relaxed">
                    {selectedLocality.environmentalSetting}
                  </p>
                </div>
              </div>

              <GhatDivider variant="dark" className="my-6" />

              {/* Data Status Section */}
              <div className="p-4.5 rounded-xs bg-[#0A1E2C]/90 border border-[#1B394E]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#E29433] mb-1.5">
                  <ShieldAlert className="w-4 h-4" aria-hidden="true" />
                  <span>DATA INTEGRITY COMMITMENT</span>
                </div>
                <p className="text-xs sm:text-sm text-[#CBD5D1] leading-relaxed">
                  This map provides real street and place context. Hydrological telemetry, official ward boundaries, and riverfront buffers are not shown until they are sourced and verified.
                </p>
              </div>
            </GhatStepBand>
          </div>

          {/* Right Column: Architectural Checklist */}
          <div className="lg:col-span-4">
            <div className="p-6 sm:p-7 rounded-xs bg-[#0E293B] border border-[#1B394E] h-full flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="font-serif text-xl text-[#EEF2F1] mb-2">
                  Ward Verification Protocol
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5D1] leading-relaxed mb-6">
                  Standards required before official ward layers or live municipal sensors are added:
                </p>

                <ul className="space-y-4 text-xs sm:text-sm text-[#CBD5D1]" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E29433] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-[#EEF2F1] block">Boundary Delineation</strong>
                      Obtain and document an official Nagar Nigam GIS or ward-delimitation source.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E29433] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-[#EEF2F1] block">Hydrological Buffers</strong>
                      Add only after an authoritative riverbank or flood-contour source is available.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E29433] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-[#EEF2F1] block">Sensor Traceability</strong>
                      Ensures every water metric links back to a physical sampling station.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1B394E] text-xs text-[#9BB0AC]">
                <span>OpenStreetMap context • JalRakshak focus areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
