import { IconData } from "./types.ts";

export class IconsetRegistry {
  private static instance: IconsetRegistry;
  private iconsets: Map<string, Iconset>;

  private constructor() {
    this.iconsets = new Map();
  }

  public static getInstance(): IconsetRegistry {
    if (!this.instance) {
      this.instance = new IconsetRegistry();
    }
    return this.instance;
  }

  public registerIconset(name: string, iconset: Iconset): void {
    this.iconsets.set(name, iconset);
    window.dispatchEvent(
      new CustomEvent("ug-iconset-added", { detail: { name } })
    );
  }

  public getIconset(name: string): Iconset | undefined {
    return this.iconsets.get(name);
  }
}

export class Iconset {
  constructor(private icons: { [key: string]: IconData }) {}

  public applyIconToElement(
    element: HTMLElement,
    iconName: string,
    size: string,
    label: string,
    color: string,
    ariaHidden: string = "true"
  ): void {
    const icon = this.icons[iconName];
    if (icon) {
      const ariaLabelAttr = label ? `aria-label="${label}"` : "";
      const ariaHiddenAttr = ariaHidden ? `aria-hidden="${ariaHidden}"` : "";
      element.innerHTML = `
        <svg ${ariaLabelAttr} ${ariaHiddenAttr} viewBox="0 0 ${icon.width} ${
        icon.height
      }" height="${size}" width="${size}">
          ${icon.paths
            .map((path) => `<path d="${path}" fill="${color}"></path>`)
            .join("")}
        </svg>`;
    } else {
      console.warn(`Icon "${iconName}" not found in this iconset.`);
    }
  }
}

export const iconsetRegistry = IconsetRegistry.getInstance();
