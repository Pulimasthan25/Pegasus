export type SecurityClearanceLevel = 'Level 1' | 'Level 4' | 'Level 6' | 'Level 7 (Director Access)' | 'Alpha-Stark';

export type SystemStatus = 'NOMINAL' | 'ELEVATED' | 'CRITICAL' | 'STANDBY';

export interface ArchitecturalPillar {
  id: string;
  codename: string;
  title: string;
  description: string;
  spec: string;
  status: 'Ready' | 'Configured' | 'Expanding';
}

export interface TelemetryMatrix {
  tesseractContainmentPercent: number;
  darkEnergyFluxGev: number;
  arcReactorEfficiencyPercent: number;
  containmentGridActive: boolean;
  status: SystemStatus;
  timestamp: string;
}
