(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{198:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return y});var a=n(3),s=n.n(a),o=n(4),i=n.n(o),r=n(5),l=n.n(r),c=n(6),u=n.n(c),p=n(7),h=n.n(p),m=n(0),d=n.n(m),f=n(47),v=n.n(f),k=n(1),g=(n(198),n(67));var y=function(e){function n(e){var t;return s()(this,n),(t=l()(this,u()(n).call(this,e))).state={ranklist:[],lists:[],type:"",pages:1},t}return h()(n,e),i()(n,[{key:"componentDidMount",value:function(){var n=this.props.location.pathname.split("/")[2],a=this;a.setState({type:n});var s=1;v.a.ajax({url:"http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page="+s+"&size=10&onlyCpBooks=1&gender=1&type="+n+"&shuqi_h5=&_=1510929033295",success:function(e){a.setState({ranklist:e.data})}});v()("#ranklistContent").on("scroll",function(){var e=v()("#ranklistContent").scrollTop(),t=v()(".container")[0].clientHeight;v()("#ranklistContent")[0].scrollHeight+43.5<e+t&&(s++,v.a.ajax({url:"http://read.xiaoshuo1-sm.com/novel/i.php?do=is_novelrank&p=1&page="+s+"&size=10&onlyCpBooks=1&gender=1&type="+n+"&shuqi_h5=&_=1510929033295",success:function(e){var t=e.data;a.setState({lists:t,pages:s})}}),g.a.info("加载中。。。"))})}},{key:"render",value:function(){for(var e=[],t=this.state.ranklist,n=this.state.type,a=this.state.lists,s=this.state.pages,o=0;o<a.length;o++)t.push(a[o]);for(var i=0;i<t.length;i++){var r=t[i],l=(r.index=i)+1;e.push(d.a.createElement(k.NavLink,{to:"/ranks/"+r.category+"/"+i+"/"+r.authorid+"/"+r.bookid+"/"+n+"/"+s,key:i},d.a.createElement("li",{style:{position:"relative"}},d.a.createElement("div",{className:"mask",style:{position:"absolute",zIndex:"999",width:"0.18rem",height:"0.22rem",background:"orange",color:"#fff",fontSize:"0.14rem",textAlign:"center",lineHeight:"0.22rem"}},l),d.a.createElement("img",{src:r.cover}),d.a.createElement("span",null,r.title),d.a.createElement("br",null),d.a.createElement("em",null,r.author),d.a.createElement("p",{className:"pp"},r.desc),d.a.createElement("time",null,r.tags))))}return d.a.createElement("div",{id:"ranklistContent",style:{width:"100%",height:"100%",overflow:"auto"}},d.a.createElement("ul",null,e))}}]),n}(d.a.Component)},55:function(e,t,n){e.exports=n(2)(0)},63:function(e,t,n){e.exports=n(2)(115)},64:function(e,t,n){e.exports=n(2)(42)}}]);