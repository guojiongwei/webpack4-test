(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(t,n,e){},25:function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return w});var a=e(4),o=e.n(a),c=e(5),r=e.n(c),i=e(6),s=e.n(i),u=e(2),l=e.n(u),f=e(7),p=e.n(f),d=e(0),m=e.n(d),h=(e(106),e(1)),v=e(61),g=e(49),y=e.n(g),x=e(70);function E(a){return function(){var t,n=l()(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return;if(Reflect.construct.sham)return;if("function"==typeof Proxy)return 1;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),1}catch(t){return}}()){var e=l()(this).constructor;t=Reflect.construct(n,arguments,e)}else t=n.apply(this,arguments);return s()(this,t)}}var w=function(t){p()(e,t);var n=E(e);function e(t){return o()(this,e),n.call(this,t)}return r()(e,[{key:"loginFn",value:function(){var n=this,t=y()("#username")[0].value,e=y()("#password")[0].value;v.a.axiosGet("http://datainfo.duapp.com/shopdata/userinfo.php",{params:{userID:t,password:e,status:"login"}},function(t){"0"==t.data?(alert("用户名不存在，请先注册"),x.a.info("用户不存在，请先注册"),location.replace("#/register")):"2"==t.data?(x.a.info("密码错误"),n.refs.password.value="",n.refs.password.focus()):(x.a.info("登录成功"),location.replace("#/home"))},function(t){})}},{key:"render",value:function(){return m.a.createElement("div",{className:"loginContent"},m.a.createElement("div",{className:"login-input-wrap"},m.a.createElement("div",{className:"bold"},"账户"),m.a.createElement("input",{type:"number",id:"username",placeholder:"请输入手机号"})),m.a.createElement("div",{className:"login-input-wrap"},m.a.createElement("div",{className:"bold"},"密码"),m.a.createElement("input",{type:"password",id:"password",placeholder:"请输入密码"})),m.a.createElement("div",{onClick:this.loginFn,className:"login-button js-login-button active"},"登录"),m.a.createElement("p",null,m.a.createElement(h.NavLink,{to:"/register"},"立即注册")),m.a.createElement("div",{className:"service-procotol",style:{textAlign:"center"}},"点击上面“登录”",m.a.createElement("br",null),"按钮即表示您同意",m.a.createElement("span",{className:"js-go-service"},"《阿里文学用户服务协议》"),m.a.createElement("br",null),m.a.createElement("span",{className:"js-go-secret"},"《隐私服务协议》")))}}]),e}(m.a.Component)},57:function(t,n,e){t.exports=e(3)(0)},60:function(t,n,e){t.exports=e(3)(2)},61:function(t,n,e){"use strict";var a,o=e(62),c=e.n(o),r=e(63),i=e.n(r),s=e(64),u=e.n(s),l=e(49),f=e.n(l);function p(t,n,e){return a.apply(this,arguments)}n.a={fetch:(a=function(t,n,e){fetch(t).then(function(t){return t.json()}).then(function(t){n(t)}).catch(function(t){e(t)})},p.toString=function(){return a.toString()},p),fetchJsonp:function(t,n,e,a){c()(t,n).then(function(t){return t.json()}).then(function(t){e(t)}).catch(function(t){a(t)})},axiosGet:function(t,n,e,a){i.a.get(t,n).then(function(t){e(t)}).catch(function(t){a(t)})},axiosPost:function(t,n,e,a){i.a.post(t,n).then(function(t){e(t)}).catch(function(t){a(t)})},jsonp:function(t,n,e,a){u()(t,n,function(t,n){t?a(t.message):e(n)})},ajax:function(t,n,e){f.a.ajax({type:t.type,url:t.url,data:t.data,success:function(t){n(t)},fail:function(){e(data)}})},ajaxJsonp:function(t,n,e){f.a.ajax({type:t.type,url:t.url,data:t.data,dataType:t.dataType,jsonp:t.jsonp,success:function(t){n(t)},fail:function(){e(data)}})}}},62:function(t,n,e){t.exports=e(3)(91)},63:function(t,n,e){t.exports=e(3)(72)},64:function(t,n,e){t.exports=e(3)(93)},66:function(t,n,e){t.exports=e(3)(114)},67:function(t,n,e){t.exports=e(3)(41)}}]);