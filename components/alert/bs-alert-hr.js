
import { LitElement, html, css } from 'lit-element';
import { BsContentRebootCss, BsContentTypographyCss } from '@lit-element-bootstrap/content';

export class BsAlertHr extends LitElement {
    
    static get styles() {
        return [
            BsContentRebootCss,
            BsContentTypographyCss,
            css`
                :host([primary]) hr {
                    border-top-color: #9fcdff;
                }

                :host([secondary]) hr {
                    border-top-color: #c8cbcf;
                }

                :host([success]) hr {
                    border-top-color: #b1dfbb;
                }

                :host([info]) hr {
                    border-top-color: #abdde5;
                }

                :host([warning]) hr {
                    border-top-color: #ffe8a1;
                }

                :host([danger]) hr {
                    border-top-color: #f1b0b7;
                }

                :host([light]) hr {
                    border-top-color: #ececf6;
                }

                :host([dark]) hr {
                    border-top-color: #b9bbbe;
                }
            `
        ];
    }
    
    render() {
        return html`
            <hr />
        `;
    }
};

if(!window.customElements.get("bs-alert-hr")) 
    window.customElements.define('bs-alert-hr', BsAlertHr);