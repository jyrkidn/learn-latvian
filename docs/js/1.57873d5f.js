(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1,3],{"C/va":function(t,e,a){"use strict";var n=a("y3w9");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"IU+Z":function(t,e,a){"use strict";var n=a("Mukb"),i=a("KroJ"),l=a("eeVq"),s=a("vhPU"),r=a("K0xU");t.exports=function(t,e,a){var o=r(t),c=a(s,o,""[t]),u=c[0],d=c[1];l(function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,u),n(RegExp.prototype,o,2==e?function(t,e){return d.call(t,this,e)}:function(t){return d.call(t,this)}))}},Iia4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("input-field",{staticClass:"inverted",attrs:{required:!1,label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("table",{directives:[{name:"show",rawName:"v-show",value:t.showFixed,expression:"showFixed"}],staticClass:"table table-bordered fixed"},[t._m(0)]),a("table",{ref:"table",staticClass:"table table-bordered",attrs:{id:"table"}},[t._m(1),a("tbody",t._l(t.filteredTranslations,function(e,n){return a("tr",{key:e.id},[a("td",{attrs:{"data-title":"Latvian"}},[e.edit?a("input-field",{staticClass:"inverted hide-label",attrs:{label:"Latvian"},model:{value:t.translationData.lv,callback:function(e){t.$set(t.translationData,"lv",e)},expression:"translationData.lv"}}):a("span",[t._v("\n            "+t._s(e.lv)+"\n          ")])],1),a("td",{attrs:{"data-title":"English"}},[e.edit?a("input-field",{staticClass:"inverted hide-label",attrs:{label:"English"},model:{value:t.translationData.en,callback:function(e){t.$set(t.translationData,"en",e)},expression:"translationData.en"}}):a("span",[t._v("\n            "+t._s(e.en)+"\n          ")])],1),a("td",{attrs:{"data-title":"Completed"}},[e.edit?a("input",{directives:[{name:"model",rawName:"v-model",value:t.translationData.completed,expression:"translationData.completed"}],attrs:{"true-value":1,"false-value":0,type:"checkbox"},domProps:{checked:Array.isArray(t.translationData.completed)?t._i(t.translationData.completed,null)>-1:t._q(t.translationData.completed,1)},on:{change:function(e){var a=t.translationData.completed,n=e.target,i=n.checked?1:0;if(Array.isArray(a)){var l=null,s=t._i(a,l);n.checked?s<0&&t.$set(t.translationData,"completed",a.concat([l])):s>-1&&t.$set(t.translationData,"completed",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.translationData,"completed",i)}}}):a("span",[e.completed?a("check-icon"):a("close-icon")],1)]),a("td",[e.edit?a("button",{attrs:{"aria-label":"Submit translation"},on:{click:function(a){t.submitTranslation(e,n)}}},[a("check-icon")],1):t._e(),e.edit?a("button",{attrs:{"aria-label":"Cancel translation"},on:{click:function(a){t.cancelTranslation(e)}}},[a("close-icon")],1):t._e(),e.edit?t._e():a("button",{attrs:{"aria-label":"Edit translation"},on:{click:function(a){t.editTranslation(e)}}},[a("pencil-icon")],1),e.edit?t._e():a("button",{attrs:{"aria-label":"Delete translation"},on:{click:function(a){t.deleteTranslation(e,n)}}},[a("trash-icon")],1)])])}))])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("\n          Latvian\n        ")]),a("th",[t._v("\n          English\n        ")]),a("th",[t._v("\n          Completed\n        ")]),a("th")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("\n          Latvian\n        ")]),a("th",[t._v("\n          English\n        ")]),a("th",[t._v("\n          Completed\n        ")]),a("th")])])}],l=a("yT7P"),s=(a("OG14"),a("sSZC")),r=a("g67X"),o=a("F+G0"),c=a("gZLn"),u={components:{CheckIcon:r["a"],CloseIcon:r["b"],IconButton:s["default"],TrashIcon:r["f"],PencilIcon:r["d"],InputField:c["default"]},data(){return{translations:[],translationData:{id:null,lv:"",en:"",completed:0},showFixed:!1,search:""}},computed:{filteredTranslations(){let t=this.translations;const e=this.search.trim().toLowerCase();return e&&(t=t.filter(t=>t.lv.toLowerCase().includes(e)||t.en.toLowerCase().includes(e))),t}},async mounted(){const t=await Object(o["b"])();this.translations=t.map(t=>{return t.edit=!1,t})},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const t=document.scrollingElement.scrollTop,e=this.$refs.table.offsetTop;t<e?this.showFixed=!1:t>=e&&(this.showFixed=!0)},editTranslation(t){t.edit=!0,this.translationData=Object(l["a"])({},t)},async submitTranslation(t,e){const a=await Object(o["d"])(this.translationData);a.edit=!1,t=Object.assign(t,a),this.translationData={id:null,lv:"",en:"",completed:0}},async deleteTranslation(t,e){await Object(o["a"])(t.id),this.translations.splice(e,1)},cancelTranslation(t){t.edit=!1,this.translationData={id:null,lv:"",en:"",completed:0}}}},d=u,h=(a("b9D9"),a("KHd+")),p=Object(h["a"])(d,n,i,!1,null,"392bcb08",null);e["default"]=p.exports},Ioze:function(t,e,a){"use strict";var n=a("bgJn"),i=a.n(n);i.a},OEbY:function(t,e,a){a("nh4g")&&"g"!=/./g.flags&&a("hswa").f(RegExp.prototype,"flags",{configurable:!0,get:a("C/va")})},OG14:function(t,e,a){a("IU+Z")("search",1,function(t,e,a){return[function(a){"use strict";var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},a]})},YvIU:function(t,e,a){},a1Th:function(t,e,a){"use strict";a("OEbY");var n=a("y3w9"),i=a("C/va"),l=a("nh4g"),s="toString",r=/./[s],o=function(t){a("KroJ")(RegExp.prototype,s,t,!0)};a("eeVq")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?o(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!l&&t instanceof RegExp?i.call(t):void 0)}):r.name!=s&&o(function(){return r.call(this)})},b9D9:function(t,e,a){"use strict";var n=a("YvIU"),i=a.n(n);i.a},bgJn:function(t,e,a){},gZLn:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group"},[a("input",{class:{"filled-in":t.value.length>0},attrs:{required:t.required,id:t.id,type:"text"},domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}}),a("span",{staticClass:"highlight"}),a("span",{staticClass:"bar"}),a("label",{attrs:{for:t.id}},[t._v("\n    "+t._s(t.label)+"\n  ")])])},i=[],l=(a("a1Th"),{name:"InputField",props:{label:{type:String,required:!0},value:{type:String,default:""},required:{type:Boolean,default:!0}},data(){return{id:"input-"+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}}}),s=l,r=(a("Ioze"),a("KHd+")),o=Object(r["a"])(s,n,i,!1,null,"5b838eee",null);e["default"]=o.exports}}]);
//# sourceMappingURL=1.57873d5f.js.map