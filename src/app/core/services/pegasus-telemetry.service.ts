import { Injectable, signal, computed } from '@angular/core';
import { ArchitecturalPillar, SecurityClearanceLevel, TelemetryMatrix } from '../models/shield-clearance.model';

@Injectable({
  providedIn: 'root',
})
export class PegasusTelemetryService {
  // S.H.I.E.L.D. Clearance state
  readonly clearanceLevel = signal<SecurityClearanceLevel>('Level 7 (Director Access)');
  readonly operativeCodename = signal<string>('Agent Fury');

  // PoC Foundation Pillars
  readonly pillars = signal<ArchitecturalPillar[]>([
    {
      id: 'pillar-core',
      codename: 'HEIMDALL-GATEWAY',
      title: 'Pillar I: Core Architecture & State',
      description: 'Singleton telemetry services, signal-based reactivity, and typed security clearance models.',
      spec: 'Angular 21 Signals & Dependency Injection',
      status: 'Ready',
    },
    {
      id: 'pillar-features',
      codename: 'BIFROST-ROUTER',
      title: 'Pillar II: Standalone Feature Routing',
      description: 'Modular standalone route tree with seamless feature isolation ready for PoC extension.',
      spec: 'Angular Standalone Router & Lazy-loadable views',
      status: 'Ready',
    },
    {
      id: 'pillar-ui',
      codename: 'STARK-INTERFACE',
      title: 'Pillar III: HUD Design Tokens & Components',
      description: 'Customizable S.H.I.E.L.D. tactical aesthetic with reusable reactor badges and responsive layouts.',
      spec: 'SCSS Modern Design Tokens & Micro-components',
      status: 'Ready',
    },
    {
      id: 'pillar-testing',
      codename: 'JARVIS-DIAGNOSTICS',
      title: 'Pillar IV: Automated Quality & Testing',
      description: 'Zero-config Vitest suite with fast compilation and production bundle tree-shaking.',
      spec: 'Angular Application Builder + Vitest Native',
      status: 'Configured',
    },
  ]);

  // Telemetry signals
  readonly containmentPercent = signal<number>(98.4);
  readonly darkEnergyFlux = signal<number>(4.21);
  readonly arcReactorEfficiency = signal<number>(99.7);
  readonly containmentGridLocked = signal<boolean>(true);

  // Derived computed telemetry
  readonly systemStatus = computed(() => {
    if (!this.containmentGridLocked()) {
      return 'CRITICAL';
    }
    if (this.containmentPercent() < 90 || this.darkEnergyFlux() > 7.0) {
      return 'ELEVATED';
    }
    return 'NOMINAL';
  });

  readonly telemetryMatrix = computed<TelemetryMatrix>(() => ({
    tesseractContainmentPercent: Number(this.containmentPercent().toFixed(1)),
    darkEnergyFluxGev: Number(this.darkEnergyFlux().toFixed(2)),
    arcReactorEfficiencyPercent: Number(this.arcReactorEfficiency().toFixed(1)),
    containmentGridActive: this.containmentGridLocked(),
    status: this.systemStatus(),
    timestamp: new Date().toLocaleTimeString(),
  }));

  // Actions for testing reactivity in the PoC
  toggleContainmentLock(): void {
    this.containmentGridLocked.update((locked) => !locked);
  }

  pulseEnergySimulation(): void {
    const delta = (Math.random() - 0.5) * 4;
    this.darkEnergyFlux.update((flux) => Math.max(1.0, Math.min(9.5, Number((flux + delta).toFixed(2)))));
    this.containmentPercent.update((curr) => Math.max(80, Math.min(100, Number((curr - delta * 0.5).toFixed(1)))));
  }

  resetTelemetry(): void {
    this.containmentPercent.set(98.4);
    this.darkEnergyFlux.set(4.21);
    this.arcReactorEfficiency.set(99.7);
    this.containmentGridLocked.set(true);
  }
}
