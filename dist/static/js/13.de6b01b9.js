(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{20:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return v});var n=a(4),r=a.n(n),i=a(5),o=a.n(i),l=a(6),s=a.n(l),c=a(2),m=a.n(c),u=a(7),d=a.n(u),h=a(0),b=a.n(h),C=a(49),p=a.n(C),_=a(1);a(58);function I(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(e,t)}(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,r=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw r}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function y(n){return function(){var e,t=m()(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return;if(Reflect.construct.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(e){return}}()){var a=m()(this).constructor;e=Reflect.construct(t,arguments,a)}else e=t.apply(this,arguments);return s()(this,e)}}var v=function(e){d()(n,e);var a=y(n);function n(e){var t;return r()(this,n),(t=a.call(this,e)).state={list:[{icon:"iconfont icon-fenlei",name:"分类",path:"/kind",id:1},{icon:"iconfont icon-paihang",name:"排行",path:"/rank",id:2},{icon:"iconfont icon-nvsheng",name:"女频",path:"/kind",id:3},{icon:"iconfont icon-nansheng",name:"男频",path:"/kind",id:4},{icon:"iconfont icon-shudanmiaobian",name:"书单",path:"/kind",id:5}],jingping:[],title:"",xiazai:"http://img-tailor.11222.cn/pm/book/operate/2017062711265649.png",girls:[],girl:"",boys:[],boy:""},t}return o()(n,[{key:"componentDidMount",value:function(){var n=this;p.a.ajax({url:"http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1585907143&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19&sign=13F8644CC5A52E08D7620F0C3ECB3E5A&key=shuqiapi&_=1585907143376",success:function(e){n.setState({jingping:e.data.module[3].content,title:e.data.module[3].m_s_name})}}),p.a.ajax({url:"http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1585907143&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19&sign=13F8644CC5A52E08D7620F0C3ECB3E5A&key=shuqiapi&_=1585907143376",success:function(e){var t=e.data.module[3],a=e.data.module[8];n.setState({girls:t.content,girl:t.m_s_name,boys:a.content,boy:a.m_s_name})}})}},{key:"shuaxin",value:function(){var t=this;p.a.ajax({url:"http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1585907143&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19&sign=13F8644CC5A52E08D7620F0C3ECB3E5A&key=shuqiapi&_=1585907143376",success:function(e){t.setState({jingping:e.data.module[3].content,title:e.data.module[3].m_s_name})}})}},{key:"shuaxin1",value:function(){var a=this;p.a.ajax({url:"http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1585907143&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19&sign=13F8644CC5A52E08D7620F0C3ECB3E5A&key=shuqiapi&_=1585907143376",success:function(e){var t=e.data.module[3];e.data.module[8];a.setState({girls:t.content,girl:t.m_s_name})}})}},{key:"shuaxin2",value:function(){var a=this;p.a.ajax({url:"http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1585907143&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=10%2C11%2C12%2C13%2C14%2C15%2C16%2C17%2C18%2C19&sign=13F8644CC5A52E08D7620F0C3ECB3E5A&key=shuqiapi&_=1585907143376",success:function(e){e.data.module[3];var t=e.data.module[8];a.setState({boys:t.content,boy:t.m_s_name})}})}},{key:"render",value:function(){var e,t=[],a=I(this.state.list);try{for(a.s();!(e=a.n()).done;){var n=e.value;t.push(b.a.createElement(_.NavLink,{key:n.id,to:n.path},b.a.createElement("li",null,b.a.createElement("div",{className:"icon"},b.a.createElement("p",{className:n.icon})),b.a.createElement("p",null,n.name))))}}catch(e){a.e(e)}finally{a.f()}for(var r=this.state.xiazai,i=this.state.title,o=[],l=this.state.jingping,s=0;s<l.length;s++){var c=l[s];c.index=s,o.push(b.a.createElement(_.NavLink,{to:"/details1/"+c.class_name+"/"+s+"/"+c.author+"/"+c.bid,key:s},b.a.createElement("li",null,b.a.createElement("img",{src:c.book_cover,style:{width:"0.7rem",height:"0.9rem"}}),b.a.createElement("em",{style:{color:"#333"}},c.bookname),b.a.createElement("i",null,c.author_name))))}for(var m=[],u=[],d=this.state.girl,h=this.state.girls,C=0;C<h.length;C++){if(C<4)(g=h[C]).index=C,m.push(b.a.createElement(_.NavLink,{to:"/details1/"+g.class_name+"/"+C+"/"+g.author+"/"+g.bid,key:C},b.a.createElement("li",null,b.a.createElement("img",{src:g.book_cover,style:{width:"0.7rem",height:"0.9rem"}}),b.a.createElement("em",{style:{color:"#333"}},g.bookname),b.a.createElement("i",null,g.author_name))));else(k=h[C]).index=C,u.push(b.a.createElement(_.NavLink,{to:"/details1/"+k.class_name+"/"+C+"/"+k.author+"/"+k.bid,key:C},b.a.createElement("div",{className:"lis2"},b.a.createElement("em",{style:{color:"#333"}},k.bookname),b.a.createElement("button",{style:{width:"0.5rem",color:"#999",height:"0.2rem",fontSize:"0.1rem"}},k.first_cate_name),b.a.createElement("button",{style:{width:"0.33rem",height:"0.2rem",fontSize:"0.1rem",color:"#00c98d"}},k.stat_name),b.a.createElement("p",{style:{color:"#999"}},k.book_info))))}for(var p=[],f=[],y=this.state.boy,v=this.state.boys,E=0;E<v.length;E++){var g,k;if(E<4)(g=v[E]).index=E,p.push(b.a.createElement(_.NavLink,{to:"/details1/"+g.class_name+"/"+E+"/"+g.author+"/"+g.bid,key:E},b.a.createElement("li",null,b.a.createElement("img",{src:g.book_cover,style:{width:"0.7rem",height:"0.9rem"}}),b.a.createElement("em",{style:{color:"#333"}},g.bookname),b.a.createElement("i",null,g.author_name))));else(k=v[E]).index=E,f.push(b.a.createElement(_.NavLink,{to:"/details1/"+k.class_name+"/"+E+"/"+k.author+"/"+k.bid,key:E},b.a.createElement("div",{className:"lis2"},b.a.createElement("em",{style:{color:"#333"}},k.bookname),b.a.createElement("button",{style:{width:"0.5rem",color:"#999",height:"0.2rem",fontSize:"0.1rem"}},k.first_cate_name),b.a.createElement("button",{style:{width:"0.33rem",height:"0.2rem",fontSize:"0.1rem",color:"#00c98d"}},k.stat_name),b.a.createElement("p",{style:{color:"#999"}},k.book_info))))}return b.a.createElement("div",{className:"honeContent"},b.a.createElement("div",{className:"kind"},b.a.createElement("ul",null,t),b.a.createElement("img",{style:{width:"100%",height:"0.6rem",marginTop:"-0.41rem"},src:r}),b.a.createElement("div",{className:"jingping"},b.a.createElement("h3",null,i),b.a.createElement("ul",{className:"ul1"},o),b.a.createElement("p",{onClick:this.shuaxin.bind(this),style:{marginLeft:"1.6rem",marginTop:"0.1rem"}},"换一换",b.a.createElement("em",{style:{color:"#999",fontSize:"0.1rem"},className:"iconfont icon-shuaxin"}))),b.a.createElement("div",{className:"nvsheng"},b.a.createElement("h3",null,d),b.a.createElement("ul",{className:"ul1"},m),b.a.createElement("div",{className:"ul2"},u,b.a.createElement("p",{onClick:this.shuaxin1.bind(this),style:{marginLeft:"1.6rem",marginTop:"0.1rem"}},"换一换",b.a.createElement("em",{style:{color:"#999",fontSize:"0.1rem"},className:"iconfont icon-shuaxin"})))),b.a.createElement("div",{className:"nvsheng"},b.a.createElement("h3",null,y),b.a.createElement("ul",{className:"ul1"},p),b.a.createElement("div",{className:"ul2"},f,b.a.createElement("p",{onClick:this.shuaxin2.bind(this),style:{marginLeft:"1.6rem",marginTop:"0.1rem"}},"换一换",b.a.createElement("em",{style:{color:"#999",fontSize:"0.1rem"},className:"iconfont icon-shuaxin"})))),b.a.createElement("div",{style:{width:"100%",height:"2.5rem",textAlign:"center",background:"#f0f0f3"}},b.a.createElement("button",{style:{width:"80%",height:"0.42rem",background:"#00c98d",color:"#fff",borderRadius:"0.04rem",marginTop:"0.2rem",border:"1px solid #00c98d"}},"下载书旗小说客户端"),b.a.createElement("p",{style:{lineHeight:"0.4rem"}},"海量图书，更高品质阅读体验"),b.a.createElement("p",{style:{color:"#999"}},"©2016书旗网shuqi.com"),b.a.createElement("p",{style:{color:"#999"}},"粤ICP备13078413号-1"),b.a.createElement("p",{style:{color:"#999"}},"广州阿里巴巴文学信息技术有限公司 版权所有"),b.a.createElement("p",{style:{color:"#999"}},"广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元"),b.a.createElement("p",{style:{color:"#999"}},"020-39225959"))))}}]),n}(b.a.Component)},58:function(e,t,a){}}]);