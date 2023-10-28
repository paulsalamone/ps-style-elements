import { LitElement, html, css } from "lit-element";
import { customElement } from "lit/decorators.js";

@customElement("ps-canvas")
export class PsCanvas extends LitElement {
  static styles = css`
    .ps-canvas {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 0.5rem 0.5rem 0rem 0.5rem;
      background-color: white;
      border-color: #eee;
      padding: 1rem;
      border-radius: 0.25rem;

      z-index: 1;
    }
  `;

  render() {
    return html`
      <div class="ps-canvas">
        <slot></slot>
      </div>
    `;
  }
}
