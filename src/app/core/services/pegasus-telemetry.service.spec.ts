import { TestBed } from '@angular/core/testing';
import { PegasusTelemetryService } from './pegasus-telemetry.service';

describe('PegasusTelemetryService', () => {
  let service: PegasusTelemetryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PegasusTelemetryService);
  });

  it('should be created with Level 7 clearance', () => {
    expect(service).toBeTruthy();
    expect(service.clearanceLevel()).toBe('Level 7 (Director Access)');
  });

  it('should initialize all 4 architectural pillars', () => {
    expect(service.pillars().length).toBe(4);
    expect(service.pillars()[0].codename).toBe('HEIMDALL-GATEWAY');
  });

  it('should toggle containment lock state and update system status', () => {
    expect(service.containmentGridLocked()).toBe(true);
    expect(service.systemStatus()).toBe('NOMINAL');

    service.toggleContainmentLock();
    expect(service.containmentGridLocked()).toBe(false);
    expect(service.systemStatus()).toBe('CRITICAL');
  });
});
