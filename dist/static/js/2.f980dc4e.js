(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{15:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return E});var a=n(3),o=n.n(a),c=n(4),i=n.n(c),r=n(5),l=n.n(r),s=n(6),u=n.n(s),m=n(7),d=n.n(m),p=n(0),h=n.n(p),f=(n(59),n(47)),b=n.n(f),g=(n(1),n(66),n(67),n(68));var E=function(e){function n(e){var t;return o()(this,n),(t=l()(this,u()(n).call(this,e))).state={details:"",pinlun:[]},t}return d()(n,e),i()(n,[{key:"componentDidMount",value:function(){var n=this,e=this.props.location.pathname.split("/")[2],t=this.props.location.pathname.split("/")[3],a=t.substring(t.length-1),o=this.props.location.pathname.split("/")[4],c=this.props.location.pathname.split("/")[5],i=this.props.location.pathname.split("/")[6];b.a.ajax({url:"http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page="+i+"&words=&shuqi_h5=&onlyCpBooks=1&secondCate="+e+"&sort=monthHot&_=1510843580965",success:function(e){var t=e.data[a];n.setState({details:t})}}),b.a.ajax({url:"http://read.xiaoshuo1-sm.com/novel/i.php?do=sp_get&authorId="+o+"&bookId="+c+"&fetch=merge&sqUid=888154902&source=store&size=3&page=1&shuqi_h5=&_=1511079311858",success:function(e){n.setState({pinlun:e.data})}})}},{key:"add",value:function(){g.a.info(" 添加书架成功"),b()(".addbook").css({background:"#e6e7ed"}),b()(".addbook").css({color:"#c6c7cc"}),b()(".addbook").css({border:"1px solid #e6e7ed"}),b()(".addbook").html("已添加");var e=this.state.details,t=new Object;if(t.title=e.title,t.img=e.cover,t.bookid=e.bid,null==(n=JSON.parse(localStorage.getItem("books")))){var n;(n=[]).push(t)}else{for(var a=!1,o=0;o<n.length;o++){n[o].bookid==t.bookid&&(a=!0,g.a.info(" 该书已添加"))}0==a&&n.push(t)}localStorage.setItem("books",JSON.stringify(n))}},{key:"render",value:function(){var e=[],t=this.state.details;e.push(h.a.createElement("div",{className:"box",key:"item.bookid"},h.a.createElement("section",null,h.a.createElement("img",{src:t.cover}),h.a.createElement("p",null,t.title),h.a.createElement("span",null,t.author),h.a.createElement("br",null),h.a.createElement("time",null,t.category,"   ",t.words,"字"),h.a.createElement("br",null),h.a.createElement("i",null,"已完本")),h.a.createElement("div",{className:"btn"},h.a.createElement("button",null,h.a.createElement("a",{href:"http://t.shuqi.com/route.php?pagename=#!/bid/"+t.bookid+"/cid//ct/read"},"开始阅读")),h.a.createElement("button",null,"离线下载"),h.a.createElement("button",{className:"addbook",onClick:this.add.bind(this)},"加入书架")),h.a.createElement("p",{className:"pp"},t.desc),h.a.createElement("div",{className:"new"},h.a.createElement("em",{className:"iconfont icon-shijian"}),h.a.createElement("time",null,h.a.createElement("i",{className:"times"},"最新:"),t.last_chapter_name),h.a.createElement("span",{className:"iconfont icon-gengduo"})),h.a.createElement("a",{className:"mulu",href:"http://t.shuqi.com/route.php?pagename=#!/ct/chapterList/bid/"+t.bookid},h.a.createElement("time",{className:"iconfont icon-mulu"}),"目录",h.a.createElement("span",{className:"iconfont icon-gengduo"}))));var n=[],a=this.state.pinlun,o=!0,c=!1,i=void 0;try{for(var r,l=a[Symbol.iterator]();!(o=(r=l.next()).done);o=!0){var s=r.value;n.push(h.a.createElement("div",{key:s.text,style:{width:"100%",padding:"0.1rem",float:"left",overflow:"hidden",height:"0.8rem",borderBottom:"1px solid #999"}},h.a.createElement("p",null,h.a.createElement("img",{style:{width:"0.24rem",height:"0.24rem"},src:s.userPhoto}),h.a.createElement("span",{style:{marginLeft:"0.1rem",color:"#999"}},s.nickName)),h.a.createElement("p",{style:{textIndent:"0.4rem"}},s.text)))}}catch(e){c=!0,i=e}finally{try{o||null==l.return||l.return()}finally{if(c)throw i}}return h.a.createElement("div",{className:"DetailsContent"},h.a.createElement("div",null,e),h.a.createElement("div",{style:{width:"100%",height:"0.4rem",borderBottom:"1px solid #eee",lineHeight:"0.4rem",textIndent:"0.1rem",color:"#00afc7"}},"精华评论"),h.a.createElement("ul",{style:{width:"100%",height:"2.6rem",borderBottom:"0.06rem solid #eee"}},n),h.a.createElement("div",{style:{width:"100%",height:"2.5rem",textAlign:"center",background:"#f0f0f3"}},h.a.createElement("button",{style:{width:"80%",height:"0.42rem",background:"#00c98d",color:"#fff",borderRadius:"0.04rem",marginTop:"0.2rem",border:"1px solid #00c98d"}},"下载书旗小说客户端"),h.a.createElement("p",{style:{lineHeight:"0.4rem"}},"海量图书，更高品质阅读体验"),h.a.createElement("p",{style:{color:"#999"}},"©2016书旗网shuqi.com"),h.a.createElement("p",{style:{color:"#999"}},"粤ICP备13078413号-1"),h.a.createElement("p",{style:{color:"#999"}},"广州阿里巴巴文学信息技术有限公司 版权所有"),h.a.createElement("p",{style:{color:"#999"}},"广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元"),h.a.createElement("p",{style:{color:"#999"}},"020-39225959")))}}]),n}(h.a.Component)},55:function(e,t,n){e.exports=n(2)(0)},58:function(e,t,n){e.exports=n(2)(2)},59:function(e,t,n){"use strict";var a,o=n(60),c=n.n(o),i=n(61),r=n.n(i),l=n(62),s=n.n(l),u=n(47),m=n.n(u);function d(e,t,n){return a.apply(this,arguments)}t.a={fetch:(a=function(e,t,n){fetch(e).then(function(e){return e.json()}).then(function(e){t(e)}).catch(function(e){n(e)})},d.toString=function(){return a.toString()},d),fetchJsonp:function(e,t,n,a){c()(e,t).then(function(e){return e.json()}).then(function(e){n(e)}).catch(function(e){a(e)})},axiosGet:function(e,t,n,a){r.a.get(e,t).then(function(e){n(e)}).catch(function(e){a(e)})},axiosPost:function(e,t,n,a){r.a.post(e,t).then(function(e){n(e)}).catch(function(e){a(e)})},jsonp:function(e,t,n,a){s()(e,t,function(e,t){e?a(e.message):n(t)})},ajax:function(e,t,n){m.a.ajax({type:e.type,url:e.url,data:e.data,success:function(e){t(e)},fail:function(){n(data)}})},ajaxJsonp:function(e,t,n){m.a.ajax({type:e.type,url:e.url,data:e.data,dataType:e.dataType,jsonp:e.jsonp,success:function(e){t(e)},fail:function(){n(data)}})}}},60:function(e,t,n){e.exports=n(2)(91)},61:function(e,t,n){e.exports=n(2)(72)},62:function(e,t,n){e.exports=n(2)(93)},64:function(e,t,n){e.exports=n(2)(114)},65:function(e,t,n){e.exports=n(2)(41)},66:function(e,t,n){},67:function(e,t,n){}}]);