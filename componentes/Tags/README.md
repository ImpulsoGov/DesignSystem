This component renders an array of tags. It does not maintain state. State needs to be managed by a parent component, which can be notified of changes via `onClick` callback.

## Non-empty tags

Render with non-empty tags.

```react
showSource: true
---
<Provider>
  <Tags
    tags={[
      { key: "red", value: "Red" },
      { key: "green", value: "Green" },
      { key: "blue", value: "Blue" },
      { key: "yellow", value: "Yellow" },
      { key: "orange", value: "Orange" }
    ]}
    onClick={value => alert(`onClick: ${value}`)}
  />
</Provider>
```

## Empty tags

Render with empty `tags` array. You cannot omit `tags` because it is a required prop.

```react
showSource: true
---
<Provider>
  <Tags tags={[]} onClick={value => alert(`onClick: ${value}`)} />
</Provider>
```

## Disabled

You can disable the component with the `disabled` flag.

```react
showSource: true
---
<Provider>
  <Tags
    tags={[
      { key: "red", value: "Red" },
      { key: "green", value: "Green" },
      { key: "blue", value: "Blue" },
      { key: "yellow", value: "Yellow" },
      { key: "orange", value: "Orange" }
    ]}
    disabled
    onClick={value => alert(`onClick: ${value}`)}
  />
</Provider>
```
