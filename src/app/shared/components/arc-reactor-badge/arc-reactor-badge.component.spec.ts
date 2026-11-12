import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArcReactorBadgeComponent } from './arc-reactor-badge.component';

describe('ArcReactorBadgeComponent', () => {
  let fixture: ComponentFixture<ArcReactorBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArcReactorBadgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArcReactorBadgeComponent);
  });

  it('should render label and value with status class', async () => {
    fixture.componentRef.setInput('label', 'TESSERACT');
    fixture.componentRef.setInput('value', 'NOMINAL');
    fixture.componentRef.setInput('status', 'NOMINAL');
    fixture.detectChanges();
    await fixture.whenStable();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('.label')?.textContent).toBe('TESSERACT');
    expect(el.querySelector('.val')?.textContent).toBe('NOMINAL');
    expect(el.querySelector('.reactor-pill')?.classList).toContain('status-nominal');
  });
});
