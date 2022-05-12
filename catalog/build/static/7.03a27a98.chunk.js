webpackJsonp([7], {
  972: function(e, n, a) {
    var t = a(5),
      r = a(48),
      o = a(370).PageRenderer;
    o.__esModule && (o = o.default);
    var l = r({
      displayName: "WrappedPageRenderer",
      getInitialState: function() {
        return { content: a(981) };
      },
      componentWillMount: function() {},
      render: function() {
        return t.createElement(
          o,
          Object.assign({}, this.props, { content: this.state.content })
        );
      }
    });
    (l.__catalog_loader__ = !0), (e.exports = l);
  },
  981: function(e, n) {
    e.exports =
      'This component renders an array of tags. It does not maintain state. State needs to be managed by a parent component, which can be notified of changes via `onClick` callback.\n\n## Non-empty tags\n\nRender with non-empty tags.\n\n```react\nshowSource: true\n---\n<Provider>\n  <Tags\n    tags={[\n      { key: "red", value: "Red" },\n      { key: "green", value: "Green" },\n      { key: "blue", value: "Blue" },\n      { key: "yellow", value: "Yellow" },\n      { key: "orange", value: "Orange" }\n    ]}\n    onClick={value => alert(`onClick: ${value}`)}\n  />\n</Provider>\n```\n\n## Empty tags\n\nRender with empty `tags` array. You cannot omit `tags` because it is a required prop.\n\n```react\nshowSource: true\n---\n<Provider>\n  <Tags tags={[]} onClick={value => alert(`onClick: ${value}`)} />\n</Provider>\n```\n\n## Disabled\n\nYou can disable the component with the `disabled` flag.\n\n```react\nshowSource: true\n---\n<Provider>\n  <Tags\n    tags={[\n      { key: "red", value: "Red" },\n      { key: "green", value: "Green" },\n      { key: "blue", value: "Blue" },\n      { key: "yellow", value: "Yellow" },\n      { key: "orange", value: "Orange" }\n    ]}\n    disabled\n    onClick={value => alert(`onClick: ${value}`)}\n  />\n</Provider>\n```\n';
  }
});
//# sourceMappingURL=7.03a27a98.chunk.js.map
