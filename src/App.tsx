import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { WardsPage } from './pages/WardsPage';
import { EnvironmentPage } from './pages/EnvironmentPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { ResponsibleAIPage } from './pages/ResponsibleAIPage';
import { SourcesPage } from './pages/SourcesPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="wards" element={<WardsPage />} />
          <Route path="environment" element={<EnvironmentPage />} />
          <Route path="methodology" element={<MethodologyPage />} />
          <Route path="responsible-ai" element={<ResponsibleAIPage />} />
          <Route path="sources" element={<SourcesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
