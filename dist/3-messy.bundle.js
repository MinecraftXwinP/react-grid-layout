webpackJsonp([7],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	var React = __webpack_require__(4);
	var _ = __webpack_require__(17);
	var ReactGridLayout = __webpack_require__(10);
	
	var MessyLayout = React.createClass({
	  displayName: "MessyLayout",
	  mixins: [React.addons.PureRenderMixin],
	
	  propTypes: {
	    onLayoutChange: React.PropTypes.func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: "layout",
	      items: 20,
	      rowHeight: 30,
	      cols: 12
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var layout = this.generateLayout();
	    return {
	      layout: layout
	    };
	  },
	
	  generateDOM: function generateDOM() {
	    return _.map(_.range(this.props.items), function (i) {
	      return React.createElement(
	        "div",
	        { key: i },
	        React.createElement(
	          "span",
	          { className: "text" },
	          i
	        )
	      );
	    });
	  },
	
	  generateLayout: function generateLayout() {
	    var p = this.props;
	    return _.map(new Array(p.items), function (item, i) {
	      var w = Math.ceil(Math.random() * 4);
	      var y = Math.ceil(Math.random() * 4) + 1;
	      return { x: i * 2 % 12, y: Math.floor(i / 6) * y, w: w, h: y, i: i };
	    });
	  },
	
	  onLayoutChange: function (layout) {
	    this.props.onLayoutChange(layout);
	  },
	
	  render: function render() {
	    return React.createElement(
	      ReactGridLayout,
	      React.__spread({ layout: this.state.layout, onLayoutChange: this.onLayoutChange
	      }, this.props),
	      this.generateDOM()
	    );
	  }
	});
	
	module.exports = MessyLayout;
	
	if (__webpack_require__.c[0] === module) {
	  __webpack_require__(11)(module.exports);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)(module)))

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90ZXN0L2V4YW1wbGVzLzMtbWVzc3kuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBTUUsU0FBTSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7O0FBRXRDLFlBQVMsRUFBRTtBQUNULG1CQUFjLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVTtJQUNoRDs7QUFFRCxrQkFBZSw2QkFBRztBQUNoQixZQUFPO0FBQ0wsZ0JBQVMsRUFBRSxRQUFRO0FBQ25CLFlBQUssRUFBRSxFQUFFO0FBQ1QsZ0JBQVMsRUFBRSxFQUFFO0FBQ2IsV0FBSSxFQUFFLEVBQUU7TUFDVCxDQUFDO0lBQ0g7O0FBRUQsa0JBQWUsNkJBQUc7QUFDaEIsU0FBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25DLFlBQU87QUFDTCxhQUFNLEVBQUUsTUFBTTtNQUNmLENBQUM7SUFDSDs7QUFFRCxjQUFXLHlCQUFHO0FBQ1osWUFBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFTLENBQUMsRUFBRTtBQUNsRCxjQUFROztXQUFLLEdBQUcsRUFBRSxDQUFFO1NBQUM7O2FBQU0sU0FBUyxFQUFDLE1BQU07V0FBRSxDQUFDO1VBQVE7UUFBTSxDQUFFO01BQy9ELENBQUMsQ0FBQztJQUNKOztBQUVELGlCQUFjLDRCQUFHO0FBQ2YsU0FBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUNuQixZQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVMsSUFBSSxFQUFFLENBQUMsRUFBRTtBQUNqRCxXQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQyxXQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsY0FBTyxFQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7TUFDcEUsQ0FBQyxDQUFDO0lBQ0o7O0FBRUQsaUJBQWMsRUFBRSxVQUFTLE1BQU0sRUFBRTtBQUMvQixTQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQzs7QUFFRCxTQUFNLG9CQUFHO0FBQ1AsWUFDRTtBQUFDLHNCQUFlO3dCQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU8sRUFBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWU7VUFDeEUsSUFBSSxDQUFDLEtBQUs7T0FDZixJQUFJLENBQUMsV0FBVyxFQUFFO01BRUgsQ0FDbEI7SUFDSDtFQUNGLENBQUMsQ0FBQzs7QUFFSCxPQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQzs7QUFFN0IsS0FBSSx3QkFBWSxLQUFLLE1BQU0sRUFBRTtBQUMzQixzQkFBTyxDQUFDLEVBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdC9hZGRvbnMnKTtcbnZhciBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XG52YXIgUmVhY3RHcmlkTGF5b3V0ID0gcmVxdWlyZSgncmVhY3QtZ3JpZC1sYXlvdXQnKTtcblxudmFyIE1lc3N5TGF5b3V0ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFtSZWFjdC5hZGRvbnMuUHVyZVJlbmRlck1peGluXSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBvbkxheW91dENoYW5nZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2xhc3NOYW1lOiBcImxheW91dFwiLFxuICAgICAgaXRlbXM6IDIwLFxuICAgICAgcm93SGVpZ2h0OiAzMCxcbiAgICAgIGNvbHM6IDEyXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIGxheW91dCA9IHRoaXMuZ2VuZXJhdGVMYXlvdXQoKTtcbiAgICByZXR1cm4ge1xuICAgICAgbGF5b3V0OiBsYXlvdXRcbiAgICB9O1xuICB9LFxuXG4gIGdlbmVyYXRlRE9NKCkge1xuICAgIHJldHVybiBfLm1hcChfLnJhbmdlKHRoaXMucHJvcHMuaXRlbXMpLCBmdW5jdGlvbihpKSB7XG4gICAgICByZXR1cm4gKDxkaXYga2V5PXtpfT48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0XCI+e2l9PC9zcGFuPjwvZGl2Pik7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2VuZXJhdGVMYXlvdXQoKSB7XG4gICAgdmFyIHAgPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBfLm1hcChuZXcgQXJyYXkocC5pdGVtcyksIGZ1bmN0aW9uKGl0ZW0sIGkpIHtcbiAgICAgIHZhciB3ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA0KTtcbiAgICAgIHZhciB5ID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA0KSArIDE7XG4gICAgICByZXR1cm4ge3g6IGkgKiAyICUgMTIsIHk6IE1hdGguZmxvb3IoaSAvIDYpICogeSwgdzogdywgaDogeSwgaTogaX07XG4gICAgfSk7XG4gIH0sXG5cbiAgb25MYXlvdXRDaGFuZ2U6IGZ1bmN0aW9uKGxheW91dCkge1xuICAgIHRoaXMucHJvcHMub25MYXlvdXRDaGFuZ2UobGF5b3V0KTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdEdyaWRMYXlvdXQgbGF5b3V0PXt0aGlzLnN0YXRlLmxheW91dH0gb25MYXlvdXRDaGFuZ2U9e3RoaXMub25MYXlvdXRDaGFuZ2V9XG4gICAgICAgICAgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICB7dGhpcy5nZW5lcmF0ZURPTSgpfVxuICAgICAgPC9SZWFjdEdyaWRMYXlvdXQ+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVzc3lMYXlvdXQ7XG5cbmlmIChyZXF1aXJlLm1haW4gPT09IG1vZHVsZSkge1xuICByZXF1aXJlKCcuLi90ZXN0LWhvb2suanN4JykobW9kdWxlLmV4cG9ydHMpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0L2V4YW1wbGVzLzMtbWVzc3kuanN4XG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoiMy1tZXNzeS5idW5kbGUuanMifQ==