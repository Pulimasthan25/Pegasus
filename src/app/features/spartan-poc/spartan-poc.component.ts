import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideShield,
  lucideZap,
  lucideActivity,
  lucideLock,
  lucideCheck,
  lucideChevronDown,
  lucideCalendar,
  lucideFileText,
  lucideTerminal,
  lucideLayers,
  lucideSliders,
  lucideRadio,
  lucideInfo,
  lucideX,
  lucideSparkles,
  lucideLoader2,
  lucideBell,
  lucideUser,
  lucideSearch,
  lucideDownload,
} from '@ng-icons/lucide';

// Spartan Brain imports
import { BrnDialogImports } from '@spartan-ng/brain/dialog';
import { BrnSheetImports } from '@spartan-ng/brain/sheet';
import { toast } from '@spartan-ng/brain/sonner';

// Spartan Helm UI imports
import { HlmAspectRatioImports } from '@spartan-ng/helm/aspect-ratio';
import { HlmAttachmentImports } from '@spartan-ng/helm/attachment';
import { HlmAutocompleteImports } from '@spartan-ng/helm/autocomplete';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCheckboxImports } from '@spartan-ng/helm/checkbox';
import { HlmComboboxImports } from '@spartan-ng/helm/combobox';
import { HlmDatePickerImports } from '@spartan-ng/helm/date-picker';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmProgressImports } from '@spartan-ng/helm/progress';
import { HlmRadioGroupImports } from '@spartan-ng/helm/radio-group';
import { HlmSelectImports } from '@spartan-ng/helm/select';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';
import { HlmSliderImports } from '@spartan-ng/helm/slider';
import { HlmToasterImports } from '@spartan-ng/helm/sonner';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';
import { HlmSwitchImports } from '@spartan-ng/helm/switch';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';

@Component({
  selector: 'app-spartan-poc',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIcon,
    // Spartan Brain
    BrnDialogImports,
    BrnSheetImports,
    // Spartan Helm Primitives
    HlmAspectRatioImports,
    HlmAttachmentImports,
    HlmAutocompleteImports,
    HlmAvatarImports,
    HlmBadgeImports,
    HlmButtonImports,
    HlmCheckboxImports,
    HlmComboboxImports,
    HlmDatePickerImports,
    HlmDialogImports,
    HlmInputImports,
    HlmProgressImports,
    HlmRadioGroupImports,
    HlmSelectImports,
    HlmSheetImports,
    HlmSliderImports,
    HlmToasterImports,
    HlmSpinnerImports,
    HlmSwitchImports,
    HlmTabsImports,
    HlmTextareaImports,
    HlmTooltipImports,
  ],
  providers: [
    provideIcons({
      lucideShield,
      lucideZap,
      lucideActivity,
      lucideLock,
      lucideCheck,
      lucideChevronDown,
      lucideCalendar,
      lucideFileText,
      lucideTerminal,
      lucideLayers,
      lucideSliders,
      lucideRadio,
      lucideInfo,
      lucideX,
      lucideSparkles,
      lucideLoader2,
      lucideBell,
      lucideUser,
      lucideSearch,
      lucideDownload,
    }),
  ],
  templateUrl: './spartan-poc.component.html',
  styleUrls: ['./spartan-poc.component.scss'],
})
export class SpartanPocComponent {
  // 1. Reactive state for interactive POC controls
  readonly operativeCodename = signal('Agent Coulson');
  readonly clearanceLevel = signal('Level 7');
  readonly selectedAvenger = signal('iron-man');
  readonly selectedProtocol = signal('PROJECT-PEGASUS');
  readonly selectedProtocols = signal<string[]>([
    'PROJECT-PEGASUS-ALPHA',
    'AVENGERS-INITIATIVE-BETA',
  ]);
  readonly selectSearchQuery = signal('');
  readonly missionNotes = signal(
    'Tesseract stability matrix holding steady at 4.21 GeV dark energy flux.',
  );
  readonly quantumEncryption = signal(true);
  readonly vibraniumGrid = signal(true);
  readonly energyFrequency = signal('cosmic');
  readonly coreOutput = signal(78);
  readonly progressValue = signal(84);
  readonly missionDate = signal<Date | null>(new Date());

  // Data sets for Combobox and Autocomplete
  readonly avengers = [
    { value: 'iron-man', label: 'Tony Stark // Iron Man' },
    { value: 'captain-america', label: 'Steve Rogers // Captain America' },
    { value: 'thor', label: 'Thor Odinson // God of Thunder' },
    { value: 'black-widow', label: 'Natasha Romanoff // Black Widow' },
    { value: 'hawkeye', label: 'Clint Barton // Hawkeye' },
    { value: 'hulk', label: 'Bruce Banner // Incredible Hulk' },
    { value: 'captain-marvel', label: 'Carol Danvers // Captain Marvel' },
  ];

  // People roster (matching user's screenshot mockup)
  readonly people = [
    'Ashok',
    'Jay',
    'Srinivas',
    'Vivek',
    'Prakash',
    'Sudheer',
    'Manohar',
    'Sudhakar',
  ];

  readonly selectedPeople = signal<string[]>(['Prakash', 'Sudheer', 'Manohar', 'Sudhakar', 'Jay']);

  readonly peopleSearch = signal('');

  readonly visibleSelectedPeople = computed(() => this.selectedPeople().slice(0, 2));
  readonly overflowCount = computed(() => Math.max(0, this.selectedPeople().length - 2));
  readonly overflowTooltipText = computed(() => this.selectedPeople().slice(2).join(',\n'));

  readonly filteredPeople = computed(() => {
    const q = this.peopleSearch().toLowerCase().trim();
    if (!q) return this.people;
    return this.people.filter((p) => p.toLowerCase().includes(q));
  });

  isPersonSelected(person: string): boolean {
    return this.selectedPeople().includes(person);
  }

  removePerson(person: string, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedPeople.update((list) => list.filter((p) => p !== person));
  }

  readonly protocols = [
    'PROJECT-PEGASUS-ALPHA',
    'AVENGERS-INITIATIVE-BETA',
    'TESSERACT-CONTAINMENT-OMEGA',
    'DARK-ENERGY-HARVESTER-NODE',
    'QUANTUM-REALM-GATEWAY-09',
    'VIBRANIUM-SYNTHESIS-GAMMA',
    'HELI-CARRIER-DEFENSE-GRID',
    'EXTREMIS-COUNTERMEASURE-XI',
  ];

  readonly filteredProtocols = computed(() => {
    const query = this.selectSearchQuery().toLowerCase().trim();
    if (!query) return this.protocols;
    return this.protocols.filter((p) => p.toLowerCase().includes(query));
  });

  readonly protocolsToString = (items: string[] | string | null | undefined): string => {
    if (Array.isArray(items)) {
      return items.length > 0 ? `${items.length} selected (${items.join(', ')})` : '';
    }
    return items ? String(items) : '';
  };

  selectAllProtocols(): void {
    this.selectedProtocols.set([...this.protocols]);
  }

  clearProtocols(): void {
    this.selectedProtocols.set([]);
  }

  removeProtocol(proto: string, event: MouseEvent): void {
    event.stopPropagation();
    this.selectedProtocols.update((list) => list.filter((p) => p !== proto));
  }

  // Toast triggers using Spartan Sonner
  showSuccessToast(): void {
    toast.success('S.H.I.E.L.D. Directive Confirmed', {
      description: 'Quantum encryption key synchronized across all Helicarriers.',
    });
  }

  showWarningToast(): void {
    toast.warning('Containment Energy Spike Detected', {
      description: 'Tesseract energy fluctuation at 6.84 GeV. Stand by for stabilization.',
    });
  }

  showInfoToast(): void {
    toast.info('Stark Industries Uplink Active', {
      description: 'J.A.R.V.I.S. neural network connected to S.H.I.E.L.D. Sub-Node 042.',
    });
  }
}
