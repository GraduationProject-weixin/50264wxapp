(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chahuaCollection/add-or-update"],{"23fb":function(e,t,n){"use strict";var a=n("ebe9"),o=n.n(a);o.a},"4af7":function(e,t,n){"use strict";n.r(t);var a=n("6a55"),o=n("97f4");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("23fb");var c,i=n("f0c5"),u=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"d9accbec",null,!1,a["a"],c);t["default"]=u.exports},"6a55":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"d576"))}},o=function(){var e=this,t=e.$createElement;e._self._c},r=[]},"8a81":function(e,t,n){"use strict";(function(e){n("e428");a(n("66fd"));var t=a(n("4af7"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"97f4":function(e,t,n){"use strict";n.r(t);var a=n("e834"),o=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},e834:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a,o,r,c){try{var i=e[r](c),u=i.value}catch(l){return void n(l)}i.done?t(u):Promise.resolve(u).then(a,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var c=e.apply(t,n);function i(e){r(c,a,o,i,u,"next",e)}function u(e){r(c,a,o,i,u,"throw",e)}i(void 0)}))}}var i=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("d576"))}.bind(null,n)).catch(n.oe)},u={data:function(){return{cross:"",ro:{chahuaId:!1,yonghuId:!1,chahuaCollectionTypes:!1,insertTime:!1,createTime:!1},ruleForm:{chahuaId:"",yonghuId:"",chahuaCollectionTypes:"",chahuaCollectionValue:"",insertTime:"",createTime:""},user:{},chahuaCollectionTypesOptions:[],chahuaCollectionTypesIndex:0}},components:{wPicker:i},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var t=this;return c(a.default.mark((function n(){var o,r,c;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o={page:1,limit:100,dicCode:"chahua_collection_types"},n.next=3,t.$api.page("dictionary",o);case 3:if(r=n.sent,t.chahuaCollectionTypesOptions=r.data.list,!e.id){n.next=11;break}return t.ruleForm.id=e.id,n.next=9,t.$api.info("chahuaCollection",t.ruleForm.id);case 9:c=n.sent,t.ruleForm=c.data;case 11:e.chahuaCollectionId&&(t.ruleForm.chahuaCollectionId=e.chahuaCollectionId);case 12:case"end":return n.stop()}}),n)})))()},methods:{chahuaCollectionTypesChange:function(e){this.chahuaCollectionTypesIndex=e.target.value,this.ruleForm.chahuaCollectionValue=this.chahuaCollectionTypesOptions[this.chahuaCollectionTypesIndex].indexName,this.ruleForm.chahuaCollectionTypes=this.chahuaCollectionTypesOptions[this.chahuaCollectionTypesIndex].codeIndex},insertTimeConfirm:function(e){console.log(e),this.ruleForm.insertTime=e.result,this.$forceUpdate()},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return c(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.ruleForm.id){n.next=5;break}return n.next=3,t.$api.update("chahuaCollection",t.ruleForm);case 3:n.next=7;break;case 5:return n.next=7,t.$api.save("chahuaCollection",t.ruleForm);case 7:e.setStorageSync("pingluenStateState",!0),t.$utils.msgBack("提交成功");case 9:case"end":return n.stop()}}),n)})))()},getDate:function(e){var t=new Date,n=t.getFullYear(),a=t.getMonth()+1,o=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),a=a>9?a:"0"+a,o=o>9?o:"0"+o,"".concat(n,"-").concat(a,"-").concat(o)},toggleTab:function(e){this.$refs[e].show()}}};t.default=u}).call(this,n("543d")["default"])},ebe9:function(e,t,n){}},[["8a81","common/runtime","common/vendor"]]]);