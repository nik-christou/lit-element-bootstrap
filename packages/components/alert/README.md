# lit-element-bootstrap/alert

An implementation of Bootstrap v4.3.1 alert components in LitElement.

## Live demo

[Go to live demo](https://lit-element-bootstrap.dev/component/alerts)

## Installation

Install via npm:

```shell
npm install @lit-element-bootstrap/alert
```

Install via yarn:

```shell
yarn add @lit-element-bootstrap/alert
```

Install via unpkg:

```html
https://unpkg.com/@lit-element-bootstrap/alert@latest/unpkg/index.bundled.js
```

## Import

import all modules:

```javascript
import '@lit-element-bootstrap/alert';
```

import specific module (preferred):

```javascript
import '@lit-element-bootstrap/alert/bs-alert.js';
```

import specific class:

```javascript
// import specific class from all modules
import { BsAlert } from '@lit-element-bootstrap/alert';

// import specific class
import { BsAlert } from '@lit-element-bootstrap/alert/bs-alert.js';
```

## Examples

Plain alert

```html
<bs-alert context="success">
    <p>A simple primary alert—check it out!</p>
</bs-alert>
```

![Plain alert](./docs/plain_alert.png)

Dismissable alert

```html
<bs-alert context="warning" dismissable>
    <p>A simple primary alert—check it out!</p>
    <bs-alert-dismiss slot="dismiss"></bs-alert-dismiss>
</bs-alert>
```

![Plain alert](./docs/dismissable_alert.png)

Additional content alert

```html
<bs-alert context="primary" dismissable>
    <h4 slot="heading">Well done!</h4>
    <div>
        Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
        <bs-alert-hr context="primary"></bs-alert-hr>
        <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </div>
    <bs-alert-dismiss slot="dismiss"></bs-alert-dismiss>
</bs-alert>
```

![Additional content](./docs/additional_content.png)

## Components

Tag | Class |
--- | --- |
`<bs-alert>` | BsAlert |
`<bs-alert-link>` | BsAlertLink |
`<bs-alert-hr>` | BsAlertHr |
`<bs-alert-dismiss>` | BsAlertDismiss |

## Methods

#### bs-alert

Method  | Returns | Description
--- | --- | --- |
dismiss() | Promise | Dismisses the alert, but it is not removed from the DOM. it is left up to the parent element to either catch the `closed.bs.alert` event or `await` on the `Promise` and then to manually call `remove()`

## Events

#### bs-alert

Event | Description
--- | --- |
close.bs.alert | Fired in the beginning of alert dismissal |
closed.bs.alert | Fired in the end of alert dismissal (will wait for CSS transition to complete) |

#### bs-alert-dismiss

Event | Description
--- | --- |
close.button.click | Fired when the close button has been clicked |

## Slots

#### bs-alert

Name | Description |
--- | --- |
slot="heading" | Place alert header content |
slot="dismiss" | Place content that displays a close button |

## Theming

#### bs-alert

Property | Default value | Description
--- | --- | --- |
--alert-color | user agent | Set the alert text color |
--alert-bg-color | user agent | Set the alert background color |
--alert-bd-color | user agent | Set the alert border color |
--alert-primary-color | #004085 | Set the primary context text color |
--alert-primary-bg-color | #cce5ff  | Set the primary context background color |
--alert-primary-bd-color | #b8daff | Set the primary context border color |
--alert-secondary-color | #383d41 | Set the secondary context text color |
--alert-secondary-bg-color | #e2e3e5 | Set the secondary context background color |
--alert-secondary-bd-color | #d6d8db | Set the secondary context border color |
--alert-success-color | #155724 | Set the success context text color |
--alert-success-bg-color | #d4edda | Set the success context background color |
--alert-success-bd-color | #c3e6cb | Set the success context border color |
--alert-info-color | #0c5460 | Set the info context text color |
--alert-info-bg-color | #d1ecf1 | Set the info context background color |
--alert-info-bd-color | #bee5eb | Set the info context border color |
--alert-warning-color | #856404 | Set the warning context text color |
--alert-warning-bg-color | #fff3cd | Set the warning context background color |
--alert-warning-bd-color | #ffeeba | Set the warning context border color |
--alert-danger-color | #721c24 | Set the danger context border color |
--alert-danger-bg-color | #f8d7da | Set the danger context background color |
--alert-danger-bd-color | #f5c6cb | Set the danger context border color |
--alert-light-color | #818182 | Set the light context text color |
--alert-light-bg-color | #fefefe | Set the light context background color |
--alert-light-bd-color | #fdfdfe | Set the light context border color |
--alert-dark-color | #1b1e21 | Set the dark context text color |
--alert-dark-bg-color | #d6d8d9 | Set the dark context background color |
--alert-dark-bd-color | #c6c8ca | Set the dark context border color |

#### bs-alert-link

Property | Default value | Description
--- | --- | --- |
--alert-link-color | #007bff | Set the alert link color |
--alert-link-font-weight | 700 | Set the alert link text font weight |
--alert-link-text-decoration | none | Set the alert link text decoration |
--alert-link-bg-color | transparent | Set the alert link background color |
--alert-link-hover-color | #0056b3 | Set the alert link hover text color |
--alert-link-hover-text-decoration | underline | Set the alert link hover text decoration |
--alert-link-primary-color | #002752 | Set the alert link primary context text color |
--alert-link-secondary-color | #202326 | Set the alert link secondary context text color |
--alert-link-success-color | #0b2e13 | Set the alert link success context text color | 
--alert-link-info-color | #062c33 | Set the alert link info context text color |
--alert-link-warning-color | #533f03 | Set the alert link warning context text color |
--alert-link-danger-color | #491217 | Set the alert link danger context text color |
--alert-link-light-color | #686868 | Set the alert link light context text color |
--alert-link-dark-color | #040505 | Set the alert link dark context text color |

#### bs-alert-hr

Property | Default value | Description
--- | --- | --- |
--alert-hr-bd-top-color | rgba(0, 0, 0, 0.1) | Set the horizontal line top border color |
--alert-hr-primary-bd-top-color | #9fcdff | Set the horizontal line context primary top border color |
--alert-hr-secondary-bd-top-color | #c8cbcf | Set the horizontal line context secondary top border color |
--alert-hr-success-bd-top-color | #b1dfbb | Set the horizontal line context success top border color |
--alert-hr-info-bd-top-color | #abdde5 | Set the horizontal line context info top border color |
--alert-hr-warning-bd-top-color | #ffe8a1 | Set the horizontal line context warning top border color |
--alert-hr-danger-bd-top-color | #f1b0b7 | Set the horizontal line context danger top border color |
--alert-hr-light-bd-top-color | #ececf6 | Set the horizontal line context light top border color |
--alert-hr-dark-bd-top-color | #b9bbbe | Set the horizontal line context dark top border color |