(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{125:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(40),a=n(5),s="SEND-MASSAGE",c={dialogs:[{id:1,name:"Sergio"},{id:2,name:"Anja"},{id:3,name:"Jon"},{id:4,name:"Irina"},{id:5,name:"Valentina"}],massages:[{id:1,massage:"Hi"},{id:2,massage:"How are you?"},{id:3,massage:"You"},{id:4,massage:"Yo"},{id:5,massage:"Yo"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{massages:[].concat(Object(r.a)(e.massages),[{id:6,massage:n}])});default:return e}}},13:function(e,t,n){e.exports={nav:"Navbar_nav__1Oydu",item:"Navbar_item__22YZ7",activeLink:"Navbar_activeLink__2rejz"}},131:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3NfTj"}},165:function(e,t,n){},166:function(e,t,n){},17:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(129),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9a499a72-df21-44ec-93cd-7df4e085fa9e"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},288:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),s=n.n(a),c=n(66),i=n.n(c),o=(n(165),n(34)),u=n(35),l=n(38),d=n(37),j=(n(166),n(5)),f=n(90),b=n.n(f),p=n(15),g=function(e){return Object(r.jsxs)("header",{className:b.a.header,children:[Object(r.jsx)("img",{src:"http://3.bp.blogspot.com/-iKHwpJF-EHo/UE17RbszugI/AAAAAAAAAN4/THNcHg8V2Zc/s1600/twitter-bird-light-bgs.png"}),Object(r.jsx)("div",{className:b.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[" ",e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(p.b,{to:"/login",children:"Login"})})]})},h=n(14),O=n(10),m=n.n(O),v=n(21),x=n(17),A=n(45),w="SET_USER_DATA",P={userId:null,email:null,login:null,isAuth:!1},C=function(e,t,n,r){return{type:w,payload:{userId:e,email:t,login:n,isAuth:r}}},S=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,a,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(C(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(r.jsx)(g,Object(j.a)({},this.props))}}]),n}(s.a.Component),y=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:S,logout:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.logout();case 2:0===e.sent.data.resultCode&&t(S());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(k),D=n(13),E=n.n(D),z=function(){return Object(r.jsxs)("nav",{className:E.a.nav,children:[Object(r.jsx)("div",{className:"".concat(E.a.item," ").concat(E.a.active),children:Object(r.jsx)(p.b,{to:"/profile",activeClassName:E.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:E.a.item,children:Object(r.jsx)(p.b,{to:"/users",activeClassName:E.a.activeLink,children:"Users"})}),Object(r.jsx)("div",{className:E.a.item,children:Object(r.jsx)(p.b,{to:"/dialogs",activeClassName:E.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:E.a.item,children:Object(r.jsx)(p.b,{to:"/news",activeClassName:E.a.activeLink,children:"News"})}),Object(r.jsx)("div",{className:E.a.item,children:Object(r.jsx)(p.b,{to:"/music",activeClassName:E.a.activeLink,children:"Music"})}),Object(r.jsx)("div",{className:E.a.item,children:Object(r.jsx)(p.b,{to:"/setings",activeClassName:E.a.activeLink,children:"Setings"})})]})},N=function(e){return Object(r.jsx)("div",{children:"News"})},U=function(e){return Object(r.jsx)("div",{children:"Music"})},T=function(e){return Object(r.jsx)("dv",{children:"Setings"})},B=n(11),M=n(40),F=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),r):e}))},G="FOLLOW",L="UNFOLLOW",_="SET_USERS",Y="SET_CURRENT_PAGE",R="SET_TOTAL_USERS_COUNT",H="TOGGEL_IS_FETCHING",K="TOGGEL_IS_FOLLOWING_PROGRESS",q={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},Q=function(e){return{type:G,userId:e}},X=function(e){return{type:L,userId:e}},Z=function(e){return{type:Y,currentPage:e}},J=function(e){return{type:H,isFetching:e}},V=function(e,t){return{type:K,isFetching:e,userId:t}},W=function(){var e=Object(v.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(V(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(V(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(j.a)(Object(j.a)({},e),{},{users:F(e.users,t.userId,"id",{followed:!0})});case L:return Object(j.a)(Object(j.a)({},e),{},{users:F(e.users,t.userId,"id",{followed:!1})});case _:return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case Y:return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case R:return Object(j.a)(Object(j.a)({},e),{},{totalUsersCount:t.count});case H:return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case K:return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(M.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ee=n(56),te=n(68),ne=n(127),re=n(71),ae=n.n(re),se=n(130),ce=n.n(se),ie=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,c=e.onPageChanged,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(t/n),l=[],d=1;d<u;d++)l.push(d);var j=Math.ceil(u/o),f=Object(a.useState)(1),b=Object(ne.a)(f,2),p=b[0],g=b[1],h=(p-1)*o+1,O=p*o;return Object(r.jsxs)("div",{className:ae.a.paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){g(p-1)},children:"PREV"}),l.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:ce()(Object(te.a)({},ae.a.selectedPage,s===e),ae.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),j>p&&Object(r.jsx)("button",{onClick:function(){g(p+1)},children:"NEXT"})]})},oe=n(131),ue=n.n(oe),le=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(p.b,{to:"profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:"data:image/png;base64,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",className:ue.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Follow"})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"user.location.country"}),Object(r.jsx)("div",{children:"user.location.city"})]})]})]})},de=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,s=e.onPageChanged,c=e.users,i=Object(ee.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(ie,{currentPage:t,onPageChanged:s,totalItemsCount:n,pageSize:a}),Object(r.jsx)("div",{children:c.map((function(e){return Object(r.jsx)(le,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))})]})},je=n(41),fe=n(9),be=n(132),pe=Object(be.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ge=function(e){return e.usersPage.pageSize},he=function(e){return e.usersPage.totalUsersCount},Oe=function(e){return e.usersPage.currentPage},me=function(e){return e.usersPage.isFetching},ve=function(e){return e.usersPage.followingInProgress},xe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props,r=(n.getUsers,n.pageSize);e.props.getUsers(t,r)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return console.log("USERS"),Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(je.a,{}):null,Object(r.jsx)(de,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),Ae=Object(fe.d)(Object(h.b)((function(e){return{users:pe(e),pageSize:ge(e),totalUsersCount:he(e),currentPage:Oe(e),isFetching:me(e),followingInProgress:ve(e)}}),{follow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:W(n,e,x.c.follow.bind(x.c),Q);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:W(n,e,x.c.unfollow.bind(x.c),X);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:Z,toggleFollowingProgress:V,getUsers:function(e,t){return function(){var n=Object(v.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(J(!0)),r(Z(e)),n.next=4,x.c.getUsers(e,t);case 4:a=n.sent,r(J(!1)),r((c=a.items,{type:_,users:c})),r((s=a.totalCount,{type:R,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(xe),we=n(126),Pe=n(33),Ce=n(57),Se=n(53),Ie=n.n(Se),ke=Object(we.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(Pe.c)("Email","email",[Ce.b],Pe.a),Object(Pe.c)("Password","password",[Ce.b],Pe.a,{type:"password"}),Object(Pe.c)(null,"rememberMe",[],Pe.a,{type:"checkbox"},"remember me"),n&&Object(r.jsx)("div",{className:Ie.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),ye=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(v.a)(m.a.mark((function r(a){var s,c;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,x.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(S()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(A.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(B.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(ke,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),De="INITIALIZED_SUCCESS",Ee={initialized:!1},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case De:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},Ne=n(95),Ue=n(125),Te={},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;return e},Me=n(134),Fe=n(128),Ge=Object(fe.c)({profilePage:Ne.b,dialogsPage:Ue.a,sidebar:Be,usersPage:$,auth:I,form:Fe.a,app:ze}),Le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.d,_e=Object(fe.e)(Ge,Le(Object(fe.a)(Me.a)));window._store_=_e;var Ye=_e,Re=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(je.a,{}),children:Object(r.jsx)(e,Object(j.a)({},t))})}},He=s.a.lazy((function(){return n.e(4).then(n.bind(null,294))})),Ke=s.a.lazy((function(){return n.e(3).then(n.bind(null,293))})),qe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(y,{}),Object(r.jsx)(z,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(B.b,{path:"/dialogs",render:Re(He)}),Object(r.jsx)(B.b,{path:"/profile/:userId?",render:Re(Ke)}),Object(r.jsx)(B.b,{path:"/users",render:function(){return Object(r.jsx)(Ae,{})}}),Object(r.jsx)(B.b,{path:"/login",render:function(){return Object(r.jsx)(ye,{})}}),Object(r.jsx)(B.b,{path:"/news",render:function(){return Object(r.jsx)(N,{})}}),Object(r.jsx)(B.b,{path:"/music",render:function(){return Object(r.jsx)(U,{})}}),Object(r.jsx)(B.b,{path:"/setings",render:function(){return Object(r.jsx)(T,{})}})]})]}):Object(r.jsx)(je.a,{})}}]),n}(s.a.Component),Qe=Object(fe.d)(B.f,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(S());Promise.all([t]).then((function(){e({type:De})}))}}}))(qe),Xe=function(e){return Object(r.jsx)(p.a,{children:Object(r.jsx)(h.a,{store:Ye,children:Object(r.jsx)(Qe,{})})})};i.a.render(Object(r.jsx)(Xe,{}),document.getElementById("root"))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return j}));var r=n(5),a=n(56),s=n(1),c=(n(0),n(53)),i=n.n(c),o=(n(57),n(89)),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(s.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(s.jsx)("div",{children:a}),c&&Object(s.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},c)),i]})}},41:function(e,t,n){"use strict";var r=n(1),a=(n(0),n.p+"static/media/preloader.1e14adf0.gif");t.a=function(e){return Object(r.jsx)("img",{src:a})}},53:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3A9Cw",error:"FormsControls_error__2OGlS",formSummaryError:"FormsControls_formSummaryError__6dn4M"}},57:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__24S1Y",pageNumber:"Paginator_pageNumber__3QniX",selectedPage:"Paginator_selectedPage__19ZNx"}},90:function(e,t,n){e.exports={header:"Header_header__3h9i8",loginBlock:"Header_loginBlock__2CGDU"}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return O}));var r=n(10),a=n.n(r),s=n(21),c=n(40),i=n(5),o=n(17),u="ADD-POST",l="SET_USER_PROFILE",d="SET_STATUS",j="DELETE_POST",f={posts:[{id:1,massage:"Hi, how are you?",likeCount:12},{id:2,massage:"Its my first post",likeCount:11},{id:3,massage:"you?",likeCount:12},{id:4,massage:"first post",likeCount:11}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},p=function(e){return{type:d,status:e}},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,massage:t.newPostText,likeCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case j:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}}},[[288,1,2]]]);
//# sourceMappingURL=main.a1ae01e7.chunk.js.map