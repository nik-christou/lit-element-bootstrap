# @lit-element-bootstrap/button-group

An implementation of Bootstrap v4.3.1 button group components in LitElement.

## Live demo

[Go to live demo](https://lit-element-bootstrap.dev/component/buttons-group)

## Installation

Install via npm:

```shell
npm install @lit-element-bootstrap/button-group
```

Install via yarn:

```shell
yarn add @lit-element-bootstrap/button-group
```

Install via unpkg:

```html
https://unpkg.com/@lit-element-bootstrap/button-group@latest/unpkg/index.bundled.js
```

## Import

import all modules:

```javascript
import '@lit-element-bootstrap/button-group';
```

import specific module (preferred):

```javascript
import '@lit-element-bootstrap/button-group/bs-button-group.js';
```

import specific class:

```javascript
// import specific class from all modules
import { BsButtonGroup } from '@lit-element-bootstrap/button-group';

// import specific class
import { BsButtonGroup } from '@lit-element-bootstrap/button-group/bs-button-group.js';
```

## Examples

Button group

```html
<bs-button-group>
    <bs-button context="secondary">Left</bs-button>
    <bs-button context="secondary">Middle</bs-button>
    <bs-button context="secondary">Right</bs-button>
</bs-button-group>
```

![Button_group](./docs/button_group.png)

Toolbar with button groups

```html
<bs-button-toolbar>
    <bs-button-group style="margin-right: 0.5rem;">
        <bs-button context="secondary">1</bs-button>
        <bs-button context="secondary">2</bs-button>
        <bs-button context="secondary">3</bs-button>
        <bs-button context="secondary">4</bs-button>
    </bs-button-group>
    <bs-button-group style="margin-right: 0.5rem;">
        <bs-button context="secondary">5</bs-button>
        <bs-button context="secondary">6</bs-button>
        <bs-button context="secondary">7</bs-button>
    </bs-button-group>
    <bs-button-group style="margin-right: 0.5rem;">
        <bs-button context="secondary">8</bs-button>
    </bs-button-group>
</bs-button-toolbar>
```

![Toolbar_button_group](./docs/toolbar_button_group.png)

Toolbar with button group and input group

```html
<bs-button-toolbar style="margin-bottom: 1rem;">
    <bs-button-group style="margin-right: 0.5rem;">
        <bs-button context="secondary">1</bs-button>
        <bs-button context="secondary">2</bs-button>
        <bs-button context="secondary">3</bs-button>
        <bs-button context="secondary">4</bs-button>
    </bs-button-group>
    <bs-input-group>
        <bs-input-group-prepend>
            <bs-input-group-text>@</bs-input-group-text>
        </bs-input-group-prepend>
        <bs-form-input placeholder="Input group example"></bs-form-input>
    </bs-input-group>
</bs-button-toolbar>
```

![Toolbar_with_input](./docs/toolbar_with_input.png)

Button group sizes

```html
<bs-button-group size="large">
    <bs-button context="secondary">Left</bs-button>
    <bs-button context="secondary">Middle</bs-button>
    <bs-button context="secondary">Right</bs-button>
</bs-button-group>

<bs-button-group>
    <bs-button context="secondary">Left</bs-button>
    <bs-button context="secondary">Middle</bs-button>
    <bs-button context="secondary">Right</bs-button>
</bs-button-group>

<bs-button-group size="small">
    <bs-button context="secondary">Left</bs-button>
    <bs-button context="secondary">Middle</bs-button>
    <bs-button context="secondary">Right</bs-button>
</bs-button-group>
```

![Button_group_sizes](./docs/button_group_sizes.png)

Button group with a dropdown

```html
<bs-button-group>
    <bs-button context="secondary">1</bs-button>
    <bs-button context="secondary">2</bs-button>
    <bs-button-group>
        <bs-dropdown>
            <bs-button context="secondary" dropdown-toggle>Dropdown</bs-button>
            <bs-dropdown-menu down x-placement="bottom-start">
                <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
            </bs-dropdown-menu>
        </bs-dropdown>
    </bs-button-group>
</bs-button-group>
```

Button group in a vertical direction

```html
<bs-button-group direction="vertical">
    <bs-button context="secondary">Button</bs-button>
    <bs-button context="secondary">Button</bs-button>
    <bs-button context="secondary">Button</bs-button>
    <bs-button context="secondary">Button</bs-button>
    <bs-button context="secondary">Button</bs-button>
    <bs-button context="secondary">Button</bs-button>
</bs-button-group>
```

Button group in vertical direction with dropdown

```html
<bs-button-group direction="vertical">
    <bs-button context="secondary">Button</bs-button>
    <bs-button context="secondary">Button</bs-button>
    <bs-button-group>
        <bs-dropdown>
            <bs-button context="secondary" dropdown-toggle>Dropdown</bs-button>
            <bs-dropdown-menu down x-placement="bottom-start">
                <bs-dropdown-item-link index="0" title="Dropdown link"></bs-dropdown-item-link>
                <bs-dropdown-item-link index="1" title="Dropdown link"></bs-dropdown-item-link>
            </bs-dropdown-menu>
        </bs-dropdown>
    </bs-button-group>
</bs-button-group>
```

## Components

Tag | Class |
--- | --- |
`<bs-button-group>` | BsButtonGroup |
`<bs-button-toolbar` | BsButtonToolbar |

## Slots

### bs-button-group

Name | Description |
--- | --- |
slot | Place button group items |
