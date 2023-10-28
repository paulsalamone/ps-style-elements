import { LitElement, html, css } from "lit-element";
import { customElement, property } from "lit/decorators.js";

@customElement("ps-topnav")
export class PsTopNav extends LitElement {
  static styles = css`
    .ps-topnav {
      background-color: lightgrey;
      padding: 15px;
      color: navy;
      display: flex;
      list-style-type: none;
      margin-right: 1rem;
    }
    ::slotted(li) {
      margin-right: 1rem;
    }
  `;

  render() {
    return html`
      <nav class="ps-topnav">
        <slot></slot>
      </nav>
    `;
  }
}
