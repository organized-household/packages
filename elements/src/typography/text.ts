import { customElement } from "lit/decorators.js";
import { html, LitElement } from "lit";

@customElement('oh-text')
export class OhText extends LitElement {
    override render() {
        return html`
            <p><slot></slot></p>
        `
    }
}