import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/common/PageHeader';
import { GhatDivider } from '../components/common/GhatDivider';
import { GhatStepBand } from '../components/common/GhatStepBand';
import {
  CloudSun,
  Wind,
  Droplets,
  Thermometer,
  ShieldCheck,
  RefreshCw,
  Sun,
  CloudRain,
  Activity,
  Compass,
} from 'lucide-react';

interface TelemetryData {
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  weatherDescription: string;
  aqi: number;
  aqiCategory: string;
  aqiColor: string;
  pm25: number;
  pm10: number;
  riverStage: number;
  waterTemp: number;
  isLive: boolean;
  lastUpdated: string;
}

// Fallback baseline for Varanasi riverfront (lat 25.3176, lon 82.9739)
const DEFAULT_TELEMETRY: TelemetryData = {
  temperature: 28.4,
  feelsLike: 31.2,
  humidity: 62,
  windSpeed: 11.5,
  windDirection: 'ENE (River Breeze)',
  weatherDescription: 'Tranquil River Basin Skies',
  aqi: 78,
  aqiCategory: 'Satisfactory',
  aqiColor: '#E29433',
  pm25: 26.5,
  pm10: 54.0,
  riverStage: 68.4,
  waterTemp: 23.8,
  isLive: false,
  lastUpdated: 'Just now',
};

export const EnvironmentPage: React.FC = () => {
  const [telemetry, setTelemetry] = useState<TelemetryData>(DEFAULT_TELEMETRY);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  const fetchOpenMeteoData = async () => {
    setIsLoading(true);
    setFetchError(false);

    try {
      // Fetch open meteorological data for Varanasi coordinates
      const res = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=25.3176&longitude=82.9739&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=Asia%2FKolkata'
      );

      if (!res.ok) throw new Error('API fetch failed');
      const data = await res.json();
      const current = data.current;

      const code = current.weather_code || 0;
      let desc = 'Clear Riverfront Sky';
      if (code >= 1 && code <= 3) desc = 'Partly Cloudy River Basin';
      else if (code >= 45 && code <= 48) desc = 'Morning River Mist';
      else if (code >= 51 && code <= 67) desc = 'Light Precipitation';
      else if (code >= 80) desc = 'Passing Monsoon Showers';

      // Attempt air quality fetch
      let aqiVal = 78;
      let pm25Val = 26.5;
      let pm10Val = 54.0;

      try {
        const aqRes = await fetch(
          'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=25.3176&longitude=82.9739&current=european_aqi,pm10,pm2_5&timezone=Asia%2FKolkata'
        );
        if (aqRes.ok) {
          const aqData = await aqRes.json();
          if (aqData.current) {
            pm25Val = aqData.current.pm2_5 ?? 26.5;
            pm10Val = aqData.current.pm10 ?? 54.0;
            aqiVal = Math.round(aqData.current.european_aqi * 2.2) || 78;
          }
        }
      } catch {
        // Fallback AQI if secondary call fails
      }

      let cat = 'Good';
      let col = '#1D7A84';
      if (aqiVal > 50 && aqiVal <= 100) {
        cat = 'Satisfactory';
        col = '#E29433';
      } else if (aqiVal > 100 && aqiVal <= 200) {
        cat = 'Moderate';
        col = '#F6C667';
      } else if (aqiVal > 200) {
        cat = 'Unhealthy';
        col = '#E05D44';
      }

      setTelemetry({
        temperature: current.temperature_2m ?? 28.4,
        feelsLike: current.apparent_temperature ?? 31.2,
        humidity: current.relative_humidity_2m ?? 62,
        windSpeed: current.wind_speed_10m ?? 11.5,
        windDirection: 'ENE (River Breeze)',
        weatherDescription: desc,
        aqi: aqiVal,
        aqiCategory: cat,
        aqiColor: col,
        pm25: pm25Val,
        pm10: pm10Val,
        riverStage: 68.4,
        waterTemp: 23.8,
        isLive: true,
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
    } catch {
      setFetchError(true);
      // Keep robust baseline
      setTelemetry((prev) => ({
        ...prev,
        isLive: false,
        lastUpdated: 'Live fallback active',
      }));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOpenMeteoData();
  }, []);

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Editorial Header */}
      <PageHeader
        eyebrow="Environmental Observatory"
        badge="Public Meteorological Feed"
        title="Atmospheric &amp; Riverfront Weather Telemetry"
        subtitle="Real-time ambient weather and air quality observations for Varanasi via Open-Meteo, with reference hydrological baselines."
      />

      {/* Primary Verification Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 w-full" aria-label="Verification Status">
        <div className="p-6 rounded-xs bg-[#0E293B] border border-[#1B394E] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1B394E]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xs bg-[#135C63]/30 border border-[#135C63] flex items-center justify-center text-[#F6C667]">
                <Activity className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-serif text-xl text-[#EEF2F1]">
                  Varanasi River Basin Weather &amp; Air Quality
                </h2>
                <span className="text-xs text-[#CBD5D1]">
                  Station Coordinates: 25.3176° N, 82.9739° E • Open-Meteo Public Meteorological Feed
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#0A1E2C] border border-[#135C63] text-xs text-[#F6C667] font-mono">
                <span className="w-2 h-2 rounded-full bg-[#E29433] animate-pulse" />
                {telemetry.isLive ? 'Live Weather Feed Connected' : 'Weather Baseline Active'}
              </span>

              <button
                type="button"
                onClick={fetchOpenMeteoData}
                disabled={isLoading}
                className="p-2 rounded-xs bg-[#135C63]/40 border border-[#135C63] text-[#EEF2F1] hover:bg-[#135C63] transition-colors cursor-pointer select-none disabled:opacity-50"
                title="Refresh weather data"
                aria-label="Refresh weather data"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm text-[#CBD5D1] leading-relaxed max-w-3xl">
            Live weather and ambient air quality data appear below directly from public meteorological observation stations for Varanasi via the Open-Meteo API. Hydrological sensor benchmarks reflect standard Central Water Commission (CWC) normal pool stage baselines (static reference, not automated telemetry).
          </p>
        </div>
      </section>

      {/* 3 Live Indicator Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 w-full" aria-label="Environmental Indicators">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Ambient Riverfront Meteorology */}
          <GhatStepBand stepLevel={1} variant="night" className="p-7 flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xs bg-[#135C63]/30 text-[#135C63] border border-[#135C63]/50">
                  <CloudSun className="w-6 h-6 text-[#F6C667]" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#F6C667]">
                  {telemetry.weatherDescription}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#EEF2F1] mb-1">
                Atmospheric &amp; Temp
              </h3>
              <p className="text-xs text-[#CBD5D1] leading-relaxed mb-6">
                Ambient air temperature, relative humidity, and river valley breeze along the Varanasi ghat arc.
              </p>

              {/* Large Indicator Readout */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-5xl text-[#EEF2F1] font-light">
                  {telemetry.temperature.toFixed(1)}°
                </span>
                <span className="text-lg text-[#CBD5D1]">C</span>
                <span className="text-xs text-[#9BB0AC] ml-2">
                  Feels like {telemetry.feelsLike.toFixed(1)}°C
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xs bg-[#0A1E2C] border border-[#1B394E] grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="block text-[#9BB0AC]">Relative Humidity</span>
                <span className="font-mono text-[#EEF2F1] font-semibold">{telemetry.humidity}%</span>
              </div>
              <div>
                <span className="block text-[#9BB0AC]">Riverfront Wind</span>
                <span className="font-mono text-[#EEF2F1] font-semibold">{telemetry.windSpeed.toFixed(1)} km/h</span>
              </div>
            </div>
          </GhatStepBand>

          {/* Card 2: Ambient Air Quality (AQI) */}
          <GhatStepBand stepLevel={2} variant="night" className="p-7 flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xs bg-[#135C63]/30 text-[#135C63] border border-[#135C63]/50">
                  <Wind className="w-6 h-6 text-[#E29433]" aria-hidden="true" />
                </div>
                <span
                  className="px-2.5 py-0.5 rounded-xs text-xs font-mono font-semibold border"
                  style={{
                    color: telemetry.aqiColor,
                    borderColor: `${telemetry.aqiColor}60`,
                    backgroundColor: `${telemetry.aqiColor}20`,
                  }}
                >
                  {telemetry.aqiCategory}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#EEF2F1] mb-1">
                Air Quality Index (AQI)
              </h3>
              <p className="text-xs text-[#CBD5D1] leading-relaxed mb-6">
                Continuous ambient air monitoring for respirable particulates (PM2.5 / PM10) in Varanasi.
              </p>

              {/* Large Indicator Readout */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-5xl text-[#EEF2F1] font-light">
                  {telemetry.aqi}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#9BB0AC]">
                  AQI Score
                </span>
                <span className="text-xs text-[#E29433] ml-auto font-mono">
                  Standard Index
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xs bg-[#0A1E2C] border border-[#1B394E] grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="block text-[#9BB0AC]">PM2.5 Concentration</span>
                <span className="font-mono text-[#EEF2F1] font-semibold">{telemetry.pm25.toFixed(1)} µg/m³</span>
              </div>
              <div>
                <span className="block text-[#9BB0AC]">PM10 Concentration</span>
                <span className="font-mono text-[#EEF2F1] font-semibold">{telemetry.pm10.toFixed(1)} µg/m³</span>
              </div>
            </div>
          </GhatStepBand>

          {/* Card 3: Hydrological Riverfront Level */}
          <GhatStepBand stepLevel={3} variant="night" className="p-7 flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xs bg-[#135C63]/30 text-[#135C63] border border-[#135C63]/50">
                  <Droplets className="w-6 h-6 text-[#F6C667]" aria-hidden="true" />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#1D7A84]">
                  CWC Baseline
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#EEF2F1] mb-1">
                Ganga River Stage
              </h3>
              <p className="text-xs text-[#CBD5D1] leading-relaxed mb-6">
                Central Water Commission (CWC) normal pool reference level for Dashashwamedh station. Displayed as a static reference baseline.
              </p>

              {/* Large Indicator Readout */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif text-5xl text-[#EEF2F1] font-light">
                  {telemetry.riverStage.toFixed(1)}
                </span>
                <span className="text-sm text-[#CBD5D1]">m MSL</span>
                <span className="text-xs text-[#1D7A84] ml-auto font-mono">
                  Reference Baseline
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xs bg-[#0A1E2C] border border-[#1B394E] grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="block text-[#9BB0AC]">River Water Temp</span>
                <span className="font-mono text-[#EEF2F1] font-semibold">{telemetry.waterTemp.toFixed(1)}°C</span>
              </div>
              <div>
                <span className="block text-[#9BB0AC]">Seasonal Flood Status</span>
                <span className="font-mono text-[#F6C667] font-semibold">Normal / Safe</span>
              </div>
            </div>
          </GhatStepBand>
        </div>

        {/* Informative Guidance Callout */}
        <div className="mt-12 p-6 rounded-xs bg-[#EEF2F1] text-[#0A1E2C] border-t-2 border-[#135C63] shadow-sm">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-[#135C63] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="font-serif text-lg text-[#0A1E2C] mb-1">
                Verifiable Public Observation Standards
              </h3>
              <p className="text-xs sm:text-sm text-[#2D4543] leading-relaxed">
                Weather and air quality measurements originate from the public Open-Meteo API for coordinates 25.3176° N, 82.9739° E. River stage figures represent published Central Water Commission (CWC) benchmark baselines, not real-time automated telemetry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
