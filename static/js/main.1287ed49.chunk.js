(this["webpackJsonpmovies-overflow"]=this["webpackJsonpmovies-overflow"]||[]).push([[0],{154:function(e,t,n){e.exports=n(243)},159:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=(n(159),n(20)),l=n(45),u=n(61),s=function(e){return r.a.createElement("div",{style:{height:"80vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}},r.a.createElement(u.a,{image:u.a.PRESENTED_IMAGE_SIMPLE}),r.a.createElement("h3",null,"Page not found ;("))},p=n(6),m=n(245),f=n(5),d=n(29),v=n(249),b=n(106),h=n(4),g=n(133),y=n.n(g).a.create({baseURL:"https://api.themoviedb.org/3",timeout:1e3,params:{language:"en-US"}}),E=function(e){return"https://image.tmdb.org/t/p/original".concat(e)};function O(){var e=Object(p.a)(["\n    height: 100%;\n    width: 100%;\n    z-index:5;\n    background:linear-gradient(0deg, rgba(0,0,0,0.8281687675070029) 0%, rgba(0,0,0,0.6348914565826331) 13%, rgba(255,255,255,0) 22%);\n    position:absolute;\n    top:0;\n"]);return O=function(){return e},e}function x(){var e=Object(p.a)(["\n    z-index: 10;\n    width:100%;\n    color: #fff;\n    font-size:16px;\n    margin:auto 8px;\n    overflow-wrap: break-word;\n    position:absolute;\n    \n    bottom: 8px;\n    display:flex;\n    justify-content:center;\n"]);return x=function(){return e},e}function w(){var e=Object(p.a)(["\n    height: 100%;\n    width: 100%;\n    background-size:cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: all 0.6s ease;\n"]);return w=function(){return e},e}function j(){var e=Object(p.a)(["\n    flex: 0 0 auto;\n    flex-shrink: 0;\n    width:300px;\n    height: 380px;\n    margin:32px;\n    margin-top:0px;\n    overflow:hidden;\n    position:relative;\n\n    border-radius:3px;\n    overflow:hidden;\n\n    margin-right:0px;\n"]);return j=function(){return e},e}function M(){var e=Object(p.a)(["\n    overflow-x: auto;\n    width:100%;\n    display:flex;\n    padding-top: 14px;\n"]);return M=function(){return e},e}function k(){var e=Object(p.a)(["\n    flex:1;\n    margin-top:10px;\n    padding-right:16px;\n     &:hover{\n        border-bottom:1px solid transparent;\n    }\n"]);return k=function(){return e},e}function _(){var e=Object(p.a)(["\n    font-size:14px;\n    color:#1890ff;\n    padding:8px;\n    padding-top:8px;\n    padding-bottom:0px;\n    border-bottom:1px solid transparent;\n    text-transform:capitalize;\n    cursor: pointer;\n    &:hover{\n        border-bottom:1px solid #1890ff;\n    }\n"]);return _=function(){return e},e}function A(){var e=Object(p.a)(["\n    flex:4;\n    display:flex;\n    justify-content:flex-start;\n    padding-top:6px;\n    padding-left:16px;\n   \n\n"]);return A=function(){return e},e}function I(){var e=Object(p.a)(["\n    width:100%;\n    display:flex;\n    font-size:26px;\n    color:#b1b1b1;\n    font-weight:700;\n    text-transform:uppercase;\n"]);return I=function(){return e},e}function S(){var e=Object(p.a)(["\n    margin:.5em 6em;\n    display:flex;\n    justify-content:flex-start;\n    width:100%;\n"]);return S=function(){return e},e}function D(){var e=Object(p.a)(["\n    width:100%;\n    margin-top:4em;\n    overflow: hidden;\n"]);return D=function(){return e},e}var N=f.a.div(D()),T=f.a.div(S()),P=f.a.div(I()),G=f.a.div(A()),U=f.a.div(_()),C=Object(f.a)(U)(k()),B=f.a.div(M()),V=f.a.div(j()),R=f.a.img(w()),L=f.a.div(x()),z=f.a.div(O()),q=function(e){var t=e.topGenre,n=void 0===t?["Action","Drama","Comedy","Horror"]:t;return r.a.createElement(G,null,n.map((function(e,t){return t>5?null:r.a.createElement(U,null,e)})))},H=function(e){var t=e.data,n=void 0===t?[]:t,a=e.isMovie,o=void 0===a||a;return n.map((function(e){return r.a.createElement(v.a,{count:e.vote_average,overflowCount:10,style:{backgroundColor:"#FFA500"}},r.a.createElement(i.b,{to:"/details/".concat(e.id,"?isMovies=").concat(o,"&title=").concat(e.title||"TV")},r.a.createElement(V,{className:"elevate-3"},r.a.createElement(R,{src:E(e.poster_path)}),r.a.createElement(L,null,r.a.createElement("p",null,e.title)),r.a.createElement(z,null))))}))},Y=function(e){var t=e.moreUrl;return t?r.a.createElement(C,null,r.a.createElement(i.b,{to:t},r.a.createElement(b.a,{type:"dashed"},"More",r.a.createElement(h.a,{type:"double-right"})))):null},F=function(e){var t=e.title,n=e.moreUrl,a=e.topGenre,o=e.data,c=e.isMovie;return r.a.createElement(N,null,r.a.createElement(T,null,r.a.createElement(P,null,r.a.createElement("div",null,t),a&&r.a.createElement(q,{topGenre:a}),r.a.createElement(Y,{moreUrl:n}))),r.a.createElement(B,null,r.a.createElement(H,{data:o,isMovie:c})))},W=n(11),J=n.n(W),K=n(22),$="MENU_GENRE",Q=" MENU_SEARCH",X="MOVIES_NOWPLAYING",Z="MOVIES_MOSTPOPULAR",ee="MOVIES_UPCOMING",te="TVS_MOSTPOPULAR",ne=" MOVIES_TRENDING",ae="MOVIE_DETAILS",re="MOVIES_SIMILAR",oe="MOVIES_ACTORS",ce="ACTOR_DETAILS",ie="ACTOR_ALL_MOVIES",le=n(18),ue=n(31),se=n.n(ue),pe=n(247),me=n(250),fe=n(248),de=n(79),ve=n.n(de);function be(){var e=Object(p.a)(["\n    flex:3;\n    overflow-y:auto;\n    margin:32px 32px;\n"]);return be=function(){return e},e}function he(){var e=Object(p.a)(["\n    flex:1;\n    min-width:350px;\n"]);return he=function(){return e},e}function ge(){var e=Object(p.a)(["\n    height: 100%;\n    width: 100%;\n    z-index:5;\n    background:linear-gradient(0deg, rgba(0,0,0,0.8281687675070029) 0%, rgba(0,0,0,0.6348914565826331) 13%, rgba(255,255,255,0) 22%);\n    position:absolute;\n    top:0;\n"]);return ge=function(){return e},e}function ye(){var e=Object(p.a)(["\n    z-index: 10;\n    width:100%;\n    color: #fff;\n    font-size:16px;\n    margin:auto 8px;\n    overflow-wrap: break-word;\n    position:absolute;\n    \n    bottom: 8px;\n    display:flex;\n    justify-content:center;\n"]);return ye=function(){return e},e}function Ee(){var e=Object(p.a)(["\n    height: 100%;\n    width: 100%;\n    background-size:cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    transition: all 0.6s ease;\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(p.a)(["\n    flex: 0 0 auto;\n    flex-shrink: 0;\n    width:300px;\n    height: 380px;\n    margin:32px;\n    margin-top:0px;\n    overflow:hidden;\n    position:relative;\n\n    border-radius:3px;\n    overflow:hidden;\n\n    margin-right:0px;\n"]);return Oe=function(){return e},e}function xe(){var e=Object(p.a)(["\n    position:absolute;\n    top:-20%;\n"]);return xe=function(){return e},e}function we(){var e=Object(p.a)(["\n    width:70%;\n    min-width:1140px;\n    height:60vh;\n    position:relative;\n    display:flex;\n    margin-top:8em;\n    margin-bottom:.2em;\n"]);return we=function(){return e},e}var je=f.a.div(we()),Me=f.a.div(xe()),ke=f.a.div(Oe()),_e=f.a.img(Ee()),Ae=f.a.div(ye()),Ie=f.a.div(ge()),Se=f.a.div(he()),De=f.a.div(be());var Ne=function(e){var t=e.imgUrl,n=e.title,a=e.rate;return r.a.createElement(Me,null,r.a.createElement(ke,{className:"elevate-3"},r.a.createElement(_e,{src:E(t)}),r.a.createElement(Ae,null,r.a.createElement("p",null,n)),r.a.createElement(Ie,null)),r.a.createElement(pe.a,{style:{marginLeft:"30px"},count:10,value:a,disabled:!0}),r.a.createElement("span",{className:"ant-rate-text"},r.a.createElement(me.a,{color:"gold"},a)))},Te=function(e){return e.actors.map((function(e){return r.a.createElement(i.b,{to:"/actors/".concat(e.id,"?name=").concat(e.name)},r.a.createElement(me.a,{key:e.id,color:"blue"},e.name))}))},Pe=function(e){var t=e.data,n=e.movieActors;return r.a.createElement(je,{className:"elevate-1"},r.a.createElement(Se,null,r.a.createElement(Ne,{title:t.title,imgUrl:t.poster_path,rate:t.vote_average})),r.a.createElement(De,null,r.a.createElement(fe.a,{title:t.title},r.a.createElement(fe.a.Item,{label:"Headline"},t.tagline),r.a.createElement(fe.a.Item,{label:r.a.createElement("spn",null,r.a.createElement(h.a,{type:"clock-circle"})," \xa0 Length")},r.a.createElement("span",{className:"submenu-title-wrapper"},function(e){if(e>=1440||e<0)throw new RangeError("Valid input should be greater than or equal to 0 and less than 1440.");var t=e/60|0,n=e%60|0;return ve.a.utc().hours(t).minutes(n).format("hh:mm")}(t.runtime))),r.a.createElement(fe.a.Item,{label:"Production country"},function(e){return e.production_countries&&e.production_countries.length>0?e.production_countries[0].name:null}(t)),r.a.createElement(fe.a.Item,{label:"Release Date"},ve()(t.release_date).format("MMMM Do YYYY"))),r.a.createElement(fe.a,{title:"Overview"},r.a.createElement(fe.a.Item,{label:""},t.overview)),r.a.createElement(fe.a,{title:"Cast"},r.a.createElement(fe.a.Item,{label:""},r.a.createElement(Te,{actors:n})))))};function Ge(){var e=Object(p.a)(["\n    height:40vh;\n"]);return Ge=function(){return e},e}var Ue=Object(f.a)(je)(Ge()),Ce=function(e){var t=e.imgUrl,n=e.name;return r.a.createElement(Me,null,r.a.createElement(ke,{className:"elevate-3"},r.a.createElement(_e,{src:E(t)}),r.a.createElement(Ae,null,r.a.createElement("p",null,n)),r.a.createElement(Ie,null)))},Be=function(e){var t=e.data;return r.a.createElement(Ue,{className:"elevate-1"},r.a.createElement(Se,null,r.a.createElement(Ce,{name:t.name,imgUrl:t.profile_path})),r.a.createElement(De,null,r.a.createElement(fe.a,{title:t.name},r.a.createElement(fe.a.Item,{label:r.a.createElement("spn",null,r.a.createElement(h.a,{type:"calendar"})," \xa0 Birthday")},r.a.createElement("span",{className:"submenu-title-wrapper"},t.birthday)),r.a.createElement(fe.a.Item,{label:"From"},t.place_of_birth)),r.a.createElement(fe.a,{title:"About"},r.a.createElement(fe.a.Item,{label:""},t.biography))))},Ve=n(107);function Re(){var e=Object(p.a)(["\n    width: 100%;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    overflow-x:auto;\n"]);return Re=function(){return e},e}function Le(){var e=Object(p.a)(["\noverflow:hidden;\n"]);return Le=function(){return e},e}var ze=f.a.div(Le()),qe=f.a.div(Re());function He(){return new URLSearchParams(Object(l.g)().search)}var Ye=Object(d.b)((function(e){return{movieDetails:e.movieDetails,similarMovies:e.similarMovies,movieActors:e.movieActors}}),{fetchMovieDetails:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/movie/".concat(e),{params:{api_key:"b52327a9c201390c336b46ebee1c395b"}});case 2:a=t.sent,n({type:ae,payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchTvDetails:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/tv/".concat(e),{params:{api_key:"b52327a9c201390c336b46ebee1c395b"}});case 2:a=t.sent,n({type:ae,payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchSimilarMovies:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/movie/".concat(e,"/similar"),{params:{api_key:"b52327a9c201390c336b46ebee1c395b"}});case 2:a=t.sent,n({type:re,payload:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchMovieActors:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/movie/".concat(e,"/credits"),{params:{api_key:"b52327a9c201390c336b46ebee1c395b"}});case 2:a=t.sent,n({type:oe,payload:a.data.cast});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(l.h)().id,n=Object(l.g)(),o=He().get("isMovies"),c=He().get("title"),i=e.fetchMovieDetails,u=e.fetchTvDetails,s=e.fetchMovieActors,p=e.fetchSimilarMovies,f=e.movieDetails,d=e.similarMovies,v=e.movieActors;return Object(a.useEffect)((function(){"true"==o?i(t):u(t),p(t),s(t)}),[n]),r.a.createElement(ze,null,r.a.createElement(m.a,{style:{border:"1px solid rgb(235, 237, 240)"},onBack:function(){return e.history.push("/")},title:"Details",subTitle:c}),r.a.createElement(qe,null,r.a.createElement(Pe,{data:f,movieActors:v}),r.a.createElement(F,{data:d,title:"Similar Movies"})))}));function Fe(){var e=Object(p.a)(["\n    width: 100%;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    overflow-x:auto;\n"]);return Fe=function(){return e},e}function We(){var e=Object(p.a)(["\noverflow:hidden;\n"]);return We=function(){return e},e}var Je=f.a.div(We()),Ke=f.a.div(Fe());var $e=Object(d.b)((function(e){return{actorDetails:e.actorDetails,actorAllMovies:e.actorAllMovies}}),{fetcActorDetails:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/person/".concat(e),{params:{api_key:"b52327a9c201390c336b46ebee1c395b"}});case 2:a=t.sent,n({type:ce,payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetcActorAllMovies:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/person/".concat(e,"/movie_credits"),{params:{api_key:"b52327a9c201390c336b46ebee1c395b"}});case 2:a=t.sent,n({type:ie,payload:a.data.cast});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=Object(l.h)().id,n=Object(l.g)(),o=new URLSearchParams(Object(l.g)().search).get("name"),c=e.actorAllMovies,i=e.actorDetails,u=e.fetcActorDetails,s=e.fetcActorAllMovies;return Object(a.useEffect)((function(){u(t),s(t)}),[n]),r.a.createElement(Je,null,r.a.createElement(m.a,{style:{border:"1px solid rgb(235, 237, 240)"},onBack:function(){return e.history.goBack()},title:"Actor",subTitle:o}),r.a.createElement(Ke,null,r.a.createElement(Be,{data:i}),r.a.createElement(F,{data:c,title:"Movies by ".concat(o)})))})),Qe=n(142),Xe=n(143),Ze=n(149),et=n(144),tt=n(151),nt=n(104),at=n(246),rt=n(148),ot=at.a.Option,ct=function(e,t){var n;return function(){var a=arguments,r=this;clearTimeout(n),n=setTimeout((function(){e.apply(r,a)}),t)}};function it(e){return r.a.createElement(ot,{key:e.id,text:e.title},r.a.createElement(i.b,{to:"/details/".concat(e.id,"?isMovies=",!0,"&title=").concat(e.title||"TV")},r.a.createElement("div",{className:"global-search-item"},r.a.createElement("span",{className:"global-search-item-desc"},e.title),r.a.createElement("span",{className:"global-search-item-count"}))))}var lt=Object(d.b)((function(e){return{searchedMovies:e.searchedMovies}}),{searchMovieByName:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/search/movie",{params:{api_key:"b52327a9c201390c336b46ebee1c395b",language:"en-US",query:e}});case 2:a=t.sent,n({type:Q,payload:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.searchedMovies,n=e.searchMovieByName;return r.a.createElement(at.a,{className:"global-search",size:"large",style:{width:"100%"},dataSource:t.map(it),onSelect:function(e){return{}},onSearch:ct((function(e){return n(e)}),300),placeholder:"input here",optionLabelProp:"text"},r.a.createElement(rt.a,{suffix:r.a.createElement(b.a,{className:"search-btn",style:{marginRight:-12},size:"large",type:"default"},r.a.createElement(h.a,{type:"search"}))}))}));function ut(){var e=Object(p.a)(["\n    width:480px;\n    margin-left:10%;\n"]);return ut=function(){return e},e}var st=nt.a.SubMenu,pt=Object(f.a)(nt.a.Item)(ut()),mt=function(e){function t(){var e,n;Object(Qe.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(Ze.a)(this,(e=Object(et.a)(t)).call.apply(e,[this].concat(r)))).state={current:"home"},n.handleClick=function(e){console.log("click ",e),n.setState({current:e.key})},n}return Object(tt.a)(t,e),Object(Xe.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchGenre()}},{key:"render",value:function(){this.props.menuGenre;return r.a.createElement(nt.a,{style:{overflow:"hidden"},onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},r.a.createElement(nt.a.Item,null),r.a.createElement(nt.a.Item,null),r.a.createElement(nt.a.Item,{key:"home"},r.a.createElement(i.b,{to:"/"},r.a.createElement(h.a,{type:"home"}),"Home")),r.a.createElement(st,{title:r.a.createElement("span",{className:"submenu-title-wrapper"},r.a.createElement(h.a,{type:"block"}),"Genre")},ft(this.props)),r.a.createElement(nt.a.Item,{key:"nowPlaying"},r.a.createElement(i.b,{to:"/"},r.a.createElement(h.a,{type:"pic-center"}),"Now on cinema")),r.a.createElement(nt.a.Item,{key:"fire"},r.a.createElement(i.b,{to:"/"},r.a.createElement(h.a,{type:"fire"}),"Most recent")),r.a.createElement(pt,{disabled:!0},r.a.createElement(lt,null)))}}]),t}(r.a.Component),ft=function(e){var t=e.menuGenre;return r.a.createElement(nt.a.ItemGroup,{key:"Genre"},t.map((function(e,n){return n>=Math.floor(t.length/2)?null:r.a.createElement(nt.a.Item,{key:"Genre:".concat(e.id)},e.name)})),r.a.createElement(st,{key:"sub2",title:"More"},t.map((function(e,n){return n<Math.floor(t.length/2)?null:r.a.createElement(nt.a.Item,{key:"Genre:".concat(e.id)},e.name)}))))},dt=Object(d.b)((function(e){return{menuGenre:e.menuGenre}}),{fetchGenre:function(){return function(){var e=Object(K.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("/genre/movie/list",{params:{api_key:"b52327a9c201390c336b46ebee1c395b"}});case 2:n=e.sent,t({type:$,payload:n.data.genres});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(mt);function vt(){var e=Object(p.a)(["\n    margin-top:4em;\n"]);return vt=function(){return e},e}var bt=f.a.div(vt()),ht=Object(d.b)((function(e){return{popularMovies:e.popularMovies,nowPlayingMovies:e.nowPlayingMovies,upcommingMovies:e.upcommingMovies,popularTVs:e.popularTVs,trendingMovies:e.trendingMovies}}),{fetchPopularMovies:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/movie/popular",{params:{api_key:"b52327a9c201390c336b46ebee1c395b",page:e}});case 2:a=t.sent,n({type:Z,payload:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchNowPlaying:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/movie/now_playing",{params:{api_key:"b52327a9c201390c336b46ebee1c395b",page:e}});case 2:a=t.sent,n({type:X,payload:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchPopularTv:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/tv/popular",{params:{api_key:"b52327a9c201390c336b46ebee1c395b",page:e}});case 2:a=t.sent,n({type:te,payload:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchUpcomingMovies:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/movie/upcoming",{params:{api_key:"b52327a9c201390c336b46ebee1c395b",page:e}});case 2:a=t.sent,n({type:ee,payload:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fetchTrendingMovies:function(e){return function(){var t=Object(K.a)(J.a.mark((function t(n){var a;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.get("/trending/all/day",{params:{api_key:"b52327a9c201390c336b46ebee1c395b",page:e}});case 2:a=t.sent,n({type:ne,payload:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.popularMovies,n=e.nowPlayingMovies,o=e.upcommingMovies,c=e.popularTVs,i=e.trendingMovies,l=e.fetchPopularMovies,u=e.fetchNowPlaying,s=e.fetchPopularTv,p=e.fetchUpcomingMovies,m=e.fetchTrendingMovies;return Object(a.useEffect)((function(){l(1),u(1),p(1),s(1),m()}),[]),r.a.createElement("div",null,r.a.createElement(dt,null),r.a.createElement(bt,null),r.a.createElement(F,{data:t,title:"Most Popular",moreUrl:"/search/popular_movies",topGenre:["Action","Drama","Comdey","Horror"]}),r.a.createElement(F,{data:i,title:"Trending",moreUrl:"/search/trending_movies",topGenre:["Action","Drama","Comdey","Horror"]}),r.a.createElement(F,{data:n,title:"Now showing",moreUrl:"/search/now_playing",topGenre:["Action","Drama","Comdey","Horror"]}),r.a.createElement(F,{data:o,title:"Up Coming",moreUrl:"/search/upcoming",topGenre:["Action","Drama","Comdey","Horror"]}),r.a.createElement(F,{isMovie:!1,data:c,title:"Popular TV Shows",moreUrl:"/search/popular_tv",topGenre:["Action","Drama","Comdey"]}))})),gt=n(51),yt=Object(gt.c)({menuGenre:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return console.log(t.payload),t.type===$?Object(le.a)(t.payload):e},searchedMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===Q?se.a.uniqBy([].concat(Object(le.a)(t.payload),Object(le.a)(e)),"id"):e},popularMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===Z?se.a.uniqBy([].concat(Object(le.a)(t.payload),Object(le.a)(e)),"id"):e},nowPlayingMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===X?se.a.uniqBy([].concat(Object(le.a)(t.payload),Object(le.a)(e)),"id"):e},upcommingMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===ee?se.a.uniqBy([].concat(Object(le.a)(t.payload),Object(le.a)(e)),"id"):e},popularTVs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===te?se.a.uniqBy([].concat(Object(le.a)(t.payload),Object(le.a)(e)),"id"):e},movieDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===ae?Object(Ve.a)({},t.payload):e},similarMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===re?se.a.uniqBy([].concat(Object(le.a)(t.payload),Object(le.a)(e)),"id"):e},trendingMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===ne?se.a.uniqBy([].concat(Object(le.a)(t.payload),Object(le.a)(e)),"id"):e},movieActors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===oe?se.a.uniqBy([].concat(Object(le.a)(t.payload),Object(le.a)(e)),"id"):e},actorDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===ce?Object(Ve.a)({},t.payload):e},actorAllMovies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===ie?se.a.uniqBy([].concat(Object(le.a)(t.payload),Object(le.a)(e)),"id"):e}});var Et=function(){return r.a.createElement(i.a,{basename:"/movies-overflow"},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:ht}),r.a.createElement(l.b,{path:"/details/:id",component:Ye}),r.a.createElement(l.b,{path:"/actors/:id",component:$e}),r.a.createElement(l.b,{path:"/404",component:s}),r.a.createElement(l.a,{to:"/404"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ot=n(147);c.a.render(r.a.createElement(d.a,{store:Object(gt.d)(yt,Object(gt.a)(Ot.a))},r.a.createElement(Et,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[154,1,2]]]);
//# sourceMappingURL=main.1287ed49.chunk.js.map