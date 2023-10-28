import { LitElement, html, css } from "lit-element";
import { customElement } from "lit/decorators.js";

@customElement("ps-controller")
export class PsController extends LitElement {
  static styles = css`
    .ps-controller {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 1rem;
      background-color: #eee;
      padding: 1rem;
      border-radius: 0.25rem;
      box-shadow: 2px 2px 5px grey;
    }
  `;

  render() {
    return html`
      <div class="ps-controller">
        <slot></slot>
      </div>
    `;
  }
}
