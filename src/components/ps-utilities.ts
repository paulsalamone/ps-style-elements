import { LitElement, html, css } from "lit-element";
import { customElement } from "lit/decorators.js";

@customElement("ps-utilities")
export class PsUtilities extends LitElement {
  static styles = css`
    .ps-utilities {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 0rem 0.5rem 0.25rem 0.5rem;
      background-color: #ddd;
      padding: 1rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  `;

  render() {
    return html`
      <div class="ps-utilities">
        <slot></slot>
      </div>
    `;
  }
}
