"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{2607:function(e,t,r){var n,o,i,a=r(6646),s=r(9703),u=r(3067),c=r(9188),l="firebasestorage.googleapis.com",h="storageBucket",p=function(e){function t(r,n){var o=e.call(this,f(r),"Firebase Storage: "+n+" ("+f(r)+")")||this;return o.customData={serverResponse:null},o._baseMessage=o.message,Object.setPrototypeOf(o,t.prototype),o}return(0,s.ZT)(t,e),t.prototype._codeEquals=function(e){return f(e)===this.code},Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=this._baseMessage+"\n"+this.customData.serverResponse:this.message=this._baseMessage},enumerable:!1,configurable:!0}),t}(u.ZR);function f(e){return"storage/"+e}function d(){return new p("unknown","An unknown error occurred, please check the error payload for server response.")}function _(){return new p("canceled","User canceled the upload/download.")}function g(){return new p("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function v(e){return new p("invalid-argument",e)}function m(){return new p("app-deleted","The Firebase app was deleted.")}function b(e){return new p("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function y(e,t){return new p("invalid-format","String does not match format '"+e+"': "+t)}function w(e){throw new p("internal-error","Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},k=function(e,t){this.data=e,this.contentType=t||null};function T(e,t){switch(e){case R.RAW:return new k(x(t));case R.BASE64:case R.BASE64URL:return new k(P(e,t));case R.DATA_URL:var r;return new k((r=new O(t)).base64?P(R.BASE64,r.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(e){throw y(R.DATA_URL,"Malformed data URL.")}return x(t)}(r.rest),new O(t).contentType)}throw d()}function x(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);n<=127?t.push(n):n<=2047?t.push(192|n>>6,128|63&n):(64512&n)==55296?r<e.length-1&&(64512&e.charCodeAt(r+1))==56320?(n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)):t.push(239,191,189):(64512&n)==56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function P(e,t){switch(e){case R.BASE64:var r,n,o=-1!==t.indexOf("-"),i=-1!==t.indexOf("_");if(o||i){var a=o?"-":"_";throw y(e,"Invalid character '"+a+"' found: is it base64url encoded?")}break;case R.BASE64URL:var s=-1!==t.indexOf("+"),u=-1!==t.indexOf("/");if(s||u){var a=s?"+":"/";throw y(e,"Invalid character '"+a+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/")}try{r=t,n=atob(r)}catch(t){throw y(e,"Invalid character found")}for(var c=new Uint8Array(n.length),l=0;l<n.length;l++)c[l]=n.charCodeAt(l);return c}var O=function(e){this.base64=!1,this.contentType=null;var t,r=e.match(/^data:([^,]+)?,/);if(null===r)throw y(R.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var n=r[1]||null;null!=n&&(this.base64=(t=";base64",n.length>=t.length&&n.substring(n.length-t.length)===t),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)},U={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function S(e){switch(e){case"running":case"pausing":case"canceling":return U.RUNNING;case"paused":return U.PAUSED;case"success":return U.SUCCESS;case"canceled":return U.CANCELED;default:return U.ERROR}}(n=i||(i={}))[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=i.NO_ERROR,this.sendPromise_=new Promise(function(t){e.xhr_.addEventListener("abort",function(){e.errorCode_=i.ABORT,t()}),e.xhr_.addEventListener("error",function(){e.errorCode_=i.NETWORK_ERROR,t()}),e.xhr_.addEventListener("load",function(){t()})})}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw w("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw w("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw w("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return -1}},e.prototype.getResponseText=function(){if(!this.sent_)throw w("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)},e}(),E=function(){function e(){}return e.prototype.createConnection=function(){return new C},e}(),A=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"},e.makeFromBucketSpec=function(t,r){var n;try{n=e.makeFromUrl(t,r)}catch(r){return new e(t,"")}if(""===n.path)return n;throw new p("invalid-default-bucket","Invalid default bucket '"+t+"'.")},e.makeFromUrl=function(t,r){var n=null,o="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+o+"(/(.*))?$","i");function a(e){e.path_=decodeURIComponent(e.path)}for(var s=r.replace(/[.]/g,"\\."),u=RegExp("^https?://"+s+"/v[A-Za-z0-9_]+/b/"+o+"/o(/([^?#]*).*)?$","i"),c=RegExp("^https?://"+(r===l?"(?:storage.googleapis.com|storage.cloud.google.com)":r)+"/"+o+"/([^?#]*)","i"),h=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:u,indices:{bucket:1,path:3},postModify:a},{regex:c,indices:{bucket:1,path:2},postModify:a}],f=0;f<h.length;f++){var d=h[f],_=d.regex.exec(t);if(_){var g=_[d.indices.bucket],v=_[d.indices.path];v||(v=""),n=new e(g,v),d.postModify(n);break}}if(null==n)throw new p("invalid-url","Invalid URL '"+t+"'.");return n},e}(),I=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}();function j(e){return"string"==typeof e||e instanceof String}function q(e){return L()&&e instanceof Blob}function L(){return"undefined"!=typeof Blob}function N(e,t,r,n){if(n<t)throw v("Invalid value for '"+e+"'. Expected "+t+" or greater.");if(n>r)throw v("Invalid value for '"+e+"'. Expected "+r+" or less.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){var r=t.match(/^(\w+):\/\/.+/),n=null==r?void 0:r[1],o=t;return null==n&&(o="https://"+t),o+"/v0"+e}function M(e){var t=encodeURIComponent,r="?";for(var n in e)e.hasOwnProperty(n)&&(r=r+(t(n)+"=")+t(e[n])+"&");return r.slice(0,-1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z=function(){function e(e,t,r,n,o,i,a,s,u,c,l){var h=this;this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=s,this.progressCallback_=c,this.timeout_=u,this.pool_=l,this.promise_=new Promise(function(e,t){h.resolve_=e,h.reject_=t,h.start_()})}return e.prototype.start_=function(){var e=this;function t(t,r){var n=e.resolve_,o=e.reject_,i=r.connection;if(r.wasSuccessCode)try{var a=e.callback_(i,i.getResponseText());void 0!==a?n(a):n()}catch(e){o(e)}else if(null!==i){var s=d();s.serverResponse=i.getResponseText(),o(e.errorCallback_?e.errorCallback_(i,s):s)}else if(r.canceled){var s=e.appDelete_?m():_();o(s)}else{var s=new p("retry-limit-exceeded","Max retry time for operation exceeded, please try again.");o(s)}}this.canceled_?t(!1,new D(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t,r){var n=1,o=null,i=!1,a=0,u=!1;function c(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];u||(u=!0,t.apply(null,e))}function l(t){o=setTimeout(function(){o=null,e(h,2===a)},t)}function h(e){for(var t,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(!u){if(e||2===a||i){c.call.apply(c,(0,s.ev)([null,e],r));return}n<64&&(n*=2),1===a?(a=2,t=0):t=(n+Math.random())*1e3,l(t)}}var p=!1;function f(e){!p&&(p=!0,!u&&(null!==o?(e||(a=2),clearTimeout(o),l(0)):e||(a=1)))}return l(0),setTimeout(function(){i=!0,f(!0)},r),f}(function(t,r){if(r){t(!1,new D(!1,null,!0));return}var n=e.pool_.createConnection();function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}e.pendingConnection_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then(function(){null!==e.progressCallback_&&n.removeUploadProgressListener(o),e.pendingConnection_=null;var r=n.getErrorCode()===i.NO_ERROR,a=n.getStatus();if(!r||e.isRetryStatusCode_(a)){t(!1,new D(!1,null,n.getErrorCode()===i.ABORT));return}t(!0,new D(-1!==e.successCodes_.indexOf(a),n))})},t,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n},e}(),D=function(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r};function F(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(L())return new Blob(e);throw new p("unsupported-environment","This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H=function(){function e(e,t){var r=0,n="";q(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(!q(this.data_))return new e(new Uint8Array(this.data_.buffer,t,r-t),!0);var n,o=(n=this.data_).webkitSlice?n.webkitSlice(t,r):n.mozSlice?n.mozSlice(t,r):n.slice?n.slice(t,r):null;return null===o?null:new e(o)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(L()){var n=t.map(function(t){return t instanceof e?t.data_:t});return new e(F.apply(null,n))}var o=t.map(function(e){return j(e)?T(R.RAW,e).data:e.data_}),i=0;o.forEach(function(e){i+=e.byteLength});var a=new Uint8Array(i),s=0;return o.forEach(function(e){for(var t=0;t<e.length;t++)a[s++]=e[t]}),new e(a,!0)},e.prototype.uploadData=function(){return this.data_},e}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e){var t,r;try{t=JSON.parse(e)}catch(e){return null}return"object"!=typeof(r=t)||Array.isArray(r)?null:t}function W(e){var t=e.lastIndexOf("/",e.length-2);return -1===t?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(e,t){return t}var J=function(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||X},V=null;function Z(){if(V)return V;var e=[];e.push(new J("bucket")),e.push(new J("generation")),e.push(new J("metageneration")),e.push(new J("name","fullPath",!0));var t=new J("name");t.xform=function(e,t){return!j(t)||t.length<2?t:W(t)},e.push(t);var r=new J("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new J("timeCreated")),e.push(new J("updated")),e.push(new J("md5Hash",null,!0)),e.push(new J("cacheControl",null,!0)),e.push(new J("contentDisposition",null,!0)),e.push(new J("contentEncoding",null,!0)),e.push(new J("contentLanguage",null,!0)),e.push(new J("contentType",null,!0)),e.push(new J("metadata","customMetadata",!0)),V=e}function K(e,t,r){var n=G(t);return null===n?null:function(e,t,r){var n={};n.type="file";for(var o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return Object.defineProperty(n,"ref",{get:function(){var t=new A(n.bucket,n.fullPath);return e._makeStorageReference(t)}}),n}(e,n,r)}function $(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y="prefixes",Q="items",ee=function(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(e){if(!e)throw d()}function er(e,t){return function(r,n){var o=K(e,n,t);return et(null!==o),o}}function en(e){return function(t,r){var n;return(n=401===t.getStatus()?t.getResponseText().includes("Firebase App Check token is invalid")?new p("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new p("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?new p("quota-exceeded","Quota for bucket '"+e.bucket+"' exceeded, please view quota on https://firebase.google.com/pricing/."):403===t.getStatus()?new p("unauthorized","User does not have permission to access '"+e.path+"'."):r).serverResponse=r.serverResponse,n}}function eo(e){var t=en(e);return function(r,n){var o=t(r,n);return 404===r.getStatus()&&(o=new p("object-not-found","Object '"+e.path+"' does not exist.")),o.serverResponse=n.serverResponse,o}}function ei(e,t,r){var n=B(t.fullServerUrl(),e.host),o=e.maxOperationRetryTime,i=new ee(n,"GET",er(e,r),o);return i.errorHandler=eo(t),i}function ea(e,t,r){var n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=t&&t.type()||"application/octet-stream"),n}var es=function(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null};function eu(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){et(!1)}return et(!!r&&-1!==(t||["active"]).indexOf(r)),r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ec=function(e,t,r){"function"==typeof e||null!=t||null!=r?(this.next=e,this.error=t,this.complete=r):(this.next=e.next,this.error=e.error,this.complete=e.complete)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then(function(){return e.apply(void 0,t)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eh=function(){function e(e,t,r){var n=this;void 0===r&&(r=null),this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=r,this._mappings=Z(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=function(e){n._request=void 0,n._chunkMultiplier=1,e._codeEquals("canceled")?(n._needToFetchStatus=!0,n.completeTransitions_()):(n._error=e,n._transition("error"))},this._metadataErrorHandler=function(e){n._request=void 0,e._codeEquals("canceled")?n.completeTransitions_():(n._error=e,n._transition("error"))},this._promise=new Promise(function(e,t){n._resolve=e,n._reject=t,n._start()}),this._promise.then(null,function(){})}return e.prototype._makeProgressCallback=function(){var e=this,t=this._transferred;return function(r){return e._updateProgress(t+r)}},e.prototype._shouldDoResumable=function(e){return e.size()>262144},e.prototype._start=function(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())},e.prototype._resolveToken=function(e){var t=this;Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(function(r){var n=r[0],o=r[1];switch(t._state){case"running":e(n,o);break;case"canceling":t._transition("canceled");break;case"pausing":t._transition("paused")}})},e.prototype._createResumable=function(){var e=this;this._resolveToken(function(t,r){var n,o,i,a,s,u,c,l,h,p,f,d,_=(n=e._ref.storage,o=e._ref._location,i=e._mappings,a=e._blob,s=e._metadata,u=o.bucketOnlyServerUrl(),l={name:(c=ea(o,a,s)).fullPath},h=B(u,n.host),p={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+a.size(),"X-Goog-Upload-Header-Content-Type":c.contentType,"Content-Type":"application/json; charset=utf-8"},f=$(c,i),(d=new ee(h,"POST",function(e){var t;eu(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){et(!1)}return et(j(t)),t},n.maxUploadRetryTime)).urlParams=l,d.headers=p,d.body=f,d.errorHandler=en(o),d),g=e._ref.storage._makeRequest(_,t,r);e._request=g,g.getPromise().then(function(t){e._request=void 0,e._uploadUrl=t,e._needToFetchStatus=!1,e.completeTransitions_()},e._errorHandler)})},e.prototype._fetchStatus=function(){var e=this,t=this._uploadUrl;this._resolveToken(function(r,n){var o,i,a,s,u=(o=e._ref.storage,i=e._ref._location,a=e._blob,(s=new ee(t,"POST",function(e){var t=eu(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){et(!1)}r||et(!1);var n=Number(r);return et(!isNaN(n)),new es(n,a.size(),"final"===t)},o.maxUploadRetryTime)).headers={"X-Goog-Upload-Command":"query"},s.errorHandler=en(i),s),c=e._ref.storage._makeRequest(u,r,n);e._request=c,c.getPromise().then(function(t){e._request=void 0,e._updateProgress(t.current),e._needToFetchStatus=!1,t.finalized&&(e._needToFetchMetadata=!0),e.completeTransitions_()},e._errorHandler)})},e.prototype._continueUpload=function(){var e=this,t=262144*this._chunkMultiplier,r=new es(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(function(o,i){try{a=function(e,t,r,n,o,i,a,s){var u=new es(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw new p("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var c=u.total-u.current,l=c;o>0&&(l=Math.min(l,o));var h=u.current,f=h+l,d={"X-Goog-Upload-Command":l===c?"upload, finalize":"upload","X-Goog-Upload-Offset":""+u.current},_=n.slice(h,f);if(null===_)throw g();var v=new ee(r,"POST",function(e,r){var o,a=eu(e,["active","final"]),s=u.current+l,c=n.size();return o="final"===a?er(t,i)(e,r):null,new es(s,c,"final"===a,o)},t.maxUploadRetryTime);return v.headers=d,v.body=_.uploadData(),v.progressCallback=s||null,v.errorHandler=en(e),v}(e._ref._location,e._ref.storage,n,e._blob,t,e._mappings,r,e._makeProgressCallback())}catch(t){e._error=t,e._transition("error");return}var a,s=e._ref.storage._makeRequest(a,o,i);e._request=s,s.getPromise().then(function(t){e._increaseMultiplier(),e._request=void 0,e._updateProgress(t.current),t.finalized?(e._metadata=t.metadata,e._transition("success")):e.completeTransitions_()},e._errorHandler)})},e.prototype._increaseMultiplier=function(){262144*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)},e.prototype._fetchMetadata=function(){var e=this;this._resolveToken(function(t,r){var n=ei(e._ref.storage,e._ref._location,e._mappings),o=e._ref.storage._makeRequest(n,t,r);e._request=o,o.getPromise().then(function(t){e._request=void 0,e._metadata=t,e._transition("success")},e._metadataErrorHandler)})},e.prototype._oneShotUpload=function(){var e=this;this._resolveToken(function(t,r){var n=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=ea(t,n,o),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+$(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l=H.getBlob(c,n,"\r\n--"+s+"--");if(null===l)throw g();var h={name:u.fullPath},p=B(i,e.host),f=e.maxUploadRetryTime,d=new ee(p,"POST",er(e,r),f);return d.urlParams=h,d.headers=a,d.body=l.uploadData(),d.errorHandler=en(t),d}(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),o=e._ref.storage._makeRequest(n,t,r);e._request=o,o.getPromise().then(function(t){e._request=void 0,e._metadata=t,e._updateProgress(e._blob.size()),e._transition("success")},e._errorHandler)})},e.prototype._updateProgress=function(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()},e.prototype._transition=function(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":var t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=_(),this._state=e,this._notifyObservers()}},e.prototype.completeTransitions_=function(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=S(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,r,n){var o=this,i=new ec(t,r,n);return this._addObserver(i),function(){o._removeObserver(i)}},e.prototype.then=function(e,t){return this._promise.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype._addObserver=function(e){this._observers.push(e),this._notifyObserver(e)},e.prototype._removeObserver=function(e){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)},e.prototype._notifyObservers=function(){var e=this;this._finishPromise(),this._observers.slice().forEach(function(t){e._notifyObserver(t)})},e.prototype._finishPromise=function(){if(void 0!==this._resolve){var e=!0;switch(S(this._state)){case U.SUCCESS:el(this._resolve.bind(null,this.snapshot))();break;case U.CANCELED:case U.ERROR:el(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}},e.prototype._notifyObserver=function(e){switch(S(this._state)){case U.RUNNING:case U.PAUSED:e.next&&el(e.next.bind(e,this.snapshot))();break;case U.SUCCESS:e.complete&&el(e.complete.bind(e))();break;case U.CANCELED:case U.ERROR:default:e.error&&el(e.error.bind(e,this._error))()}},e.prototype.resume=function(){var e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e},e.prototype.pause=function(){var e="running"===this._state;return e&&this._transition("pausing"),e},e.prototype.cancel=function(){var e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e},e}(),ep=function(){function e(e,t){this._service=e,t instanceof A?this._location=t:this._location=A.makeFromUrl(t,e.host)}return e.prototype.toString=function(){return"gs://"+this._location.bucket+"/"+this._location.path},e.prototype._newRef=function(t,r){return new e(t,r)},Object.defineProperty(e.prototype,"root",{get:function(){var e=new A(this._location.bucket,"");return this._newRef(this._service,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return W(this._location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this._service},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return -1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;var r=new A(this._location.bucket,t);return new e(this._service,r)},enumerable:!1,configurable:!0}),e.prototype._throwIfRoot=function(e){if(""===this._location.path)throw b(e)},e}();function ef(e,t){return(0,s.mG)(this,void 0,void 0,function(){var r,n;return(0,s.Jh)(this,function(o){switch(o.label){case 0:var i,a,s,u,c,l,h,p,f;return null!=t&&"number"==typeof t.maxResults&&N("options.maxResults",1,1e3,t.maxResults),r=t||{},i=e.storage,a=e._location,s=r.pageToken,u=r.maxResults,c={},a.isRoot?c.prefix="":c.prefix=a.path+"/",c.delimiter="/",s&&(c.pageToken=s),u&&(c.maxResults=u),l=B(a.bucketOnlyServerUrl(),i.host),h=i.maxOperationRetryTime,(f=new ee(l,"GET",(p=a.bucket,function(e,t){var r,n=null===(r=G(t))?null:function(e,t,r){var n={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r[Y])for(var o=0,i=r[Y];o<i.length;o++){var a=i[o].replace(/\/$/,""),s=e._makeStorageReference(new A(t,a));n.prefixes.push(s)}if(r[Q])for(var u=0,c=r[Q];u<c.length;u++){var l=c[u],s=e._makeStorageReference(new A(t,l.name));n.items.push(s)}return n}(i,p,r);return et(null!==n),n}),h)).urlParams=c,f.errorHandler=en(a),n=f,[4,e.storage.makeRequestWithTokens(n)];case 1:return[2,o.sent().getPromise()]}})})}function ed(e,t){var r,n,o=(r=e._location.path,n=t.split("/").filter(function(e){return e.length>0}).join("/"),0===r.length?n:r+"/"+n),i=new A(e._location.bucket,o);return new ep(e.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(e){return/^[A-Za-z]+:\/\//.test(e)}function eg(e,t){var r=null==t?void 0:t[h];return null==r?null:A.makeFromBucketSpec(r,e)}var ev=function(){function e(e,t,r,n,o,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._pool=n,this._url=o,this._firebaseVersion=i,this._bucket=null,this._host=l,this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=o?this._bucket=A.makeFromBucketSpec(o,this._host):this._bucket=eg(this._host,this.app.options)}return Object.defineProperty(e.prototype,"host",{get:function(){return this._host},set:function(e){this._host=e,null!=this._url?this._bucket=A.makeFromBucketSpec(this._url,e):this._bucket=eg(e,this.app.options)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._maxUploadRetryTime},set:function(e){N("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._maxOperationRetryTime},set:function(e){N("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e},enumerable:!1,configurable:!0}),e.prototype._getAuthToken=function(){return(0,s.mG)(this,void 0,void 0,function(){var e,t;return(0,s.Jh)(this,function(r){switch(r.label){case 0:if(this._overrideAuthToken)return[2,this._overrideAuthToken];if(!(e=this._authProvider.getImmediate({optional:!0})))return[3,2];return[4,e.getToken()];case 1:if(null!==(t=r.sent()))return[2,t.accessToken];r.label=2;case 2:return[2,null]}})})},e.prototype._getAppCheckToken=function(){return(0,s.mG)(this,void 0,void 0,function(){var e;return(0,s.Jh)(this,function(t){switch(t.label){case 0:if(!(e=this._appCheckProvider.getImmediate({optional:!0})))return[3,2];return[4,e.getToken()];case 1:return[2,t.sent().token];case 2:return[2,null]}})})},e.prototype._delete=function(){return this._deleted||(this._deleted=!0,this._requests.forEach(function(e){return e.cancel()}),this._requests.clear()),Promise.resolve()},e.prototype._makeStorageReference=function(e){return new ep(this,e)},e.prototype._makeRequest=function(e,t,r){var n,o,i,a,s,u,c,l=this;if(this._deleted)return new I(m());var h=(n=this._appId,o=this._pool,i=this._firebaseVersion,a=M(e.urlParams),s=e.url+a,c=u=Object.assign({},e.headers),n&&(c["X-Firebase-GMPID"]=n),null!==t&&t.length>0&&(u.Authorization="Firebase "+t),u["X-Firebase-Storage-Version"]="webjs/"+(null!=i?i:"AppManager"),null!==r&&(u["X-Firebase-AppCheck"]=r),new z(s,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o));return this._requests.add(h),h.getPromise().then(function(){return l._requests.delete(h)},function(){return l._requests.delete(h)}),h},e.prototype.makeRequestWithTokens=function(e){return(0,s.mG)(this,void 0,void 0,function(){var t,r,n;return(0,s.Jh)(this,function(o){switch(o.label){case 0:return[4,Promise.all([this._getAuthToken(),this._getAppCheckToken()])];case 1:return r=(t=o.sent())[0],n=t[1],[2,this._makeRequest(e,r,n)]}})})},e}();function em(e,t){return function(e,t){if(!(t&&e_(t)))return function e(t,r){if(t instanceof ev){if(null==t._bucket)throw new p("no-default-bucket","No default bucket found. Did you set the '"+h+"' property when initializing the app?");var n=new ep(t,t._bucket);return null!=r?e(n,r):n}return void 0!==r?ed(t,r):t}(e,t);if(e instanceof ev)return new ep(e,t);throw v("To use ref(service, url), the first argument must be a Storage instance.")}(e=(0,u.m9)(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eb=function(){function e(e,t,r){this._delegate=e,this.task=t,this.ref=r}return Object.defineProperty(e.prototype,"bytesTransferred",{get:function(){return this._delegate.bytesTransferred},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"metadata",{get:function(){return this._delegate.metadata},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._delegate.state},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"totalBytes",{get:function(){return this._delegate.totalBytes},enumerable:!1,configurable:!0}),e}(),ey=function(){function e(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}return Object.defineProperty(e.prototype,"snapshot",{get:function(){return new eb(this._delegate.snapshot,this,this._ref)},enumerable:!1,configurable:!0}),e.prototype.then=function(e,t){var r=this;return this._delegate.then(function(t){if(e)return e(new eb(t,r,r._ref))},t)},e.prototype.on=function(e,t,r,n){var o=this,i=void 0;return t&&(i="function"==typeof t?function(e){return t(new eb(e,o,o._ref))}:{next:t.next?function(e){return t.next(new eb(e,o,o._ref))}:void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,r||void 0,n||void 0)},e}(),ew=function(){function e(e,t){this._delegate=e,this._service=t}return Object.defineProperty(e.prototype,"prefixes",{get:function(){var e=this;return this._delegate.prefixes.map(function(t){return new eR(t,e._service)})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){var e=this;return this._delegate.items.map(function(t){return new eR(t,e._service)})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextPageToken",{get:function(){return this._delegate.nextPageToken||null},enumerable:!1,configurable:!0}),e}(),eR=function(){function e(e,t){this._delegate=e,this.storage=t}return Object.defineProperty(e.prototype,"name",{get:function(){return this._delegate.name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this._delegate.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this._delegate.fullPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return this._delegate.toString()},e.prototype.child=function(t){return new e(ed(this._delegate,t),this.storage)},Object.defineProperty(e.prototype,"root",{get:function(){return new e(this._delegate.root,this.storage)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this._delegate.parent;return null==t?null:new e(t,this.storage)},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){var r,n;return this._throwIfRoot("put"),new ey((r=this._delegate,(n=r=(0,u.m9)(r))._throwIfRoot("uploadBytesResumable"),new eh(n,new H(e),t)),this)},e.prototype.putString=function(e,t,r){void 0===t&&(t=R.RAW),this._throwIfRoot("putString");var n=T(t,e),o=(0,s.pi)({},r);return null==o.contentType&&null!=n.contentType&&(o.contentType=n.contentType),new ey(new eh(this._delegate,new H(n.data,!0),o),this)},e.prototype.listAll=function(){var e,t,r=this;return(e=this._delegate,(function e(t,r,n){return(0,s.mG)(this,void 0,void 0,function(){var o,i,a;return(0,s.Jh)(this,function(s){switch(s.label){case 0:return[4,ef(t,{pageToken:n})];case 1:if(o=s.sent(),(i=r.prefixes).push.apply(i,o.prefixes),(a=r.items).push.apply(a,o.items),!(null!=o.nextPageToken))return[3,3];return[4,e(t,r,o.nextPageToken)];case 2:s.sent(),s.label=3;case 3:return[2]}})})})(e=(0,u.m9)(e),t={prefixes:[],items:[]}).then(function(){return t})).then(function(e){return new ew(e,r.storage)})},e.prototype.list=function(e){var t,r=this;return(t=this._delegate,ef(t=(0,u.m9)(t),e||void 0)).then(function(e){return new ew(e,r.storage)})},e.prototype.getMetadata=function(){var e;return e=this._delegate,function(e){return(0,s.mG)(this,void 0,void 0,function(){var t;return(0,s.Jh)(this,function(r){switch(r.label){case 0:return e._throwIfRoot("getMetadata"),t=ei(e.storage,e._location,Z()),[4,e.storage.makeRequestWithTokens(t)];case 1:return[2,r.sent().getPromise()]}})})}(e=(0,u.m9)(e))},e.prototype.updateMetadata=function(e){var t;return t=this._delegate,function(e,t){return(0,s.mG)(this,void 0,void 0,function(){var r;return(0,s.Jh)(this,function(n){switch(n.label){case 0:var o,i,a,s,u,c,l;return e._throwIfRoot("updateMetadata"),o=e.storage,i=e._location,a=Z(),s=B(i.fullServerUrl(),o.host),u=$(t,a),c=o.maxOperationRetryTime,(l=new ee(s,"PATCH",er(o,a),c)).headers={"Content-Type":"application/json; charset=utf-8"},l.body=u,l.errorHandler=eo(i),r=l,[4,e.storage.makeRequestWithTokens(r)];case 1:return[2,n.sent().getPromise()]}})})}(t=(0,u.m9)(t),e)},e.prototype.getDownloadURL=function(){var e;return e=this._delegate,function(e){return(0,s.mG)(this,void 0,void 0,function(){var t;return(0,s.Jh)(this,function(r){switch(r.label){case 0:var n,o,i,a;return e._throwIfRoot("getDownloadURL"),n=e.storage,o=e._location,i=Z(),(a=new ee(B(o.fullServerUrl(),n.host),"GET",function(e,t){var r=K(n,t,i);return et(null!==r),function(e,t,r){var n=G(t);if(null===n||!j(n.downloadTokens))return null;var o=n.downloadTokens;if(0===o.length)return null;var i=encodeURIComponent;return o.split(",").map(function(t){var n=e.bucket,o=e.fullPath;return B("/b/"+i(n)+"/o/"+i(o),r)+M({alt:"media",token:t})})[0]}(r,t,n.host)},n.maxOperationRetryTime)).errorHandler=eo(o),t=a,[4,e.storage.makeRequestWithTokens(t)];case 1:return[2,r.sent().getPromise().then(function(e){if(null===e)throw new p("no-download-url","The given file does not have any download URLs.");return e})]}})})}(e=(0,u.m9)(e))},e.prototype.delete=function(){var e;return this._throwIfRoot("delete"),e=this._delegate,function(e){return(0,s.mG)(this,void 0,void 0,function(){var t;return(0,s.Jh)(this,function(r){switch(r.label){case 0:var n,o,i;return e._throwIfRoot("deleteObject"),n=e.storage,(i=new ee(B((o=e._location).fullServerUrl(),n.host),"DELETE",function(e,t){},n.maxOperationRetryTime)).successCodes=[200,204],i.errorHandler=eo(o),t=i,[4,e.storage.makeRequestWithTokens(t)];case 1:return[2,r.sent().getPromise()]}})})}(e=(0,u.m9)(e))},e.prototype._throwIfRoot=function(e){if(""===this._delegate._location.path)throw b(e)},e}(),ek=function(){function e(e,t){this.app=e,this._delegate=t}return Object.defineProperty(e.prototype,"maxOperationRetryTime",{get:function(){return this._delegate.maxOperationRetryTime},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this._delegate.maxUploadRetryTime},enumerable:!1,configurable:!0}),e.prototype.ref=function(e){if(e_(e))throw v("ref() expected a child path but got a URL, use refFromURL instead.");return new eR(em(this._delegate,e),this)},e.prototype.refFromURL=function(e){if(!e_(e))throw v("refFromURL() expected a full URL but got a child path, use ref() instead.");try{A.makeFromUrl(e,this._delegate.host)}catch(e){throw v("refFromUrl() expected a valid full URL but got an invalid one.")}return new eR(em(this._delegate,e),this)},e.prototype.setMaxUploadRetryTime=function(e){this._delegate.maxUploadRetryTime=e},e.prototype.setMaxOperationRetryTime=function(e){this._delegate.maxOperationRetryTime=e},e.prototype.useEmulator=function(e,t,r){var n,o,i,a;void 0===r&&(r={}),n=this._delegate,void 0===(o=r)&&(o={}),void 0===(i=o)&&(i={}),n.host="http://"+e+":"+t,(a=i.mockUserToken)&&(n._overrideAuthToken="string"==typeof a?a:(0,u.Sg)(a,n.app.options.projectId))},e}();(o=a.Z).INTERNAL.registerComponent(new c.wA("storage",function(e,t){var r=t.instanceIdentifier,n=e.getProvider("app").getImmediate();return new ek(n,new ev(n,e.getProvider("auth-internal"),e.getProvider("app-check-internal"),new E,r,a.Z.SDK_VERSION))},"PUBLIC").setServiceProps({TaskState:U,TaskEvent:{STATE_CHANGED:"state_changed"},StringFormat:R,Storage:ev,Reference:eR}).setMultipleInstances(!0)),o.registerVersion("@firebase/storage","0.7.1")}}]);