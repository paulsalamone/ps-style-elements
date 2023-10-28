import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit/decorators.js";

@customElement("ps-page")
export class PsPage extends LitElement {
  static styles = css`
    .ps-page {
      border: 5px solid lightgrey;
      height: 97vh;
      font-family: Arial, Helvetica, sans-serif;
    }
  `;

  render() {
    return html`
      <div class="ps-page">
        <slot></slot>
      </div>
    `;
  }
}
