(function(t){function e(e){for(var a,r,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);m&&m(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,c=1;c<i.length;c++){var o=i[c];0!==s[o]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},n=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var m=o;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"097e":function(t,e){(function(t,e){var i=t.documentElement,a="orientationchange"in window?"orientationchange":"resize",s=function(){var t=i.clientWidth;t&&(i.style.fontSize=t>=750?"100px":t/750*100+"px")};t.addEventListener&&(e.addEventListener(a,s,!1),t.addEventListener("DOMContentLoaded",s,!1))})(document,window)},"0c39":function(t,e,i){"use strict";i("c2ea")},"2c0a":function(t,e,i){"use strict";i("fce7")},"2c18":function(t,e,i){t.exports=i.p+"static/img/home_17.35ec524c.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("a026"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("pageWrap")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("audio",{ref:"audio",attrs:{src:"https://res.qiaomukeji.com/h5pro/202110/ljbgm/bgm_21.mp3",id:"audio",preload:"auto",autoplay:"autoplay"}}),a("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOption},on:{slideChangeTransitionStart:t.slideChangeTransitionStart,slideChange:t.slideChange}},[a("swiper-slide",{staticClass:"swiper-no-swiping"},[a("div",{class:0==t.activeIndex?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("2c18"),alt:""}})])]),a("swiper-slide",[a("div",{class:1==t.activeIndex?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("dcc1"),alt:""}})])]),a("swiper-slide",[a("div",{class:2==t.activeIndex?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("8bb9"),alt:""}})])]),a("swiper-slide",[a("div",{class:2==t.activeIndex?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("8bb9"),alt:""}})])]),a("swiper-slide",[a("div",{class:1==t.activeIndex?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("dcc1"),alt:""}})])]),a("swiper-slide",[a("div",{class:2==t.activeIndex?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("8bb9"),alt:""}})])]),a("swiper-slide",[a("div",{class:1==t.activeIndex?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("dcc1"),alt:""}})])]),a("swiper-slide",[a("div",{class:2==t.activeIndex?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("8bb9"),alt:""}})])]),a("swiper-slide",[a("div",{class:1==t.activeIndex?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("dcc1"),alt:""}})])]),a("swiper-slide",[a("div",{class:2==t.activeIndex?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("8bb9"),alt:""}})])]),a("swiper-slide",[a("div",{class:1==t.activeIndex?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("dcc1"),alt:""}})])]),a("swiper-slide",[a("div",{staticClass:"img-wrap",staticStyle:{background:"white"}}),a("div",{staticClass:"uploadPage"},[a("getPoster",{ref:"getPoster",on:{changeDate:t.changeDate,startPoster:t.startPoster,showCutDialog:t.showCutDialog}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:11!=t.activeIndex,expression:"activeIndex != 11"}],staticClass:"year-scroll"},[a("yearsScroll",{ref:"yearsScroll",on:{changePage:t.changePage}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:11!=t.activeIndex,expression:"activeIndex != 11"}],staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{directives:[{name:"show",rawName:"v-show",value:11!=t.activeIndex,expression:"activeIndex != 11"}],staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"})],1),a("van-calendar",{attrs:{"min-date":new Date("2011-10-10")},on:{confirm:t.onConfirm},model:{value:t.pickerVisible,callback:function(e){t.pickerVisible=e},expression:"pickerVisible"}}),t.showPoster?a("div",{staticClass:"poster-wrap"},[a("van-overlay",{attrs:{show:t.showPoster}},[a("van-icon",{staticClass:"closeWrap",attrs:{name:"close"},on:{click:function(e){t.showPoster=!1}}}),a("poster",{ref:"posterMain",attrs:{tempObj:t.tempObj}})],1)],1):t._e(),t.showCut?a("div",[a("van-overlay",{attrs:{show:t.showCut}},[a("cutImg",{attrs:{imgSrc:t.imgSrc},on:{closePage:t.closePage,cancleCut:t.cancleCut}})],1)],1):t._e(),t.itemSrc?a("audio",{ref:"audioItem",attrs:{src:t.itemSrc,id:"audioItem"}}):t._e()],1)},c=[],o=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"preview-image-warp"},[i("img",{ref:"previewImage",staticClass:"preview-image",attrs:{src:t.previewImage,alt:"",srcset:""}}),i("span",{staticClass:"dialog-footer",staticStyle:{"margin-left":"100px"},attrs:{slot:"footer"},slot:"footer"},[i("van-button",{on:{click:t.cancleCut}},[t._v("取消")]),i("van-button",{on:{click:t.rotateImg}},[t._v("旋转")]),i("van-button",{on:{click:t.onUpdataPhoto}},[t._v("确定")])],1)])])}),l=[],m=(i("ac1f"),i("5319"),i("6107"),i("bab4")),u=i.n(m),d={name:"cutImg",props:["imgSrc"],data:function(){return{dialogVisible:!1,previewImage:this.imgSrc,cropper:null}},mounted:function(){this.onDialogOpend()},methods:{onDialogOpend:function(){if(this.cropper)this.cropper.replace(this.previewImage);else{var t=this.$refs.previewImage;this.cropper=new u.a(t,{aspectRatio:1,viewMode:1,autoCropArea:1})}},onUpdataPhoto:function(){this.$emit("closePage",this.cropper.getCroppedCanvas().toDataURL("image/jpeg"))},rotateImg:function(){this.cropper.rotate(45)},cancleCut:function(){this.$emit("cancleCut")}}},p=d,g=(i("fc19"),i("2877")),f=Object(g["a"])(p,o,l,!1,null,"3f4d1dfb",null),v=f.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-year"},[i("div",{staticClass:"ka"}),i("div",{staticClass:"nav"},[i("div",{staticClass:"nav-title box-start",style:{top:t.styleTop+"px"}},t._l(t.year,(function(e,a){return i("div",{key:a,staticClass:"nav-item",on:{click:function(e){return t.action(a)}}},[i("span",{staticClass:"item-word"},[t._v(t._s(e))])])})),0)])])},w=[],b={name:"years",components:{},data:function(){return{styleTop:"",year:["2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]}},methods:{action:function(t){this.styleTop=-98*t+98,this.$emit("changePage",t)}}},_=b,C=(i("9e83"),Object(g["a"])(_,h,w,!1,null,"3a18414f",null)),x=C.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"poster-in"},[a("div",[a("div",{ref:"imgContainer",attrs:{id:"imgContainer"}},[a("img",{staticClass:"backImg",attrs:{src:i("8bb9"),alt:""}}),a("div",{staticClass:"inner-content"},[a("div",{staticClass:"imgContainer-title"},[t._v("宇视十周年生日快乐")]),a("div",{staticClass:"imgContainer-title"},[t._v("十年有你，少年依旧")]),a("img",{staticClass:"imgContainer-img",attrs:{src:t.imgObj.imgSrc,alt:""}}),a("div",{staticClass:"miss-word"},[a("div",[t._v("认识宇视 "+t._s(t.imgObj.days)+"天")]),a("div",[t._v("宇视十周年 生日快乐")]),a("div",{staticClass:"miss-name"},[t._v(t._s(t.imgObj.name))])])])])]),t.imgObj.imgUrl?a("div",{staticClass:"result"},[a("img",{attrs:{src:t.imgObj.imgUrl,alt:""}}),a("div",{staticClass:"get-btn"},[t._v("长按保存")])]):t._e()])},I=[],S=i("c0e9"),k=i.n(S),j={name:"poster",props:["tempObj"],data:function(){return{imgObj:this.tempObj}},methods:{getResult:function(){var t=this;k()(this.$refs.imgContainer,{taintTest:!1,allowTaint:!1,scale:window.devicePixelRatio,useCORS:!0}).then((function(e){console.log(e,"canvas");var i=e.toDataURL("image/png",1);t.imgObj.imgUrl=i}))}}},P=j,O=(i("7492"),Object(g["a"])(P,y,I,!1,null,"7a1a052e",null)),$=O.exports,D=i("7212"),E=(i("dfa4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-page"},[a("div",{attrs:{id:"handlePage"}},[a("div",{staticClass:"handlePage-title"},[t._v("宇视十周年生日快乐!")]),a("div",[a("van-field",{attrs:{label:"姓名",placeholder:"请输入姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("van-field",{attrs:{label:"相识日期",placeholder:"请选择相识日期",readonly:""},on:{click:t.changDate},model:{value:t.missDate,callback:function(e){t.missDate=e},expression:"missDate"}})],1),a("div",{staticClass:"chooseImg"},[t.imgSrc?a("van-icon",{staticClass:"closeWrap",attrs:{name:"close"},on:{click:t.clearImg}}):t._e(),t.imgSrc?a("img",{attrs:{src:t.imgSrc,alt:""}}):a("img",{attrs:{src:i("9149"),alt:""},on:{click:t.selectImage}})],1),a("div",{staticClass:"get-btn",on:{click:t.getCanvas}},[t._v("点击生成")])])])}),T=[],R=(i("b0c0"),{name:"getPoster",components:{},data:function(){return{name:"",imgSrc:"",imgUrl:"",missDate:"",pickerVisible:!1,showCut:!1}},mounted:function(){},methods:{clearImg:function(){this.imgSrc=""},getCanvas:function(){if(this.name)if(this.missDate)if(this.imgSrc){var t=new Date(this.missDate),e=new Date,i={imgUrl:"",name:this.name,imgSrc:this.imgSrc,days:Math.floor((e-t)/864e5)};this.$emit("startPoster",i)}else this.$toast("请选择图片");else this.$toast("请选择相识日期");else this.$toast("请填写名字")},changDate:function(){this.$emit("changeDate")},selectImage:function(){var t=document.getElementById("fileInput");t&&(t.parentNode.removeChild(t),t=null),null==t&&(t=document.createElement("input"),t.id="fileInput",t.type="file",t.accept="image/*",t.style.height="0px",t.style.display="block",t.style.overflow="hidden",document.body.insertBefore(t,document.body.firstChild),t.addEventListener("change",this.selectFileImage,!1)),setTimeout((function(){t.click()}),100)},selectFileImage:function(t){var e=this,i=t.target.files[0];if(t&&window.FileReader){var a=new FileReader;a.readAsDataURL(i),a.onloadend=function(){e.imgSrc=this.result,e.$emit("showCutDialog",e.imgSrc),e.textHide=!1}}}}}),L=R,M=(i("c57d"),i("0c39"),Object(g["a"])(L,E,T,!1,null,"cc145d50",null)),U=M.exports,B={name:"page",components:{swiper:D["swiper"],swiperSlide:D["swiperSlide"],getPoster:U,poster:$,yearsScroll:x,cutImg:v},data:function(){return{itemSrc:"",imgSrc:"",showCut:!1,showPoster:!1,tempObj:"",activeIndex:"",pickerVisible:!1,swiperOption:{direction:"vertical",speed:300,effect:"fade",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},mounted:function(){var t=this;this.$nextTick((function(){t.audioAutoPlay("audio")}))},methods:{closePage:function(t){t.indexOf("data:image/jpeg;base64,")>-1?(this.showCut=!1,this.imgSrc=t,this.$refs.getPoster.imgSrc=t):(this.$toast("上传不符合规定"),this.cancleCut())},cancleCut:function(){this.showCut=!1,this.imgSrc="",this.$refs.getPoster.imgSrc=""},showCutDialog:function(t){this.showCut=!0,this.imgSrc=t},slideChangeTransitionStart:function(){this.activeIndex=this.$refs.mySwiper.swiper.activeIndex},slideChange:function(){var t=this;this.activeIndex=this.$refs.mySwiper.swiper.activeIndex,this.$nextTick((function(){t.$refs.yearsScroll.action(t.activeIndex)})),1==this.activeIndex?(this.itemSrc="https://res.qiaomukeji.com/h5pro/202110/lj1/m1.mp3?v=24",this.$nextTick((function(){var t=document.getElementById("audioItem");t.play()}))):2==this.activeIndex?(this.itemSrc="https://res.qiaomukeji.com/h5pro/202110/ljabm/p2.mp3?v=24",this.$nextTick((function(){var t=document.getElementById("audioItem");t.play()}))):3==this.activeIndex?(this.itemSrc="https://res.qiaomukeji.com/h5pro/202110/ljabm/p2.mp3?v=24",this.$nextTick((function(){var t=document.getElementById("audioItem");t.play()}))):this.itemSrc=""},clickbtn:function(){this.$refs.audio.play()},audioAutoPlay:function(t){var e=document.getElementById(t);document.addEventListener("WeixinJSBridgeReady",(function(){e.play()}),!1),document.addEventListener("YixinJSBridgeReady",(function(){e.play()}),!1)},changeDate:function(){this.pickerVisible=!0},formatDate:function(t){return"".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate())},onConfirm:function(t){this.pickerVisible=!1,this.$refs.getPoster.missDate=this.formatDate(t)},startPoster:function(t){var e=this;this.tempObj=t,this.showPoster=!0,this.$nextTick((function(){e.$refs.posterMain.getResult()}))},changePage:function(t){this.activeIndex=t,this.$refs.mySwiper.swiper.slideTo(t,50,!1)}}},V=B,W=(i("2c0a"),Object(g["a"])(V,r,c,!1,null,"3c45fece",null)),A=W.exports,F={name:"App",components:{pageWrap:A}},q=F,J=(i("034f"),Object(g["a"])(q,s,n,!1,null,null,null)),N=J.exports,z=(i("097e"),i("77ed")),Y=i.n(z),H=i("b650"),G=(i("157a"),i("473d")),K=i("ee83"),Q=i("6e47"),X=i("565f"),Z=i("ad06"),tt=i("d399");a["a"].use(Y.a),a["a"].use(H["a"]),a["a"].use(G["a"]),a["a"].use(K["a"]),a["a"].use(Q["a"]),a["a"].use(X["a"]),a["a"].use(Z["a"]),a["a"].use(tt["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(N)}}).$mount("#app")},"6df8":function(t,e,i){},7492:function(t,e,i){"use strict";i("6df8")},"7cb4":function(t,e,i){},8e3:function(t,e,i){},"85ec":function(t,e,i){},"8bb9":function(t,e,i){t.exports=i.p+"static/img/home_21.2cf2f3b4.jpg"},9149:function(t,e,i){t.exports=i.p+"static/img/camera.d68486e0.png"},"9e83":function(t,e,i){"use strict";i("8000")},c2ea:function(t,e,i){},c57d:function(t,e,i){"use strict";i("7cb4")},c82a:function(t,e,i){},dcc1:function(t,e,i){t.exports=i.p+"static/img/home_19.680684d2.jpg"},fc19:function(t,e,i){"use strict";i("c82a")},fce7:function(t,e,i){}});
//# sourceMappingURL=app.349dd09e.js.map