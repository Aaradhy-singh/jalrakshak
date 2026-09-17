import React, { useEffect } from 'react';
import { CircleMarker, MapContainer, Popup, TileLayer, useMap } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import { Locality } from '../../types';

interface WardInteractiveMapProps {
  localities: Locality[];
  selectedLocality: Locality;
  onSelectLocality: (locality: Locality) => void;
  className?: string;
}

const VARANASI_CENTER: [number, number] = [25.3048, 83.0102];

const SelectedLocationView: React.FC<{ locality: Locality }> = ({ locality }) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(locality.coordinates, 14, { duration: 0.8 });
  }, [locality, map]);

  return null;
};

export const WardInteractiveMap: React.FC<WardInteractiveMapProps> = ({
  localities,
  selectedLocality,
  onSelectLocality,
  className = '',
}) => (
  <section className={`overflow-hidden border border-[#1B394E] bg-[#0A1E2C] shadow-lg ${className}`} aria-label="Interactive Varanasi map">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1B394E] bg-[#0E293B] px-5 py-3.5">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center border border-[#135C63] bg-[#135C63]/30 text-[#F6C667]">
          <MapPin className="h-4 w-4 text-[#E29433]" aria-hidden="true" />
        </div>
        <div>
          <h2 className="font-serif text-base text-[#EEF2F1]">Interactive Varanasi base map</h2>
          <p className="text-[11px] font-mono text-[#9BB0AC]">Pan, zoom, and select a JalRakshak focus area</p>
        </div>
      </div>
      <span className="border border-[#135C63]/60 bg-[#135C63]/20 px-2.5 py-1 text-[11px] text-[#F6C667]">OpenStreetMap base map</span>
    </div>

    <div className="h-[420px] sm:h-[520px]">
      <MapContainer center={VARANASI_CENTER} zoom={13} scrollWheelZoom className="h-full w-full" aria-label="Map of Varanasi with locality focus markers">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SelectedLocationView locality={selectedLocality} />
        {localities.map((locality) => {
          const selected = locality.id === selectedLocality.id;
          return (
            <CircleMarker
              key={locality.id}
              center={locality.coordinates}
              radius={selected ? 11 : 8}
              pathOptions={{
                color: selected ? '#E29433' : '#135C63',
                fillColor: selected ? '#F6C667' : '#135C63',
                fillOpacity: selected ? 0.9 : 0.75,
                weight: selected ? 3 : 2,
              }}
              eventHandlers={{ click: () => onSelectLocality(locality) }}
            >
              <Popup>
                <div className="text-center p-1">
                  <strong className="block text-[#0A1E2C] text-sm font-serif">{locality.name}</strong>
                  <span className="block text-xs text-[#135C63] mb-2">{locality.hindiName}</span>
                  <button
                    type="button"
                    onClick={() => onSelectLocality(locality)}
                    className="px-2.5 py-1 rounded-xs bg-[#135C63] text-[#EEF2F1] text-[11px] font-medium hover:bg-[#E29433] transition-colors cursor-pointer"
                  >
                    Select focus area
                  </button>
                </div>
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>

    <div className="border-t border-[#1B394E] bg-[#0A1E2C] px-5 py-3 text-xs leading-relaxed text-[#9BB0AC]">
      Base map: OpenStreetMap. Markers indicate JalRakshak project focus areas only; they are not official ward boundaries, survey locations, or verified hydrological buffers.
    </div>
  </section>
);
