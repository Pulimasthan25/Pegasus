import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PegasusTelemetryService } from '../../core/services/pegasus-telemetry.service';
import { ArcReactorBadgeComponent } from '../../shared/components/arc-reactor-badge/arc-reactor-badge.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, RouterLink, ArcReactorBadgeComponent],
  template: `
    <div class="overview-container">
      <!-- S.H.I.E.L.D. Header Banner -->
      <section class="mission-header">
        <div class="shield-crest">
          <div class="eagle-circle">
            <span class="crest-text">S.H.I.E.L.D.</span>
          </div>
        </div>
        <div class="header-details">
          <div class="mission-tag">PROJECT CLASSIFIED // DIRECTIVE 1989-PEGASUS</div>
          <h1 class="mission-title">PROJECT P.E.G.A.S.U.S.</h1>
          <p class="mission-subtitle">
            Potential Energy Group / Alternate Sources / United States &mdash; Core POC Architectural Pillars
          </p>
          <div class="meta-row">
            <app-arc-reactor-badge label="CLEARANCE" [value]="telemetry.clearanceLevel()" status="NOMINAL" />
            <app-arc-reactor-badge label="OPERATIVE" [value]="telemetry.operativeCodename()" status="NOMINAL" />
            <app-arc-reactor-badge 
              label="TESSERACT STATUS" 
              [value]="telemetry.systemStatus()" 
              [status]="telemetry.systemStatus()" 
            />
          </div>
        </div>
      </section>

      <!-- Architecture Pillars Grid -->
      <section class="pillars-section">
        <div class="section-title-wrap">
          <h2>FOUNDATIONAL POC PILLARS</h2>
          <span class="sub">Structured architectural modules built for scalability and rapid prototyping</span>
        </div>

        <div class="pillars-grid">
          @for (pillar of telemetry.pillars(); track pillar.id) {
            <div class="pillar-card">
              <div class="card-glow"></div>
              <div class="pillar-top">
                <span class="codename">{{ pillar.codename }}</span>
                <span class="badge-status">{{ pillar.status }}</span>
              </div>
              <h3 class="pillar-heading">{{ pillar.title }}</h3>
              <p class="pillar-desc">{{ pillar.description }}</p>
              <div class="pillar-footer">
                <span class="tech-spec">{{ pillar.spec }}</span>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Live Reactive Telemetry / Diagnostics POC Console -->
      <section class="telemetry-console">
        <div class="section-title-wrap">
          <h2>LIVE TESSERACT TELEMETRY MATRIX</h2>
          <span class="sub">Demonstrates Angular 21 Signal-based state reactivity and computed metrics</span>
        </div>

        <div class="telemetry-dashboard">
          <div class="telemetry-card">
            <span class="metric-title">Containment Field</span>
            <div class="metric-value">{{ telemetry.containmentPercent() }}%</div>
            <div class="progress-bar">
              <div class="fill" [style.width.%]="telemetry.containmentPercent()"></div>
            </div>
          </div>

          <div class="telemetry-card">
            <span class="metric-title">Dark Energy Flux</span>
            <div class="metric-value">{{ telemetry.darkEnergyFlux() }} <span class="unit">GeV</span></div>
            <div class="progress-bar energy">
              <div class="fill" [style.width.%]="(telemetry.darkEnergyFlux() / 10) * 100"></div>
            </div>
          </div>

          <div class="telemetry-card">
            <span class="metric-title">Arc Reactor Efficiency</span>
            <div class="metric-value">{{ telemetry.arcReactorEfficiency() }}%</div>
            <div class="progress-bar arc">
              <div class="fill" [style.width.%]="telemetry.arcReactorEfficiency()"></div>
            </div>
          </div>

          <div class="telemetry-card">
            <span class="metric-title">Containment Lock</span>
            <div class="metric-value status-text" [class.unlocked]="!telemetry.containmentGridLocked()">
              {{ telemetry.containmentGridLocked() ? 'ENGAGED' : 'OVERRIDDEN' }}
            </div>
            <span class="sub-detail">Grid Status: {{ telemetry.systemStatus() }}</span>
          </div>
        </div>

        <div class="controls-toolbar">
          <button class="btn btn-primary" (click)="telemetry.pulseEnergySimulation()">
            ⚡ Pulse Energy Simulation
          </button>
          <button class="btn btn-warning" (click)="telemetry.toggleContainmentLock()">
            🔒 Toggle Containment Lock
          </button>
          <button class="btn btn-ghost" (click)="telemetry.resetTelemetry()">
            ↺ Recalibrate Systems
          </button>
          <a routerLink="/initiatives" class="btn btn-accent">
            View S.H.I.E.L.D. Initiatives &rarr;
          </a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .overview-container {
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    .mission-header {
      display: flex;
      gap: 2rem;
      align-items: center;
      padding: 2.25rem;
      background: linear-gradient(135deg, rgba(16, 26, 48, 0.85) 0%, rgba(10, 16, 30, 0.95) 100%);
      border: 1px solid rgba(0, 240, 255, 0.25);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 24px rgba(0, 240, 255, 0.05);

      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
      }
    }

    .shield-crest {
      flex-shrink: 0;
      .eagle-circle {
        width: 88px;
        height: 88px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #00f0ff;
        background: radial-gradient(circle, rgba(0, 240, 255, 0.2) 0%, rgba(10, 16, 30, 0.8) 100%);
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
        
        .crest-text {
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          color: #ffffff;
        }
      }
    }

    .header-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .mission-tag {
        font-size: 0.75rem;
        letter-spacing: 0.2em;
        color: #00f0ff;
        font-weight: 700;
      }

      .mission-title {
        font-size: 2.2rem;
        margin: 0;
        letter-spacing: 0.05em;
        color: #ffffff;
        text-shadow: 0 0 16px rgba(0, 240, 255, 0.35);
      }

      .mission-subtitle {
        color: #9cb3c9;
        margin: 0.25rem 0 0.75rem 0;
        font-size: 1rem;
        line-height: 1.5;
      }

      .meta-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
      }
    }

    .section-title-wrap {
      margin-bottom: 1.25rem;
      h2 {
        font-size: 1.25rem;
        letter-spacing: 0.12em;
        color: #ffffff;
        margin: 0 0 0.35rem 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &::before {
          content: '';
          display: inline-block;
          width: 4px;
          height: 18px;
          background: #00f0ff;
          border-radius: 2px;
        }
      }

      .sub {
        font-size: 0.875rem;
        color: #798e9f;
      }
    }

    .pillars-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.5rem;
    }

    .pillar-card {
      position: relative;
      background: rgba(14, 22, 38, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      overflow: hidden;
      transition: transform 0.2s ease, border-color 0.2s ease;

      &:hover {
        transform: translateY(-4px);
        border-color: rgba(0, 240, 255, 0.4);
      }

      .pillar-top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .codename {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #00f0ff;
        }

        .badge-status {
          font-size: 0.7rem;
          padding: 0.15rem 0.5rem;
          background: rgba(85, 239, 196, 0.15);
          color: #55efc4;
          border-radius: 4px;
          border: 1px solid rgba(85, 239, 196, 0.3);
        }
      }

      .pillar-heading {
        font-size: 1.1rem;
        color: #ffffff;
        margin: 0;
      }

      .pillar-desc {
        font-size: 0.875rem;
        color: #9cb3c9;
        line-height: 1.45;
        flex: 1;
        margin: 0;
      }

      .pillar-footer {
        padding-top: 0.75rem;
        border-top: 1px solid rgba(255, 255, 255, 0.06);

        .tech-spec {
          font-size: 0.75rem;
          color: #798e9f;
          font-family: monospace;
        }
      }
    }

    .telemetry-dashboard {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.25rem;
      margin-bottom: 1.5rem;
    }

    .telemetry-card {
      background: rgba(14, 22, 38, 0.8);
      border: 1px solid rgba(0, 240, 255, 0.15);
      border-radius: 8px;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .metric-title {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #798e9f;
      }

      .metric-value {
        font-size: 1.8rem;
        font-weight: 700;
        color: #ffffff;

        .unit {
          font-size: 0.9rem;
          font-weight: 400;
          color: #00f0ff;
        }

        &.status-text {
          font-size: 1.3rem;
          color: #55efc4;
          &.unlocked {
            color: #ff4757;
          }
        }
      }

      .sub-detail {
        font-size: 0.75rem;
        color: #9cb3c9;
      }

      .progress-bar {
        height: 6px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        overflow: hidden;

        .fill {
          height: 100%;
          background: #00f0ff;
          transition: width 0.3s ease;
        }

        &.energy .fill {
          background: #f0932b;
        }

        &.arc .fill {
          background: #55efc4;
        }
      }
    }

    .controls-toolbar {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .btn {
      padding: 0.7rem 1.2rem;
      border-radius: 6px;
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.05em;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;

      &.btn-primary {
        background: #00f0ff;
        color: #050b14;
        box-shadow: 0 0 12px rgba(0, 240, 255, 0.3);
        &:hover {
          background: #4ef4ff;
          box-shadow: 0 0 18px rgba(0, 240, 255, 0.5);
        }
      }

      &.btn-warning {
        background: rgba(240, 147, 43, 0.2);
        color: #ffbe76;
        border: 1px solid rgba(240, 147, 43, 0.4);
        &:hover {
          background: rgba(240, 147, 43, 0.35);
        }
      }

      &.btn-ghost {
        background: rgba(255, 255, 255, 0.05);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.15);
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      }

      &.btn-accent {
        background: rgba(116, 185, 255, 0.15);
        color: #74b9ff;
        border: 1px solid rgba(116, 185, 255, 0.35);
        &:hover {
          background: rgba(116, 185, 255, 0.3);
        }
      }
    }
  `],
})
export class OverviewComponent {
  protected readonly telemetry = inject(PegasusTelemetryService);
}
