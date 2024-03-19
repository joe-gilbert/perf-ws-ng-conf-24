import {Component, DoCheck, signal} from "@angular/core";

@Component({
  selector: "dirty-checks",
  template: ` <code class="dirty-checks">({{ renders() }})</code> `,
  styles: [
    `
      :host {
        display: inline-block;
        border-radius: 100%;
        border: 2px solid var(--palette-secondary-main);
        padding: 1rem;
        font-size: var(--text-lg);
      }
    `,
  ],
  standalone: true
})
export class DirtyChecksComponent implements DoCheck {
  public renders = signal(0);

  ngDoCheck() {
    this.renders.update(number => number + 1);
  }
}