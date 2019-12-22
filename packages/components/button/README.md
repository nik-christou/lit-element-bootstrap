# @lit-element-bootstrap/button

An implementation of Bootstrap v4.3.1 breadcrumb components in LitElement.

## Live demo

[Go to live demo](https://lit-element-bootstrap.dev/component/button)

## Installation

Install via npm:

```shell
npm install @lit-element-bootstrap/button
```

Install via yarn:

```shell
yarn add @lit-element-bootstrap/button
```

Install via unpkg:

```html
https://unpkg.com/@lit-element-bootstrap/button@latest/unpkg/index.bundled.js
```

## Import

import all modules:

```javascript
import '@lit-element-bootstrap/button';
```

import specific module (preferred):

```javascript
import '@lit-element-bootstrap/button/bs-button.js';
```

import specific class:

```javascript
// import specific class from all modules
import { BsButton } from '@lit-element-bootstrap/button';

// import specific class
import { BsButton } from '@lit-element-bootstrap/button/bs-button.js';
```

All buttons share common functionality via a mixin

```javascript
import { BsButtonMixin } from "@lit-element-bootstrap/button/bs-button-mixin.js";
```

To use context themes import the appropiated CSS and include it to the styles array:

```javascript
import { BsButtonPrimaryCss } from '@lit-element-bootstrap/button/css/bs-button-primary.css.js';

static get styles() {
    return [
        BsButtonPrimaryCss
    ];
}
```

For button sizes and block behaviour import appropiated CSS and include it to the styles array:

```javascript
import { BsButtonSizeCss } from '@lit-element-bootstrap/button/css/bs-button-size.css.js';
import { BsButtonBlockCss } from '@lit-element-bootstrap/button/css/bs-button-block.css.js';

static get styles() {
    return [
        BsButtonSizeCss,
        BsButtonBlockCss
    ];
}
```

## Examples

Buttons with context

```html
<bs-button context="primary">Primary</bs-button>
<bs-button context="secondary">Secondary</bs-button>
<bs-button context="success">Success</bs-button>
<bs-button context="danger">Danger</bs-button>
<bs-button context="warning">Warning</bs-button>
<bs-button context="info">Info</bs-button>
<bs-button context="light">Light</bs-button>
<bs-button context="dark">Dark</bs-button>
<bs-button context="link">Link</bs-button>
```

![buttons_with_context](./docs/button_contexts.png)

Button variations

```html
<bs-button-link context="primary">Link</bs-button-link>
<bs-button context="primary" type="submit">Button</bs-button>
<bs-button-input context="primary" label="Input"></bs-button-input>
<bs-button-input context="primary" label="Submit"></bs-button-input>
<bs-button-input context="primary" label="Reset"></bs-button-input>
```

![Button_variations](./docs/button_variations.png)

Outline buttons

```html
<bs-button context="primary" outline>Primary</bs-button>
<bs-button context="secondary" outline>Secondary</bs-button>
<bs-button context="success" outline>Success</bs-button>
<bs-button context="danger" outline>Danger</bs-button>
<bs-button context="warning" outline>Warning</bs-button>
<bs-button context="info" outline>Info</bs-button>
<bs-button context="light" outline>Light</bs-button>
<bs-button context="dark" outline>Dark</bs-button>
```

![Button_outlines](./docs/button_outlines.png)

Button sizes

```html
<bs-button context="primary" size="large">Large button</bs-button>
<bs-button context="secondary" size="large">Large button</bs-button>
<bs-button context="primary" size="small">Small button</bs-button>
<bs-button context="secondary" size="small">Small button</bs-button>
```

![Button_sizes](./docs/button_sizes.png)

Block buttons

```html
<bs-button context="primary" size="large" block>Block level button</bs-button>
<bs-button context="secondary" size="large" block>Block level button</bs-button>
```

![Button_blocks](./docs/button_blocks.png)

Active state

```html
<bs-button-link context="primary" active>Primary</bs-button-link>
<bs-button-link context="secondary" active>Secondary</bs-button-link>
<bs-button-link context="success" active>Success</bs-button-link>
<bs-button-link context="danger" active>Danger</bs-button-link>
<bs-button-link context="warning" active>Warning</bs-button-link>
<bs-button-link context="info" active>Info</bs-button-link>
<bs-button-link context="light" active>Light</bs-button-link>
<bs-button-link context="dark" active>Dark</bs-button-link>
<bs-button-link link active>Link</bs-button-link>
```

![Button_active](./docs/button_active.png)

Disabled state

```html
<bs-button context="primary" disabled>Primary</bs-button>
<bs-button context="secondary" disabled>Secondary</bs-button>
<bs-button context="success" disabled>Success</bs-button>
<bs-button context="danger" disabled>Danger</bs-button>
<bs-button context="warning" disabled>Warning</bs-button>
<bs-button context="info" disabled>Info</bs-button>
<bs-button context="light" disabled>Light</bs-button>
<bs-button context="dark" disabled>Dark</bs-button>
<bs-button link disabled>Link</bs-button>
```

![Button_disabled](./docs/button_disabled.png)

Toggle state

```html
<bs-button context="primary" toggle>Primary toggle</bs-button>
```

Toggle state

```html
<bs-button context="primary" toggle>Primary toggle</bs-button>
```

## Components

Tag | Class |
--- | --- |
`<bs-button>` | BsButton |
`<bs-button-link>` | BsButtonLink |
`<bs-button-input>` | BsButtonInput |

## Methods

Method  | Returns | Description
--- | --- | --- |
activate() | void | asynchronously sets the button in activate state
deactivate() | void | asynchronously removes activate state
disable() | void | asynchronously sets the button in disable state
enable() | void | asynchronously removes disable state

## Events

Event | Description
--- | --- |
bs-button-click | Fired when button is clicked |
bs-button-focusout | Fired button loses focus |

## Slots

Component | Name | Description |
--- | --- | --- |
bs-button | slot | Place button content |
bs-button-link | slot | Place link content |

## Theming

### bs-button-common.css

Property | Description | Default value
--- | --- | --- |
--btn-text-color | button text color | -
--btn-bg-color | button background color | -
--btn-bd-width | button border width | 1px
--btn-bd-style | button border style | solid
--btn-bd-color | button border color | transparent
--btn-bd-top-left-radius | button border top left radius | 0.25rem
--btn-bd-top-right-radius | button border top right radius | 0.25rem
--btn-bd-bottom-right-radius | button border bottom right radius | 0.25rem
--btn-bd-bottom-left-radius | button border bottom left radius | 0.25rem
--btn-display | button display | inline-block
--btn-font-weight | button font weight | 400
--btn-text-align | button text align | center
--btn-white-space | button white space | nowrap
--btn-vertical-align | button vertical align | middle
--btn-width | button width | -
--btn-height | button height | -
--btn-flex | button flex | -
--btn-pd-top | button padding top | 0.375rem
--btn-pd-bottom | button padding bottom | 0.375rem
--btn-pd-left | button padding left | 0.75rem
--btn-pd-right | button padding right | 0.75rem
--btn-font-size | button font size | 1rem
--btn-line-height | button line height | 1.5
--btn-position | button position | -
--btn-mg-top | button margin top | -
--btn-mg-right | button margin right | -
--btn-mg-left | button margin left | -
--btn-mg-bottom | button margin bottom | -
--btn-display-after | button ::after display | -
--btn-width-after | button ::after width | -
--btn-height-after | button ::after height | -
--btn-margin-left-after | button ::after margin left | -
--btn-vertical-align-after | button ::after vertical align | -
--btn-content-after | button ::after content | -
--btn-border-top-after | button ::after border top | -
--btn-border-right-after | button ::after border right after | -
--btn-border-bottom-after | button ::after border bottom | -
--btn-border-left-after | button ::after border left | -
--btn-margin-left-empty-after | button ::after:empty margin left | -
--btn-display-before | button ::before display | -
--btn-width-before | button ::before width | -
--btn-height-before | button ::before height | -
--btn-margin-left-before | button ::before margin left | -
--btn-vertical-align-before | button ::before vertical align | -
--btn-content-before | button ::before content | -
--btn-border-top-before | button ::before border top | -
--btn-border-right-before | button ::before border right | -
--btn-border-bottom-before | button ::before border bottom | -
--btn-border-left-before | button ::before border left | -
--btn-text-color-hover | button hover text color | #212529
--btn-text-decoration-hover | button hover text decoration | none
--btn-z-index-hover | button hover z-index | -
--btn-bd-color-hover | button hover border color | -
--btn-box-shadow-hover | button hover box shadow | -
--btn-bg-color-hover | button hover background color | -
--btn-box-shadow-focus | button focus box-shadow | 0 0 0 0.2rem rgba(0, 123, 255, 0.25)
--btn-text-color-focus | button focus text color | -
--btn-z-index-focus | button focus z-index | -
--btn-bg-color-focus | button focus background color | -
--btn-bd-color-focus | button focus border color | -
--btn-text-color-disabled | button disabled text color | -
--btn-bg-color-disabled | button disabled background color | -
--btn-bd-color-disabled | button disabled border color | -
--btn-opacity-disabled | button disabled opacity | 0.65
--btn-pointer-events-disabled | button disabled pointer-events | none
--btn-text-color-active | button active text color | -
--btn-bg-color-active | button active background color | -
--btn-bd-color-active | button active border color | -
--btn-box-shadow-active-focus | button active focus box-shadow | -
--btn-z-index-active | button active z-index | -

### bs-button-primary.css

Property | Description | Default value
--- | --- | --- |
--primary-color | primary color to use | --primary if present, otherwise #007bff
--btn-primary-text-color | primary text color | #fff
--btn-primary-bg-color | primary background color | --primary-color
--btn-primary-bd-color | primary border color | --primary-color
--btn-primary-text-color-hover | primary hover text color | #fff
--btn-primary-bg-color-hover | primary hover background color | #0069d9
--btn-primary-bd-color-hover | primary hover border color | #0062cc
--btn-primary-bd-color-focus | primary focus border color | #0062cc
--btn-primary-bg-color-focus | primary focus background color | #0069d9
--btn-primary-text-color-focus | primary focus text color |#fff
--btn-primary-box-shadow-focus | primary focus box shadow | 0 0 0 0.2rem rgba(38, 143, 255, 0.5)
--btn-primary-text-color-disabled | primary disabled text color | #fff
--btn-primary-bg-color-disabled | primary disabled background color  | --primary-color
--btn-primary-bd-color-disabled | primary disabled border color | --primary-color
--btn-primary-text-color-active | primary active text color | #fff
--btn-primary-bg-color-active | primary active background color | #0062cc
--btn-primary-bd-color-active | primary active border color | #005cbf
--btn-primary-box-shadow-active-focus | primary active focus box shadow | 0 0 0 0.2rem rgba(0, 123, 255, 0.5)
--btn-outline-primary-text-color | primary outline text color | --primary-color
--btn-outline-primary-bg-color | primary outline background color | transparent
--btn-outline-primary-bd-color | primary outline border color | --primary-color
--btn-outline-primary-text-color-hover | primary outline hover text color | #fff
--btn-outline-primary-bg-color-hover | primary outline hover background color | --primary-color
--btn-outline-primary-bd-color-hover | primary outline hover border color | --primary-color
--btn-outline-primary-box-shadow-focus | primary outline focus box shadow | 0 0 0 0.2rem rgba(0, 123, 255, 0.5)
--btn-outline-primary-text-color-disabled | primary outline disabled text color | --primary-color
--btn-outline-primary-bg-color-disabled  | primary outline disabled background color | transparent
--btn-outline-primary-text-color-active | primary outline active text color | #fff
--btn-outline-primary-bg-color-active | primary outline active background color | --primary-color
--btn-outline-primary-bd-color-active | primary outline active border color | --primary-color
--btn-outline-primary-box-shadow-active-focus | primary outline active focus box shadow | 0 0 0 0.2rem rgba(0, 123, 255, 0.5)

### bs-button-secondary.css

Property | Description | Default value
--- | --- | --- |
--secondary-color | secondary color to use | --secondary if present, otherwise #6c757d
--btn-secondary-text-color | secondary text color | #fff
--btn-secondary-bg-color | secondary background color | --secondary-color
--btn-secondary-bd-color | secondary border color | --secondary-color
--btn-secondary-text-color-hover | secondary hover text color | #fff
--btn-secondary-bg-color-hover | secondary hover background color | #5a6268
--btn-secondary-bd-color-hover | secondary hover border color | #545b62
--btn-secondary-bd-color-focus | secondary focus border color | #545b62
--btn-secondary-bg-color-focus | secondary focus background color | #5a6268
--btn-secondary-text-color-focus | secondary focus text color | #fff
--btn-secondary-box-shadow-focus | secondary focus box-shadow | 0 0 0 0.2rem rgba(108, 117, 125, 0.5)
--btn-secondary-text-color-disabled | secondary disabled text color | #fff
--btn-secondary-bg-color-disabled | secondary disable background color | --secondary-color
--btn-secondary-bd-color-disabled | secondary disabled border color | --secondary-color
--btn-secondary-text-color-active | secondary active text color | #fff
--btn-secondary-bg-color-active | secondary active background color | #545b62
--btn-secondary-bd-color-active | secondary active border color | #4e555b
--btn-secondary-box-shadow-active-focus | secondary active focus box-shadow | 0 0 0 0.2rem rgba(108, 117, 125, 0.5)
--btn-outline-secondary-text-color | secondary outline text color | --secondary-color
--btn-outline-secondary-bg-color | secondary outline background color | transparent
--btn-outline-secondary-bd-color | secondary outline border color | --secondary-color
--btn-outline-secondary-text-color-hover | secondary outline hover text color | #fff
--btn-outline-secondary-bg-color-hover | secondary outline hover background color | --secondary-color
--btn-outline-secondary-bd-color-hover | secondary outline hover border color | --secondary-color
--btn-outline-secondary-box-shadow-focus | secondary outline focus box-shadow | 0 0 0 0.2rem rgba(108, 117, 125, 0.5)
--btn-outline-secondary-text-color-disabled | secondary outline disabled text color | --secondary-color
--btn-outline-secondary-bg-color-disabled | secondary outline disabled background color | #transparent
--btn-outline-secondary-text-color-active | secondary outline active text color | #fff
--btn-outline-secondary-bg-color-active | secondary outline active background color | --secondary-color
--btn-outline-secondary-bd-color-active | secondary outline active border color | --secondary-color
--btn-outline-secondary-box-shadow-active-focus | secondary outline active focus box-shadow | 0 0 0 0.2rem rgba(108, 117, 125,0.5)

### bs-button-success.css

Property | Description | Default value
--- | --- | --- |
--success-color | success color to use | --success if present, otherwise #28a745
--btn-success-text-color | success text color | #fff
--btn-success-bg-color | success background color | --success-color
--btn-success-bd-color | success border color | --success-color
--btn-success-text-color-hover | success hover text color | #fff
--btn-success-bg-color-hover | success hover background color | #218838
--btn-success-bd-color-hover | success hover border color | #1e7e34
--btn-success-bd-color-focus | success focus border color | #1e7e34
--btn-success-bg-color-focus | success focus background color | #218838
--btn-success-text-color-focus | success focus text color | #fff
--btn-success-box-shadow-focus | sucess focus box-shadow | 0 0 0 0.2rem rgba(40, 167, 69, 0.5)
--btn-success-text-color-disabled | success disabled text color | #fff
--btn-success-bg-color-disabled | success disabled background color | --success-color
--btn-success-bd-color-disabled | success disabled border color | --success-color
--btn-success-text-color-active | success active text color | #fff
--btn-success-bg-color-active | success active background color | #1e7e34
--btn-success-bd-color-active | success active border color | #1c7430
--btn-success-box-shadow-active-focus | success active focus box-shadow | 0 0 0 0.2rem rgba(40, 167, 69, 0.5)
--btn-outline-success-text-color | success outline text color | --success-color
--btn-outline-success-bg-color | success outline background color | transparent
--btn-outline-success-bd-color | success outline border color | --success-color
--btn-outline-success-text-color-hover | success outline hover text color | #fff
--btn-outline-success-bg-color-hover | success outline hover background color | --success-color
--btn-outline-success-bd-color-hover | success outline hover border color | --success-color
--btn-outline-success-box-shadow-focus | success outline focus box-shadow | 0 0 0 0.2rem rgba(40, 167, 69, 0.5)
--btn-outline-success-text-color-disabled | success outline disabled text color | --success-color
--btn-outline-success-bg-color-disabled | success outline disabled background color | #transparent
--btn-outline-success-text-color-active | success outline active text color | #fff
--btn-outline-success-bg-color-active | success outline active background color | --success-color
--btn-outline-success-bd-color-active | success outline active border color | --success-color
--btn-outline-success-box-shadow-active-focus | success outline active focus box-shadow | 0 0 0 0.2rem rgba(40, 167, 69, 0.5)

### bs-button-danger.css

Property | Description | Default value
--- | --- | --- |
--danger-color | danger color to use | --danger if present, otherwise #dc3545
--btn-danger-text-color | danger text color | #fff
--btn-danger-bg-color | danger background color | --danger-color
--btn-danger-bd-color | danger border color | --danger-color
--btn-danger-text-color-hover | danger hover text color | #fff
--btn-danger-bg-color-hover | danger hover background color | #c82333
--btn-danger-bd-color-hover | danger hover border color | #bd2130
--btn-danger-bd-color-focus | danger focus border color | #bd2130
--btn-danger-bg-color-focus | danger focus background color | #c82333
--btn-danger-text-color-focus | danger focus text color | #fff
--btn-danger-box-shadow-focus | sucess focus box-shadow | 0 0 0 0.2rem rgba(220, 53, 69, 0.5)
--btn-danger-text-color-disabled | danger disabled text color | #fff
--btn-danger-bg-color-disabled | danger disabled background color | --danger-color
--btn-danger-bd-color-disabled | danger disabled border color | --danger-color
--btn-danger-text-color-active | danger active text color | #fff
--btn-danger-bg-color-active | danger active background color | #bd2130
--btn-danger-bd-color-active | danger active border color | #b21f2d
--btn-danger-box-shadow-active-focus | danger active focus box-shadow | 0 0 0 0.2rem rgba(220, 53, 69, 0.5)
--btn-outline-danger-text-color | danger outline text color | --danger-color
--btn-outline-danger-bg-color | danger outline background color | transparent
--btn-outline-danger-bd-color | danger outline border color | --danger-color
--btn-outline-danger-text-color-hover | danger outline hover text color | #fff
--btn-outline-danger-bg-color-hover | danger outline hover background color | --danger-color
--btn-outline-danger-bd-color-hover | danger outline hover border color | --danger-color
--btn-outline-danger-box-shadow-focus | danger outline focus box-shadow | 0 0 0 0.2rem rgba(220, 53, 69, 0.5)
--btn-outline-danger-text-color-disabled | danger outline disabled text color | --danger-color
--btn-outline-danger-bg-color-disabled | danger outline disabled background color | #transparent
--btn-outline-danger-text-color-active | danger outline active text color | #fff
--btn-outline-danger-bg-color-active | danger outline active background color | --danger-color
--btn-outline-danger-bd-color-active | danger outline active border color | --danger-color
--btn-outline-danger-box-shadow-active-focus | danger outline active focus box-shadow | 0 0 0 0.2rem rgba(220, 53, 69, 0.5)

### bs-button-warning.css

Property | Description | Default value
--- | --- | --- |
--warning-color | warning color to use | --warning if present, otherwise #ffc107
--btn-warning-text-color | warning text color | #212529
--btn-warning-bg-color | warning background color | --warning-color
--btn-warning-bd-color | warning border color | --warning-color
--btn-warning-text-color-hover | warning hover text color | #212529
--btn-warning-bg-color-hover | warning hover background color | #e0a800
--btn-warning-bd-color-hover | warning hover border color | #d39e00
--btn-warning-bd-color-focus | warning focus border color | #d39e00
--btn-warning-bg-color-focus | warning focus background color | #e0a800
--btn-warning-text-color-focus | warning focus text color | #fff
--btn-warning-box-shadow-focus | sucess focus box-shadow | 0 0 0 0.2rem rgba(255, 193, 7, 0.5)
--btn-warning-text-color-disabled | warning disabled text color | #212529
--btn-warning-bg-color-disabled | warning disabled background color | --warning-color
--btn-warning-bd-color-disabled | warning disabled border color | --warning-color
--btn-warning-text-color-active | warning active text color | #212529
--btn-warning-bg-color-active | warning active background color | #d39e00
--btn-warning-bd-color-active | warning active border color | #c69500
--btn-warning-box-shadow-active-focus | warning active focus box-shadow | 0 0 0 0.2rem rgba(255, 193, 7, 0.5)
--btn-outline-warning-text-color | warning outline text color | --warning-color
--btn-outline-warning-bg-color | warning outline background color | transparent
--btn-outline-warning-bd-color | warning outline border color | --warning-color
--btn-outline-warning-text-color-hover | warning outline hover text color | #212529
--btn-outline-warning-bg-color-hover | warning outline hover background color | --warning-color
--btn-outline-warning-bd-color-hover | warning outline hover border color | --warning-color
--btn-outline-warning-box-shadow-focus | warning outline focus box-shadow | 0 0 0 0.2rem rgba(255, 193, 7, 0.5)
--btn-outline-warning-text-color-disabled | warning outline disabled text color | --warning-color
--btn-outline-warning-bg-color-disabled | warning outline disabled background color | #transparent
--btn-outline-warning-text-color-active | warning outline active text color | #212529
--btn-outline-warning-bg-color-active | warning outline active background color | --warning-color
--btn-outline-warning-bd-color-active | warning outline active border color | --warning-color
--btn-outline-warning-box-shadow-active-focus | warning outline active focus box-shadow | 0 0 0 0.2rem rgba(255, 193, 7, 0.5)

### bs-button-info.css

Property | Description | Default value
--- | --- | --- |
--info-color | info color to use | --info if present, otherwise #17a2b8
--btn-info-text-color | info text color | #fff
--btn-info-bg-color | info background color | --info-color
--btn-info-bd-color | info border color | --info-color
--btn-info-text-color-hover | info hover text color | #fff
--btn-info-bg-color-hover | info hover background color | #138496
--btn-info-bd-color-hover | info hover border color | #117a8b
--btn-info-bd-color-focus | info focus border color | #117a8b
--btn-info-bg-color-focus | info focus background color | #138496
--btn-info-text-color-focus | info focus text color | #fff
--btn-info-box-shadow-focus | sucess focus box-shadow | 0 0 0 0.2rem rgba(23, 162, 184, 0.5)
--btn-info-text-color-disabled | info disabled text color | #fff
--btn-info-bg-color-disabled | info disabled background color | --info-color
--btn-info-bd-color-disabled | info disabled border color | --info-color
--btn-info-text-color-active | info active text color | #fff
--btn-info-bg-color-active | info active background color | #117a8b
--btn-info-bd-color-active | info active border color | #10707f
--btn-info-box-shadow-active-focus | info active focus box-shadow | 0 0 0 0.2rem rgba(23, 162, 184, 0.5)
--btn-outline-info-text-color | info outline text color | --info-color
--btn-outline-info-bg-color | info outline background color | transparent
--btn-outline-info-bd-color | info outline border color | --info-color
--btn-outline-info-text-color-hover | info outline hover text color | #fff
--btn-outline-info-bg-color-hover | info outline hover background color | --info-color
--btn-outline-info-bd-color-hover | info outline hover border color | --info-color
--btn-outline-info-box-shadow-focus | info outline focus box-shadow | 0 0 0 0.2rem rgba(23, 162, 184, 0.5)
--btn-outline-info-text-color-disabled | info outline disabled text color | --info-color
--btn-outline-info-bg-color-disabled | info outline disabled background color | #transparent
--btn-outline-info-text-color-active | info outline active text color | #fff
--btn-outline-info-bg-color-active | info outline active background color | --info-color
--btn-outline-info-bd-color-active | info outline active border color | --info-color
--btn-outline-info-box-shadow-active-focus | info outline active focus box-shadow | 0 0 0 0.2rem rgba(23, 162, 184, 0.5)

### bs-button-light.css

Property | Description | Default value
--- | --- | --- |
--light-color | light color to use | --light if present, otherwise #f8f9fa
--btn-light-text-color | light text color | #212529
--btn-light-bg-color | light background color | --light-color
--btn-light-bd-color | light border color | --light-color
--btn-light-text-color-hover | light hover text color | #212529
--btn-light-bg-color-hover | light hover background color | #e2e6ea
--btn-light-bd-color-hover | light hover border color | #dae0e5
--btn-light-bd-color-focus | light focus border color | #dae0e5
--btn-light-bg-color-focus | light focus background color | #e2e6ea
--btn-light-text-color-focus | light focus text color | #212529
--btn-light-box-shadow-focus | sucess focus box-shadow | 0 0 0 0.2rem rgba(216, 217, 219, 0.5)
--btn-light-text-color-disabled | light disabled text color | #212529
--btn-light-bg-color-disabled | light disabled background color | --light-color
--btn-light-bd-color-disabled | light disabled border color | --light-color
--btn-light-text-color-active | light active text color | #212529
--btn-light-bg-color-active | light active background color | #dae0e5
--btn-light-bd-color-active | light active border color | #d3d9df
--btn-light-box-shadow-active-focus | light active focus box-shadow | 0 0 0 0.2rem rgba(216, 217, 219, 0.5)
--btn-outline-light-text-color | light outline text color | --light-color
--btn-outline-light-bg-color | light outline background color | transparent
--btn-outline-light-bd-color | light outline border color | --light-color
--btn-outline-light-text-color-hover | light outline hover text color | #212529
--btn-outline-light-bg-color-hover | light outline hover background color | --light-color
--btn-outline-light-bd-color-hover | light outline hover border color | --light-color
--btn-outline-light-box-shadow-focus | light outline focus box-shadow | 0 0 0 0.2rem rgba(248, 249, 250, 0.5)
--btn-outline-light-text-color-disabled | light outline disabled text color | --light-color
--btn-outline-light-bg-color-disabled | light outline disabled background color | #transparent
--btn-outline-light-text-color-active | light outline active text color | #212529
--btn-outline-light-bg-color-active | light outline active background color | --light-color
--btn-outline-light-bd-color-active | light outline active border color | --light-color
--btn-outline-light-box-shadow-active-focus | light outline active focus box-shadow | 0 0 0 0.2rem rgba(248, 249, 250, 0.5)

### bs-button-dark.css

Property | Description | Default value
--- | --- | --- |
--dark-color | dark color to use | --dark if present, otherwise #343a40
--btn-dark-text-color | dark text color | #fff
--btn-dark-bg-color | dark background color | --dark-color
--btn-dark-bd-color | dark border color | --dark-color
--btn-dark-text-color-hover | dark hover text color | #fff
--btn-dark-bg-color-hover | dark hover background color | #23272b
--btn-dark-bd-color-hover | dark hover border color | #1d2124
--btn-dark-bd-color-focus | dark focus border color | #1d2124
--btn-dark-bg-color-focus | dark focus background color | #23272b
--btn-dark-text-color-focus | dark focus text color | #fff
--btn-dark-box-shadow-focus | sucess focus box-shadow | 0 0 0 0.2rem rgba(52, 58, 64, 0.5)
--btn-dark-text-color-disabled | dark disabled text color | #fff
--btn-dark-bg-color-disabled | dark disabled background color | --dark-color
--btn-dark-bd-color-disabled | dark disabled border color | --dark-color
--btn-dark-text-color-active | dark active text color | #fff
--btn-dark-bg-color-active | dark active background color | #1d2124
--btn-dark-bd-color-active | dark active border color | #171a1d
--btn-dark-box-shadow-active-focus | dark active focus box-shadow | 0 0 0 0.2rem rgba(52, 58, 64, 0.5)
--btn-outline-dark-text-color | dark outline text color | --dark-color
--btn-outline-dark-bg-color | dark outline background color | transparent
--btn-outline-dark-bd-color | dark outline border color | --dark-color
--btn-outline-dark-text-color-hover | dark outline hover text color | #fff
--btn-outline-dark-bg-color-hover | dark outline hover background color | --dark-color
--btn-outline-dark-bd-color-hover | dark outline hover border color | --dark-color
--btn-outline-dark-box-shadow-focus | dark outline focus box-shadow | 0 0 0 0.2rem rgba(40, 167, 69, 0.5)
--btn-outline-dark-text-color-disabled | dark outline disabled text color | --dark-color
--btn-outline-dark-bg-color-disabled | dark outline disabled background color | #transparent
--btn-outline-dark-text-color-active | dark outline active text color | #fff
--btn-outline-dark-bg-color-active | dark outline active background color | --dark-color
--btn-outline-dark-bd-color-active | dark outline active border color | --dark-color
--btn-outline-dark-box-shadow-active-focus | dark outline active focus box-shadow | 0 0 0 0.2rem rgba(52, 58, 64, 0.5)

### bs-button-link.css

Property | Description | Default value
--- | --- | --- |
--btn-link-text-color | link text color | #007bff
--btn-link-bg-color | link background color | transparent
--btn-link-font-weight | link font weight | 400
--btn-link-text-color-hover | link hover text color | #0056b3
--btn-link-bg-color-hover | link hover background color | transparent
--btn-link-bd-color-hover | link hover border color | transparent
--btn-link-text-decoration-hover | link hover text decoration | underline
--btn-link-text-color-disabled | link disabled text color | #6c757d
--btn-link-pointer-events-disabled | link pointer-events-disabled | none
--btn-link-text-decoration-focus | link focus text decoration | underline
--btn-link-box-shadow-focus | link focus box-shadow | none
--btn--link-bd-color-focus | link focus border color | transparent

### bs-button-size.css

Property | Description | Default value
--- | --- | --- |
--bs-btn-small-top-pd | small padding top | 0.25rem
--bs-btn-small-bottom-pd | small padding bottom | 0.25rem
--bs-btn-small-left-pd | small padding left | 0.5rem
--bs-btn-small-right-pd | small padding right | 0.5rem
--bs-btn-small-font-size | small font size | 0.875rem
--bs-btn-small-line-height | small line-height | 1.5
--bs-btn-small-bd-top-left-radius | small top left border radius | 0.2rem
--bs-btn-small-bd-top-right-radius | small top right border radius | 0.2rem
--bs-btn-small-bd-bottom-right-radius | small bottom right radius  | 0.2rem
--bs-btn-small-bd-bottom-left-radius | small bottom left radius | 0.2rem
--bs-btn-large-top-pd | large padding top | 0.5rem
--bs-btn-large-bottom-pd | large padding bottom | 0.5rem
--bs-btn-large-left-pd | large padding left | 1rem
--bs-btn-large-right-pd | large padding right | 1rem
--bs-btn-large-font-size | large font size | 1.25rem
--bs-btn-large-line-height | large line-height | 1.5
--bs-btn-large-bd-top-left-radius | large top left border radius | 0.3rem
--bs-btn-large-bd-top-right-radius | large top right border radius | 0.3rem
--bs-btn-large-bd-bottom-right-radius | large bottom right border radius | 0.3rem
--bs-btn-large-bd-bottom-left-radius | large bottom left border radius | 0.3rem