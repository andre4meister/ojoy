(self.webpackChunkojoy=self.webpackChunkojoy||[]).push([[22],{7278:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});t(2791);var i="MainListItem_item__rnepy",o="MainListItem_item__image__fkHOi",r="MainListItem_item__name__p5lh7",a="MainListItem_item__info__J2oM9",s=t(7689),c=t(9424),_=t(184),u=function(n){var e=n.item,t=n.showType,u=void 0!==t&&t,l=e.createdAt.split(" ")[1],d=u?"".concat(l," ").concat(e.type):l,v=(0,s.s0)();return(0,_.jsxs)("li",{className:i,children:[(0,_.jsx)("div",{onClick:function(){var n="\u0424\u0456\u043b\u044c\u043c"===e.type?"movie":"serial";v("/".concat(n,"/").concat(e.id))},className:o,children:(0,_.jsx)(c.Z,{url:e.mainPhotoUrl,alt:e.name})}),(0,_.jsx)("div",{className:r,children:e.name}),(0,_.jsx)("div",{className:a,children:d})]},e.id)}},3626:function(n,e,t){"use strict";t.d(e,{Z:function(){return r}});t(2791);var i="PageTitle_title__ouGV9",o=t(184),r=function(n){var e=n.title;return(0,o.jsx)("div",{className:i,children:e})}},9424:function(n,e,t){"use strict";var i=t(9439),o=t(2791),r=t(8431),a=t(184);e.Z=function(n){var e=n.url,t=n.alt,s=void 0===t?"":t,c=(0,o.useState)(null),_=(0,i.Z)(c,2),u=_[0],l=_[1];return(0,o.useEffect)((function(){(0,r.iF)(e).then((function(n){l(n)}))}),[e]),(0,a.jsx)("img",{src:u,alt:s})}},2366:function(n,e,t){"use strict";t.d(e,{Z:function(){return m}});var i=t(9439),o="MoviesPage_container__VNyGx",r="MoviesPage_moviesBlock__NGxyS",a="MoviesPage_moviesList__7DqpL",s="MoviesPage_pagination__ssdf+",c=t(3626),_=t(7278),u=t(2791),l="Pagination_pagination__1C2vY",d="Pagination_pagination__button__dHIBm",v="Pagination_pagination__button_active__OlG2O",S=t(7309),f=t(184),E=function(n){for(var e=n.pagesCount,t=n.currentPage,i=n.setCurrentPage,o=[],r=0;r<e;r++)o.push(r);return(0,f.jsx)("div",{className:l,children:o.map((function(n){return(0,f.jsx)(S.ZP,{className:"".concat(d," ").concat(n===t?v:""),onClick:function(){var o;(o=n)<0||o>e-1||o===t||i(o)},children:n+1},n)}))})},m=function(n){var e=n.movies,t=n.title,l=Math.ceil(e.length/18),d=(0,u.useState)(0),v=(0,i.Z)(d,2),S=v[0],m=v[1],p=(0,u.useMemo)((function(){return e.slice(18*S,18*S+18)}),[e,S]);return(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)(c.Z,{title:t}),(0,f.jsx)("div",{className:r,children:(0,f.jsx)("ul",{className:a,children:p.map((function(n){return(0,f.jsx)(_.Z,{item:n},n.id)}))})}),(0,f.jsx)("div",{className:s,children:(0,f.jsx)(E,{currentPage:S,setCurrentPage:m,pagesCount:l})})]})}},5224:function(n,e,t){"use strict";t.r(e);var i=t(2791),o=t(2366),r=t(5717),a=t(3190),s=t(184);e.default=function(){var n=(0,i.useContext)(r.Z).actions.getMovies,e=n.isLoading,t=n.error,c=n.data,_=n.refetch;return(0,i.useEffect)((function(){_()}),[]),(0,s.jsx)(a.Z,{error:t,data:c,loading:e,children:(0,s.jsx)(o.Z,{movies:c,title:"\u0424\u0456\u043b\u044c\u043c\u0438"})})}},8431:function(n,e,t){"use strict";t.d(e,{iF:function(){return v}});var i=t(4165),o=t(5861),r=t(1377),a=t(4966),s=t(2336),c={NODE_ENV:"production",PUBLIC_URL:"/ojoy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.AWS_BUCKET_NAME||"ojoy",_={NODE_ENV:"production",PUBLIC_URL:"/ojoy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.AWS_BUCKET_REGION||"eu-central-1",u={NODE_ENV:"production",PUBLIC_URL:"/ojoy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.AWS_ACCESS_KEY||"AKIAXPHMUHUIVWBLWRXF",l={NODE_ENV:"production",PUBLIC_URL:"/ojoy",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.AWS_SECRET_ACCESS_KEY||"4OLMsgNXsZ9m51sn8IARhy3wrn6yrtJ0ooGcpQaU",d=new r.g({region:_,credentials:{accessKeyId:u,secretAccessKey:l}});function v(n){return S.apply(this,arguments)}function S(){return(S=(0,o.Z)((0,i.Z)().mark((function n(e){var t,o;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={Bucket:c,Key:e},o=new a.i(t),28800,n.next=5,(0,s.e)(d,o,{expiresIn:28800});case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5810:function(){},4287:function(){}}]);
//# sourceMappingURL=22.97a4ffa5.chunk.js.map