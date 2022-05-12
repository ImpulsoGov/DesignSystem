webpackJsonp([0], {
  969: function(n, e, t) {
    var a = t(5),
      o = t(48),
      r = t(370).PageRenderer;
    r.__esModule && (r = r.default);
    var i = o({
      displayName: "WrappedPageRenderer",
      getInitialState: function() {
        return { content: t(978) };
      },
      componentWillMount: function() {},
      render: function() {
        return a.createElement(
          r,
          Object.assign({}, this.props, { content: this.state.content })
        );
      }
    });
    (i.__catalog_loader__ = !0), (n.exports = i);
  },
  978: function(n, e) {
    n.exports =
      '## Headline Large\n\n```type\n{\n  "headings": [128,96,64,48,32],\n  "font": "inter",\n  "color": "#1F1F1F",\n  "tracking": 4\n}\n```\n\n## Headline Medium\n\n## Headline Small\n\n## Body\n';
  }
});
//# sourceMappingURL=0.64522c67.chunk.js.map
