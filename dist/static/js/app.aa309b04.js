(function(t){function e(e){for(var a,c,r=e[0],o=e[1],l=e[2],m=0,p=[];m<r.length;m++)c=r[m],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,r=1;r<i.length;r++){var o=i[r];0!==n[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=i[0]))}return t}var a={},n={app:0},s=[];function c(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=a,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(i,a,function(e){return t[e]}.bind(null,a));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=o;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"097e":function(t,e){(function(t,e){var i=t.documentElement,a="orientationchange"in window?"orientationchange":"resize",n=function(){var t=i.clientWidth;t&&(i.style.fontSize=t>=750?"100px":t/750*100+"px")};t.addEventListener&&(e.addEventListener(a,n,!1),t.addEventListener("DOMContentLoaded",n,!1))})(document,window)},"0c39":function(t,e,i){"use strict";i("c2ea")},"0e85":function(t,e,i){t.exports=i.p+"static/img/11.ab8e8720.jpg"},"1b5f":function(t,e,i){t.exports=i.p+"static/img/3.6083468d.jpg"},2310:function(t,e,i){"use strict";i("398f")},"27de":function(t,e,i){},2895:function(t,e,i){},"2c18":function(t,e,i){t.exports=i.p+"static/img/home_17.35ec524c.jpg"},"2e6a":function(t,e,i){t.exports=i.p+"static/img/w1.a71a2854.png"},"307d":function(t,e,i){"use strict";i("27de")},"398f":function(t,e,i){},"3d22":function(t,e,i){"use strict";i("a591")},"3d66":function(t,e,i){t.exports=i.p+"static/img/home_21.e3361f32.png"},"3e9c":function(t,e,i){t.exports=i.p+"static/img/6.74f6df04.jpg"},"40e8":function(t,e,i){},"40ed":function(t,e,i){},"426e":function(t,e,i){t.exports=i.p+"static/img/4.dc042e85.jpg"},"4fc6":function(t,e,i){t.exports=i.p+"static/img/w6.55992357.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("a026"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("pageWrap")],1)},s=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("audio",{ref:"audio",attrs:{src:"https://res.qiaomukeji.com/h5pro/202110/ljbgm/bgm_21.mp3",id:"audio",preload:"auto",autoplay:"autoplay"}}),a("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOption},on:{slideChangeTransitionStart:t.slideChangeTransitionStart,slideChange:t.slideChange}},[a("swiper-slide",{staticClass:"swiper-no-swiping"},[a("div",{staticClass:"img-wrap loadingPage"},[a("img",{staticClass:"logo",attrs:{src:i("a1d8"),alt:""}}),a("div",{staticClass:"calendarOut2"},[a("img",{attrs:{src:i("7989"),alt:""}}),a("div",{staticClass:"percent2"},[t._v(t._s(t.percent+"%"))])]),a("div",{staticClass:"nextTo",class:"0"==t.percent?"animate__animated animate__fadeInUp":""},[a("div",{staticClass:"nextWord"},[a("div",{},[t._v("点击右侧")]),a("div",{},[t._v("观看宇视回忆故事")]),a("div",{},[t._v("生成专属海报")])]),a("div",{staticClass:"iconAll",on:{click:t.clickToNnext}},[a("van-icon",{staticClass:"arrow-down",attrs:{name:"arrow-down"}}),a("van-icon",{staticClass:"arrow-down",attrs:{name:"arrow-down"}})],1)])])]),t._l(t.swiperImg,(function(e,n){return a("swiper-slide",{key:n,staticClass:"swiper-no-swiping"},[a("div",{class:t.activeIndex==n+1?"img-wrap animate__animated animate__pulse":"img-wrap"},[a("img",{staticClass:"back",attrs:{src:e,alt:""}})]),a("div",{staticClass:"wordPage"},[a("div",{staticClass:"swiper-word"},[a("div",{class:t.activeIndex==n+1?"wordWrap animate__animated animate__bounceInLeft":""},[a("img",{attrs:{src:i("fdf4"),alt:""}}),a("div",{staticClass:"contentSwiper"},[t._v(" "+t._s(t.imgContent)+" ")])])])])])})),a("swiper-slide",[a("div",{staticClass:"img-wrap"},[a("img",{staticClass:"back",attrs:{src:i("3d66"),alt:""}}),a("div",{staticClass:"birthday"},[a("div",{staticClass:"birthdayWrap"},[a("img",{class:13==t.activeIndex?"animate__animated animate__fadeInLeft":"",attrs:{src:i("2e6a"),alt:""}}),a("img",{class:13==t.activeIndex?"animate__animated animate__fadeInLeft":"",attrs:{src:i("8281"),alt:""}}),a("img",{class:13==t.activeIndex?"animate__animated animate__fadeInLeft":"",attrs:{src:i("74ae"),alt:""}}),a("img",{class:13==t.activeIndex?"animate__animated animate__fadeInLeft":"",attrs:{src:i("c452"),alt:""}}),a("img",{class:13==t.activeIndex?"animate__animated animate__fadeInLeft":"",attrs:{src:i("74dc"),alt:""}}),a("img",{class:13==t.activeIndex?"animate__animated animate__fadeInLeft":"",attrs:{src:i("4fc6"),alt:""}}),a("img",{class:13==t.activeIndex?"animate__animated animate__fadeInLeft":"",attrs:{src:i("c868"),alt:""}})]),a("div",{staticClass:"nextAll",on:{click:t.clickToNnext}},[a("van-icon",{staticClass:"arrow-down",attrs:{name:"arrow-down"}}),a("van-icon",{staticClass:"arrow-down",attrs:{name:"arrow-down"}})],1),a("div",{staticClass:"birth-logo"},[a("div",{staticClass:"line"}),a("img",{attrs:{src:i("a1d8"),alt:""}}),a("div",{staticClass:"line"})])])])]),a("swiper-slide",[a("div",{staticClass:"uploadPage"},[a("getPoster",{ref:"getPoster",on:{changeDate:t.changeDate,startPoster:t.startPoster,showCutDialog:t.showCutDialog}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:14!=t.activeIndex&&0!=t.activeIndex&&13!=t.activeIndex,expression:"activeIndex != 14&&activeIndex !=0&&activeIndex !=13"}],staticClass:"swiper-button-prev swiper-button-white",attrs:{slot:"button-prev"},slot:"button-prev"}),a("div",{directives:[{name:"show",rawName:"v-show",value:14!=t.activeIndex&&0!=t.activeIndex&&13!=t.activeIndex,expression:"activeIndex != 14&&activeIndex !=0&&activeIndex !=13"}],staticClass:"swiper-button-next swiper-button-white",attrs:{slot:"button-next"},slot:"button-next"})],2),a("van-calendar",{attrs:{"min-date":new Date("2000-10-10"),color:"#408DCC"},on:{confirm:t.onConfirm},model:{value:t.pickerVisible,callback:function(e){t.pickerVisible=e},expression:"pickerVisible"}}),a("div",{staticClass:"postResult"},[a("poster",{ref:"posterMain",on:{exportImg:t.exportImg}})],1),t.showPoster?a("div",{staticClass:"poster-wrap"},[t.showPoster?a("postResult",{ref:"postResult"}):t._e()],1):t._e(),t.showCut?a("div",[a("van-overlay",{attrs:{show:t.showCut}},[a("cutImg",{attrs:{imgSrc:t.imgSrc},on:{closePage:t.closePage,cancleCut:t.cancleCut}})],1)],1):t._e(),t.itemSrc?a("audio",{ref:"audioItem",attrs:{src:t.itemSrc,id:"audioItem"}}):t._e()],1)},r=[],o=(i("99af"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.imgObj.imgUrl?i("div",{staticClass:"result"},[i("img",{attrs:{src:t.imgObj.imgUrl,alt:""}}),i("div",{staticClass:"get-btn"},[t._v("长按保存海报转发到朋友圈")])]):t._e()}),l=[],d={name:"postResult",data:function(){return{imgObj:{imgUrl:""}}}},m=d,p=(i("abd7"),i("2877")),u=Object(p["a"])(m,o,l,!1,null,"5703f039",null),g=u.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"preview-image-warp"},[i("img",{ref:"previewImage",staticClass:"preview-image",attrs:{src:t.previewImage,alt:"",srcset:""}}),i("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[i("van-button",{on:{click:t.cancleCut}},[t._v("取消")]),i("van-button",{on:{click:t.onUpdataPhoto}},[t._v("确定")])],1)])])},v=[],h=(i("ac1f"),i("5319"),i("6107"),i("bab4")),w=i.n(h),b={name:"cutImg",props:["imgSrc"],data:function(){return{dialogVisible:!1,previewImage:this.imgSrc,cropper:null}},mounted:function(){this.onDialogOpend()},methods:{onDialogOpend:function(){if(this.cropper)this.cropper.replace(this.previewImage);else{var t=this.$refs.previewImage;this.cropper=new w.a(t,{aspectRatio:4/3,viewMode:1,autoCropArea:1})}},onUpdataPhoto:function(){this.$emit("closePage",this.cropper.getCroppedCanvas().toDataURL("image/jpeg"))},rotateImg:function(){this.cropper.rotate(45)},cancleCut:function(){this.$emit("cancleCut")}}},C=b,x=(i("3d22"),Object(p["a"])(C,f,v,!1,null,"209c9cf0",null)),_=x.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"poster-in"},[a("div",{ref:"imgContainer",attrs:{id:"imgContainer"}},[a("img",{staticClass:"logo",attrs:{src:i("a1d8"),alt:""}}),a("div",{staticClass:"bgImg"},[a("div",{staticClass:"inner-content"},[a("div",{staticClass:"inner-img"},[a("img",{attrs:{src:t.imgObj.imgSrc,alt:""}})]),a("div",{staticClass:"inner-word"},[a("div",[a("div",[t._v("十年有你，初心不变")]),a("div",[t._v("感谢所有的相遇、渡过与成长！")]),a("div",{staticClass:"nameBox"},[t._v(t._s(t.imgObj.name)+"：")]),a("div",[t._v("与宇视相识"+t._s(t.imgObj.days)+"天了")]),a("div",[t._v("十年磨一剑，再战仍少年")]),a("div",[t._v("携手共谱新篇章")])])])])])])])},y=[],S=(i("b0c0"),i("c0e9")),k=i.n(S),j={name:"poster",data:function(){return{imgObj:{imgSrc:"",days:"",name:""}}},methods:{getResult:function(t){var e=this;this.imgObj.imgSrc=t.imgSrc,this.imgObj.days=t.days,this.imgObj.name=t.name;var i=document.getElementById("imgContainer");this.$nextTick((function(){k()(e.$refs.imgContainer,{taintTest:!1,allowTaint:!1,scale:window.devicePixelRatio,width:i.offsetWidth,height:i.offsetHeight,useCORS:!0}).then((function(t){var i=t.toDataURL("image/jpeg",1);e.$emit("exportImg",i)}))}))}}},O=j,P=(i("b08d"),Object(p["a"])(O,I,y,!1,null,"74d4fff8",null)),D=P.exports,$=i("7212"),E=(i("dfa4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"upload-page"},[a("div",{staticClass:"inputBox"},[a("van-field",{staticClass:"nameBox",attrs:{placeholder:"您的姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("van-field",{staticClass:"dateBox",attrs:{placeholder:"和宇视相识日期",readonly:""},on:{click:t.changDate},model:{value:t.missDate,callback:function(e){t.missDate=e},expression:"missDate"}})],1),a("div",{staticClass:"chooseImg"},[a("div",{staticClass:"selectImage"},[t.imgSrc?a("img",{staticClass:"resultImg",attrs:{src:t.imgSrc,alt:""},on:{click:t.selectImage}}):a("img",{staticClass:"camera",attrs:{src:i("9149"),alt:""},on:{click:t.selectImage}})]),a("div",{staticClass:"imgWord"},[t._v("选择您的回忆照片")])]),a("div",{staticClass:"get-btn",on:{click:t.getCanvas}},[a("van-icon",{attrs:{name:"arrow"}}),t._v(" 下一步 ")],1)])}),T=[],L={name:"getPoster",components:{},data:function(){return{name:"",imgSrc:"",imgUrl:"",missDate:"",pickerVisible:!1,showCut:!1}},mounted:function(){},methods:{clearImg:function(){this.imgSrc=""},getCanvas:function(){if(this.name)if(this.missDate)if(this.imgSrc){var t=new Date(this.missDate),e=new Date,i={imgUrl:"",name:this.name,imgSrc:this.imgSrc,days:Math.floor((e-t)/864e5)};this.$emit("startPoster",i)}else this.$toast("请选择图片");else this.$toast("请选择相识日期");else this.$toast("请填写名字")},changDate:function(){this.$emit("changeDate")},selectImage:function(){var t=document.getElementById("fileInput");t&&(t.parentNode.removeChild(t),t=null),null==t&&(t=document.createElement("input"),t.id="fileInput",t.type="file",t.accept="image/*",t.style.height="0px",t.style.display="block",t.style.overflow="hidden",document.body.insertBefore(t,document.body.firstChild),t.addEventListener("change",this.selectFileImage,!1)),setTimeout((function(){t.click()}),100)},selectFileImage:function(t){var e=this,i=t.target.files[0];if(t&&window.FileReader){var a=new FileReader;a.readAsDataURL(i),a.onloadend=function(){e.imgSrc=this.result,e.$emit("showCutDialog",e.imgSrc),e.textHide=!1}}}}},R=L,M=(i("75f2"),i("0c39"),i("2310"),Object(p["a"])(R,E,T,!1,null,"29c67680",null)),U=M.exports,A={name:"page",components:{swiper:$["swiper"],swiperSlide:$["swiperSlide"],getPoster:U,poster:D,cutImg:_,postResult:g},data:function(){return{swiperImg:[i("8874"),i("b2ce"),i("1b5f"),i("426e"),i("aa53"),i("3e9c"),i("d25e"),i("7fc0"),i("cbce"),i("61ee"),i("0e85"),i("6d58")],ll:i("2c18"),itemSrc:"",imgSrc:"",showCut:!1,showPoster:!1,tempObj:"",activeIndex:0,pickerVisible:!1,swiperOption:{direction:"vertical",speed:300,effect:"fade",pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},percent:"",t:null,imgEnd1:!1,imgEnd2:!1,imgEnd3:!1,effect:"fade",imgContent:""}},mounted:function(){var t=this;this.$nextTick((function(){t.audioAutoPlay("audio");var e=10;t.percent=10*e,t.t=setInterval((function(){e--,t.percent=10*e,9==e&&(t.imgEnd1=!0),5==e&&(t.imgEnd2=!0),2==e&&(t.imgEnd3=!0),0==e&&(clearInterval(t.t),t.t=null)}),40*e)}))},methods:{closePage:function(t){t.indexOf("data:image/jpeg;base64,")>-1?(this.showCut=!1,this.imgSrc=t,this.$refs.getPoster.imgSrc=t):(this.$toast("上传不符合规定"),this.cancleCut())},cancleCut:function(){this.showCut=!1,this.imgSrc="",this.$refs.getPoster.imgSrc=""},showCutDialog:function(t){this.showCut=!0,this.imgSrc=t},clickToNnext:function(){console.log(this.activeIndex),this.activeIndex=this.activeIndex+1,this.$refs.mySwiper.swiper.slideTo(this.activeIndex,500,!1)},slideChangeTransitionStart:function(){this.activeIndex=this.$refs.mySwiper.swiper.activeIndex},slideChange:function(){switch(this.activeIndex=this.$refs.mySwiper.swiper.activeIndex,this.activeIndex){case 1:this.imgContent="2011年，一位瑞士客户找到宇视，非要购买一款已停产的编解码器。瑞士高速公路六年前购买过近40件该设备，部署在湿度较大的山区零故障，扩容时这样的品质让他念念不忘。";break;case 2:this.imgContent="2011年11月30日，宇视独立运营，563人启程。这支队伍积累深厚，大型方案能够管理一座城市，这是全球独一无二的能力。2007年，就实现1万路视频联网部署。客户回忆：“2009年起很多中国城市案件显著下降，命案趋零，视频大联网功不可没。";break;case 3:this.imgContent="球机是IPC中最复杂的机型，其中核心部件机芯由日系厂商垄断。与日商谈判艰难，依赖进口成本高，解决问题周期长，我们决心自研。2年磨砺，宇视机芯可靠、性能、成本全面超越日系。”\n\n研发同事：“初期做对焦测试，日系利落完成，代号“PUMA”的宇视样机用了十几秒……前后投入4000万元研发，在实践部署中不断调优";break;case 4:this.imgContent="当时行业陷入价格战，宇视提出了「精工之路，比肩德国制造」品牌理念，外观、质量、架构一流，但不做无谓过剩的功能，高品质的产品不是奢侈品，而是给客户最佳TCO。”\n\n“同年流程变革，在源自IBM的IPD-CMM流程精髓的基础上，流程再造，保持了原有的严格质控，又适应交付的小、快、灵。";break;case 5:this.imgContent="第三不是目标，而是只有不断追求规模，宇视才有高质量的生存、可靠的供应链安全保障。宇视2014年起稳居中国前三，此后在全球市场陆续超越美国、德国、日本、韩国企业，2018起位居全球第四。";break;case 6:this.imgContent="2016年，宇视发布「SMV机器视觉」战略，算法、架构、产品全面突破，陆续攻克2017年AI工程化、2018年AI场景化、2019年AI普惠化。宇视AIoT旗舰产品，全部采用中国山关湖泊命名，截至2021年共有“九山四关两湖";break;case 7:this.imgContent="宇视以智慧城市大脑+人脸识别技术亮相6分钟，10万人海中25分钟找回走失老人。《大国重器Ⅱ》剧组评价：“我们一共拍摄63家企业，在交流和拍摄中被这家公司的员工面貌和产品气质深深打动，由衷欣赏宇视；我们不是生在一个平安的地球，而是生在一个安全的国家。";break;case 8:this.imgContent="2018年8月，“英宇商标案”终审结果，宇视胜诉，驳回英特尔公司主张占用“inside”的诉讼请求。双方知识产权官司的焦点是，美国芯片“intel inside”和中国操作系统“imos inside”的商标纠纷。";break;case 9:this.imgContent="智能交通+智慧物联，稳稳向前，更好的支撑AI实战落地，有自己比肩时代的节奏。";break;case 10:this.imgContent="响应抗疫需求，宇视研发「热影」智能测温仪，28天定型量产，在桐乡基地创下7天15条新生产线的记录，价优量足供应世界需求，在全球80个国家和地区成为爆款，各国使领馆感谢信成为宇视办公室骄傲的陈设。";break;case 11:this.imgContent="全社会与新冠病毒做长期斗争，宇视「防疫兵器库」的四件兵器是：测-热影66一验通行、隔-智能门磁、判-VDS大数据一机索迹，管-DataU数据可视化一目了然";break;case 12:this.imgContent="研发试制最好的环境，5000人告别租房，1200人同时吃饭，400人阶梯教室一起开会，800个车位……无缝对接城市公园 成为规模的巨人，继续攀爬创新科技树，继续快速全球化。创业十周年，宇视创新之路";break}},clickbtn:function(){this.$refs.audio.play()},audioAutoPlay:function(t){var e=document.getElementById(t);document.addEventListener("WeixinJSBridgeReady",(function(){e.play()}),!1),document.addEventListener("YixinJSBridgeReady",(function(){e.play()}),!1)},changeDate:function(){this.pickerVisible=!0},formatDate:function(t){return"".concat(t.getFullYear(),"/").concat(t.getMonth()+1,"/").concat(t.getDate())},onConfirm:function(t){this.pickerVisible=!1,t.getTime()>(new Date).getTime()?this.$toast("您选择的日期不符合规定"):this.$refs.getPoster.missDate=this.formatDate(t)},startPoster:function(t){var e=this;this.tempObj=t,console.log(t),this.showPoster=!0,this.$nextTick((function(){e.$refs.posterMain.getResult(t)}))},exportImg:function(t){this.$refs.postResult.imgObj.imgUrl=t},changePage:function(t){this.activeIndex=t,this.$refs.mySwiper.swiper.slideTo(t,50,!1)}}},B=A,V=(i("307d"),Object(p["a"])(B,c,r,!1,null,"c7179cb0",null)),W=V.exports,N={name:"App",components:{pageWrap:W}},F=N,J=(i("034f"),Object(p["a"])(F,n,s,!1,null,null,null)),z=J.exports,H=(i("097e"),i("77ed")),Y=i.n(H),q=i("b650"),G=(i("157a"),i("473d")),K=i("ee83"),Q=i("6e47"),X=i("565f"),Z=i("ad06"),tt=i("d399");a["a"].use(Y.a),a["a"].use(q["a"]),a["a"].use(G["a"]),a["a"].use(K["a"]),a["a"].use(Q["a"]),a["a"].use(X["a"]),a["a"].use(Z["a"]),a["a"].use(tt["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(z)}}).$mount("#app")},"61ee":function(t,e,i){t.exports=i.p+"static/img/10.487ffee8.jpg"},"6d58":function(t,e,i){t.exports=i.p+"static/img/12.57de03d9.jpg"},"74ae":function(t,e,i){t.exports=i.p+"static/img/w3.a47b9bad.png"},"74dc":function(t,e,i){t.exports=i.p+"static/img/w5.f33a17d4.png"},"75f2":function(t,e,i){"use strict";i("2895")},7989:function(t,e,i){t.exports=i.p+"static/img/calendar2.b802edbc.png"},"7fc0":function(t,e,i){t.exports=i.p+"static/img/8.8c6180eb.jpg"},8281:function(t,e,i){t.exports=i.p+"static/img/w2.ce3bd666.png"},"85ec":function(t,e,i){},8874:function(t,e,i){t.exports=i.p+"static/img/1.f29b789f.jpg"},9149:function(t,e,i){t.exports=i.p+"static/img/camera.a1141917.png"},a1d8:function(t,e,i){t.exports=i.p+"static/img/logo.d97d3637.png"},a591:function(t,e,i){},aa53:function(t,e,i){t.exports=i.p+"static/img/5.aacdcbf0.jpg"},abd7:function(t,e,i){"use strict";i("40ed")},b08d:function(t,e,i){"use strict";i("40e8")},b2ce:function(t,e,i){t.exports=i.p+"static/img/2.74c9a9d8.jpg"},c2ea:function(t,e,i){},c452:function(t,e,i){t.exports=i.p+"static/img/w4.ba63102a.png"},c868:function(t,e,i){t.exports=i.p+"static/img/w7.804bc9e7.png"},cbce:function(t,e,i){t.exports=i.p+"static/img/9.8f724861.jpg"},d25e:function(t,e,i){t.exports=i.p+"static/img/7.ba866a4f.jpg"},fdf4:function(t,e,i){t.exports=i.p+"static/img/title1.9bf9f851.png"}});
//# sourceMappingURL=app.aa309b04.js.map