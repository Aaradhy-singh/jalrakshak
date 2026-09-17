import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, ShieldCheck, Mail, ExternalLink } from 'lucide-react';
import { GhatDivider } from './GhatDivider';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#06131D] text-[#EEF2F1] border-t border-[#1B394E] overflow-hidden" role="contentinfo">
      {/* Top stepped ghat border */}
      <div className="w-full flex flex-col gap-[1px]" aria-hidden="true">
        <div className="h-[2px] w-full bg-[#135C63]/60" />
        <div className="h-[1.5px] w-3/4 mx-auto bg-[#E29433]/70" />
        <div className="h-[1px] w-1/2 mx-auto bg-[#F6C667]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Mission Column (4 cols) */}
          <div className="md:col-span-4 flex flex-col">
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 shadow-sm">
                <Droplets className="w-5 h-5 text-[#F6C667]" aria-hidden="true" />
              </div>
              <span className="font-serif text-2xl sm:text-3xl font-light text-[#EEF2F1] tracking-wide">
                JalRakshak
              </span>
            </div>

            <GhatDivider variant="dark" className="my-4" />

            <p className="text-sm text-[#CBD5D1] leading-relaxed">
              A calm, civic water-awareness platform inspired by Varanasi and the sacred Ganga.
              Designed to illuminate riverfront environmental dynamics, promote thoughtful civic stewardship, and maintain uncompromising data integrity.
            </p>

            <div className="mt-5 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg liquid-glass border border-white/15 text-xs text-[#E29433] max-w-fit shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#F6C667]" aria-hidden="true" />
              <span>1M1B–IBM SkillsBuild AI for Sustainability</span>
            </div>
          </div>

          {/* Core Navigation Links (2 cols) */}
          <div className="md:col-span-2 flex flex-col">
            <h3 className="font-serif text-[15px] font-semibold text-[#F6C667] tracking-wider mb-4 uppercase">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm" role="list">
              <li>
                <Link to="/" className="text-[#CBD5D1] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/wards" className="text-[#CBD5D1] hover:text-white transition-colors">
                  Ward Explorer
                </Link>
              </li>
              <li>
                <Link to="/environment" className="text-[#CBD5D1] hover:text-white transition-colors">
                  Environment
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="text-[#CBD5D1] hover:text-white transition-colors">
                  Methodology
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-[#CBD5D1] hover:text-white transition-colors">
                  Civic Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Context Links (3 cols) */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="font-serif text-[15px] font-semibold text-[#F6C667] tracking-wider mb-4 uppercase">
              Governance
            </h3>
            <ul className="space-y-2.5 text-sm mb-4" role="list">
              <li>
                <Link to="/responsible-ai" className="text-[#CBD5D1] hover:text-white transition-colors">
                  Responsible AI
                </Link>
              </li>
              <li>
                <Link to="/sources" className="text-[#CBD5D1] hover:text-white transition-colors">
                  Data Sources &amp; Notes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#CBD5D1] hover:text-white transition-colors">
                  About the Project
                </Link>
              </li>
            </ul>

            <div className="p-3 rounded-lg liquid-glass border border-white/10 text-xs text-[#CBD5D1] leading-relaxed">
              <strong className="block text-white mb-0.5 font-medium">Data Integrity:</strong>
              Public records &amp; verified metrics only. No fabricated statistics.
            </div>
          </div>

          {/* Developer & Contact Column (3 cols) */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="font-serif text-[15px] font-semibold text-[#F6C667] tracking-wider mb-4 uppercase">
              Developer &amp; Contact
            </h3>
            <p className="text-xs text-[#CBD5D1] mb-3 leading-relaxed">
              Developed by <strong className="text-white">Aaradhy Singh</strong> for the 1M1B–IBM SkillsBuild AI for Sustainability Virtual Internship.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/aaradhy-singh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl liquid-glass border border-white/15 text-xs text-white/90 hover:text-white hover:border-[#F6C667]/50 hover:bg-white/10 transition-all duration-200 group"
                aria-label="Aaradhy Singh LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current text-[#0A66C2] group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
                <span className="font-medium">aaradhy-singh</span>
                <ExternalLink className="w-3 h-3 ml-auto text-white/40 group-hover:text-white/80" />
              </a>

              <a
                href="https://github.com/Aaradhy-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl liquid-glass border border-white/15 text-xs text-white/90 hover:text-white hover:border-[#F6C667]/50 hover:bg-white/10 transition-all duration-200 group"
                aria-label="Aaradhy Singh GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current text-white group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span className="font-medium">Aaradhy-singh</span>
                <ExternalLink className="w-3 h-3 ml-auto text-white/40 group-hover:text-white/80" />
              </a>

              <a
                href="mailto:aaradhysingh12@gmail.com"
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl liquid-glass border border-white/15 text-xs text-white/90 hover:text-white hover:border-[#F6C667]/50 hover:bg-white/10 transition-all duration-200 group"
                aria-label="Email Aaradhy Singh"
              >
                <Mail className="w-4 h-4 text-[#E29433] group-hover:scale-110 transition-transform shrink-0" />
                <span className="font-medium truncate">aaradhysingh12@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#1B394E]/60 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-[#CBD5D1]/80 gap-4">
          <p>
            Developed by <span className="text-white font-medium">Aaradhy Singh</span> • 1M1B–IBM SkillsBuild AI for Sustainability Virtual Internship.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-[#CBD5D1]">Varanasi, Uttar Pradesh, India</span>
            <span>•</span>
            <span className="text-[#F6C667] font-mono">Civic Environmental Foundation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
