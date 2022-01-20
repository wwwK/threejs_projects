"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1027,4889],{84552:(e,t,r)=>{r.d(t,{Z:()=>d});var o,s=r(43697),i=r(10736),n=r(35463),a=r(5600),l=(r(80442),r(75215),r(92604),r(52525)),u=r(78981);let p=o=class extends i.wq{constructor(e){super(e),this.value=0,this.unit="milliseconds"}toMilliseconds(){return(0,n.rJ)(this.value,this.unit,"milliseconds")}clone(){return new o({value:this.value,unit:this.unit})}};(0,s._)([(0,a.Cb)({type:Number,json:{write:!0},nonNullable:!0})],p.prototype,"value",void 0),(0,s._)([(0,a.Cb)({type:u.v.apiValues,json:{type:u.v.jsonValues,read:u.v.read,write:u.v.write},nonNullable:!0})],p.prototype,"unit",void 0),p=o=(0,s._)([(0,l.j)("esri.TimeInterval")],p);var d=p},78346:(e,t,r)=>{r.d(t,{bA:()=>L});var o=r(20102),s=r(80442),i=r(95330),n=r(80903),a=r(25045),l=r(40330),u=r(92604),p=r(94362),d=r(99880),c=r(68773),h=(r(2587),r(17452));const m={};function y(e){var t;const r={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages&&e.packages.concat()||[],paths:{...e.paths}};return e.hasOwnProperty("async")||(r.async=!0),e.hasOwnProperty("isDebug")||(r.isDebug=!1),e.baseUrl||(r.baseUrl=m.baseUrl),null==(t=m.packages)||t.forEach((e=>{!function(e,t){for(const r of e)if(r.name===t.name)return;e.push(t)}(r.packages,e)})),r}var f=r(16358);class v{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((t=>{this[t]=(...r)=>e[t](...r)}))}}const g=f.Z.MutationObserver||f.Z.WebKitMutationObserver,w=function(){let e;if(f.Z.process&&f.Z.process.nextTick)e=e=>{f.Z.process.nextTick(e)};else if(f.Z.Promise)e=e=>{f.Z.Promise.resolve().then(e)};else if(g){const t=[],r=document.createElement("div");new g((()=>{for(;t.length>0;)t.shift()()})).observe(r,{attributes:!0}),e=e=>{t.push(e),r.setAttribute("queueStatus","1")}}return e}(),b=(()=>{const e=f.Z.MessageEvent;try{new e("message",{data:null})}catch{return(e,t={})=>{const{data:r,bubbles:o=!1,cancelable:s=!1}=t,i=document.createEvent("Event");return i.initEvent(e,o,s),i.data=r,i}}return(t,r)=>new e(t,r)})();class _{constructor(){this._dispatcher=new v,this._workerPostMessage({type:p.Cs.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){w((()=>{this._workerMessageHandler(b("message",{data:e}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,r){this._dispatcher.addEventListener(e,t,r)}removeEventListener(e,t,r){this._dispatcher.removeEventListener(e,t,r)}_workerPostMessage(e){w((()=>{this.dispatchEvent(b("message",{data:e}))}))}async _workerMessageHandler(e){const t=(0,p.QM)(e);if(t&&t.type===p.Cs.OPEN){const{modulePath:e,jobId:r}=t;let o=await a.default.loadWorker(e);o||(o=await import(e));const s=a.default.connect(o);this._workerPostMessage({type:p.Cs.OPENED,jobId:r,data:s})}}}var C=r(70171),j=r(17202);const S=u.Z.getLogger("esri.core.workers"),{HANDSHAKE:k}=p.Cs;let E,R;const I="Failed to create Worker. Fallback to execute module in main thread";async function x(e){return new Promise((t=>{function r(s){const i=(0,p.QM)(s);i&&i.type===k&&(e.removeEventListener("message",r),e.removeEventListener("error",o),t(e))}function o(t){t.preventDefault(),e.removeEventListener("message",r),e.removeEventListener("error",o),S.warn("Failed to create Worker. Fallback to execute module in main thread",t),(e=new _).addEventListener("message",r),e.addEventListener("error",o)}e.addEventListener("message",r),e.addEventListener("error",o)}))}let N=0;const T=u.Z.getLogger("esri.core.workers"),{ABORT:O,INVOKE:F,OPEN:Z,OPENED:M,RESPONSE:P}=p.Cs;class D{constructor(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),T.error(e)}))}static async create(e){const t=await async function(){if(!(0,s.Z)("esri-workers"))return x(new _);if(!E&&!R)try{const e='let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,buildDate:r,version:t}=configuration.kernelInfo,{revision:n,buildDate:i,version:s}=e.kernelInfo;o!==n&&console.warn(`[esri.core.workers] Version mismatch detected between ArcGIS API for JavaScript and assets:\nAPI version: ${t} [Date: ${r}, Revision: ${o.slice(0,8)}]\nAssets version: ${s} [Date: ${i}, Revision: ${n.slice(0,8)}]`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let e;function t(o){const t=e.connect(o);self.postMessage({type:2,jobId:r,data:t},[t])}"function"==typeof define&&define.amd?require([workerPath],(r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((r=>(e=r.default,checkWorkerRevision(e),e.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):(self.RemoteClient||importScripts(workerPath),e=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(e),e.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const e=outgoing.get(r);outgoing.delete(r),o.error?e.reject(JSON.parse(o.error)):e.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.replace('"{CONFIGURATION}"',`'${function(){let e;if(null!=c.Z.default){const t={...c.Z};delete t.default,e=JSON.parse(JSON.stringify(t))}else e=JSON.parse(JSON.stringify(c.Z));e.assetsPath=(0,h.hF)(e.assetsPath),e.request.interceptors=[],e.log.interceptors=[],e.locale=(0,C.Kd)(),e.has={"csp-restrictions":(0,s.Z)("csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":(0,s.Z)("esri-2d-update-debug"),"esri-2d-query-centroid-enabled":(0,s.Z)("esri-2d-query-centroid-enabled"),"featurelayer-pbf":(0,s.Z)("featurelayer-pbf"),"featurelayer-simplify-thresholds":(0,s.Z)("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":(0,s.Z)("featurelayer-simplify-payload-size-factors"),"esri-atomics":(0,s.Z)("esri-atomics"),"esri-shared-array-buffer":(0,s.Z)("esri-shared-array-buffer"),"esri-tiles-debug":(0,s.Z)("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":(0,s.Z)("esri-workers-arraybuffer-transfer"),"host-webworker":1},e.workers.loaderUrl&&(e.workers.loaderUrl=(0,h.hF)(e.workers.loaderUrl)),e.workers.workerPath?e.workers.workerPath=(0,h.hF)(e.workers.workerPath):e.workers.workerPath=(0,h.hF)((0,d.V)("esri/core/workers/RemoteClient.js"));const t=c.Z.workers.loaderConfig,r=y({baseUrl:null==t?void 0:t.baseUrl,locale:(0,C.Kd)(),has:{"csp-restrictions":(0,s.Z)("csp-restrictions"),"dojo-test-sniff":0,"host-webworker":1,...null==t?void 0:t.has},map:{...null==t?void 0:t.map},paths:{...null==t?void 0:t.paths},packages:(null==t?void 0:t.packages)||[]}),o={version:l.i8,buildDate:j.r,revision:j.$};return JSON.stringify({esriConfig:e,loaderConfig:r,kernelInfo:o})}()}'`);E=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){R=e||{}}let e;if(E)try{e=new Worker(E,{name:"esri-worker-"+N++})}catch(t){S.warn(I,R),e=new _}else S.warn(I,R),e=new _;return x(e)}();return new D(t,e)}terminate(){this.worker.terminate()}async open(e,t={}){const{signal:r}=t,o=(0,p.jt)();return new Promise(((t,s)=>{const n={resolve:t,reject:s,abortHandle:(0,i.$F)(r,(()=>{this._outJobs.delete(o),this._post({type:O,jobId:o})}))};this._outJobs.set(o,n),this._post({type:Z,jobId:o,modulePath:e})}))}_onMessage(e){const t=(0,p.QM)(e);if(t)switch(t.type){case M:this._onOpenedMessage(t);break;case P:this._onResponseMessage(t);break;case O:this._onAbortMessage(t);break;case F:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,r=e.jobId,o=t.get(r);o&&(o.controller&&o.controller.abort(),t.delete(r))}_onInvokeMessage(e){const{methodName:t,jobId:r,data:o,abortable:s}=e,n=s?(0,i.yi)():null,a=this._inJobs,u=l.Nv[t];let d;try{if("function"!=typeof u)throw new TypeError(`${t} is not a function`);d=u.call(null,o,{signal:n?n.signal:null})}catch(e){return void this._post({type:P,jobId:r,error:(0,p.AB)(e)})}(0,i.y8)(d)?(a.set(r,{controller:n,promise:d}),d.then((e=>{a.has(r)&&(a.delete(r),this._post({type:P,jobId:r},e))}),(e=>{a.has(r)&&(a.delete(r),e||(e={message:"Error encountered at method"+t}),(0,i.D_)(e)||this._post({type:P,jobId:r,error:(0,p.AB)(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:P,jobId:r},d)}_onOpenedMessage(e){var t;const{jobId:r,data:o}=e,s=this._outJobs.get(r);s&&(this._outJobs.delete(r),null==(t=s.abortHandle)||t.remove(),s.resolve(o))}_onResponseMessage(e){var t;const{jobId:r,error:s,data:i}=e,n=this._outJobs.get(r);n&&(this._outJobs.delete(r),null==(t=n.abortHandle)||t.remove(),s?n.reject(o.Z.fromJSON(JSON.parse(s))):n.resolve(i))}_post(e,t,r){return(0,p.oi)(this.worker,e,t,r)}}let U=(0,s.Z)("esri-workers-debug")?1:(0,s.Z)("host-browser")?navigator.hardwareConcurrency-1:0;U||(U=(0,s.Z)("safari")&&(0,s.Z)("mac")||(0,s.Z)("trident")?7:2);let A=0;const B=[];async function J(e,t){const r=new n.Z;return await r.open(e,t),r}async function L(e,t={}){if("string"!=typeof e)throw new o.Z("workers:undefined-module","modulePath is missing");let r=t.strategy||"distributed";if((0,s.Z)("host-webworker")&&!(0,s.Z)("esri-workers")&&(r="local"),"local"===r){let r=await a.default.loadWorker(e);r||(r=await import(e)),(0,i.k_)(t.signal);const o=t.client||r;return J([a.default.connect(r)],{...t,client:o})}if(await async function(){if(q)return q;H=(0,i.yi)();const e=[];for(let t=0;t<U;t++){const r=D.create(t).then((e=>(B[t]=e,e)));e.push(r)}return q=Promise.all(e),q}(),(0,i.k_)(t.signal),"dedicated"===r){const r=A++%U;return J([await B[r].open(e,t)],t)}if(t.maxNumWorkers&&t.maxNumWorkers>0){const r=Math.min(t.maxNumWorkers,U);if(r<U){const o=new Array(r);for(let s=0;s<r;++s){const r=A++%U;o[s]=B[r].open(e,t)}return J(o,t)}}return J(B.map((r=>r.open(e,t))),t)}let H,q=null},28294:(e,t,r)=>{r.d(t,{n:()=>c});var o=r(43697),s=r(92835),i=r(84552),n=r(5600),a=(r(80442),r(75215),r(92604),r(71715)),l=r(52525),u=r(30547),p=r(35671),d=r(78981);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const r=t.timeInfo.exportOptions;if(!r)return null;const o=r.timeOffset,s=d.v.fromJSON(r.timeOffsetUnits);return o&&s?new i.Z({value:o,unit:s}):null}set timeInfo(e){(0,p.UF)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,o._)([(0,n.Cb)({type:s.Z,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,o._)([(0,n.Cb)({type:i.Z})],t.prototype,"timeOffset",void 0),(0,o._)([(0,a.r)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,o._)([(0,n.Cb)({value:null,type:u.Z,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,o._)([(0,n.Cb)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,o._)([(0,l.j)("esri.layers.mixins.TemporalLayer")],t),t}},30547:(e,t,r)=>{r.d(t,{Z:()=>w});var o,s=r(43697),i=r(92835),n=r(84552),a=r(10736),l=r(22974),u=r(70586),p=r(5600),d=(r(75215),r(80442),r(92604),r(71715)),c=r(52525),h=r(30556);let m=o=class extends a.wq{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new o({respectsDaylightSaving:e,timezone:t})}};(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"respectsDaylightSaving",void 0),(0,s._)([(0,d.r)("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],m.prototype,"readRespectsDaylightSaving",null),(0,s._)([(0,p.Cb)({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],m.prototype,"timezone",void 0),m=o=(0,s._)([(0,c.j)("esri.layers.support.TimeReference")],m);var y,f=m,v=r(78981);let g=y=class extends a.wq{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const r=new Date(t.timeExtent[0]),o=new Date(t.timeExtent[1]);return new i.Z({start:r,end:o})}writeFullTimeExtent(e,t){e&&(0,u.pC)(e.start)&&(0,u.pC)(e.end)?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?new n.Z({value:t.timeInterval,unit:v.v.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new n.Z({value:t.defaultTimeInterval,unit:v.v.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null}clone(){const{cumulative:e,endField:t,hasLiveData:r,interval:o,startField:s,timeReference:i,fullTimeExtent:n,trackIdField:a,useTime:u}=this;return new y({cumulative:e,endField:t,hasLiveData:r,interval:o,startField:s,timeReference:(0,l.d9)(i),fullTimeExtent:(0,l.d9)(n),trackIdField:a,useTime:u})}};(0,s._)([(0,p.Cb)({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],g.prototype,"cumulative",void 0),(0,s._)([(0,p.Cb)({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],g.prototype,"endField",void 0),(0,s._)([(0,p.Cb)({type:i.Z,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"fullTimeExtent",void 0),(0,s._)([(0,d.r)("fullTimeExtent",["timeExtent"])],g.prototype,"readFullTimeExtent",null),(0,s._)([(0,h.c)("fullTimeExtent")],g.prototype,"writeFullTimeExtent",null),(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],g.prototype,"hasLiveData",void 0),(0,s._)([(0,p.Cb)({type:n.Z,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"interval",void 0),(0,s._)([(0,d.r)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],g.prototype,"readInterval",null),(0,s._)([(0,h.c)("interval")],g.prototype,"writeInterval",null),(0,s._)([(0,p.Cb)({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],g.prototype,"startField",void 0),(0,s._)([(0,p.Cb)({type:f,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"timeReference",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"trackIdField",void 0),(0,s._)([(0,p.Cb)({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],g.prototype,"useTime",void 0),g=y=(0,s._)([(0,c.j)("esri.layers.support.TimeInfo")],g);var w=g},78981:(e,t,r)=>{r.d(t,{v:()=>o});const o=(0,r(35454).wY)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0})},56545:(e,t,r)=>{r.d(t,{Z:()=>c});var o,s=r(43697),i=r(10736),n=r(22974),a=r(5600),l=r(75215),u=(r(80442),r(92604),r(52525)),p=r(30556);let d=o=class extends i.wq{constructor(e){super(e),this.attachmentTypes=null,this.attachmentsWhere=null,this.keywords=null,this.globalIds=null,this.name=null,this.num=null,this.objectIds=null,this.returnMetadata=!1,this.size=null,this.start=null,this.where=null}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new o((0,n.d9)({attachmentTypes:this.attachmentTypes,attachmentsWhere:this.attachmentsWhere,keywords:this.keywords,where:this.where,globalIds:this.globalIds,name:this.name,num:this.num,objectIds:this.objectIds,returnMetadata:this.returnMetadata,size:this.size,start:this.start}))}};(0,s._)([(0,a.Cb)({type:[String],json:{write:!0}})],d.prototype,"attachmentTypes",void 0),(0,s._)([(0,a.Cb)({type:String,json:{read:{source:"attachmentsDefinitionExpression"},write:{target:"attachmentsDefinitionExpression"}}})],d.prototype,"attachmentsWhere",void 0),(0,s._)([(0,a.Cb)({type:[String],json:{write:!0}})],d.prototype,"keywords",void 0),(0,s._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"globalIds",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],d.prototype,"name",void 0),(0,s._)([(0,a.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],d.prototype,"num",void 0),(0,s._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"objectIds",void 0),(0,s._)([(0,a.Cb)({type:Boolean,json:{default:!1,write:!0}})],d.prototype,"returnMetadata",void 0),(0,s._)([(0,a.Cb)({type:[Number],json:{write:!0}})],d.prototype,"size",void 0),(0,s._)([(0,a.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],d.prototype,"start",void 0),(0,s._)([(0,p.c)("start"),(0,p.c)("num")],d.prototype,"writeStart",null),(0,s._)([(0,a.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],d.prototype,"where",void 0),d=o=(0,s._)([(0,u.j)("esri.rest.support.AttachmentQuery")],d),d.from=(0,l.se)(d);var c=d},74889:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var o=r(43697),s=r(66577),i=r(38171),n=r(35454),a=r(10736),l=r(70586),u=r(5600),p=(r(80442),r(75215),r(92604),r(71715)),d=r(52525),c=r(30556),h=r(82971),m=r(33955),y=r(1231);const f=new n.Xn({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let v=class extends a.wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const r=h.Z.fromJSON(t.spatialReference),o=[];for(let t=0;t<e.length;t++){const s=e[t],n=i.Z.fromJSON(s),a=s.geometry&&s.geometry.spatialReference;(0,l.pC)(n.geometry)&&!a&&(n.geometry.spatialReference=r),o.push(n)}return o}writeGeometryType(e,t,r,o){if(e)return void f.write(e,t,r,o);const{features:s}=this;if(s)for(const e of s)if(e&&(0,l.pC)(e.geometry))return void f.write(e.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=(0,m.im)(e);return!r&&t.spatialReference&&(o.spatialReference=h.Z.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const e of r)if(e&&(0,l.pC)(e.geometry)&&e.geometry.spatialReference)return void(t.spatialReference=e.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry}}return t}quantize(e){const{scale:[t,r],translate:[o,s]}=e,i=this.features,n=this._getQuantizationFunction(this.geometryType,(e=>Math.round((e-o)/t)),(e=>Math.round((s-e)/r)));for(let e=0,t=i.length;e<t;e++)n((0,l.Wg)(i[e].geometry))||(i.splice(e,1),e--,t--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,s],scale:[i,n]}=r,a=this._getHydrationFunction(e,(e=>e*i+o),(e=>s-e*n));for(const{geometry:e}of t)(0,l.pC)(e)&&a(e);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const i=[];for(let n=0,a=e.length;n<a;n++){const a=e[n];if(n>0){const e=t(a[0]),n=r(a[1]);e===o&&n===s||(i.push([e-o,n-s]),o=e,s=n)}else o=t(a[0]),s=r(a[1]),i.push([o,s])}return i.length>0?i:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,m.oU)(e)?e.rings:e.paths,s=[];for(let e=0,i=o.length;e<i;e++){const i=o[e],n=this._quantizePoints(i,t,r);n&&s.push(n)}return s.length>0?((0,m.oU)(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const o=(0,m.oU)(e)?e.rings:e.paths;let s,i;for(let e=0,n=o.length;e<n;e++){const n=o[e];for(let e=0,o=n.length;e<o;e++){const o=n[e];e>0?(s+=o[0],i+=o[1]):(s=o[0],i=o[1]),o[0]=t(s),o[1]=r(i)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const o=e.points;let s,i;for(let e=0,n=o.length;e<n;e++){const n=o[e];e>0?(s+=n[0],i+=n[1]):(s=n[0],i=n[1]),n[0]=t(s),n[1]=r(i)}}:void 0}};(0,o._)([(0,u.Cb)({type:String,json:{write:!0}})],v.prototype,"displayFieldName",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"exceededTransferLimit",void 0),(0,o._)([(0,u.Cb)({type:[i.Z],json:{write:!0}})],v.prototype,"features",void 0),(0,o._)([(0,p.r)("features")],v.prototype,"readFeatures",null),(0,o._)([(0,u.Cb)({type:[y.Z],json:{write:!0}})],v.prototype,"fields",void 0),(0,o._)([(0,u.Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:f.read}}})],v.prototype,"geometryType",void 0),(0,o._)([(0,c.c)("geometryType")],v.prototype,"writeGeometryType",null),(0,o._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasM",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],v.prototype,"hasZ",void 0),(0,o._)([(0,u.Cb)({types:s.qM,json:{write:!0}})],v.prototype,"queryGeometry",void 0),(0,o._)([(0,p.r)("queryGeometry")],v.prototype,"readQueryGeometry",null),(0,o._)([(0,u.Cb)({type:h.Z,json:{write:!0}})],v.prototype,"spatialReference",void 0),(0,o._)([(0,c.c)("spatialReference")],v.prototype,"writeSpatialReference",null),(0,o._)([(0,u.Cb)({json:{write:!0}})],v.prototype,"transform",void 0),v=(0,o._)([(0,d.j)("esri.rest.support.FeatureSet")],v),v.prototype.toJSON.isDefaultToJSON=!0,v||(v={});var g=v},75935:(e,t,r)=>{r.d(t,{Z:()=>m});var o,s=r(43697),i=(r(66577),r(10736)),n=r(22974),a=r(5600),l=r(75215),u=(r(80442),r(92604),r(52525)),p=r(30556),d=r(10158),c=r(82971);let h=o=class extends i.wq{constructor(e){super(e),this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"}clone(){return new o((0,n.d9)({dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,s._)([(0,a.Cb)({type:d.n,json:{write:!0}})],h.prototype,"dynamicDataSource",void 0),(0,s._)([(0,a.Cb)({type:String,json:{write:!0}})],h.prototype,"gdbVersion",void 0),(0,s._)([(0,a.Cb)({type:Number,json:{write:!0}})],h.prototype,"geometryPrecision",void 0),(0,s._)([(0,a.Cb)({type:Date})],h.prototype,"historicMoment",void 0),(0,s._)([(0,p.c)("historicMoment")],h.prototype,"_writeHistoricMoment",null),(0,s._)([(0,a.Cb)({type:Number,json:{write:!0}})],h.prototype,"maxAllowableOffset",void 0),(0,s._)([(0,a.Cb)({type:[Number],json:{write:!0}})],h.prototype,"objectIds",void 0),(0,s._)([(0,a.Cb)({type:[String],json:{write:!0}})],h.prototype,"orderByFields",void 0),(0,s._)([(0,a.Cb)({type:[String],json:{write:!0}})],h.prototype,"outFields",void 0),(0,s._)([(0,a.Cb)({type:c.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],h.prototype,"outSpatialReference",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],h.prototype,"relationshipId",void 0),(0,s._)([(0,a.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],h.prototype,"start",void 0),(0,s._)([(0,p.c)("start"),(0,p.c)("num")],h.prototype,"writeStart",null),(0,s._)([(0,a.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],h.prototype,"num",void 0),(0,s._)([(0,a.Cb)({json:{write:!0}})],h.prototype,"returnGeometry",void 0),(0,s._)([(0,a.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],h.prototype,"returnM",void 0),(0,s._)([(0,a.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],h.prototype,"returnZ",void 0),(0,s._)([(0,a.Cb)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],h.prototype,"where",void 0),h=o=(0,s._)([(0,u.j)("esri.rest.support.RelationshipQuery")],h),h.from=(0,l.se)(h);var m=h},28141:(e,t,r)=>{r.d(t,{Z:()=>C});var o,s=r(43697),i=r(66577),n=r(92835),a=r(35454),l=r(10736),u=r(22974),p=r(5600),d=r(75215),c=(r(80442),r(92604),r(52525)),h=r(30556),m=r(33955);let y=o=class extends l.wq{constructor(e){super(e),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new o({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,s._)([(0,p.Cb)({type:[String],json:{write:!0}})],y.prototype,"groupByFields",void 0),(0,s._)([(0,p.Cb)({type:Number,json:{write:!0}})],y.prototype,"topCount",void 0),(0,s._)([(0,p.Cb)({type:[String],json:{write:!0}})],y.prototype,"orderByFields",void 0),y=o=(0,s._)([(0,c.j)("esri.rest.support.TopFilter")],y);var f,v=y,g=r(82971);const w=new a.Xn({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),b=new a.Xn({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let _=f=class extends l.wq{constructor(e){super(e),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new f((0,u.d9)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],_.prototype,"cacheHint",void 0),(0,s._)([(0,p.Cb)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],_.prototype,"distance",void 0),(0,s._)([(0,p.Cb)({types:i.qM,json:{read:m.im,write:!0}})],_.prototype,"geometry",void 0),(0,s._)([(0,p.Cb)({type:Number,json:{write:!0}})],_.prototype,"geometryPrecision",void 0),(0,s._)([(0,p.Cb)({type:Number,json:{write:!0}})],_.prototype,"maxAllowableOffset",void 0),(0,s._)([(0,p.Cb)({type:Number,json:{read:{source:"resultRecordCount"}}})],_.prototype,"num",void 0),(0,s._)([(0,p.Cb)({json:{write:!0}})],_.prototype,"objectIds",void 0),(0,s._)([(0,p.Cb)({type:[String],json:{write:!0}})],_.prototype,"orderByFields",void 0),(0,s._)([(0,p.Cb)({type:[String],json:{write:!0}})],_.prototype,"outFields",void 0),(0,s._)([(0,p.Cb)({type:g.Z,json:{read:{source:"outSR"},write:{target:"outSR"}}})],_.prototype,"outSpatialReference",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:!0}})],_.prototype,"resultType",void 0),(0,s._)([(0,p.Cb)({json:{write:!0}})],_.prototype,"returnGeometry",void 0),(0,s._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"returnM",void 0),(0,s._)([(0,p.Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],_.prototype,"returnZ",void 0),(0,s._)([(0,p.Cb)({type:Number,json:{read:{source:"resultOffset"}}})],_.prototype,"start",void 0),(0,s._)([(0,h.c)("start"),(0,h.c)("num")],_.prototype,"writeStart",null),(0,s._)([(0,p.Cb)({type:String,json:{read:{source:"spatialRel",reader:w.read},write:{target:"spatialRel",writer:w.write}}})],_.prototype,"spatialRelationship",void 0),(0,s._)([(0,p.Cb)({type:n.Z,json:{write:!0}})],_.prototype,"timeExtent",void 0),(0,s._)([(0,p.Cb)({type:v,json:{write:!0}})],_.prototype,"topFilter",void 0),(0,s._)([(0,p.Cb)({type:String,json:{read:b.read,write:{writer:b.write,overridePolicy(e){return{enabled:e&&this.distance>0}}}}})],_.prototype,"units",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:!0}})],_.prototype,"where",void 0),_=f=(0,s._)([(0,c.j)("esri.rest.support.TopFeaturesQuery")],_),_.from=(0,d.se)(_);var C=_}}]);