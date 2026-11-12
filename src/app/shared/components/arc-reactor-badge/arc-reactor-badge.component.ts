import { Component, input } from '@angular/core';

@Component({
  selector: 'app-arc-reactor-badge',
  standalone: true,
  template: `
    <div class="reactor-pill" [class]="statusClass()">
      <span class="pulsar"></span>
      <span class="label">{{ label() }}</span>
      @if (value()) {
        <span class="val">{{ value() }}</span>
      }
    </div>
  `,
  styles: [`
    .reactor-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 600;
      border: 1px solid rgba(0, 240, 255, 0.3);
      background: rgba(0, 240, 255, 0.08);
      color: #7ce7ff;
      backdrop-filter: blur(4px);
      transition: all 0.2s ease;

      .pulsar {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #00f0ff;
        box-shadow: 0 0 8px #00f0ff;
        animation: pulse 2s infinite ease-in-out;
      }

      .val {
        padding-left: 0.35rem;
        border-left: 1px solid rgba(255, 255, 255, 0.2);
        color: #ffffff;
      }

      &.status-nominal {
        border-color: rgba(50, 255, 126, 0.4);
        background: rgba(50, 255, 126, 0.1);
        color: #55efc4;
        .pulsar {
          background-color: #00b894;
          box-shadow: 0 0 8px #00b894;
        }
      }

      &.status-elevated {
        border-color: rgba(255, 177, 66, 0.5);
        background: rgba(255, 177, 66, 0.1);
        color: #ffbe76;
        .pulsar {
          background-color: #f0932b;
          box-shadow: 0 0 8px #f0932b;
        }
      }

      &.status-critical {
        border-color: rgba(255, 71, 87, 0.5);
        background: rgba(255, 71, 87, 0.15);
        color: #ff6b81;
        .pulsar {
          background-color: #ff4757;
          box-shadow: 0 0 10px #ff4757;
          animation: pulse 0.8s infinite ease-in-out;
        }
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.4;
        transform: scale(0.85);
      }
    }
  `],
})
export class ArcReactorBadgeComponent {
  readonly label = input.required<string>();
  readonly value = input<string | number>('');
  readonly status = input<'NOMINAL' | 'ELEVATED' | 'CRITICAL' | 'STANDBY'>('NOMINAL');

  statusClass(): string {
    switch (this.status()) {
      case 'NOMINAL':
        return 'status-nominal';
      case 'ELEVATED':
        return 'status-elevated';
      case 'CRITICAL':
        return 'status-critical';
      default:
        return '';
    }
  }
}
