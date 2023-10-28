import { LitElement, html, css } from "lit-element";
import { customElement, property, state } from "lit/decorators.js";

@customElement("ps-control-slider")
export class PsControlSlider extends LitElement {
  static styles = css`
    .ps-control-slider {
      padding: 10px;
      border: 1px dotted black;
    }
    span {
      display: flex;
      justify-content: space-between;
    }
    p {
      margin: 0;
      padding: 0;
    }
  `;

  @property() name = "";
  @property() min = 0;
  @property() max = 10;

  @state()
  private _value = 0;

  render() {
    return html`
      <div class="ps-control-slider">
        <span>
          <label for="${this.name}">${this.name}</label>
          <p>${this._value}</p></span
        >
        <span>
          <p>${this.min}</p>
          <input
            id="${this.name}"
            name="${this.name}"
            type="range"
            value="${this._value}"
          />
          <p>${this.max}</p>
        </span>
      </div>
    `;
  }
}
