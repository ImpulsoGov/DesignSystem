webpackJsonp([6], {
  973: function(e, n, l) {
    var a = l(5),
      t = l(48),
      o = l(370).PageRenderer;
    o.__esModule && (o = o.default);
    var u = t({
      displayName: "WrappedPageRenderer",
      getInitialState: function() {
        return { content: l(982) };
      },
      componentWillMount: function() {},
      render: function() {
        return a.createElement(
          o,
          Object.assign({}, this.props, { content: this.state.content })
        );
      }
    });
    (u.__catalog_loader__ = !0), (e.exports = u);
  },
  982: function(e, n) {
    e.exports =
      'This component allows managing a selection of values. Values from the dropdown can be added to the selection and selected values can be clicked to remove them from the selection. This component does not manage state. State needs to be managed by a parent component, which can be notified of changes with `onAddValue` and `onRemoveValue` callbacks.\n\n## Selectable and selected values\n\nRender with both `selectable` and `selected` non-empty.\n\n```react\nshowSource: true\n---\n<Provider>\n  <ValuePicker\n    title="Colors"\n    selectable={[\n      { key: "red", value: "Red" },\n      { key: "yellow", value: "Yellow" }\n    ]}\n    selected={[\n      { key: "blue", value: "Blue" },\n      { key: "green", value: "Green" },\n      { key: "black", value: "Black" }\n    ]}\n    onAddValue={value => alert(`onAddValue: ${value}`)}\n    onRemoveValue={value => alert(`onRemoveValue: ${value}`)}\n  />\n</Provider>\n```\n\n## Selectable values but no selected values\n\nRender with `selectable` non-empty and `selected` empty.\n\n```react\nshowSource: true\n---\n<Provider>\n  <ValuePicker\n    title="Colors"\n    selectable={[\n      { key: "red", value: "Red" },\n      { key: "yellow", value: "Yellow" }\n    ]}\n    selected={[]}\n    onAddValue={value => alert(`onAddValue: ${value}`)}\n    onRemoveValue={value => alert(`onRemoveValue: ${value}`)}\n  />\n</Provider>\n```\n\n## Selected values but no selectable values\n\nRender with `selectable` empty and `selected` non-empty.\n\n```react\nshowSource: true\n---\n<Provider>\n  <ValuePicker\n    title="Colors"\n    selectable={[]}\n    selected={[\n      { key: "blue", value: "Blue" },\n      { key: "green", value: "Green" },\n      { key: "black", value: "Black" }\n    ]}\n    onAddValue={value => alert(`onAddValue: ${value}`)}\n    onRemoveValue={value => alert(`onRemoveValue: ${value}`)}\n  />\n</Provider>\n```\n\n## Disabled\n\nYou can disable the component with the `disabled` flag.\n\n```react\nshowSource: true\n---\n<Provider>\n  <ValuePicker\n    disabled={true}\n    title="Colors"\n    selectable={[\n      { key: "red", value: "Red" },\n      { key: "yellow", value: "Yellow" }\n    ]}\n    selected={[\n      { key: "blue", value: "Blue" },\n      { key: "green", value: "Green" },\n      { key: "black", value: "Black" }\n    ]}\n    onAddValue={value => alert(`onAddValue: ${value}`)}\n    onRemoveValue={value => alert(`onRemoveValue: ${value}`)}\n  />\n</Provider>\n```\n';
  }
});
//# sourceMappingURL=6.c4d3e7f6.chunk.js.map
