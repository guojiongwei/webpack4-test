(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{26:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E});var r=n(3),a=n.n(r),l=n(4),o=n.n(l),i=n(5),s=n.n(i),c=n(6),m=n.n(c),d=n(7),u=n.n(d),h=n(0),p=n.n(h),y=n(47),f=n.n(y),k=n(1),E=function(e){function n(e){var t;return a()(this,n),(t=s()(this,m()(n).call(this,e))).state={ranklist:[]},t}return u()(n,e),o()(n,[{key:"componentDidMount",value:function(){var n=this;f.a.ajax({url:"http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=4&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=888154902&timestamp=1510995729&type=2&resetcache=&sign=684170D8D0FDF838181A40368FCF1EE0&key=shuqiapi&_=1510995729648",success:function(e){var t=e.data.module;n.setState({ranklist:t})}})}},{key:"render",value:function(){for(var e=[],t=this.state.ranklist,n=0;n<t.length;n++)if((t[n].index=n)%2==0){var r=t[n],a=n/2+1;e.push(p.a.createElement(k.NavLink,{key:a,to:"/ranklist/"+a+"/"+r.content.title},p.a.createElement("li",{style:{width:"100%",height:"0.9rem",borderBottom:"0.05rem solid #eee"}},p.a.createElement("h3",{style:{marginLeft:"0.1rem"}},r.content.title),p.a.createElement("p",{style:{marginLeft:"0.1rem"}},r.content.desc))))}return p.a.createElement("div",{className:"RankContent"},p.a.createElement("ul",{style:{padding:"0"}},e),p.a.createElement("div",{style:{width:"100%",height:"2.5rem",textAlign:"center",background:"#f0f0f3"}},p.a.createElement("button",{style:{width:"80%",height:"0.42rem",background:"#00c98d",color:"#fff",borderRadius:"0.04rem",marginTop:"0.2rem",border:"1px solid #00c98d"}},"下载书旗小说客户端"),p.a.createElement("p",{style:{lineHeight:"0.4rem"}},"海量图书，更高品质阅读体验"),p.a.createElement("p",{style:{color:"#999"}},"©2016书旗网shuqi.com"),p.a.createElement("p",{style:{color:"#999"}},"粤ICP备13078413号-1"),p.a.createElement("p",{style:{color:"#999"}},"广州阿里巴巴文学信息技术有限公司 版权所有"),p.a.createElement("p",{style:{color:"#999"}},"广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元"),p.a.createElement("p",{style:{color:"#999"}},"020-39225959")))}}]),n}(p.a.Component)}}]);