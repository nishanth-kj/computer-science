import { Component, input } from "@angular/core";

@Component({
  selector: "cs-icon",
  template: `
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-4"
      aria-hidden="true"
    >
      @switch (name()) {
        @case ("search") {
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        }
        @case ("menu") {
          <path d="M4 5h16M4 12h16M4 19h16" />
        }
        @case ("sun") {
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        }
        @case ("moon") {
          <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
        }
        @case ("list") {
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        }
        @case ("chevron") {
          <path d="m9 18 6-6-6-6" />
        }
        @case ("bookmark") {
          <path d="M19 21 12 16 5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        }
        @case ("copy") {
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        }
        @case ("check") {
          <path d="M20 6 9 17l-5-5" />
        }
        @case ("play") {
          <polygon points="6 4 20 12 6 20 6 4" />
        }
        @case ("pause") {
          <rect x="6" y="4" width="4" height="16" />
          <rect x="14" y="4" width="4" height="16" />
        }
        @case ("step") {
          <polygon points="6 4 14 12 6 20 6 4" />
          <line x1="18" y1="4" x2="18" y2="20" />
        }
        @case ("reset") {
          <path d="M3 12a9 9 0 1 0 3-6.7" />
          <path d="M3 4v5h5" />
        }
        @case ("x") {
          <path d="M18 6 6 18M6 6l12 12" />
        }
        @case ("info") {
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        }
        @case ("tip") {
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17H8v-2.3A7 7 0 0 1 5 9a7 7 0 0 1 7-7z" />
        }
        @case ("warn") {
          <path d="M12 9v4M12 17h.01" />
          <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
        }
        @case ("interview") {
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        }
        @case ("arrow") {
          <path d="M5 12h14M13 6l6 6-6 6" />
        }
        @case ("panel") {
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M9 4v16" />
        }
      }
    </svg>
  `,
})
export class Icon {
  readonly name = input.required<string>();
}
