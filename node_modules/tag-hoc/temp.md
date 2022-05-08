
```js
const Tag = tag(props => Object.assign(props, {
  w: null,
  width: null,
  fontSize: null,
}))

const Tag = tag(({
  width,
  w,
  fontSize,
  ...rest
}) => rest)
```


