(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{199:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return x});var a=n(4),r=n.n(a),o=n(5),s=n.n(o),i=n(6),l=n.n(i),c=n(2),u=n.n(c),p=n(7),f=n.n(p),h=n(0),m=n.n(h),d=(n(199),n(49)),v=n.n(d),g=n(1),k=n(70);function y(a){return function(){var t,e=u()(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return;if(Reflect.construct.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(t){return}}()){var n=u()(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return l()(this,t)}}var x=function(t){f()(a,t);var n=y(a);function a(t){var e;return r()(this,a),(e=n.call(this,t)).state={ranklist:[],lists:[],type:"",pages:1},e}return s()(a,[{key:"componentDidMount",value:function(){var n=this.props.location.pathname.split("/")[2],a=this;a.setState({type:n});var r=1;v.a.ajax({url:"http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page="+r+"&size=10&onlyCpBooks=1&gender=1&type="+n+"&shuqi_h5=&_=1510929033295",success:function(t){a.setState({ranklist:t.data})}});v()("#ranklistContent").on("scroll",function(){var t=v()("#ranklistContent").scrollTop(),e=v()(".container")[0].clientHeight;v()("#ranklistContent")[0].scrollHeight+43.5<t+e&&(r++,v.a.ajax({url:"http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page="+r+"&size=10&onlyCpBooks=1&gender=1&type="+n+"&shuqi_h5=&_=1510929033295",success:function(t){var e=t.data;a.setState({lists:e,pages:r})}}),k.a.info("加载中。。。"))})}},{key:"render",value:function(){for(var t=[],e=this.state.ranklist,n=this.state.type,a=this.state.lists,r=this.state.pages,o=0;o<a.length;o++)e.push(a[o]);for(var s=0;s<e.length;s++){var i=e[s],l=(i.index=s)+1;t.push(m.a.createElement(g.NavLink,{to:"/ranks/"+i.category+"/"+s+"/"+i.authorid+"/"+i.bookid+"/"+n+"/"+r,key:s},m.a.createElement("li",{style:{position:"relative"}},m.a.createElement("div",{className:"mask",style:{position:"absolute",zIndex:"999",width:"0.18rem",height:"0.22rem",background:"orange",color:"#fff",fontSize:"0.14rem",textAlign:"center",lineHeight:"0.22rem"}},l),m.a.createElement("img",{src:i.cover}),m.a.createElement("span",null,i.title),m.a.createElement("br",null),m.a.createElement("em",null,i.author),m.a.createElement("p",{className:"pp"},i.desc),m.a.createElement("time",null,i.tags))))}return m.a.createElement("div",{id:"ranklistContent",style:{width:"100%",height:"100%",overflow:"auto"}},m.a.createElement("ul",null,t))}}]),a}(m.a.Component)},57:function(t,e,n){t.exports=n(3)(0)},60:function(t,e,n){t.exports=n(3)(2)},66:function(t,e,n){t.exports=n(3)(114)},67:function(t,e,n){t.exports=n(3)(41)}}]);