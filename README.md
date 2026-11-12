# Project P.E.G.A.S.U.S. 🛡️⚡
> **Potential Energy Group / Alternate Sources / United States**  
> *S.H.I.E.L.D. Classified Initiative // Clearance Level 7 Required*

An Angular 21 foundation crafted as the architectural pillars for rapid proof-of-concept (PoC) exploration.

---

## 🏛️ Architectural Pillars

This project is organized around 4 core pillars:

1. **Pillar I: Core Architecture & Reactive State (`src/app/core`)**
   - Signal-driven state management via [`PegasusTelemetryService`](file:///d:/1/Angular/spartan/src/app/core/services/pegasus-telemetry.service.ts)
   - Strongly-typed security clearance & telemetry models in [`shield-clearance.model.ts`](file:///d:/1/Angular/spartan/src/app/core/models/shield-clearance.model.ts)
   - Computed derived state (`computed()`) for live diagnostics (containment matrices, energy flux, grid locks)

2. **Pillar II: Standalone Feature Routing (`src/app/features`)**
   - Route tree defined in [`app.routes.ts`](file:///d:/1/Angular/spartan/src/app/app.routes.ts)
   - **Pegasus Bridge (`/`)**: Main command center featuring live telemetry diagnostics, signal toggles, and pillar cards ([`OverviewComponent`](file:///d:/1/Angular/spartan/src/app/features/overview/overview.component.ts))
   - **Classified Initiatives (`/initiatives`)**: Registry of S.H.I.E.L.D. classified roadmaps and PoC extension points ([`InitiativesComponent`](file:///d:/1/Angular/spartan/src/app/features/initiatives/initiatives.component.ts))

3. **Pillar III: Shared UI & Design Tokens (`src/app/shared`, `src/styles.scss`)**
   - High-tech S.H.I.E.L.D. / Stark HUD design system (deep slate `#070b14`, cyan glow `#00f0ff`, gold `#f5a623`)
   - Reusable standalone micro-components such as [`ArcReactorBadgeComponent`](file:///d:/1/Angular/spartan/src/app/shared/components/arc-reactor-badge/arc-reactor-badge.component.ts) with pulsing status states

4. **Pillar IV: Quality Assurance & Build Matrix (`vitest` + `@angular/build`)**
   - Native Vitest unit test suite covering state mutations, computed signals, and UI rendering
   - Production bundle splitting with lazy chunks

---

## 🚀 Getting Started

### Development Server
```bash
npm start
# Runs `ng serve` on http://localhost:4200
```

### Run Unit Tests
```bash
npm test
# Runs `ng test --watch=false` via Vitest
```

### Production Build
```bash
npm run build
# Compiles the production bundle into dist/project-pegasus
```

---

*Classified S.H.I.E.L.D. File // Built with Angular 21, TypeScript 5.9, & SCSS*
