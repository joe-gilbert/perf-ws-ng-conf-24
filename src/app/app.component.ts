import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppShellComponent } from './app-shell/app-shell.component';
import { DirtyChecksComponent } from "./shared/dirty-checks/dirty-checks.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-shell>
      <dirty-checks />
      <router-outlet />
    </app-shell>
  `,
    imports: [RouterOutlet, AppShellComponent, DirtyChecksComponent],
    // changeDetection: ChangeDetectionStrategy.OnPush, // Prevents MovieCardComponentj from rendering until a change is detected in the AppComponent
})
export class AppComponent {}
