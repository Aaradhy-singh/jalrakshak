import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Eye, Sparkles, MapPin, Wind, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { GhatDivider } from '../components/common/GhatDivider';
import { GhatStepBand } from '../components/common/GhatStepBand';
import { CTAButton } from '../components/common/CTAButton';
import { AnimatedHero } from '../components/home/AnimatedHero';
import {
  sectionHeaderVariants,
  staggerGridVariants,
  pillarCardVariants,
  ghatBandLeftVariants,
  ghatBandRightVariants,
  standardViewport,
} from '../lib/motion';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION WITH ANIMATED BACKGROUND VIDEO, STAGGERED CHARACTERS & LIQUID GLASS */}
      <AnimatedHero />

      {/* 2. TRUST STRIP (CIVIC FOUNDATION - LIQUID GLASS & VERIFIABLE STEWARDSHIP) */}
      <section
        id="civic-foundation"
        className="bg-[#06131D] text-[#EEF2F1] py-20 sm:py-24 border-b border-[#1B394E] relative"
        aria-label="Core Civic Values"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Animated Section Header */}
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={standardViewport}
          >
            <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-widest text-[#E29433]">
              Civic Foundation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#EEF2F1] mt-2">
              Rooted in verifiable stewardship
            </h2>
            <GhatDivider variant="dark" align="center" className="my-3.5" />
            <p className="text-sm sm:text-base text-[#9BB0AC] mt-2 leading-relaxed">
              Three core commitments that ground our civic datasets, ward hydrological mapping, and advisory practices.
            </p>
          </motion.div>

          {/* Staggered Liquid Glass Pillars */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={standardViewport}
          >
            {/* Pillar 1 */}
            <motion.div
              variants={pillarCardVariants}
              className="group relative flex flex-col p-8 rounded-2xl liquid-glass border border-white/15 shadow-xl transition-all duration-300 hover:-translate-y-1.5 focus-within:-translate-y-1.5 hover:border-[#135C63]/60 cursor-default outline-none"
              tabIndex={0}
              aria-label="Transparent by design pillar"
            >
              <div className="absolute -top-[1px] left-8 right-8 h-[2px] bg-[#135C63] group-hover:bg-[#E29433] group-focus:bg-[#E29433] transition-colors duration-300" />
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#135C63]/30 border border-[#135C63]/50 flex items-center justify-center text-[#F6C667] group-hover:bg-[#E29433]/20 group-hover:text-[#E29433] transition-colors duration-300">
                  <Eye className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-[#EEF2F1] group-hover:text-[#F6C667] transition-colors">
                  Transparent by design
                </h3>
              </div>
              <p className="text-[15px] text-[#CBD5D1] leading-relaxed">
                Clear distinction between measured public data and advisory guidance. No hidden assumptions or fabricated numbers.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              variants={pillarCardVariants}
              className="group relative flex flex-col p-8 rounded-2xl liquid-glass border border-white/15 shadow-xl transition-all duration-300 hover:-translate-y-1.5 focus-within:-translate-y-1.5 hover:border-[#E29433]/60 cursor-default outline-none"
              tabIndex={0}
              aria-label="Local context clearly explained pillar"
            >
              <div className="absolute -top-[1px] left-8 right-8 h-[2px] bg-[#E29433] transition-colors duration-300" />
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#E29433]/20 border border-[#E29433]/40 flex items-center justify-center text-[#E29433]">
                  <Compass className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-[#EEF2F1] group-hover:text-[#E29433] transition-colors">
                  Local context, clearly explained
                </h3>
              </div>
              <p className="text-[15px] text-[#CBD5D1] leading-relaxed">
                Framed specifically around Varanasi’s riverfront topography, urban galis, and municipal hydrological patterns.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              variants={pillarCardVariants}
              className="group relative flex flex-col p-8 rounded-2xl liquid-glass border border-white/15 shadow-xl transition-all duration-300 hover:-translate-y-1.5 focus-within:-translate-y-1.5 hover:border-[#135C63]/60 cursor-default outline-none"
              tabIndex={0}
              aria-label="Built for everyday action pillar"
            >
              <div className="absolute -top-[1px] left-8 right-8 h-[2px] bg-[#135C63] group-hover:bg-[#E29433] group-focus:bg-[#E29433] transition-colors duration-300" />
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#135C63]/30 border border-[#135C63]/50 flex items-center justify-center text-[#F6C667] group-hover:bg-[#E29433]/20 group-hover:text-[#E29433] transition-colors duration-300">
                  <ShieldCheck className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl text-[#EEF2F1] group-hover:text-[#F6C667] transition-colors">
                  Built for everyday action
                </h3>
              </div>
              <p className="text-[15px] text-[#CBD5D1] leading-relaxed">
                Actionable awareness for residents, pilgrims, and local students seeking thoughtful water conservation practices.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. "A CLEARER VIEW OF WATER" (CONNECTED ARCHITECTURAL GHAT TIERS) */}
      <section
        className="bg-[#0A1E2C] py-24 sm:py-28 border-b border-[#1B394E] relative overflow-hidden"
        aria-label="Platform Explorations"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mb-16"
            variants={sectionHeaderVariants}
            initial="hidden"
            whileInView="visible"
            viewport={standardViewport}
          >
            <span className="text-xs sm:text-[13px] font-semibold uppercase tracking-widest text-[#E29433]">
              Information Architecture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#EEF2F1] mt-2 leading-tight">
              A clearer view of water
            </h2>
            <GhatDivider variant="dark" className="my-3.5" />
            <p className="text-base sm:text-lg text-[#9BB0AC] leading-relaxed">
              Explore key dimensions of the JalRakshak platform. All environmental telemetry is thoughtfully staged for verified municipal feeds.
            </p>
          </motion.div>

          {/* Connected Architectural Ghat Tiers */}
          <div className="space-y-8">
            {/* Band 1: Ward Explorer (Reveals from Left) */}
            <motion.div
              variants={ghatBandLeftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={standardViewport}
            >
              <GhatStepBand stepLevel={1} variant="night" className="p-8 sm:p-10 group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="px-2.5 py-0.5 rounded-xs bg-[#135C63]/30 text-[#F6C667] text-xs font-mono border border-[#135C63]/50 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-[#E29433]" />
                        Interactive Spatial Map
                      </span>
                      <span className="text-xs text-[#9BB0AC]">6 Varanasi Localities</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#EEF2F1] group-hover:text-[#F6C667] transition-colors">
                      Ward Explorer &amp; Riverfront Map
                    </h3>
                    <p className="text-sm sm:text-base text-[#9BB0AC] mt-2.5 max-w-2xl leading-relaxed">
                      Interactive OpenStreetMap view for six Varanasi focus areas: Assi, Dashashwamedh, Chowk, Bhelupur, Sigra, and Ramnagar. Explore river proximity and urban settings.
                    </p>
                  </div>
                  <div className="md:col-span-4 flex md:justify-end">
                    <CTAButton
                      to="/wards"
                      variant="primary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Open Ward Map
                    </CTAButton>
                  </div>
                </div>
              </GhatStepBand>
            </motion.div>

            {/* Band 2: Environment Dashboard (Reveals from Right) */}
            <motion.div
              variants={ghatBandRightVariants}
              initial="hidden"
              whileInView="visible"
              viewport={standardViewport}
            >
              <GhatStepBand stepLevel={2} variant="night" className="p-8 sm:p-10 group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="px-2.5 py-0.5 rounded-xs bg-[#E29433]/20 text-[#E29433] text-xs font-mono border border-[#E29433]/40 flex items-center gap-1.5">
                        <Wind className="w-3 h-3" />
                        Public Weather &amp; AQI Feed
                      </span>
                      <span className="text-xs text-[#9BB0AC]">Varanasi Station (25.31°N)</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#EEF2F1] group-hover:text-[#F6C667] transition-colors">
                      Environment &amp; River Basin Telemetry
                    </h3>
                    <p className="text-sm sm:text-base text-[#9BB0AC] mt-2.5 max-w-2xl leading-relaxed">
                      Real-time ambient temperature, river breeze velocity, and air quality indices from open meteorological stations along the Ganga basin via Open-Meteo.
                    </p>
                  </div>
                  <div className="md:col-span-4 flex md:justify-end">
                    <CTAButton
                      to="/environment"
                      variant="secondary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      View Weather &amp; AQI
                    </CTAButton>
                  </div>
                </div>
              </GhatStepBand>
            </motion.div>

            {/* Band 3: Responsible AI & Verification Flow (Reveals from Left) */}
            <motion.div
              variants={ghatBandLeftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={standardViewport}
            >
              <GhatStepBand stepLevel={3} variant="night" className="p-8 sm:p-10 group">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="px-2.5 py-0.5 rounded-xs bg-[#135C63]/30 text-[#EEF2F1] text-xs font-mono border border-[#135C63]/50 flex items-center gap-1.5">
                        <FileCheck className="w-3 h-3 text-[#F6C667]" />
                        4-Stage Verification Gate
                      </span>
                      <span className="text-xs text-[#9BB0AC]">Source Register</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#EEF2F1] group-hover:text-[#F6C667] transition-colors">
                      Data Sources &amp; Verification Flow
                    </h3>
                    <p className="text-sm sm:text-base text-[#9BB0AC] mt-2.5 max-w-2xl leading-relaxed">
                      Understand how data is cleared before publication: Origin, Data Scope, Intended Use, and Verification Clearance. Interactive simulator and dataset register.
                    </p>
                  </div>
                  <div className="md:col-span-4 flex md:justify-end">
                    <CTAButton
                      to="/sources"
                      variant="secondary"
                      size="md"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Explore Verification
                    </CTAButton>
                  </div>
                </div>
              </GhatStepBand>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING STATEMENT & CTA */}
      <section
        className="bg-[#06131D] py-24 sm:py-28 border-b border-[#1B394E] relative overflow-hidden"
        aria-label="Closing Call to Action"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 flex items-center justify-center" aria-hidden="true">
          <svg
            className="w-full max-w-6xl h-48"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 100 C 300 160, 600 40, 900 120 C 1050 160, 1150 80, 1200 100"
              stroke="#1D7A84"
              strokeWidth="2"
              fill="none"
              className="river-line-animated"
            />
            <path
              d="M0 120 C 320 180, 620 60, 920 140 C 1060 175, 1160 100, 1200 120"
              stroke="#E29433"
              strokeWidth="1.2"
              fill="none"
              className="river-line-animated"
              opacity="0.6"
            />
          </svg>
        </div>

        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={standardViewport}
        >
          <div className="w-13 h-13 mx-auto rounded-full bg-[#135C63]/30 border border-[#135C63] flex items-center justify-center text-[#F6C667] mb-6 shadow-md">
            <Sparkles className="w-6 h-6" aria-hidden="true" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#EEF2F1] tracking-tight max-w-3xl mx-auto leading-[1.18]">
            Thoughtful water stewardship begins with transparent local understanding.
          </h2>

          <GhatDivider variant="accent" align="center" className="my-6" />

          <p className="text-base sm:text-lg text-[#9BB0AC] max-w-2xl mx-auto leading-relaxed">
            Discover how JalRakshak structures its civic advisory logic, separates measured data from guidance, and ensures verifiable integrity.
          </p>

          <div className="mt-9 flex justify-center">
            <CTAButton
              to="/methodology"
              variant="accent"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Our Methodology
            </CTAButton>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
