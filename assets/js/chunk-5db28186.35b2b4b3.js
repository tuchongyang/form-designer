(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5db28186"],{"17ef":function(e,t,a){},"3e2b":function(e,t,a){"use strict";a("cd55")},6091:function(e,t,a){"use strict";var n=a("7a23");function c(e,t,a,c,l,u){return Object(n["H"])(),Object(n["j"])(Object(n["Q"])(e.componentMap[e.data.type]),{data:e.data,modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.model=t})},null,8,["data","modelValue"])}function l(e,t,a,c,l,u){var o=Object(n["P"])("a-input");return Object(n["H"])(),Object(n["j"])(o,{value:e.model,"onUpdate:value":t[0]||(t[0]=function(t){return e.model=t}),placeholder:e.data.placeholder},null,8,["value","placeholder"])}var u={data:{type:Object,default:function(){return{}}},modelValue:{type:String,default:""}},o=Object(n["p"])({name:"ItemInput",props:u,setup:function(e,t){var a=Object(n["M"])("");return Object(n["Y"])(a,(function(e){t.emit("update:modelValue",e)})),Object(n["Y"])((function(){return e.modelValue}),(function(t){a.value=e.modelValue})),{model:a}}});o.render=l;var r=o;function i(e,t,a,c,l,u){var o=Object(n["P"])("a-radio"),r=Object(n["P"])("a-radio-group");return Object(n["H"])(),Object(n["j"])(r,{value:e.model,"onUpdate:value":t[0]||(t[0]=function(t){return e.model=t})},{default:Object(n["ab"])((function(){return[(Object(n["H"])(!0),Object(n["l"])(n["b"],null,Object(n["N"])(e.data.options,(function(t,a){return Object(n["H"])(),Object(n["j"])(o,{style:Object(n["y"])(e.radioStyle),value:t.value,key:a},{default:Object(n["ab"])((function(){return[Object(n["n"])(Object(n["S"])(t.label),1)]})),_:2},1032,["style","value"])})),128))]})),_:1},8,["value"])}var d={data:{type:Object,default:function(){return{}}},modelValue:{type:String,default:""}},b=Object(n["p"])({name:"ItemInput",props:d,setup:function(e,t){var a=Object(n["M"])(1),c=Object(n["L"])({display:"block",height:"30px",lineHeight:"30px"}),l=Object(n["h"])((function(){return e.data.defaultValue})),u=Object(n["M"])("");return Object(n["Y"])(u,(function(e){t.emit("update:modelValue",e)})),Object(n["Y"])((function(){return e.modelValue}),(function(t){u.value=e.modelValue})),{model:u,value:a,radioStyle:c,defaultValue:l}}});b.render=i;var j=b;function O(e,t,a,c,l,u){var o=Object(n["P"])("a-checkbox"),r=Object(n["P"])("a-checkbox-group");return Object(n["H"])(),Object(n["j"])(r,{value:e.model,"onUpdate:value":t[0]||(t[0]=function(t){return e.model=t})},{default:Object(n["ab"])((function(){return[(Object(n["H"])(!0),Object(n["l"])(n["b"],null,Object(n["N"])(e.data.options,(function(t,a){return Object(n["H"])(),Object(n["j"])(o,{style:Object(n["y"])(e.radioStyle),value:t.value,key:a},{default:Object(n["ab"])((function(){return[Object(n["n"])(Object(n["S"])(t.label),1)]})),_:2},1032,["style","value"])})),128))]})),_:1},8,["value"])}var s={data:{type:Object,default:function(){return{}}},modelValue:{type:Array,default:[]}},v=Object(n["p"])({name:"ItemInput",props:s,setup:function(e,t){var a=Object(n["M"])([]),c=Object(n["L"])({display:"block",height:"30px",lineHeight:"30px",marginLeft:0}),l=Object(n["M"])(e.modelValue);return Object(n["Y"])(l,(function(e){t.emit("update:modelValue",e)})),Object(n["Y"])((function(){return e.modelValue}),(function(t){l.value=e.modelValue})),{value:a,radioStyle:c,model:l}}});v.render=O;var f=v;function p(e,t,a,c,l,u){var o=Object(n["P"])("a-select");return Object(n["H"])(),Object(n["j"])(o,{value:e.value,"onUpdate:value":t[0]||(t[0]=function(t){return e.value=t}),"label-in-value":"",style:{width:"100%"},options:e.data.options,onChange:e.handleChange},null,8,["value","options","onChange"])}var m={data:{type:Object,default:function(){return{}}},modelValue:{type:String,default:""}},y=Object(n["p"])({name:"ItemSelect",props:m,setup:function(e,t){var a=function(e){e.label=e.value},c=Object(n["M"])("");return Object(n["Y"])(c,(function(e){t.emit("update:modelValue",e)})),Object(n["Y"])((function(){return e.modelValue}),(function(t){c.value=e.modelValue})),{value:Object(n["M"])({value:"lucy"}),handleChange:a}}});y.render=p;var h=y,V={data:{type:Object,default:function(){return{}}},modelValue:{type:String,default:""}},g=Object(n["p"])({name:"FormItem",components:{ItemInput:r,ItemRadio:j,ItemCheckbox:f,ItemSelect:h},props:V,setup:function(e,t){var a=Object(n["M"])({input:"item-input",radio:"item-radio",checkbox:"item-checkbox",select:"item-select"}),c=Object(n["M"])(e.modelValue);return Object(n["Y"])(c,(function(e){t.emit("update:modelValue",e)})),Object(n["Y"])((function(){return e.modelValue}),(function(t){c.value=e.modelValue})),{componentMap:a,model:c}}});g.render=c;t["a"]=g},8248:function(e,t,a){"use strict";a.r(t);var n=a("7a23");Object(n["K"])("data-v-20bd7bc7");var c={class:"container"},l={class:"sub-header"},u={class:"title"},o=Object(n["m"])("ul",{class:"tabs"},[Object(n["m"])("li",{class:"active"},"列表视图")],-1),r={class:"panel-center"},i={class:"wrapper"};function d(e,t,a,d,b,j){var O,s=Object(n["P"])("HeaderBar"),v=Object(n["P"])("ListView");return Object(n["H"])(),Object(n["l"])("div",c,[Object(n["o"])(s),Object(n["m"])("div",l,[Object(n["m"])("div",u,Object(n["S"])(null===(O=e.detail)||void 0===O?void 0:O.title),1),o]),Object(n["m"])("div",r,[Object(n["m"])("div",i,[Object(n["o"])(v,{detail:e.detail},null,8,["detail"])])])])}Object(n["I"])();var b=a("5530"),j=(a("d3b7"),a("5502")),O=a("79f6"),s=a("6c02"),v=a("f64c"),f=a("6091"),p=a("ce0e");a("b0c0");Object(n["K"])("data-v-66147722");var m={key:0},y={key:1},h=Object(n["n"])("详情"),V={class:"list"},g={class:"label"},S={class:"det"};function k(e,t,a,c,l,u){var o=Object(n["P"])("a-button"),r=Object(n["P"])("a-table"),i=Object(n["P"])("a-drawer");return Object(n["H"])(),Object(n["l"])(n["b"],null,[Object(n["o"])(r,{dataSource:e.list,columns:e.columns,rowKey:"id"},{creator:Object(n["ab"])((function(e){var t=e.record;return[t.user?(Object(n["H"])(),Object(n["l"])("span",m,Object(n["S"])(t.user.name||t.user.username),1)):(Object(n["H"])(),Object(n["l"])("span",y,"游客"))]})),action:Object(n["ab"])((function(t){var a=t.record;return[Object(n["o"])(o,{onClick:function(t){return e.openDetail(a)}},{default:Object(n["ab"])((function(){return[h]})),_:2},1032,["onClick"])]})),_:1},8,["dataSource","columns"]),Object(n["o"])(i,{title:"反馈详情",placement:"right",closable:!1,visible:e.visible,"onUpdate:visible":t[0]||(t[0]=function(t){return e.visible=t}),width:600},{default:Object(n["ab"])((function(){return[Object(n["m"])("div",V,[(Object(n["H"])(!0),Object(n["l"])(n["b"],null,Object(n["N"])(e.currentData,(function(e,t){return Object(n["H"])(),Object(n["l"])("div",{class:"item",key:t},[Object(n["m"])("div",g,Object(n["S"])(t+1)+"."+Object(n["S"])(e.label),1),Object(n["m"])("div",S,Object(n["S"])(e.value),1)])})),128))])]})),_:1},8,["visible"])],64)}Object(n["I"])();a("d81d"),a("a15b");var I=a("614f"),H={detail:{type:Object,default:function(){return{}}}},M=Object(n["p"])({props:H,setup:function(e){var t=Object(s["c"])(),a=Object(I["a"])({api:O["a"].form.answer.list,params:{formId:t.query.id}}),c=a.total,l=a.loading,u=a.list,o=a.listQuery,r=a.loadData,i=Object(n["M"])([{title:"提交时间",dataIndex:"createdAt",key:"createdAt"},{title:"提交人",key:"creator",slots:{customRender:"creator"}},{title:"提交Ip",dataIndex:"ip",key:"ip"},{title:"操作",key:"action",slots:{customRender:"action"}}]);r();var d=Object(n["M"])(!1),b=Object(n["M"])([]),j=function(t){var a=e.detail,n=JSON.parse(t.content);b.value=a.content.modules.map((function(e){var t="";return t=n[e.id]instanceof Array?n[e.id].join(","):n[e.id],{label:e.label,value:t}})),console.log("currentData.value",b.value),d.value=!0};return{total:c,loading:l,list:u,listQuery:o,loadData:r,columns:i,visible:d,openDetail:j,currentData:b}}});a("3e2b");M.render=k,M.__scopeId="data-v-66147722";var w=M,x=Object(n["p"])({components:{FormItem:f["a"],HeaderBar:p["a"],ListView:w},props:{mode:{type:String,default:""}},setup:function(e){var t=Object(s["c"])(),a=(Object(j["b"])(),Object(n["M"])(null)),c=Object(n["h"])((function(){var e,t;return(null===(e=a.value)||void 0===e||null===(t=e.content)||void 0===t?void 0:t.modules)||[]})),l=Object(n["M"])({}),u=Object(n["M"])(!1),o=function(){var e=t.query.id||0;u.value=!0,O["a"].form.detail(+e).then((function(e){var t;try{t=JSON.parse(e.result.publishContent||"")}catch(u){t=null}for(var n in null===t&&(t={skin:{containerStyle:{},headerStyle:{}},modules:[]}),a.value=Object(b["a"])(Object(b["a"])({},e.result),{},{content:t}),t.modules){var c=t.modules[n];l.value[c.id]=c.defaultValue||""}console.log("form",l.value)})).finally((function(){u.value=!1}))};o();var r=function(){var t,n;"preview"!=e.mode?(console.log("form",l.value),null!==(t=a.value)&&void 0!==t&&t.id&&O["a"].form.answer.save(null===(n=a.value)||void 0===n?void 0:n.id,l.value).then((function(){v["a"].success("提交成功")}))):v["a"].info("当前处于预览模式，无法提交")};return{detail:a,modules:c,form:l,save:r,loading:u}}});a("d1c4");x.render=d,x.__scopeId="data-v-20bd7bc7";t["default"]=x},a15b:function(e,t,a){"use strict";var n=a("23e7"),c=a("44ad"),l=a("fc6a"),u=a("a640"),o=[].join,r=c!=Object,i=u("join",",");n({target:"Array",proto:!0,forced:r||!i},{join:function(e){return o.call(l(this),void 0===e?",":e)}})},cd55:function(e,t,a){},d1c4:function(e,t,a){"use strict";a("17ef")},d81d:function(e,t,a){"use strict";var n=a("23e7"),c=a("b727").map,l=a("1dde"),u=l("map");n({target:"Array",proto:!0,forced:!u},{map:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);