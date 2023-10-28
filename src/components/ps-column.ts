import { LitElement, html, css } from "lit-element";
import { customElement } from "lit/decorators.js";

@customElement("ps-column")
export class PsColumn extends LitElement {
  static styles = css`
    .ps-column {
      display: grid;
      grid-template-columns: 1fr;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      margin-top: 0.8rem;
      flex: 1;
      box-shadow: 2px 2px 5px grey;
    }
  `;

  render() {
    return html`
      <div class="ps-column">
        <slot></slot>
      </div>
    `;
  }
}
