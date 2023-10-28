import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit/decorators.js";

@customElement("ps-header")
export class PsHeader extends LitElement {
  static styles = css`
    .ps-header {
      margin-left: 2rem;
    }
    h1 {
      font-weight: 800;
      margin-bottom: 7px;
    }
    h2 {
      font-weight: 400;
      margin: 0;
    }
  `;

  @property() title = "";
  @property() subtitle = "";

  render() {
    return html`
      <div class="ps-header">
        <h1>${this.title}</h1>
        <h2>${this.subtitle}</h2>
      </div>
    `;
  }
}
