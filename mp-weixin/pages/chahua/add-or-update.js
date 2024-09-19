(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chahua/add-or-update"],{"06e0":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,a,n,r,u,i){try{var c=e[u](i),o=c.value}catch(s){return void a(s)}c.done?t(o):Promise.resolve(o).then(n,r)}function i(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function c(e){u(i,n,r,c,o,"next",e)}function o(e){u(i,n,r,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("d576"))}.bind(null,a)).catch(a.oe)},o={data:function(){return{cross:"",ro:{chahuaName:!1,chahuaPhoto:!1,chahuaFile:!1,chahuaTypes:!1,zanNumber:!1,caiNumber:!1,yonghuId:!1,insertTime:!1,chahuaContent:!1,createTime:!1},ruleForm:{chahuaName:"",chahuaPhoto:"",chahuaFile:"",chahuaTypes:"",chahuaValue:"",zanNumber:"",caiNumber:"",yonghuId:"",insertTime:"",chahuaContent:"",createTime:""},user:{},chahuaTypesOptions:[],chahuaTypesIndex:0}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var t=this;return i(n.default.mark((function a(){var r,u,i;return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r={page:1,limit:100,dicCode:"chahua_types"},a.next=3,t.$api.page("dictionary",r);case 3:if(u=a.sent,t.chahuaTypesOptions=u.data.list,!e.id){a.next=11;break}return t.ruleForm.id=e.id,a.next=9,t.$api.info("chahua",t.ruleForm.id);case 9:i=a.sent,t.ruleForm=i.data;case 11:e.chahuaId&&(t.ruleForm.chahuaId=e.chahuaId);case 12:case"end":return a.stop()}}),a)})))()},methods:{chahuaTypesChange:function(e){this.chahuaTypesIndex=e.target.value,this.ruleForm.chahuaValue=this.chahuaTypesOptions[this.chahuaTypesIndex].indexName,this.ruleForm.chahuaTypes=this.chahuaTypesOptions[this.chahuaTypesIndex].codeIndex},chahuaPhotoTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.chahuaPhoto=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},chahuaFileTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.chahuaFile=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return i(n.default.mark((function a(){return n.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(t.ruleForm.chahuaName){a.next=3;break}return t.$utils.msg("插画名称不能为空"),a.abrupt("return");case 3:if(t.ruleForm.chahuaPhoto){a.next=6;break}return t.$utils.msg("插画图片不能为空"),a.abrupt("return");case 6:if(t.ruleForm.zanNumber||t.$validate.isIntNumer(t.ruleForm.zanNumber)||!(t.ruleForm.zanNumber>0)){a.next=9;break}return t.$utils.msg("赞不能为空，不能小于0 格式为数字"),a.abrupt("return");case 9:if(t.ruleForm.caiNumber||t.$validate.isIntNumer(t.ruleForm.caiNumber)||!(t.ruleForm.caiNumber>0)){a.next=12;break}return t.$utils.msg("踩不能为空，不能小于0 格式为数字"),a.abrupt("return");case 12:if(!t.ruleForm.id){a.next=17;break}return a.next=15,t.$api.update("chahua",t.ruleForm);case 15:a.next=19;break;case 17:return a.next=19,t.$api.save("chahua",t.ruleForm);case 19:e.setStorageSync("pingluenStateState",!0),t.$utils.msgBack("提交成功");case 21:case"end":return a.stop()}}),a)})))()},getDate:function(e){var t=new Date,a=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(a,"-").concat(n,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}).call(this,a("543d")["default"])},"186e":function(e,t,a){"use strict";a.r(t);var n=a("06e0"),r=a.n(n);for(var u in n)"default"!==u&&function(e){a.d(t,e,(function(){return n[e]}))}(u);t["default"]=r.a},3178:function(e,t,a){"use strict";(function(e){a("e428");n(a("66fd"));var t=n(a("3a4d"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(t.default)}).call(this,a("543d")["createPage"])},"3a4d":function(e,t,a){"use strict";a.r(t);var n=a("5516"),r=a("186e");for(var u in r)"default"!==u&&function(e){a.d(t,e,(function(){return r[e]}))}(u);a("4460");var i,c=a("f0c5"),o=Object(c["a"])(r["default"],n["b"],n["c"],!1,null,"587b0ad0",null,!1,n["a"],i);t["default"]=o.exports},4460:function(e,t,a){"use strict";var n=a("a174"),r=a.n(n);r.a},5516:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return n}));var n={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"d576"))}},r=function(){var e=this,t=e.$createElement;e._self._c},u=[]},a174:function(e,t,a){}},[["3178","common/runtime","common/vendor"]]]);