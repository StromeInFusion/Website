/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
//load youtube iframe api
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//object to hold all players on the page
var players = {};

function onYouTubePlayerAPIReady() {
    $(document).ready(function () {
        $('iframe.ytplayer').each(function (event) {
            var iframeID = $(this).attr('id');
            players[iframeID] = new YT.Player(iframeID);
        });
    });
}

function stopYouTubeVideo(iframeID) {
    if(typeof players[iframeID].stopVideo === 'function') {
        players[iframeID].seekTo(0);
        players[iframeID].stopVideo();
    }
}

/**
 * BFM JS Functions
 * @constructor
 */
var BFMjs = function () {
    "use strict";
    var
        /**
         * Detect mobile browsers
         * @public
         * @return {boolean} TRUE if mobile client
         */
        isMobile = function () {
            var mobile;
            return (function (a) {
                mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
                return mobile;
            }(navigator.userAgent || navigator.vendor || window.opera));
        },

        /**
         * Init JS for all pages
         * @public
         */
        init = function () {
            // Cached vars
            var
                bodyObj = $('body'),
                menuObj = $('#menu'),
                headerObj = $('.header'),
                win$ = $(window),
                animateHeaderFrom = 10;

            /* animate header */
            function animateHeader() {
                var scrollTopPos = win$.scrollTop();
                function checkWinScrollPosition() {
                    if (scrollTopPos > animateHeaderFrom) {
                        if (!headerObj.hasClass('h-animated')) {
                            headerObj.addClass('h-animated');
                            bodyObj.addClass('b-animated');
                        }
                    } else {
                        if (headerObj.hasClass('h-animated')) {
                            headerObj.removeClass('h-animated');
                            bodyObj.removeClass('b-animated');
                        }
                    }
                }
                jQuery(window).on('scroll', function () {
                    scrollTopPos = $(this).scrollTop();
                    checkWinScrollPosition();
                });
                checkWinScrollPosition();
            }

            /* body desktop class */
            function bodyDesktopClass() {
                if (!isMobile()) {
                    bodyObj.addClass('desktop-mode');
                }
            }

            function bodyMobileClass() {
                if (isMobile()) {
                    bodyObj.addClass('mobile-mode');
                }
            }

            /* mobile menu */
            function mobileMenu() {
                if (menuObj.length) {
                    menuObj.mmenu();
                    menuObj.on("click", ".mob-menus .jq-has-drop", function (e) {
                        e.preventDefault();
                        $(this).parent("li").toggleClass('drop-open');
                    });
                }
            }

            /* header search */
            function headerSearch() {
                if (headerObj.length) {
                    headerObj.on("click", ".ht-simplemenu .jq-open-search", function (e) {
                        e.preventDefault();
                        $('.header').toggleClass('search-active');
                    });
                }
            }

            jQuery(document).ready(function () {
                animateHeader();
                bodyDesktopClass();
                bodyMobileClass();
                mobileMenu();
                headerSearch();
            });
        },

        /*
        =Image loader
        */
        il                  = {
            loader: '<div class="img-loader"></div>',
            loaderTmp: false,
            imgL: 0,
            imgC: 0,
            imgF: true,
            render: function(el, clone_el) {
                var that    = this,
                    imgs    = $('[data-src]', el),
                    page_type = [];

                if (!imgs.length) {
                    return;
                }

                if(el.is('.fwbi-content')) {
                    // expanded content
                    page_type = ['.js-main-image', '.js-thumbnails'];
                } else if(el.is('.baac-hidden-row')) {
                    // before-after content
                    page_type = ['.baac-slider-frame', '.baac-slider-tn'];
                }

                this.imgF   = true;
                this.imgC   = 0;
                this.images = $(page_type[0] + ' [data-src]', clone_el || el);
                this.thumbs = $(page_type[1] + ' [data-src]', clone_el || el);
                this.imgL   = this.images.length;
                this.loaderTmp = false;

                this.images.each(function() {
                    that.eachClone($(this));
                });

                this.thumbs.each(function() {
                    that.eachClone($(this), true);
                });

                if (clone_el) {
                    imgs.each(function() {
                        that.eachImg($(this));
                    });
                }
            },
            eachClone: function(_self, is_thumb) {
                var my_src  = _self.attr('data-src'),
                    that    = this,
                    thumb_l;

                if (is_thumb) {
                    thumb_l = $(this.loader).insertBefore(_self);
                    thumb_l.parent()
                        .addClass('load-start');
                } else {
                    if (this.imgF) {
                        this.imgF = false;
                        this.loaderTmp = $(this.loader).insertBefore(_self);
                        this.loaderTmp.parent()
                            .addClass('load-start');
                    }
                }

                _self.attr('src', my_src)
                    .removeAttr('data-src')
                    .on('load', function() {
                        var _self = $(this);

                        if (is_thumb) {
                            that.removeLoader(thumb_l);
                            _self.parent()
                                .removeClass('load-start');
                        } else {
                            that.imgC += 1;

                            if (_self.is(that.loaderTmp.next())) {
                                that.loaderTmp.parent().addClass('first-loaded');
                                that.loaderTmp.parent()
                                    .removeClass('load-start');
                            }

                            if (that.imgC === that.imgL) {
                                that.removeLoader(that.loaderTmp);
                                that.loaderTmp = false;
                            }
                        }
                    });
            },
            eachImg: function(_self) {
                var my_src  = _self.attr('data-src');

                _self.attr('src', my_src)
                    .removeAttr('data-src');
            },
            removeLoader: function(el) {
                el.parent().addClass('loaded');

                setTimeout(function() {
                    el.remove();
                }, 500);
            }
        },

        /**
         * Init placeholder plugin
         * @public
         * @param {Object} obj jQuery object
         */
        setPlaceholders = function (obj) {
            if (typeof $.fn.placeholder === 'function') {
                obj.placeholder();
            } else {
                throw new Error('$.fn.placeholder is undefined!');
            }
        },

        /**
         * Init ezMark plugin
         * @public
         * @param {Object} obj jQuery object
         */
        setEZCheckboxes = function (obj) {
            if (typeof $.fn.ezMark === 'function') {
                obj.ezMark();
            } else {
                throw new Error('$.fn.setEZCheckboxes is undefined!');
            }
        },

        /**
         * Init bx slider
         * @public
         * @param {Object} slider jQuery object
         * @param {Object} options bxSlider options
         */
        setBxSlider = function (slider, options) {
            if (typeof $.fn.bxSlider === 'function') {
                var opt = options || {};
                slider.bxSlider(opt);
            } else {
                throw new Error('$.fn.bxSlider is undefined!');
            }
        },

        /**
         * Set scrollTo links
         * @public
         * @param {Object} link jQuery object
         */
        setScrollLinks = function (link) {
            var scrollSpeed = 800;
            link.on('click', function (e) {
                e.preventDefault();
                var hrefValue = $(this).attr('href'),
                    targetObj = $(hrefValue).offset().top;
                $('html, body').animate({ scrollTop: targetObj }, scrollSpeed);
            });
        },

        /**
         * Expand hidden block in Before and After sections
         * @public
         */
        expandBeforeAfterBlock = function () {
            // VARs
            var
                beforeAndAfterWrapper = $('.before-and-after-wrapper'),
                beforeAndAfterRow = $('.baac-row', beforeAndAfterWrapper),
                beforeAfterRowItem = $('.baac-item', beforeAndAfterRow),
                beforeAndAfterOpenButton = $('.baac-more a, .baac-img a', beforeAndAfterRow),
                beforeAfterImgTrigger = $('.js-baac-image-thigger', beforeAndAfterWrapper),
                win$ = $(window),
                offsetMargin = -48,
                scrollSpeed = 400,
                animateSpeed = 300,
                debugState = false,
                animationComplited = true;
            setCloseLinkHandler(beforeAndAfterWrapper.find('.baac-link-close'));
            // Hover
            beforeAfterRowItem.hover(function () {
                var parent = $(this).parent('.baac-visible-row');
                parent.addClass('baac-visible-row-hover');
                parent.find('.baac-item').not($(this)).addClass('faded');
            }, function () {
                var parent = $(this).parent('.baac-visible-row');
                parent.removeClass('baac-visible-row-hover');
                parent.find('.baac-item').not($(this)).removeClass('faded');
            });
            // Before and After click handler
            beforeAfterImgTrigger.each(function () {
                $(this).click(function (e) {
                    e.preventDefault();
                    $(this).closest('.baac-row').find('.baac-img a[data-index="1"]').trigger('click');
                });
            });
            var imgFrame = $('.baac-slider-frame');
            imgFrame.on('click', function (e)
            {
                e.preventDefault();
                var $e = $(e.target);
                if ($e.is('img, a')) {
                    var inactiveLink = $(this).closest('.baac-slider').find('.baac-slider-tn li').filter(':not(.active)');
                    inactiveLink.find('a').trigger('click');
                }
            });
            beforeAndAfterOpenButton.each(function () {
                var _link = $(this);
                _link.on('click', function (e) {
                    e.preventDefault();
                    if (!animationComplited) {
                        return;
                    }
                    // VARs
                    var _link = $(this),
                        parentRow = _link.closest('.baac-frame').closest('.baac-row'),
                        parentRowClasses = parentRow.attr('class'),
                        isCurrentLinkHasActiveClass = parentRowClasses.indexOf('baac-row-active'),
                        parentItemClasses = _link.closest('.baac-item').attr('class'),
                        isCurrentLinkInActiveItem = parentItemClasses.indexOf('baac-item-active'),
                        sliderRow = parentRow.find('.baac-slider-holder'),
                        sliderTn = parentRow.find('.baac-slider-tn'),
                        linkIndex = _link.data('index') - 1;

                    il.render(_link.closest('.baac-frame').find('.baac-hidden-row'));

                    setTNLinksHandler(sliderTn, sliderRow);
                    // Check where the window is open
                    if (beforeAndAfterWrapper.find('.baac-row-active').length) { // Hidden window is already open
                        debug('Hidden window is already open');
                        if (-1 !== isCurrentLinkHasActiveClass) { // Link is in the open window
                            debug('Link is in the open window');
                            if (-1 === isCurrentLinkInActiveItem) { // Change active window
                                debug('Change active window');
                                parentRow.find('.baac-item').removeClass('baac-item-active');
                                parentRow.find('.baac-item').eq(linkIndex).addClass('baac-item-active');
                                swapImages(sliderRow, linkIndex);
                                swapThumbnails(sliderTn, linkIndex);
                            } else {
                                debug('Open window');
                                openWindow(_link);
                            }
                        } else { // The window is open in another location
                            debug('The window is open in another location - swap window');
                            closeWindow(_link);
                        }
                    } else { // Open new hidden window
                        debug('Open new hidden window');
                        openWindow(_link);
                    }
                });
            });

            /* Help Functions */

            /**
             * Get object offset
             * @param obj
             * @param offsetMargin
             * @returns {number}
             * @private
             */
            function getOffset(obj, offsetMargin) {
                debug('Run getOffset()');
                return obj.offset().top + offsetMargin;
            }

            /**
             * Set display:block
             * @param obj
             * @private
             */
            function setDisplayCSS(obj) {
                debug('Run setDisplayCSS()');
                obj.css('display', 'block');
            }

            /**
             * Set display:none
             * @param obj
             * @private
             */
            function setHideCSS(obj) {
                debug('Run setHideCSS()');
                obj.css('display', 'none');
            }

            /**
             * Scroll to position
             * @param element
             * @param scrollPosition
             * @param scrollSpeed
             * @param options
             * @private
             */
            function setScrollTo(element, scrollPosition, scrollSpeed, options) {
                debug('Run setScrollTo()');
                element = $('html ,body');
                element.animate({
                    scrollTop: scrollPosition
                }, scrollSpeed).promise().done(function () {
                    if (typeof options.onAfter === "function") {
                        options.onAfter();
                    }
                });
            }

            /**
             * Swap images handler
             * @param sliderRow
             * @param linkIndex
             * @private
             */
            function swapImages(sliderRow, linkIndex) {
                debug('Run swapImages()');
                var imgToHide = null;
                switch (linkIndex) {
                    case 0:
                        imgToHide = 1;
                        break;
                    case 1:
                        imgToHide = 0;
                        break;
                }
                sliderRow
                    .find('.hidden')
                    .css('display', 'none')
                    .removeClass('hidden')
                    .css('display', '');
                sliderRow.find('img').eq(imgToHide)
                    .css('display', 'none')
                    .addClass('hidden')
                    .css('display', '');
            }

            /**
             * Swap thumbnails handler
             * @param sliderTn
             * @param linkIndex
             * @private
             */
            function swapThumbnails(sliderTn, linkIndex) {
                debug('Run swapThumbnails()');
                var tnToHide = null;
                switch (linkIndex) {
                    case 0:
                        tnToHide = 1;
                        break;
                    case 1:
                        tnToHide = 0;
                        break;
                }
                sliderTn.find('li').eq(tnToHide).removeClass('active');
                sliderTn.find('li').eq(linkIndex).addClass('active');
            }

            /**
             * Swap active block
             * @param ind
             * @private
             */
            function swapActiveBlocks(ind) {
                debug('Run swapActiveBlocks()');
                beforeAndAfterWrapper.find('.baac-row-active .baac-item').removeClass('baac-item-active');
                beforeAndAfterWrapper.find('.baac-row-active .baac-item').eq(ind).addClass('baac-item-active');
            }

            /**
             * Set thumbnails link handler
             * @param sliderTn
             * @param sliderRow
             * @private
             */
            function setTNLinksHandler(sliderTn, sliderRow) {
                debug('Run setTNLinksHandler()');
                var tnLinks = sliderTn.find('ul a');
                tnLinks.each(function (ind) {
                    $(this).on('click', function (e) {
                        e.preventDefault();
                        debug('On in setTNLinksHandler');
                        if (!$(this).closest('li').hasClass('active')) {
                            swapThumbnails(sliderTn, ind);
                            swapImages(sliderRow, ind);
                            swapActiveBlocks(ind);
                        }
                    });
                });
            }

            /**
             * Set close link handler
             * @param beforeAndAfterOpenButton
             * @private
             */
            function setCloseLinkHandler(beforeAndAfterOpenButton) {
                debug('Run setCloseLinkHandler()');
                beforeAndAfterOpenButton.each(function () {
                    $(this).on('click', function (e) {
                        e.preventDefault();
                        var parentItem, parentRow, hiddenRow, sliderRow, sliderTn;
                        animationComplited = false;
                        parentRow = $(this).closest('.baac-hidden-row').closest('.baac-frame').closest('.baac-row');
                        parentItem = parentRow.find('.baac-item');
                        hiddenRow = parentRow.find('.baac-hidden-row');
                        sliderRow = parentRow.find('.baac-slider-holder');
                        sliderTn = parentRow.find('.baac-slider-tn');

                        parentRow.removeClass('baac-row-active');
                        parentItem.removeClass('baac-item-active');
                        hiddenRow.animate({
                            'height': 0
                        }, animateSpeed, function () {
                            sliderRow.find('img')
                                .removeClass('hidden')
                                .show();
                            sliderTn.find('li').removeClass('active');
                            hiddenRow.css({
                                'height' : '',
                                'display': ''
                            });
                            animationComplited = true;
                        });
                    });
                });
            }

            /**
             * Close window
             * @param link
             * @private
             */
            function closeWindow(link) {
                debug('Run closeWindow()');
                var activeVisibleRow = beforeAndAfterWrapper.find('.baac-row-active'),
                    hiddenRow = activeVisibleRow.find('.baac-hidden-row'),
                    sliderRow = activeVisibleRow.find('.baac-slider-holder'),
                    sliderTn = activeVisibleRow.find('.baac-slider-tn'),
                    parentItem = activeVisibleRow.find('.baac-item');
                if (!animationComplited) {
                    return;
                }
                animationComplited = false;
                hiddenRow.animate({
                    'height': 0
                }, animateSpeed, function () {
                    sliderRow.find('img')
                        .removeClass('hidden')
                        .show();
                    sliderTn.find('li').removeClass('active');
                    parentItem.removeClass('baac-item-active');
                    setHideCSS(hiddenRow);
                    beforeAndAfterWrapper.find('.baac-row').removeClass('baac-row-active');
                    animationComplited = true;
                    openWindow(link);
                });
            }

            /**
             * Open window
             * @param link
             * @private
             */
            function openWindow(link) {
                debug('Run openWindow()');
                var parentRow = link.closest('.baac-frame').closest('.baac-row'),
                    sliderRow = parentRow.find('.baac-slider-holder'),
                    linkIndex = link.data('index') - 1,
                    sliderTn = parentRow.find('.baac-slider-tn'),
                    parentItem = link.closest('.baac-item'),
                    hiddenRow = parentRow.find('.baac-hidden-row');
                if (!animationComplited) {
                    return;
                }
                animationComplited = false;
                parentRow.addClass('baac-row-active');
                sliderRow.find('img').not(':eq(' + linkIndex + ')').addClass('hidden');
                sliderTn.find('li').eq(linkIndex).addClass('active');
                setDisplayCSS(hiddenRow);
                setScrollTo(
                    win$,
                    getOffset(hiddenRow, offsetMargin),
                    scrollSpeed,
                    {
                        onAfter: function () {
                            var hiddenWindowH = hiddenRow.find('.baac-hidden-item').innerHeight();
                            hiddenRow.animate({
                                'height': hiddenWindowH
                            }, animateSpeed, function () {
                                hiddenRow.css('height', 'auto');
                                animationComplited = true;
                            });
                            parentItem.addClass('baac-item-active');
                        }
                    }
                );
            }

            /**
             * Debug
             * @param msg
             * @private
             */
            function debug(msg) {
                if (debugState) {
                    console.info(msg);
                }
            }

        },

        /**
         * Expand video block in testimonial section
         * @public
         */
        expandTestimonialsBlock = function () {
            // VARs
            var testimonialsHolder = $('.all-testimonials'),
                testimonialRow = $('.testimonial-row', testimonialsHolder),
                testimonialOpenButtonParent = $('.at-item', testimonialRow),
                testimonialOpenButton = $('.occc-thumb-link', testimonialOpenButtonParent),
                testimonialCloseButton = testimonialsHolder.find('.btn-close-it'),
                win$ = $(window),
                offsetMargin = -68,
                scrollSpeed = 400,
                animateSpeed = 300,
                animationComplited = true;

            setCloseLinkHandler(testimonialCloseButton);

            $(window).on('resize', function () {
                var boxModel = testimonialsHolder.find('.at-item').eq(0).css('display'),
                    active = testimonialsHolder.find('.testimonial-row-active'),
                    activeitem = active.find('.at-item-active'),
                    hiddenRow = active.find('.testimonial-hidden-row');
                if (boxModel !== 'block') {
                    // desctop
                    if (active.length) {
                        var allItems = active.find('.at-item'),
                            allItemsLength = allItems.length;
                        if (!allItems.eq(allItemsLength - 1).next('.testimonial-hidden-row').length) {
                            active.find('.frame').append(hiddenRow);
                        }
                    }
                } else {
                    // mobile
                    if (activeitem.length && !activeitem.next('.testimonial-hidden-row').length) {
                        hiddenRow.insertAfter(activeitem);
                    }
                }
            });

            testimonialOpenButton.each(function () {
                var _link = $(this);
                _link.on('click', function (e) {
                    e.preventDefault();
                    if (!animationComplited) {
                        return;
                    }
                    var mode, boxModel = $(this).closest('.at-item').css('display'); // inline-block/block
                    if (boxModel !== 'block') {
                        mode = 2; // desctop
                    } else {
                        mode = 1; // mobile
                    }
                    // VARs
                    var _link = $(this),
                        parentRow = _link.closest('.testimonial-row'),
                        linkIndex = _link.data('open-item'),
                        hiddenRow = parentRow.find('.testimonial-hidden-row'),
                        parentItem = _link.closest('.at-item'),
                        parentRowClasses = parentRow.attr('class'),
                        isCurrentParentHasActiveClass = parentRowClasses.indexOf('testimonial-row-active'),
                        isCurrentLinkHasActiveParent = _link.closest(testimonialOpenButtonParent).attr('class').indexOf('at-item-active');

                    if (testimonialsHolder.find('.testimonial-row-active').length) {
                        if (-1 !== isCurrentParentHasActiveClass) { // Link is in the open window
                            if (-1 === isCurrentLinkHasActiveParent) { // Change active window
                                if (mode === 1) {
                                    closeWindow(_link);
                                } else {
                                    parentRow.find('.at-item').removeClass('at-item-active');
                                    _link.closest('.at-item').addClass('at-item-active');
                                    var iFrame = parentRow.find('.tr-item').filter(':visible').find('.video-box-inner iframe');
                                    iFrame.attr('src', iFrame.attr('src'));
                                    parentRow.find('.tr-item').filter(':visible').fadeOut(100, function () {
                                        parentRow.find('.tr-item').filter('[data-item="' + linkIndex + '"]').fadeIn();
                                    });
                                }
                            } else {
                                openWindow(_link, parentRow, hiddenRow, parentItem, linkIndex, mode);
                            }
                        } else { // The window is open in another location
                            var iFrame = $('.testimonial-hidden-row').filter(':visible').find('.tr-item').filter(':visible').find('.video-box-inner iframe');
                            iFrame.attr('src', iFrame.attr('src'));
                            closeWindow(_link);
                        }
                    } else {
                        openWindow(_link, parentRow, hiddenRow, parentItem, linkIndex, mode);
                    }
                });
            });

            /**
             * Set display:block
             * @param obj
             * @private

            function setDisplayCSS(obj) {
                obj.css('display', 'block');
            }
             */

            /**
             * Set display:none
             * @param obj
             * @private
             */
            function setHideCSS(obj) {
                obj.css('display', 'none');
            }

            /**
             * Scroll to position
             * @param element
             * @param scrollPosition
             * @param scrollSpeed
             * @param options
             * @private
             */
            function setScrollTo(element, scrollPosition, scrollSpeed, options) {
                element = $('html ,body');
                element.animate({
                    scrollTop: scrollPosition
                }, scrollSpeed).promise().done(function () {
                    if (typeof options.onAfter === "function") {
                        options.onAfter();
                    }
                });
            }

            /**
             * Get object offset
             * @param obj
             * @param offsetMargin
             * @returns {number}
             * @private
             */
            function getOffset(obj, offsetMargin) {
                return obj.offset().top + offsetMargin;
            }

            /**
             * Set close link handler
             * @param {Object} closeBtn
             * @private
             */
            function setCloseLinkHandler(closeBtn) {
                closeBtn.each(function () {
                    $(this).on('click', function (e) {
                        e.preventDefault();
                        var parentItem, parentRow, hiddenRow;
                        animationComplited = false;
                        parentRow = $(this).closest('.testimonial-row');
                        parentItem = parentRow.find('.at-item');
                        hiddenRow = parentRow.find('.testimonial-hidden-row');
                        parentRow.removeClass('testimonial-row-active');

                        hiddenRow.animate({
                            'height': 0
                        }, animateSpeed, function () {
                            var iFrame = hiddenRow.find('.tr-item').filter(':visible').find('.video-box-inner iframe');
                            iFrame.attr('src', iFrame.attr('src'));
                            hiddenRow.find('.tr-item').css('display', '');
                            hiddenRow.css({
                                'height' : '',
                                'display': ''
                            });
                            parentItem.removeClass('at-item-active');
                            animationComplited = true;
                        });
                    });
                });
            }

            /**
             * Close window
             * @param link
             * @private
             */
            function closeWindow(link) {
                var activeVisibleRow = testimonialsHolder.find('.testimonial-row-active'),
                    hiddenRow = activeVisibleRow.find('.testimonial-hidden-row'),
                    parentItem = activeVisibleRow.find('.at-item');
                if (!animationComplited) {
                    return;
                }
                animationComplited = false;
                hiddenRow.animate({
                    'height': 0
                }, animateSpeed, function () {
                    parentItem.removeClass('at-item-active');
                    setHideCSS(hiddenRow);
                    setHideCSS(hiddenRow.find('.tr-item'));
                    activeVisibleRow.removeClass('testimonial-row-active');
                    animationComplited = true;
                    var mode, boxModel = link.closest('.at-item').css('display'); // inline-block/block
                    if (boxModel !== 'block') {
                        mode = 2; // desctop
                    } else {
                        mode = 1; // mobile
                    }
                    var parentRowLink = link.closest('.testimonial-row'),
                        linkIndexLink = link.data('open-item'),
                        hiddenRowLink = parentRowLink.find('.testimonial-hidden-row'),
                        parentItemLink = link.closest('.at-item');
                    openWindow(link, parentRowLink, hiddenRowLink, parentItemLink, linkIndexLink, mode);
                });
            }

            /**
             * Open window
             * @param link
             * @param parentRow
             * @param hiddenRow
             * @param parentItem
             * @param linkIndex
             * @param mode
             * @private
             */
            function openWindow(link, parentRow, hiddenRow, parentItem, linkIndex, mode) {
                if (!animationComplited) {
                    return;
                }
                if (mode === 1) {
                    hiddenRow.insertAfter(parentItem);
                }
                animationComplited = false;
                parentRow.addClass('testimonial-row-active');
                hiddenRow.show(0, function () {
                    setScrollTo(
                        win$,
                        getOffset(hiddenRow, offsetMargin),
                        scrollSpeed,
                        {
                            onAfter: function () {
                                if (!hiddenRow.find('.tr-item').filter('[data-item="' + linkIndex + '"]').is(':visible')) {
                                    hiddenRow.find('.tr-item').filter('[data-item="' + linkIndex + '"]').show(0, function () {
                                        var hiddenWindowH = hiddenRow.find('.frame').innerHeight();
                                        hiddenRow.animate({
                                            'height': hiddenWindowH
                                        }, animateSpeed, function () {
                                            hiddenRow.css('height', 'auto');
                                            animationComplited = true;
                                        });
                                        parentItem.addClass('at-item-active');
                                    });
                                } else {
                                    animationComplited = true;
                                }
                            }
                        }
                    );
                });
            }

        },

        /**
         * Expand video block in testimonial section
         */
        expandVideosBlock = function () {
            // VARs
            var testimonialsHolder = $('.occ-all'),
                testimonialRow = $('.occ-columns', testimonialsHolder),
                testimonialOpenButtonParent = $('.occc-column', testimonialRow),
                testimonialOpenButton = $('.occc-thumb-link', testimonialOpenButtonParent),
                testimonialCloseButton = testimonialsHolder.find('.btn-close-it'),
                win$ = $(window),
                offsetMargin = -68,
                scrollSpeed = 400,
                animateSpeed = 300,
                animationComplited = true;

            setCloseLinkHandler(testimonialCloseButton);

            $(window).on('resize', function () {
                var boxModel = testimonialsHolder.find('.occc-column').eq(0).css('float'),
                    active = testimonialsHolder.find('.occ-columns-active'),
                    activeitem = active.find('.occc-column-active'),
                    hiddenRow = active.find('.testimonial-hidden-row');
                if (boxModel !== 'none') {
                    // desctop
                    var allItems = testimonialsHolder.find('.occc-column'),
                        allItemsSize = allItems.length;
                    if (!allItems.eq(allItemsSize - 1).next('.testimonial-hidden-row').length) {
                        active.append(hiddenRow);
                    }
                } else {
                    // mobile
                    if (activeitem.length && !activeitem.next('.testimonial-hidden-row').length) {
                        hiddenRow.insertAfter(activeitem);
                    }
                }
            });

            testimonialOpenButton.each(function () {
                var _link = $(this);
                _link.on('click', function (e) {
                    e.preventDefault();
                    if (!animationComplited) {
                        return;
                    }
                    var mode, boxModel = $(this).closest('.occc-column').css('float'); // inline-block/block
                    if (boxModel !== 'none') {
                        mode = 2; // desctop
                    } else {
                        mode = 1; // mobile
                    }
                    // VARs
                    var _link = $(this),
                        parentRow = _link.closest('.occ-columns'),
                        linkIndex = _link.data('open-item'),
                        hiddenRow = parentRow.find('.testimonial-hidden-row'),
                        parentItem = _link.closest('.occc-column'),
                        parentRowClasses = parentRow.attr('class'),
                        isCurrentParentHasActiveClass = parentRowClasses.indexOf('occ-columns-active'),
                        isCurrentLinkHasActiveParent = _link.closest(testimonialOpenButtonParent).attr('class').indexOf('occc-column-active');

                    if (testimonialsHolder.find('.occ-columns-active').length) {
                        if (-1 !== isCurrentParentHasActiveClass) { // Link is in the open window
                            if (-1 === isCurrentLinkHasActiveParent) { // Change active window
                                if (mode === 1) {
                                    closeWindow(_link);
                                } else {
                                    var iFrame = parentRow.find('.tr-item').filter(':visible').find('.video-box-inner iframe');
                                    parentRow.find('.occc-column').removeClass('occc-column-active');
                                    _link.closest('.occc-column').addClass('occc-column-active');
                                    iFrame.attr('src', iFrame.attr('src'));
                                    parentRow.find('.tr-item').filter(':visible').fadeOut(100, function () {
                                        parentRow.find('.tr-item').filter('[data-item="' + linkIndex + '"]').fadeIn();
                                    });
                                }
                            } else {
                                openWindow(_link, parentRow, hiddenRow, parentItem, linkIndex, mode);
                            }
                        } else { // The window is open in another location
                            closeWindow(_link);
                        }
                    } else {
                        openWindow(_link, parentRow, hiddenRow, parentItem, linkIndex, mode);
                    }
                });
            });

            /**
             * Set display:block
             *
             * @param obj
             * @private

            function setDisplayCSS(obj) {
                obj.css('display', 'block');
            }
             */

            /**
             * Set display:none
             *
             * @param obj
             * @private
             */
            function setHideCSS(obj) {
                obj.css('display', 'none');
            }

            /**
             * Scroll to position
             *
             * @param element
             * @param scrollPosition
             * @param scrollSpeed
             * @param options
             * @private
             */
            function setScrollTo(element, scrollPosition, scrollSpeed, options) {
                element = $('html ,body');
                element.animate({
                    scrollTop: scrollPosition
                }, scrollSpeed).promise().done(function () {
                        if (typeof options.onAfter === "function") {
                            options.onAfter();
                        }
                    });
            }

            /**
             * Get object offset
             *
             * @param obj
             * @param offsetMargin
             * @returns {number}
             * @private
             */
            function getOffset(obj, offsetMargin) {
                return obj.offset().top + offsetMargin;
            }

            /**
             * Set close link handler
             *
             * @param closeBtn
             * @private
             */
            function setCloseLinkHandler(closeBtn) {
                closeBtn.each(function () {
                    $(this).on('click', function (e) {
                        e.preventDefault();
                        var parentItem, parentRow, hiddenRow;
                        animationComplited = false;
                        parentRow = $(this).closest('.occ-columns');
                        parentItem = parentRow.find('.occc-column');
                        hiddenRow = parentRow.find('.testimonial-hidden-row');
                        parentRow.removeClass('occ-columns-active');

                        hiddenRow.animate({
                            'height': 0
                        }, animateSpeed, function () {
                            var iFrame = hiddenRow.find('.tr-item').filter(':visible').find('.video-box-inner iframe');
                            iFrame.attr('src', iFrame.attr('src'));
                            hiddenRow.find('.tr-item').css('display', '');
                            hiddenRow.css({
                                'height' : '',
                                'display': ''
                            });
                            parentItem.removeClass('occc-column-active');
                            animationComplited = true;
                        });
                    });
                });
            }

            /**
             * Close window
             *
             * @param link
             * @private
             */
            function closeWindow(link) {
                var activeVisibleRow = testimonialsHolder.find('.occ-columns-active'),
                    hiddenRow = activeVisibleRow.find('.testimonial-hidden-row'),
                    parentItem = activeVisibleRow.find('.occc-column');
                if (!animationComplited) {
                    return;
                }
                animationComplited = false;
                hiddenRow.animate({
                    'height': 0
                }, animateSpeed, function () {
                    parentItem.removeClass('occc-column-active');
                    setHideCSS(hiddenRow);
                    setHideCSS(hiddenRow.find('.tr-item'));
                    activeVisibleRow.removeClass('occ-columns-active');
                    animationComplited = true;
                    var mode, boxModel = link.closest('.occc-column').css('float'); // inline-block/block
                    if (boxModel !== 'none') {
                        mode = 2; // desctop
                    } else {
                        mode = 1; // mobile
                    }
                    var parentRowLink = link.closest('.occ-columns'),
                        linkIndexLink = link.data('open-item'),
                        hiddenRowLink = parentRowLink.find('.testimonial-hidden-row'),
                        parentItemLink = link.closest('.occc-column');
                    openWindow(link, parentRowLink, hiddenRowLink, parentItemLink, linkIndexLink, mode);
                });
            }

            /**
             * Open window
             * @param link
             * @param parentRow
             * @param hiddenRow
             * @param parentItem
             * @param linkIndex
             * @param mode
             * @private
             */
            function openWindow(link, parentRow, hiddenRow, parentItem, linkIndex, mode) {
                if (!animationComplited) {
                    return;
                }
                if (mode === 1) {
                    hiddenRow.insertAfter(parentItem);
                }
                animationComplited = false;
                parentRow.addClass('occ-columns-active');
                hiddenRow.show(0, function () {
                    setScrollTo(
                        win$,
                        getOffset(hiddenRow, offsetMargin),
                        scrollSpeed,
                        {
                            onAfter: function () {
                                if (!hiddenRow.find('.tr-item').filter('[data-item="' + linkIndex + '"]').is(':visible')) {
                                    hiddenRow.find('.tr-item').filter('[data-item="' + linkIndex + '"]').show(0, function () {
                                        var hiddenWindowH = hiddenRow.find('.frame').innerHeight();
                                        hiddenRow.animate({
                                            'height': hiddenWindowH
                                        }, animateSpeed, function () {
                                            hiddenRow.css('height', 'auto');
                                            animationComplited = true;
                                        });
                                        parentItem.addClass('occc-column-active');
                                    });
                                } else {
                                    animationComplited = true;
                                }
                            }
                        }
                    );
                });
            }

        },
        /**
         * Expand testimonials text
         * @public
         */
        expandTestimonials = function () {
            var moreLinkParent = $('.testimonial');
            if (moreLinkParent.length) {
                moreLinkParent.each(function () {
                    var moreContainer = $(this).find('.view-more-container'),
                        detailsContainer = $(this).find('.details'),
                        lessContainer = $(this).find('.re-collapse');

                    moreContainer.find('a').on('click', function (eo) {
                        var parentRow = $(this).closest('.frame'),
                            parentItems = parentRow.find('.at-item');
                        eo.preventDefault();
                        moreContainer.hide(0, function () {
                            detailsContainer.css('display', 'inline');
                            parentItems.css('height', '');
                            var testimonialsBlocks$EQ = new EqualBlocksHeight(parentItems, {
                                splitBy     : 2,
                                isResizable : true,
                                isFullLoaded: true,
                                isBoxSized  : true
                            });
                        });
                    });

                    lessContainer.find('a').on('click', function (eo) {
                        var parentRow = $(this).closest('.frame'),
                            parentItems = parentRow.find('.at-item');
                        eo.preventDefault();
                        detailsContainer.hide(0, function () {
                            moreContainer.show(0, function () {
                                parentItems.css('height', '');
                                var testimonialsBlocks$EQ = new EqualBlocksHeight(parentItems, {
                                    splitBy     : 2,
                                    isResizable : true,
                                    isFullLoaded: true,
                                    isBoxSized  : true
                                });
                            });
                        });
                    });
                });
            }
        },

        expandPortfolioBlocks = function() {

            var $_featuredWorkBlock = $('.js-featured-work-block'),
                $_scrollObject      = $('html, body'),
                $_wrapper           = $('.wrapper'),
                SCROLL_SPEED        = 400,
                SLIDE_SPEED         = 300,
                OFFSET_TOP          = -68;

            //function for set size mode: mode-1(mobile mode), mode-2(tablet mode), mode-3(desktop mode),
            function setSizeMode() {
                var windowSize = $(window).width();
                if (windowSize < 480) {
                    $_featuredWorkBlock.attr('data-mode', 'mode-1');
                }
                else if (windowSize > 480 && windowSize < 769) {
                    $_featuredWorkBlock.attr('data-mode', 'mode-2');
                }
                else {
                    $_featuredWorkBlock.attr('data-mode', 'mode-3');
                }
            }

            // function for show expanded
            function showExpandedObj(object) {
                var $_expandedMode = $('.js-featured-work-block .expanded-mode'),
                    scrollTopPosition = $_expandedMode.offset().top,
                    checkVal;
                $_expandedMode.addClass('d-none').removeAttr('style');
                $_scrollObject.animate({ scrollTop: scrollTopPosition + OFFSET_TOP }, SCROLL_SPEED, function () {
                    $_expandedMode.slideDown(SLIDE_SPEED, function(){
                        if(object.attr('data-video-type') === 'wistia') {
                            if(!checkVal){
                                var qtyNumber = object.attr('data-qty-number') * 1;
                                $.ajax({
                                    type: "POST",
                                    url: '/wistia-video-storage',
                                    dataType: "html"
                                })
                                .done(function( data ) {
                                    $('.js-wistia-clone-obj .js-vbi-wistia').html($(data)[qtyNumber]);
                                    Wistia.embed(object.attr('data-wistia-id'), {
                                        videoFoam: true
                                    });
                                    $('.js-wistia-clone-obj .js-img-loader-wisty').remove();
                                    $('.js-wistia-clone-obj .js-vbi-wistia').removeAttr('style');
                                });
                                checkVal = true;
                            }
                        }
                    });
                    object.addClass('active-lnk');
                });
            }

            //function for reorder expanded mode
            function reorderExpanded() {
                //expanded Object
                var expandedModeObj = $('.js-featured-work-block .expanded-mode'),
                    featuredWorkBlock = $('.js-featured-work-block');
                if (expandedModeObj.length !== 0) {
                    //init vars
                    var expandedBlockPosition = expandedModeObj.attr('data-block-position'),
                        blockMode = featuredWorkBlock.attr('data-mode'),
                        expandedElemPosition = +expandedModeObj.attr('data-elem-number'),
                        currentActiveElem,
                        blockContainer,
                        previousMode,
                        balanceNumber;
                    //check block position = top/bottom
                    if (expandedBlockPosition === 'f') {
                        blockContainer = $('.js-featured-work-block-top');
                    }
                    else {
                        blockContainer = $('.js-featured-work-block-bottom');
                    }
                    //get elements length of parent block (top/bottom)
                    var commonLength = $('.fwb-item', blockContainer).length;
                    //behavior for desktop mode
                    if (blockMode === 'mode-3') {
                        //get previous mode (before resize)
                        previousMode = $_wrapper.data('blockMode');
                        if (previousMode === 'mode-3') {
                            return false;
                        }
                        else if (previousMode === 'mode-2') {
                            //get balance number for elements order
                            balanceNumber = expandedElemPosition % 3;
                            if (balanceNumber === 1) {
                                if ((commonLength - 1) === expandedElemPosition) { //if we have the penultimate element
                                    currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition);
                                    expandedModeObj.insertAfter($(currentActiveElem));
                                }
                                else {
                                    currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition + 1);
                                    expandedModeObj.insertAfter($(currentActiveElem));
                                }
                            }
                            else if (balanceNumber === 2) {
                                currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition);
                                expandedModeObj.insertAfter($(currentActiveElem));
                            }
                            else {
                                currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition - 1);
                                expandedModeObj.insertAfter($(currentActiveElem));
                            }
                        }
                        //save new data mode
                        $_wrapper.data('blockMode', 'mode-3');
                    }
                    else if (blockMode === 'mode-2') {
                        //get previous mode (before resize)
                        previousMode = $_wrapper.data('blockMode');
                        if (previousMode === 'mode-3') {
                            //get balance number for elements order
                            balanceNumber = expandedElemPosition % 4;
                            if (balanceNumber === 1) {
                                currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition);
                                expandedModeObj.insertAfter($(currentActiveElem));
                            }
                            else if (balanceNumber === 2) {
                                currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition - 1);
                                expandedModeObj.insertAfter($(currentActiveElem));
                            }
                            else if (balanceNumber === 3) {
                                currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition);
                                expandedModeObj.insertAfter($(currentActiveElem));
                            }
                            else {
                                currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition - 1);
                                expandedModeObj.insertAfter($(currentActiveElem));
                            }
                        }
                        else if (previousMode === 'mode-2') {
                            return false;
                        }
                        else {
                            //get balance number for elements order
                            balanceNumber = expandedElemPosition % 2;
                            if (((commonLength - 1) === expandedElemPosition) && balanceNumber !== 1) { //if we have the penultimate element
                                currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition - 1);
                                expandedModeObj.insertAfter($(currentActiveElem));
                            }
                            else {
                                if (balanceNumber === 1) {
                                    currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition);
                                    expandedModeObj.insertAfter($(currentActiveElem));
                                }
                                else {
                                    currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition - 1);
                                    expandedModeObj.insertAfter($(currentActiveElem));
                                }
                            }
                        }
                        //save new data mode
                        $_wrapper.data('blockMode', 'mode-2');
                    }
                    else {
                        currentActiveElem = $('.fwb-item', blockContainer).eq(expandedElemPosition - 1);
                        expandedModeObj.insertAfter($(currentActiveElem));
                        $_wrapper.data('blockMode', 'mode-1');
                    }
                }
            }

            //function for each expanded mode
            function expandedMode(object, blockContainer, elemNumber, hiddenExpandedObj, blocksQty, blockMode, mode3SecondElem, mode3FirstElem, mode2FirstElem, blockPosition) {

                var videoContainer = $('.fwbi-text', hiddenExpandedObj),
                    balanceNumber,
                    expContentObjHTML = videoContainer.clone(true);

                //render images
                il.render(hiddenExpandedObj, expContentObjHTML);

                //check if we have wistia video type. Add necessary class to HTML clone object
                if(videoContainer.attr('data-video-type') === 'wistia'){
                    expContentObjHTML.addClass('js-wistia-clone-obj');
                }

                //added expanded Mode
                if (blockMode === 'mode-3') {
                    if (mode3SecondElem && elemNumber === blocksQty) {
                        $('.fwb-item', blockContainer).eq(elemNumber - 1).after('<div style="position:absolute; visibility:hidden;" data-block-position="' + blockPosition + '" data-elem-number="' + elemNumber + '" class="expanded-mode"></div>');
                        expContentObjHTML.appendTo('.js-featured-work-block .expanded-mode');
                        showExpandedObj(object);
                    }
                    else if (mode3SecondElem && elemNumber === blocksQty - 1) {
                        $('.fwb-item', blockContainer).eq(elemNumber).after('<div style="position:absolute; visibility:hidden;" data-block-position="' + blockPosition + '" data-elem-number="' + elemNumber + '" class="expanded-mode"></div>');
                        expContentObjHTML.appendTo('.js-featured-work-block .expanded-mode');
                        showExpandedObj(object);
                    }
                    else if (mode3FirstElem && elemNumber === blocksQty) {
                        $('.fwb-item', blockContainer).eq(elemNumber - 1).after('<div style="position:absolute; visibility:hidden;" data-block-position="' + blockPosition + '" data-elem-number="' + elemNumber + '" class="expanded-mode"></div>');
                        expContentObjHTML.appendTo('.js-featured-work-block .expanded-mode');
                        showExpandedObj(object);
                    }
                    else {
                        balanceNumber = elemNumber % 3;
                        if (balanceNumber === 0) {
                            $('.fwb-item', blockContainer).eq(elemNumber - 1).after('<div style="position:absolute; visibility:hidden;" data-block-position="' + blockPosition + '" data-elem-number="' + elemNumber + '" class="expanded-mode"></div>');
                            expContentObjHTML.appendTo('.js-featured-work-block .expanded-mode');
                            showExpandedObj(object);
                        }
                        else if (balanceNumber === 2) {
                            $('.fwb-item', blockContainer).eq(elemNumber).after('<div style="position:absolute; visibility:hidden;" data-block-position="' + blockPosition + '" data-elem-number="' + elemNumber + '" class="expanded-mode"></div>');
                            expContentObjHTML.appendTo('.js-featured-work-block .expanded-mode');
                            showExpandedObj(object);
                        }
                        else {
                            $('.fwb-item', blockContainer).eq(elemNumber + 1).after('<div style="position:absolute; visibility:hidden;" data-block-position="' + blockPosition + '" data-elem-number="' + elemNumber + '" class="expanded-mode"></div>');
                            expContentObjHTML.appendTo('.js-featured-work-block .expanded-mode');
                            showExpandedObj(object);
                        }
                    }
                }
                else if (blockMode === 'mode-2') {
                    if (mode2FirstElem && elemNumber === blocksQty) {
                        $('.fwb-item', blockContainer).eq(elemNumber - 1).after('<div style="position:absolute; visibility:hidden;" data-block-position="' + blockPosition + '" data-elem-number="' + elemNumber + '" class="expanded-mode"></div>');
                        expContentObjHTML.appendTo('.js-featured-work-block .expanded-mode');
                        showExpandedObj(object);
                    }
                    else {
                        balanceNumber = elemNumber % 2;

                        if (balanceNumber === 0) {
                            $('.fwb-item', blockContainer).eq(elemNumber - 1).after('<div style="position:absolute; visibility:hidden;" data-block-position="' + blockPosition + '" data-elem-number="' + elemNumber + '" class="expanded-mode"></div>');
                            expContentObjHTML.appendTo('.js-featured-work-block .expanded-mode');
                            showExpandedObj(object);
                        }
                        else if (balanceNumber === 1) {
                            $('.fwb-item', blockContainer).eq(elemNumber).after('<div style="position:absolute; visibility:hidden;" data-block-position="' + blockPosition + '" data-elem-number="' + elemNumber + '" class="expanded-mode"></div>');
                            expContentObjHTML.appendTo('.js-featured-work-block .expanded-mode');
                            showExpandedObj(object);
                        }
                    }
                }
                else {
                    $('.fwb-item', blockContainer).eq(elemNumber - 1).after('<div style="position:absolute; visibility:hidden;" data-block-position="' + blockPosition + '" data-elem-number="' + elemNumber + '" class="expanded-mode"></div>');
                    expContentObjHTML.appendTo('.js-featured-work-block .expanded-mode');
                    showExpandedObj(object);
                }
            }

            // check hash
            function checkLocationHash() {
                var hash = window.location.hash;
                if (hash !== '') {
                    var elId = hash.replace('#', '');
                    var element = $('a[data-hash-id="'+elId+'"]');
                    if(element.length && !element.hasClass('active-lnk')) {
                        element.trigger('click');
                    }
                }
            }

            // add hash
            function addHash(link) {
                var id = link.data('hash-id');
                if (typeof id !== 'undefined' && id !== '') {
                    window.location.hash = id;
                }
            }

            function initLayout() {
                setSizeMode();
                $('.wrapper').data('blockMode', $('.featured-work-block').attr('data-mode'));
            }

            initLayout();

            //expanded simple gallery
            $('.js-ec-gallery .js-thumbnails a').on('click', function (e) {
                e.preventDefault();
                var _self = $(this),
                    currentClickLnkEq = _self.index(),
                    parentNode = _self.parents('.js-ec-gallery');
                $('.js-thumbnails a', parentNode).removeClass('active');
                $('.js-main-image img', parentNode).removeAttr('style');
                _self.addClass('active');
                $('.js-main-image img', parentNode).eq(currentClickLnkEq).show().animate({ opacity: 1}, 600);
            });

            function swapGalleryImages()
            {
                var mainImageBox    = $('.js-main-image');

                mainImageBox.on('click', function (e)
                {
                    e.preventDefault();
                    var parentBox  = $(this).closest('.js-ec-gallery'),
                        tnLinks    = parentBox.find('.js-thumbnails a'),
                        tnLinksLen = tnLinks.length,
                        $e         = $(e.target);

                    if ($e.is('img')) {
                        var nextImage = $(e.target).next('img'),
                            nextImageIndex = $e.index();

                        if (nextImage.length) {
                            $e.hide(0, function ()
                            {
                                $e.css('opacity', 0);
                                nextImage.css('opacity', 1);
                                nextImage.show();
                            });
                        } else {
                            nextImage = $(this).find('img').eq(0);
                            $e.hide(0, function ()
                            {
                                $e.css('opacity', 0);
                                nextImage.css('opacity', 1);
                                nextImage.show();
                                nextImageIndex = -1;
                            });
                        }

                        tnLinks.removeClass('active');
                        tnLinks.eq(nextImageIndex + 1).addClass('active');

                    } else if($e.is('a')) {
                        var parent = $e.closest('.js-main-image'),
                            activeImage = parent.find('img').filter(':visible'),
                            nextImage = activeImage.next('img'),
                            prevImage = activeImage.prev('img'),
                            nextImageIndex = activeImage.index();

                        if ($e.hasClass('ec-control-prev')) {
                            if (prevImage.length) {
                                activeImage.hide(0, function ()
                                {
                                    activeImage.css('opacity', 0);
                                    prevImage.css('opacity', 1);
                                    prevImage.show();
                                });
                            } else {
                                prevImage = parent.find('img').eq(tnLinksLen - 1);
                                activeImage.hide(0, function ()
                                {
                                    activeImage.css('opacity', 0);
                                    prevImage.css('opacity', 1);
                                    prevImage.show();
                                    nextImageIndex = tnLinksLen;
                                });
                            }

                            tnLinks.removeClass('active');
                            tnLinks.eq(nextImageIndex - 1).addClass('active');

                        } else if ($e.hasClass('ec-control-next')) {
                            if (nextImage.length) {
                                activeImage.hide(0, function ()
                                {
                                    activeImage.css('opacity', 0);
                                    nextImage.css('opacity', 1);
                                    nextImage.show();
                                });
                            } else {
                                nextImage = parent.find('img').eq(0);
                                activeImage.hide(0, function ()
                                {
                                    activeImage.css('opacity', 0);
                                    nextImage.css('opacity', 1);
                                    nextImage.show();
                                    nextImageIndex = -1;
                                });
                            }

                            tnLinks.removeClass('active');
                            tnLinks.eq(nextImageIndex + 1).addClass('active');
                        }
                    }
                });
            }

            swapGalleryImages();

            //window load event
            $(window).on('load', function () {
                checkLocationHash();
            });

            //window resize event
            $(window).on('resize', function () {
                var expandedModeObj = $('.js-featured-work-block .expanded-mode');
                setSizeMode();

                //remove expanded mode when we resize window on mobile
                if(!BFM.isMobile()){
                    reorderExpanded();
                }

            });

            //close links for each expanded mode
            $('.fwbi-close').on('click', function (e) {
                e.preventDefault();
                //remove expanded mode
                $('.js-fwbi-lnk').removeClass('active-lnk');
                $('.js-featured-work-block .expanded-mode').slideUp('300', function () {
                    $(this).remove();
                    if ( window.history && window.history.pushState ) {
                        history.pushState('', document.title, window.location.pathname);
                    }
                });
            });

            //click event for each image
            $('.js-fwbi-lnk').on('click', function (e) {
                e.preventDefault();
                var clickObj = $(this),
                    hiddenExpandedObj = clickObj.next(),
                    iDValue = hiddenExpandedObj.attr('id'),
                    elemNumber = +iDValue.substr(5),
                    blockPos = iDValue.substr(0, 1),
                    blockContainer,
                    blockMode = $('.js-featured-work-block').attr('data-mode'),
                    mode3SecondElem,
                    mode3FirstElem,
                    mode2FirstElem,
                    blockPosition,
                    expandedModeObj = $('.js-featured-work-block .expanded-mode');

                addHash($(this));

                $('.js-fwbi-lnk').removeClass('active-lnk');
                //get position of parent block
                if (blockPos === 'f') {
                    blockPosition = 'f';
                    blockContainer = $('.js-featured-work-block-top');
                    var topBlocksQty = $('.js-featured-work-block-top .fwb-item').length;

                    //get values for insert expanded mode in future
                    if (blockMode === 'mode-3') {
                        if (topBlocksQty % 3 === 2) {
                            mode3SecondElem = true;
                        }
                        else if (topBlocksQty % 3 === 1) {
                            mode3FirstElem = true;
                        }
                    }
                    else if (blockMode === 'mode-2') {
                        if (topBlocksQty % 2 === 1) {
                            mode2FirstElem = true;
                        }
                    }

                    if (expandedModeObj.length > 0) {
                        expandedModeObj.slideUp('300', function () {
                            $(this).remove();
                            expandedMode(clickObj, blockContainer, elemNumber, hiddenExpandedObj, topBlocksQty, blockMode, mode3SecondElem, mode3FirstElem, mode2FirstElem, blockPosition);
                        });
                    }
                    else {
                        expandedMode(clickObj, blockContainer, elemNumber, hiddenExpandedObj, topBlocksQty, blockMode, mode3SecondElem, mode3FirstElem, mode2FirstElem, blockPosition);
                    }
                }
                else {
                    blockPosition = 's';
                    blockContainer = $('.js-featured-work-block-bottom');
                    var bottomBlocksQty = $('.js-featured-work-block-bottom .fwb-item').length;
                    //get values for insert expanded mode in future
                    if (blockMode === 'mode-3') {
                        if (bottomBlocksQty % 3 === 2) {
                            mode3SecondElem = true;
                        }
                        else if (bottomBlocksQty % 3 === 1) {
                            mode3FirstElem = true;
                        }
                    }
                    else if (blockMode === 'mode-2') {
                        if (bottomBlocksQty % 2 === 1) {
                            mode2FirstElem = true;
                        }
                    }
                    if (expandedModeObj.length > 0) {
                        expandedModeObj.slideUp('300', function () {
                            $(this).remove();
                            expandedMode(clickObj, blockContainer, elemNumber, hiddenExpandedObj, bottomBlocksQty, blockMode, mode3SecondElem, mode3FirstElem, mode2FirstElem, blockPosition);
                        });
                    }
                    else {
                        expandedMode(clickObj, blockContainer, elemNumber, hiddenExpandedObj, bottomBlocksQty, blockMode, mode3SecondElem, mode3FirstElem, mode2FirstElem, blockPosition);
                    }
                }
            });

        },

        expandDemoVideoBlock = function() {
            var $_PARENT_BOX = $('.js-demo-video-holder'),
                $_HIDDEN_CONTENT = $_PARENT_BOX.find('.demo-video-box'),
                $_HIDDEN_CONTENT_CHILD = $_HIDDEN_CONTENT.find('.fwbi-text'),
                $_OPEN_BTN = $_PARENT_BOX.find('.js-open-video-box'),
                $_CLOSE_BTN = $_PARENT_BOX.find('.js-fwbi-close'),
                $_SCROLL_ELMS = $('html ,body'),
                $_IFRAME = $_HIDDEN_CONTENT_CHILD.find('iframe'),
                SCROLL_OFFSET = -68,
                SCROLL_SPEED = 400,
                ANIM_SPEED = 400,
                $_content_holder = $('.drb-main-content'),
                $_hidden_mobile = $_content_holder.find('.hide-from-mobile'),
                $_expanded_mode = $('.demo-video-box'),
                $_mobile_container = $('.mobile-container'),
                animated = false;

            function getOffset(obj, offsetMargin) {
                return obj.offset().top + offsetMargin;
            }

            function checkExpandedModePosition() {
                if ($_hidden_mobile.is(':visible')) {
                    if (!$_mobile_container.next('.demo-video-box').length) {
                        $_expanded_mode.insertAfter($_mobile_container);
                    }
                } else {
                    if (!$_content_holder.next('.demo-video-box').length) {
                        $_expanded_mode.insertAfter($_content_holder);
                    }
                }
            }

            checkExpandedModePosition();

            $(window).on('resize', function () {
                checkExpandedModePosition();
            });

            $_OPEN_BTN.on('click', function (e) {
                e.preventDefault();
                if (!$(this).hasClass('opened')) {
                    if(!animated) {
                        $_HIDDEN_CONTENT.show(0, function() {
                            animated = true;
                            var scroll_position = getOffset($_HIDDEN_CONTENT, SCROLL_OFFSET);
                            $_SCROLL_ELMS.animate({
                                scrollTop: scroll_position
                            }, SCROLL_SPEED).promise().done(function () {
                                var hidden_content_height = $_HIDDEN_CONTENT_CHILD.innerHeight();
                                $_HIDDEN_CONTENT.animate({
                                   height: hidden_content_height
                                }, ANIM_SPEED, function() {
                                    $_HIDDEN_CONTENT.css('height', 'auto');
                                    $_OPEN_BTN.addClass('opened');
                                    animated = false;
                                });
                            });
                        });
                    }
                } else {
                    var scroll_position = getOffset($_HIDDEN_CONTENT, SCROLL_OFFSET);
                    if(!animated) {
                        animated = true;
                        $_SCROLL_ELMS.animate({
                            scrollTop: scroll_position
                        }, SCROLL_SPEED, function() {
                            animated = false;
                        });
                    }
                }

            });

            $_CLOSE_BTN.on('click', function (e) {
                e.preventDefault();
                var _self = $(this);

                if(!animated) {
                    animated = true;
                    $_HIDDEN_CONTENT.animate({
                        height: 0
                    }, ANIM_SPEED, function() {
                        $_HIDDEN_CONTENT.css('height', '');
                        $_OPEN_BTN.removeClass('opened');
                        if($_IFRAME.length) {
                            $_IFRAME.attr('src', $_IFRAME.attr('src'));
                        }
                        animated = false;
                    });
                }
            });

        },

        eqCaptionText = function () {
            var elements = $('.occc-column .client-name .c');
            if (elements.length) {
                var testimonialsBlocks$EQ = new EqualBlocksHeight(elements, {
                    splitBy     : 3,
                    isResizable : true,
                    isFullLoaded: true,
                    isBoxSized  : true
                });
            }
        },

        expandModeImages = function () {
            jQuery.fn.toggleText = function (a, b) {
                var isClicked = false;
                var that = this;
                this.click(function () {
                    if (isClicked) {
                        that.text(a);
                        isClicked = false;
                    }
                    else {
                        that.text(b);
                        isClicked = true;
                    }
                });
                return this;
            };
            jQuery(".view-images").click(function (e) {
                e.preventDefault();
                jQuery(".preview-before").slideToggle("slow");
                jQuery(".preview-after-frame").slideToggle();
                jQuery(".preview-after-additional").slideToggle();
            }).toggleText("View Additional Images", "View details");
        },

        /**
         * Set float panel
         */
        setFloatPanel = function () {

            $(function () {
                // floating panel
                var float_panel_offset_top = $('.jq-float-panel').offset().top;

                $(window).on('resize', function () {
                    float_panel_offset_top = $('.jq-float-panel').offset().top;
                });

                var float_panel = function () {
                    var scroll_top = $(window).scrollTop();
                    if (scroll_top > float_panel_offset_top) {
                        $('.jq-float-panel').css({ 'position': 'fixed', 'top': 40 }).addClass('fix');
                    } else {
                        $('.jq-float-panel').css({ 'position': 'absolute', 'top': 150 }).removeClass('fix');
                    }
                };
                float_panel();
                $(window).scroll(function () {
                    float_panel();
                });
                $(window).scroll(function () {
                    var footertotop = ($('.footer').position().top);
                    // distance user has scrolled from top, adjusted to take in height of sidebar (500 pixels inc. padding)
                    var scrolltop = $(document).scrollTop() + 500;
                    // difference between the two
                    var difference = scrolltop - footertotop;
                    difference = difference + 100;
                    // if user has scrolled further than footer,
                    // pull sidebar up using a negative margin

                    if (scrolltop > footertotop) {

                        $('.jq-float-panel').css('margin-top', 0 - difference);
                    }

                    else {
                        $('.jq-float-panel').css('margin-top', 0);
                    }
                });

                $('.jq-go-top').click(function () {
                    $('html, body').animate({scrollTop: 0}, 'slow');
                    return false;
                });
            });

        },

        /**
         * Set toTop button
         */
        setToTopBtn = function() {
            var SHOW_FROM = 200,
                SCROLL_TO = 0,
                SCROLL_SPEED = 400,
                $_window = $(window),
                $_scroll_object = $('html, body'),
                $_btn = $('<div class="btn-top"><span></span><em>Top</em></div>');
            var btn = $_btn.appendTo($('body'));

            function checkButtonVisibility() {
                if (getWindowScrollTop() > SHOW_FROM) {
                    if (!btn.hasClass('btn-top-active')) {
                        btn.addClass('btn-top-active');
                    }
                } else {
                    if (btn.hasClass('btn-top-active')) {
                        btn.removeClass('btn-top-active');
                    }
                }
            }

            function getWindowScrollTop() {
                return (function() {
                    return $_window.scrollTop();
                })();
            }

            function init() {
                checkButtonVisibility();
                btn.on('click', function (e) {
                    e.preventDefault();
                    $_scroll_object.animate({
                        scrollTop: SCROLL_TO
                    }, SCROLL_SPEED);
                });
            }

            $_window.on('scroll', function () {
                checkButtonVisibility();
            });

            init();

        },

        /**
         * expand home page works
         */
        expandHomePageWorks = function() {
            var $_linksHolder       = $('.olpc-board'),
                $_links             = $_linksHolder.find('a[data-expand-item-index]'),
                $_expandedMode      = $('.home-expanded-mode'),
                $_top_block         = $_linksHolder.find('div[data-expand-position=1]'),
                $_bottom_block      = $_linksHolder.find('div[data-expand-position=2]'),
                $_close_btn         = $_expandedMode.find('.js-fwbi-close'),
                $_window            = $(window),
                MOBILE_BREAKPOINT   = 480,
                is_animated         = false,
                ACTIVE,
                MODE,
                POS;

            var currentWinWidth     = getWinWidth();

            function getWinWidth() {
                return $_window.width();
            }

            function getLinkIndex(link) {
                return link.data('expand-item-index');
            }

            function checkExpandedModePosition(link) {
                if (currentWinWidth <= MOBILE_BREAKPOINT) {
                    MODE = 'm';     // mobile
                } else {
                    var link_index = getLinkIndex(link);
                    if (link_index <= 3) {
                        POS = 't';  // top block
                    } else {
                        POS = 'b';  // bottom block
                    }
                    MODE = 'd';     // desktop
                }
            }

            function checkExpandedInPosition(position, expanded) {
                if (!(position.next('.home-expanded-mode').length)) {
                    return true;
                } else {
                    return false;
                }
            }

            function appendExpandedToPosition(expanded, position) {
                expanded.insertAfter(position);
            }

            function setScrollTo(scrollPosition, cb, link) {
                var element = $('html ,body'),
                    scrollSpeed = 400;
                is_animated = true;
                element.animate({
                    scrollTop: scrollPosition
                }, scrollSpeed).promise().done(function () {
                    if (typeof cb === "function") {
                        cb(link);
                    }
                    is_animated = false;
                });
            }

            function getOffset(obj, offsetMargin) {
                return obj.offset().top + offsetMargin;
            }

            function getMobileAppendIndex(link) {
                var linkIndex = getLinkIndex(link),
                    appendIndex;
                switch (linkIndex) {
                    case 1:
                        appendIndex = $_linksHolder.find('div[data-expand-position=1] .olpcb-left-column');
                        break;
                    case 2:
                    case 3:
                        appendIndex = $_linksHolder.find('div[data-expand-position=1] .olpcb-right-column');
                        break;
                    case 4:
                    case 5:
                        appendIndex = $_linksHolder.find('div[data-expand-position=2] .olpcb-left-column');
                        break;
                    case 6:
                        appendIndex = $_linksHolder.find('div[data-expand-position=2] .olpcb-right-column');
                        break;
                }
                return appendIndex;
            }

            function checkIframe(object) {
                var Iframe = object.find('iframe'), IframeId;
                if (Iframe.length) {
                    IframeId = Iframe.attr('id');
                }
                return IframeId;
            }


            function reloadIframeContent(object) {
                var Iframe = object.find('iframe');
                if (Iframe.length) {
                    var src = Iframe.attr('src');
                    Iframe.attr('src', '');
                    Iframe.attr('src', src);
                }
            }

            function openWindow(link) {
                var linkIndex = getLinkIndex(link),
                    $_expandedItem = $('#c-em-' + linkIndex);
                is_animated = true;
                ACTIVE = linkIndex;

                $_links.filter('[data-expand-item-index='+ACTIVE+']').addClass('active');
                $_expandedItem
                    .css({
                        'height'  : 0,
                        'overflow': 'hidden'
                    })
                    .show(0, function () {
                        var innerBoxHeight = $(this).find('.ec-frame').height();
                        $(this)
                            .animate({
                                height: innerBoxHeight
                            }, 300, function () {
                                $(this).css({
                                    'height'  : '',
                                    'overflow': ''
                                });
                                is_animated = false;
                        });
                    });
            }

            function closeWindow(linkIndex, scopeMode, setScrollTo, openWindow, link) {
                var
                    $_expandedItem = $('#c-em-' + linkIndex),
                    is_animated = true,
                    offset;

                $_expandedItem
                    .css({
                        'overflow': 'hidden'
                    })
                    .animate({
                        'height': 0
                    }, 300, function () {

                        $(this).css({
                            'height'  : '',
                            'overflow': '',
                            'display' : 'none'
                        });

                        if(typeof checkIframe($_expandedItem) !== 'undefined' && checkIframe($_expandedItem) !=='') {
                            if(!BFM.isMobile()) {
                                if(players[checkIframe($_expandedItem)] instanceof Object) {
                                    stopYouTubeVideo(checkIframe($_expandedItem));
                                }
                            } else {
                                reloadIframeContent($_expandedItem);
                            }
                        }

                        $_links.filter('[data-expand-item-index=' + ACTIVE + ']').removeClass('active');

                        if(typeof scopeMode !== 'undefined') {
                            switch (scopeMode) {
                                case 'in-scope':
                                    if (typeof setScrollTo === 'function') {
                                        offset = getOffset($_expandedMode, -68);
                                        setScrollTo(offset, openWindow, link);
                                    }
                                    break;

                                case 'not-in-scope':
                                    if (POS === 't') { // top block
                                        if (checkExpandedInPosition($_top_block, $_expandedMode)) {
                                            appendExpandedToPosition($_expandedMode, $_top_block);
                                        }
                                    } else if (POS === 'b') { // bottom block
                                        if (checkExpandedInPosition($_bottom_block, $_expandedMode)) {
                                            appendExpandedToPosition($_expandedMode, $_bottom_block);
                                        }
                                    }
                                    if (typeof setScrollTo === 'function') {
                                        offset = getOffset($_expandedMode, -68);
                                        setScrollTo(offset, openWindow, link);
                                    }
                                    break;
                                case 'mobile-scope':
                                    var mobileAppendedItem = getMobileAppendIndex(link);
                                    if (checkExpandedInPosition(mobileAppendedItem, $_expandedMode)) {
                                        appendExpandedToPosition($_expandedMode, mobileAppendedItem);
                                    }
                                    if (typeof setScrollTo === 'function') {
                                        offset = getOffset($_expandedMode, -68);
                                        setScrollTo(offset, openWindow, link);
                                    }
                                    break;
                            }
                        }
                        ACTIVE = undefined;
                        is_animated = false;
                    });
            }

            $_links.on('click', function (e) {
                e.preventDefault();

                var $this = $(this),
                    offset;

                il.render($('#c-em-' + $this.data('expand-item-index')));

                if (is_animated) {
                    return;
                }

                is_animated = true;

                checkExpandedModePosition($this);

                if (typeof ACTIVE !== 'undefined') { // has active window

                    if (MODE === 'd') { // desktop mode
                        if ($this.hasClass('active')) { // current link is active
                            offset = getOffset($_expandedMode, -68);
                            setScrollTo(offset);
                        } else { // check link scope
                            var linkParent = $this.closest('div[data-expand-position]');
                            if (!checkExpandedInPosition(linkParent, $_expandedMode)) { // expanded in link scope
                                closeWindow(ACTIVE, 'in-scope', setScrollTo, openWindow, $this);
                            } else { // expanded not in link scope
                                closeWindow(ACTIVE ,'not-in-scope', setScrollTo, openWindow, $this);
                            }
                        }
                    } else { // mobile mode
                        if ($this.hasClass('active')) { // current link is active
                            offset = getOffset($_expandedMode, -68);
                            setScrollTo(offset);
                        } else {
                            closeWindow(ACTIVE ,'mobile-scope', setScrollTo, openWindow, $this);
                        }
                    }

                } else { // no active window
                    if (MODE === 'd') { // desktop mode
                        if (POS === 't') { // top block
                            if (checkExpandedInPosition($_top_block, $_expandedMode)) {
                                appendExpandedToPosition($_expandedMode, $_top_block);
                            }
                        } else if (POS === 'b') { // bottom block
                            if (checkExpandedInPosition($_bottom_block, $_expandedMode)) {
                                appendExpandedToPosition($_expandedMode, $_bottom_block);
                            }
                        }
                        offset = getOffset($_expandedMode, -68);
                        setScrollTo(offset, openWindow, $this);
                    } else { // mobile mode
                        var mobileAppendedItem = getMobileAppendIndex($this);
                        if (checkExpandedInPosition(mobileAppendedItem, $_expandedMode)) {
                            appendExpandedToPosition($_expandedMode, mobileAppendedItem);
                        }
                        offset = getOffset($_expandedMode, -68);
                        setScrollTo(offset, openWindow, $this);
                    }
                }

            });

            $_close_btn.on('click', function (e) {
                e.preventDefault();
                closeWindow(ACTIVE);
            });

            $_window.on('resize', function () {
                if(typeof ACTIVE !== 'undefined') {
                    var $winW = $(this).width();
                    if($winW !== currentWinWidth) {
                        currentWinWidth = $winW;
                        var activeLink = $_links.filter('[data-expand-item-index=' + ACTIVE + ']').eq(0);
                        checkExpandedModePosition(activeLink);
                        if (MODE === 'd') { // desktop mode
                            if (POS === 't') { // top block
                                if (checkExpandedInPosition($_top_block, $_expandedMode)) {
                                    appendExpandedToPosition($_expandedMode, $_top_block);
                                }
                            } else if (POS === 'b') { // bottom block
                                if (checkExpandedInPosition($_bottom_block, $_expandedMode)) {
                                    appendExpandedToPosition($_expandedMode, $_bottom_block);
                                }
                            }
                        } else {
                            var mobileAppendedItem = getMobileAppendIndex(activeLink);
                            if (checkExpandedInPosition(mobileAppendedItem, $_expandedMode)) {
                                appendExpandedToPosition($_expandedMode, mobileAppendedItem);
                            }
                        }
                    }
                }
            });

            //expanded simple gallery
            $('.js-ec-gallery .js-thumbnails a').on('click', function (e) {
                e.preventDefault();
                var _self = $(this),
                    currentClickLnkEq = _self.index(),
                    parentNode = _self.parents('.js-ec-gallery');
                $('.js-thumbnails a', parentNode).removeClass('active');
                $('.js-main-image img', parentNode).removeAttr('style');
                _self.addClass('active');
                $('.js-main-image img', parentNode).eq(currentClickLnkEq).show().animate({ opacity: 1}, 600);
            });

        };

    /**
     * Return public  methods
     */
    return {
        init                   : init,
        isMobile               : isMobile,
        setPlaceholders        : setPlaceholders,
        setBxSlider            : setBxSlider,
        setScrollLinks         : setScrollLinks,
        expandBeforeAfterBlock : expandBeforeAfterBlock,
        setEZCheckboxes        : setEZCheckboxes,
        setFloatPanel          : setFloatPanel,
        expandTestimonialsBlock: expandTestimonialsBlock,
        expandVideosBlock      : expandVideosBlock,
        expandTestimonials     : expandTestimonials,
        eqCaptionText          : eqCaptionText,
        expandModeImages       : expandModeImages,
        expandPortfolioBlocks  : expandPortfolioBlocks,
        expandDemoVideoBlock   : expandDemoVideoBlock,
        setToTopBtn            : setToTopBtn,
        expandHomePageWorks    : expandHomePageWorks
    };

};

/**
 * JS for mobile devices
 *
 * @constructor
 */
var BFMMobilejs = function () {
    "use strict";
    var
        //"Our Latest Projects" board
        initOurLatestProjects = function () {
            var olpEcommerce = $('.olp-ecommerce'),
                olpiHoverStare = $('.olpi-hover-stare', olpEcommerce);
            if (olpEcommerce.length) {
                olpEcommerce.on('click', function () {
                    var _self = $(this);
                    if (!_self.hasClass('activated')) {
                        olpiHoverStare.show();
                        /*.css({
                         'visibility': 'visible',
                         'opacity'   : 1
                         });*/
                        _self.addClass('activated');
                    }
                    else {
                        olpiHoverStare.hide();
                        /*.css({
                         'visibility': 'hidden',
                         'opacity'   : 0
                         });*/
                        _self.removeClass('activated');
                    }
                });
            }
        },
        //"What We Do In a Nutshell" menu
        initWhatWeDoIn = function () {

            var
                bubble_click_elem = $('.sc-bubble > a'),
                bubble_ul_list = $('.sc-bubble ul'),
                bubble_container = $('.sc-bubble');

            if (bubble_click_elem.length) {
                bubble_click_elem.on('click', function (e) {
                    e.preventDefault();
                    var _self = $(this);
                    var parentSelf = _self.parent();

                    if (!_self.parent().hasClass('activated')) {
                        /*bubble_ul_list.css({
                         'visibility': 'hidden',
                         'opacity'   : 0
                         });*/
                        bubble_ul_list.hide();
                        bubble_container.removeClass('activated');
                        _self.next().show();
                        /*_self.next().css({
                         'visibility': 'visible',
                         'opacity'   : 1
                         });*/
                        parentSelf.addClass('activated');
                    }
                    else {
                        /*bubble_ul_list.css({
                         'visibility': 'hidden',
                         'opacity'   : 0
                         });*/
                        bubble_ul_list.hide();
                        bubble_container.removeClass('activated');
                    }
                });
            }
        };

    return {
        initOurLatestProjects: initOurLatestProjects,
        initWhatWeDoIn       : initWhatWeDoIn
    };
};

var BFM = new BFMjs();
var BFMMobile = new BFMMobilejs();
BFM.init();

function processSlider(sliderParent) {
    var sliderObject = sliderParent.find('.js-psc-slider'),
        sliderNav = sliderParent.find('.js-ps-nav'),
        sliderNavLinks = $('a', sliderNav),
        btnNext = sliderParent.find('.js-btn-simple'),
        slider;

    function setCurrentSlide(index) {
        sliderNavLinks.removeClass('active');
        sliderNav.find('.psn-item').removeClass('psn-item-active');
        sliderNavLinks.eq(index).addClass('active');
        sliderNavLinks.eq(index).closest('.psn-item').addClass('psn-item-active');
        sliderNav.removeClass('current-active-0 current-active-1 current-active-2 current-active-3 current-active-4');
        sliderNav.addClass('current-active-' + index);
    }

    function initSliderNav(slider) {
        sliderNavLinks.on('click', function (e) {
            e.preventDefault();
            var slideIndex = $(this).data('slide') - 1;
            if (!$(this).hasClass('active')) {
                sliderNavLinks.removeClass('active');
                setCurrentSlide(slideIndex);
                slider.goToSlide(slideIndex);
            }
        });
        btnNext.on('click', function (e) {
            e.preventDefault();
            slider.goToNextSlide();
        });
    }

    function init() {
        var sliderQty = sliderNavLinks.length;
        slider = sliderObject.bxSlider({
            mode            : 'fade', // fade, horizontal
            infiniteLoop    : false,
            adaptiveHeight  : true,
            pager           : false,
            controls        : true,
            hideControlOnEnd: true,
            onSliderLoad    : function (currentIndex) {
                setCurrentSlide(currentIndex);
            },
            onSlideBefore   : function ($slideElement, oldIndex, newIndex) {
                setCurrentSlide(newIndex);
                if (newIndex >= sliderQty - 1) {
                    btnNext.hide();
                } else {
                    btnNext.show();
                }
            }
        });
        initSliderNav(slider);
    }
    init();
}
/*! http://mths.be/placeholder v2.0.6 by @mathias */
;(function(g,i,d){var a='placeholder' in i.createElement('input'),e='placeholder' in i.createElement('textarea'),j=d.fn,c=d.valHooks,l,k;if(a&&e){k=j.placeholder=function(){return this};k.input=k.textarea=true}else{k=j.placeholder=function(){var m=this;m.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind({'focus.placeholder':b,'blur.placeholder':f}).data('placeholder-enabled',true).trigger('blur.placeholder');return m};k.input=a;k.textarea=e;l={get:function(n){var m=d(n);return m.data('placeholder-enabled')&&m.hasClass('placeholder')?'':n.value},set:function(n,o){var m=d(n);if(!m.data('placeholder-enabled')){return n.value=o}if(o==''){n.value=o;if(n!=i.activeElement){f.call(n)}}else{if(m.hasClass('placeholder')){b.call(n,true,o)||(n.value=o)}else{n.value=o}}return m}};a||(c.input=l);e||(c.textarea=l);d(function(){d(i).delegate('form','submit.placeholder',function(){var m=d('.placeholder',this).each(b);setTimeout(function(){m.each(f)},10)})});d(g).bind('beforeunload.placeholder',function(){d('.placeholder').each(function(){this.value=''})})}function h(n){var m={},o=/^jQuery\d+$/;d.each(n.attributes,function(q,p){if(p.specified&&!o.test(p.name)){m[p.name]=p.value}});return m}function b(o,p){var n=this,q=d(n),m;if(n.value==q.attr('placeholder')&&q.hasClass('placeholder')){m=n==i.activeElement;if(q.data('placeholder-password')){q=q.hide().next().show().attr('id',q.removeAttr('id').data('placeholder-id'));if(o===true){return q[0].value=p}q.focus()}else{n.value='';q.removeClass('placeholder')}m&&n.select()}}function f(){var r,m=this,q=d(m),n=q,p=this.id;if(m.value==''){if(m.type=='password'){if(!q.data('placeholder-textinput')){try{r=q.clone().attr({type:'text'})}catch(o){r=d('<input>').attr(d.extend(h(this),{type:'text'}))}r.removeAttr('name').data({'placeholder-password':true,'placeholder-id':p}).bind('focus.placeholder',b);q.data({'placeholder-textinput':r,'placeholder-id':p}).before(r)}q=q.removeAttr('id').hide().prev().attr('id',p).show()}q.addClass('placeholder');q[0].value=q.attr('placeholder')}else{q.removeClass('placeholder')}}}(this,document,jQuery));
/*	
 *	jQuery mmenu 3.2.1
 *	
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */


(function( $ ) {


	//	Global nodes
	var $wndw = null,
		$html = null,
		$body = null,
		$page = null,
		$blck = null;

	var $allMenus = null,
		$scrollTopNode = null;


	//	Constants
	var _c, _e, _d;


	$.fn.mmenu = function( o )
	{
		//	First time plugin is fired
		if ( !$wndw )
		{
			_initPlugin();
		}

		//	Extend options
		o = extendOptions( o );

		return this.each(
			function()
			{

				//	STORE VARIABLES
				var $menu = $(this);
				$allMenus = $allMenus.add( $menu );

				var opts = extendOptions( o, $menu );

				$menu
					.data( _d.options, opts )
					.data( _d.opened, false );

				var _direction = ( opts.slidingSubmenus ) ? 'horizontal' : 'vertical';

				_serialnr++;


				//	INIT PAGE & MENU
				$page = _initPage( 			$page, opts.configuration );
				$menu = _initMenu( 			$menu, opts, opts.configuration );
				$blck = _initBlocker( 		$blck, $menu, opts.configuration );

				if ( opts.isMenu )
				{
					_initSubmenus( 			$menu, _direction, _serialnr );
					_initLinks( 			$menu, opts.onClick, opts.configuration, opts.slidingSubmenus );
				}
				_initOpenClose( 			$menu, $page, opts.configuration );

				if ( opts.isMenu )
				{
					$.fn.mmenu.counters( 	$menu, opts.counters, opts.configuration );
					$.fn.mmenu.search( 		$menu, opts.searchfield, opts.configuration );
				}
				$.fn.mmenu.dragOpen( 		$menu, opts.dragOpen, opts.configuration );


				//	BIND EVENTS
				var $subs = $menu.find( 'ul' );
				$menu.add( $subs )
					.off( _e.toggle + ' ' + _e.open + ' ' + _e.close )
					.on( _e.toggle + ' ' + _e.open + ' ' + _e.close,
						function( e )
						{
							e.preventDefault();
							e.stopPropagation();
						}
					);

				//	menu-events
				$menu
					.on( _e.toggle,
						function( e )
						{
							return $menu.triggerHandler( $menu.data( _d.opened ) ? _e.close : _e.open );
						}
					)
					.on( _e.open,
						function( e )
						{
							if ( $menu.data( _d.opened ) )
							{
								e.stopImmediatePropagation();
								return false;
							}
							return openMenu( $menu, opts, opts.configuration );
						}
					)
					.on( _e.close,
						function( e )
						{
							if ( !$menu.data( _d.opened ) )
							{
								e.stopImmediatePropagation();
								return false;
							}
							return closeMenu( $menu, opts, opts.configuration );
						}
					)
					.off( _e.setPage )
					.on( _e.setPage,
						function( e, $p )
						{
							$page = _initPage( 		$p, opts.configuration );
							_initOpenClose( 		$menu, $page, opts.configuration );
							$.fn.mmenu.dragOpen( 	$menu, opts.dragOpen, opts.configuration );
						}
					);


				//	submenu-events
				if ( _direction == 'horizontal' )
				{
					$subs
						.on( _e.toggle,
							function( e )
							{								
								return $(this).triggerHandler( _e.open );
							}
						)
						.on( _e.open,
							function( e )
							{
								return openSubmenuHorizontal( $(this), opts );
							}
						)
						.on( _e.close,
							function( e )
							{
								return closeSubmenuHorizontal( $(this), $menu, opts, opts.configuration );
							}
						);
				}
				else
				{
					$subs
						.on( _e.toggle,
							function( e )
							{
								var $t = $(this);
								return $t.triggerHandler( $t.parent().hasClass( _c.opened ) ? _e.close : _e.open );
							}
						)
						.on( _e.open,
							function( e )
							{
								$(this).parent().addClass( _c.opened );
								return 'open';
							}
						)
						.on( _e.close,
							function( e )
							{
								$(this).parent().removeClass( _c.opened );
								return 'close';
							}
						);
				}
			}
		);
	};
	$.fn.mmenu.defaults = {
		position		: 'left',
		zposition		: 'back',
		moveBackground	: true,
		slidingSubmenus	: true,
		modal			: false,
		onClick			: {
			close				: true,
			setSelected			: true,
//			blockUI				: null,
//			callback			: null,
//			setLocationHref		: null,
			delayLocationHref	: true
		},
		configuration	: {
			preventTabbing		: true,
			hardwareAcceleration: true,
			selectedClass		: 'Selected',
			labelClass			: 'Label',
			counterClass		: 'Counter',
			pageNodetype		: 'div',
			menuNodetype		: 'nav',
			transitionDuration	: 400,
			dragOpen			: {
				pageMaxDistance		: 500,
				pageMinVisible		: 65
			}
		}
	};


	/*
		SEARCH
	*/
	$.fn.mmenu.search = function( $m, opts, conf )
	{

		//	Extend options
		if ( typeof opts == 'boolean' )
		{
			opts = {
				add		: opts,
				search	: opts
			};
		}
		else if ( typeof search == 'string' )
		{
			opts = {
				add			: true,
				search		: true,
				placeholder	: opts
			};
		}
		if ( typeof opts != 'object' )
		{
			opts = {};
		}
		opts = $.extend( true, {}, $.fn.mmenu.search.defaults, opts );

		//	Add the field
		if ( opts.add )
		{
			var $s = $( '<div class="' + _c.search + '" />' ).prependTo( $m.find( '> .' + _c.inner ) );
			$s.append( '<input placeholder="' + opts.placeholder + '" type="text" autocomplete="off" />' );

			if ( opts.noResults )
			{
				$('ul', $m).not( '.' + _c.submenu ).append( '<li class="' + _c.noresults + '">' + opts.noResults + '</li>' );
			}
		}

		//	Bind custom events
		if ( opts.search )
		{
			var $s = $('div.' + _c.search, $m),
				$i = $('input', $s);

			var $labels = $('li.' + _c.label, $m),
				$counters = $('em.' + _c.counter, $m),
				$items = $('li', $m)
					.not( '.' + _c.subtitle )
					.not( '.' + _c.label )
					.not( '.' + _c.noresults );

			var _searchText = '> a';
			if ( !opts.showLinksOnly )
			{
				_searchText += ', > span';
			}

			$i.off( _e.keyup + ' ' + _e.change )
				.on( _e.keyup,
					function( e )
					{
						if ( !preventKeypressSearch( e.keyCode ) )
						{
							$i.trigger( _e.search );
						}
					}
				)
				.on( _e.change,
					function( e )
					{
						$i.trigger( _e.search );
					}
				);

			$m.off( _e.reset + ' ' + _e.search )
				.on( _e.reset + ' ' + _e.search,
					function( e )
					{
						e.preventDefault();
						e.stopPropagation();
					}
				)
				.on( _e.reset,
					function( e )
					{
						$i.val( '' );
						$m.trigger( _e.search );
					}
				)
				.on( _e.search,
					function( e, query )
					{
						if ( typeof query == 'string' )
						{
							$i.val( query );
						}
						else
						{
							query = $i.val();
						}
						query = query.toLowerCase();

	
						//	search through items
						$items.add( $labels ).addClass( _c.noresult );
						$items.each(
							function()
							{
								var $t = $(this);
								if ( $(_searchText, $t).text().toLowerCase().indexOf( query ) > -1 )
								{
									$t.add( $t.prevAll( '.' + _c.label ).first() ).removeClass( _c.noresult );
								}
							}
						);
	
						//	update parent for submenus
						$( $('ul.' + _c.submenu, $m).get().reverse() ).each(
							function()
							{
								var $t = $(this),
									$p = $t.data( _d.parent ),
									id = $t.attr( 'id' ),
									$i = $t.find( 'li' )
										.not( '.' + _c.subtitle )
										.not( '.' + _c.label )
										.not( '.' + _c.noresult );
	
								if ( $i.length )
								{
									if ( $p )
									{
										$p.removeClass( _c.noresult )
											.removeClass( _c.nosubresult )
											.prevAll( '.' + _c.label ).first().removeClass( _c.noresult );
									}
								}
								else
								{
									$t.trigger( _e.close );
									if ( $p )
									{
										$p.addClass( _c.nosubresult );
									}
								}
							}
						);

						//	show/hide no results message
						$m[ $items.not( '.' + _c.noresult ).length ? 'removeClass' : 'addClass' ]( _c.noresults );
	
						//	update counters
						$counters.trigger( _e.count );
					}
				);
		}
	};
	$.fn.mmenu.search.defaults = {
		add				: false,
		search			: true,
		showLinksOnly	: true,
		placeholder		: 'Search',
		noResults		: 'No results found.'
	};


	/*
		COUNTERS
	*/
	$.fn.mmenu.counters = function( $m, opts, conf )
	{
		//	Extend options
		if ( typeof opts == 'boolean' )
		{
			opts = {
				add		: opts,
				count	: opts
			};
		}
		if ( typeof opts != 'object' )
		{
			opts = {};
		}
		opts = $.extend( true, {}, $.fn.mmenu.counters.defaults, opts );

		//	Refactor counter class
		$('em.' + conf.counterClass, $m).removeClass( conf.counterClass ).addClass( _c.counter );

		//	Add the counters
		if ( opts.add )
		{
			$('.' + _c.submenu, $m).each(
				function()
				{
					var $s = $(this),
						id = $s.attr( 'id' );
	
					if ( id && id.length )
					{
						var $c = $( '<em class="' + _c.counter + '" />' ),
							$a = $('a.' + _c.subopen, $m).filter( '[href="#' + id + '"]' );

						if ( !$a.parent().find( 'em.' + _c.counter ).length )
						{
							$a.before( $c );
						}
					}
				}
			);
		}

		//	Bind custom events
		if ( opts.count )
		{
			$('em.' + _c.counter, $m).each(
				function()
				{
					var $c = $(this),
						$s = $('ul' + $c.next().attr( 'href' ), $m);

					$c.off( _e.count )
						.on( _e.count,
							function( e )
							{
								e.preventDefault();
								e.stopPropagation();
	
								var $lis = $s.children()
									.not( '.' + _c.label )
									.not( '.' + _c.subtitle )
									.not( '.' + _c.noresult )
									.not( '.' + _c.noresults );
	
								$c.html( $lis.length );
							}
						);
				}
			).trigger( _e.count );
		}
	};
	$.fn.mmenu.counters.defaults = {
		add		: false,
		count	: true
	};


	/*
		DRAGOPEN
	*/
	$.fn.mmenu.dragOpen = function( $m, opts, conf )
	{

		if ( !$.fn.hammer )
		{
			return false;
		}

		//	Extend options
		if ( typeof opts == 'boolean' )
		{
			opts = {
				open: opts
			};
		}
		if ( typeof opts != 'object' )
		{
			opts = {};
		}
		opts = $.extend( true, {}, $.fn.mmenu.dragOpen.defaults, opts );

		if ( opts.open )
		{
			var _setup 			= false,
				_direction 		= false,
				_distance 		= 0,
				_maxDistance 	= 0;

			var pOpts = $m.data( _d.options );

			//	Set up variables
			switch( pOpts.position )
			{
				case 'left':
					var drag = {
						events 		: _e.dragleft + ' ' + _e.dragright,
						open_dir 	: 'right',
						close_dir 	: 'left',
						delta		: 'deltaX',
						negative 	: false
					};
					break;

				case 'right':
					var drag = {
						events 		: _e.dragleft + ' ' + _e.dragright,
						open_dir 	: 'left',
						close_dir 	: 'right',
						delta		: 'deltaX',
						negative 	: true
					};
					break;

				case 'top':
					var drag = {
						events		: _e.dragup + ' ' + _e.dragdown,
						open_dir 	: 'down',
						close_dir 	: 'up',
						delta		: 'deltaY',
						negative 	: false
					};
					break;

				case 'bottom':
					var drag = {
						events 		: _e.dragup + ' ' + _e.dragdown,
						open_dir 	: 'up',
						close_dir 	: 'down',
						delta		: 'deltaY',
						negative 	: true
					};
					break;
			}

			$dragNode = valueOrFn( opts.pageNode, $m, $page );
			if ( typeof $dragNode == 'string' )
			{
				$dragNode = $($dragNode);
			}

			//	Bind events
			$dragNode
				.hammer()
				.on( drag.events + ' ' + _e.dragend,
					function( e )
					{
						e.gesture.preventDefault();
				        e.stopPropagation();
					}
				)
				.on( drag.events,
					function( e )
					{

						var new_distance = drag.negative
							? -e.gesture[ drag.delta ]
							: e.gesture[ drag.delta ];

						_direction = ( new_distance > _distance )
							? drag.open_dir
							: drag.close_dir;

						_distance = new_distance;

						if ( _distance > opts.threshold )
						{
							if ( !_setup )
							{								
								if ( $html.hasClass( _c.opened ) )
								{
									return;
								}
								_setup = true;
								openMenu_setup( $m, pOpts, conf );
								$html.addClass( _c.dragging );

								switch( pOpts.position )
								{
									case 'left':
									case 'right':
										_maxDistance = minMax( $(window).width(), 0, conf.dragOpen.pageMaxDistance ) - conf.dragOpen.pageMinVisible;
										break;
									default:
										_maxDistance = $(window).height() - conf.dragOpen.pageMinVisible;
										break;
								}
							}
						}
						if ( _setup )
						{
							var $drag = $page;
							switch ( pOpts.zposition )
							{
								case 'front':
									$drag = $m;
									break;
								case 'next':
									$drag = $drag.add( $m );
									break;
							}
							$drag.css( 'margin-' + pOpts.position, minMax( _distance, 10, _maxDistance ) );
						}
					}
				)
				.on( _e.dragend,
					function( e )
					{
						if ( _setup )
						{
				        	_setup = false;
				        	
				        	var $drag = $page;
				        	switch ( pOpts.zposition )
							{
								case 'front':
									$drag = $m;
									break;
								case 'next':
									$drag = $drag.add( $m );
									break;
							}
							$drag.css( 'margin-' + pOpts.position, '' );

							$html.removeClass( _c.dragging );

							if ( _direction == drag.open_dir )
							{
						        openMenu_finish( $m, pOpts, conf );
							}
							else
							{
								closeMenu( $m, pOpts, conf );
							}
						}
				    }
				);
		}
	};
	$.fn.mmenu.dragOpen.defaults = {
		open		: false,
//		pageNode	: null,
		threshold	: 50
	};


	/*
		SUPPORT
	*/
	$.fn.mmenu.support = {

		touch: (function() {
			return 'ontouchstart' in window.document;
		})(),

		overflowscrolling: (function() {
			return 'WebkitOverflowScrolling' in window.document.documentElement.style;
		})(),

		iPhoneAddressBar: (function() {
			if ( navigator.userAgent.match( /iPhone/i ) || navigator.userAgent.match( /iPod/i ) )
			{
				//	Chrome
				if ( navigator.userAgent.match( 'CriOS' ) )
				{
					return false;
				}
				//	Fullscreen web app
				if ( window.navigator.standalone )
				{
					return false;
				}
				//	viewport height=device-height
				var c = $('meta[name="viewport"]').attr( 'content' );
				if ( c && c.indexOf( 'height=' ) != -1 )
				{
					return false;
				}
				
				return true;
			}
			return false;
		})(),

		oldAndroid: (function() {
			var ua = navigator.userAgent;
			if ( ua.indexOf( 'Android' ) >= 0 )
			{
				return 2.4 > parseFloat( ua.slice( ua.indexOf( 'Android' ) +8 ) );
			}
			return false;
		})(),

		transition: (function() {
			var s = document.createElement( 'div' ).style;
		    if ( 'webkitTransition' in s )
		    {
		        return 'webkitTransition';  
		    }
		    return 'transition' in s;
		})()
	};



	/*
		BROWSER SPECIFIC FIXES
	*/
	$.fn.mmenu.useOverflowScrollingFallback = function( use )
	{
		if ( $html )
		{
			if ( typeof use == 'boolean' )
			{
				$html[ use ? 'addClass' : 'removeClass' ]( _c.nooverflowscrolling );
			}
			return $html.hasClass( _c.nooverflowscrolling );
		}
		else
		{
			_useOverflowScrollingFallback = use;
			return use;
		}
	};
	$.fn.mmenu.useIphoneAddressbarFix = function( use )
	{
		if ( $html )
		{
			if ( typeof use == 'boolean' )
			{
				$html[ use ? 'addClass' : 'removeClass' ]( _c.iphoneaddressbar );
			}
			return $html.hasClass( _c.iphoneaddressbar );
		}
		else
		{
			_useIphoneAddressbarFix = use;
			return use;
		}
	};


	/*
		DEBUG
	*/
	$.fn.mmenu.debug = function( msg )
	{
		if ( typeof console != 'undefined' && typeof console.log != 'undefined' )
		{
			console.log( 'MMENU: ' + msg );
		}
	};
	$.fn.mmenu.deprecated = function( depr, repl )
	{
		if ( typeof console != 'undefined' && typeof console.warn != 'undefined' )
		{
			console.warn( 'MMENU: ' + depr + ' is deprecated, use ' + repl + ' instead.' );
		}
	};


	//	Global vars
	var _serialnr = 0,
		_useOverflowScrollingFallback = $.fn.mmenu.support.touch && !$.fn.mmenu.support.overflowscrolling;
		_useIphoneAddressbarFix = $.fn.mmenu.support.iPhoneAddressBar;


	function extendOptions( o, $m )
	{
		if ( $m )
		{
			if ( typeof o.isMenu != 'boolean' )
			{
				var $c = $m.children();
				o.isMenu = ( $c.length == 1 && $c.is( 'ul' ) );
			}
			return o;
		}


		//	string value only
		if ( typeof o == 'string' )
		{
			switch( o )
			{
				case 'top':
				case 'right':
				case 'bottom':
				case 'left':
					o = {
						position: o
					};
					break;
			}
		}
		if ( typeof o != 'object' )
		{
			o = {};
		}


		//	DEPRECATED
		if ( typeof o.onClick != 'undefined' )
		{
			if ( typeof o.onClick.delayPageload != 'undefined' )
			{
				$.fn.mmenu.deprecated( 'onClick.delayPageload-option', 'onClick.delayLocationHref-option' );
				o.onClick.delayLocationHref = o.onClick.delayPageload;
			}
			if ( typeof o.onClick.delayLocationHref == 'number' )
			{
				$.fn.mmenu.deprecated( 'a number for the onClick.delayLocationHref-option', 'true/false' );
				o.onClick.delayLocationHref = ( o.onClick.delayLocationHref > 0 ) ? true : false;
			}
		}
		if ( typeof o.configuration != 'undefined' )
		{
			if ( typeof o.configuration.slideDuration != 'undefined' )
			{
				$.fn.mmenu.deprecated( 'configuration.slideDuration-option', 'configuration.transitionDuration-option' );
				o.configuration.transitionDuration = o.configuration.slideDuration;
			}
		}
		//	/DEPRECATED


		//	extend onClick
		if ( typeof o.onClick == 'boolean' )
		{
			o.onClick = {
				close	: o.onClick
			};
		}
		else if ( typeof o.onClick != 'object' )
		{
			o.onClick = {};
		}


		//	extend from defaults
		o = $.extend( true, {}, $.fn.mmenu.defaults, o );


		//	set pageSelector
		if ( typeof o.configuration.pageSelector != 'string' )
		{
			o.configuration.pageSelector = '> ' + o.configuration.pageNodetype;
		}

		//	Degration
		if ( $.fn.mmenu.useOverflowScrollingFallback() )
		{
			switch( o.position )
			{
				case 'top':
				case 'bottom':
					$.fn.mmenu.debug( 'position: "' + o.position + '" not possible when using the overflowScrolling-fallback.' );
					o.position = 'left';
					break;
			}
		}

		return o;
	}

	function _initPlugin()
	{
		$wndw = $(window);
		$html = $('html');
		$body = $('body');
		
		$allMenus = $();

		_c = {
			menu				: cls( 'menu' ),
			ismenu				: cls( 'is-menu' ),
			inner				: cls( 'inner' ),
			page				: cls( 'page' ),
			blocker				: cls( 'blocker' ),
			blocking			: cls( 'blocking' ),
			modal				: cls( 'modal' ),
			background			: cls( 'background' ),
			opened 				: cls( 'opened' ),
			opening 			: cls( 'opening' ),
			submenu				: cls( 'submenu' ),
			subopen				: cls( 'subopen' ),
			fullsubopen			: cls( 'fullsubopen' ),
			subclose			: cls( 'subclose' ),
			subopened			: cls( 'subopened' ),
			subopening			: cls( 'subopening' ),
			subtitle			: cls( 'subtitle' ),
			selected			: cls( 'selected' ),
			label 				: cls( 'label' ),
			noresult			: cls( 'noresult' ),
			noresults			: cls( 'noresults' ),
			nosubresult			: cls( 'nosubresult' ),
			search 				: cls( 'search' ),
			counter				: cls( 'counter' ),
			accelerated			: cls( 'accelerated' ),
			dragging			: cls( 'dragging' ),
			nooverflowscrolling : cls( 'no-overflowscrolling' ),
			iphoneaddressbar	: cls( 'iphone-addressbar' )
		};
		_e = {
			toggle			: evt( 'toggle' ),
			open			: evt( 'open' ),
			close			: evt( 'close' ),
			search			: evt( 'search' ),
			reset			: evt( 'reset' ),
			keyup			: evt( 'keyup' ),
			change			: evt( 'change' ),
			keydown			: evt( 'keydown' ),
			count			: evt( 'count' ),
			resize			: evt( 'resize' ),
			opening			: evt( 'opening' ),
			opened			: evt( 'opened' ),
			closing			: evt( 'closing' ),
			closed			: evt( 'closed' ),
			setPage			: evt( 'setPage' ),
			setSelected		: evt( 'setSelected' ),
			transitionend	: evt( 'transitionend' ),
			touchstart		: evt( 'touchstart' ),
			mousedown		: evt( 'mousedown' ),
			click			: evt( 'click' ),
			scroll			: evt( 'scroll' ),
			dragleft		: evt( 'dragleft' ),
			dragright		: evt( 'dragright' ),
			dragup			: evt( 'dragup' ),
			dragdown		: evt( 'dragdown' ),
			dragend			: evt( 'dragend' )
		};
		_d = {
			opened		: dta( 'opened' ),
			options		: dta( 'options' ),
			parent		: dta( 'parent' ),
			sub			: dta( 'sub' ),
			style		: dta( 'style' ),
			scrollTop	: dta( 'scrollTop' ),
			offetLeft	: dta( 'offetLeft' )
		};

		$.fn.mmenu.useOverflowScrollingFallback( _useOverflowScrollingFallback );
		$.fn.mmenu.useIphoneAddressbarFix( _useIphoneAddressbarFix );
	}

	function _initPage( $p, conf )
	{
		if ( !$p )
		{
			$p = $(conf.pageSelector, $body);
			if ( $p.length > 1 )
			{
				$p = $p.wrapAll( '<' + conf.pageNodetype + ' />' ).parent();
			}
		}

		$p.addClass( _c.page );
		return $p;
	}

	function _initMenu( $m, opts, conf )
	{
		//	Strip whitespace
		$m.contents().each(
			function()
			{
				if ( $(this)[ 0 ].nodeType == 3 )
				{
					$(this).remove();
				}
			}
		);

		//	Clone if needed
		if ( conf.clone )
		{
			$m = $m.clone( true );
			$m.add( $m.find( '*' ) ).filter( '[id]' ).each(
				function()
				{
					$(this).attr( 'id', cls( $(this).attr( 'id' ) ) );
				}
			);
		}

		//	Wrap in correct node if needed
		if ( !$m.is( conf.menuNodetype ) )
		{
			$m = $( '<' + conf.menuNodetype + ' />' ).append( $m );
		}
		if ( $m.find( '> .' + _c.inner ).length == 0 )
		{
			$m.wrapInner( '<div class="' + _c.inner + '" />' );
		}

		//	Prepend to body
		$m.prependTo( 'body' )
			.addClass( _c.menu );

		if ( opts.position != 'left' )
		{
			$m.addClass( cls( opts.position ) );
		}
		if ( opts.zposition != 'back' )
		{
			$m.addClass( cls( opts.zposition ) );
		}

		//	Menu only
		if ( opts.isMenu )
		{
			$m.addClass( _c.ismenu );

			//	Refactor selected class
			$('li.' + conf.selectedClass, $m).removeClass( conf.selectedClass ).addClass( _c.selected );
	
			//	Refactor label class
			$('li.' + conf.labelClass, $m).removeClass( conf.labelClass ).addClass( _c.label );
		}

		return $m;
	}

	function _initSubmenus( $m, direction, serial )
	{
		$m.addClass( cls( direction ) );

		$( 'ul ul', $m )
			.addClass( _c.submenu )
			.each(
				function( i )
				{
					var $t = $(this),
						$l = $t.parent(),
						$a = $l.find( '> a, > span' ),
						$p = $l.parent(),
						id = $t.attr( 'id' ) || cls( 's' + serial + '-' + i );

					$t.data( _d.parent, $l );
					$l.data( _d.sub, $t );

					$t.attr( 'id', id );

					var $btn = $( '<a class="' + _c.subopen + '" href="#' + id + '" />' ).insertBefore( $a );
					if ( !$a.is( 'a' ) )
					{
						$btn.addClass( _c.fullsubopen );
					}

					if ( direction == 'horizontal' )
					{
						var id = $p.attr( 'id' ) || cls( 'p' + serial + '-' + i );

						$p.attr( 'id', id );
						$t.prepend( '<li class="' + _c.subtitle + '"><a class="' + _c.subclose + '" href="#' + id + '">' + $a.text() + '</a></li>' );
					}
				}
			);

		if ( direction == 'horizontal' )
		{
			//	Add opened-classes
			var $selected = $('li.' + _c.selected, $m);
			$selected
				.add( $selected.parents( 'li' ) )
				.parents( 'li' ).removeClass( _c.selected )
				.end().each(
					function()
					{
						var $t = $(this),
							$u = $t.find( '> ul' );
	
						if ( $u.length )
						{
							$t.parent().addClass( _c.subopened ).addClass( _c.subopening );
							$u.addClass( _c.opened );
						}
					}
				)
				.parent().addClass( _c.opened )
				.parents( 'ul' ).addClass( _c.subopened ).addClass( _c.subopening );

			if ( !$('ul.' + _c.opened, $m).length )
			{
				$('ul', $m).not( '.' + _c.submenu ).addClass( _c.opened );
			}

			//	Rearrange markup
			$('ul ul', $m).appendTo( $m.find( '> .' + _c.inner ) );
		}
		else
		{
			//	Replace Selected-class with opened-class in parents from .Selected
			$('li.' + _c.selected, $m)
				.addClass( _c.opened )
				.parents( '.' + _c.selected ).removeClass( _c.selected );
		}
	}
	function _initBlocker( $b, $m, conf )
	{
		if ( !$b )
		{
			$b = $( '<div id="' + _c.blocker + '" />' ).appendTo( $body );
		}

		click( $b,
			function()
			{
				if ( !$html.hasClass( _c.modal ) )
				{
					$m.trigger( _e.close );
				}
			}, true, true
		);
		return $b;
	}
	function _initLinks( $m, onClick, conf, horizontal )
	{

		//	set selected event
		var $lis = $('li', $m)
			.off( _e.setSelected )
			.on( _e.setSelected,
				function()
				{
					$lis.removeClass( _c.selected );
					$(this).addClass( _c.selected );
				}
			);

		//	linking
		var $a = $('a', $m)
			.not( '.' + _c.subopen )
			.not( '.' + _c.subclose )
			.not( '[target="_blank"]' );

		click( $a,
			function()
			{
				var $t = $(this),
					href = $t.attr( 'href' );

				//	set selected item
				if ( valueOrFn( onClick.setSelected, $t ) )
				{
					$t.parent().trigger( _e.setSelected );
				}

				//	block UI
				if ( valueOrFn( onClick.blockUI, $t, href.slice( 0, 1 ) != '#' ) )
				{
					$html.addClass( _c.blocking );
				}

				//	callback + loaction.href + close menu
				var callback			= typeof onClick.callback == 'function',
					callbackFn			= function() { onClick.callback.call( $t[ 0 ] ); }
					close				= valueOrFn( onClick.close, $t ),
					delayLocationHref	= valueOrFn( onClick.delayLocationHref, $t ),
					setLocationHref 	= valueOrFn( onClick.setLocationHref, $t, href != '#' ),
					setLocationHrefFn	= function() { window.location.href = $t[ 0 ].href; };

				var closing = false;

				//	close: use transitionend
				if ( close )
				{
					if ( setLocationHref )
					{
						if ( delayLocationHref )
						{
							transitionend( $page, setLocationHrefFn, conf.transitionDuration );
						}
						else
						{
							setLocationHrefFn();
						}
					}
					if ( callback )
					{
						transitionend( $page, callbackFn, conf.transitionDuration );
					}
					closing = $m.triggerHandler( _e.close );
				}

				//	not close or not closing: no transitionend
				if ( !close || !closing )
				{
					if ( setLocationHref )
					{
						setLocationHrefFn();
					}
					if ( callback )
					{
						callbackFn();
					}
				}
			}
		);


		//	open/close horizontal submenus
		if ( horizontal )
		{
			click( $('a.' + _c.subopen, $m),
				function()
				{
					var $submenu = $(this).parent().data( _d.sub );
					if ( $submenu )
					{
						$submenu.trigger( _e.open );
					}
				}
			);
			click( $('a.' + _c.subclose, $m),
				function()
				{
					$(this).parent().parent().trigger( _e.close );
				}
			);
		}

		//	open/close vertical submenus
		else
		{
			click( $('a.' + _c.subopen, $m),
				function()
				{
					var $submenu = $(this).parent().data( _d.sub );
					if ( $submenu )
					{
						$submenu.trigger( _e.toggle );
					}
				}
			);
		}
	}
	function _initOpenClose( $m, $p, c )
	{
		//	toggle menu
		var id = $m.attr( 'id' );
		if ( id && id.length )
		{
			if ( c.clone )
			{
				id = uncls( id );
			}
			click( $('a[href="#' + id + '"]'),
				function()
				{
					$m.trigger( _e.toggle );
				}
			);
		}

		//	close menu
		var id = $p.attr( 'id' );
		if ( id && id.length )
		{
			click( $('a[href="#' + id + '"]'),
				function()
				{
					$m.trigger( _e.close );
				}, false, true
			);
		}
	}

	function openMenu( $m, o, c )
	{
		openMenu_setup( $m, o, c );

		//	small timeout to ensure the "opened" class did its job
		setTimeout(
			function()
			{
				openMenu_finish( $m, o, c );
			}, 10
		);

		return 'open';
	}
	function openMenu_setup( $m, o, c )
	{
		var _scrollTop = findScrollTop();

		$m.data( _d.opened, true );
		$allMenus.not( $m ).trigger( _e.close );

		//	store style and position
		$page
			.data( _d.style, $page.attr( 'style' ) || '' )
			.data( _d.scrollTop, _scrollTop )
			.data( _d.offetLeft, $page.offset().left );

		//	resize page to window width
		var _w = 0;
		$wndw.off( _e.resize )
			.on( _e.resize,
				function( e, force )
				{
					if ( $html.hasClass( _c.opened ) || force )
					{
						var nw = $wndw.width();
						if ( nw != _w )
						{
							_w = nw;
							$page.width( nw - $page.data( _d.offetLeft ) );
						}
					}
				}
			).trigger( _e.resize, [ true ] );

		if ( $.fn.mmenu.useIphoneAddressbarFix() && _scrollTop > 20 )
		{
			$wndw.off( _e.scroll )
				.on( _e.scroll,
					function( e, force )
					{
						if ( $html.hasClass( _c.opened ) || force )
						{
							e.preventDefault();
							e.stopImmediatePropagation();
							window.scrollTo( 0, 1 );
						}
					}
				);
		}


		//	prevent tabbing out of the menu
		if ( c.preventTabbing )
		{
			$wndw.off( _e.keydown )
				.on( _e.keydown,
					function( e )
					{
						if ( e.keyCode == 9 )
						{
							e.preventDefault();
							return false;
						}
					}
				);
		}

		//	open
		if ( c.hardwareAcceleration )
		{
			$html.addClass( _c.accelerated );
		}
		if ( o.modal )
		{
			$html.addClass( _c.modal );
		}
		if ( o.position != 'left' )
		{
			$html.addClass( cls( o.position ) );
		}
		if ( o.zposition != 'back' )
		{
			$html.addClass( cls( o.zposition ) );
		}
		if ( o.moveBackground )
		{
			$html.addClass( _c.background );
		}
		$html.addClass( _c.opened );

		$m.addClass( _c.opened );

		//	scroll page to scrolltop
		$page.scrollTop( _scrollTop );
	}
	function openMenu_finish( $m, o, c )
	{
		//	callback
		transitionend( $page,
			function()
			{
				//	opened
				$m.trigger( _e.opened );
			}, c.transitionDuration
		);

		if ( $.fn.mmenu.useIphoneAddressbarFix() && $page.data( _d.scrollTop ) > 20 )
		{
			window.scrollTo( 0, 1 );
		}

		//	opening
		$html.addClass( _c.opening );
		$m.trigger( _e.opening );
	}
	function closeMenu( $m, o, c )
	{
		//	callback
		transitionend( $page,
			function()
			{
				$m.removeClass( _c.opened );

				$html
					.removeClass( _c.opened )
					.removeClass( _c.modal )
					.removeClass( _c.background )
					.removeClass( _c.accelerated )
					.removeClass( cls( o.position ) )
					.removeClass( cls( o.zposition ) );
				$wndw
					.off( _e.resize )
					.off( _e.scroll );

				//	restore style and position
				$page.attr( 'style', $page.data( _d.style ) );

				if ( $scrollTopNode )
				{
					$scrollTopNode.scrollTop( $page.data( _d.scrollTop ) );
				}

				//	closed
				$m.trigger( _e.closed );

			}, c.transitionDuration
		);

		//	closing
		$html.removeClass( _c.opening );
		$wndw.off( _e.keydown );
		$m.data( _d.opened, false );
		$m.trigger( _e.closing );

		return 'close';
	}

	function openSubmenuHorizontal( $submenu, o )
	{
		if ( $submenu.hasClass( _c.opened ) )
		{
			return false;
		}

		$body.scrollTop( 0 );
		$html.scrollTop( 0 );

		$submenu
			.removeClass( _c.subopening )
			.addClass( _c.opened );
		
		var $parent = $submenu.data( _d.parent );
		if ( $parent )
		{
			$parent.parent().addClass( _c.subopening );
		}
		return 'open';
	}
	function closeSubmenuHorizontal( $submenu, $m, o, c )
	{
		if ( !$submenu.hasClass( _c.opened ) )
		{
			return false;
		}

		var $parent = $submenu.data( _d.parent );
		if ( $parent )
		{
			//	callback
			transitionend( $m,
				function()
				{
					$submenu.removeClass( _c.opened );
				}, c.transitionDuration
			);

			$parent.parent().removeClass( _c.subopening );
		}
		return 'close';
	}

	function preventKeypressSearch( c )
	{
		switch( c )
		{
			case 9:		//	tab
			case 16:	//	shift
			case 17:	//	control
			case 18:	//	alt
			case 37:	//	left
			case 38:	//	top
			case 39:	//	right
			case 40:	//	bottom
				return true;
		}
		return false;
	}

	function findScrollTop()
	{
		if ( !$scrollTopNode )
		{
			if ( $html.scrollTop() != 0 )
			{
				$scrollTopNode = $html;
			}
			else if ( $body.scrollTop() != 0 )
			{
				$scrollTopNode = $body;
			}
		}
		return ( $scrollTopNode ) ? $scrollTopNode.scrollTop() : 0;
	}

	function transitionend( $e, fn, duration )
	{
		var s = $.fn.mmenu.support.transition;
	    if ( s == 'webkitTransition' )
	    {
	        $e.one( 'webkitTransitionEnd', fn );
	    }
		else if ( s )
		{
			$e.one( _e.transitionend, fn );
		}
		else
		{
			setTimeout( fn, duration );
		}
	}
	function minMax( val, min, max )
	{
		if ( val < min )
		{
			val = min;
		}
		if ( val > max )
		{
			val = max;
		}
		return val;
	}
	function valueOrFn( o, $e, d )
	{
		if ( typeof o == 'function' )
		{
			return o.call( $e[ 0 ] );
		}
		if ( typeof o == 'undefined' && typeof d != 'undefined' )
		{
			return d;
		}
		return o;
	}
	function click( $b, fn, onTouchStart, add )
	{
		if ( typeof $b == 'string' )
		{
			$b = $( $b );
		}

		var event = ( onTouchStart )
			? $.fn.mmenu.support.touch
				? _e.touchstart
				: _e.mousedown
			: _e.click;

		if ( !add )
		{
			$b.off( event );
		}
		$b.on( event,
			function( e )
			{
				e.preventDefault();
				e.stopPropagation();

				fn.call( this, e );
			}
		);
	}

	function cls( c )
	{
		return 'mm-' + c;
	}
	function uncls( c )
	{
		if ( c.slice( 0, 3 ) == 'mm-' )
		{
			c = c.slice( 3 );
		}
		return c;
	}
	function evt( e )
	{
		return e + '.mm';
	}
	function dta( d )
	{
		return 'mm-' + d;
	}

})( jQuery );
//
// some general initialization here
//
if (typeof jQuery != "undefined") {
    $(function() {
        if ($.isFunction($.blockUI)) {
            // set default cursor for popup
            $.blockUI.defaults.css.cursor = "default";

            // enable overlay opacity for FF/Linux
            $.blockUI.defaults.applyPlatformOpacityRules = false;
        }
    });
}

/**
 * Redirects to url
 *
 * @param url Url to redirect
 */
function redirect(url) {
    window.location.href = url;
}

/**
 * Shows specified anchor
 *
 * @param name Name of anchor to show
 */
function goToAnchor(name) {
    var url = window.location.href;
    var parts = url.split("#");

    window.location.href = parts[0] + "#" + name;
}

function scrollToTop() {
    $("html, body").animate({scrollTop: 0}, 'fast');
}

/**
 * Convert new line symbols to html br
 *
 * @param value input string to convert
 * @return string
 */
function nl2br(value) {
    return value.replace(/\r\n/g, "<br />")
        .replace(/\n/g, "<br />")
        .replace(/\r/g, "<br />");
}

/**
 * Removes html entities from string
 *
 * @param value input string
 * @return string
 */
function stripTags(value) {
    return value.replace(/<\/?[^>]+>/gi, '');
}

/**
 * Returns alias way formatted string
 *
 * @param input
 * @return string
 */
function getAliasString(input) {
    return input.toLowerCase()
        .replace(/[^\w\d]+/g, '-')
        .replace(/-{2,}/g, '-')
        .replace(/^-/, '')
        .replace(/-$/, '');
}

/**
 * Creates alias string from one field and put it to another field
 *
 * @param fromElSelector
 * @param toElSelector
 */
function aliasCreator(fromElSelector, toElSelector) {
    var changeAlias = function() {
        var alias = $(fromElSelector).val();
        $(toElSelector).val(getAliasString(alias));
    };

    $(fromElSelector).keyup(changeAlias);
    $(fromElSelector).blur(changeAlias);
}

/**
 * Extends one class from another
 * 
 * @param child
 * @param parent
 */
function extendClass(child, parent) {
	var F = function() { };
	F.prototype = parent.prototype;
	
    child.prototype = new F();
	child.prototype.constructor = child;
	child.superclass = parent.prototype;
}

/**
 * Class for validation purposes
 */
var Validator = {
    isEmpty: function(value) {
        return value == "" || value == null;
    },
    isEmail: function(value) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
    }
};

var tooltipTimeout = null;

/**
 * Shows modal popup with message. Redirects to url if specified
 *
 * @param message Message to show
 * @param url Url to redirect (optional)
 */
function showTooltipMessage(message, url) {
    if (typeof jQuery != "undefined" && $.isFunction($("body").dialog)) {
        if ($("#message-dlg").length == 0) {
            $(document.body).append("<div id=\"message-dlg\" style=\"display: none;\"></div>")
        }

        $("#message-dlg").html(message);
        $("#message-dlg").dialog({
            title: "Message",
            minHeight: 0,
            modal: true,
            resizable: false,
            buttons: {
                "Ok": function() {
                    $(this).dialog("close");

                    if (url) {
                        redirect(url);
                    }
                }
            },
            close: function(event, ui) {
                clearTimeout(tooltipTimeout);

                if (url) {
                    redirect(url);
                }
            }
        });

        tooltipTimeout = setTimeout(function() {
            $("#message-dlg").dialog("close");

            if (url) {
                redirect(url);
            }
        }, 3000);
    } else {
        alert(message);
    }
}

/**
 * Shows confirmation modal popup with message
 *
 * @param message Message to show
 * @param okCallback
 * @param cancelCallback
 */
function showConfirmDlg(message, okCallback, cancelCallback) {
    if (typeof jQuery != "undefined" && $.isFunction($("body").dialog)) {
        if ($("#confirm-dlg").length == 0) {
            $(document.body).append("<div id=\"confirm-dlg\" style=\"display: none;\"></div>")
        }

        $("#confirm-dlg").html(message);
        $("#confirm-dlg").dialog({
            title: "Confirm",
            minHeight: 0,
            modal: true,
            resizable: false,
            buttons: {
                "Ok": function() {
                    $(this).dialog("close");

                    if ($.isFunction(okCallback)) {
                        okCallback.call(this);
                    }
                },
                "Cancel": function() {
                    $(this).dialog("close");

                    if ($.isFunction(cancelCallback)) {
                        cancelCallback.call(this);
                    }
                }
            }
        });
    } else {
        if (confirm(message)) {
            okCallback.call(this);
        } else {
            cancelCallback.call(this);
        }
    }
}

var _raqPopupCache;
var _raqPopupGlobalEventsInitialized = false;

function preloadRaqPopup() {
    if (_raqPopupCache) {
        return;
    }

    $.ajax({
        url: '/ajax/raq-popup',
        data: {format: "html"},
        async: false,
        success: function(data) {
            _raqPopupCache = data;
        }
    });
}

function showRaqPopup() {
    if (_raqPopupCache) {
        _showRaqPopup(_raqPopupCache);
        _initRaqPopup();
        return;
    }

    $.ajax({
        url: '/ajax/raq-popup',
        data: {format: "html"},
        async: false,
        success: function(data) {
            _raqPopupCache = data;
            _showRaqPopup(data);
            _initRaqPopup();
        },
        error: function() {
            showTooltipMessage(Config.generalErrorMessage);
        }
    });
}

function _initRaqPopup() {
    if (!_raqPopupGlobalEventsInitialized) {
        var escapeBtnHandler = function(e) {
            var code = e.keyCode ? e.keyCode : e.which;

            if (code == 27) {
                $.unblockUI();
            }
        };

        // setup esc button to exit from popup
        $(document).unbind('keyup', escapeBtnHandler);
        $(document).keyup(escapeBtnHandler);
    }

    _raqPopupGlobalEventsInitialized = true;

    $(".jq-raq-form").submit(function() {
        var dispatcher = new AjaxFormDispatcherJson(
            '/ajax/submit-raq',
            {
                containerEl: ".jq-raq-form-container",
                formEl: ".jq-raq-form",
                successCallback: function(data) {
                    redirect('/thankyou/');
                },
                fieldsErrorsCallback: function(errors) {
                    for (var i in errors) {
                        var error = errors[i];
                        var $element = $(".jq-raq-form [name=" + error.name + "]");

                        $element.closest(".jq-form-row").addClass("error");

                        var separator = ", ";
                        var msg = "";

                        if ($.isArray(error.messages)) {
                            msg += error.messages.join(separator);
                        } else {
                            msg += error.messages;
                        }

                        $element.closest(".jq-form-row").find("label").append(" <span>" + msg + "</span>");
                    }
                }
            }
        );

        $(".jq-raq-form .jq-form-row").removeClass("error");
        $(".jq-raq-form .jq-form-row label span").remove();

        dispatcher.dispatch();
    });

    $(".jq-raq-form input[type=text], .jq-raq-form input[type=email], .jq-raq-form input[type=tel], .jq-raq-form textarea").focus(function() {
        $(this).closest(".jq-form-row").addClass("focus");
    }).blur(function() {
        $(this).closest(".jq-form-row").removeClass("focus");
    });
}

function _showRaqPopup(html) {
    var id = "raq-popup";
    var selector = "#" + id;
    var $raq = $(selector);

    if ($raq.length == 0) {
        $(document.body).append("<div id=\"" + id + "\" style=\"display: none;\"></div>");
        $raq = $(selector);
    } else {
        $raq.empty();
    }

    $raq.html(html);
    $raq.find(".jq-raq-popup-verisign-container").html($(".jq-verisign-container").html());

    $.blockUI({
        message: $raq,
        css: {
            top: '50%',
            left: '50%',
            width: '632px',
            height: '549px',
            marginLeft: '-316px',
            marginTop: '-274px'
        }
    });
}

//
// RAQ popup events initialization
//
$(function() {
    $(".jq-raq-popup-btn").click(showRaqPopup);

    if ($(".jq-raq-popup-btn").length > 0) {
        preloadRaqPopup();
    }
});

var videoPopupCache = {};

/**
 * Shows popup with video
 *
 * @param type Type of video popup. Can be 'home', 'widget', 'portfolio', 'microsite-rd', 'wdd-cms', 'home-testimonials-1', 'home-testimonials-2', 'home-testimonials-3'
 */
function showVideoPopup(type) {
    if (!type) {
        type = "home";
    }

    if (videoPopupCache[type]) {
        _showVideoPopup(videoPopupCache[type]);
        return;
    }
    
    $.ajax({
        url: '/ajax/video-popup',
        data: {type: type, format: "html"},
        async: false,
        success: function(data) {
            videoPopupCache[type] = data;
            _showVideoPopup(data);

            var escapeBtnHandler = function(e) {
                var code = e.keyCode ? e.keyCode : e.which;

                if (code == 27) {
                    $.unblockUI();
                }
            };

            // setup esc button to exit from popup
            $(document).unbind('keyup', escapeBtnHandler);
            $(document).keyup(escapeBtnHandler);
        },
        error: function() {
            showTooltipMessage(Config.generalErrorMessage);
        }
    });
}

function _showVideoPopup(html) {
    var id = "video-popup";
    var selector = "#" + id;
    var $video = $(selector);

/*
    if ($video.length == 0) {
        $(document.body).append("<div id=\"" + id + "\" style=\"display: none;\"></div>");
        $video = $(selector);
    } else {
        $video.empty();
    }
    

    $video.html(html);
*/    
    html = "<div id=\"" + id + "\" style=\"display: block;\">"+html+"</div>";

    $.blockUI({
//        message: $video,
        message: html,
        css: {
            top: '50%',
            left: '50%',
            width: '714px',
            height: '560px',
            marginLeft: '-357px',
            marginTop: '-280px'
        }
    });
}

/**
 * Make specified element's text expandable
 *
 * @param symbols Number of symbols to show before "More" link (optional)
 * @param selector Selector for element(s) (optional)
 */
function makeExpandableText(symbols, selector) {
    if (typeof jQuery == "undefined" || !$.isFunction($("body").expander)) {
        return;
    }

    if (!symbols) {
        symbols = 180;
    }
    
    if (!selector) {
        selector = ".sys-expandable-text";
    }
    
    $(selector).expander({
        slicePoint: symbols,
        expandText: "Read More",
        userCollapseText: "Less"
    });
}
function makeExpandableText(symbols, selector) {

    
}




/**
 * Base class for ajax actions dispatching
 * Uses jquery ajaxSubmit and loadmask plugins
 *
 * Available options:
 *  containerEl (optional) - container for all elements that are used in send/receive/dispatch process. Body element by default
 *  masking (optional) - true/false to enable/disable masking while sending request to server. False by default
 *  maskEl (optional) - element for apply masking functionality. 'containerEl' is used by default
 *  loadingMessage (optional) - message that would be shown above the masked element. Empty by default
 *
 * Available callbacks:
 *  success
 *  error
 *  customJs - when action dispacher receives 'custom js' command, it will call this callback
 *
 * @param url string
 * @param options object (containerEl, masking, maskEl, loadingMessage)
 */
function AjaxDispatcher(url, options) {
    this.url = url;

    // options setup
    this.containerEl = (options.containerEl) ? options.containerEl : "body";
    this.masking = (options.masking) ? options.masking : false;
    this.maskEl = (options.maskEl) ? options.maskEl : null;
    this.loadingMessage = (typeof options.loadingMessage != 'undefined') ? options.loadingMessage : null;

    // setup callback functions
    this.success = (options.success) ? options.success : null;
    this.error = (options.error) ? options.error : null;
    this.customJs = (options.customJs) ? options.customJs : null;
}

AjaxDispatcher.ACTION_NONE = 'none';
AjaxDispatcher.ACTION_REDIRECT = 'redirect';
AjaxDispatcher.ACTION_SHOW_MESSAGE = 'show-message';
AjaxDispatcher.ACTION_SHOW_MESSAGE_AUDIT = 'show-message-audit';
AjaxDispatcher.ACTION_SHOW_FIELD_VALIDATION_STATUS = 'show-field-validation-status';
AjaxDispatcher.ACTION_SHOW_FORM_VALIDATION_ERRORS = 'show-form-validation-errors';
AjaxDispatcher.ACTION_RELOAD_GRID = 'reload-grid';
AjaxDispatcher.ACTION_CUSTOM_JS = 'custom-js';

AjaxDispatcher.prototype.dispatch = function() {};

AjaxDispatcher.prototype.maskContainer = function() {
    if (!$.isFunction($("body").mask) || !this.masking) {
        return;
    }

    if (this.loadingMessage != null) {
        $(this.maskEl ? this.maskEl : this.containerEl).mask(this.loadingMessage);
    } else {
        $(this.maskEl ? this.maskEl : this.containerEl).mask();
    }
};

AjaxDispatcher.prototype.unmaskContainer = function() {
    if (!$.isFunction($("body").unmask) || !this.masking) {
        return;
    }

    $(this.maskEl ? this.maskEl : this.containerEl).unmask();
};

/**
 * Function that decide what to do with actions in response
 *
 * @param data object
 */
AjaxDispatcher.prototype.dispatchAction = function(data) {
    switch (data.action) {
        case AjaxDispatcher.ACTION_NONE:
            break;
        case AjaxDispatcher.ACTION_REDIRECT:
            if (data.message) {
                showTooltipMessage(data.message, data.url);
            } else {
                redirect(data.url);
            }

            break;
        case AjaxDispatcher.ACTION_SHOW_MESSAGE:
            showTooltipMessage(data.message);
            break;
        case AjaxDispatcher.ACTION_SHOW_MESSAGE_AUDIT:
            showThankYouMessage();
            break;
        case AjaxDispatcher.ACTION_SHOW_FIELD_VALIDATION_STATUS:
            this.showFieldValidationStatus(data.fieldName, data.isValid, data.errors);
            break;
        case AjaxDispatcher.ACTION_SHOW_FORM_VALIDATION_ERRORS:
            this.showFormValidationErrors(data.errors);
            break;
        case AjaxDispatcher.ACTION_RELOAD_GRID:
            $("#" + data.gridId).trigger("reloadGrid");
            break;
        case AjaxDispatcher.ACTION_CUSTOM_JS:
            if ($.isFunction(this.customJs)) {
                this.customJs.call(this, data.data);
            }

            break;
    }
};

//
// =====================================================================================================================
//

/**
 * Class for dispatching action requests
 *
 * Available options:
 *  options from base class
 *  data (optional) - data that will be sent with general request data
 *
 * @param url string
 * @param options object (data)
 */
function AjaxActionDispatcherJson(url, options) {
    AjaxActionDispatcherJson.superclass.constructor.call(this, url, options);

    // setup options
    this.data = (options.data) ? options.data : {};
};

extendClass(AjaxActionDispatcherJson, AjaxDispatcher);

AjaxActionDispatcherJson.prototype.dispatch = function() {
    var t = this;

    $.ajax({
        url: this.url,
        type: "POST",
        data: this.data,
        dataType: 'json',
        success: function(data) {
            t.unmaskContainer();

            if (!data || !data.action) {
                showTooltipMessage(Config.generalErrorMessage);
                return;
            }

            t.dispatchAction(data);

            if ($.isFunction(t.success)) {
                t.success.call(t, data.action);
            }
        },
        error: function() {
            t.unmaskContainer();
//            showTooltipMessage(Config.generalErrorMessage);

            if ($.isFunction(t.error)) {
                t.error.call(t);
            }
        }
    });

    this.maskContainer();
};

//
// =====================================================================================================================
//

/**
 * Implements form response dispatching
 *
 * Available options:
 *  formEl - form element to collect data from
 *  data (optional) - data that will be sent with general request data
 *  fieldContainerEl (optional) - form field container element
 *  scrollToTopOnError (optional) - if true page will scroll to top when error occured
 *  validationDisplayMode (optional) - could be "per-field", "box" or "popup".
 *   - "per-field" displays error near each field
 *   - "box" displays errors in one box for error messages
 *   - "popup" displays popup window with error messages
 *  validateFields (optional)
 *  validateFieldsSelector (optional)
 *  validateFieldsUrl (optional)
 *  validationMessagesEl (optional) - all validation messages will be placed inside this element
 *  preValidateForm (optional, only when validateFields is true)
 *  validClass (optional)
 *  notValidClass (optional) - css class that would be added to invalid element container
 *
 * Available callbacks:
 *  customShowFormValidationErrors (optional) - callback for validation errors showing
 *  customHideFormValidationErrors (optional) - callback for validation errors hiding
 *
 * @param url string
 * @param options object
 */
function AjaxFormDispatcherJson(url, options) {
    AjaxFormDispatcherJson.superclass.constructor.call(this, url, options);

    // options
    this.formEl = options.formEl;
    this.fieldContainerEl = (options.fieldContainerEl) ? options.fieldContainerEl : ".jq-form-row";
    this.data = (options.data) ? options.data : {};

    this.validationDisplayMode = (options.validationDisplayMode) ? options.validationDisplayMode : "box";
    this.validateFields = options.validateFields ? options.validateFields : false;
    this.validateFieldsSelector = options.validateFieldsSelector ? options.validateFieldsSelector : this.formEl + " input[type=text], " + this.formEl + " textarea";
    this.validateFieldsUrl = (options.validateFieldsUrl) ? options.validateFieldsUrl : null;
    this.validationMessagesEl = (options.validationMessagesEl) ? options.validationMessagesEl : null;
    this.preValidateEnabled = (options.preValidateEnabled) ? options.preValidateEnabled : false;
    this.scrollToTopOnError = (typeof options.scrollToTopOnError != 'undefined') ? options.scrollToTopOnError : false;

    this.validClass = (options.validClass) ? options.validClass : "valid";
    this.notValidClass = (options.notValidClass) ? options.notValidClass : "error";

    // callback functions
    this.customShowFormValidationErrors = (options.customShowFormValidationErrors) ? options.customShowFormValidationErrors : null;
    this.customInjectionShowFormValidationErrors = (options.customInjectionShowFormValidationErrors) ? options.customInjectionShowFormValidationErrors : null;
    this.customHideFormValidationErrors = (options.customHideFormValidationErrors) ? options.customHideFormValidationErrors : null;

    // separate field validation
    if (this.validateFields && this.validateFieldsUrl) {
        var t = this;

        $(this.validateFieldsSelector).blur(function() {
            t.validateField($(this).attr("name"));
        });

        if (this.preValidateEnabled) {
            $(this.validateFieldsSelector).each(function() {
                if (!Validator.isEmpty($(this).val())) {
                    t.validateField($(this).attr("name"));
                }
            });
        }
    }
}

extendClass(AjaxFormDispatcherJson, AjaxDispatcher);

AjaxFormDispatcherJson.prototype.dispatch = function() {
    var t = this;

    $(this.formEl).ajaxSubmit({
        url: this.url,
        data: this.data,
        dataType: 'json',
        success: function(data, statusText, xhr, $form) {
            t.unmaskContainer();
            t.hideFormValidationErrors();

            if (!data || !data.action) {
                showTooltipMessage(Config.generalErrorMessage);
                return;
            }

            t.dispatchAction(data);

            if ($.isFunction(t.success)) {
                t.success.call(t, data.action);
            }
        },
        error: function() {
            t.unmaskContainer();
//            showTooltipMessage(Config.generalErrorMessage);

            if ($.isFunction(t.error)) {
                t.error.call(t);
            }
        }
    });

    this.maskContainer();
    this.hideFormValidationErrors();
};

AjaxFormDispatcherJson.prototype.validateField = function(fieldName) {
    var t = this;
    var data = this.data;

    data.fieldName = fieldName;

    $(this.formEl).ajaxSubmit({
        url: this.validateFieldsUrl,
        data: this.data,
        dataType: 'json',
        success: function(data, statusText, xhr, $form) {
            t.hideFieldValidationStatus(fieldName);

            if (!data || !data.action) {
                showTooltipMessage(Config.generalErrorMessage);
                return;
            }

            t.dispatchAction(data);

            if ($.isFunction(t.success)) {
                t.success.call(t, data.action);
            }
        },
        error: function() {
//            showTooltipMessage(Config.generalErrorMessage);

            if ($.isFunction(t.error)) {
                t.error.call(t);
            }
        }
    });

    this.hideFieldValidationStatus(fieldName);
};

AjaxFormDispatcherJson.prototype.showFormValidationErrors = function(errors) {
    if (this.customShowFormValidationErrors) {
        this.customShowFormValidationErrors.call(this, errors);
        return;
    }
    if (this.customInjectionShowFormValidationErrors) {
        this.customInjectionShowFormValidationErrors.call(this, errors);
    }

    if (this.validationDisplayMode == "per-field") {
        for (var i in errors) {
            var error = errors[i];
            var $element = $(this.formEl + " [name=" + error.name + "]");

            $element.closest(this.fieldContainerEl).addClass(this.notValidClass);

            var separator = ", ";
            var msg = "";

            if ($.isArray(error.messages)) {
                msg += error.messages.join(separator);
            } else {
                msg += error.messages;
            }

            $element.closest(this.fieldContainerEl).find("label").append(" <span>" + msg + "</span>");
        }
    } else if (this.validationDisplayMode == "box" && this.validationMessagesEl) {
        $(this.containerEl + " " + this.validationMessagesEl).html(this.getValidationErrors(errors));
        $(this.containerEl + " " + this.validationMessagesEl).show();

        for (var i in errors) {
            var field = errors[i];
            $(this.formEl + " [name=\"" + field.name + "\"]").closest(this.fieldContainerEl).addClass(this.notValidClass);
        }
    } else {
        showTooltipMessage(this.getValidationErrors(errors, 'text'));
    }

    if (this.scrollToTopOnError && typeof scrollToTop != 'undefined' && $.isFunction(scrollToTop)) {
        scrollToTop();
    }
};

AjaxFormDispatcherJson.prototype.hideFormValidationErrors = function() {
    if (this.customHideFormValidationErrors) {
        this.customHideFormValidationErrors.call(this);
        return;
    }

    if (this.validationDisplayMode == "per-field") {
        $(this.formEl + " " + this.fieldContainerEl).removeClass(this.notValidClass);
        $(this.formEl + " " + this.fieldContainerEl + " label span").remove();
    } else if (this.validationDisplayMode == "box" && this.validationMessagesEl) {
        $(this.containerEl + " " + this.validationMessagesEl).empty();
        $(this.containerEl + " " + this.validationMessagesEl).hide();
    }
};

AjaxFormDispatcherJson.prototype.showFieldValidationStatus = function (fieldName, isValid, errors) {
    if (isValid) {
        $(this.formEl + " [name=\"" + fieldName + "\"]").closest(this.fieldContainerEl).addClass(this.validClass);
    } else {
        this.showFormValidationErrors(errors);
    }
};

AjaxFormDispatcherJson.prototype.hideFieldValidationStatus = function(fieldName) {
    $element = $(this.formEl + " [name=\"" + fieldName + "\"]");
    $element.closest(this.fieldContainerEl).removeClass(this.validClass);
    $element.closest(this.fieldContainerEl).removeClass(this.notValidClass);
    $element.closest(this.fieldContainerEl).find("label").find("span").remove();
}

AjaxFormDispatcherJson.prototype.getValidationErrors = function(errors, type) {
    if (!type) {
        type = 'html';
    }

    var output = "";

    if (type == 'html') {
        output += "<ul>";
    }

    for (var i in errors) {
        if (type == 'html') {
            output += "<li>";
        }

        var error = errors[i];

        if ($.isPlainObject(error)) {
            output += "<span class=\"field-label\">" + error.label + ":</span> ";

            if ($.isArray(error.messages)) {
                output += error.messages.join("; ");
            } else {
                output += error.messages;
            }
        } else {
            // some custom error, not linked to any field
            output += errors[i];
        }

        if (type == 'html') {
            output += "</li>";
        } else {
            output += "\n";
        }
    }

    if (type == 'html') {
        output += "</ul>";
    }

    return output;
};

/*!
 * jQuery Form Plugin
 * version: 2.87 (20-OCT-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
	Usage Note:
	-----------
	Do not use both ajaxSubmit and ajaxForm on the same form.  These
	functions are intended to be exclusive.  Use ajaxSubmit if you want
	to bind your own submit handler to the form.  For example,

	$(document).ready(function() {
		$('#myForm').bind('submit', function(e) {
			e.preventDefault(); // <-- important
			$(this).ajaxSubmit({
				target: '#output'
			});
		});
	});

	Use ajaxForm when you want the plugin to manage all the event binding
	for you.  For example,

	$(document).ready(function() {
		$('#myForm').ajaxForm({
			target: '#output'
		});
	});

	When using ajaxForm, the ajaxSubmit function will be invoked for you
	at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
	// fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	if (!this.length) {
		log('ajaxSubmit: skipping submit process - no element selected');
		return this;
	}

	var method, action, url, $form = this;

	if (typeof options == 'function') {
		options = { success: options };
	}

	method = this.attr('method');
	action = this.attr('action');
	url = (typeof action === 'string') ? $.trim(action) : '';
	url = url || window.location.href || '';
	if (url) {
		// clean url (don't include hash vaue)
		url = (url.match(/^([^#]+)/)||[])[1];
	}

	options = $.extend(true, {
		url:  url,
		success: $.ajaxSettings.success,
		type: method || 'GET',
		iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	}, options);

	// hook for manipulating the form data before it is extracted;
	// convenient for use with rich editors like tinyMCE or FCKEditor
	var veto = {};
	this.trigger('form-pre-serialize', [this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
		return this;
	}

	// provide opportunity to alter form data before it is serialized
	if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSerialize callback');
		return this;
	}

   var traditional = options.traditional;
   if ( traditional === undefined ) {
      traditional = $.ajaxSettings.traditional;
   }

	var qx,n,v,a = this.formToArray(options.semantic);
	if (options.data) {
		options.extraData = options.data;
      qx = $.param(options.data, traditional);
	}

	// give pre-submit callback an opportunity to abort the submit
	if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
		log('ajaxSubmit: submit aborted via beforeSubmit callback');
		return this;
	}

	// fire vetoable 'validate' event
	this.trigger('form-submit-validate', [a, this, options, veto]);
	if (veto.veto) {
		log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
		return this;
	}

	var q = $.param(a, traditional);
   if (qx)
      q = ( q ? (q + '&' + qx) : qx );

	if (options.type.toUpperCase() == 'GET') {
		options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
		options.data = null;  // data is null for 'get'
	}
	else {
		options.data = q; // data is the query string for 'post'
	}

	var callbacks = [];
	if (options.resetForm) {
		callbacks.push(function() { $form.resetForm(); });
	}
	if (options.clearForm) {
		callbacks.push(function() { $form.clearForm(options.includeHidden); });
	}

	// perform a load on the target only if dataType is not provided
	if (!options.dataType && options.target) {
		var oldSuccess = options.success || function(){};
		callbacks.push(function(data) {
			var fn = options.replaceTarget ? 'replaceWith' : 'html';
			$(options.target)[fn](data).each(oldSuccess, arguments);
		});
	}
	else if (options.success) {
		callbacks.push(options.success);
	}

	options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
		var context = options.context || options;   // jQuery 1.4+ supports scope context
		for (var i=0, max=callbacks.length; i < max; i++) {
			callbacks[i].apply(context, [data, status, xhr || $form, $form]);
		}
	};

	// are there files to upload?
	var fileInputs = $('input:file', this).length > 0;
	var mp = 'multipart/form-data';
	var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	// options.iframe allows user to force iframe mode
	// 06-NOV-09: now defaulting to iframe mode if file input is detected
   if (options.iframe !== false && (fileInputs || options.iframe || multipart)) {
	   // hack to fix Safari hang (thanks to Tim Molendijk for this)
	   // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	   if (options.closeKeepAlive) {
		   $.get(options.closeKeepAlive, function() { fileUpload(a); });
		}
	   else {
		   fileUpload(a);
		}
   }
   else {
		// IE7 massage (see issue 57)
		/*
		if ($.browser.msie && method == 'get' && typeof options.type === "undefined") {
			var ieMeth = $form[0].getAttribute('method');
			if (typeof ieMeth === 'string')
				options.type = ieMeth;
		}
		*/
		$.ajax(options);
   }

	// fire 'notify' event
	this.trigger('form-submit-notify', [this, options]);
	return this;


	// private function for handling file uploads (hat tip to YAHOO!)
	function fileUpload(a) {
		var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
        var useProp = !!$.fn.prop;

        if (a) {
            if ( useProp ) {
            	// ensure that every serialized input is still enabled
              	for (i=0; i < a.length; i++) {
                    el = $(form[a[i].name]);
                    el.prop('disabled', false);
              	}
            } else {
              	for (i=0; i < a.length; i++) {
                    el = $(form[a[i].name]);
                    el.removeAttr('disabled');
              	}
            };
        }

		if ($(':input[name=submit],:input[id=submit]', form).length) {
			// if there is an input with a name or id of 'submit' then we won't be
			// able to invoke the submit fn on the form (at least not x-browser)
			alert('Error: Form elements must not have name or id of "submit".');
			return;
		}

		s = $.extend(true, {}, $.ajaxSettings, options);
		s.context = s.context || s;
		id = 'jqFormIO' + (new Date().getTime());
		if (s.iframeTarget) {
			$io = $(s.iframeTarget);
			n = $io.attr('name');
			if (n == null)
			 	$io.attr('name', id);
			else
				id = n;
		}
		else {
			$io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
			$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
		}
		io = $io[0];


		xhr = { // mock object
			aborted: 0,
			responseText: null,
			responseXML: null,
			status: 0,
			statusText: 'n/a',
			getAllResponseHeaders: function() {},
			getResponseHeader: function() {},
			setRequestHeader: function() {},
			abort: function(status) {
				var e = (status === 'timeout' ? 'timeout' : 'aborted');
				log('aborting upload... ' + e);
				this.aborted = 1;
				$io.attr('src', s.iframeSrc); // abort op in progress
				xhr.error = e;
				s.error && s.error.call(s.context, xhr, e, status);
				g && $.event.trigger("ajaxError", [xhr, s, e]);
				s.complete && s.complete.call(s.context, xhr, e);
			}
		};

		g = s.global;
		// trigger ajax global events so that activity/block indicators work like normal
		if (g && ! $.active++) {
			$.event.trigger("ajaxStart");
		}
		if (g) {
			$.event.trigger("ajaxSend", [xhr, s]);
		}

		if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
			if (s.global) {
				$.active--;
			}
			return;
		}
		if (xhr.aborted) {
			return;
		}

		// add submitting element to data if we know it
		sub = form.clk;
		if (sub) {
			n = sub.name;
			if (n && !sub.disabled) {
				s.extraData = s.extraData || {};
				s.extraData[n] = sub.value;
				if (sub.type == "image") {
					s.extraData[n+'.x'] = form.clk_x;
					s.extraData[n+'.y'] = form.clk_y;
				}
			}
		}

		var CLIENT_TIMEOUT_ABORT = 1;
		var SERVER_ABORT = 2;

		function getDoc(frame) {
			var doc = frame.contentWindow ? frame.contentWindow.document : frame.contentDocument ? frame.contentDocument : frame.document;
			return doc;
		}

		// take a breath so that pending repaints get some cpu time before the upload starts
		function doSubmit() {
			// make sure form attrs are set
			var t = $form.attr('target'), a = $form.attr('action');

			// update form attrs in IE friendly way
			form.setAttribute('target',id);
			if (!method) {
				form.setAttribute('method', 'POST');
			}
			if (a != s.url) {
				form.setAttribute('action', s.url);
			}

			// ie borks in some cases when setting encoding
			if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
				$form.attr({
					encoding: 'multipart/form-data',
					enctype:  'multipart/form-data'
				});
			}

			// support timout
			if (s.timeout) {
				timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
			}

			// look for server aborts
			function checkState() {
				try {
					var state = getDoc(io).readyState;
					log('state = ' + state);
					if (state.toLowerCase() == 'uninitialized')
						setTimeout(checkState,50);
				}
				catch(e) {
					log('Server abort: ' , e, ' (', e.name, ')');
					cb(SERVER_ABORT);
					timeoutHandle && clearTimeout(timeoutHandle);
					timeoutHandle = undefined;
				}
			}

			// add "extra" data to form if provided in options
			var extraInputs = [];
			try {
				if (s.extraData) {
					for (var n in s.extraData) {
						extraInputs.push(
							$('<input type="hidden" name="'+n+'" />').attr('value',s.extraData[n])
								.appendTo(form)[0]);
					}
				}

				if (!s.iframeTarget) {
					// add iframe to doc and submit the form
					$io.appendTo('body');
	                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
				}
				setTimeout(checkState,15);
				form.submit();
			}
			finally {
				// reset attrs and remove "extra" input elements
				form.setAttribute('action',a);
				if(t) {
					form.setAttribute('target', t);
				} else {
					$form.removeAttr('target');
				}
				$(extraInputs).remove();
			}
		}

		if (s.forceSync) {
			doSubmit();
		}
		else {
			setTimeout(doSubmit, 10); // this lets dom updates render
		}

		var data, doc, domCheckCount = 50, callbackProcessed;

		function cb(e) {
			if (xhr.aborted || callbackProcessed) {
				return;
			}
			try {
				doc = getDoc(io);
			}
			catch(ex) {
				log('cannot access response document: ', ex);
				e = SERVER_ABORT;
			}
			if (e === CLIENT_TIMEOUT_ABORT && xhr) {
				xhr.abort('timeout');
				return;
			}
			else if (e == SERVER_ABORT && xhr) {
				xhr.abort('server abort');
				return;
			}

			if (!doc || doc.location.href == s.iframeSrc) {
				// response not received yet
				if (!timedOut)
					return;
			}
            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

			var status = 'success', errMsg;
			try {
				if (timedOut) {
					throw 'timeout';
				}

				var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
				log('isXml='+isXml);
				if (!isXml && window.opera && (doc.body == null || doc.body.innerHTML == '')) {
					if (--domCheckCount) {
						// in some browsers (Opera) the iframe DOM is not always traversable when
						// the onload callback fires, so we loop a bit to accommodate
						log('requeing onLoad callback, DOM not available');
						setTimeout(cb, 250);
						return;
					}
					// let this fall through because server response could be an empty document
					//log('Could not access iframe DOM after mutiple tries.');
					//throw 'DOMException: not available';
				}

				//log('response detected');
                var docRoot = doc.body ? doc.body : doc.documentElement;
                xhr.responseText = docRoot ? docRoot.innerHTML : null;
				xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
				if (isXml)
					s.dataType = 'xml';
				xhr.getResponseHeader = function(header){
					var headers = {'content-type': s.dataType};
					return headers[header];
				};
                // support for XHR 'status' & 'statusText' emulation :
                if (docRoot) {
                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                }

				var dt = (s.dataType || '').toLowerCase();
				var scr = /(json|script|text)/.test(dt);
				if (scr || s.textarea) {
					// see if user embedded response in textarea
					var ta = doc.getElementsByTagName('textarea')[0];
					if (ta) {
						xhr.responseText = ta.value;
                        // support for XHR 'status' & 'statusText' emulation :
                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
					}
					else if (scr) {
						// account for browsers injecting pre around json response
						var pre = doc.getElementsByTagName('pre')[0];
						var b = doc.getElementsByTagName('body')[0];
						if (pre) {
							xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
						}
						else if (b) {
							xhr.responseText = b.textContent ? b.textContent : b.innerText;
						}
					}
				}
				else if (dt == 'xml' && !xhr.responseXML && xhr.responseText != null) {
					xhr.responseXML = toXml(xhr.responseText);
				}

                try {
                    data = httpData(xhr, dt, s);
                }
                catch (e) {
                    status = 'parsererror';
                    xhr.error = errMsg = (e || status);
                }
			}
			catch (e) {
				log('error caught: ',e);
				status = 'error';
                xhr.error = errMsg = (e || status);
			}

			if (xhr.aborted) {
				log('upload aborted');
				status = null;
			}

            if (xhr.status) { // we've set xhr.status
                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
            }

			// ordering of these callbacks/triggers is odd, but that's how $.ajax does it
			if (status === 'success') {
				s.success && s.success.call(s.context, data, 'success', xhr);
				g && $.event.trigger("ajaxSuccess", [xhr, s]);
			}
            else if (status) {
				if (errMsg == undefined)
					errMsg = xhr.statusText;
				s.error && s.error.call(s.context, xhr, status, errMsg);
				g && $.event.trigger("ajaxError", [xhr, s, errMsg]);
            }

			g && $.event.trigger("ajaxComplete", [xhr, s]);

			if (g && ! --$.active) {
				$.event.trigger("ajaxStop");
			}

			s.complete && s.complete.call(s.context, xhr, status);

			callbackProcessed = true;
			if (s.timeout)
				clearTimeout(timeoutHandle);

			// clean up
			setTimeout(function() {
				if (!s.iframeTarget)
					$io.remove();
				xhr.responseXML = null;
			}, 100);
		}

		var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
			if (window.ActiveXObject) {
				doc = new ActiveXObject('Microsoft.XMLDOM');
				doc.async = 'false';
				doc.loadXML(s);
			}
			else {
				doc = (new DOMParser()).parseFromString(s, 'text/xml');
			}
			return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
		};
		var parseJSON = $.parseJSON || function(s) {
			return window['eval']('(' + s + ')');
		};

		var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

			var ct = xhr.getResponseHeader('content-type') || '',
				xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
				data = xml ? xhr.responseXML : xhr.responseText;

			if (xml && data.documentElement.nodeName === 'parsererror') {
				$.error && $.error('parsererror');
			}
			if (s && s.dataFilter) {
				data = s.dataFilter(data, type);
			}
			if (typeof data === 'string') {
				if (type === 'json' || !type && ct.indexOf('json') >= 0) {
					data = parseJSON(data);
				} else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
					$.globalEval(data);
				}
			}
			return data;
		};
	}
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *	is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *	used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
	// in jQuery 1.3+ we can fix mistakes with the ready state
	if (this.length === 0) {
		var o = { s: this.selector, c: this.context };
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing ajaxForm');
			$(function() {
				$(o.s,o.c).ajaxForm(options);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	return this.ajaxFormUnbind().bind('submit.form-plugin', function(e) {
		if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
			e.preventDefault();
			$(this).ajaxSubmit(options);
		}
	}).bind('click.form-plugin', function(e) {
		var target = e.target;
		var $el = $(target);
		if (!($el.is(":submit,input:image"))) {
			// is this a child element of the submit el?  (ex: a span within a button)
			var t = $el.closest(':submit');
			if (t.length == 0) {
				return;
			}
			target = t[0];
		}
		var form = this;
		form.clk = target;
		if (target.type == 'image') {
			if (e.offsetX != undefined) {
				form.clk_x = e.offsetX;
				form.clk_y = e.offsetY;
			} else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
				var offset = $el.offset();
				form.clk_x = e.pageX - offset.left;
				form.clk_y = e.pageY - offset.top;
			} else {
				form.clk_x = e.pageX - target.offsetLeft;
				form.clk_y = e.pageY - target.offsetTop;
			}
		}
		// clear form vars
		setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	});
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
	return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
	var a = [];
	if (this.length === 0) {
		return a;
	}

	var form = this[0];
	var els = semantic ? form.getElementsByTagName('*') : form.elements;
	if (!els) {
		return a;
	}

	var i,j,n,v,el,max,jmax;
	for(i=0, max=els.length; i < max; i++) {
		el = els[i];
		n = el.name;
		if (!n) {
			continue;
		}

		if (semantic && form.clk && el.type == "image") {
			// handle image inputs on the fly when semantic == true
			if(!el.disabled && form.clk == el) {
				a.push({name: n, value: $(el).val()});
				a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
			}
			continue;
		}

		v = $.fieldValue(el, true);
		if (v && v.constructor == Array) {
			for(j=0, jmax=v.length; j < jmax; j++) {
				a.push({name: n, value: v[j]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: n, value: v});
		}
	}

	if (!semantic && form.clk) {
		// input type=='image' are not found in elements array! handle it here
		var $input = $(form.clk), input = $input[0];
		n = input.name;
		if (n && !input.disabled && input.type == 'image') {
			a.push({name: n, value: $input.val()});
			a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
		}
	}
	return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
	//hand off to jQuery.param for proper encoding
	return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
	var a = [];
	this.each(function() {
		var n = this.name;
		if (!n) {
			return;
		}
		var v = $.fieldValue(this, successful);
		if (v && v.constructor == Array) {
			for (var i=0,max=v.length; i < max; i++) {
				a.push({name: n, value: v[i]});
			}
		}
		else if (v !== null && typeof v != 'undefined') {
			a.push({name: this.name, value: v});
		}
	});
	//hand off to jQuery.param for proper encoding
	return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *	  <input name="A" type="text" />
 *	  <input name="A" type="text" />
 *	  <input name="B" type="checkbox" value="B1" />
 *	  <input name="B" type="checkbox" value="B2"/>
 *	  <input name="C" type="radio" value="C1" />
 *	  <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *	   array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
	for (var val=[], i=0, max=this.length; i < max; i++) {
		var el = this[i];
		var v = $.fieldValue(el, successful);
		if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
			continue;
		}
		v.constructor == Array ? $.merge(val, v) : val.push(v);
	}
	return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
	var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	if (successful === undefined) {
		successful = true;
	}

	if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
		(t == 'checkbox' || t == 'radio') && !el.checked ||
		(t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
		tag == 'select' && el.selectedIndex == -1)) {
			return null;
	}

	if (tag == 'select') {
		var index = el.selectedIndex;
		if (index < 0) {
			return null;
		}
		var a = [], ops = el.options;
		var one = (t == 'select-one');
		var max = (one ? index+1 : ops.length);
		for(var i=(one ? index : 0); i < max; i++) {
			var op = ops[i];
			if (op.selected) {
				var v = op.value;
				if (!v) { // extra pain for IE...
					v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
				}
				if (one) {
					return v;
				}
				a.push(v);
			}
		}
		return a;
	}
	return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function(includeHidden) {
	return this.each(function() {
		$('input,select,textarea', this).clearFields(includeHidden);
	});
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
	var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
	return this.each(function() {
		var t = this.type, tag = this.tagName.toLowerCase();
		if (re.test(t) || tag == 'textarea' || (includeHidden && /hidden/.test(t)) ) {
			this.value = '';
		}
		else if (t == 'checkbox' || t == 'radio') {
			this.checked = false;
		}
		else if (tag == 'select') {
			this.selectedIndex = -1;
		}
	});
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
	return this.each(function() {
		// guard against an input with the name of 'reset'
		// note that IE reports the reset function as an 'object'
		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
			this.reset();
		}
	});
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
	if (b === undefined) {
		b = true;
	}
	return this.each(function() {
		this.disabled = !b;
	});
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
	if (select === undefined) {
		select = true;
	}
	return this.each(function() {
		var t = this.type;
		if (t == 'checkbox' || t == 'radio') {
			this.checked = select;
		}
		else if (this.tagName.toLowerCase() == 'option') {
			var $sel = $(this).parent('select');
			if (select && $sel[0] && $sel[0].type == 'select-one') {
				// deselect all other options
				$sel.find('option').selected(false);
			}
			this.selected = select;
		}
	});
};

// expose debug var
$.fn.ajaxSubmit.debug = false;

// helper fn for console logging
function log() {
	if (!$.fn.ajaxSubmit.debug)
		return;
	var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
	if (window.console && window.console.log) {
		window.console.log(msg);
	}
	else if (window.opera && window.opera.postError) {
		window.opera.postError(msg);
	}
};

})(jQuery);
var EqualBlocksHeight = function (elements, options) {
    "use strict";
    this.elements = elements;
    this.settings = $.extend(
        {
            splitBy     : false,
            isResizable : true,
            isFullLoaded: false,
            isBoxSized  : false
        },
        options || {});
    this.init();
};
EqualBlocksHeight.prototype = (function () {
    "use strict";
    /**
     * Init - Do magic
     *
     * @public
     */
    var init = function () {
            var root = this,
                win$ = $(window);
            // Equalize all elements on window resize event
            if (this.settings.isResizable) {
                var currentW = win$.width();
                win$.on('resize', function () {
                    var resizeW = $(this).width();
                    if(resizeW !== currentW) {
                        root.elements.css('height', '');
                        initEqualization.call(this, root);
                        currentW = resizeW;
                    }
                });
            }
            // Equalize all elements on window load event
            if (this.settings.isFullLoaded) {
                win$.on('load', function () {
                    root.elements.css('height', '');
                    initEqualization.call(this, root);
                });
            }
            // Run Equalization
            initEqualization.call(this, root);
        },
        /**
         * initEqualization
         *
         * @param {Object} thisObj EqualBlocksHeight object
         * @private
         */
            initEqualization = function (thisObj) {
            // Equalize all elements in the collection
            if (!thisObj.settings.splitBy) {
                equalizeHeightOfElements.call(thisObj, thisObj.elements);
            } else { // Equalize the set of elements in the collection
                var elementsSize = thisObj.elements.size(),
                    fixedLimit = thisObj.settings.splitBy,
                    floatLimit = 0;
                while (elementsSize > 0) {
                    var collection = thisObj.elements.slice(floatLimit, fixedLimit);
                    equalizeHeightOfElements.call(thisObj, collection);
                    floatLimit += thisObj.settings.splitBy;
                    fixedLimit += thisObj.settings.splitBy;
                    elementsSize -= thisObj.settings.splitBy;
                }
            }
        },
        /**
         * equalizeHeightOfElements
         *
         * @param {jQuery} elements Elements
         * @private
         */
            equalizeHeightOfElements = function (elements) {
            var elementsMaxHeight = getMaxHeightOfElements.call(this, elements);
            setHeightOfElements.call(this, elements, elementsMaxHeight);
        },
        /**
         * getMaxHeightOfElements
         *
         * @param {jQuery} elements Elements
         * @returns {number} Max elements height
         * @private
         */
            getMaxHeightOfElements = function (elements) {
            var maxOuterHeight = 0;
            elements.each(function () {
                var element = $(this), elementHeight = element.outerHeight();
                if (elementHeight > maxOuterHeight) {
                    maxOuterHeight = elementHeight;
                }
            });
            return maxOuterHeight;
        },
        /**
         * setHeightOfElements
         *
         * @param {jQuery} elements Elements
         * @param {number} elementsMaxHeight Max elements height
		 * @private
         */
            setHeightOfElements = function (elements, elementsMaxHeight) {
            var boxSized = this.settings.isBoxSized;
            elements.each(function () {
                var equalHeightsElement = $(this),
                    elementHeight = equalHeightsElement.height(),
                    elementOuterHeight = equalHeightsElement.outerHeight(),
                    elementDiffHeight = elementOuterHeight - elementHeight,
                    // elementToHeight = (elementsMaxHeight - elementOuterHeight) + (elementOuterHeight - elementHeight - elementDiffHeight);
                    elementToHeight = (elementsMaxHeight) + (-elementHeight - elementDiffHeight);
                if(boxSized) {
                    var totalHeight = elementHeight + elementToHeight + elementDiffHeight;
                    equalHeightsElement.css('height', totalHeight);
                } else {
                    var totalHeight = elementHeight + elementToHeight;
                    equalHeightsElement.css('height', totalHeight);
                }
            });
        };
    return {
        init: init
    };
}());