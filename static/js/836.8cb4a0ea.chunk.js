(self.webpackChunkojoy=self.webpackChunkojoy||[]).push([[836],{7278:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});t(2791);var i="MainListItem_item__rnepy",r="MainListItem_item__image__fkHOi",a="MainListItem_item__name__p5lh7",s="MainListItem_item__info__J2oM9",o=t(7689),c=t(9424),_=t(184),u=function(n){var e=n.item,t=n.showType,u=void 0!==t&&t,l=e.createdAt.split(" ")[1],d=u?"".concat(l," ").concat(e.type):l,v=(0,o.s0)();return(0,_.jsxs)("li",{className:i,children:[(0,_.jsx)("div",{onClick:function(){var n="\u0424\u0456\u043b\u044c\u043c"===e.type?"movie":"serial";v("/".concat(n,"/").concat(e.id))},className:r,children:(0,_.jsx)(c.Z,{url:e.mainPhotoUrl,alt:e.name})}),(0,_.jsx)("div",{className:a,children:e.name}),(0,_.jsx)("div",{className:s,children:d})]},e.id)}},3626:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});t(2791);var i="PageTitle_title__ouGV9",r=t(184),a=function(n){var e=n.title;return(0,r.jsx)("div",{className:i,children:e})}},9424:function(n,e,t){"use strict";var i=t(9439),r=t(2791),a=t(8431),s=t(184);e.Z=function(n){var e=n.url,t=n.alt,o=void 0===t?"":t,c=(0,r.useState)(null),_=(0,i.Z)(c,2),u=_[0],l=_[1];return(0,r.useEffect)((function(){(0,a.iF)(e).then((function(n){l(n)}))}),[e]),(0,s.jsx)("img",{src:u,alt:o})}},2366:function(n,e,t){"use strict";t.d(e,{Z:function(){return m}});var i=t(9439),r="MoviesPage_container__VNyGx",a="MoviesPage_moviesBlock__NGxyS",s="MoviesPage_moviesList__7DqpL",o="MoviesPage_pagination__ssdf+",c=t(3626),_=t(7278),u=t(2791),l="Pagination_pagination__1C2vY",d="Pagination_pagination__button__dHIBm",v="Pagination_pagination__button_active__OlG2O",S=t(7309),f=t(184),E=function(n){for(var e=n.pagesCount,t=n.currentPage,i=n.setCurrentPage,r=[],a=0;a<e;a++)r.push(a);return(0,f.jsx)("div",{className:l,children:r.map((function(n){return(0,f.jsx)(S.ZP,{className:"".concat(d," ").concat(n===t?v:""),onClick:function(){var r;(r=n)<0||r>e-1||r===t||i(r)},children:n+1},n)}))})},m=function(n){var e=n.movies,t=n.title,l=Math.ceil(e.length/18),d=(0,u.useState)(0),v=(0,i.Z)(d,2),S=v[0],m=v[1],p=(0,u.useMemo)((function(){return e.slice(18*S,18*S+18)}),[e,S]);return(0,f.jsxs)("div",{className:r,children:[(0,f.jsx)(c.Z,{title:t}),(0,f.jsx)("div",{className:a,children:(0,f.jsx)("ul",{className:s,children:p.map((function(n){return(0,f.jsx)(_.Z,{item:n},n.id)}))})}),(0,f.jsx)("div",{className:o,children:(0,f.jsx)(E,{currentPage:S,setCurrentPage:m,pagesCount:l})})]})}},6223:function(n,e,t){"use strict";t.r(e);var i=t(2791),r=t(2366),a=t(5717),s=t(3190),o=t(184);e.default=function(){var n=(0,i.useContext)(a.Z).actions.getSerials,e=n.isLoading,t=n.error,c=n.data,_=n.refetch;return(0,i.useEffect)((function(){_()}),[]),(0,o.jsx)(s.Z,{error:t,data:c,loading:e,children:(0,o.jsx)(r.Z,{movies:c,title:"\u0421\u0435\u0440\u0456\u0430\u043b\u0438"})})}},8431:function(n,e,t){"use strict";t.d(e,{iF:function(){return v}});var i=t(4165),r=t(5861),a=t(1377),s=t(4966),o=t(2336),c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.AWS_BUCKET_NAME||"ojoy",_={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.AWS_BUCKET_REGION||"eu-central-1",u={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.AWS_ACCESS_KEY||"AKIAXPHMUHUIVWBLWRXF",l={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.AWS_SECRET_ACCESS_KEY||"4OLMsgNXsZ9m51sn8IARhy3wrn6yrtJ0ooGcpQaU",d=new a.g({region:_,credentials:{accessKeyId:u,secretAccessKey:l}});function v(n){return S.apply(this,arguments)}function S(){return(S=(0,r.Z)((0,i.Z)().mark((function n(e){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={Bucket:c,Key:e},r=new s.i(t),28800,n.next=5,(0,o.e)(d,r,{expiresIn:28800});case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5810:function(){},4287:function(){}}]);
//# sourceMappingURL=836.8cb4a0ea.chunk.js.map