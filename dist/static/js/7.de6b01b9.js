(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{14:function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return v});var n=o(4),r=o.n(n),a=o(5),i=o.n(a),c=o(6),s=o.n(c),l=o(2),m=o.n(l),h=o(7),u=o.n(h),f=o(0),p=o.n(f),d=o(49),g=o.n(d),k=o(70),b=(o(68),o(1));function y(n){return function(){var e,t=m()(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return;if(Reflect.construct.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(e){return}}()){var o=m()(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return s()(this,e)}}var v=function(e){u()(n,e);var o=y(n);function n(e){var t;return r()(this,n),(t=o.call(this,e)).state={books:[],img:"http://c-shuqi.11222.cn/assets/bookshelf-empty_0f8e62c.png"},t}return i()(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("books"),t=JSON.parse(e);this.setState({books:t}),0==(t=JSON.parse(localStorage.getItem("books"))||[]).length?g()(".kong").show():g()(".kong").hide()}},{key:"detele",value:function(e){k.a.info(" 移出书架成功");var t=JSON.parse(localStorage.getItem("books"))||[];t.splice(e,1),0==t.length?g()(".kong").show():g()(".kong").hide(),this.state.books.splice(e,1),this.setState({books:this.state.books}),localStorage.setItem("books",JSON.stringify(t))}},{key:"render",value:function(){for(var e=[],t=this.state.books||[],o=0;o<t.length;o++){var n=t[o];n.index=o,e.push(p.a.createElement("li",{className:"bookbox",style:{textAlign:"center",position:"relative",width:"1.1rem",height:"1.7rem",float:"left",marginLeft:"0.06rem"},key:n.bookid},p.a.createElement("em",{onClick:this.detele.bind(this,o),className:"iconfont icon-cuohao datele",style:{position:"absolute",right:"0",display:"none",top:"-0.14rem",color:"red",zIndex:"999"}}),p.a.createElement("a",{href:"http://t.shuqi.com/route.php?pagename=#!/bid/"+n.bookid+"/cid//ct/read"},p.a.createElement("img",{style:{width:".9rem",height:"1.23rem"},src:n.img}),p.a.createElement("p",null,n.title))))}var r=this.state.img;return p.a.createElement("div",{className:"cartContent"},p.a.createElement("ul",{style:{width:"100%",height:"100%",minHeight:"3.74rem",overflow:"hidden",paddingLeft:"0.06rem"}},e,p.a.createElement("div",{className:"kong"},p.a.createElement("img",{style:{width:"1.67rem",height:"0.92rem",position:"absolute",left:"26%",top:"20%"},src:r}),p.a.createElement(b.NavLink,{to:"/home"},p.a.createElement("button",{className:"go",style:{width:"1.37rem",height:"0.4rem",marginTop:"2.5rem",border:"0",marginLeft:"1.1rem"}},"去书城")))),p.a.createElement("div",{style:{width:"100%",height:"2.5rem",textAlign:"center",background:"#f0f0f3"}},p.a.createElement("button",{style:{width:"80%",height:"0.42rem",background:"#00c98d",color:"#fff",borderRadius:"0.04rem",marginTop:"0.2rem",border:"1px solid #00c98d"}},"下载书旗小说客户端"),p.a.createElement("p",{style:{lineHeight:"0.4rem"}},"海量图书，更高品质阅读体验"),p.a.createElement("p",{style:{color:"#999"}},"©2016书旗网shuqi.com"),p.a.createElement("p",{style:{color:"#999"}},"粤ICP备13078413号-1"),p.a.createElement("p",{style:{color:"#999"}},"广州阿里巴巴文学信息技术有限公司 版权所有"),p.a.createElement("p",{style:{color:"#999"}},"广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元"),p.a.createElement("p",{style:{color:"#999"}},"020-39225959")))}}]),n}(p.a.Component)},57:function(e,t,o){e.exports=o(3)(0)},60:function(e,t,o){e.exports=o(3)(2)},66:function(e,t,o){e.exports=o(3)(114)},67:function(e,t,o){e.exports=o(3)(41)},68:function(e,t,o){}}]);