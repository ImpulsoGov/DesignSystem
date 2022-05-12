This component allows managing a selection of values. Values from the dropdown can be added to the selection and selected values can be clicked to remove them from the selection. This component does not manage state. State needs to be managed by a parent component, which can be notified of changes with `onAddValue` and `onRemoveValue` callbacks.

## Selectable and selected values

Render with both `selectable` and `selected` non-empty.

```react
showSource: true
---
<Provider>
  <ValuePicker
    title="Colors"
    selectable={[
      { key: "red", value: "Red" },
      { key: "yellow", value: "Yellow" }
    ]}
    selected={[
      { key: "blue", value: "Blue" },
      { key: "green", value: "Green" },
      { key: "black", value: "Black" }
    ]}
    onAddValue={value => alert(`onAddValue: ${value}`)}
    onRemoveValue={value => alert(`onRemoveValue: ${value}`)}
  />
</Provider>
```

## Selectable values but no selected values

Render with `selectable` non-empty and `selected` empty.

```react
showSource: true
---
<Provider>
  <ValuePicker
    title="Colors"
    selectable={[
      { key: "red", value: "Red" },
      { key: "yellow", value: "Yellow" }
    ]}
    selected={[]}
    onAddValue={value => alert(`onAddValue: ${value}`)}
    onRemoveValue={value => alert(`onRemoveValue: ${value}`)}
  />
</Provider>
```

## Selected values but no selectable values

Render with `selectable` empty and `selected` non-empty.

```react
showSource: true
---
<Provider>
  <ValuePicker
    title="Colors"
    selectable={[]}
    selected={[
      { key: "blue", value: "Blue" },
      { key: "green", value: "Green" },
      { key: "black", value: "Black" }
    ]}
    onAddValue={value => alert(`onAddValue: ${value}`)}
    onRemoveValue={value => alert(`onRemoveValue: ${value}`)}
  />
</Provider>
```

## Disabled

You can disable the component with the `disabled` flag.

```react
showSource: true
---
<Provider>
  <ValuePicker
    disabled={true}
    title="Colors"
    selectable={[
      { key: "red", value: "Red" },
      { key: "yellow", value: "Yellow" }
    ]}
    selected={[
      { key: "blue", value: "Blue" },
      { key: "green", value: "Green" },
      { key: "black", value: "Black" }
    ]}
    onAddValue={value => alert(`onAddValue: ${value}`)}
    onRemoveValue={value => alert(`onRemoveValue: ${value}`)}
  />
</Provider>
```
