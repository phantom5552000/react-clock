(this["webpackJsonpreact-clock"]=this["webpackJsonpreact-clock"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(4),i=n.n(s),r=(n(13),n.p+"static/media/logo.6ce24c58.svg"),o=(n(14),n(5)),u=n(6),l=n(8),d=n(7),j=n(3),h=n.n(j),m=n(0);var p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).state={date:h()()},c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.tick()}),50)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:h()()})}},{key:"render",value:function(){var t="YYYY/MM/DD HH:mm:ss.SSS";return Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["JST  ",this.state.date.format(t)," "]}),Object(m.jsxs)("p",{children:["UTC  ",this.state.date.utc().format(t)," "]})]})}}]),n}(a.a.Component);var v=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("img",{src:r,className:"App-logo",alt:"logo"}),Object(m.jsx)("code",{children:Object(m.jsx)(p,{})})]})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),s(t),i(t)}))};i.a.render(Object(m.jsx)(v,{}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.c1093f6d.chunk.js.map