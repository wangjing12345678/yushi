(function(t){function e(e){for(var a,c,r=e[0],o=e[1],l=e[2],u=0,m=[];u<r.length;u++)c=r[u],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&m.push(n[c][0]),n[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var o=i[r];0!==n[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=i[0]))}return t}var a={},n={app:0},s=[];function c(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=a,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(i,a,function(e){return t[e]}.bind(null,a));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"097e":function(t,e){(function(t,e){var i=t.documentElement,a="orientationchange"in window?"orientationchange":"resize",n=function(){var t=i.clientWidth;t&&(i.style.fontSize=t>=750?"100px":t/750*100+"px")};t.addEventListener&&(e.addEventListener(a,n,!1),t.addEventListener("DOMContentLoaded",n,!1))})(document,window)},"0c39":function(t,e,i){"use strict";i("c2ea")},1489:function(t,e,i){},2310:function(t,e,i){"use strict";i("398f")},"2c18":function(t,e,i){t.exports=i.p+"static/img/home_17.35ec524c.jpg"},"398f":function(t,e,i){},"39bb":function(t,e,i){},"3d22":function(t,e,i){"use strict";i("a591")},"4a49":function(t,e,i){t.exports=i.p+"static/img/three.6083468d.jpg"},"53d0":function(t,e,i){"use strict";i("1489")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("a026"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("pageWrap")],1)},s=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("audio",{ref:"audio",attrs:{src:"https://res.qiaomukeji.com/h5pro/202110/ljbgm/bgm_21.mp3",id:"audio",preload:"auto",autoplay:"autoplay"}}),i("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOption},on:{slideChangeTransitionStart:t.slideChangeTransitionStart,slideChange:t.slideChange}},[i("swiper-slide",{staticClass:"swiper-no-swiping"},[i("div",{staticClass:"img-wrap loadingPage"},[i("div",{staticClass:"calendarOut"},[i("div",{staticClass:"percent"},[t._v(t._s(t.percent+"%"))]),i("div",{staticClass:"calendar"},[i("div",{staticClass:"calendarItem"},[i("div",{staticClass:"page-top"},[t._v("2011 1")]),i("div",{staticClass:"date"},[t._v("99")])]),i("div",{class:t.imgEnd3?"calendarItem animate__animated animate__rotateOutDownLeft ":"calendarItem"},[i("div",{staticClass:"page-top"},[t._v("2011 1")]),i("div",{staticClass:"date"},[t._v("29")])]),i("div",{class:t.imgEnd2?"calendarItem animate__animated animate__rotateOutDownLeft ":"calendarItem"},[i("div",{staticClass:"page-top"},[t._v("2011 1")]),i("div",{staticClass:"date"},[t._v("28")])]),i("div",{class:t.imgEnd1?"calendarItem animate__animated animate__rotateOutDownLeft ":"calendarItem"},[i("div",{staticClass:"page-top"},[t._v("2011 1")]),i("div",{staticClass:"date"},[t._v("30")])])])]),i("div",{staticClass:"nextTo",class:"0"==t.percent?"animate__animated animate__fadeInUp":""},[i("div",{staticClass:"nextWord"},[i("div",{},[t._v("点击右侧")]),i("div",{},[t._v("观看宇视回忆故事")]),i("div",{},[t._v("生成专属海报")])]),i("div",{staticClass:"iconAll",on:{click:t.clickToNnext}},[i("van-icon",{staticClass:"arrow-down",attrs:{name:"arrow-down"}}),i("van-icon",{staticClass:"arrow-down",attrs:{name:"arrow-down"}})],1)])])]),t._l(t.swiperImg,(function(e,a){return i("swiper-slide",{key:a,staticClass:"swiper-no-swiping"},[i("div",{class:t.activeIndex==a+1?"img-wrap animate__animated animate__pulse":"img-wrap"},[i("img",{staticClass:"back",attrs:{src:e,alt:""}})])])})),i("swiper-slide",[i("div",{staticClass:"uploadPage"},[i("getPoster",{ref:"getPoster",on:{changeDate:t.changeDate,startPoster:t.startPoster,showCutDialog:t.showCutDialog}})],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:11!=t.activeIndex&&0!=t.activeIndex,expression:"activeIndex != 11&&activeIndex !=0"}],staticClass:"year-scroll"},[i("yearsScroll",{ref:"yearsScroll",on:{changePage:t.changePage}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:11!=t.activeIndex&&0!=t.activeIndex,expression:"activeIndex != 11&&activeIndex !=0"}],staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}),i("div",{directives:[{name:"show",rawName:"v-show",value:11!=t.activeIndex&&0!=t.activeIndex,expression:"activeIndex != 11&&activeIndex !=0"}],staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"})],2),i("van-calendar",{attrs:{"min-date":new Date("2000-10-10"),color:"#408DCC"},on:{confirm:t.onConfirm},model:{value:t.pickerVisible,callback:function(e){t.pickerVisible=e},expression:"pickerVisible"}}),i("div",{staticClass:"postResult"},[i("poster",{ref:"posterMain",on:{exportImg:t.exportImg}})],1),t.showPoster?i("div",{staticClass:"poster-wrap"},[t.showPoster?i("postResult",{ref:"postResult"}):t._e()],1):t._e(),t.showCut?i("div",[i("van-overlay",{attrs:{show:t.showCut}},[i("cutImg",{attrs:{imgSrc:t.imgSrc},on:{closePage:t.closePage,cancleCut:t.cancleCut}})],1)],1):t._e(),t.itemSrc?i("audio",{ref:"audioItem",attrs:{src:t.itemSrc,id:"audioItem"}}):t._e()],1)},r=[],o=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.imgObj.imgUrl?i("div",{staticClass:"result"},[i("img",{attrs:{src:t.imgObj.imgUrl,alt:""}}),i("div",{staticClass:"get-btn"},[t._v("长按保存海报转发到朋友圈")])]):t._e()}),l=[],d={name:"postResult",data:function(){return{imgObj:{imgUrl:""}}}},u=d,m=(i("d83a"),i("2877")),p=Object(m["a"])(u,o,l,!1,null,"f07f790a",null),f=p.exports,g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"preview-image-warp"},[i("img",{ref:"previewImage",staticClass:"preview-image",attrs:{src:t.previewImage,alt:"",srcset:""}}),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("van-button",{on:{click:t.cancleCut}},[t._v("取消")]),i("van-button",{on:{click:t.onUpdataPhoto}},[t._v("确定")])],1)])])},v=[],h=(i("ac1f"),i("5319"),i("6107"),i("bab4")),w=i.n(h),b={name:"cutImg",props:["imgSrc"],data:function(){return{dialogVisible:!1,previewImage:this.imgSrc,cropper:null}},mounted:function(){this.onDialogOpend()},methods:{onDialogOpend:function(){if(this.cropper)this.cropper.replace(this.previewImage);else{var t=this.$refs.previewImage;this.cropper=new w.a(t,{aspectRatio:4/3,viewMode:1,autoCropArea:1})}},onUpdataPhoto:function(){this.$emit("closePage",this.cropper.getCroppedCanvas().toDataURL("image/jpeg"))},rotateImg:function(){this.cropper.rotate(45)},cancleCut:function(){this.$emit("cancleCut")}}},C=b,x=(i("3d22"),Object(m["a"])(C,g,v,!1,null,"209c9cf0",null)),_=x.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-year"},[i("div",{staticClass:"ka"}),i("div",{staticClass:"nav"},[i("div",{staticClass:"nav-title box-start",style:{top:t.styleTop+"px"}},t._l(t.year,(function(e,a){return i("div",{key:a,staticClass:"nav-item",on:{click:function(e){return t.action(a)}}},[i("span",{staticClass:"item-word"},[t._v(t._s(e))])])})),0)])])},I=[],S={name:"years",components:{},data:function(){return{styleTop:"",year:["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]}},methods:{action:function(t){this.styleTop=-98*t+98,this.$emit("changePage",t)}}},j=S,k=(i("f729"),Object(m["a"])(j,y,I,!1,null,"78c89ffc",null)),O=k.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"poster-in"},[i("div",{ref:"imgContainer",attrs:{id:"imgContainer"}},[i("div",{staticClass:"inner-content"},[i("div",{staticClass:"inner-img"},[i("img",{attrs:{src:t.imgObj.imgSrc,alt:""}})]),i("div",{staticClass:"inner-word"},[i("div",[i("div",[t._v('"谢谢十年有你')]),i("div",{staticStyle:{"margin-left":"0.1rem"}},[t._v('谢谢所有的共同度过和共同成长"')]),i("div",{staticClass:"nameBox"},[t._v(t._s(t.imgObj.name)+"：")]),i("div",[t._v("与宇视相识"+t._s(t.imgObj.days)+"天")]),i("div",[t._v("宇视十周年，生日快乐")])])])])])])},P=[],D=(i("b0c0"),i("c0e9")),E=i.n(D),T={name:"poster",data:function(){return{imgObj:{imgSrc:"",days:"",name:""}}},methods:{getResult:function(t){var e=this;this.imgObj.imgSrc=t.imgSrc,this.imgObj.days=t.days,this.imgObj.name=t.name;var i=document.getElementById("imgContainer");this.$nextTick((function(){E()(e.$refs.imgContainer,{taintTest:!1,allowTaint:!1,scale:window.devicePixelRatio,width:i.offsetWidth,height:i.offsetHeight,useCORS:!0}).then((function(t){var i=t.toDataURL("image/jpeg",1);e.$emit("exportImg",i)}))}))}}},R=T,B=(i("5f37"),Object(m["a"])(R,$,P,!1,null,"6063d5a9",null)),L=B.exports,U=i("7212"),M=(i("dfa4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-page"},[a("div",{staticClass:"inputBox"},[a("van-field",{staticClass:"nameBox",attrs:{placeholder:"您的姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("van-field",{staticClass:"dateBox",attrs:{placeholder:"和宇视相识日期",readonly:""},on:{click:t.changDate},model:{value:t.missDate,callback:function(e){t.missDate=e},expression:"missDate"}})],1),a("div",{staticClass:"chooseImg"},[a("div",{staticClass:"selectImage"},[t.imgSrc?a("img",{attrs:{src:t.imgSrc,alt:""},on:{click:t.selectImage}}):a("img",{staticClass:"camera",attrs:{src:i("9149"),alt:""},on:{click:t.selectImage}})]),a("div",{staticClass:"imgWord"},[t._v("选择您的回忆照片")])]),a("div",{staticClass:"get-btn",on:{click:t.getCanvas}},[a("van-icon",{attrs:{name:"arrow"}}),t._v(" 下一步 ")],1)])}),V=[],W={name:"getPoster",components:{},data:function(){return{name:"",imgSrc:"",imgUrl:"",missDate:"",pickerVisible:!1,showCut:!1}},mounted:function(){},methods:{clearImg:function(){this.imgSrc=""},getCanvas:function(){if(this.name)if(this.missDate)if(this.imgSrc){var t=new Date(this.missDate),e=new Date,i={imgUrl:"",name:this.name,imgSrc:this.imgSrc,days:Math.floor((e-t)/864e5)};this.$emit("startPoster",i)}else this.$toast("请选择图片");else this.$toast("请选择相识日期");else this.$toast("请填写名字")},changDate:function(){this.$emit("changeDate")},selectImage:function(){var t=document.getElementById("fileInput");t&&(t.parentNode.removeChild(t),t=null),null==t&&(t=document.createElement("input"),t.id="fileInput",t.type="file",t.accept="image/*",t.style.height="0px",t.style.display="block",t.style.overflow="hidden",document.body.insertBefore(t,document.body.firstChild),t.addEventListener("change",this.selectFileImage,!1)),setTimeout((function(){t.click()}),100)},selectFileImage:function(t){var e=this,i=t.target.files[0];if(t&&window.FileReader){var a=new FileReader;a.readAsDataURL(i),a.onloadend=function(){e.imgSrc=this.result,e.$emit("showCutDialog",e.imgSrc),e.textHide=!1}}}}},A=W,N=(i("b2b5"),i("0c39"),i("2310"),Object(m["a"])(A,M,V,!1,null,"c658d79e",null)),F=N.exports,q={name:"page",components:{swiper:U["swiper"],swiperSlide:U["swiperSlide"],getPoster:F,poster:L,yearsScroll:O,cutImg:_,postResult:f},data:function(){return{swiperImg:[i("7ccc"),i("6b75"),i("7ccc"),i("6b75"),i("7ccc"),i("dadb"),i("6b75"),i("4a49"),i("fe21"),i("6b75")],ll:i("2c18"),itemSrc:"",imgSrc:"",showCut:!1,showPoster:!1,tempObj:"",activeIndex:"",pickerVisible:!1,swiperOption:{direction:"vertical",speed:300,effect:"fade",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},percent:"",t:null,imgEnd1:!1,imgEnd2:!1,imgEnd3:!1,effect:"fade"}},mounted:function(){var t=this;this.$nextTick((function(){t.audioAutoPlay("audio");var e=10;t.percent=10*e,t.t=setInterval((function(){e--,t.percent=10*e,9==e&&(t.imgEnd1=!0),5==e&&(t.imgEnd2=!0),2==e&&(t.imgEnd3=!0),0==e&&(clearInterval(t.t),t.t=null)}),40*e)}))},methods:{closePage:function(t){t.indexOf("data:image/jpeg;base64,")>-1?(this.showCut=!1,this.imgSrc=t,this.$refs.getPoster.imgSrc=t):(this.$toast("上传不符合规定"),this.cancleCut())},cancleCut:function(){this.showCut=!1,this.imgSrc="",this.$refs.getPoster.imgSrc=""},showCutDialog:function(t){this.showCut=!0,this.imgSrc=t},clickToNnext:function(){"0"==this.percent&&(this.activeIndex=1,this.$refs.mySwiper.swiper.slideTo(1,500,!1))},slideChangeTransitionStart:function(){this.activeIndex=this.$refs.mySwiper.swiper.activeIndex},slideChange:function(){var t=this;this.activeIndex=this.$refs.mySwiper.swiper.activeIndex,this.$nextTick((function(){t.$refs.yearsScroll.action(t.activeIndex)})),1==this.activeIndex?(this.itemSrc="https://res.qiaomukeji.com/h5pro/202110/lj1/m1.mp3?v=24",this.$nextTick((function(){var t=document.getElementById("audioItem");t.play()}))):2==this.activeIndex?(this.itemSrc="https://res.qiaomukeji.com/h5pro/202110/ljabm/p2.mp3?v=24",this.$nextTick((function(){var t=document.getElementById("audioItem");t.play()}))):3==this.activeIndex?(this.itemSrc="https://res.qiaomukeji.com/h5pro/202110/ljabm/p2.mp3?v=24",this.$nextTick((function(){var t=document.getElementById("audioItem");t.play()}))):this.itemSrc=""},clickbtn:function(){this.$refs.audio.play()},audioAutoPlay:function(t){var e=document.getElementById(t);document.addEventListener("WeixinJSBridgeReady",(function(){e.play()}),!1),document.addEventListener("YixinJSBridgeReady",(function(){e.play()}),!1)},changeDate:function(){this.pickerVisible=!0},formatDate:function(t){return"".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate())},onConfirm:function(t){this.pickerVisible=!1,t.getTime()>(new Date).getTime()?this.$toast("您选择的日期不符合规定"):this.$refs.getPoster.missDate=this.formatDate(t)},startPoster:function(t){var e=this;this.tempObj=t,console.log(t),this.showPoster=!0,this.$nextTick((function(){e.$refs.posterMain.getResult(t)}))},exportImg:function(t){this.$refs.postResult.imgObj.imgUrl=t},changePage:function(t){this.activeIndex=t,this.$refs.mySwiper.swiper.slideTo(t,50,!1)}}},J=q,z=(i("53d0"),Object(m["a"])(J,c,r,!1,null,"05932e4c",null)),H=z.exports,Y={name:"App",components:{pageWrap:H}},G=Y,K=(i("034f"),Object(m["a"])(G,n,s,!1,null,null,null)),Q=K.exports,X=(i("097e"),i("77ed")),Z=i.n(X),tt=i("b650"),et=(i("157a"),i("473d")),it=i("ee83"),at=i("6e47"),nt=i("565f"),st=i("ad06"),ct=i("d399");a["a"].use(Z.a),a["a"].use(tt["a"]),a["a"].use(et["a"]),a["a"].use(it["a"]),a["a"].use(at["a"]),a["a"].use(nt["a"]),a["a"].use(st["a"]),a["a"].use(ct["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Q)}}).$mount("#app")},"5f37":function(t,e,i){"use strict";i("9aa5")},"6b75":function(t,e,i){t.exports=i.p+"static/img/nine.8f724861.jpg"},"6f54":function(t,e,i){},"7ccc":function(t,e,i){t.exports=i.p+"static/img/five.aacdcbf0.jpg"},"85ec":function(t,e,i){},9149:function(t,e,i){t.exports=i.p+"static/img/camera.1eed8b19.png"},9931:function(t,e,i){},"9aa5":function(t,e,i){},a591:function(t,e,i){},b2b5:function(t,e,i){"use strict";i("39bb")},c2ea:function(t,e,i){},d83a:function(t,e,i){"use strict";i("6f54")},dadb:function(t,e,i){t.exports=i.p+"static/img/four.dc042e85.jpg"},f729:function(t,e,i){"use strict";i("9931")},fe21:function(t,e,i){t.exports=i.p+"static/img/two.74c9a9d8.jpg"}});
//# sourceMappingURL=app.2431b1c7.js.map