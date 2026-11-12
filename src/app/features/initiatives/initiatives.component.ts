import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArcReactorBadgeComponent } from '../../shared/components/arc-reactor-badge/arc-reactor-badge.component';

interface ShieldInitiative {
  code: string;
  codename: string;
  director: string;
  phase: string;
  classification: string;
  summary: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'CLASSIFIED';
}

@Component({
  selector: 'app-initiatives',
  standalone: true,
  imports: [CommonModule, RouterLink, ArcReactorBadgeComponent],
  template: `
    <div class="initiatives-view">
      <div class="view-header">
        <div>
          <a routerLink="/" class="back-link">&larr; Return to Pegasus Bridge</a>
          <h1 class="view-title">S.H.I.E.L.D. INITIATIVES REGISTRY</h1>
          <p class="view-subtitle">Classified Strategic Roadmap &mdash; PoC Extension Routes</p>
        </div>
      </div>

      <div class="initiatives-list">
        @for (item of initiatives; track item.code) {
          <div class="initiative-card">
            <div class="card-header">
              <div class="code-badge">{{ item.code }}</div>
              <app-arc-reactor-badge 
                [label]="item.classification" 
                [value]="item.status" 
                [status]="item.status === 'ACTIVE' ? 'NOMINAL' : (item.status === 'CLASSIFIED' ? 'ELEVATED' : 'STANDBY')" 
              />
            </div>
            <h2 class="initiative-title">{{ item.codename }}</h2>
            <p class="initiative-desc">{{ item.summary }}</p>
            <div class="initiative-meta">
              <span><strong>Director / Lead:</strong> {{ item.director }}</span>
              <span><strong>Phase:</strong> {{ item.phase }}</span>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .initiatives-view {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .back-link {
      display: inline-block;
      color: #00f0ff;
      text-decoration: none;
      font-size: 0.85rem;
      margin-bottom: 0.5rem;
      &:hover {
        text-decoration: underline;
      }
    }

    .view-title {
      font-size: 2rem;
      color: #ffffff;
      margin: 0 0 0.25rem 0;
      letter-spacing: 0.05em;
    }

    .view-subtitle {
      color: #798e9f;
      margin: 0;
      font-size: 0.95rem;
    }

    .initiatives-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 1.5rem;
    }

    .initiative-card {
      background: rgba(14, 22, 38, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: all 0.2s ease;

      &:hover {
        border-color: rgba(0, 240, 255, 0.4);
        transform: translateY(-3px);
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .code-badge {
          font-family: monospace;
          color: #00f0ff;
          font-weight: 700;
          font-size: 0.85rem;
        }
      }

      .initiative-title {
        color: #ffffff;
        font-size: 1.3rem;
        margin: 0;
      }

      .initiative-desc {
        color: #9cb3c9;
        font-size: 0.9rem;
        line-height: 1.5;
        margin: 0;
        flex: 1;
      }

      .initiative-meta {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        font-size: 0.8rem;
        color: #798e9f;
        padding-top: 0.75rem;
        border-top: 1px solid rgba(255, 255, 255, 0.06);

        strong {
          color: #d1d8e0;
        }
      }
    }
  `],
})
export class InitiativesComponent {
  readonly initiatives: ShieldInitiative[] = [
    {
      code: 'INIT-001',
      codename: 'PROJECT PEGASUS',
      director: 'Dr. Wendy Lawson / Mar-Vell',
      phase: 'Phase 1 - Space Stone Study',
      classification: 'TOP SECRET // LEVEL 7',
      summary: 'Extraction and stabilization of cosmic energy from the Tesseract to power sub-light and faster-than-light propulsion.',
      status: 'ACTIVE',
    },
    {
      code: 'INIT-002',
      codename: 'AVENGERS INITIATIVE',
      director: 'Director Nicholas J. Fury',
      phase: 'Phase 2 - Strategic Defense',
      classification: 'RESTRICTED',
      summary: 'To bring together a group of remarkable people, to see if they could become something more when mankind needed them.',
      status: 'ACTIVE',
    },
    {
      code: 'INIT-003',
      codename: 'PROJECT INSIGHT',
      director: 'Alexander Pierce / HYDRA Infiltration',
      phase: 'Phase 3 - Global Surveillance',
      classification: 'COMPROMISED',
      summary: 'Tri-carrier precision preemptive threat elimination network using Arnim Zola’s algorithm. Neutralized.',
      status: 'ARCHIVED',
    },
    {
      code: 'INIT-004',
      codename: 'PROJECT T.A.H.I.T.I.',
      director: 'Agent Phil Coulson',
      phase: 'Phase 4 - Cellular Regeneration',
      classification: 'ALPHA OMEGA',
      summary: 'Biological restoration facility designed to resurrect a fallen Avenger utilizing GH-325 compound.',
      status: 'CLASSIFIED',
    },
  ];
}
