(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{289:function(e,t,r){},292:function(e,t,r){"use strict";r(289)},293:function(e,t,r){"use strict";r.r(t);var n={name:"ServiceSection",props:{service:{type:Object,default:null}},data:function(){return{mobile:null}},mounted:function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?this.mobile=!0:this.mobile=!1}},c=(r(292),r(42)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"service",class:e.mobile?"mobile":"",style:"background-color:"+e.service.background_color},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-7 align-self-center"},[e.service.title?r("h3",{staticClass:"title"},[e._v("\n          "+e._s("ar"==e.$store.state.lang?e.service.title.ar:e.service.title.en)+"\n        ")]):e._e(),e._v(" "),r("div",{staticClass:"service-list",domProps:{innerHTML:e._s("ar"==e.$store.state.lang?e.service.description.ar:e.service.description.en)}})]),e._v(" "),r("div",{staticClass:"col-md-5 text-right align-self-center"},[r("img",{staticClass:"img-fluid right-img",attrs:{src:e.service.main_image,alt:e.service.image}})])])])])}),[],!1,null,"64ddda3e",null);t.default=component.exports}}]);