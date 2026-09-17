export interface Locality {
  id: string;
  name: string;
  hindiName: string;
  zone: string;
  description: string;
  environmentalSetting: string;
  monitoringReadiness: 'Pending Verification' | 'Integration Ready';
  coordinates: [number, number];
}

export interface NavItem {
  name: string;
  path: string;
  description?: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Compass' | 'Sparkles' | 'Eye' | 'Lock' | 'Scale';
}

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  summary: string;
  implementationDetail: string;
  integrityAssurance: string;
}
