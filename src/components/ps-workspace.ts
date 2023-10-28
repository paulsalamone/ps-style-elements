import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit/decorators.js";

@customElement("ps-workspace")
export class PsWorkspace extends LitElement {
  static styles = css`
    .ps-workspace {
      display: grid;
      margin: 1rem;
      height: 77%;
      align-items: start;
    }
  `;

  @property() columns = "1fr 1fr";

  render() {
    return html`
      <div class="ps-workspace" style="grid-template-columns: ${this.columns}">
        <slot></slot>
      </div>
    `;
  }
}
