(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{30:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return d});var c=n(4),r=n.n(c),a=n(5),i=n.n(a),o=n(6),l=n.n(o),u=n(2),s=n.n(u),f=n(7),h=n.n(f),p=n(0),m=n.n(p),v=n(1);n(58);function y(c){return function(){var t,e=s()(c);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return;if(Reflect.construct.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(t){return}}()){var n=s()(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l()(this,t)}}var d=function(t){h()(c,t);var n=y(c);function c(t){var e;return r()(this,c),(e=n.call(this,t)).state={title:""},e}return i()(c,[{key:"componentWillMount",value:function(){var t=this.props.location.pathname.split("/")[3];this.setState({title:t})}},{key:"click",value:function(){window.history.go(-1)}},{key:"render",value:function(){var t=this.state.title;return m.a.createElement("div",{className:"header"},m.a.createElement("ul",null,m.a.createElement("li",{onClick:this.click.bind(this)},m.a.createElement("span",{className:"iconfont icon-fanhui"})),m.a.createElement("li",{style:{fontSize:"0.16rem"}},t),m.a.createElement("li",null,m.a.createElement(v.NavLink,{to:"/home"},m.a.createElement("span",{className:"iconfont icon-shouye"})))))}}]),c}(m.a.Component)},58:function(t,e,n){}}]);