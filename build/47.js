webpackJsonp([47],{1925:function(n,l,e){"use strict";function t(n){return i._42(0,[(n()(),i._16(0,0,null,null,13,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,I.b,I.a)),i._15(1,4374528,null,0,y.a,[C.a,D.a,L.a,i.p,i.K,R.a,H.a,i.D,[2,O.a],[2,T.a]],null,null),(n()(),i._40(-1,1,["\n    "])),(n()(),i._16(3,0,null,1,9,"div",[["class","core-bglogo"]],null,null,null,null,null)),(n()(),i._40(-1,null,["\n        "])),(n()(),i._16(5,0,null,null,6,"div",[["class","core-logo"]],null,null,null,null,null)),(n()(),i._40(-1,null,["\n            "])),(n()(),i._16(7,0,null,null,0,"img",[["src","assets/img/splash_logo.png"]],null,null,null,null,null)),(n()(),i._40(-1,null,["\n            "])),(n()(),i._16(9,0,null,null,1,"ion-spinner",[],[[2,"spinner-paused",null]],null,null,w.b,w.a)),i._15(10,114688,null,0,x.a,[C.a,i.p,i.K],null,null),(n()(),i._40(-1,null,["\n        "])),(n()(),i._40(-1,null,["\n    "])),(n()(),i._40(-1,1,["\n"])),(n()(),i._40(-1,null,["\n"]))],function(n,l){n(l,10,0)},function(n,l){n(l,0,0,i._29(l,1).statusbarPadding,i._29(l,1)._hasRefresher);n(l,9,0,i._29(l,10)._paused)})}Object.defineProperty(l,"__esModule",{value:!0});var i=e(1),a=(e(0),e(9),e(692)),u=e(11),o=e(154),r=e(2),s=e(39),_=e(136),d=function(){function n(n,l,e,t,i,a){this.navCtrl=n,this.appProvider=l,this.initDelegate=e,this.sitesProvider=t,this.loginHelper=i,this.splashScreen=a}return n.prototype.ionViewDidLoad=function(){var n=this;this.initDelegate.ready().then(function(){var l=n.appProvider.getRedirect();return l.siteId&&l.page&&(n.appProvider.storeRedirect("","",""),Date.now()-l.timemodified<2e4)?l.siteId!=s.a.NO_SITE_ID?n.sitesProvider.loadSite(l.siteId).then(function(){if(!n.loginHelper.isSiteLoggedOut(l.page,l.params))return n.navCtrl.setRoot(l.page,l.params,{animate:!1})}).catch(function(){return n.loadPage()}):n.navCtrl.setRoot(l.page,l.params,{animate:!1}):n.loadPage()}).then(function(){setTimeout(function(){n.splashScreen.hide()},100)})},n.prototype.loadPage=function(){var n=this;return this.sitesProvider.isLoggedIn()?this.loginHelper.isSiteLoggedOut()?this.sitesProvider.logout().then(function(){return n.loadPage()}):this.loginHelper.goToSiteInitialPage():this.sitesProvider.hasSites().then(function(l){return l?n.navCtrl.setRoot("CoreLoginSitesPage"):n.loginHelper.goToAddSite(!0)})},n}(),g=function(){return function(){}}(),c=e(1344),p=e(1345),h=e(1346),f=e(1347),v=e(1348),P=e(1349),b=e(1350),m=e(1351),S=e(1352),I=e(184),y=e(24),C=e(7),D=e(15),L=e(31),R=e(33),H=e(109),O=e(36),T=e(22),w=e(114),x=e(95),K=i._14({encapsulation:2,styles:[],data:{}}),M=i._12("page-core-login-init",d,function(n){return i._42(0,[(n()(),i._16(0,0,null,null,1,"page-core-login-init",[],null,null,null,t,K)),i._15(1,49152,null,0,d,[T.a,u.a,o.a,r.a,_.a,a.a],null,null)],null,null)},{},{},[]),N=e(8),j=e(23),k=e(661),A=e(248);e.d(l,"CoreLoginInitPageModuleNgFactory",function(){return B});var B=i._13(g,[],function(n){return i._25([i._26(512,i.n,i._6,[[8,[c.a,p.a,h.a,f.a,v.a,P.a,b.a,m.a,S.a,M]],[3,i.n],i.B]),i._26(4608,N.m,N.l,[i.x,[2,N.v]]),i._26(4608,j.x,j.x,[]),i._26(4608,j.d,j.d,[]),i._26(512,N.b,N.b,[]),i._26(512,j.v,j.v,[]),i._26(512,j.i,j.i,[]),i._26(512,j.s,j.s,[]),i._26(512,k.a,k.a,[]),i._26(512,k.b,k.b,[]),i._26(512,g,g,[]),i._26(256,A.a,d,[])])})}});