(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{12:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return x});var o=n(4),a=n.n(o),s=n(5),r=n.n(s),i=n(6),c=n.n(i),l=n(2),u=n.n(l),p=n(7),h=n.n(p),f=n(0),d=n.n(f),m=n(49),v=n.n(m),g=n(1),y=(n(13),n(70));function k(o){return function(){var t,e=u()(o);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return;if(Reflect.construct.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(t){return}}()){var n=u()(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return c()(this,t)}}var x=function(t){h()(o,t);var n=k(o);function o(t){var e;return a()(this,o),(e=n.call(this,t)).state={list:[],lists:[],pages:1},e}return r()(o,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var n=this,o=this.props.location.pathname.split("/")[2],a=1;v.a.ajax({url:"http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page="+a+"&words=&shuqi_h5=&onlyCpBooks=1&secondCate="+o+"&sort=monthHot&_=1510843580965",success:function(t){0!=t.data.length?n.setState({list:t.data}):v.a.ajax({url:"http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page="+a+"&words=&shuqi_h5=&onlyCpBooks=1&tag="+o+"&sort=monthHot&_=1511417327097",success:function(t){n.setState({list:t.data})}})}});document.getElementById("content");v()("#listContent").on("scroll",function(){var t=v()("#listContent").scrollTop(),e=v()(".container")[0].clientHeight;v()("#listContent")[0].scrollHeight+43.5<t+e&&(a++,v.a.ajax({url:"http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page="+a+"&words=&shuqi_h5=&onlyCpBooks=1&secondCate="+o+"&sort=monthHot&_=1510843580965",success:function(t){var e=t.data;n.setState({lists:e,pages:a})}}),y.a.info("加载中。。。"))})}},{key:"render",value:function(){for(var t=[],e=this.state.lists,n=this.state.list,o=this.state.pages,a=0;a<e.length;a++)n.push(e[a]);for(var s=0;s<n.length;s++){var r=n[s];r.index=s,t.push(d.a.createElement(g.NavLink,{to:"/details/"+r.category+"/"+s+"/"+r.authorid+"/"+r.bookid+"/"+o,key:s},d.a.createElement("li",null,d.a.createElement("img",{src:r.cover}),d.a.createElement("span",null,r.title),d.a.createElement("br",null),d.a.createElement("em",null,r.author),d.a.createElement("p",{className:"pp"},r.desc),d.a.createElement("time",null,r.tags))))}return d.a.createElement("div",{id:"listContent",style:{width:"100%",height:"100%",overflow:"auto"}},d.a.createElement("ul",null,t))}}]),o}(d.a.Component)},57:function(t,e,n){t.exports=n(3)(0)},60:function(t,e,n){t.exports=n(3)(2)},66:function(t,e,n){t.exports=n(3)(114)},67:function(t,e,n){t.exports=n(3)(41)}}]);