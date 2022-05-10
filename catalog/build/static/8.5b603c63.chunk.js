webpackJsonp([8], {
  971: function(e, n, o) {
    var a = o(5),
      r = o(48),
      t = o(370).PageRenderer;
    t.__esModule && (t = t.default);
    var l = r({
      displayName: "WrappedPageRenderer",
      getInitialState: function() {
        return { content: o(980) };
      },
      componentWillMount: function() {},
      render: function() {
        return a.createElement(
          t,
          Object.assign({}, this.props, { content: this.state.content })
        );
      }
    });
    (l.__catalog_loader__ = !0), (e.exports = l);
  },
  980: function(e, n) {
    e.exports =
      'This component encapsulates `<select>`. It does does not maintain state, i.e. it does not store the selected option. State needs to be managed by a parent component, which can be notified of changes via `onChange` callback.\n\n## Selected value is valid option key\n\nRender with `value` being a `key` from the `options` array.\n\n```react\nshowSource: true\n---\n<Provider>\n  <Dropdown\n    options={[\n      { key: "red", value: "Red" },\n      { key: "green", value: "Green" },\n      { key: "blue", value: "Blue" }\n    ]}\n    value="blue"\n    onChange={value => alert(`onChange: ${value}`)}\n  />\n</Provider>\n```\n\n## Selected value is invalid option key\n\nRender with `value` provided, but not a valid `key` from `options`.\n\n```react\nshowSource: true\n---\n<Provider>\n  <Dropdown\n    options={[\n      { key: "red", value: "Red" },\n      { key: "green", value: "Green" },\n      { key: "blue", value: "Blue" }\n    ]}\n    value="black"\n    onChange={value => alert(`onChange: ${value}`)}\n  />\n</Provider>\n```\n\n## No value selected\n\nRender without providing `value`.\n\n```react\nshowSource: true\n---\n<Provider>\n  <Dropdown\n    options={[\n      { key: "red", value: "Red" },\n      { key: "green", value: "Green" },\n      { key: "blue", value: "Blue" }\n    ]}\n    onChange={value => alert(`onChange: ${value}`)}\n  />\n</Provider>\n```\n\n## No options\n\nRender with empty `options` array. You cannot omit `options` because it is a required prop.\n\n```react\nshowSource: true\n---\n<Provider>\n  <Dropdown options={[]} onChange={value => alert(`onChange: ${value}`)} />\n</Provider>\n```\n\n## Custom placeholder\n\nYou can provide a custom placeholder with the `placeholder` prop.\n\n```react\nshowSource: true\n---\n<Provider>\n  <Dropdown\n    options={[\n      { key: "red", value: "Red" },\n      { key: "green", value: "Green" },\n      { key: "blue", value: "Blue" }\n    ]}\n    value="black"\n    placeholder="Make your selection..."\n    onChange={value => alert(`onChange: ${value}`)}\n  />\n</Provider>\n```\n\n## Disabled\n\nYou can disable the component with the `disabled` flag.\n\n```react\nshowSource: true\n---\n<Provider>\n  <Dropdown\n    options={[\n      { key: "red", value: "Red" },\n      { key: "green", value: "Green" },\n      { key: "blue", value: "Blue" }\n    ]}\n    value="blue"\n    onChange={value => alert(`onChange: ${value}`)}\n    disabled\n  />\n</Provider>\n```\n';
  }
});
//# sourceMappingURL=8.5b603c63.chunk.js.map
