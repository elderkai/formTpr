webpackJsonp([1],{"/F4a":function(t,e){},"/kjw":function(t,e){},"3CWE":function(t,e){},IOgD:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("yf3K"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=a("C7Lr")({name:"App"},n,!1,function(t){a("/F4a")},null,null).exports,l=a("mB6C"),o={props:{title:{type:String,default:""},type:{type:String,default:"type1"},label:{type:String,default:""},value:{trye:String,default:""}},data:function(){return{val:this.value,err:!1,errMessage:"请输入",waringIcon:""}},methods:{clear:function(){this.val=""},change:function(t){t&&(console.log(t),this.$emit("update",t))},formattier:function(t){return t?(this.err=!1,this.waringIcon="eeeee"):(this.errMessage="请输入",this.err=!0,this.waringIcon="warning-o"),t}},created:function(){},mounted:function(){}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cm_input"},["type1"==t.type?a("div",{staticClass:"input_box"},[a("van-cell-group",[a("van-field",{attrs:{label:t.label,placeholder:""},on:{input:t.change},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)],1):t._e(),t._v(" "),"type2"==t.type?a("div",{staticClass:"input_box input_box2"},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),a("van-cell-group",[a("van-field",{attrs:{clearable:!0,"left-icon":t.waringIcon,"clear-trigger":"focus",placeholder:t.label,formatter:t.formattier,error:t.err,required:t.err},on:{input:t.change,clear:t.clear},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)],1):t._e(),t._v(" "),"type3"==t.type?a("div",{staticClass:"input_box input_box2 input_box3"},[a("van-cell-group",[a("van-field",{attrs:{clearable:!0,"clear-trigger":"focus",label:t.title,placeholder:t.label},on:{input:t.change,clear:t.clear},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)],1):t._e()])},staticRenderFns:[]};var c=a("C7Lr")(o,r,!1,function(t){a("IOgD")},"data-v-6e5469d6",null).exports,u={props:{title:{type:String,default:""},type:{type:String,default:"type1"},label:{type:String,default:""},value:{trye:String,default:""},options:{type:Array,default:[]}},data:function(){return{show:!1,fieldValue:this.value,cascaderValue:""}},methods:{onFinish:function(t){var e=t.selectedOptions;this.show=!1,this.fieldValue=e.map(function(t){return t.text}).join("/"),this.$emit("select",e)}},created:function(){},mounted:function(){}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cm_select"},["type1"==t.type?a("div",{staticClass:"input_box input_box1"},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),a("van-cell-group",[a("van-field",{attrs:{"is-link":"",readonly:"",label:"",placeholder:"请选择"},on:{click:function(e){t.show=!0}},model:{value:t.fieldValue,callback:function(e){t.fieldValue=e},expression:"fieldValue"}}),t._v(" "),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("van-cascader",{attrs:{title:t.title,options:t.options},on:{close:function(e){t.show=!1},finish:t.onFinish},model:{value:t.cascaderValue,callback:function(e){t.cascaderValue=e},expression:"cascaderValue"}})],1)],1)],1):t._e(),t._v(" "),"type2"==t.type?a("div",{staticClass:"input_box input_box1  input_box2"},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),a("van-cell-group",[a("van-field",{attrs:{"is-link":"",readonly:"",label:t.label,placeholder:"请选择"},on:{click:function(e){t.show=!0}},model:{value:t.fieldValue,callback:function(e){t.fieldValue=e},expression:"fieldValue"}}),t._v(" "),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("van-cascader",{attrs:{title:t.title,options:t.options},on:{close:function(e){t.show=!1},finish:t.onFinish},model:{value:t.cascaderValue,callback:function(e){t.cascaderValue=e},expression:"cascaderValue"}})],1)],1)],1):t._e()])},staticRenderFns:[]};var v={components:{cmInput:c,cmSelect:a("C7Lr")(u,p,!1,function(t){a("/kjw")},"data-v-810a6680",null).exports},data:function(){return{username:"",sotpsType:0,sotps:[{text:"01-仅为中国税收居民",value:1},{text:"02-非居民",value:2},{text:"03-既是中国又是其他国家（地区）税收居民",value:3}],tpifnb:"",addRess:[],address:"",birthplaces:[],birthplace:"",trtctrys:[],trtctry:"",otherCountry:!1,selectCause:0,message1:"",message2:"",otherTrtctrys:[],otherTrtctry:""}},methods:{selectSotps:function(t){this.sotpsType=t[0].value,console.log(this.sotpsType)}},created:function(){},mounted:function(){}},d={render:function(){var t=this,e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"investigate"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("div",{staticClass:"form_Infor"},[e._m(2),e._v(" "),s("cm-input",{attrs:{label:"姓名",type:"type1",value:e.username},on:{update:function(e){t.username=e}}}),e._v(" "),s("cm-select",{attrs:{title:"选择纳税人身份",options:e.sotps},on:{select:e.selectSotps}}),e._v(" "),2==e.sotpsType||3==e.sotpsType?s("div",{staticClass:"showBox"},[s("cm-select",{attrs:{type:"type2",options:e.addRess,title:"现居住地址",label:"所在地区："}}),e._v(" "),s("cm-input",{attrs:{label:"请填写街道、楼牌号",type:"type3",title:"详情地址：",value:e.address},on:{update:function(e){t.address=e}}}),e._v(" "),s("cm-select",{attrs:{type:"type2",options:e.birthplaces,title:"出生地",label:"所在地区："}}),e._v(" "),s("cm-input",{attrs:{label:"请填写街道、楼牌号",type:"type3",title:"详情地址：",value:e.address},on:{update:function(e){t.address=e}}}),e._v(" "),3!=e.sotpsType?s("cm-select",{attrs:{title:"税收居民国",options:e.trtctrys},on:{select:function(t){}}}):e._e()],1):e._e(),e._v(" "),s("div",{staticClass:"noEdit",staticStyle:{width:"100%"}},[1!=e.sotpsType&&e.sotpsType?e._e():s("cm-input",{attrs:{label:"请填写",type:"type2",title:"纳税人识别号",value:e.tpifnb},on:{update:function(e){t.tpifnb=e}}})],1),e._v(" "),2==e.sotpsType?s("cm-input",{attrs:{label:"请填写",type:"type2",title:"纳税人识别号",value:e.tpifnb},on:{update:function(e){t.tpifnb=e}}}):e._e(),e._v(" "),3==e.sotpsType?s("cm-input",{attrs:{label:"请填写",type:"type2",title:"中国纳税人识别号",value:e.tpifnb},on:{update:function(e){t.tpifnb=e}}}):e._e(),e._v(" "),2==e.sotpsType||3==e.sotpsType?s("div",{staticClass:"cause_box"},[3!=e.sotpsType?s("div",{staticClass:"title"},[e._v("\n        如不能提供居民国（地区）纳税人识别号，请选择原因：\n      ")]):e._e(),e._v(" "),3!=e.sotpsType?s("div",{staticClass:"select_radio"},[s("van-radio-group",{model:{value:e.selectCause,callback:function(t){e.selectCause=t},expression:"selectCause"}},[s("van-radio",{attrs:{name:"1"}},[e._v("居民国（地区）不发放纳税人识别号")]),e._v(" "),s("van-radio",{attrs:{name:"2"}},[e._v("账户持有人未能取得纳税人识别号")])],1)],1):e._e(),e._v(" "),s("div",{staticClass:"texttarea_box"},[s("van-field",{attrs:{rows:"3",autosize:"",type:"textarea",placeholder:"请填写具体原因","show-word-limit":""},model:{value:e.message1,callback:function(t){e.message1=t},expression:"message1"}})],1),e._v(" "),e.otherCountry?s("cm-select",{attrs:{title:"其他税收居民国",options:e.otherTrtctrys},on:{select:function(t){}}}):e._e(),e._v(" "),3==e.sotpsType?s("cm-select",{attrs:{title:"其他税收居民国",options:e.trtctrys},on:{select:function(t){}}}):e._e(),e._v(" "),e.otherCountry||3==e.sotpsType?s("cm-input",{attrs:{label:"请填写",type:"type2",title:"其他国家纳税人识别号",value:e.tpifnb},on:{update:function(e){t.tpifnb=e}}}):e._e(),e._v(" "),e.otherCountry||3==e.sotpsType?s("div",{staticClass:"title"},[e._v("\n        如不能提供居民国（地区）纳税人识别号，请选择原因：\n      ")]):e._e(),e._v(" "),e.otherCountry||3==e.sotpsType?s("div",{staticClass:"select_radio"},[s("van-radio-group",{model:{value:e.selectCause,callback:function(t){e.selectCause=t},expression:"selectCause"}},[s("van-radio",{attrs:{name:"1"}},[e._v("居民国（地区）不发放纳税人识别号")]),e._v(" "),s("van-radio",{attrs:{name:"2"}},[e._v("账户持有人未能取得纳税人识别号")])],1)],1):e._e(),e._v(" "),e.otherCountry?s("div",{staticClass:"texttarea_box"},[s("van-field",{attrs:{rows:"3",autosize:"",type:"textarea",placeholder:"请填写具体原因","show-word-limit":""},model:{value:e.message2,callback:function(t){e.message2=t},expression:"message2"}})],1):e._e(),e._v(" "),e.otherCountry?s("div",{staticClass:" btn_del",on:{click:function(t){e.otherCountry=!1}}},[s("van-icon",{attrs:{name:"delete-o"}}),e._v("删除其他国家信息\n      ")],1):e._e(),e._v(" "),s("div",{staticClass:"title"},[e._v("\n        若您仍是其他国家（地区）税收居民，请点击下 方按钮，继续填写\n      ")])],1):e._e(),e._v(" "),2==e.sotpsType||3==e.sotpsType?s("div",{staticClass:"btn_sure",on:{click:function(t){e.otherCountry=!0}}},[e._v("\n      仍是其他国家（地区）税收居民"+e._s(e.otherCountry?"(最多可添加2条记录)":"")+"\n    ")]):e._e()],1),e._v(" "),s("div",{staticClass:"bottom"},[s("div",{staticClass:"title"},[s("van-icon",{attrs:{name:"info-o"}}),e._v("本人确认上述信息的真实、准确和完整，且当这些信息\n      发生变更时，将在30日内通知我司，否则本人承担由此 造成的不利和后果。\n    ")],1),e._v(" "),s("div",{staticClass:"vtn_upload"},[e._v("\n      确认提交\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("i",{staticClass:"icon icon_back"}),this._v(" "),e("title",[this._v("个人税收身份声明信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"iconBox"},[e("i",{staticClass:"icon_logo"}),this._v(" "),e("i",{staticClass:"icon_form"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"infor_title"},[e("i",{staticClass:"icon_infor"}),this._v(" "),e("span",{staticStyle:{"font-size":"34px"}},[this._v("\n        请输入个人所得税身份信息：\n      ")])])}]};var _=a("C7Lr")(v,d,!1,function(t){a("WHqZ")},"data-v-2b40910d",null).exports;s.a.use(l.a);var f=new l.a({routes:[{path:"/",name:"index",component:_}]}),y=a("Xehg");a("3CWE");s.a.config.productionTip=!1,s.a.use(y.a),new s.a({el:"#app",router:f,components:{App:i},template:"<App/>"})},WHqZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.42821163da848986c8a3.js.map