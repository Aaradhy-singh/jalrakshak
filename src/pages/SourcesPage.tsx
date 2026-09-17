import React, { useState } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { GhatDivider } from '../components/common/GhatDivider';
import { GhatStepBand } from '../components/common/GhatStepBand';
import {
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Database,
  Building2,
  Calendar,
  Globe2,
  Play,
  RotateCcw,
} from 'lucide-react';

interface DatasetItem {
  id: string;
  name: string;
  custodian: string;
  originDescription: string;
  scope: string;
  intendedUse: string;
  status: 'Verified & Integrated' | 'Reference Baseline' | 'Prospective Integration';
  statusColor: string;
  license: string;
}

const REGISTERED_DATASETS: DatasetItem[] = [
  {
    id: 'osm-cartography',
    name: 'OpenStreetMap Cartography & Base Map',
    custodian: 'OpenStreetMap Contributors',
    originDescription: 'Open-access collaborative geospatial map tiles covering Varanasi streets, riverbanks, ghat steps, and civic landmarks.',
    scope: 'Varanasi Urban Footprint & Riverfront • 6 Project Focus Areas (Assi, Dashashwamedh, Chowk, Bhelupur, Sigra, Ramnagar)',
    intendedUse: 'Spatial exploration and geographical orientation. Markers represent project focus areas, not official municipal ward boundary polygons or sensor stations.',
    status: 'Verified & Integrated',
    statusColor: '#1D7A84',
    license: 'Open Database License (ODbL)',
  },
  {
    id: 'open-meteo',
    name: 'Open-Meteo Atmospheric & Air Quality API',
    custodian: 'Open-Meteo Open Data Initiative',
    originDescription: 'Open-access meteorological and atmospheric observation models calibrated for Varanasi coordinates (25.3176° N, 82.9739° E).',
    scope: 'Varanasi River Basin • Ambient Temperature, Humidity, Wind Velocity, European AQI, PM2.5, PM10',
    intendedUse: 'Real-time environmental context for civic awareness on the Environment dashboard.',
    status: 'Verified & Integrated',
    statusColor: '#1D7A84',
    license: 'Creative Commons Attribution 4.0 (CC BY 4.0)',
  },
  {
    id: 'cwc-gauge',
    name: 'Central Water Commission (CWC) Ganga River Stage Benchmark',
    custodian: 'Central Water Commission, Middle Ganga Division',
    originDescription: 'Standard hydrometric reference benchmark for water surface elevation above mean sea level along the Varanasi riverfront.',
    scope: 'Dashashwamedh Station Reference • Normal pool stage baseline: 68.4 m MSL',
    intendedUse: 'Static reference benchmark on the Environment dashboard. Live hydrometric telemetry will be added once official municipal data feeds are cleared.',
    status: 'Reference Baseline',
    statusColor: '#E29433',
    license: 'Open Government Data Platform India',
  },
  {
    id: 'vmc-gis',
    name: 'Varanasi Municipal Corporation (VMC) Ward Delimitation (Roadmap)',
    custodian: 'Varanasi Municipal Corporation (VMC) / Nagar Nigam',
    originDescription: 'Municipal ward delimitation records and administrative boundary definitions for Varanasi wards.',
    scope: 'Varanasi Citywide Municipal Wards • Official vector geometry layers',
    intendedUse: 'Future integration of authenticated municipal ward boundary polygons once formal administrative data access is established.',
    status: 'Prospective Integration',
    statusColor: '#F6C667',
    license: 'Municipal Public Record (Pending Formal Clearance)',
  },
  {
    id: 'cgwb-wells',
    name: 'Groundwater Assessment & Aquifer Monitoring Network (Roadmap)',
    custodian: 'Central Ground Water Board (CGWB) & UP Jal Nigam',
    originDescription: 'Piezometric borehole monitoring stations measuring seasonal water table trends in the Varanasi district.',
    scope: 'Varanasi District Aquifer Basins • Pre- and Post-Monsoon Hydrographs',
    intendedUse: 'Planned integration for regional groundwater table analytics once authenticated open data feeds are formalized.',
    status: 'Prospective Integration',
    statusColor: '#F6C667',
    license: 'Institutional Academic Review Pending',
  },
];

export const SourcesPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [simStep, setSimStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const runSimulation = () => {
    setIsSimulating(true);
    setSimStep(1);

    setTimeout(() => setSimStep(2), 700);
    setTimeout(() => setSimStep(3), 1400);
    setTimeout(() => {
      setSimStep(4);
      setIsSimulating(false);
    }, 2100);
  };

  const resetSimulation = () => {
    setSimStep(0);
    setIsSimulating(false);
  };

  return (
    <div className="flex flex-col w-full pb-20">
      <PageHeader
        eyebrow="Data Provenance"
        badge="Verification Standard"
        title="Data Sources &amp; Verification Protocol"
        subtitle="Transparent documentation of environmental datasets, municipal records, and verification criteria for Varanasi."
      />

      {/* 1. 4-STAGE VERIFICATION FLOW EXPLAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 w-full" aria-label="Verification Workflow">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#E29433]">
            Quality Assurance Pipeline
          </span>
          <h2 className="font-serif text-3xl font-light text-[#EEF2F1] mt-2">
            The 4-Stage Verification Flow
          </h2>
          <GhatDivider variant="accent" align="center" className="my-3" />
          <p className="text-sm sm:text-base text-[#CBD5D1] leading-relaxed">
            Every dataset integrated into JalRakshak must pass through four strict verification gates before publication.
          </p>
        </div>

        {/* 4 Interactive Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div
            onClick={() => setActiveStep(1)}
            className={`p-6 rounded-xs border transition-all duration-200 cursor-pointer ${
              activeStep === 1
                ? 'bg-[#135C63]/30 border-[#E29433] shadow-lg -translate-y-1'
                : 'bg-[#0E293B] border-[#1B394E] hover:border-[#135C63]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-full bg-[#135C63] text-[#F6C667] font-mono font-bold flex items-center justify-center text-sm">
                1
              </span>
              <Building2 className="w-5 h-5 text-[#E29433]" />
            </div>
            <h3 className="font-serif text-lg text-[#EEF2F1] mb-2">
              Provide Origin
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5D1] leading-relaxed">
              Identifies the official institutional publishing body (e.g. CPCB, IMD, or VMC) and proves direct custody from authentic public records.
            </p>
          </div>

          {/* Step 2 */}
          <div
            onClick={() => setActiveStep(2)}
            className={`p-6 rounded-xs border transition-all duration-200 cursor-pointer ${
              activeStep === 2
                ? 'bg-[#135C63]/30 border-[#E29433] shadow-lg -translate-y-1'
                : 'bg-[#0E293B] border-[#1B394E] hover:border-[#135C63]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-full bg-[#135C63] text-[#F6C667] font-mono font-bold flex items-center justify-center text-sm">
                2
              </span>
              <Globe2 className="w-5 h-5 text-[#1D7A84]" />
            </div>
            <h3 className="font-serif text-lg text-[#EEF2F1] mb-2">
              Define Data Scope
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5D1] leading-relaxed">
              Explicitly defines geographic boundaries and observation timestamps so historical baseline studies never masquerade as real-time numbers.
            </p>
          </div>

          {/* Step 3 */}
          <div
            onClick={() => setActiveStep(3)}
            className={`p-6 rounded-xs border transition-all duration-200 cursor-pointer ${
              activeStep === 3
                ? 'bg-[#135C63]/30 border-[#E29433] shadow-lg -translate-y-1'
                : 'bg-[#0E293B] border-[#1B394E] hover:border-[#135C63]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-full bg-[#135C63] text-[#F6C667] font-mono font-bold flex items-center justify-center text-sm">
                3
              </span>
              <ShieldCheck className="w-5 h-5 text-[#F6C667]" />
            </div>
            <h3 className="font-serif text-lg text-[#EEF2F1] mb-2">
              State Intended Use
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5D1] leading-relaxed">
              Ensures data is framed strictly for civic water awareness and ethical guidance, preventing sensationalism or out-of-context metrics.
            </p>
          </div>

          {/* Step 4 */}
          <div
            onClick={() => setActiveStep(4)}
            className={`p-6 rounded-xs border transition-all duration-200 cursor-pointer ${
              activeStep === 4
                ? 'bg-[#135C63]/30 border-[#E29433] shadow-lg -translate-y-1'
                : 'bg-[#0E293B] border-[#1B394E] hover:border-[#135C63]'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-full bg-[#E29433] text-[#0A1E2C] font-mono font-bold flex items-center justify-center text-sm">
                4
              </span>
              <CheckCircle2 className="w-5 h-5 text-[#F6C667]" />
            </div>
            <h3 className="font-serif text-lg text-[#EEF2F1] mb-2">
              Verification Clearance
            </h3>
            <p className="text-xs sm:text-sm text-[#CBD5D1] leading-relaxed">
              Once all criteria are validated, the dataset is published to the open register below with permanent audit logs and version stamps.
            </p>
          </div>
        </div>

        {/* Interactive Verification Demo Simulator */}
        <div className="mt-8 p-6 rounded-xs bg-[#0E293B] border border-[#1B394E] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1B394E]">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#E29433]">
                Interactive Workflow Simulation
              </span>
              <h3 className="font-serif text-xl text-[#EEF2F1] mt-1">
                Simulate Candidate Dataset Verification
              </h3>
              <p className="text-xs text-[#CBD5D1] mt-1">
                Candidate Proposal (Demonstration): <strong className="text-[#EEF2F1]">Regional Groundwater Survey Bulletin (Varanasi Basin)</strong>
              </p>
            </div>

            <div className="flex items-center gap-3">
              {simStep === 0 ? (
                <button
                  type="button"
                  onClick={runSimulation}
                  disabled={isSimulating}
                  className="px-4 py-2 rounded-xs bg-[#E29433] text-[#0A1E2C] font-medium text-xs flex items-center gap-2 hover:bg-[#F6C667] transition-colors cursor-pointer select-none"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Run Verification Audit</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={resetSimulation}
                  className="px-4 py-2 rounded-xs bg-[#0A1E2C] border border-[#1B394E] text-[#CBD5D1] hover:text-[#EEF2F1] text-xs flex items-center gap-2 transition-colors cursor-pointer select-none"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Simulator</span>
                </button>
              )}
            </div>
          </div>

          {/* Simulation Progress States */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-5">
            <div className={`p-3.5 rounded-xs border text-xs transition-colors ${
              simStep >= 1 ? 'bg-[#135C63]/30 border-[#135C63] text-[#EEF2F1]' : 'bg-[#0A1E2C] border-[#1B394E] text-[#9BB0AC]'
            }`}>
              <div className="font-semibold mb-1 flex items-center gap-1.5">
                {simStep >= 1 ? <CheckCircle2 className="w-4 h-4 text-[#F6C667]" /> : <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">1</span>}
                <span>Origin Audit</span>
              </div>
              <span>{simStep >= 1 ? '✓ Institutional Custody Confirmed' : 'Awaiting check'}</span>
            </div>

            <div className={`p-3.5 rounded-xs border text-xs transition-colors ${
              simStep >= 2 ? 'bg-[#135C63]/30 border-[#135C63] text-[#EEF2F1]' : 'bg-[#0A1E2C] border-[#1B394E] text-[#9BB0AC]'
            }`}>
              <div className="font-semibold mb-1 flex items-center gap-1.5">
                {simStep >= 2 ? <CheckCircle2 className="w-4 h-4 text-[#F6C667]" /> : <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">2</span>}
                <span>Scope Verification</span>
              </div>
              <span>{simStep >= 2 ? '✓ Spatial & Temporal Boundaries Set' : 'Awaiting check'}</span>
            </div>

            <div className={`p-3.5 rounded-xs border text-xs transition-colors ${
              simStep >= 3 ? 'bg-[#135C63]/30 border-[#135C63] text-[#EEF2F1]' : 'bg-[#0A1E2C] border-[#1B394E] text-[#9BB0AC]'
            }`}>
              <div className="font-semibold mb-1 flex items-center gap-1.5">
                {simStep >= 3 ? <CheckCircle2 className="w-4 h-4 text-[#F6C667]" /> : <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">3</span>}
                <span>Intended Use</span>
              </div>
              <span>{simStep >= 3 ? '✓ Civic Guidance Approved' : 'Awaiting check'}</span>
            </div>

            <div className={`p-3.5 rounded-xs border text-xs transition-colors ${
              simStep >= 4 ? 'bg-[#E29433]/20 border-[#E29433] text-[#F6C667]' : 'bg-[#0A1E2C] border-[#1B394E] text-[#9BB0AC]'
            }`}>
              <div className="font-semibold mb-1 flex items-center gap-1.5">
                {simStep >= 4 ? <CheckCircle2 className="w-4 h-4 text-[#E29433]" /> : <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px]">4</span>}
                <span>Clearance Result</span>
              </div>
              <span>{simStep >= 4 ? '✓ Staged for Open Catalog' : 'Awaiting check'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED DATASET REGISTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 w-full" aria-label="Dataset Register">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#E29433]">
              Active Catalog &amp; Roadmap
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#EEF2F1] mt-1">
              Registered Public Datasets &amp; Institutional Baselines
            </h2>
          </div>
          <span className="text-xs text-[#CBD5D1] font-mono px-3 py-1 rounded-xs bg-[#0E293B] border border-[#1B394E] max-w-fit">
            2 Implemented • 3 Prospective / Baselines
          </span>
        </div>

        <div className="space-y-4">
          {REGISTERED_DATASETS.map((item, idx) => (
            <GhatStepBand key={item.id} stepLevel={(idx % 3 + 1) as 1 | 2 | 3} variant="night" className="p-6 sm:p-7">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 mb-2.5">
                    <span
                      className="px-2.5 py-0.5 rounded-xs text-xs font-mono font-semibold border"
                      style={{
                        color: item.statusColor === '#1D7A84' ? '#F6C667' : '#E29433',
                        borderColor: `${item.statusColor}80`,
                        backgroundColor: `${item.statusColor}25`,
                      }}
                    >
                      {item.status}
                    </span>
                    <span className="text-xs text-[#CBD5D1] font-medium">
                      Custodian: <strong className="text-[#EEF2F1]">{item.custodian}</strong>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#EEF2F1] mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#CBD5D1] leading-relaxed mb-4">
                    {item.originDescription}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#9BB0AC] pt-3 border-t border-[#1B394E]">
                    <div>
                      <strong className="text-[#EEF2F1] block mb-0.5">Defined Scope:</strong>
                      <span>{item.scope}</span>
                    </div>
                    <div>
                      <strong className="text-[#EEF2F1] block mb-0.5">Intended Civic Use:</strong>
                      <span>{item.intendedUse}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full pt-2 lg:pt-0 lg:border-l lg:border-[#1B394E] lg:pl-6">
                  <div className="text-xs text-[#9BB0AC] mb-4">
                    <span className="block text-[#CBD5D1] font-medium mb-1">Licensing Framework:</span>
                    <span className="font-mono text-[11px] text-[#F6C667]">{item.license}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs text-[#CBD5D1] font-medium">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${item.status === 'Verified & Integrated' ? 'text-[#F6C667]' : 'text-[#E29433]'}`} />
                    <span>
                      {item.status === 'Verified & Integrated'
                        ? 'Active Integration Verified'
                        : item.status === 'Reference Baseline'
                        ? 'Static Benchmark Documented'
                        : 'Awaiting Administrative Clearance'}
                    </span>
                  </div>
                </div>
              </div>
            </GhatStepBand>
          ))}
        </div>
      </section>
    </div>
  );
};
