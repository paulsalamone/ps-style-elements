import { LitElement, html } from 'lit';

@customElement("slider-group", SliderGroup)
export class SliderGroup extends LitElement {

  static properties = {
    message: {},
  };
  // this is
  constructor() {
    super();
    this.message = 'Hello again.';
  }
  // this is a comment 
  render() {
    return html`
    <div>
    <h2>This is the Slider Group - ${this.message}
</h2>
    <form>
    <label for="control-a">Label</label>
    <input name="control-a" type="range" min="0" max="10" /> </form>
    </div>
  `;
  }
}