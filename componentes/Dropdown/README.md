This component encapsulates `<select>`. It does does not maintain state, i.e. it does not store the selected option. State needs to be managed by a parent component, which can be notified of changes via `onChange` callback.

## Selected value is valid option key

Render with `value` being a `key` from the `options` array.

```react
showSource: true
---
  <Dropdown
    options={[
      { key: "red", value: "Red" },
      { key: "green", value: "Green" },
      { key: "blue", value: "Blue" }
    ]}
    value="blue"
    onChange={value => alert(`onChange: ${value}`)}
  />
```

## Selected value is invalid option key

Render with `value` provided, but not a valid `key` from `options`.

```react
showSource: true
---
  <Dropdown
    options={[
      { key: "red", value: "Red" },
      { key: "green", value: "Green" },
      { key: "blue", value: "Blue" }
    ]}
    value="black"
    onChange={value => alert(`onChange: ${value}`)}
  />
```

## No value selected

Render without providing `value`.

```react
showSource: true
---
  <Dropdown
    options={[
      { key: "red", value: "Red" },
      { key: "green", value: "Green" },
      { key: "blue", value: "Blue" }
    ]}
    onChange={value => alert(`onChange: ${value}`)}
  />
```

## No options

Render with empty `options` array. You cannot omit `options` because it is a required prop.

```react
showSource: true
---
  <Dropdown options={[]} onChange={value => alert(`onChange: ${value}`)} />
```

## Custom placeholder

You can provide a custom placeholder with the `placeholder` prop.

```react
showSource: true
---
  <Dropdown
    options={[
      { key: "red", value: "Red" },
      { key: "green", value: "Green" },
      { key: "blue", value: "Blue" }
    ]}
    value="black"
    placeholder="Make your selection..."
    onChange={value => alert(`onChange: ${value}`)}
  />
```

## Disabled

You can disable the component with the `disabled` flag.

```react
showSource: true
---
  <Dropdown
    options={[
      { key: "red", value: "Red" },
      { key: "green", value: "Green" },
      { key: "blue", value: "Blue" }
    ]}
    value="blue"
    onChange={value => alert(`onChange: ${value}`)}
    disabled
  />
```