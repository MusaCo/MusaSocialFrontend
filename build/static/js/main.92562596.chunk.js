(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{110:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){},113:function(e,t,s){},114:function(e,t,s){},115:function(e,t,s){},116:function(e,t,s){},117:function(e,t,s){},118:function(e,t,s){},119:function(e,t,s){},120:function(e,t,s){},121:function(e,t,s){},122:function(e,t,s){},123:function(e,t,s){},153:function(e,t,s){},154:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(75),r=s.n(n),i=s(3),o=s.n(i),l=s(5),u=s(6),j=s(168),d=s(169),b=s(170),p=s(171),h=s(26),O=s(25),m=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:t.payload};case"FOLLOW":return Object(O.a)(Object(O.a)({},e),{},{user:Object(O.a)(Object(O.a)({},e.user),{},{followings:[].concat(Object(h.a)(e.user.followings),[t.payload])})});case"UNFOLLOW":return Object(O.a)(Object(O.a)({},e),{},{user:Object(O.a)(Object(O.a)({},e.user),{},{followings:e.user.followings.filter((function(e){return e!==t.payload}))})});default:return e}},x=s(0),v={user:null,isFetching:!1,error:!1},f=Object(a.createContext)(v),g=function(e){var t=e.children,s=Object(a.useReducer)(m,v),c=Object(u.a)(s,2),n=c[0],r=c[1];return Object(x.jsx)(f.Provider,{value:{user:n.user,isFetching:n.isFetching,error:n.error,dispatch:r},children:t})},N=(s(88),s(13)),I=s(4),w=s.n(I);function k(){var e=Object(a.useContext)(f).user,t=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://musasocialapi.herokuapp.com/auth/logout");case 2:!0===e.sent.data.Loggedout&&window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"topbarContainer",children:[Object(x.jsx)("div",{className:"topbarLeft",children:Object(x.jsx)(N.b,{to:"/",style:{textDecoration:"none"},children:Object(x.jsx)("span",{className:"logo",children:"MusaSocial"})})}),Object(x.jsx)("div",{className:"topbarCenter",children:Object(x.jsxs)("div",{className:"searchbar",children:[Object(x.jsx)(j.a,{}),Object(x.jsx)("input",{placeholder:"Search for frind, post or video",className:"searchInput"})]})}),Object(x.jsxs)("div",{className:"topbarRight",children:[Object(x.jsxs)("div",{className:"topbarLinks",children:[Object(x.jsx)("span",{className:"topbarLink",children:"Homepage"}),Object(x.jsx)("span",{className:"topbarLink",onClick:t,children:"Logout"})]}),Object(x.jsxs)("div",{className:"topbarIcons",children:[Object(x.jsxs)("div",{className:"topbarIconItem",children:[Object(x.jsx)(d.a,{}),Object(x.jsx)("span",{className:"topbarIconBadge",children:"1"})]}),Object(x.jsxs)("div",{className:"topbarIconItem",children:[Object(x.jsx)(b.a,{}),Object(x.jsx)("span",{className:"topbarIconBadge",children:"2"})]}),Object(x.jsxs)("div",{className:"topbarIconItem",children:[Object(x.jsx)(p.a,{}),Object(x.jsx)("span",{className:"topbarIconBadge",children:"1"})]})]}),Object(x.jsx)(N.b,{to:"/profile/".concat(null===e||void 0===e?void 0:e.username),children:Object(x.jsx)("img",{src:"http://localhost:8800/images/"+(null===e||void 0===e?void 0:e.profilePicture),alt:"",className:"topbarimg"})})]})]})}s(110);var y=s(172),L=s(173),C=s(174),S=s(175),F=s(176),_=s(177),T=s(178),R=s(179);s(111);function E(){return Object(x.jsx)("div",{className:"sidebar",children:Object(x.jsxs)("div",{className:"sidebarWrapper",children:[Object(x.jsxs)("ul",{className:"sidebarList",children:[Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(y.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Feed"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(b.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Chats"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(L.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Video"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(C.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Groups"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(S.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"BookMarks"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(F.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Questions"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(_.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Jobs"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(T.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Events"})]}),Object(x.jsxs)("li",{className:"sidebarListItem",children:[Object(x.jsx)(R.a,{className:"sidebarIcon"}),Object(x.jsx)("span",{className:"sidebarListItemText",children:"Courses"})]})]}),Object(x.jsx)("button",{className:"sidebarButton",children:"Show More"}),Object(x.jsx)("hr",{className:"sidebarHr"}),Object(x.jsx)("ul",{className:"sidebarFriendList"})]})})}s(112),s(113);var B=s(180),U=s(181);function A(e){var t,s=e.user,c=Object(a.useContext)(f),n=c.user,r=c.dispatch,i=Object(a.useState)([]),j=Object(u.a)(i,2),d=j[0],b=j[1],p=Object(a.useState)(null===n||void 0===n||null===(t=n.followings)||void 0===t?void 0:t.includes(null===s||void 0===s?void 0:s._id)),h=Object(u.a)(p,2),O=h[0],m=h[1];Object(a.useEffect)((function(){var e;m(null===n||void 0===n||null===(e=n.followings)||void 0===e?void 0:e.includes(null===s||void 0===s?void 0:s._id))}),[n,null===s||void 0===s?void 0:s._id]),Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://musasocialapi.herokuapp.com/users/friends/".concat(null===s||void 0===s?void 0:s._id));case 3:t=e.sent,b(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[null===s||void 0===s?void 0:s._id]);var v=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!O){e.next=7;break}return e.next=4,w.a.put("https://musasocialapi.herokuapp.com/users/"+s._id+"/unfollow",{userId:null===n||void 0===n?void 0:n._id});case 4:r({type:"UNFOLLOW",payload:s._id}),e.next=10;break;case 7:return e.next=9,w.a.put("https://musasocialapi.herokuapp.com/users/"+s._id+"/follow",{userId:null===n||void 0===n?void 0:n._id});case 9:r({type:"FOLLOW",payload:s._id});case 10:m(!O),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),g=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"birthdayContainer",children:[Object(x.jsx)("img",{src:"/assets/birthday.png",alt:"",className:"birthdayImg"}),Object(x.jsxs)("span",{className:"birthdayText",children:[Object(x.jsx)("b",{children:"Ahmed Adil"})," and ",Object(x.jsx)("b",{children:"7 other Friends"})," have a birthday today"]})]}),Object(x.jsx)("img",{src:"/assets/tesla.jpg",alt:"",className:"rightbarAd"}),Object(x.jsx)("h4",{className:"rightbarTitle",children:"Online Friends"}),Object(x.jsx)("ul",{className:"rightbarFriendList"})]})},I=function(){return Object(x.jsxs)(x.Fragment,{children:[(null===n||void 0===n?void 0:n.username)!==(null===s||void 0===s?void 0:s.username)&&Object(x.jsxs)("button",{className:"rightbarFollowButton",onClick:v,children:[O?"Unfollow":"Follow",O?Object(x.jsx)(B.a,{}):Object(x.jsx)(U.a,{})]}),Object(x.jsx)("h4",{className:"rightbarTitle",children:"User Information"}),Object(x.jsxs)("div",{className:"rightbarInfo",children:[Object(x.jsxs)("div",{className:"rightbarInfoItem",children:[Object(x.jsx)("span",{className:"rightbarInfoKey",children:"From:"}),Object(x.jsx)("span",{className:"rightbarInfoValue",children:s.from})]}),Object(x.jsxs)("div",{className:"rightbarInfoItem",children:[Object(x.jsx)("span",{className:"rightbarInfoKey",children:"Live:"}),Object(x.jsx)("span",{className:"rightbarInfoValue",children:s.city})]}),Object(x.jsxs)("div",{className:"rightbarInfoItem",children:[Object(x.jsx)("span",{className:"rightbarInfoKey",children:"Relationship:"}),Object(x.jsx)("span",{className:"rightbarInfoValue",children:s.relationship})]})]}),Object(x.jsx)("h4",{className:"rightbarTitle",children:"User Friends"}),Object(x.jsx)("div",{className:"rightbarFollowings",children:d.map((function(e){return Object(x.jsx)(N.b,{to:"/profile/"+e.username,style:{textDecoration:"none"},children:Object(x.jsxs)("div",{className:"rightbarFollowing",children:[Object(x.jsx)("img",{src:"http://localhost:8800/images/"+e.profilePicture,alt:"",className:"rightbarFollowingImg"}),Object(x.jsx)("span",{className:"rightbarFollowingName",children:null===e||void 0===e?void 0:e.username})]})})}))})]})};return Object(x.jsx)("div",{className:"rightbar",children:Object(x.jsx)("div",{className:"rightbarWrapper",children:s?Object(x.jsx)(I,{}):Object(x.jsx)(g,{})})})}s(114),s(115);var P=s(182),G=s(183),D=s(184),W=s(185),M=s(186);function q(){var e=Object(a.useContext)(f).user,t=Object(a.useRef)(),s=Object(a.useState)(null),c=Object(u.a)(s,2),n=c[0],r=c[1],i=function(){var s=Object(l.a)(o.a.mark((function s(a){var c,r,i;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(a.preventDefault(),c={userId:e._id,desc:t.current.value?t.current.value:" "},!n){s.next=16;break}return r=new FormData,i=Date.now()+n.name,r.append("name",i),r.append("file",n),c.img=i,s.prev=8,s.next=11,w.a.post("https://musasocialapi.herokuapp.com/upload",r);case 11:s.next=16;break;case 13:s.prev=13,s.t0=s.catch(8),console.log(s.t0);case 16:return s.prev=16,s.next=19,w.a.post("https://musasocialapi.herokuapp.com/post",c);case 19:window.location.reload(),s.next=25;break;case 22:s.prev=22,s.t1=s.catch(16),console.log(s.t1);case 25:case"end":return s.stop()}}),s,null,[[8,13],[16,22]])})));return function(e){return s.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"share",children:Object(x.jsxs)("div",{className:"shareWrapper",children:[Object(x.jsxs)("div",{className:"shareTop",children:[Object(x.jsx)("img",{src:"http://localhost:8800/images/"+(null===e||void 0===e?void 0:e.profilePicture),alt:"",className:"shareProfileImg"}),Object(x.jsx)("input",{ref:t,placeholder:"What's in your mind "+(null===e||void 0===e?void 0:e.username),className:"shareInput"})]}),Object(x.jsx)("hr",{className:"shareHr"}),n&&Object(x.jsxs)("div",{className:"shareImgContainer",children:[Object(x.jsx)("img",{src:URL.createObjectURL(n),alt:"",className:"shareImg"}),Object(x.jsx)(P.a,{className:"shareImageCancel",onClick:function(){r(null)}})]}),Object(x.jsxs)("form",{className:"shareBottom",onSubmit:i,children:[Object(x.jsxs)("div",{className:"shareOptions",children:[Object(x.jsxs)("label",{htmlFor:"file",className:"shareOption",children:[Object(x.jsx)(G.a,{className:"shareIcon",htmlColor:"tomato"}),Object(x.jsx)("span",{className:"shareOptionText",children:"Photo or Video"}),Object(x.jsx)("input",{type:"file",style:{display:"none"},accept:".png,.jpg,.jpeg",id:"file",onChange:function(e){r(e.target.files[0])}})]}),Object(x.jsxs)("div",{className:"shareOption",children:[Object(x.jsx)(D.a,{className:"shareIcon",htmlColor:"blue"}),Object(x.jsx)("span",{className:"shareOptionText",children:"Tag"})]}),Object(x.jsxs)("div",{className:"shareOption",children:[Object(x.jsx)(W.a,{className:"shareIcon",htmlColor:"green"}),Object(x.jsx)("span",{className:"shareOptionText",children:"Location"})]}),Object(x.jsxs)("div",{className:"shareOption",children:[Object(x.jsx)(M.a,{className:"shareIcon",htmlColor:"goldenrod"}),Object(x.jsx)("span",{className:"shareOptionText",children:"Feelings"})]})]}),Object(x.jsx)("button",{className:"shareButton",type:"submit",children:"Share"})]})]})})}s(116);var H=s(187),V=s(41);function Y(e){var t=e.post,s=Object(a.useContext)(f).user,c=Object(a.useState)({}),n=Object(u.a)(c,2),r=n[0],i=n[1],j=Object(a.useState)(t.likes.length),d=Object(u.a)(j,2),b=d[0],p=d[1],h=Object(a.useState)(!1),O=Object(u.a)(h,2),m=O[0],v=O[1],g="http://localhost:8800/images/";Object(a.useEffect)((function(){v(t.likes.includes(s._id))}),[null===s||void 0===s?void 0:s._id,t.likes]),Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://musasocialapi.herokuapp.com/users?userId=".concat(t.userId));case 2:s=e.sent,i(s.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var I=function(){try{w.a.put("https://musasocialapi.herokuapp.com/post/"+t._id+"/like",{userId:s._id}),console.log("post liked........")}catch(e){console.log(e)}p(m?b-1:b+1),v(!m)};return Object(x.jsx)("div",{className:"post",children:Object(x.jsxs)("div",{className:"postWrapper",children:[Object(x.jsxs)("div",{className:"postTop",children:[Object(x.jsxs)("div",{className:"postTopLeft",children:[Object(x.jsx)(N.b,{to:"profile/".concat(null===r||void 0===r?void 0:r.username),children:Object(x.jsx)("img",{src:r.profilePicture?g+(null===r||void 0===r?void 0:r.profilePicture):g+"nopfp.png",alt:"",className:"postProfileImg"})}),Object(x.jsx)("span",{className:"postUsername",children:null===r||void 0===r?void 0:r.username}),Object(x.jsx)("span",{className:"postDate",children:Object(V.a)(t.createdAt)})]}),Object(x.jsx)("div",{className:"postTopRight",children:Object(x.jsx)(H.a,{})})]}),Object(x.jsxs)("div",{className:"postCenter",children:[Object(x.jsx)("span",{className:"postText",children:null===t||void 0===t?void 0:t.desc}),Object(x.jsx)("img",{src:g+t.img,alt:"",className:"postImg"})]}),Object(x.jsxs)("div",{className:"postBottom",children:[Object(x.jsxs)("div",{className:"postBottomLeft",children:[Object(x.jsx)("img",{src:g+"like.png",alt:"",className:"likeIcon",onClick:I}),Object(x.jsx)("img",{src:g+"heart1.png",alt:"",className:"likeIcon",onClick:I}),Object(x.jsx)("span",{className:"postLikeCounter",children:b})]}),Object(x.jsx)("div",{className:"postBottomRight",children:Object(x.jsxs)("span",{className:"postCommentText",children:[t.comment," Comments"]})})]})]})})}function J(e){var t=e.username,s=Object(a.useContext)(f).user,c=Object(a.useState)([]),n=Object(u.a)(c,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,w.a.get("https://musasocialapi.herokuapp.com/post/profile/".concat(t));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,w.a.get("/post/timeline/".concat(null===s||void 0===s?void 0:s._id));case 8:e.t0=e.sent;case 9:a=e.t0,i(a.data.sort((function(e,t){return new Date(t.createdAt)-new Date(e.createdAt)})));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,null===s||void 0===s?void 0:s._id]),Object(x.jsx)("div",{className:"feed",children:Object(x.jsxs)("div",{className:"feedWrapper",children:[(!t||t===s.username)&&Object(x.jsx)(q,{}),r.map((function(e){return Object(x.jsx)(Y,{post:e},e._id)}))]})})}s(117);var K=s(7);function Q(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),s=t[0],c=t[1],n=Object(a.useContext)(f),r=(n.user,n.isFetching,n.error,n.dispatch);return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"LOGIN_START"}),e.prev=1,e.next=4,w.a.get("https://musasocialapi.herokuapp.com/auth/login");case 4:!0===(t=e.sent).data.Loggedin?(c(!0),r({type:"LOGIN_SUCCESS",payload:t.data.message})):c(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),c(!1),r({type:"LOGIN_FAILURE",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{}),Object(x.jsxs)("div",{className:"homeContainer",children:[Object(x.jsx)(E,{}),Object(x.jsx)(J,{}),Object(x.jsx)(A,{})]})]}):Object(x.jsx)(K.a,{to:"/login"})}s(118);var z=s(188);function X(){var e=Object(K.g)(),t=Object(a.useRef)(),s=Object(a.useRef)(),c=Object(a.useContext)(f),n=(c.user,c.isFetching),r=(c.error,c.dispatch),i=function(){var a=Object(l.a)(o.a.mark((function a(c){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),r({type:"LOGIN_START"}),a.prev=2,a.next=5,w.a.post("https://musasocialapi.herokuapp.com/auth/login",{email:t.current.value,password:s.current.value});case 5:n=a.sent,r({type:"LOGIN_SUCCESS",payload:n.data}),e.push("/"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(2),r({type:"LOGIN_FAILURE",payload:a.t0}),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"login",children:Object(x.jsxs)("div",{className:"loginWrapper",children:[Object(x.jsxs)("div",{className:"loginLeft",children:[Object(x.jsx)("h3",{className:"loginLogo",children:"MusaSocial"}),Object(x.jsx)("span",{className:"loginDesc",children:"Connect with Friends That You Dont Have :)"})]}),Object(x.jsx)("div",{className:"loginRight",children:Object(x.jsxs)("form",{className:"loginBox",onSubmit:i,children:[Object(x.jsx)("input",{placeholder:"Email",className:"loginInput",ref:t,required:!0,type:"email"}),Object(x.jsx)("input",{placeholder:"Password",className:"loginInput",minLength:"6",ref:s,required:!0,type:"password"}),Object(x.jsx)("button",{className:"loginButton",disabled:n,children:n?Object(x.jsx)(z.a,{color:"white"}):"Login"}),Object(x.jsx)("span",{className:"loginForgot",children:"Forgot Password"}),Object(x.jsx)("button",{className:"loginRegisterButton",children:n?Object(x.jsx)(z.a,{color:"white"}):"Create Account"})]})})]})})}s(119);function Z(){var e=Object(a.useState)(),t=Object(u.a)(e,2),s=t[0],c=t[1],n="http://localhost:8800/images/",r=Object(K.h)().username,i=Object(a.useState)(!0),j=Object(u.a)(i,2),d=j[0],b=j[1],p=Object(a.useContext)(f).dispatch;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p({type:"LOGIN_START"}),e.prev=1,e.next=4,w.a.get("/auth/login");case 4:!0===(t=e.sent).data.Loggedin?(b(!0),p({type:"LOGIN_SUCCESS",payload:t.data.message})):b(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),b(!1),p({type:"LOGIN_FAILURE",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){d&&function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/users?username=".concat(r));case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r]),d?s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{}),Object(x.jsxs)("div",{className:"profile",children:[Object(x.jsx)(E,{}),Object(x.jsxs)("div",{className:"profileRight",children:[Object(x.jsxs)("div",{className:"profileRightTop",children:[Object(x.jsxs)("div",{className:"profileCover",children:[Object(x.jsx)("img",{src:s.coverPicture?n+s.coverPicture:n+"nopfp.jpg",alt:"",className:"profileCoverImg"}),Object(x.jsx)("img",{src:s.profilePicture?n+s.profilePicture:n+"nopfp.jpg",alt:"",className:"profileUserImg"})]}),Object(x.jsxs)("div",{className:"profileInfo",children:[Object(x.jsx)("h4",{className:"profileInfoName",children:null===s||void 0===s?void 0:s.username}),Object(x.jsx)("span",{className:"profileInfoDesc",children:null===s||void 0===s?void 0:s.desc})]})]}),Object(x.jsxs)("div",{className:"profileRightBottom",children:[Object(x.jsx)(J,{username:null===s||void 0===s?void 0:s.username}),Object(x.jsx)(A,{user:s})]})]})]})]}):Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)(k,{}),Object(x.jsx)("div",{className:"usernotFoundParent",children:Object(x.jsx)("h4",{className:"usernotFound",children:"User Was Not Found!!"})})]}):Object(x.jsx)(K.a,{to:"/login"})}s(120),s(121);function $(e){var t=e.conversation,s=e.currentUser,c="http://localhost:8800/images/",n=Object(a.useState)(null),r=Object(u.a)(n,2),i=r[0],j=r[1];return Object(a.useEffect)((function(){var e=t.members.find((function(e){return e!==(null===s||void 0===s?void 0:s._id)}));(function(){var t=Object(l.a)(o.a.mark((function t(){var s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.a.get("/users?userId="+e);case 3:s=t.sent,j(s.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[s,t]),Object(x.jsxs)("div",{className:"conversation",children:[Object(x.jsx)("img",{src:(null===i||void 0===i?void 0:i.profilePicture)?c+i.profilePicture:c+"nopfp.jpg",alt:"",className:"conversationImg"}),Object(x.jsx)("span",{className:"conversationName",children:null===i||void 0===i?void 0:i.username})]})}s(122);function ee(e){var t=e.own,s=e.message;return Object(x.jsxs)("div",{className:t?"message own":"message",children:[Object(x.jsxs)("div",{className:"messageTop",children:[Object(x.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpOB50Gf-839DMNoHRlYYBAWP0TN73RHsGg&usqp=CAU",alt:"",className:"messageImg"}),Object(x.jsxs)("p",{className:"messageText",children:[" ",null===s||void 0===s?void 0:s.text]})]}),Object(x.jsx)("div",{className:"messageBottom",children:Object(V.a)(null===s||void 0===s?void 0:s.createdAt)})]})}s(123);function te(e){var t=e.onlineusers,s=e.currentId,c=e.setcurrentChat,n=Object(a.useState)(null),r=Object(u.a)(n,2),i=r[0],j=r[1],d=Object(a.useState)([]),b=Object(u.a)(d,2),p=b[0],O=b[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("/users/friends/"+s);case 3:t=e.sent,j(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[s]);var m=function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("/conversations/find/".concat(s,"/").concat(t._id));case 3:a=e.sent,console.log(a),c(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){O([]);for(var e=0;e<(null===t||void 0===t?void 0:t.length);e++)for(var s=0;s<(null===i||void 0===i?void 0:i.length);s++)t[e]===i[s]._id&&O([].concat(Object(h.a)(p),[i[s]]))}),[i,t]),Object(x.jsx)("div",{className:"chatOnline",children:null===p||void 0===p?void 0:p.map((function(e){return Object(x.jsxs)("div",{className:"chatOnlineFriend",onClick:function(){return m(e)},children:[Object(x.jsxs)("div",{className:"chatOnlineImgContainer",children:[Object(x.jsx)("img",{className:"chatOnlineImg",src:"http://localhost:8800/images/"+(null===e||void 0===e?void 0:e.profilePicture),alt:""}),Object(x.jsx)("div",{className:"chatOnlineBadge"})]}),Object(x.jsx)("span",{className:"chatOnlineName",children:null===e||void 0===e?void 0:e.username})]})}))})}var se=s(80);function ae(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(null),r=Object(u.a)(n,2),i=r[0],j=r[1],d=Object(a.useState)(null),b=Object(u.a)(d,2),p=b[0],O=b[1],m=Object(a.useState)(null),v=Object(u.a)(m,2),g=v[0],N=v[1],I=Object(a.useState)(null),y=Object(u.a)(I,2),L=y[0],C=y[1],S=Object(a.useState)([]),F=Object(u.a)(S,2),_=F[0],T=F[1],R=Object(a.useRef)(),E=Object(a.useRef)(),B=Object(a.useState)(!0),U=Object(u.a)(B,2),A=U[0],P=U[1],G=Object(a.useContext)(f),D=G.user,W=G.dispatch;Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return W({type:"LOGIN_START"}),e.prev=1,e.next=4,w.a.get("/auth/login");case 4:!0===(t=e.sent).data.Loggedin?(W({type:"LOGIN_SUCCESS",payload:t.data.message}),P(!0)):P(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),P(!1),W({type:"LOGIN_FAILURE",payload:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){A&&function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("/conversations/"+(null===D||void 0===D?void 0:D._id));case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[null===D||void 0===D?void 0:D._id]),Object(a.useEffect)((function(){A&&(R.current=Object(se.io)("ws://localhost:8900"),R.current.on("getMessage",(function(e){C({sender:e.senderId,text:e.text,createdAt:Date.now()})})))}),[]),Object(a.useEffect)((function(){A&&(R.current.emit("addUser",null===D||void 0===D?void 0:D._id),R.current.on("getUsers",(function(e){T(null===D||void 0===D?void 0:D.followings.filter((function(t){return e.some((function(e){return e.userId===t}))}))),console.log(e)})))}),[D]),Object(a.useEffect)((function(){A&&L&&(null===i||void 0===i?void 0:i.members.includes(L.sender))&&N((function(e){return[].concat(Object(h.a)(e),[L])}))}),[L,i]),Object(a.useEffect)((function(){A&&function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("/messages/"+(null===i||void 0===i?void 0:i._id));case 3:t=e.sent,N(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[i]);var M=function(){var e=Object(l.a)(o.a.mark((function e(t){var s,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={sender:null===D||void 0===D?void 0:D._id,text:p,conversationId:i._id},a=i.members.find((function(e){return e!==(null===D||void 0===D?void 0:D._id)})),R.current.emit("sendMessage",{senderId:null===D||void 0===D?void 0:D._id,receiverId:a,text:p}),O(""),e.prev=5,e.next=8,w.a.post("/messages",s);case 8:c=e.sent,N([].concat(Object(h.a)(g),[c.data])),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e;null===(e=E.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}),[g]),A?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k,{}),Object(x.jsxs)("div",{className:"messenger",children:[Object(x.jsx)("div",{className:"chatMenu",children:Object(x.jsxs)("div",{className:"chatMenuWrapper",children:[Object(x.jsx)("input",{placeholder:"Search for Friends",className:"chatMenuInput"}),s.map((function(e){return Object(x.jsx)("div",{className:"",onClick:function(){return j(e)},children:Object(x.jsx)($,{conversation:e,currentUser:D})})}))]})}),Object(x.jsx)("div",{className:"chatBox",children:Object(x.jsx)("div",{className:"chatBoxWrapper",children:i?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"chatBoxTop",children:g.map((function(e){return Object(x.jsx)("div",{ref:E,children:Object(x.jsx)(ee,{own:(null===e||void 0===e?void 0:e.sender)===(null===D||void 0===D?void 0:D._id),message:e})})}))}),Object(x.jsxs)("div",{className:"chatBoxBottom",children:[Object(x.jsx)("textarea",{placeholder:"Write Something...",className:"chatMessageInput",onChange:function(e){return O(e.target.value)},value:p}),Object(x.jsx)("button",{className:"chatSubmitButton",onClick:M,children:"Send"})]})]}):Object(x.jsx)("span",{className:"noConversationText",children:"Open a Convo to start Chatting"})})}),Object(x.jsx)("div",{className:"chatOnline",children:Object(x.jsx)("div",{className:"chatOnlineWrapper",children:Object(x.jsx)(te,{onlineusers:_,currentId:null===D||void 0===D?void 0:D._id,setcurrentChat:j})})})]})]}):Object(x.jsx)(K.a,{to:"/login"})}s(153);function ce(){var e=Object(a.useRef)(),t=Object(a.useRef)(),s=Object(a.useRef)(),c=Object(a.useRef)(),n=Object(K.g)(),r=function(){var a=Object(l.a)(o.a.mark((function a(r){var i;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),c.current.value!==s.current.value){a.next=15;break}return i={username:e.current.value,password:s.current.value,email:t.current.value},a.prev=3,a.next=6,w.a.post("/auth/register",i);case 6:console.log("succefull registeration"),n.push("/login"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),console.log(a.t0);case 13:a.next=17;break;case 15:s.current.setCustomValidity("Passwords do not match!"),console.log("password qwndara");case 17:case"end":return a.stop()}}),a,null,[[3,10]])})));return function(e){return a.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"login",children:Object(x.jsxs)("div",{className:"loginWrapper",children:[Object(x.jsxs)("div",{className:"loginLeft",children:[Object(x.jsx)("h3",{className:"loginLogo",children:"MusaSocial"}),Object(x.jsx)("span",{className:"loginDesc",children:"Connect with Friends That You Dont Have :)"})]}),Object(x.jsx)("div",{className:"loginRight",children:Object(x.jsxs)("form",{className:"loginBox",onSubmit:r,children:[Object(x.jsx)("input",{placeholder:"UserName",ref:e,className:"loginInput",required:!0}),Object(x.jsx)("input",{placeholder:"Email",type:"email",ref:t,className:"loginInput",required:!0}),Object(x.jsx)("input",{placeholder:"Password",type:"password",minLength:"6",ref:s,className:"loginInput",required:!0}),Object(x.jsx)("input",{placeholder:"Password Again",type:"password",minLength:"6",ref:c,className:"loginInput",required:!0}),Object(x.jsx)("button",{className:"loginButton",type:"submit",children:"SignUp"}),Object(x.jsx)("button",{className:"loginRegisterButton",children:"Log Into Account"})]})})]})})}var ne=function(){w.a.defaults.withCredentials=!0;var e=Object(a.useState)(null),t=Object(u.a)(e,2),s=(t[0],t[1]);return Object(a.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=w.a.get("https://musasocialapi.herokuapp.com/user/getuser"),s(t.data);case 2:case"end":return e.stop()}}),e)}))),[]),Object(a.useContext)(f).user,Object(x.jsx)(N.a,{children:Object(x.jsxs)(K.d,{children:[Object(x.jsx)(K.b,{exact:!0,path:"/",children:Object(x.jsx)(Q,{})}),Object(x.jsx)(K.b,{path:"/login",children:Object(x.jsx)(X,{})}),Object(x.jsx)(K.b,{path:"/register",children:Object(x.jsx)(ce,{})}),Object(x.jsx)(K.b,{path:"/profile/:username",children:Object(x.jsx)(Z,{})}),Object(x.jsx)(K.b,{exact:!0,path:"/messenger",children:Object(x.jsx)(ae,{})})]})})};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(g,{children:Object(x.jsx)(ne,{})})}),document.getElementById("root"))},88:function(e,t,s){}},[[154,1,2]]]);
//# sourceMappingURL=main.92562596.chunk.js.map