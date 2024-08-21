import { LitElement, html, css } from "lit";
import { property, query, customElement } from "lit/decorators.js";
import { iconsetRegistry } from "./iconset-registry.ts";
import "./iconset.ts"; // Ensure the icons are imported
import { IconSize, IconColor } from "./types.ts";

@customElement("ug-icon")
export class Icon extends LitElement {
  @property({ type: String }) name: string = "";
  @property({ type: String }) size: IconSize = "default";
  @property({ type: String }) color: IconColor = "default"; // Default to currentColor
  @property({ type: String }) label: string = ""; // Accessibility label

  @query("#container") iconContainer!: HTMLElement;

  static styles = css`
    :host {
      display: inline-block;
    }
    .icon-container {
      display: inline-block;
      width: var(--ug-icon-size, 24px); /* Default size */
      height: var(--ug-icon-size, 24px); /* Default size */
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `;

  private colorMap = {
    default: "var(--color-text-default)",
    inverse: "var(--color-text-inverse)",
    disabled: "var(--color-text-disabled)",
    selected: "var(--color-text-selected)",
    brand: "var(--color-text-brand)",
    danger: "var(--color-text-danger)",
    warning: "var(--color-text-warning)",
    success: "var(--color-text-success)",
    information: "var(--color-text-information)",
    subtle: "var(--color-text-subtle)",
    subtlest: "var(--color-text-subtlest)",
  };

  private sizeMap = {
    small: "16px",
    default: "24px",
    large: "32px",
  };

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener(
      "ug-iconset-added",
      this.iconsetListener as EventListener
    );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener(
      "ug-iconset-added",
      this.iconsetListener as EventListener
    );
  }

  firstUpdated(): void {
    this.updateIcon();
  }

  updated(changedProperties: Map<string, any>): void {
    if (
      changedProperties.has("name") ||
      changedProperties.has("size") ||
      changedProperties.has("color") ||
      changedProperties.has("label")
    ) {
      this.updateIcon();
    }
  }

  render() {
    return html`
      <div
        id="container"
        class="icon-container"
        style="width: ${this.sizeMap[this.size]}; height: ${this.sizeMap[
          this.size
        ]};"
      ></div>
    `;
  }

  private iconsetListener = (): void => {
    if (this.name) {
      this.updateIcon();
    }
  };

  private calculateColor(): string {
    return this.colorMap[this.color] || this.colorMap.default;
  }

  private updateIcon(): void {
    if (this.name && this.iconContainer) {
      const iconsetInstance = iconsetRegistry.getIconset("default");

      if (iconsetInstance) {
        const size = this.sizeMap[this.size];
        const color = this.calculateColor();
        const ariaHidden = this.label ? "false" : "true";
        iconsetInstance.applyIconToElement(
          this.iconContainer,
          this.name,
          size,
          this.label,
          color,
          ariaHidden
        );
      } else {
        console.warn(`Iconset "default" not found.`);
        this.iconContainer.innerHTML = ""; // Clear the icon container if iconset not found
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ug-icon": Icon;
  }
}
