(async()=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const Fo="modulepreload",Bo=function(r){return"/"+r},ca={},zo=function(r,e,t){let i=Promise.resolve();if(e&&e.length>0){const n=document.getElementsByTagName("link");i=Promise.all(e.map(a=>{if(a=Bo(a),a in ca)return;ca[a]=!0;const o=a.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(t)for(let c=n.length-1;c>=0;c--){const h=n[c];if(h.href===a&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${s}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Fo,o||(l.as="script",l.crossOrigin=""),l.href=a,document.head.appendChild(l),o)return new Promise((c,h)=>{l.addEventListener("load",c),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return i.then(()=>r()).catch(n=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n})},sn="160",Ho=0,ha=1,Go=2,ua=1,Vo=2,Ht=3,Jt=0,gt=1,Gt=2,Qt=0,bi=1,da=2,pa=3,fa=4,ko=5,ci=100,Wo=101,Xo=102,ma=103,ga=104,jo=200,qo=201,Yo=202,Ko=203,on=204,ln=205,Zo=206,Jo=207,Qo=208,$o=209,el=210,tl=211,il=212,rl=213,nl=214,al=0,sl=1,ol=2,pr=3,ll=4,cl=5,hl=6,ul=7,_a=0,dl=1,pl=2,$t=0,fl=1,ml=2,gl=3,_l=4,vl=5,xl=6,va=300,Ai=301,wi=302,cn=303,hn=304,fr=306,hi=1e3,Ct=1001,un=1002,dt=1003,xa=1004,dn=1005,yt=1006,Ml=1007,er=1008,ei=1009,Sl=1010,yl=1011,pn=1012,Ma=1013,ti=1014,ii=1015,tr=1016,Sa=1017,ya=1018,ui=1020,El=1021,Pt=1023,Tl=1024,bl=1025,di=1026,Ri=1027,Al=1028,Ea=1029,wl=1030,Ta=1031,ba=1033,fn=33776,mn=33777,gn=33778,_n=33779,Aa=35840,wa=35841,Ra=35842,Ca=35843,Pa=36196,La=37492,Ua=37496,Da=37808,Na=37809,Ia=37810,Oa=37811,Fa=37812,Ba=37813,za=37814,Ha=37815,Ga=37816,Va=37817,ka=37818,Wa=37819,Xa=37820,ja=37821,vn=36492,qa=36494,Ya=36495,Rl=36283,Ka=36284,Za=36285,Ja=36286,Qa=3e3,pi=3001,Cl=3200,Pl=3201,$a=0,Ll=1,Et="",ot="srgb",Vt="srgb-linear",xn="display-p3",mr="display-p3-linear",gr="linear",Ye="srgb",_r="rec709",vr="p3",Ci=7680,es=519,Ul=512,Dl=513,Nl=514,ts=515,Il=516,Ol=517,Fl=518,Bl=519,is=35044,rs="300 es",Mn=1035,kt=2e3,xr=2001;class Pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sn=Math.PI/180,yn=180/Math.PI;function ir(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(lt[r&255]+lt[r>>8&255]+lt[r>>16&255]+lt[r>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[i&255]+lt[i>>8&255]+lt[i>>16&255]+lt[i>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function zl(r,e){return(r%e+e)%e}function En(r,e,t){return(1-t)*r+t*e}function ns(r){return(r&r-1)===0&&r!==0}function Tn(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function rr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*n+e.x,this.y=a*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,n,a,o,s,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,o,s,l,c)}set(e,t,i,n,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=s,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],h=i[4],p=i[7],d=i[2],m=i[5],_=i[8],v=n[0],f=n[3],u=n[6],T=n[1],M=n[4],w=n[7],L=n[2],R=n[5],A=n[8];return a[0]=o*v+s*T+l*L,a[3]=o*f+s*M+l*R,a[6]=o*u+s*w+l*A,a[1]=c*v+h*T+p*L,a[4]=c*f+h*M+p*R,a[7]=c*u+h*w+p*A,a[2]=d*v+m*T+_*L,a[5]=d*f+m*M+_*R,a[8]=d*u+m*w+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-i*a*h+i*s*l+n*a*c-n*o*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],p=h*o-s*c,d=s*l-h*a,m=c*a-o*l,_=t*p+i*d+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=p*v,e[1]=(n*c-h*i)*v,e[2]=(s*i-n*o)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*a-s*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(bn.makeScale(e,t)),this}rotate(e){return this.premultiply(bn.makeRotation(-e)),this}translate(e,t){return this.premultiply(bn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bn=new Ne;function as(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function nr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hl(){const r=nr("canvas");return r.style.display="block",r}const ss={};function ar(r){r in ss||(ss[r]=!0,console.warn(r))}const os=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ls=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[Vt]:{transfer:gr,primaries:_r,toReference:r=>r,fromReference:r=>r},[ot]:{transfer:Ye,primaries:_r,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[mr]:{transfer:gr,primaries:vr,toReference:r=>r.applyMatrix3(ls),fromReference:r=>r.applyMatrix3(os)},[xn]:{transfer:Ye,primaries:vr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(ls),fromReference:r=>r.applyMatrix3(os).convertLinearToSRGB()}},Gl=new Set([Vt,mr]),ke={enabled:!0,_workingColorSpace:Vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Gl.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Mr[e].toReference,n=Mr[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Mr[r].primaries},getTransfer:function(r){return r===Et?gr:Mr[r].transfer}};function Li(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function An(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ui;class cs{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=nr("canvas")),Ui.width=e.width,Ui.height=e.height;const i=Ui.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=Li(a[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Li(t[i]/255)*255):t[i]=Li(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vl=0;class hs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(wn(n[o].image)):a.push(wn(n[o]))}else a=wn(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function wn(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?cs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kl=0;class xt extends Pi{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,i=Ct,n=Ct,a=yt,o=er,s=Pt,l=ei,c=xt.DEFAULT_ANISOTROPY,h=Et){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=ir(),this.name="",this.source=new hs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===pi?ot:Et),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==va)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hi:e.x=e.x-Math.floor(e.x);break;case Ct:e.x=e.x<0?0:1;break;case un:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hi:e.y=e.y-Math.floor(e.y);break;case Ct:e.y=e.y<0?0:1;break;case un:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ot?pi:Qa}set encoding(e){ar("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pi?ot:Et}}xt.DEFAULT_IMAGE=null,xt.DEFAULT_MAPPING=va,xt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,n=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],h=o[1],p=o[5],d=o[9],m=o[2],_=o[6],v=o[10];if(Math.abs(l-h)<.01&&Math.abs(c-m)<.01&&Math.abs(d-_)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+m)<.1&&Math.abs(d+_)<.1&&Math.abs(s+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const u=(s+1)/2,T=(p+1)/2,M=(v+1)/2,w=(l+h)/4,L=(c+m)/4,R=(d+_)/4;return u>T&&u>M?u<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(u),n=w/i,a=L/i):T>M?T<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(T),i=w/n,a=R/n):M<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(M),i=L/a,n=R/a),this.set(i,n,a,t),this}let f=Math.sqrt((_-d)*(_-d)+(c-m)*(c-m)+(h-l)*(h-l));return Math.abs(f)<.001&&(f=1),this.x=(_-d)/f,this.y=(c-m)/f,this.z=(h-l)/f,this.w=Math.acos((s+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wl extends Pi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(ar("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===pi?ot:Et),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new xt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends Wl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class us extends xt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xl extends xt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=dt,this.minFilter=dt,this.wrapR=Ct,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,o,s){let l=i[n+0],c=i[n+1],h=i[n+2],p=i[n+3];const d=a[o+0],m=a[o+1],_=a[o+2],v=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(p!==v||l!==d||c!==m||h!==_){let f=1-s;const u=l*d+c*m+h*_+p*v,T=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){const L=Math.sqrt(M),R=Math.atan2(L,u*T);f=Math.sin(f*R)/L,s=Math.sin(s*R)/L}const w=s*T;if(l=l*f+d*w,c=c*f+m*w,h=h*f+_*w,p=p*f+v*w,f===1-s){const L=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=L,c*=L,h*=L,p*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,n,a,o){const s=i[n],l=i[n+1],c=i[n+2],h=i[n+3],p=a[o],d=a[o+1],m=a[o+2],_=a[o+3];return e[t]=s*_+h*p+l*m-c*d,e[t+1]=l*_+h*d+c*p-s*m,e[t+2]=c*_+h*m+s*d-l*p,e[t+3]=h*_-s*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(n/2),p=s(a/2),d=l(i/2),m=l(n/2),_=l(a/2);switch(o){case"XYZ":this._x=d*h*p+c*m*_,this._y=c*m*p-d*h*_,this._z=c*h*_+d*m*p,this._w=c*h*p-d*m*_;break;case"YXZ":this._x=d*h*p+c*m*_,this._y=c*m*p-d*h*_,this._z=c*h*_-d*m*p,this._w=c*h*p+d*m*_;break;case"ZXY":this._x=d*h*p-c*m*_,this._y=c*m*p+d*h*_,this._z=c*h*_+d*m*p,this._w=c*h*p-d*m*_;break;case"ZYX":this._x=d*h*p-c*m*_,this._y=c*m*p+d*h*_,this._z=c*h*_-d*m*p,this._w=c*h*p+d*m*_;break;case"YZX":this._x=d*h*p+c*m*_,this._y=c*m*p+d*h*_,this._z=c*h*_-d*m*p,this._w=c*h*p-d*m*_;break;case"XZY":this._x=d*h*p-c*m*_,this._y=c*m*p-d*h*_,this._z=c*h*_+d*m*p,this._w=c*h*p+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],p=t[10],d=i+s+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(a-c)*m,this._z=(o-n)*m}else if(i>s&&i>p){const m=2*Math.sqrt(1+i-s-p);this._w=(h-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(a+c)/m}else if(s>p){const m=2*Math.sqrt(1+s-i-p);this._w=(a-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-s);this._w=(o-n)/m,this._x=(a+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*s+n*c-a*l,this._y=n*h+o*l+a*s-i*c,this._z=a*h+o*c+i*l-n*s,this._w=o*h-i*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*n+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),p=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*p+this._w*d,this._x=i*p+this._x*d,this._y=n*p+this._y*d,this._z=a*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(a),i*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ds.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ds.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*i),h=2*(s*t-a*n),p=2*(a*i-o*t);return this.x=t+l*c+o*p-s*h,this.y=i+l*h+s*c-a*p,this.z=n+l*p+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=n*l-a*s,this.y=a*o-i*l,this.z=i*s-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rn.copy(this).projectOnVector(e),this.sub(Rn)}reflect(e){return this.sub(Rn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(_t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rn=new U,ds=new sr;class or{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Lt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Lt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Lt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Lt):Lt.fromBufferAttribute(a,o),Lt.applyMatrix4(e.matrixWorld),this.expandByPoint(Lt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Lt),Lt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),yr.subVectors(this.max,lr),Di.subVectors(e.a,lr),Ni.subVectors(e.b,lr),Ii.subVectors(e.c,lr),ri.subVectors(Ni,Di),ni.subVectors(Ii,Ni),mi.subVectors(Di,Ii);let t=[0,-ri.z,ri.y,0,-ni.z,ni.y,0,-mi.z,mi.y,ri.z,0,-ri.x,ni.z,0,-ni.x,mi.z,0,-mi.x,-ri.y,ri.x,0,-ni.y,ni.x,0,-mi.y,mi.x,0];return!Cn(t,Di,Ni,Ii,yr)||(t=[1,0,0,0,1,0,0,0,1],!Cn(t,Di,Ni,Ii,yr))?!1:(Er.crossVectors(ri,ni),t=[Er.x,Er.y,Er.z],Cn(t,Di,Ni,Ii,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Lt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wt=[new U,new U,new U,new U,new U,new U,new U,new U],Lt=new U,Sr=new or,Di=new U,Ni=new U,Ii=new U,ri=new U,ni=new U,mi=new U,lr=new U,yr=new U,Er=new U,gi=new U;function Cn(r,e,t,i,n){for(let a=0,o=r.length-3;a<=o;a+=3){gi.fromArray(r,a);const s=n.x*Math.abs(gi.x)+n.y*Math.abs(gi.y)+n.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),h=i.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const jl=new or,cr=new U,Pn=new U;class Tr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jl.setFromPoints(e).getCenter(i);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(cr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Pn)),this.expandByPoint(cr.copy(e.center).sub(Pn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xt=new U,Ln=new U,br=new U,ai=new U,Un=new U,Ar=new U,Dn=new U;class ps{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xt.copy(this.origin).addScaledVector(this.direction,t),Xt.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ln.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Ln);const a=e.distanceTo(t)*.5,o=-this.direction.dot(br),s=ai.dot(this.direction),l=-ai.dot(br),c=ai.lengthSq(),h=Math.abs(1-o*o);let p,d,m,_;if(h>0)if(p=o*l-s,d=o*s-l,_=a*h,p>=0)if(d>=-_)if(d<=_){const v=1/h;p*=v,d*=v,m=p*(p+o*d+2*s)+d*(o*p+d+2*l)+c}else d=a,p=Math.max(0,-(o*d+s)),m=-p*p+d*(d+2*l)+c;else d=-a,p=Math.max(0,-(o*d+s)),m=-p*p+d*(d+2*l)+c;else d<=-_?(p=Math.max(0,-(-o*a+s)),d=p>0?-a:Math.min(Math.max(-a,-l),a),m=-p*p+d*(d+2*l)+c):d<=_?(p=0,d=Math.min(Math.max(-a,-l),a),m=d*(d+2*l)+c):(p=Math.max(0,-(o*a+s)),d=p>0?a:Math.min(Math.max(-a,-l),a),m=-p*p+d*(d+2*l)+c);else d=o>0?-a:a,p=Math.max(0,-(o*d+s)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),n&&n.copy(Ln).addScaledVector(br,d),m}intersectSphere(e,t){Xt.subVectors(e.center,this.origin);const i=Xt.dot(this.direction),n=Xt.dot(Xt)-i*i,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),p>=0?(s=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(s=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||s>n)||((s>i||i!==i)&&(i=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Xt)!==null}intersectTriangle(e,t,i,n,a){Un.subVectors(t,e),Ar.subVectors(i,e),Dn.crossVectors(Un,Ar);let o=this.direction.dot(Dn),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;ai.subVectors(this.origin,e);const l=s*this.direction.dot(Ar.crossVectors(ai,Ar));if(l<0)return null;const c=s*this.direction.dot(Un.cross(ai));if(c<0||l+c>o)return null;const h=-s*ai.dot(Dn);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,i,n,a,o,s,l,c,h,p,d,m,_,v,f){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,o,s,l,c,h,p,d,m,_,v,f)}set(e,t,i,n,a,o,s,l,c,h,p,d,m,_,v,f){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=n,u[1]=a,u[5]=o,u[9]=s,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=d,u[3]=m,u[7]=_,u[11]=v,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Oi.setFromMatrixColumn(e,0).length(),a=1/Oi.setFromMatrixColumn(e,1).length(),o=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const d=o*h,m=o*p,_=s*h,v=s*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=m+_*c,t[5]=d-v*c,t[9]=-s*l,t[2]=v-d*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,m=l*p,_=c*h,v=c*p;t[0]=d+v*s,t[4]=_*s-m,t[8]=o*c,t[1]=o*p,t[5]=o*h,t[9]=-s,t[2]=m*s-_,t[6]=v+d*s,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,m=l*p,_=c*h,v=c*p;t[0]=d-v*s,t[4]=-o*p,t[8]=_+m*s,t[1]=m+_*s,t[5]=o*h,t[9]=v-d*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,m=o*p,_=s*h,v=s*p;t[0]=l*h,t[4]=_*c-m,t[8]=d*c+v,t[1]=l*p,t[5]=v*c+d,t[9]=m*c-_,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,_=s*l,v=s*c;t[0]=l*h,t[4]=v-d*p,t[8]=_*p+m,t[1]=p,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*p+_,t[10]=d-v*p}else if(e.order==="XZY"){const d=o*l,m=o*c,_=s*l,v=s*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=d*p+v,t[5]=o*h,t[9]=m*p-_,t[2]=_*p-m,t[6]=s*h,t[10]=v*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ql,e,Yl)}lookAt(e,t,i){const n=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),si.crossVectors(i,Mt),si.lengthSq()===0&&(Math.abs(i.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),si.crossVectors(i,Mt)),si.normalize(),wr.crossVectors(Mt,si),n[0]=si.x,n[4]=wr.x,n[8]=Mt.x,n[1]=si.y,n[5]=wr.y,n[9]=Mt.y,n[2]=si.z,n[6]=wr.z,n[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],h=i[1],p=i[5],d=i[9],m=i[13],_=i[2],v=i[6],f=i[10],u=i[14],T=i[3],M=i[7],w=i[11],L=i[15],R=n[0],A=n[4],K=n[8],S=n[12],E=n[1],H=n[5],G=n[9],ae=n[13],C=n[2],z=n[6],V=n[10],X=n[14],W=n[3],k=n[7],J=n[11],$=n[15];return a[0]=o*R+s*E+l*C+c*W,a[4]=o*A+s*H+l*z+c*k,a[8]=o*K+s*G+l*V+c*J,a[12]=o*S+s*ae+l*X+c*$,a[1]=h*R+p*E+d*C+m*W,a[5]=h*A+p*H+d*z+m*k,a[9]=h*K+p*G+d*V+m*J,a[13]=h*S+p*ae+d*X+m*$,a[2]=_*R+v*E+f*C+u*W,a[6]=_*A+v*H+f*z+u*k,a[10]=_*K+v*G+f*V+u*J,a[14]=_*S+v*ae+f*X+u*$,a[3]=T*R+M*E+w*C+L*W,a[7]=T*A+M*H+w*z+L*k,a[11]=T*K+M*G+w*V+L*J,a[15]=T*S+M*ae+w*X+L*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],p=e[6],d=e[10],m=e[14],_=e[3],v=e[7],f=e[11],u=e[15];return _*(+a*l*p-n*c*p-a*s*d+i*c*d+n*s*m-i*l*m)+v*(+t*l*m-t*c*d+a*o*d-n*o*m+n*c*h-a*l*h)+f*(+t*c*p-t*s*m-a*o*p+i*o*m+a*s*h-i*c*h)+u*(-n*s*h-t*l*p+t*s*d+n*o*p-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],p=e[9],d=e[10],m=e[11],_=e[12],v=e[13],f=e[14],u=e[15],T=p*f*c-v*d*c+v*l*m-s*f*m-p*l*u+s*d*u,M=_*d*c-h*f*c-_*l*m+o*f*m+h*l*u-o*d*u,w=h*v*c-_*p*c+_*s*m-o*v*m-h*s*u+o*p*u,L=_*p*l-h*v*l-_*s*d+o*v*d+h*s*f-o*p*f,R=t*T+i*M+n*w+a*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=T*A,e[1]=(v*d*a-p*f*a-v*n*m+i*f*m+p*n*u-i*d*u)*A,e[2]=(s*f*a-v*l*a+v*n*c-i*f*c-s*n*u+i*l*u)*A,e[3]=(p*l*a-s*d*a-p*n*c+i*d*c+s*n*m-i*l*m)*A,e[4]=M*A,e[5]=(h*f*a-_*d*a+_*n*m-t*f*m-h*n*u+t*d*u)*A,e[6]=(_*l*a-o*f*a-_*n*c+t*f*c+o*n*u-t*l*u)*A,e[7]=(o*d*a-h*l*a+h*n*c-t*d*c-o*n*m+t*l*m)*A,e[8]=w*A,e[9]=(_*p*a-h*v*a-_*i*m+t*v*m+h*i*u-t*p*u)*A,e[10]=(o*v*a-_*s*a+_*i*c-t*v*c-o*i*u+t*s*u)*A,e[11]=(h*s*a-o*p*a-h*i*c+t*p*c+o*i*m-t*s*m)*A,e[12]=L*A,e[13]=(h*v*n-_*p*n+_*i*d-t*v*d-h*i*f+t*p*f)*A,e[14]=(_*s*n-o*v*n-_*i*l+t*v*l+o*i*f-t*s*f)*A,e[15]=(o*p*n-h*s*n+h*i*l-t*p*l-o*i*d+t*s*d)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+i,c*s-n*l,c*l+n*s,0,c*s+n*l,h*s+i,h*l-n*o,0,c*l-n*s,h*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,o){return this.set(1,i,a,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,h=o+o,p=s+s,d=a*c,m=a*h,_=a*p,v=o*h,f=o*p,u=s*p,T=l*c,M=l*h,w=l*p,L=i.x,R=i.y,A=i.z;return n[0]=(1-(v+u))*L,n[1]=(m+w)*L,n[2]=(_-M)*L,n[3]=0,n[4]=(m-w)*R,n[5]=(1-(d+u))*R,n[6]=(f+T)*R,n[7]=0,n[8]=(_+M)*A,n[9]=(f-T)*A,n[10]=(1-(d+v))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=Oi.set(n[0],n[1],n[2]).length();const o=Oi.set(n[4],n[5],n[6]).length(),s=Oi.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Ut.copy(this);const l=1/a,c=1/o,h=1/s;return Ut.elements[0]*=l,Ut.elements[1]*=l,Ut.elements[2]*=l,Ut.elements[4]*=c,Ut.elements[5]*=c,Ut.elements[6]*=c,Ut.elements[8]*=h,Ut.elements[9]*=h,Ut.elements[10]*=h,t.setFromRotationMatrix(Ut),i.x=a,i.y=o,i.z=s,this}makePerspective(e,t,i,n,a,o,s=kt){const l=this.elements,c=2*a/(t-e),h=2*a/(i-n),p=(t+e)/(t-e),d=(i+n)/(i-n);let m,_;if(s===kt)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===xr)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,o,s=kt){const l=this.elements,c=1/(t-e),h=1/(i-n),p=1/(o-a),d=(t+e)*c,m=(i+n)*h;let _,v;if(s===kt)_=(o+a)*p,v=-2*p;else if(s===xr)_=a*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Oi=new U,Ut=new Qe,ql=new U(0,0,0),Yl=new U(1,1,1),si=new U,wr=new U,Mt=new U,fs=new Qe,ms=new sr;class Rr{constructor(e=0,t=0,i=0,n=Rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],h=n[9],p=n[2],d=n[6],m=n[10];switch(t){case"XYZ":this._y=Math.asin(_t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return fs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fs,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ms.setFromEuler(this),this.setFromQuaternion(ms,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rr.DEFAULT_ORDER="XYZ";class gs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kl=0;const _s=new U,Fi=new sr,jt=new Qe,Cr=new U,hr=new U,Zl=new U,Jl=new sr,vs=new U(1,0,0),xs=new U(0,1,0),Ms=new U(0,0,1),Ql={type:"added"},$l={type:"removed"};class at extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new U,t=new Rr,i=new sr,n=new U(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ne}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(e,t){return Fi.setFromAxisAngle(e,t),this.quaternion.premultiply(Fi),this}rotateX(e){return this.rotateOnAxis(vs,e)}rotateY(e){return this.rotateOnAxis(xs,e)}rotateZ(e){return this.rotateOnAxis(Ms,e)}translateOnAxis(e,t){return _s.copy(e).applyQuaternion(this.quaternion),this.position.add(_s.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vs,e)}translateY(e){return this.translateOnAxis(xs,e)}translateZ(e){return this.translateOnAxis(Ms,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cr.copy(e):Cr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jt.lookAt(hr,Cr,this.up):jt.lookAt(Cr,hr,this.up),this.quaternion.setFromRotationMatrix(jt),n&&(jt.extractRotation(n.matrixWorld),Fi.setFromRotationMatrix(jt),this.quaternion.premultiply(Fi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ql)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($l)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jt.multiply(e.parent.matrixWorld)),e.applyMatrix4(jt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Zl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Jl,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++){const s=n[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];a(e.shapes,p)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=n,i;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}at.DEFAULT_UP=new U(0,1,0),at.DEFAULT_MATRIX_AUTO_UPDATE=!0,at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dt=new U,qt=new U,Nn=new U,Yt=new U,Bi=new U,zi=new U,Ss=new U,In=new U,On=new U,Fn=new U;let Pr=!1;class Nt{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Dt.subVectors(e,t),n.cross(Dt);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){Dt.subVectors(n,t),qt.subVectors(i,t),Nn.subVectors(e,t);const o=Dt.dot(Dt),s=Dt.dot(qt),l=Dt.dot(Nn),c=qt.dot(qt),h=qt.dot(Nn),p=o*c-s*s;if(p===0)return a.set(0,0,0),null;const d=1/p,m=(c*l-s*h)*d,_=(o*h-s*l)*d;return a.set(1-m-_,_,m)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Yt)===null?!1:Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getUV(e,t,i,n,a,o,s,l){return Pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pr=!0),this.getInterpolation(e,t,i,n,a,o,s,l)}static getInterpolation(e,t,i,n,a,o,s,l){return this.getBarycoord(e,t,i,n,Yt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Yt.x),l.addScaledVector(o,Yt.y),l.addScaledVector(s,Yt.z),l)}static isFrontFacing(e,t,i,n){return Dt.subVectors(i,t),qt.subVectors(e,t),Dt.cross(qt).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Dt.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Nt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,a){return Pr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pr=!0),Nt.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}getInterpolation(e,t,i,n,a){return Nt.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return Nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let o,s;Bi.subVectors(n,i),zi.subVectors(a,i),In.subVectors(e,i);const l=Bi.dot(In),c=zi.dot(In);if(l<=0&&c<=0)return t.copy(i);On.subVectors(e,n);const h=Bi.dot(On),p=zi.dot(On);if(h>=0&&p<=h)return t.copy(n);const d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Bi,o);Fn.subVectors(e,a);const m=Bi.dot(Fn),_=zi.dot(Fn);if(_>=0&&m<=_)return t.copy(a);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return s=c/(c-_),t.copy(i).addScaledVector(zi,s);const f=h*_-m*p;if(f<=0&&p-h>=0&&m-_>=0)return Ss.subVectors(a,n),s=(p-h)/(p-h+(m-_)),t.copy(n).addScaledVector(Ss,s);const u=1/(f+v+d);return o=v*u,s=d*u,t.copy(i).addScaledVector(Bi,o).addScaledVector(zi,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ys={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Bn(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,ke.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=ke.workingColorSpace){if(e=zl(e,1),t=_t(t,0,1),i=_t(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=Bn(o,a,e+1/3),this.g=Bn(o,a,e),this.b=Bn(o,a,e-1/3)}return ke.toWorkingColorSpace(this,n),this}setStyle(e,t=ot){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){const i=ys[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return ke.fromWorkingColorSpace(ct.copy(this),e),Math.round(_t(ct.r*255,0,255))*65536+Math.round(_t(ct.g*255,0,255))*256+Math.round(_t(ct.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.fromWorkingColorSpace(ct.copy(this),t);const i=ct.r,n=ct.g,a=ct.b,o=Math.max(i,n,a),s=Math.min(i,n,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const p=o-s;switch(c=h<=.5?p/(o+s):p/(2-o-s),o){case i:l=(n-a)/p+(n<a?6:0);break;case n:l=(a-i)/p+2;break;case a:l=(i-n)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ke.workingColorSpace){return ke.fromWorkingColorSpace(ct.copy(this),t),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=ot){ke.fromWorkingColorSpace(ct.copy(this),e);const t=ct.r,i=ct.g,n=ct.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Lr);const i=En(oi.h,Lr.h,t),n=En(oi.s,Lr.s,t),a=En(oi.l,Lr.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ct=new Fe;Fe.NAMES=ys;let ec=0;class Hi extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ec++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=bi,this.side=Jt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=on,this.blendDst=ln,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=es,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(i.blending=this.blending),this.side!==Jt&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==on&&(i.blendSrc=this.blendSrc),this.blendDst!==ln&&(i.blendDst=this.blendDst),this.blendEquation!==ci&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==es&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=n(e.textures),o=n(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Es extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=_a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new U,Ur=new Ge;class Ot{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=is,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),i=vt(i,this.array),n=vt(n,this.array),a=vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==is&&(e.usage=this.usage),e}}class Ts extends Ot{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bs extends Ot{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class It extends Ot{constructor(e,t,i){super(new Float32Array(e),t,i)}}let tc=0;const Tt=new Qe,zn=new at,Gi=new U,St=new or,ur=new or,st=new U;class Kt extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(as(e)?bs:Ts)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ne().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tt.makeRotationFromQuaternion(e),this.applyMatrix4(Tt),this}rotateX(e){return Tt.makeRotationX(e),this.applyMatrix4(Tt),this}rotateY(e){return Tt.makeRotationY(e),this.applyMatrix4(Tt),this}rotateZ(e){return Tt.makeRotationZ(e),this.applyMatrix4(Tt),this}translate(e,t,i){return Tt.makeTranslation(e,t,i),this.applyMatrix4(Tt),this}scale(e,t,i){return Tt.makeScale(e,t,i),this.applyMatrix4(Tt),this}lookAt(e){return zn.lookAt(e),zn.updateMatrix(),this.applyMatrix4(zn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];St.setFromBufferAttribute(a),this.morphTargetsRelative?(st.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(st),st.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(st)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];ur.setFromBufferAttribute(s),this.morphTargetsRelative?(st.addVectors(St.min,ur.min),St.expandByPoint(st),st.addVectors(St.max,ur.max),St.expandByPoint(st)):(St.expandByPoint(ur.min),St.expandByPoint(ur.max))}St.getCenter(i);let n=0;for(let a=0,o=e.count;a<o;a++)st.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(st));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)st.fromBufferAttribute(s,c),l&&(Gi.fromBufferAttribute(e,c),st.add(Gi)),n=Math.max(n,i.distanceToSquared(st))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,a=t.normal.array,o=t.uv.array,s=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<s;E++)c[E]=new U,h[E]=new U;const p=new U,d=new U,m=new U,_=new Ge,v=new Ge,f=new Ge,u=new U,T=new U;function M(E,H,G){p.fromArray(n,E*3),d.fromArray(n,H*3),m.fromArray(n,G*3),_.fromArray(o,E*2),v.fromArray(o,H*2),f.fromArray(o,G*2),d.sub(p),m.sub(p),v.sub(_),f.sub(_);const ae=1/(v.x*f.y-f.x*v.y);isFinite(ae)&&(u.copy(d).multiplyScalar(f.y).addScaledVector(m,-v.y).multiplyScalar(ae),T.copy(m).multiplyScalar(v.x).addScaledVector(d,-f.x).multiplyScalar(ae),c[E].add(u),c[H].add(u),c[G].add(u),h[E].add(T),h[H].add(T),h[G].add(T))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let E=0,H=w.length;E<H;++E){const G=w[E],ae=G.start,C=G.count;for(let z=ae,V=ae+C;z<V;z+=3)M(i[z+0],i[z+1],i[z+2])}const L=new U,R=new U,A=new U,K=new U;function S(E){A.fromArray(a,E*3),K.copy(A);const H=c[E];L.copy(H),L.sub(A.multiplyScalar(A.dot(H))).normalize(),R.crossVectors(K,H);const G=R.dot(h[E])<0?-1:1;l[E*4]=L.x,l[E*4+1]=L.y,l[E*4+2]=L.z,l[E*4+3]=G}for(let E=0,H=w.length;E<H;++E){const G=w[E],ae=G.start,C=G.count;for(let z=ae,V=ae+C;z<V;z+=3)S(i[z+0]),S(i[z+1]),S(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const n=new U,a=new U,o=new U,s=new U,l=new U,c=new U,h=new U,p=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);n.fromBufferAttribute(t,_),a.fromBufferAttribute(t,v),o.fromBufferAttribute(t,f),h.subVectors(o,a),p.subVectors(n,a),h.cross(p),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),s.add(h),l.add(h),c.add(h),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,a),p.subVectors(n,a),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)st.fromBufferAttribute(e,t),st.normalize(),e.setXYZ(t,st.x,st.y,st.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,p=s.normalized,d=new c.constructor(l.length*h);let m=0,_=0;for(let v=0,f=l.length;v<f;v++){s.isInterleavedBufferAttribute?m=l[v]*s.data.stride+s.offset:m=l[v]*h;for(let u=0;u<h;u++)d[_++]=c[m++]}return new Ot(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,i);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,p=c.length;h<p;h++){const d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],p=a[c];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const As=new Qe,_i=new ps,Dr=new Tr,ws=new U,Vi=new U,ki=new U,Wi=new U,Hn=new U,Nr=new U,Ir=new Ge,Or=new Ge,Fr=new Ge,Rs=new U,Cs=new U,Ps=new U,Br=new U,zr=new U;class Ft extends at{constructor(e=new Kt,t=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Nr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],p=a[l];h!==0&&(Hn.fromBufferAttribute(p,e),o?Nr.addScaledVector(Hn,h):Nr.addScaledVector(Hn.sub(t),h))}t.add(Nr)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dr.copy(i.boundingSphere),Dr.applyMatrix4(a),_i.copy(e.ray).recast(e.near),!(Dr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Dr,ws)===null||_i.origin.distanceToSquared(ws)>(e.far-e.near)**2))&&(As.copy(a).invert(),_i.copy(e.ray).applyMatrix4(As),!(i.boundingBox!==null&&_i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,i){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,p=a.attributes.normal,d=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const f=d[_],u=o[f.materialIndex],T=Math.max(f.start,m.start),M=Math.min(s.count,Math.min(f.start+f.count,m.start+m.count));for(let w=T,L=M;w<L;w+=3){const R=s.getX(w),A=s.getX(w+1),K=s.getX(w+2);n=Hr(this,u,e,i,c,h,p,R,A,K),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),v=Math.min(s.count,m.start+m.count);for(let f=_,u=v;f<u;f+=3){const T=s.getX(f),M=s.getX(f+1),w=s.getX(f+2);n=Hr(this,o,e,i,c,h,p,T,M,w),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=d.length;_<v;_++){const f=d[_],u=o[f.materialIndex],T=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let w=T,L=M;w<L;w+=3){const R=w,A=w+1,K=w+2;n=Hr(this,u,e,i,c,h,p,R,A,K),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=f.materialIndex,t.push(n))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=_,u=v;f<u;f+=3){const T=f,M=f+1,w=f+2;n=Hr(this,o,e,i,c,h,p,T,M,w),n&&(n.faceIndex=Math.floor(f/3),t.push(n))}}}}function ic(r,e,t,i,n,a,o,s){let l;if(e.side===gt?l=i.intersectTriangle(o,a,n,!0,s):l=i.intersectTriangle(n,a,o,e.side===Jt,s),l===null)return null;zr.copy(s),zr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(zr);return c<t.near||c>t.far?null:{distance:c,point:zr.clone(),object:r}}function Hr(r,e,t,i,n,a,o,s,l,c){r.getVertexPosition(s,Vi),r.getVertexPosition(l,ki),r.getVertexPosition(c,Wi);const h=ic(r,e,t,i,Vi,ki,Wi,Br);if(h){n&&(Ir.fromBufferAttribute(n,s),Or.fromBufferAttribute(n,l),Fr.fromBufferAttribute(n,c),h.uv=Nt.getInterpolation(Br,Vi,ki,Wi,Ir,Or,Fr,new Ge)),a&&(Ir.fromBufferAttribute(a,s),Or.fromBufferAttribute(a,l),Fr.fromBufferAttribute(a,c),h.uv1=Nt.getInterpolation(Br,Vi,ki,Wi,Ir,Or,Fr,new Ge),h.uv2=h.uv1),o&&(Rs.fromBufferAttribute(o,s),Cs.fromBufferAttribute(o,l),Ps.fromBufferAttribute(o,c),h.normal=Nt.getInterpolation(Br,Vi,ki,Wi,Rs,Cs,Ps,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:s,b:l,c,normal:new U,materialIndex:0};Nt.getNormal(Vi,ki,Wi,p.normal),h.face=p}return h}class Xi extends Kt{constructor(e=1,t=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],p=[];let d=0,m=0;_("z","y","x",-1,-1,i,t,e,o,a,0),_("z","y","x",1,-1,i,t,-e,o,a,1),_("x","z","y",1,1,e,i,t,n,o,2),_("x","z","y",1,-1,e,i,-t,n,o,3),_("x","y","z",1,-1,e,t,i,n,a,4),_("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2));function _(v,f,u,T,M,w,L,R,A,K,S){const E=w/A,H=L/K,G=w/2,ae=L/2,C=R/2,z=A+1,V=K+1;let X=0,W=0;const k=new U;for(let J=0;J<V;J++){const $=J*H-ae;for(let oe=0;oe<z;oe++){const B=oe*E-G;k[v]=B*T,k[f]=$*M,k[u]=C,c.push(k.x,k.y,k.z),k[v]=0,k[f]=0,k[u]=R>0?1:-1,h.push(k.x,k.y,k.z),p.push(oe/A),p.push(1-J/K),X+=1}}for(let J=0;J<K;J++)for(let $=0;$<A;$++){const oe=d+$+z*J,B=d+$+z*(J+1),j=d+($+1)+z*(J+1),he=d+($+1)+z*J;l.push(oe,B,he),l.push(B,j,he),W+=6}s.addGroup(m,W,S),m+=W,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function pt(r){const e={};for(let t=0;t<r.length;t++){const i=ji(r[t]);for(const n in i)e[n]=i[n]}return e}function rc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ls(r){return r.getRenderTarget()===null?r.outputColorSpace:ke.workingColorSpace}const nc={clone:ji,merge:pt};var ac=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ac,this.fragmentShader=sc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=rc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Us extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=kt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bt extends Us{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yn*2*Math.atan(Math.tan(Sn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Yi=1;class oc extends at{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new bt(qi,Yi,e,t);n.layers=this.layers,this.add(n);const a=new bt(qi,Yi,e,t);a.layers=this.layers,this.add(a);const o=new bt(qi,Yi,e,t);o.layers=this.layers,this.add(o);const s=new bt(qi,Yi,e,t);s.layers=this.layers,this.add(s);const l=new bt(qi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new bt(qi,Yi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===kt)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,s),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(p,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ds extends xt{constructor(e,t,i,n,a,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,i,n,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lc extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(ar("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===pi?ot:Et),this.texture=new Ds(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Xi(5,5,5),a=new vi({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gt,blending:Qt});a.uniforms.tEquirect.value=t;const o=new Ft(n,a),s=t.minFilter;return t.minFilter===er&&(t.minFilter=yt),new oc(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(a)}}const Gn=new U,cc=new U,hc=new Ne;class xi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Gn.subVectors(i,t).cross(cc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Gn),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||hc.getNormalMatrix(e),n=this.coplanarPoint(Gn).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Tr,Gr=new U;class Vn{constructor(e=new xi,t=new xi,i=new xi,n=new xi,a=new xi,o=new xi){this.planes=[e,t,i,n,a,o]}set(e,t,i,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kt){const i=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],h=n[5],p=n[6],d=n[7],m=n[8],_=n[9],v=n[10],f=n[11],u=n[12],T=n[13],M=n[14],w=n[15];if(i[0].setComponents(l-a,d-c,f-m,w-u).normalize(),i[1].setComponents(l+a,d+c,f+m,w+u).normalize(),i[2].setComponents(l+o,d+h,f+_,w+T).normalize(),i[3].setComponents(l-o,d-h,f-_,w-T).normalize(),i[4].setComponents(l-s,d-p,f-v,w-M).normalize(),t===kt)i[5].setComponents(l+s,d+p,f+v,w+M).normalize();else if(t===xr)i[5].setComponents(s,p,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Gr.x=n.normal.x>0?e.max.x:e.min.x,Gr.y=n.normal.y>0?e.max.y:e.min.y,Gr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ns(){let r=null,e=!1,t=null,i=null;function n(a,o){t(a,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function uc(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const p=c.array,d=c.usage,m=p.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,p,d),c.onUploadCallback();let v;if(p instanceof Float32Array)v=r.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=r.SHORT;else if(p instanceof Uint32Array)v=r.UNSIGNED_INT;else if(p instanceof Int32Array)v=r.INT;else if(p instanceof Int8Array)v=r.BYTE;else if(p instanceof Uint8Array)v=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,h,p){const d=h.array,m=h._updateRange,_=h.updateRanges;if(r.bindBuffer(p,c),m.count===-1&&_.length===0&&r.bufferSubData(p,0,d),_.length!==0){for(let v=0,f=_.length;v<f;v++){const u=_[v];t?r.bufferSubData(p,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):r.bufferSubData(p,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?r.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(p,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);if(p===void 0)i.set(c,n(c,h));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,c,h),p.version=c.version}}return{get:o,remove:s,update:l}}class Vr extends Kt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,o=t/2,s=Math.floor(i),l=Math.floor(n),c=s+1,h=l+1,p=e/s,d=t/l,m=[],_=[],v=[],f=[];for(let u=0;u<h;u++){const T=u*d-o;for(let M=0;M<c;M++){const w=M*p-a;_.push(w,-T,0),v.push(0,0,1),f.push(M/s),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<s;T++){const M=T+c*u,w=T+c*(u+1),L=T+1+c*(u+1),R=T+1+c*u;m.push(M,w,R),m.push(w,L,R)}this.setIndex(m),this.setAttribute("position",new It(_,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.width,e.height,e.widthSegments,e.heightSegments)}}var dc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_c=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ec=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ac=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Rc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ic=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Oc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vc="gl_FragColor = linearToOutputTexel( gl_FragColor );",kc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Wc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$c=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,th=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ih=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ah=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ch=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ph=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_h=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Th=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ah=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ch=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ph=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ih=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Oh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$h=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ru=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,au=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,su=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,du=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_u=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Su=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Au=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ru=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Uu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Du=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ou=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ku=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,we={alphahash_fragment:dc,alphahash_pars_fragment:pc,alphamap_fragment:fc,alphamap_pars_fragment:mc,alphatest_fragment:gc,alphatest_pars_fragment:_c,aomap_fragment:vc,aomap_pars_fragment:xc,batching_pars_vertex:Mc,batching_vertex:Sc,begin_vertex:yc,beginnormal_vertex:Ec,bsdfs:Tc,iridescence_fragment:bc,bumpmap_pars_fragment:Ac,clipping_planes_fragment:wc,clipping_planes_pars_fragment:Rc,clipping_planes_pars_vertex:Cc,clipping_planes_vertex:Pc,color_fragment:Lc,color_pars_fragment:Uc,color_pars_vertex:Dc,color_vertex:Nc,common:Ic,cube_uv_reflection_fragment:Oc,defaultnormal_vertex:Fc,displacementmap_pars_vertex:Bc,displacementmap_vertex:zc,emissivemap_fragment:Hc,emissivemap_pars_fragment:Gc,colorspace_fragment:Vc,colorspace_pars_fragment:kc,envmap_fragment:Wc,envmap_common_pars_fragment:Xc,envmap_pars_fragment:jc,envmap_pars_vertex:qc,envmap_physical_pars_fragment:ah,envmap_vertex:Yc,fog_vertex:Kc,fog_pars_vertex:Zc,fog_fragment:Jc,fog_pars_fragment:Qc,gradientmap_pars_fragment:$c,lightmap_fragment:eh,lightmap_pars_fragment:th,lights_lambert_fragment:ih,lights_lambert_pars_fragment:rh,lights_pars_begin:nh,lights_toon_fragment:sh,lights_toon_pars_fragment:oh,lights_phong_fragment:lh,lights_phong_pars_fragment:ch,lights_physical_fragment:hh,lights_physical_pars_fragment:uh,lights_fragment_begin:dh,lights_fragment_maps:ph,lights_fragment_end:fh,logdepthbuf_fragment:mh,logdepthbuf_pars_fragment:gh,logdepthbuf_pars_vertex:_h,logdepthbuf_vertex:vh,map_fragment:xh,map_pars_fragment:Mh,map_particle_fragment:Sh,map_particle_pars_fragment:yh,metalnessmap_fragment:Eh,metalnessmap_pars_fragment:Th,morphcolor_vertex:bh,morphnormal_vertex:Ah,morphtarget_pars_vertex:wh,morphtarget_vertex:Rh,normal_fragment_begin:Ch,normal_fragment_maps:Ph,normal_pars_fragment:Lh,normal_pars_vertex:Uh,normal_vertex:Dh,normalmap_pars_fragment:Nh,clearcoat_normal_fragment_begin:Ih,clearcoat_normal_fragment_maps:Oh,clearcoat_pars_fragment:Fh,iridescence_pars_fragment:Bh,opaque_fragment:zh,packing:Hh,premultiplied_alpha_fragment:Gh,project_vertex:Vh,dithering_fragment:kh,dithering_pars_fragment:Wh,roughnessmap_fragment:Xh,roughnessmap_pars_fragment:jh,shadowmap_pars_fragment:qh,shadowmap_pars_vertex:Yh,shadowmap_vertex:Kh,shadowmask_pars_fragment:Zh,skinbase_vertex:Jh,skinning_pars_vertex:Qh,skinning_vertex:$h,skinnormal_vertex:eu,specularmap_fragment:tu,specularmap_pars_fragment:iu,tonemapping_fragment:ru,tonemapping_pars_fragment:nu,transmission_fragment:au,transmission_pars_fragment:su,uv_pars_fragment:ou,uv_pars_vertex:lu,uv_vertex:cu,worldpos_vertex:hu,background_vert:uu,background_frag:du,backgroundCube_vert:pu,backgroundCube_frag:fu,cube_vert:mu,cube_frag:gu,depth_vert:_u,depth_frag:vu,distanceRGBA_vert:xu,distanceRGBA_frag:Mu,equirect_vert:Su,equirect_frag:yu,linedashed_vert:Eu,linedashed_frag:Tu,meshbasic_vert:bu,meshbasic_frag:Au,meshlambert_vert:wu,meshlambert_frag:Ru,meshmatcap_vert:Cu,meshmatcap_frag:Pu,meshnormal_vert:Lu,meshnormal_frag:Uu,meshphong_vert:Du,meshphong_frag:Nu,meshphysical_vert:Iu,meshphysical_frag:Ou,meshtoon_vert:Fu,meshtoon_frag:Bu,points_vert:zu,points_frag:Hu,shadow_vert:Gu,shadow_frag:Vu,sprite_vert:ku,sprite_frag:Wu},ee={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Bt={basic:{uniforms:pt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:pt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Fe(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:pt([ee.common,ee.specularmap,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,ee.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:pt([ee.common,ee.envmap,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.roughnessmap,ee.metalnessmap,ee.fog,ee.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:pt([ee.common,ee.aomap,ee.lightmap,ee.emissivemap,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.gradientmap,ee.fog,ee.lights,{emissive:{value:new Fe(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:pt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,ee.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:pt([ee.points,ee.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:pt([ee.common,ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:pt([ee.common,ee.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:pt([ee.common,ee.bumpmap,ee.normalmap,ee.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:pt([ee.sprite,ee.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:pt([ee.common,ee.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:pt([ee.lights,ee.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Bt.physical={uniforms:pt([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const kr={r:0,b:0,g:0};function Xu(r,e,t,i,n,a,o){const s=new Fe(0);let l=a===!0?0:1,c,h,p=null,d=0,m=null;function _(f,u){let T=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=(u.backgroundBlurriness>0?t:e).get(M)),M===null?v(s,l):M&&M.isColor&&(v(M,1),T=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||T)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===fr)?(h===void 0&&(h=new Ft(new Xi(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:ji(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=ke.getTransfer(M.colorSpace)!==Ye,(p!==M||d!==M.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,p=M,d=M.version,m=r.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ft(new Vr(2,2),new vi({name:"BackgroundMaterial",uniforms:ji(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ke.getTransfer(M.colorSpace)!==Ye,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||d!==M.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,p=M,d=M.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function v(f,u){f.getRGB(kr,Ls(r)),i.buffers.color.setClear(kr.r,kr.g,kr.b,u,o)}return{getClearColor:function(){return s},setClearColor:function(f,u=1){s.set(f),l=u,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,v(s,l)},render:_}}function ju(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=f(null);let c=l,h=!1;function p(C,z,V,X,W){let k=!1;if(o){const J=v(X,V,z);c!==J&&(c=J,m(c.object)),k=u(C,X,V,W),k&&T(C,X,V,W)}else{const J=z.wireframe===!0;(c.geometry!==X.id||c.program!==V.id||c.wireframe!==J)&&(c.geometry=X.id,c.program=V.id,c.wireframe=J,k=!0)}W!==null&&t.update(W,r.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,K(C,z,V,X),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function m(C){return i.isWebGL2?r.bindVertexArray(C):a.bindVertexArrayOES(C)}function _(C){return i.isWebGL2?r.deleteVertexArray(C):a.deleteVertexArrayOES(C)}function v(C,z,V){const X=V.wireframe===!0;let W=s[C.id];W===void 0&&(W={},s[C.id]=W);let k=W[z.id];k===void 0&&(k={},W[z.id]=k);let J=k[X];return J===void 0&&(J=f(d()),k[X]=J),J}function f(C){const z=[],V=[],X=[];for(let W=0;W<n;W++)z[W]=0,V[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:X,object:C,attributes:{},index:null}}function u(C,z,V,X){const W=c.attributes,k=z.attributes;let J=0;const $=V.getAttributes();for(const oe in $)if($[oe].location>=0){const B=W[oe];let j=k[oe];if(j===void 0&&(oe==="instanceMatrix"&&C.instanceMatrix&&(j=C.instanceMatrix),oe==="instanceColor"&&C.instanceColor&&(j=C.instanceColor)),B===void 0||B.attribute!==j||j&&B.data!==j.data)return!0;J++}return c.attributesNum!==J||c.index!==X}function T(C,z,V,X){const W={},k=z.attributes;let J=0;const $=V.getAttributes();for(const oe in $)if($[oe].location>=0){let B=k[oe];B===void 0&&(oe==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),oe==="instanceColor"&&C.instanceColor&&(B=C.instanceColor));const j={};j.attribute=B,B&&B.data&&(j.data=B.data),W[oe]=j,J++}c.attributes=W,c.attributesNum=J,c.index=X}function M(){const C=c.newAttributes;for(let z=0,V=C.length;z<V;z++)C[z]=0}function w(C){L(C,0)}function L(C,z){const V=c.newAttributes,X=c.enabledAttributes,W=c.attributeDivisors;V[C]=1,X[C]===0&&(r.enableVertexAttribArray(C),X[C]=1),W[C]!==z&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,z),W[C]=z)}function R(){const C=c.newAttributes,z=c.enabledAttributes;for(let V=0,X=z.length;V<X;V++)z[V]!==C[V]&&(r.disableVertexAttribArray(V),z[V]=0)}function A(C,z,V,X,W,k,J){J===!0?r.vertexAttribIPointer(C,z,V,W,k):r.vertexAttribPointer(C,z,V,X,W,k)}function K(C,z,V,X){if(i.isWebGL2===!1&&(C.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const W=X.attributes,k=V.getAttributes(),J=z.defaultAttributeValues;for(const $ in k){const oe=k[$];if(oe.location>=0){let B=W[$];if(B===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(B=C.instanceColor)),B!==void 0){const j=B.normalized,he=B.itemSize,fe=t.get(B);if(fe===void 0)continue;const pe=fe.buffer,Ae=fe.type,Re=fe.bytesPerElement,Se=i.isWebGL2===!0&&(Ae===r.INT||Ae===r.UNSIGNED_INT||B.gpuType===Ma);if(B.isInterleavedBufferAttribute){const He=B.data,I=He.stride,ft=B.offset;if(He.isInstancedInterleavedBuffer){for(let _e=0;_e<oe.locationSize;_e++)L(oe.location+_e,He.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let _e=0;_e<oe.locationSize;_e++)w(oe.location+_e);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let _e=0;_e<oe.locationSize;_e++)A(oe.location+_e,he/oe.locationSize,Ae,j,I*Re,(ft+he/oe.locationSize*_e)*Re,Se)}else{if(B.isInstancedBufferAttribute){for(let He=0;He<oe.locationSize;He++)L(oe.location+He,B.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let He=0;He<oe.locationSize;He++)w(oe.location+He);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let He=0;He<oe.locationSize;He++)A(oe.location+He,he/oe.locationSize,Ae,j,he*Re,he/oe.locationSize*He*Re,Se)}}else if(J!==void 0){const j=J[$];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(oe.location,j);break;case 3:r.vertexAttrib3fv(oe.location,j);break;case 4:r.vertexAttrib4fv(oe.location,j);break;default:r.vertexAttrib1fv(oe.location,j)}}}}R()}function S(){G();for(const C in s){const z=s[C];for(const V in z){const X=z[V];for(const W in X)_(X[W].object),delete X[W];delete z[V]}delete s[C]}}function E(C){if(s[C.id]===void 0)return;const z=s[C.id];for(const V in z){const X=z[V];for(const W in X)_(X[W].object),delete X[W];delete z[V]}delete s[C.id]}function H(C){for(const z in s){const V=s[z];if(V[C.id]===void 0)continue;const X=V[C.id];for(const W in X)_(X[W].object),delete X[W];delete V[C.id]}}function G(){ae(),h=!0,c!==l&&(c=l,m(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:G,resetDefaultState:ae,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:M,enableAttribute:w,disableUnusedAttributes:R}}function qu(r,e,t,i){const n=i.isWebGL2;let a;function o(h){a=h}function s(h,p){r.drawArrays(a,h,p),t.update(p,a,1)}function l(h,p,d){if(d===0)return;let m,_;if(n)m=r,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](a,h,p,d),t.update(p,a,d)}function c(h,p,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],p[_]);else{m.multiDrawArraysWEBGL(a,h,0,p,0,d);let _=0;for(let v=0;v<d;v++)_+=p[v];t.update(_,a,1)}}this.setMode=o,this.render=s,this.renderInstances=l,this.renderMultiDraw=c}function Yu(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),f=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),u=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=d>0,w=o||e.has("OES_texture_float"),L=M&&w,R=o?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:L,maxSamples:R}}function Ku(r){const e=this;let t=null,i=0,n=!1,a=!1;const o=new xi,s=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||n;return n=d,i=p.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,m){const _=p.clippingPlanes,v=p.clipIntersection,f=p.clipShadows,u=r.get(p);if(!n||_===null||_.length===0||a&&!f)a?h(null):c();else{const T=a?0:i,M=T*4;let w=u.clippingState||null;l.value=w,w=h(_,d,M,m);for(let L=0;L!==M;++L)w[L]=t[L];u.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,_){const v=p!==null?p.length:0;let f=null;if(v!==0){if(f=l.value,_!==!0||f===null){const u=m+v*4,T=d.matrixWorldInverse;s.getNormalMatrix(T),(f===null||f.length<u)&&(f=new Float32Array(u));for(let M=0,w=m;M!==v;++M,w+=4)o.copy(p[M]).applyMatrix4(T,s),o.normal.toArray(f,w),f[w+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function Zu(r){let e=new WeakMap;function t(o,s){return s===cn?o.mapping=Ai:s===hn&&(o.mapping=wi),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===cn||s===hn)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lc(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Is extends Us{constructor(e=-1,t=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ki=4,Os=[.125,.215,.35,.446,.526,.582],Si=20,kn=new Is,Fs=new Fe;let Wn=null,Xn=0,jn=0;const yi=(1+Math.sqrt(5))/2,Zi=1/yi,Bs=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,yi,Zi),new U(0,yi,-Zi),new U(Zi,0,yi),new U(-Zi,0,yi),new U(yi,Zi,0),new U(-yi,Zi,0)];class zs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Wn=this._renderer.getRenderTarget(),Xn=this._renderer.getActiveCubeFace(),jn=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wn,Xn,jn),e.scissorTest=!1,Wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wn=this._renderer.getRenderTarget(),Xn=this._renderer.getActiveCubeFace(),jn=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yt,minFilter:yt,generateMipmaps:!1,type:tr,format:Pt,colorSpace:Vt,depthBuffer:!1},n=Hs(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hs(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ju(a)),this._blurMaterial=Qu(a,e,t)}return n}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,kn)}_sceneToCubeUV(e,t,i,n){const a=new bt(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Fs),l.toneMapping=$t,l.autoClear=!1;const p=new Es({name:"PMREM.Background",side:gt,depthWrite:!1,depthTest:!1}),d=new Ft(new Xi,p);let m=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(Fs),m=!0);for(let v=0;v<6;v++){const f=v%3;f===0?(a.up.set(0,o[v],0),a.lookAt(s[v],0,0)):f===1?(a.up.set(0,0,o[v]),a.lookAt(0,s[v],0)):(a.up.set(0,o[v],0),a.lookAt(0,0,s[v]));const u=this._cubeSize;Wr(n,f*u,v>2?u:0,u,u),l.setRenderTarget(n),m&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Ai||e.mapping===wi;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vs()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gs());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new Ft(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Wr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,kn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Bs[(n-1)%Bs.length];this._blur(e,n-1,n,a,o)}t.autoClear=i}_blur(e,t,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",a),this._halfBlur(o,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Ft(this._lodPlanes[n],c),d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Si-1),v=a/_,f=isFinite(a)?1+Math.floor(h*v):Si;f>Si&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Si}`);const u=[];let T=0;for(let A=0;A<Si;++A){const K=A/v,S=Math.exp(-K*K/2);u.push(S),A===0?T+=S:A<f&&(T+=2*S)}for(let A=0;A<u.length;A++)u[A]=u[A]/T;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=u,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const w=this._sizeLods[n],L=3*w*(n>M-Ki?n-M+Ki:0),R=4*(this._cubeSize-w);Wr(t,L,R,3*w,2*w),l.setRenderTarget(t),l.render(p,kn)}}function Ju(r){const e=[],t=[],i=[];let n=r;const a=r-Ki+1+Os.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);t.push(s);let l=1/s;o>r-Ki?l=Os[o-r+Ki-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,_=6,v=3,f=2,u=1,T=new Float32Array(v*_*m),M=new Float32Array(f*_*m),w=new Float32Array(u*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,K=R>2?0:-1,S=[A,K,0,A+2/3,K,0,A+2/3,K+1,0,A,K,0,A+2/3,K+1,0,A,K+1,0];T.set(S,v*_*R),M.set(d,f*_*R);const E=[R,R,R,R,R,R];w.set(E,u*_*R)}const L=new Kt;L.setAttribute("position",new Ot(T,v)),L.setAttribute("uv",new Ot(M,f)),L.setAttribute("faceIndex",new Ot(w,u)),e.push(L),n>Ki&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hs(r,e,t){const i=new fi(r,e,t);return i.texture.mapping=fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wr(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Qu(r,e,t){const i=new Float32Array(Si),n=new U(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Gs(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Vs(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function qn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $u(r){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===cn||l===hn,h=l===Ai||l===wi;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let p=e.get(s);return t===null&&(t=new zs(r)),p=c?t.fromEquirectangular(s,p):t.fromCubemap(s,p),e.set(s,p),p.texture}else{if(e.has(s))return e.get(s).texture;{const p=s.image;if(c&&p&&p.height>0||h&&p&&n(p)){t===null&&(t=new zs(r));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function n(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ed(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function td(r,e,t,i){const n={},a=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let f=0,u=v.length;f<u;f++)e.remove(v[f])}d.removeEventListener("dispose",o),delete n[d.id];const m=a.get(d);m&&(e.remove(m),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(p,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(p){const d=p.attributes;for(const _ in d)e.update(d[_],r.ARRAY_BUFFER);const m=p.morphAttributes;for(const _ in m){const v=m[_];for(let f=0,u=v.length;f<u;f++)e.update(v[f],r.ARRAY_BUFFER)}}function c(p){const d=[],m=p.index,_=p.attributes.position;let v=0;if(m!==null){const T=m.array;v=m.version;for(let M=0,w=T.length;M<w;M+=3){const L=T[M+0],R=T[M+1],A=T[M+2];d.push(L,R,R,A,A,L)}}else if(_!==void 0){const T=_.array;v=_.version;for(let M=0,w=T.length/3-1;M<w;M+=3){const L=M+0,R=M+1,A=M+2;d.push(L,R,R,A,A,L)}}else return;const f=new(as(d)?bs:Ts)(d,1);f.version=v;const u=a.get(p);u&&e.remove(u),a.set(p,f)}function h(p){const d=a.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return a.get(p)}return{get:s,update:l,getWireframeAttribute:h}}function id(r,e,t,i){const n=i.isWebGL2;let a;function o(m){a=m}let s,l;function c(m){s=m.type,l=m.bytesPerElement}function h(m,_){r.drawElements(a,_,s,m*l),t.update(_,a,1)}function p(m,_,v){if(v===0)return;let f,u;if(n)f=r,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](a,_,s,m*l,v),t.update(_,a,v)}function d(m,_,v){if(v===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<v;u++)this.render(m[u]/l,_[u]);else{f.multiDrawElementsWEBGL(a,_,0,s,m,0,v);let u=0;for(let T=0;T<v;T++)u+=_[T];t.update(u,a,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=p,this.renderMultiDraw=d}function rd(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=s*(a/3);break;case r.LINES:t.lines+=s*(a/2);break;case r.LINE_STRIP:t.lines+=s*(a-1);break;case r.LINE_LOOP:t.lines+=s*a;break;case r.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function nd(r,e){return r[0]-e[0]}function ad(r,e){return Math.abs(e[1])-Math.abs(r[1])}function sd(r,e,t){const i={},n=new Float32Array(8),a=new WeakMap,o=new nt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,p){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let v=a.get(h);if(v===void 0||v.count!==_){let T=function(){ae.dispose(),a.delete(h),h.removeEventListener("dispose",T)};v!==void 0&&v.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],K=h.morphAttributes.color||[];let S=0;M===!0&&(S=1),w===!0&&(S=2),L===!0&&(S=3);let E=h.attributes.position.count*S,H=1;E>e.maxTextureSize&&(H=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const G=new Float32Array(E*H*4*_),ae=new us(G,E,H,_);ae.type=ii,ae.needsUpdate=!0;const C=S*4;for(let z=0;z<_;z++){const V=R[z],X=A[z],W=K[z],k=E*H*4*z;for(let J=0;J<V.count;J++){const $=J*C;M===!0&&(o.fromBufferAttribute(V,J),G[k+$+0]=o.x,G[k+$+1]=o.y,G[k+$+2]=o.z,G[k+$+3]=0),w===!0&&(o.fromBufferAttribute(X,J),G[k+$+4]=o.x,G[k+$+5]=o.y,G[k+$+6]=o.z,G[k+$+7]=0),L===!0&&(o.fromBufferAttribute(W,J),G[k+$+8]=o.x,G[k+$+9]=o.y,G[k+$+10]=o.z,G[k+$+11]=W.itemSize===4?o.w:1)}}v={count:_,texture:ae,size:new Ge(E,H)},a.set(h,v),h.addEventListener("dispose",T)}let f=0;for(let T=0;T<d.length;T++)f+=d[T];const u=h.morphTargetsRelative?1:1-f;p.getUniforms().setValue(r,"morphTargetBaseInfluence",u),p.getUniforms().setValue(r,"morphTargetInfluences",d),p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==m){_=[];for(let M=0;M<m;M++)_[M]=[M,0];i[h.id]=_}for(let M=0;M<m;M++){const w=_[M];w[0]=M,w[1]=d[M]}_.sort(ad);for(let M=0;M<8;M++)M<m&&_[M][1]?(s[M][0]=_[M][0],s[M][1]=_[M][1]):(s[M][0]=Number.MAX_SAFE_INTEGER,s[M][1]=0);s.sort(nd);const v=h.morphAttributes.position,f=h.morphAttributes.normal;let u=0;for(let M=0;M<8;M++){const w=s[M],L=w[0],R=w[1];L!==Number.MAX_SAFE_INTEGER&&R?(v&&h.getAttribute("morphTarget"+M)!==v[L]&&h.setAttribute("morphTarget"+M,v[L]),f&&h.getAttribute("morphNormal"+M)!==f[L]&&h.setAttribute("morphNormal"+M,f[L]),n[M]=R,u+=R):(v&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),n[M]=0)}const T=h.morphTargetsRelative?1:1-u;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function od(r,e,t,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(n.get(p)!==c&&(e.update(p),n.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return p}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}class ks extends xt{constructor(e,t,i,n,a,o,s,l,c,h){if(h=h!==void 0?h:di,h!==di&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===di&&(i=ti),i===void 0&&h===Ri&&(i=ui),super(null,n,a,o,s,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ws=new xt,Xs=new ks(1,1);Xs.compareFunction=ts;const js=new us,qs=new Xl,Ys=new Ds,Ks=[],Zs=[],Js=new Float32Array(16),Qs=new Float32Array(9),$s=new Float32Array(4);function Ji(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=Ks[n];if(a===void 0&&(a=new Float32Array(n),Ks[n]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,r[o].toArray(a,s)}return a}function tt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function it(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Xr(r,e){let t=Zs[e];t===void 0&&(t=new Int32Array(e),Zs[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function ld(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function cd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2fv(this.addr,e),it(t,e)}}function hd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;r.uniform3fv(this.addr,e),it(t,e)}}function ud(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4fv(this.addr,e),it(t,e)}}function dd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(tt(t,i))return;$s.set(i),r.uniformMatrix2fv(this.addr,!1,$s),it(t,i)}}function pd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(tt(t,i))return;Qs.set(i),r.uniformMatrix3fv(this.addr,!1,Qs),it(t,i)}}function fd(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(tt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(tt(t,i))return;Js.set(i),r.uniformMatrix4fv(this.addr,!1,Js),it(t,i)}}function md(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function gd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2iv(this.addr,e),it(t,e)}}function _d(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3iv(this.addr,e),it(t,e)}}function vd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4iv(this.addr,e),it(t,e)}}function xd(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Md(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;r.uniform2uiv(this.addr,e),it(t,e)}}function Sd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;r.uniform3uiv(this.addr,e),it(t,e)}}function yd(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;r.uniform4uiv(this.addr,e),it(t,e)}}function Ed(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const a=this.type===r.SAMPLER_2D_SHADOW?Xs:Ws;t.setTexture2D(e||a,n)}function Td(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||qs,n)}function bd(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ys,n)}function Ad(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||js,n)}function wd(r){switch(r){case 5126:return ld;case 35664:return cd;case 35665:return hd;case 35666:return ud;case 35674:return dd;case 35675:return pd;case 35676:return fd;case 5124:case 35670:return md;case 35667:case 35671:return gd;case 35668:case 35672:return _d;case 35669:case 35673:return vd;case 5125:return xd;case 36294:return Md;case 36295:return Sd;case 36296:return yd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ed;case 35679:case 36299:case 36307:return Td;case 35680:case 36300:case 36308:case 36293:return bd;case 36289:case 36303:case 36311:case 36292:return Ad}}function Rd(r,e){r.uniform1fv(this.addr,e)}function Cd(r,e){const t=Ji(e,this.size,2);r.uniform2fv(this.addr,t)}function Pd(r,e){const t=Ji(e,this.size,3);r.uniform3fv(this.addr,t)}function Ld(r,e){const t=Ji(e,this.size,4);r.uniform4fv(this.addr,t)}function Ud(r,e){const t=Ji(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Dd(r,e){const t=Ji(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Nd(r,e){const t=Ji(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Id(r,e){r.uniform1iv(this.addr,e)}function Od(r,e){r.uniform2iv(this.addr,e)}function Fd(r,e){r.uniform3iv(this.addr,e)}function Bd(r,e){r.uniform4iv(this.addr,e)}function zd(r,e){r.uniform1uiv(this.addr,e)}function Hd(r,e){r.uniform2uiv(this.addr,e)}function Gd(r,e){r.uniform3uiv(this.addr,e)}function Vd(r,e){r.uniform4uiv(this.addr,e)}function kd(r,e,t){const i=this.cache,n=e.length,a=Xr(t,n);tt(i,a)||(r.uniform1iv(this.addr,a),it(i,a));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Ws,a[o])}function Wd(r,e,t){const i=this.cache,n=e.length,a=Xr(t,n);tt(i,a)||(r.uniform1iv(this.addr,a),it(i,a));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||qs,a[o])}function Xd(r,e,t){const i=this.cache,n=e.length,a=Xr(t,n);tt(i,a)||(r.uniform1iv(this.addr,a),it(i,a));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Ys,a[o])}function jd(r,e,t){const i=this.cache,n=e.length,a=Xr(t,n);tt(i,a)||(r.uniform1iv(this.addr,a),it(i,a));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||js,a[o])}function qd(r){switch(r){case 5126:return Rd;case 35664:return Cd;case 35665:return Pd;case 35666:return Ld;case 35674:return Ud;case 35675:return Dd;case 35676:return Nd;case 5124:case 35670:return Id;case 35667:case 35671:return Od;case 35668:case 35672:return Fd;case 35669:case 35673:return Bd;case 5125:return zd;case 36294:return Hd;case 36295:return Gd;case 36296:return Vd;case 35678:case 36198:case 36298:case 36306:case 35682:return kd;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return jd}}class Yd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wd(t.type)}}class Kd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qd(t.type)}}class Zd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,t[s.id],i)}}}const Yn=/(\w+)(\])?(\[|\.)?/g;function eo(r,e){r.seq.push(e),r.map[e.id]=e}function Jd(r,e,t){const i=r.name,n=i.length;for(Yn.lastIndex=0;;){const a=Yn.exec(i),o=Yn.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){eo(t,c===void 0?new Yd(s,r,e):new Kd(s,r,e));break}else{let h=t.map[s];h===void 0&&(h=new Zd(s),eo(t,h)),t=h}}}class jr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),o=e.getUniformLocation(t,a.name);Jd(a,o,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function to(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Qd=37297;let $d=0;function ep(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=n;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function tp(r){const e=ke.getPrimaries(ke.workingColorSpace),t=ke.getPrimaries(r);let i;switch(e===t?i="":e===vr&&t===_r?i="LinearDisplayP3ToLinearSRGB":e===_r&&t===vr&&(i="LinearSRGBToLinearDisplayP3"),r){case Vt:case mr:return[i,"LinearTransferOETF"];case ot:case xn:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function io(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+ep(r.getShaderSource(e),o)}else return n}function ip(r,e){const t=tp(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rp(r,e){let t;switch(e){case fl:t="Linear";break;case ml:t="Reinhard";break;case gl:t="OptimizedCineon";break;case _l:t="ACESFilmic";break;case xl:t="AgX";break;case vl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function np(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qi).join(`
`)}function ap(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qi).join(`
`)}function sp(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function op(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),o=a.name;let s=1;a.type===r.FLOAT_MAT2&&(s=2),a.type===r.FLOAT_MAT3&&(s=3),a.type===r.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:r.getAttribLocation(e,o),locationSize:s}}return t}function Qi(r){return r!==""}function ro(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function no(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kn(r){return r.replace(lp,hp)}const cp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hp(r,e){let t=we[e];if(t===void 0){const i=cp.get(e);if(i!==void 0)t=we[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kn(t)}const up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ao(r){return r.replace(up,dp)}function dp(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function so(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pp(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ua?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vo?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ht&&(e="SHADOWMAP_TYPE_VSM"),e}function fp(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ai:case wi:e="ENVMAP_TYPE_CUBE";break;case fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mp(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function gp(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case _a:e="ENVMAP_BLENDING_MULTIPLY";break;case dl:e="ENVMAP_BLENDING_MIX";break;case pl:e="ENVMAP_BLENDING_ADD";break}return e}function _p(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function vp(r,e,t,i){const n=r.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=pp(t),c=fp(t),h=mp(t),p=gp(t),d=_p(t),m=t.isWebGL2?"":np(t),_=ap(t),v=sp(a),f=n.createProgram();let u,T,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qi).join(`
`),u.length>0&&(u+=`
`),T=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Qi).join(`
`),T.length>0&&(T+=`
`)):(u=[so(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),T=[m,so(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$t?"#define TONE_MAPPING":"",t.toneMapping!==$t?we.tonemapping_pars_fragment:"",t.toneMapping!==$t?rp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.colorspace_pars_fragment,ip("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),o=Kn(o),o=ro(o,t),o=no(o,t),s=Kn(s),s=ro(s,t),s=no(s,t),o=ao(o),s=ao(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,T=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const w=M+u+o,L=M+T+s,R=to(n,n.VERTEX_SHADER,w),A=to(n,n.FRAGMENT_SHADER,L);n.attachShader(f,R),n.attachShader(f,A),t.index0AttributeName!==void 0?n.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(f,0,"position"),n.linkProgram(f);function K(G){if(r.debug.checkShaderErrors){const ae=n.getProgramInfoLog(f).trim(),C=n.getShaderInfoLog(R).trim(),z=n.getShaderInfoLog(A).trim();let V=!0,X=!0;if(n.getProgramParameter(f,n.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,f,R,A);else{const W=io(n,R,"vertex"),k=io(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(f,n.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+W+`
`+k)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(C===""||z==="")&&(X=!1);X&&(G.diagnostics={runnable:V,programLog:ae,vertexShader:{log:C,prefix:u},fragmentShader:{log:z,prefix:T}})}n.deleteShader(R),n.deleteShader(A),S=new jr(n,f),E=op(n,f)}let S;this.getUniforms=function(){return S===void 0&&K(this),S};let E;this.getAttributes=function(){return E===void 0&&K(this),E};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=n.getProgramParameter(f,Qd)),H},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$d++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=A,this}let xp=0;class Mp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sp(e),t.set(e,i)),i}}class Sp{constructor(e){this.id=xp++,this.code=e,this.usedTimes=0}}function yp(r,e,t,i,n,a,o){const s=new gs,l=new Mp,c=[],h=n.isWebGL2,p=n.logarithmicDepthBuffer,d=n.vertexTextures;let m=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function f(S,E,H,G,ae){const C=G.fog,z=ae.geometry,V=S.isMeshStandardMaterial?G.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),W=X&&X.mapping===fr?X.image.height:null,k=_[S.type];S.precision!==null&&(m=n.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$=J!==void 0?J.length:0;let oe=0;z.morphAttributes.position!==void 0&&(oe=1),z.morphAttributes.normal!==void 0&&(oe=2),z.morphAttributes.color!==void 0&&(oe=3);let B,j,he,fe;if(k){const et=Bt[k];B=et.vertexShader,j=et.fragmentShader}else B=S.vertexShader,j=S.fragmentShader,l.update(S),he=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const pe=r.getRenderTarget(),Ae=ae.isInstancedMesh===!0,Re=ae.isBatchedMesh===!0,Se=!!S.map,He=!!S.matcap,I=!!X,ft=!!S.aoMap,_e=!!S.lightMap,Te=!!S.bumpMap,ue=!!S.normalMap,Ke=!!S.displacementMap,Pe=!!S.emissiveMap,y=!!S.metalnessMap,g=!!S.roughnessMap,N=S.anisotropy>0,Q=S.clearcoat>0,Y=S.iridescence>0,Z=S.sheen>0,de=S.transmission>0,ne=N&&!!S.anisotropyMap,le=Q&&!!S.clearcoatMap,xe=Q&&!!S.clearcoatNormalMap,Le=Q&&!!S.clearcoatRoughnessMap,q=Y&&!!S.iridescenceMap,We=Y&&!!S.iridescenceThicknessMap,Be=Z&&!!S.sheenColorMap,Ee=Z&&!!S.sheenRoughnessMap,ge=!!S.specularMap,ce=!!S.specularColorMap,Ce=!!S.specularIntensityMap,Ve=de&&!!S.transmissionMap,Ze=de&&!!S.thicknessMap,Ie=!!S.gradientMap,te=!!S.alphaMap,b=S.alphaTest>0,ie=!!S.alphaHash,se=!!S.extensions,be=!!z.attributes.uv1,ve=!!z.attributes.uv2,Xe=!!z.attributes.uv3;let je=$t;return S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(je=r.toneMapping),{isWebGL2:h,shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:B,fragmentShader:j,defines:S.defines,customVertexShaderID:he,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Re,instancing:Ae,instancingColor:Ae&&ae.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pe===null?r.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Vt,map:Se,matcap:He,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:W,aoMap:ft,lightMap:_e,bumpMap:Te,normalMap:ue,displacementMap:d&&Ke,emissiveMap:Pe,normalMapObjectSpace:ue&&S.normalMapType===Ll,normalMapTangentSpace:ue&&S.normalMapType===$a,metalnessMap:y,roughnessMap:g,anisotropy:N,anisotropyMap:ne,clearcoat:Q,clearcoatMap:le,clearcoatNormalMap:xe,clearcoatRoughnessMap:Le,iridescence:Y,iridescenceMap:q,iridescenceThicknessMap:We,sheen:Z,sheenColorMap:Be,sheenRoughnessMap:Ee,specularMap:ge,specularColorMap:ce,specularIntensityMap:Ce,transmission:de,transmissionMap:Ve,thicknessMap:Ze,gradientMap:Ie,opaque:S.transparent===!1&&S.blending===bi,alphaMap:te,alphaTest:b,alphaHash:ie,combine:S.combine,mapUv:Se&&v(S.map.channel),aoMapUv:ft&&v(S.aoMap.channel),lightMapUv:_e&&v(S.lightMap.channel),bumpMapUv:Te&&v(S.bumpMap.channel),normalMapUv:ue&&v(S.normalMap.channel),displacementMapUv:Ke&&v(S.displacementMap.channel),emissiveMapUv:Pe&&v(S.emissiveMap.channel),metalnessMapUv:y&&v(S.metalnessMap.channel),roughnessMapUv:g&&v(S.roughnessMap.channel),anisotropyMapUv:ne&&v(S.anisotropyMap.channel),clearcoatMapUv:le&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:xe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&v(S.sheenRoughnessMap.channel),specularMapUv:ge&&v(S.specularMap.channel),specularColorMapUv:ce&&v(S.specularColorMap.channel),specularIntensityMapUv:Ce&&v(S.specularIntensityMap.channel),transmissionMapUv:Ve&&v(S.transmissionMap.channel),thicknessMapUv:Ze&&v(S.thicknessMap.channel),alphaMapUv:te&&v(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ue||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:ve,vertexUv3s:Xe,pointsUvs:ae.isPoints===!0&&!!z.attributes.uv&&(Se||te),fog:!!C,useFog:S.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:ae.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:je,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&ke.getTransfer(S.map.colorSpace)===Ye,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Gt,flipSided:S.side===gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:se&&S.extensions.derivatives===!0,extensionFragDepth:se&&S.extensions.fragDepth===!0,extensionDrawBuffers:se&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const H in S.defines)E.push(H),E.push(S.defines[H]);return S.isRawShaderMaterial===!1&&(T(E,S),M(E,S),E.push(r.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function T(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function M(S,E){s.disableAll(),E.isWebGL2&&s.enable(0),E.supportsVertexTextures&&s.enable(1),E.instancing&&s.enable(2),E.instancingColor&&s.enable(3),E.matcap&&s.enable(4),E.envMap&&s.enable(5),E.normalMapObjectSpace&&s.enable(6),E.normalMapTangentSpace&&s.enable(7),E.clearcoat&&s.enable(8),E.iridescence&&s.enable(9),E.alphaTest&&s.enable(10),E.vertexColors&&s.enable(11),E.vertexAlphas&&s.enable(12),E.vertexUv1s&&s.enable(13),E.vertexUv2s&&s.enable(14),E.vertexUv3s&&s.enable(15),E.vertexTangents&&s.enable(16),E.anisotropy&&s.enable(17),E.alphaHash&&s.enable(18),E.batching&&s.enable(19),S.push(s.mask),s.disableAll(),E.fog&&s.enable(0),E.useFog&&s.enable(1),E.flatShading&&s.enable(2),E.logarithmicDepthBuffer&&s.enable(3),E.skinning&&s.enable(4),E.morphTargets&&s.enable(5),E.morphNormals&&s.enable(6),E.morphColors&&s.enable(7),E.premultipliedAlpha&&s.enable(8),E.shadowMapEnabled&&s.enable(9),E.useLegacyLights&&s.enable(10),E.doubleSided&&s.enable(11),E.flipSided&&s.enable(12),E.useDepthPacking&&s.enable(13),E.dithering&&s.enable(14),E.transmission&&s.enable(15),E.sheen&&s.enable(16),E.opaque&&s.enable(17),E.pointsUvs&&s.enable(18),E.decodeVideoTexture&&s.enable(19),S.push(s.mask)}function w(S){const E=_[S.type];let H;if(E){const G=Bt[E];H=nc.clone(G.uniforms)}else H=S.uniforms;return H}function L(S,E){let H;for(let G=0,ae=c.length;G<ae;G++){const C=c[G];if(C.cacheKey===E){H=C,++H.usedTimes;break}}return H===void 0&&(H=new vp(r,E,S,a),c.push(H)),H}function R(S){if(--S.usedTimes===0){const E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function A(S){l.remove(S)}function K(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:w,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:c,dispose:K}}function Ep(){let r=new WeakMap;function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function t(a){r.delete(a)}function i(a,o,s){r.get(a)[o]=s}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function Tp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function oo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function lo(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function o(p,d,m,_,v,f){let u=r[e];return u===void 0?(u={id:p.id,object:p,geometry:d,material:m,groupOrder:_,renderOrder:p.renderOrder,z:v,group:f},r[e]=u):(u.id=p.id,u.object=p,u.geometry=d,u.material=m,u.groupOrder=_,u.renderOrder=p.renderOrder,u.z=v,u.group=f),e++,u}function s(p,d,m,_,v,f){const u=o(p,d,m,_,v,f);m.transmission>0?i.push(u):m.transparent===!0?n.push(u):t.push(u)}function l(p,d,m,_,v,f){const u=o(p,d,m,_,v,f);m.transmission>0?i.unshift(u):m.transparent===!0?n.unshift(u):t.unshift(u)}function c(p,d){t.length>1&&t.sort(p||Tp),i.length>1&&i.sort(d||oo),n.length>1&&n.sort(d||oo)}function h(){for(let p=e,d=r.length;p<d;p++){const m=r[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:s,unshift:l,finish:h,sort:c}}function bp(){let r=new WeakMap;function e(i,n){const a=r.get(i);let o;return a===void 0?(o=new lo,r.set(i,[o])):n>=a.length?(o=new lo,a.push(o)):o=a[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ap(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function wp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Rp=0;function Cp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Pp(r,e){const t=new Ap,i=wp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);const a=new U,o=new Qe,s=new Qe;function l(h,p){let d=0,m=0,_=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let v=0,f=0,u=0,T=0,M=0,w=0,L=0,R=0,A=0,K=0,S=0;h.sort(Cp);const E=p===!0?Math.PI:1;for(let G=0,ae=h.length;G<ae;G++){const C=h[G],z=C.color,V=C.intensity,X=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=z.r*V*E,m+=z.g*V*E,_+=z.b*V*E;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],V);S++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){const J=C.shadow,$=i.get(C);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,n.directionalShadow[v]=$,n.directionalShadowMap[v]=W,n.directionalShadowMatrix[v]=C.shadow.matrix,w++}n.directional[v]=k,v++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(z).multiplyScalar(V*E),k.distance=X,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[u]=k;const J=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,J.updateMatrices(C),C.castShadow&&K++),n.spotLightMatrix[u]=J.matrix,C.castShadow){const $=i.get(C);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,n.spotShadow[u]=$,n.spotShadowMap[u]=W,R++}u++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(z).multiplyScalar(V),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[T]=k,T++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity*E),k.distance=C.distance,k.decay=C.decay,C.castShadow){const J=C.shadow,$=i.get(C);$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,$.shadowCameraNear=J.camera.near,$.shadowCameraFar=J.camera.far,n.pointShadow[f]=$,n.pointShadowMap[f]=W,n.pointShadowMatrix[f]=C.shadow.matrix,L++}n.point[f]=k,f++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(V*E),k.groundColor.copy(C.groundColor).multiplyScalar(V*E),n.hemi[M]=k,M++}}T>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ee.LTC_FLOAT_1,n.rectAreaLTC2=ee.LTC_FLOAT_2):(n.rectAreaLTC1=ee.LTC_HALF_1,n.rectAreaLTC2=ee.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ee.LTC_FLOAT_1,n.rectAreaLTC2=ee.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=ee.LTC_HALF_1,n.rectAreaLTC2=ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=_;const H=n.hash;(H.directionalLength!==v||H.pointLength!==f||H.spotLength!==u||H.rectAreaLength!==T||H.hemiLength!==M||H.numDirectionalShadows!==w||H.numPointShadows!==L||H.numSpotShadows!==R||H.numSpotMaps!==A||H.numLightProbes!==S)&&(n.directional.length=v,n.spot.length=u,n.rectArea.length=T,n.point.length=f,n.hemi.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=R+A-K,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=K,n.numLightProbes=S,H.directionalLength=v,H.pointLength=f,H.spotLength=u,H.rectAreaLength=T,H.hemiLength=M,H.numDirectionalShadows=w,H.numPointShadows=L,H.numSpotShadows=R,H.numSpotMaps=A,H.numLightProbes=S,n.version=Rp++)}function c(h,p){let d=0,m=0,_=0,v=0,f=0;const u=p.matrixWorldInverse;for(let T=0,M=h.length;T<M;T++){const w=h[T];if(w.isDirectionalLight){const L=n.directional[d];L.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(u),d++}else if(w.isSpotLight){const L=n.spot[_];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),L.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(a),L.direction.transformDirection(u),_++}else if(w.isRectAreaLight){const L=n.rectArea[v];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),s.identity(),o.copy(w.matrixWorld),o.premultiply(u),s.extractRotation(o),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(s),L.halfHeight.applyMatrix4(s),v++}else if(w.isPointLight){const L=n.point[m];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(u),m++}else if(w.isHemisphereLight){const L=n.hemi[f];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:n}}function co(r,e){const t=new Pp(r,e),i=[],n=[];function a(){i.length=0,n.length=0}function o(h){i.push(h)}function s(h){n.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Lp(r,e){let t=new WeakMap;function i(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new co(r,e),t.set(a,[l])):o>=s.length?(l=new co(r,e),s.push(l)):l=s[o],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class Up extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dp extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Np=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ip=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Op(r,e,t){let i=new Vn;const n=new Ge,a=new Ge,o=new nt,s=new Up({depthPacking:Pl}),l=new Dp,c={},h=t.maxTextureSize,p={[Jt]:gt,[gt]:Jt,[Gt]:Gt},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Np,fragmentShader:Ip}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Kt;_.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ft(_,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ua;let u=this.type;this.render=function(R,A,K){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;const S=r.getRenderTarget(),E=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),G=r.state;G.setBlending(Qt),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ae=u!==Ht&&this.type===Ht,C=u===Ht&&this.type!==Ht;for(let z=0,V=R.length;z<V;z++){const X=R[z],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const k=W.getFrameExtents();if(n.multiply(k),a.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/k.x),n.x=a.x*k.x,W.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/k.y),n.y=a.y*k.y,W.mapSize.y=a.y)),W.map===null||ae===!0||C===!0){const $=this.type!==Ht?{minFilter:dt,magFilter:dt}:{};W.map!==null&&W.map.dispose(),W.map=new fi(n.x,n.y,$),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const J=W.getViewportCount();for(let $=0;$<J;$++){const oe=W.getViewport($);o.set(a.x*oe.x,a.y*oe.y,a.x*oe.z,a.y*oe.w),G.viewport(o),W.updateMatrices(X,$),i=W.getFrustum(),w(A,K,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Ht&&T(W,K),W.needsUpdate=!1}u=this.type,f.needsUpdate=!1,r.setRenderTarget(S,E,H)};function T(R,A){const K=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fi(n.x,n.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(A,null,K,d,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(A,null,K,m,v,null)}function M(R,A,K,S){let E=null;const H=K.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)E=H;else if(E=K.isPointLight===!0?l:s,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=E.uuid,ae=A.uuid;let C=c[G];C===void 0&&(C={},c[G]=C);let z=C[ae];z===void 0&&(z=E.clone(),C[ae]=z,A.addEventListener("dispose",L)),E=z}if(E.visible=A.visible,E.wireframe=A.wireframe,S===Ht?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:p[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,K.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=r.properties.get(E);G.light=K}return E}function w(R,A,K,S,E){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Ht)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld);const G=e.update(R),ae=R.material;if(Array.isArray(ae)){const C=G.groups;for(let z=0,V=C.length;z<V;z++){const X=C[z],W=ae[X.materialIndex];if(W&&W.visible){const k=M(R,W,S,E);R.onBeforeShadow(r,R,A,K,G,k,X),r.renderBufferDirect(K,null,G,k,R,X),R.onAfterShadow(r,R,A,K,G,k,X)}}}else if(ae.visible){const C=M(R,ae,S,E);R.onBeforeShadow(r,R,A,K,G,C,null),r.renderBufferDirect(K,null,G,C,R,null),R.onAfterShadow(r,R,A,K,G,C,null)}}const H=R.children;for(let G=0,ae=H.length;G<ae;G++)w(H[G],A,K,S,E)}function L(R){R.target.removeEventListener("dispose",L);for(const A in c){const K=c[A],S=R.target.uuid;S in K&&(K[S].dispose(),delete K[S])}}}function Fp(r,e,t){const i=t.isWebGL2;function n(){let b=!1;const ie=new nt;let se=null;const be=new nt(0,0,0,0);return{setMask:function(ve){se!==ve&&!b&&(r.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){b=ve},setClear:function(ve,Xe,je,et,At){At===!0&&(ve*=et,Xe*=et,je*=et),ie.set(ve,Xe,je,et),be.equals(ie)===!1&&(r.clearColor(ve,Xe,je,et),be.copy(ie))},reset:function(){b=!1,se=null,be.set(-1,0,0,0)}}}function a(){let b=!1,ie=null,se=null,be=null;return{setTest:function(ve){ve?Re(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(ve){ie!==ve&&!b&&(r.depthMask(ve),ie=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case al:r.depthFunc(r.NEVER);break;case sl:r.depthFunc(r.ALWAYS);break;case ol:r.depthFunc(r.LESS);break;case pr:r.depthFunc(r.LEQUAL);break;case ll:r.depthFunc(r.EQUAL);break;case cl:r.depthFunc(r.GEQUAL);break;case hl:r.depthFunc(r.GREATER);break;case ul:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}se=ve}},setLocked:function(ve){b=ve},setClear:function(ve){be!==ve&&(r.clearDepth(ve),be=ve)},reset:function(){b=!1,ie=null,se=null,be=null}}}function o(){let b=!1,ie=null,se=null,be=null,ve=null,Xe=null,je=null,et=null,At=null;return{setTest:function(qe){b||(qe?Re(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(qe){ie!==qe&&!b&&(r.stencilMask(qe),ie=qe)},setFunc:function(qe,mt,zt){(se!==qe||be!==mt||ve!==zt)&&(r.stencilFunc(qe,mt,zt),se=qe,be=mt,ve=zt)},setOp:function(qe,mt,zt){(Xe!==qe||je!==mt||et!==zt)&&(r.stencilOp(qe,mt,zt),Xe=qe,je=mt,et=zt)},setLocked:function(qe){b=qe},setClear:function(qe){At!==qe&&(r.clearStencil(qe),At=qe)},reset:function(){b=!1,ie=null,se=null,be=null,ve=null,Xe=null,je=null,et=null,At=null}}}const s=new n,l=new a,c=new o,h=new WeakMap,p=new WeakMap;let d={},m={},_=new WeakMap,v=[],f=null,u=!1,T=null,M=null,w=null,L=null,R=null,A=null,K=null,S=new Fe(0,0,0),E=0,H=!1,G=null,ae=null,C=null,z=null,V=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=k>=2);let $=null,oe={};const B=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),he=new nt().fromArray(B),fe=new nt().fromArray(j);function pe(b,ie,se,be){const ve=new Uint8Array(4),Xe=r.createTexture();r.bindTexture(b,Xe),r.texParameteri(b,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(b,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<se;je++)i&&(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)?r.texImage3D(ie,0,r.RGBA,1,1,be,0,r.RGBA,r.UNSIGNED_BYTE,ve):r.texImage2D(ie+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ve);return Xe}const Ae={};Ae[r.TEXTURE_2D]=pe(r.TEXTURE_2D,r.TEXTURE_2D,1),Ae[r.TEXTURE_CUBE_MAP]=pe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ae[r.TEXTURE_2D_ARRAY]=pe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ae[r.TEXTURE_3D]=pe(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(r.DEPTH_TEST),l.setFunc(pr),Pe(!1),y(ha),Re(r.CULL_FACE),ue(Qt);function Re(b){d[b]!==!0&&(r.enable(b),d[b]=!0)}function Se(b){d[b]!==!1&&(r.disable(b),d[b]=!1)}function He(b,ie){return m[b]!==ie?(r.bindFramebuffer(b,ie),m[b]=ie,i&&(b===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ie),b===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ie)),!0):!1}function I(b,ie){let se=v,be=!1;if(b)if(se=_.get(ie),se===void 0&&(se=[],_.set(ie,se)),b.isWebGLMultipleRenderTargets){const ve=b.texture;if(se.length!==ve.length||se[0]!==r.COLOR_ATTACHMENT0){for(let Xe=0,je=ve.length;Xe<je;Xe++)se[Xe]=r.COLOR_ATTACHMENT0+Xe;se.length=ve.length,be=!0}}else se[0]!==r.COLOR_ATTACHMENT0&&(se[0]=r.COLOR_ATTACHMENT0,be=!0);else se[0]!==r.BACK&&(se[0]=r.BACK,be=!0);be&&(t.isWebGL2?r.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function ft(b){return f!==b?(r.useProgram(b),f=b,!0):!1}const _e={[ci]:r.FUNC_ADD,[Wo]:r.FUNC_SUBTRACT,[Xo]:r.FUNC_REVERSE_SUBTRACT};if(i)_e[ma]=r.MIN,_e[ga]=r.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(_e[ma]=b.MIN_EXT,_e[ga]=b.MAX_EXT)}const Te={[jo]:r.ZERO,[qo]:r.ONE,[Yo]:r.SRC_COLOR,[on]:r.SRC_ALPHA,[el]:r.SRC_ALPHA_SATURATE,[Qo]:r.DST_COLOR,[Zo]:r.DST_ALPHA,[Ko]:r.ONE_MINUS_SRC_COLOR,[ln]:r.ONE_MINUS_SRC_ALPHA,[$o]:r.ONE_MINUS_DST_COLOR,[Jo]:r.ONE_MINUS_DST_ALPHA,[tl]:r.CONSTANT_COLOR,[il]:r.ONE_MINUS_CONSTANT_COLOR,[rl]:r.CONSTANT_ALPHA,[nl]:r.ONE_MINUS_CONSTANT_ALPHA};function ue(b,ie,se,be,ve,Xe,je,et,At,qe){if(b===Qt){u===!0&&(Se(r.BLEND),u=!1);return}if(u===!1&&(Re(r.BLEND),u=!0),b!==ko){if(b!==T||qe!==H){if((M!==ci||R!==ci)&&(r.blendEquation(r.FUNC_ADD),M=ci,R=ci),qe)switch(b){case bi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case da:r.blendFunc(r.ONE,r.ONE);break;case pa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fa:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case bi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case da:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case pa:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fa:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}w=null,L=null,A=null,K=null,S.set(0,0,0),E=0,T=b,H=qe}return}ve=ve||ie,Xe=Xe||se,je=je||be,(ie!==M||ve!==R)&&(r.blendEquationSeparate(_e[ie],_e[ve]),M=ie,R=ve),(se!==w||be!==L||Xe!==A||je!==K)&&(r.blendFuncSeparate(Te[se],Te[be],Te[Xe],Te[je]),w=se,L=be,A=Xe,K=je),(et.equals(S)===!1||At!==E)&&(r.blendColor(et.r,et.g,et.b,At),S.copy(et),E=At),T=b,H=!1}function Ke(b,ie){b.side===Gt?Se(r.CULL_FACE):Re(r.CULL_FACE);let se=b.side===gt;ie&&(se=!se),Pe(se),b.blending===bi&&b.transparent===!1?ue(Qt):ue(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),s.setMask(b.colorWrite);const be=b.stencilWrite;c.setTest(be),be&&(c.setMask(b.stencilWriteMask),c.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),c.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),N(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Re(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(b){G!==b&&(b?r.frontFace(r.CW):r.frontFace(r.CCW),G=b)}function y(b){b!==Ho?(Re(r.CULL_FACE),b!==ae&&(b===ha?r.cullFace(r.BACK):b===Go?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),ae=b}function g(b){b!==C&&(W&&r.lineWidth(b),C=b)}function N(b,ie,se){b?(Re(r.POLYGON_OFFSET_FILL),(z!==ie||V!==se)&&(r.polygonOffset(ie,se),z=ie,V=se)):Se(r.POLYGON_OFFSET_FILL)}function Q(b){b?Re(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function Y(b){b===void 0&&(b=r.TEXTURE0+X-1),$!==b&&(r.activeTexture(b),$=b)}function Z(b,ie,se){se===void 0&&($===null?se=r.TEXTURE0+X-1:se=$);let be=oe[se];be===void 0&&(be={type:void 0,texture:void 0},oe[se]=be),(be.type!==b||be.texture!==ie)&&($!==se&&(r.activeTexture(se),$=se),r.bindTexture(b,ie||Ae[b]),be.type=b,be.texture=ie)}function de(){const b=oe[$];b!==void 0&&b.type!==void 0&&(r.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ne(){try{r.compressedTexImage2D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function le(){try{r.compressedTexImage3D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function xe(){try{r.texSubImage2D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Le(){try{r.texSubImage3D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function q(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function We(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Be(){try{r.texStorage2D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ee(){try{r.texStorage3D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ge(){try{r.texImage2D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ce(){try{r.texImage3D.apply(r,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(b){he.equals(b)===!1&&(r.scissor(b.x,b.y,b.z,b.w),he.copy(b))}function Ve(b){fe.equals(b)===!1&&(r.viewport(b.x,b.y,b.z,b.w),fe.copy(b))}function Ze(b,ie){let se=p.get(ie);se===void 0&&(se=new WeakMap,p.set(ie,se));let be=se.get(b);be===void 0&&(be=r.getUniformBlockIndex(ie,b.name),se.set(b,be))}function Ie(b,ie){const se=p.get(ie).get(b);h.get(ie)!==se&&(r.uniformBlockBinding(ie,se,b.__bindingPointIndex),h.set(ie,se))}function te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},$=null,oe={},m={},_=new WeakMap,v=[],f=null,u=!1,T=null,M=null,w=null,L=null,R=null,A=null,K=null,S=new Fe(0,0,0),E=0,H=!1,G=null,ae=null,C=null,z=null,V=null,he.set(0,0,r.canvas.width,r.canvas.height),fe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Re,disable:Se,bindFramebuffer:He,drawBuffers:I,useProgram:ft,setBlending:ue,setMaterial:Ke,setFlipSided:Pe,setCullFace:y,setLineWidth:g,setPolygonOffset:N,setScissorTest:Q,activeTexture:Y,bindTexture:Z,unbindTexture:de,compressedTexImage2D:ne,compressedTexImage3D:le,texImage2D:ge,texImage3D:ce,updateUBOMapping:Ze,uniformBlockBinding:Ie,texStorage2D:Be,texStorage3D:Ee,texSubImage2D:xe,texSubImage3D:Le,compressedTexSubImage2D:q,compressedTexSubImage3D:We,scissor:Ce,viewport:Ve,reset:te}}function Bp(r,e,t,i,n,a,o){const s=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let p;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return m?new OffscreenCanvas(y,g):nr("canvas")}function v(y,g,N,Q){let Y=1;if((y.width>Q||y.height>Q)&&(Y=Q/Math.max(y.width,y.height)),Y<1||g===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const Z=g?Tn:Math.floor,de=Z(Y*y.width),ne=Z(Y*y.height);p===void 0&&(p=_(de,ne));const le=N?_(de,ne):p;return le.width=de,le.height=ne,le.getContext("2d").drawImage(y,0,0,de,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+de+"x"+ne+")."),le}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function f(y){return ns(y.width)&&ns(y.height)}function u(y){return s?!1:y.wrapS!==Ct||y.wrapT!==Ct||y.minFilter!==dt&&y.minFilter!==yt}function T(y,g){return y.generateMipmaps&&g&&y.minFilter!==dt&&y.minFilter!==yt}function M(y){r.generateMipmap(y)}function w(y,g,N,Q,Y=!1){if(s===!1)return g;if(y!==null){if(r[y]!==void 0)return r[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Z=g;if(g===r.RED&&(N===r.FLOAT&&(Z=r.R32F),N===r.HALF_FLOAT&&(Z=r.R16F),N===r.UNSIGNED_BYTE&&(Z=r.R8)),g===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(Z=r.R8UI),N===r.UNSIGNED_SHORT&&(Z=r.R16UI),N===r.UNSIGNED_INT&&(Z=r.R32UI),N===r.BYTE&&(Z=r.R8I),N===r.SHORT&&(Z=r.R16I),N===r.INT&&(Z=r.R32I)),g===r.RG&&(N===r.FLOAT&&(Z=r.RG32F),N===r.HALF_FLOAT&&(Z=r.RG16F),N===r.UNSIGNED_BYTE&&(Z=r.RG8)),g===r.RGBA){const de=Y?gr:ke.getTransfer(Q);N===r.FLOAT&&(Z=r.RGBA32F),N===r.HALF_FLOAT&&(Z=r.RGBA16F),N===r.UNSIGNED_BYTE&&(Z=de===Ye?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function L(y,g,N){return T(y,N)===!0||y.isFramebufferTexture&&y.minFilter!==dt&&y.minFilter!==yt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function R(y){return y===dt||y===xa||y===dn?r.NEAREST:r.LINEAR}function A(y){const g=y.target;g.removeEventListener("dispose",A),S(g),g.isVideoTexture&&h.delete(g)}function K(y){const g=y.target;g.removeEventListener("dispose",K),H(g)}function S(y){const g=i.get(y);if(g.__webglInit===void 0)return;const N=y.source,Q=d.get(N);if(Q){const Y=Q[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(y),Object.keys(Q).length===0&&d.delete(N)}i.remove(y)}function E(y){const g=i.get(y);r.deleteTexture(g.__webglTexture);const N=y.source,Q=d.get(N);delete Q[g.__cacheKey],o.memory.textures--}function H(y){const g=y.texture,N=i.get(y),Q=i.get(g);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(N.__webglFramebuffer[Y]))for(let Z=0;Z<N.__webglFramebuffer[Y].length;Z++)r.deleteFramebuffer(N.__webglFramebuffer[Y][Z]);else r.deleteFramebuffer(N.__webglFramebuffer[Y]);N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[Y])}else{if(Array.isArray(N.__webglFramebuffer))for(let Y=0;Y<N.__webglFramebuffer.length;Y++)r.deleteFramebuffer(N.__webglFramebuffer[Y]);else r.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Y=0;Y<N.__webglColorRenderbuffer.length;Y++)N.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[Y]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Y=0,Z=g.length;Y<Z;Y++){const de=i.get(g[Y]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(g[Y])}i.remove(g),i.remove(y)}let G=0;function ae(){G=0}function C(){const y=G;return y>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+n.maxTextures),G+=1,y}function z(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function V(y,g){const N=i.get(y);if(y.isVideoTexture&&Ke(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const Q=y.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(N,y,g);return}}t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+g)}function X(y,g){const N=i.get(y);if(y.version>0&&N.__version!==y.version){he(N,y,g);return}t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+g)}function W(y,g){const N=i.get(y);if(y.version>0&&N.__version!==y.version){he(N,y,g);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+g)}function k(y,g){const N=i.get(y);if(y.version>0&&N.__version!==y.version){fe(N,y,g);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+g)}const J={[hi]:r.REPEAT,[Ct]:r.CLAMP_TO_EDGE,[un]:r.MIRRORED_REPEAT},$={[dt]:r.NEAREST,[xa]:r.NEAREST_MIPMAP_NEAREST,[dn]:r.NEAREST_MIPMAP_LINEAR,[yt]:r.LINEAR,[Ml]:r.LINEAR_MIPMAP_NEAREST,[er]:r.LINEAR_MIPMAP_LINEAR},oe={[Ul]:r.NEVER,[Bl]:r.ALWAYS,[Dl]:r.LESS,[ts]:r.LEQUAL,[Nl]:r.EQUAL,[Fl]:r.GEQUAL,[Il]:r.GREATER,[Ol]:r.NOTEQUAL};function B(y,g,N){if(N?(r.texParameteri(y,r.TEXTURE_WRAP_S,J[g.wrapS]),r.texParameteri(y,r.TEXTURE_WRAP_T,J[g.wrapT]),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,J[g.wrapR]),r.texParameteri(y,r.TEXTURE_MAG_FILTER,$[g.magFilter]),r.texParameteri(y,r.TEXTURE_MIN_FILTER,$[g.minFilter])):(r.texParameteri(y,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(y,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY)&&r.texParameteri(y,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(g.wrapS!==Ct||g.wrapT!==Ct)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(y,r.TEXTURE_MAG_FILTER,R(g.magFilter)),r.texParameteri(y,r.TEXTURE_MIN_FILTER,R(g.minFilter)),g.minFilter!==dt&&g.minFilter!==yt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(r.texParameteri(y,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(y,r.TEXTURE_COMPARE_FUNC,oe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===dt||g.minFilter!==dn&&g.minFilter!==er||g.type===ii&&e.has("OES_texture_float_linear")===!1||s===!1&&g.type===tr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(r.texParameterf(y,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,n.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function j(y,g){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",A));const Q=g.source;let Y=d.get(Q);Y===void 0&&(Y={},d.set(Q,Y));const Z=z(g);if(Z!==y.__cacheKey){Y[Z]===void 0&&(Y[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,N=!0),Y[Z].usedTimes++;const de=Y[y.__cacheKey];de!==void 0&&(Y[y.__cacheKey].usedTimes--,de.usedTimes===0&&E(g)),y.__cacheKey=Z,y.__webglTexture=Y[Z].texture}return N}function he(y,g,N){let Q=r.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Q=r.TEXTURE_3D);const Y=j(y,g),Z=g.source;t.bindTexture(Q,y.__webglTexture,r.TEXTURE0+N);const de=i.get(Z);if(Z.version!==de.__version||Y===!0){t.activeTexture(r.TEXTURE0+N);const ne=ke.getPrimaries(ke.workingColorSpace),le=g.colorSpace===Et?null:ke.getPrimaries(g.colorSpace),xe=g.colorSpace===Et||ne===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Le=u(g)&&f(g.image)===!1;let q=v(g.image,Le,!1,n.maxTextureSize);q=Pe(g,q);const We=f(q)||s,Be=a.convert(g.format,g.colorSpace);let Ee=a.convert(g.type),ge=w(g.internalFormat,Be,Ee,g.colorSpace,g.isVideoTexture);B(Q,g,We);let ce;const Ce=g.mipmaps,Ve=s&&g.isVideoTexture!==!0&&ge!==Pa,Ze=de.__version===void 0||Y===!0,Ie=L(g,q,We);if(g.isDepthTexture)ge=r.DEPTH_COMPONENT,s?g.type===ii?ge=r.DEPTH_COMPONENT32F:g.type===ti?ge=r.DEPTH_COMPONENT24:g.type===ui?ge=r.DEPTH24_STENCIL8:ge=r.DEPTH_COMPONENT16:g.type===ii&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===di&&ge===r.DEPTH_COMPONENT&&g.type!==pn&&g.type!==ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ti,Ee=a.convert(g.type)),g.format===Ri&&ge===r.DEPTH_COMPONENT&&(ge=r.DEPTH_STENCIL,g.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=ui,Ee=a.convert(g.type))),Ze&&(Ve?t.texStorage2D(r.TEXTURE_2D,1,ge,q.width,q.height):t.texImage2D(r.TEXTURE_2D,0,ge,q.width,q.height,0,Be,Ee,null));else if(g.isDataTexture)if(Ce.length>0&&We){Ve&&Ze&&t.texStorage2D(r.TEXTURE_2D,Ie,ge,Ce[0].width,Ce[0].height);for(let te=0,b=Ce.length;te<b;te++)ce=Ce[te],Ve?t.texSubImage2D(r.TEXTURE_2D,te,0,0,ce.width,ce.height,Be,Ee,ce.data):t.texImage2D(r.TEXTURE_2D,te,ge,ce.width,ce.height,0,Be,Ee,ce.data);g.generateMipmaps=!1}else Ve?(Ze&&t.texStorage2D(r.TEXTURE_2D,Ie,ge,q.width,q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,q.width,q.height,Be,Ee,q.data)):t.texImage2D(r.TEXTURE_2D,0,ge,q.width,q.height,0,Be,Ee,q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ve&&Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ge,Ce[0].width,Ce[0].height,q.depth);for(let te=0,b=Ce.length;te<b;te++)ce=Ce[te],g.format!==Pt?Be!==null?Ve?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,q.depth,Be,ce.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,ge,ce.width,ce.height,q.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,q.depth,Be,Ee,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,ge,ce.width,ce.height,q.depth,0,Be,Ee,ce.data)}else{Ve&&Ze&&t.texStorage2D(r.TEXTURE_2D,Ie,ge,Ce[0].width,Ce[0].height);for(let te=0,b=Ce.length;te<b;te++)ce=Ce[te],g.format!==Pt?Be!==null?Ve?t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,ce.width,ce.height,Be,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,te,ge,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(r.TEXTURE_2D,te,0,0,ce.width,ce.height,Be,Ee,ce.data):t.texImage2D(r.TEXTURE_2D,te,ge,ce.width,ce.height,0,Be,Ee,ce.data)}else if(g.isDataArrayTexture)Ve?(Ze&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ge,q.width,q.height,q.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Be,Ee,q.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ge,q.width,q.height,q.depth,0,Be,Ee,q.data);else if(g.isData3DTexture)Ve?(Ze&&t.texStorage3D(r.TEXTURE_3D,Ie,ge,q.width,q.height,q.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Be,Ee,q.data)):t.texImage3D(r.TEXTURE_3D,0,ge,q.width,q.height,q.depth,0,Be,Ee,q.data);else if(g.isFramebufferTexture){if(Ze)if(Ve)t.texStorage2D(r.TEXTURE_2D,Ie,ge,q.width,q.height);else{let te=q.width,b=q.height;for(let ie=0;ie<Ie;ie++)t.texImage2D(r.TEXTURE_2D,ie,ge,te,b,0,Be,Ee,null),te>>=1,b>>=1}}else if(Ce.length>0&&We){Ve&&Ze&&t.texStorage2D(r.TEXTURE_2D,Ie,ge,Ce[0].width,Ce[0].height);for(let te=0,b=Ce.length;te<b;te++)ce=Ce[te],Ve?t.texSubImage2D(r.TEXTURE_2D,te,0,0,Be,Ee,ce):t.texImage2D(r.TEXTURE_2D,te,ge,Be,Ee,ce);g.generateMipmaps=!1}else Ve?(Ze&&t.texStorage2D(r.TEXTURE_2D,Ie,ge,q.width,q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Be,Ee,q)):t.texImage2D(r.TEXTURE_2D,0,ge,Be,Ee,q);T(g,We)&&M(Q),de.__version=Z.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function fe(y,g,N){if(g.image.length!==6)return;const Q=j(y,g),Y=g.source;t.bindTexture(r.TEXTURE_CUBE_MAP,y.__webglTexture,r.TEXTURE0+N);const Z=i.get(Y);if(Y.version!==Z.__version||Q===!0){t.activeTexture(r.TEXTURE0+N);const de=ke.getPrimaries(ke.workingColorSpace),ne=g.colorSpace===Et?null:ke.getPrimaries(g.colorSpace),le=g.colorSpace===Et||de===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const xe=g.isCompressedTexture||g.image[0].isCompressedTexture,Le=g.image[0]&&g.image[0].isDataTexture,q=[];for(let te=0;te<6;te++)!xe&&!Le?q[te]=v(g.image[te],!1,!0,n.maxCubemapSize):q[te]=Le?g.image[te].image:g.image[te],q[te]=Pe(g,q[te]);const We=q[0],Be=f(We)||s,Ee=a.convert(g.format,g.colorSpace),ge=a.convert(g.type),ce=w(g.internalFormat,Ee,ge,g.colorSpace),Ce=s&&g.isVideoTexture!==!0,Ve=Z.__version===void 0||Q===!0;let Ze=L(g,We,Be);B(r.TEXTURE_CUBE_MAP,g,Be);let Ie;if(xe){Ce&&Ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ze,ce,We.width,We.height);for(let te=0;te<6;te++){Ie=q[te].mipmaps;for(let b=0;b<Ie.length;b++){const ie=Ie[b];g.format!==Pt?Ee!==null?Ce?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,b,0,0,ie.width,ie.height,Ee,ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,b,ce,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,b,0,0,ie.width,ie.height,Ee,ge,ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,b,ce,ie.width,ie.height,0,Ee,ge,ie.data)}}}else{Ie=g.mipmaps,Ce&&Ve&&(Ie.length>0&&Ze++,t.texStorage2D(r.TEXTURE_CUBE_MAP,Ze,ce,q[0].width,q[0].height));for(let te=0;te<6;te++)if(Le){Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,q[te].width,q[te].height,Ee,ge,q[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ce,q[te].width,q[te].height,0,Ee,ge,q[te].data);for(let b=0;b<Ie.length;b++){const ie=Ie[b].image[te].image;Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,b+1,0,0,ie.width,ie.height,Ee,ge,ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,b+1,ce,ie.width,ie.height,0,Ee,ge,ie.data)}}else{Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee,ge,q[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ce,Ee,ge,q[te]);for(let b=0;b<Ie.length;b++){const ie=Ie[b];Ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,b+1,0,0,Ee,ge,ie.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,b+1,ce,Ee,ge,ie.image[te])}}}T(g,Be)&&M(r.TEXTURE_CUBE_MAP),Z.__version=Y.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function pe(y,g,N,Q,Y,Z){const de=a.convert(N.format,N.colorSpace),ne=a.convert(N.type),le=w(N.internalFormat,de,ne,N.colorSpace);if(!i.get(g).__hasExternalTextures){const xe=Math.max(1,g.width>>Z),Le=Math.max(1,g.height>>Z);Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?t.texImage3D(Y,Z,le,xe,Le,g.depth,0,de,ne,null):t.texImage2D(Y,Z,le,xe,Le,0,de,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,y),ue(g)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,Y,i.get(N).__webglTexture,0,Te(g)):(Y===r.TEXTURE_2D||Y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,Y,i.get(N).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(y,g,N){if(r.bindRenderbuffer(r.RENDERBUFFER,y),g.depthBuffer&&!g.stencilBuffer){let Q=s===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(N||ue(g)){const Y=g.depthTexture;Y&&Y.isDepthTexture&&(Y.type===ii?Q=r.DEPTH_COMPONENT32F:Y.type===ti&&(Q=r.DEPTH_COMPONENT24));const Z=Te(g);ue(g)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,Q,g.width,g.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,Q,g.width,g.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,g.width,g.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,y)}else if(g.depthBuffer&&g.stencilBuffer){const Q=Te(g);N&&ue(g)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,g.width,g.height):ue(g)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,g.width,g.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,y)}else{const Q=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let Y=0;Y<Q.length;Y++){const Z=Q[Y],de=a.convert(Z.format,Z.colorSpace),ne=a.convert(Z.type),le=w(Z.internalFormat,de,ne,Z.colorSpace),xe=Te(g);N&&ue(g)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xe,le,g.width,g.height):ue(g)?l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xe,le,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,le,g.width,g.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V(g.depthTexture,0);const N=i.get(g.depthTexture).__webglTexture,Q=Te(g);if(g.depthTexture.format===di)ue(g)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,N,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,N,0);else if(g.depthTexture.format===Ri)ue(g)?l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,N,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function Se(y){const g=i.get(y),N=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Re(g.__webglFramebuffer,y)}else if(N){g.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[Q]),g.__webglDepthbuffer[Q]=r.createRenderbuffer(),Ae(g.__webglDepthbuffer[Q],y,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=r.createRenderbuffer(),Ae(g.__webglDepthbuffer,y,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function He(y,g,N){const Q=i.get(y);g!==void 0&&pe(Q.__webglFramebuffer,y,y.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Se(y)}function I(y){const g=y.texture,N=i.get(y),Q=i.get(g);y.addEventListener("dispose",K),y.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=g.version,o.memory.textures++);const Y=y.isWebGLCubeRenderTarget===!0,Z=y.isWebGLMultipleRenderTargets===!0,de=f(y)||s;if(Y){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(s&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let le=0;le<g.mipmaps.length;le++)N.__webglFramebuffer[ne][le]=r.createFramebuffer()}else N.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(s&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)N.__webglFramebuffer[ne]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(Z)if(n.drawBuffers){const ne=y.texture;for(let le=0,xe=ne.length;le<xe;le++){const Le=i.get(ne[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&y.samples>0&&ue(y)===!1){const ne=Z?g:[g];N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let le=0;le<ne.length;le++){const xe=ne[le];N.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[le]);const Le=a.convert(xe.format,xe.colorSpace),q=a.convert(xe.type),We=w(xe.internalFormat,Le,q,xe.colorSpace,y.isXRRenderTarget===!0),Be=Te(y);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,We,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,N.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Ae(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),B(r.TEXTURE_CUBE_MAP,g,de);for(let ne=0;ne<6;ne++)if(s&&g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)pe(N.__webglFramebuffer[ne][le],y,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,le);else pe(N.__webglFramebuffer[ne],y,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);T(g,de)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){const ne=y.texture;for(let le=0,xe=ne.length;le<xe;le++){const Le=ne[le],q=i.get(Le);t.bindTexture(r.TEXTURE_2D,q.__webglTexture),B(r.TEXTURE_2D,Le,de),pe(N.__webglFramebuffer,y,Le,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),T(Le,de)&&M(r.TEXTURE_2D)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(s?ne=y.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ne,Q.__webglTexture),B(ne,g,de),s&&g.mipmaps&&g.mipmaps.length>0)for(let le=0;le<g.mipmaps.length;le++)pe(N.__webglFramebuffer[le],y,g,r.COLOR_ATTACHMENT0,ne,le);else pe(N.__webglFramebuffer,y,g,r.COLOR_ATTACHMENT0,ne,0);T(g,de)&&M(ne),t.unbindTexture()}y.depthBuffer&&Se(y)}function ft(y){const g=f(y)||s,N=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0,Y=N.length;Q<Y;Q++){const Z=N[Q];if(T(Z,g)){const de=y.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ne=i.get(Z).__webglTexture;t.bindTexture(de,ne),M(de),t.unbindTexture()}}}function _e(y){if(s&&y.samples>0&&ue(y)===!1){const g=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],N=y.width,Q=y.height;let Y=r.COLOR_BUFFER_BIT;const Z=[],de=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=i.get(y),le=y.isWebGLMultipleRenderTargets===!0;if(le)for(let xe=0;xe<g.length;xe++)t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let xe=0;xe<g.length;xe++){Z.push(r.COLOR_ATTACHMENT0+xe),y.depthBuffer&&Z.push(de);const Le=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(Le===!1&&(y.depthBuffer&&(Y|=r.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Y|=r.STENCIL_BUFFER_BIT)),le&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ne.__webglColorRenderbuffer[xe]),Le===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[de]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[de])),le){const q=i.get(g[xe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,q,0)}r.blitFramebuffer(0,0,N,Q,0,0,N,Q,Y,r.NEAREST),c&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let xe=0;xe<g.length;xe++){t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.RENDERBUFFER,ne.__webglColorRenderbuffer[xe]);const Le=i.get(g[xe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xe,r.TEXTURE_2D,Le,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function Te(y){return Math.min(n.maxSamples,y.samples)}function ue(y){const g=i.get(y);return s&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ke(y){const g=o.render.frame;h.get(y)!==g&&(h.set(y,g),y.update())}function Pe(y,g){const N=y.colorSpace,Q=y.format,Y=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===Mn||N!==Vt&&N!==Et&&(ke.getTransfer(N)===Ye?s===!1?e.has("EXT_sRGB")===!0&&Q===Pt?(y.format=Mn,y.minFilter=yt,y.generateMipmaps=!1):g=cs.sRGBToLinear(g):(Q!==Pt||Y!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}this.allocateTextureUnit=C,this.resetTextureUnits=ae,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=He,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ue}function zp(r,e,t){const i=t.isWebGL2;function n(a,o=Et){let s;const l=ke.getTransfer(o);if(a===ei)return r.UNSIGNED_BYTE;if(a===Sa)return r.UNSIGNED_SHORT_4_4_4_4;if(a===ya)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Sl)return r.BYTE;if(a===yl)return r.SHORT;if(a===pn)return r.UNSIGNED_SHORT;if(a===Ma)return r.INT;if(a===ti)return r.UNSIGNED_INT;if(a===ii)return r.FLOAT;if(a===tr)return i?r.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===El)return r.ALPHA;if(a===Pt)return r.RGBA;if(a===Tl)return r.LUMINANCE;if(a===bl)return r.LUMINANCE_ALPHA;if(a===di)return r.DEPTH_COMPONENT;if(a===Ri)return r.DEPTH_STENCIL;if(a===Mn)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Al)return r.RED;if(a===Ea)return r.RED_INTEGER;if(a===wl)return r.RG;if(a===Ta)return r.RG_INTEGER;if(a===ba)return r.RGBA_INTEGER;if(a===fn||a===mn||a===gn||a===_n)if(l===Ye)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===fn)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===mn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===gn)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===_n)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===fn)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===mn)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===gn)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===_n)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Aa||a===wa||a===Ra||a===Ca)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Aa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ra)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Ca)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Pa)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===La||a===Ua)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===La)return l===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Ua)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Da||a===Na||a===Ia||a===Oa||a===Fa||a===Ba||a===za||a===Ha||a===Ga||a===Va||a===ka||a===Wa||a===Xa||a===ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Da)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Na)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ia)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Oa)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Fa)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ba)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===za)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ha)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ga)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Va)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ka)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Wa)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Xa)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ja)return l===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===vn||a===qa||a===Ya)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===vn)return l===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ya)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Rl||a===Ka||a===Za||a===Ja)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===vn)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Ka)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Za)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ja)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ui?i?r.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:n}}class Hp extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qr extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gp={type:"move"};class Zn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),u=this._getHandJoint(c,v);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Gp)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Vp extends Pi{constructor(e,t){super();const i=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,p=null,d=null,m=null,_=null;const v=t.getContextAttributes();let f=null,u=null;const T=[],M=[],w=new Ge;let L=null;const R=new bt;R.layers.enable(1),R.viewport=new nt;const A=new bt;A.layers.enable(2),A.viewport=new nt;const K=[R,A],S=new Hp;S.layers.enable(1),S.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=T[B];return j===void 0&&(j=new Zn,T[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=T[B];return j===void 0&&(j=new Zn,T[B]=j),j.getGripSpace()},this.getHand=function(B){let j=T[B];return j===void 0&&(j=new Zn,T[B]=j),j.getHandSpace()};function G(B){const j=M.indexOf(B.inputSource);if(j===-1)return;const he=T[j];he!==void 0&&(he.update(B.inputSource,B.frame,c||o),he.dispatchEvent({type:B.type,data:B.inputSource}))}function ae(){n.removeEventListener("select",G),n.removeEventListener("selectstart",G),n.removeEventListener("selectend",G),n.removeEventListener("squeeze",G),n.removeEventListener("squeezestart",G),n.removeEventListener("squeezeend",G),n.removeEventListener("end",ae),n.removeEventListener("inputsourceschange",C);for(let B=0;B<T.length;B++){const j=M[B];j!==null&&(M[B]=null,T[B].disconnect(j))}E=null,H=null,e.setRenderTarget(f),m=null,d=null,p=null,n=null,u=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",G),n.addEventListener("selectstart",G),n.addEventListener("selectend",G),n.addEventListener("squeeze",G),n.addEventListener("squeezestart",G),n.addEventListener("squeezeend",G),n.addEventListener("end",ae),n.addEventListener("inputsourceschange",C),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(w),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:n.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,t,j),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new fi(m.framebufferWidth,m.framebufferHeight,{format:Pt,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let j=null,he=null,fe=null;v.depth&&(fe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=v.stencil?Ri:di,he=v.stencil?ui:ti);const pe={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:a};p=new XRWebGLBinding(n,t),d=p.createProjectionLayer(pe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new fi(d.textureWidth,d.textureHeight,{format:Pt,type:ei,depthTexture:new ks(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ae=e.properties.get(u);Ae.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),oe.setContext(n),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function C(B){for(let j=0;j<B.removed.length;j++){const he=B.removed[j],fe=M.indexOf(he);fe>=0&&(M[fe]=null,T[fe].disconnect(he))}for(let j=0;j<B.added.length;j++){const he=B.added[j];let fe=M.indexOf(he);if(fe===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=M.length){M.push(he),fe=Ae;break}else if(M[Ae]===null){M[Ae]=he,fe=Ae;break}if(fe===-1)break}const pe=T[fe];pe&&pe.connect(he)}}const z=new U,V=new U;function X(B,j,he){z.setFromMatrixPosition(j.matrixWorld),V.setFromMatrixPosition(he.matrixWorld);const fe=z.distanceTo(V),pe=j.projectionMatrix.elements,Ae=he.projectionMatrix.elements,Re=pe[14]/(pe[10]-1),Se=pe[14]/(pe[10]+1),He=(pe[9]+1)/pe[5],I=(pe[9]-1)/pe[5],ft=(pe[8]-1)/pe[0],_e=(Ae[8]+1)/Ae[0],Te=Re*ft,ue=Re*_e,Ke=fe/(-ft+_e),Pe=Ke*-ft;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Pe),B.translateZ(Ke),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const y=Re+Ke,g=Se+Ke,N=Te-Pe,Q=ue+(fe-Pe),Y=He*Se/g*y,Z=I*Se/g*y;B.projectionMatrix.makePerspective(N,Q,Y,Z,y,g),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function W(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;S.near=A.near=R.near=B.near,S.far=A.far=R.far=B.far,(E!==S.near||H!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,H=S.far);const j=B.parent,he=S.cameras;W(S,j);for(let fe=0;fe<he.length;fe++)W(he[fe],j);he.length===2?X(S,R,A):S.projectionMatrix.copy(R.projectionMatrix),k(B,S,j)};function k(B,j,he){he===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(he.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=yn*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)};let J=null;function $(B,j){if(h=j.getViewerPose(c||o),_=j,h!==null){const he=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let fe=!1;he.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let pe=0;pe<he.length;pe++){const Ae=he[pe];let Re=null;if(m!==null)Re=m.getViewport(Ae);else{const He=p.getViewSubImage(d,Ae);Re=He.viewport,pe===0&&(e.setRenderTargetTextures(u,He.colorTexture,d.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(u))}let Se=K[pe];Se===void 0&&(Se=new bt,Se.layers.enable(pe),Se.viewport=new nt,K[pe]=Se),Se.matrix.fromArray(Ae.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ae.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Re.x,Re.y,Re.width,Re.height),pe===0&&(S.matrix.copy(Se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(Se)}}for(let he=0;he<T.length;he++){const fe=M[he],pe=T[he];fe!==null&&pe!==void 0&&pe.update(fe,j,c||o)}J&&J(B,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),_=null}const oe=new Ns;oe.setAnimationLoop($),this.setAnimationLoop=function(B){J=B},this.dispose=function(){}}}function kp(r,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function i(f,u){u.color.getRGB(f.fogColor.value,Ls(r)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function n(f,u,T,M,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(f,u):u.isMeshToonMaterial?(a(f,u),p(f,u)):u.isMeshPhongMaterial?(a(f,u),h(f,u)):u.isMeshStandardMaterial?(a(f,u),d(f,u),u.isMeshPhysicalMaterial&&m(f,u,w)):u.isMeshMatcapMaterial?(a(f,u),_(f,u)):u.isMeshDepthMaterial?a(f,u):u.isMeshDistanceMaterial?(a(f,u),v(f,u)):u.isMeshNormalMaterial?a(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&s(f,u)):u.isPointsMaterial?l(f,u,T,M):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===gt&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===gt&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const T=e.get(u).envMap;if(T&&(f.envMap.value=T,f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const M=r._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*M,t(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function s(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,T,M){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*T,f.scale.value=M*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function d(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,T){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===gt&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=T.texture,f.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,u){u.matcap&&(f.matcap.value=u.matcap)}function v(f,u){const T=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(T.matrixWorld),f.nearDistance.value=T.shadow.camera.near,f.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Wp(r,e,t,i){let n={},a={},o=[];const s=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,M){const w=M.program;i.uniformBlockBinding(T,w)}function c(T,M){let w=n[T.id];w===void 0&&(_(T),w=h(T),n[T.id]=w,T.addEventListener("dispose",f));const L=M.program;i.updateUBOMapping(T,L);const R=e.render.frame;a[T.id]!==R&&(d(T),a[T.id]=R)}function h(T){const M=p();T.__bindingPointIndex=M;const w=r.createBuffer(),L=T.__size,R=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,L,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,w),w}function p(){for(let T=0;T<s;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const M=n[T.id],w=T.uniforms,L=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let R=0,A=w.length;R<A;R++){const K=Array.isArray(w[R])?w[R]:[w[R]];for(let S=0,E=K.length;S<E;S++){const H=K[S];if(m(H,R,S,L)===!0){const G=H.__offset,ae=Array.isArray(H.value)?H.value:[H.value];let C=0;for(let z=0;z<ae.length;z++){const V=ae[z],X=v(V);typeof V=="number"||typeof V=="boolean"?(H.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,G+C,H.__data)):V.isMatrix3?(H.__data[0]=V.elements[0],H.__data[1]=V.elements[1],H.__data[2]=V.elements[2],H.__data[3]=0,H.__data[4]=V.elements[3],H.__data[5]=V.elements[4],H.__data[6]=V.elements[5],H.__data[7]=0,H.__data[8]=V.elements[6],H.__data[9]=V.elements[7],H.__data[10]=V.elements[8],H.__data[11]=0):(V.toArray(H.__data,C),C+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(T,M,w,L){const R=T.value,A=M+"_"+w;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{const K=L[A];if(typeof R=="number"||typeof R=="boolean"){if(K!==R)return L[A]=R,!0}else if(K.equals(R)===!1)return K.copy(R),!0}return!1}function _(T){const M=T.uniforms;let w=0;const L=16;for(let A=0,K=M.length;A<K;A++){const S=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,H=S.length;E<H;E++){const G=S[E],ae=Array.isArray(G.value)?G.value:[G.value];for(let C=0,z=ae.length;C<z;C++){const V=ae[C],X=v(V),W=w%L;W!==0&&L-W<X.boundary&&(w+=L-W),G.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=X.storage}}}const R=w%L;return R>0&&(w+=L-R),T.__size=w,T.__cache={},this}function v(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function f(T){const M=T.target;M.removeEventListener("dispose",f);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),r.deleteBuffer(n[M.id]),delete n[M.id],delete a[M.id]}function u(){for(const T in n)r.deleteBuffer(n[T]);o=[],n={},a={}}return{bind:l,update:c,dispose:u}}class ho{constructor(e={}){const{canvas:t=Hl(),context:i=null,depth:n=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,f=null;const u=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ot,this._useLegacyLights=!1,this.toneMapping=$t,this.toneMappingExposure=1;const M=this;let w=!1,L=0,R=0,A=null,K=-1,S=null;const E=new nt,H=new nt;let G=null;const ae=new Fe(0);let C=0,z=t.width,V=t.height,X=1,W=null,k=null;const J=new nt(0,0,z,V),$=new nt(0,0,z,V);let oe=!1;const B=new Vn;let j=!1,he=!1,fe=null;const pe=new Qe,Ae=new Ge,Re=new U,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return A===null?X:1}let I=i;function ft(x,P){for(let O=0;O<x.length;O++){const F=x[O],D=t.getContext(F,P);if(D!==null)return D}return null}try{const x={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sn}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",b,!1),t.addEventListener("webglcontextcreationerror",ie,!1),I===null){const P=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&P.shift(),I=ft(P,x),I===null)throw ft(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let _e,Te,ue,Ke,Pe,y,g,N,Q,Y,Z,de,ne,le,xe,Le,q,We,Be,Ee,ge,ce,Ce,Ve;function Ze(){_e=new ed(I),Te=new Yu(I,_e,e),_e.init(Te),ce=new zp(I,_e,Te),ue=new Fp(I,_e,Te),Ke=new rd(I),Pe=new Ep,y=new Bp(I,_e,ue,Pe,Te,ce,Ke),g=new Zu(M),N=new $u(M),Q=new uc(I,Te),Ce=new ju(I,_e,Q,Te),Y=new td(I,Q,Ke,Ce),Z=new od(I,Y,Q,Ke),Be=new sd(I,Te,y),Le=new Ku(Pe),de=new yp(M,g,N,_e,Te,Ce,Le),ne=new kp(M,Pe),le=new bp,xe=new Lp(_e,Te),We=new Xu(M,g,N,ue,Z,d,l),q=new Op(M,Z,Te),Ve=new Wp(I,Ke,Te,ue),Ee=new qu(I,_e,Ke,Te),ge=new id(I,_e,Ke,Te),Ke.programs=de.programs,M.capabilities=Te,M.extensions=_e,M.properties=Pe,M.renderLists=le,M.shadowMap=q,M.state=ue,M.info=Ke}Ze();const Ie=new Vp(M,I);this.xr=Ie,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const x=_e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=_e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize(z,V,!1))},this.getSize=function(x){return x.set(z,V)},this.setSize=function(x,P,O=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=x,V=P,t.width=Math.floor(x*X),t.height=Math.floor(P*X),O===!0&&(t.style.width=x+"px",t.style.height=P+"px"),this.setViewport(0,0,x,P)},this.getDrawingBufferSize=function(x){return x.set(z*X,V*X).floor()},this.setDrawingBufferSize=function(x,P,O){z=x,V=P,X=O,t.width=Math.floor(x*O),t.height=Math.floor(P*O),this.setViewport(0,0,x,P)},this.getCurrentViewport=function(x){return x.copy(E)},this.getViewport=function(x){return x.copy(J)},this.setViewport=function(x,P,O,F){x.isVector4?J.set(x.x,x.y,x.z,x.w):J.set(x,P,O,F),ue.viewport(E.copy(J).multiplyScalar(X).floor())},this.getScissor=function(x){return x.copy($)},this.setScissor=function(x,P,O,F){x.isVector4?$.set(x.x,x.y,x.z,x.w):$.set(x,P,O,F),ue.scissor(H.copy($).multiplyScalar(X).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(x){ue.setScissorTest(oe=x)},this.setOpaqueSort=function(x){W=x},this.setTransparentSort=function(x){k=x},this.getClearColor=function(x){return x.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor.apply(We,arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha.apply(We,arguments)},this.clear=function(x=!0,P=!0,O=!0){let F=0;if(x){let D=!1;if(A!==null){const re=A.texture.format;D=re===ba||re===Ta||re===Ea}if(D){const re=A.texture.type,me=re===ei||re===ti||re===pn||re===ui||re===Sa||re===ya,Me=We.getClearColor(),ye=We.getClearAlpha(),ze=Me.r,Ue=Me.g,De=Me.b;me?(m[0]=ze,m[1]=Ue,m[2]=De,m[3]=ye,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=ze,_[1]=Ue,_[2]=De,_[3]=ye,I.clearBufferiv(I.COLOR,0,_))}else F|=I.COLOR_BUFFER_BIT}P&&(F|=I.DEPTH_BUFFER_BIT),O&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",b,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),le.dispose(),xe.dispose(),Pe.dispose(),g.dispose(),N.dispose(),Z.dispose(),Ce.dispose(),Ve.dispose(),de.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",At),Ie.removeEventListener("sessionend",qe),fe&&(fe.dispose(),fe=null),mt.stop()};function te(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const x=Ke.autoReset,P=q.enabled,O=q.autoUpdate,F=q.needsUpdate,D=q.type;Ze(),Ke.autoReset=x,q.enabled=P,q.autoUpdate=O,q.needsUpdate=F,q.type=D}function ie(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function se(x){const P=x.target;P.removeEventListener("dispose",se),be(P)}function be(x){ve(x),Pe.remove(x)}function ve(x){const P=Pe.get(x).programs;P!==void 0&&(P.forEach(function(O){de.releaseProgram(O)}),x.isShaderMaterial&&de.releaseShaderCache(x))}this.renderBufferDirect=function(x,P,O,F,D,re){P===null&&(P=Se);const me=D.isMesh&&D.matrixWorld.determinant()<0,Me=pf(x,P,O,F,D);ue.setMaterial(F,me);let ye=O.index,ze=1;if(F.wireframe===!0){if(ye=Y.getWireframeAttribute(O),ye===void 0)return;ze=2}const Ue=O.drawRange,De=O.attributes.position;let ht=Ue.start*ze,rt=(Ue.start+Ue.count)*ze;re!==null&&(ht=Math.max(ht,re.start*ze),rt=Math.min(rt,(re.start+re.count)*ze)),ye!==null?(ht=Math.max(ht,0),rt=Math.min(rt,ye.count)):De!=null&&(ht=Math.max(ht,0),rt=Math.min(rt,De.count));const wt=rt-ht;if(wt<0||wt===1/0)return;Ce.setup(D,F,Me,O,ye);let Zt,Je=Ee;if(ye!==null&&(Zt=Q.get(ye),Je=ge,Je.setIndex(Zt)),D.isMesh)F.wireframe===!0?(ue.setLineWidth(F.wireframeLinewidth*He()),Je.setMode(I.LINES)):Je.setMode(I.TRIANGLES);else if(D.isLine){let Oe=F.linewidth;Oe===void 0&&(Oe=1),ue.setLineWidth(Oe*He()),D.isLineSegments?Je.setMode(I.LINES):D.isLineLoop?Je.setMode(I.LINE_LOOP):Je.setMode(I.LINE_STRIP)}else D.isPoints?Je.setMode(I.POINTS):D.isSprite&&Je.setMode(I.TRIANGLES);if(D.isBatchedMesh)Je.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else if(D.isInstancedMesh)Je.renderInstances(ht,wt,D.count);else if(O.isInstancedBufferGeometry){const Oe=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,na=Math.min(O.instanceCount,Oe);Je.renderInstances(ht,wt,na)}else Je.render(ht,wt)};function Xe(x,P,O){x.transparent===!0&&x.side===Gt&&x.forceSinglePass===!1?(x.side=gt,x.needsUpdate=!0,an(x,P,O),x.side=Jt,x.needsUpdate=!0,an(x,P,O),x.side=Gt):an(x,P,O)}this.compile=function(x,P,O=null){O===null&&(O=x),f=xe.get(O),f.init(),T.push(f),O.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),x!==O&&x.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(f.pushLight(D),D.castShadow&&f.pushShadow(D))}),f.setupLights(M._useLegacyLights);const F=new Set;return x.traverse(function(D){const re=D.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){const Me=re[me];Xe(Me,O,D),F.add(Me)}else Xe(re,O,D),F.add(re)}),T.pop(),f=null,F},this.compileAsync=function(x,P,O=null){const F=this.compile(x,P,O);return new Promise(D=>{function re(){if(F.forEach(function(me){Pe.get(me).currentProgram.isReady()&&F.delete(me)}),F.size===0){D(x);return}setTimeout(re,10)}_e.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let je=null;function et(x){je&&je(x)}function At(){mt.stop()}function qe(){mt.start()}const mt=new Ns;mt.setAnimationLoop(et),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(x){je=x,Ie.setAnimationLoop(x),x===null?mt.stop():mt.start()},Ie.addEventListener("sessionstart",At),Ie.addEventListener("sessionend",qe),this.render=function(x,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(P),P=Ie.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,P,A),f=xe.get(x,T.length),f.init(),T.push(f),pe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),B.setFromProjectionMatrix(pe),he=this.localClippingEnabled,j=Le.init(this.clippingPlanes,he),v=le.get(x,u.length),v.init(),u.push(v),zt(x,P,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(W,k),this.info.render.frame++,j===!0&&Le.beginShadows();const O=f.state.shadowsArray;if(q.render(O,x,P),j===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),We.render(v,x),f.setupLights(M._useLegacyLights),P.isArrayCamera){const F=P.cameras;for(let D=0,re=F.length;D<re;D++){const me=F[D];Lo(v,x,me,me.viewport)}}else Lo(v,x,P);A!==null&&(y.updateMultisampleRenderTarget(A),y.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(M,x,P),Ce.resetDefaultState(),K=-1,S=null,T.pop(),T.length>0?f=T[T.length-1]:f=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function zt(x,P,O,F){if(x.visible===!1)return;if(x.layers.test(P.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(P);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||B.intersectsSprite(x)){F&&Re.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pe);const re=Z.update(x),me=x.material;me.visible&&v.push(x,re,me,O,Re.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||B.intersectsObject(x))){const re=Z.update(x),me=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Re.copy(x.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Re.copy(re.boundingSphere.center)),Re.applyMatrix4(x.matrixWorld).applyMatrix4(pe)),Array.isArray(me)){const Me=re.groups;for(let ye=0,ze=Me.length;ye<ze;ye++){const Ue=Me[ye],De=me[Ue.materialIndex];De&&De.visible&&v.push(x,re,De,O,Re.z,Ue)}}else me.visible&&v.push(x,re,me,O,Re.z,null)}}const D=x.children;for(let re=0,me=D.length;re<me;re++)zt(D[re],P,O,F)}function Lo(x,P,O,F){const D=x.opaque,re=x.transmissive,me=x.transparent;f.setupLightsView(O),j===!0&&Le.setGlobalState(M.clippingPlanes,O),re.length>0&&df(D,re,P,O),F&&ue.viewport(E.copy(F)),D.length>0&&nn(D,P,O),re.length>0&&nn(re,P,O),me.length>0&&nn(me,P,O),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function df(x,P,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const D=Te.isWebGL2;fe===null&&(fe=new fi(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?tr:ei,minFilter:er,samples:D?4:0})),M.getDrawingBufferSize(Ae),D?fe.setSize(Ae.x,Ae.y):fe.setSize(Tn(Ae.x),Tn(Ae.y));const re=M.getRenderTarget();M.setRenderTarget(fe),M.getClearColor(ae),C=M.getClearAlpha(),C<1&&M.setClearColor(16777215,.5),M.clear();const me=M.toneMapping;M.toneMapping=$t,nn(x,O,F),y.updateMultisampleRenderTarget(fe),y.updateRenderTargetMipmap(fe);let Me=!1;for(let ye=0,ze=P.length;ye<ze;ye++){const Ue=P[ye],De=Ue.object,ht=Ue.geometry,rt=Ue.material,wt=Ue.group;if(rt.side===Gt&&De.layers.test(F.layers)){const Zt=rt.side;rt.side=gt,rt.needsUpdate=!0,Uo(De,O,F,ht,rt,wt),rt.side=Zt,rt.needsUpdate=!0,Me=!0}}Me===!0&&(y.updateMultisampleRenderTarget(fe),y.updateRenderTargetMipmap(fe)),M.setRenderTarget(re),M.setClearColor(ae,C),M.toneMapping=me}function nn(x,P,O){const F=P.isScene===!0?P.overrideMaterial:null;for(let D=0,re=x.length;D<re;D++){const me=x[D],Me=me.object,ye=me.geometry,ze=F===null?me.material:F,Ue=me.group;Me.layers.test(O.layers)&&Uo(Me,P,O,ye,ze,Ue)}}function Uo(x,P,O,F,D,re){x.onBeforeRender(M,P,O,F,D,re),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(M,P,O,F,x,re),D.transparent===!0&&D.side===Gt&&D.forceSinglePass===!1?(D.side=gt,D.needsUpdate=!0,M.renderBufferDirect(O,P,F,D,x,re),D.side=Jt,D.needsUpdate=!0,M.renderBufferDirect(O,P,F,D,x,re),D.side=Gt):M.renderBufferDirect(O,P,F,D,x,re),x.onAfterRender(M,P,O,F,D,re)}function an(x,P,O){P.isScene!==!0&&(P=Se);const F=Pe.get(x),D=f.state.lights,re=f.state.shadowsArray,me=D.state.version,Me=de.getParameters(x,D.state,re,P,O),ye=de.getProgramCacheKey(Me);let ze=F.programs;F.environment=x.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(x.isMeshStandardMaterial?N:g).get(x.envMap||F.environment),ze===void 0&&(x.addEventListener("dispose",se),ze=new Map,F.programs=ze);let Ue=ze.get(ye);if(Ue!==void 0){if(F.currentProgram===Ue&&F.lightsStateVersion===me)return No(x,Me),Ue}else Me.uniforms=de.getUniforms(x),x.onBuild(O,Me,M),x.onBeforeCompile(Me,M),Ue=de.acquireProgram(Me,ye),ze.set(ye,Ue),F.uniforms=Me.uniforms;const De=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(De.clippingPlanes=Le.uniform),No(x,Me),F.needsLights=mf(x),F.lightsStateVersion=me,F.needsLights&&(De.ambientLightColor.value=D.state.ambient,De.lightProbe.value=D.state.probe,De.directionalLights.value=D.state.directional,De.directionalLightShadows.value=D.state.directionalShadow,De.spotLights.value=D.state.spot,De.spotLightShadows.value=D.state.spotShadow,De.rectAreaLights.value=D.state.rectArea,De.ltc_1.value=D.state.rectAreaLTC1,De.ltc_2.value=D.state.rectAreaLTC2,De.pointLights.value=D.state.point,De.pointLightShadows.value=D.state.pointShadow,De.hemisphereLights.value=D.state.hemi,De.directionalShadowMap.value=D.state.directionalShadowMap,De.directionalShadowMatrix.value=D.state.directionalShadowMatrix,De.spotShadowMap.value=D.state.spotShadowMap,De.spotLightMatrix.value=D.state.spotLightMatrix,De.spotLightMap.value=D.state.spotLightMap,De.pointShadowMap.value=D.state.pointShadowMap,De.pointShadowMatrix.value=D.state.pointShadowMatrix),F.currentProgram=Ue,F.uniformsList=null,Ue}function Do(x){if(x.uniformsList===null){const P=x.currentProgram.getUniforms();x.uniformsList=jr.seqWithValue(P.seq,x.uniforms)}return x.uniformsList}function No(x,P){const O=Pe.get(x);O.outputColorSpace=P.outputColorSpace,O.batching=P.batching,O.instancing=P.instancing,O.instancingColor=P.instancingColor,O.skinning=P.skinning,O.morphTargets=P.morphTargets,O.morphNormals=P.morphNormals,O.morphColors=P.morphColors,O.morphTargetsCount=P.morphTargetsCount,O.numClippingPlanes=P.numClippingPlanes,O.numIntersection=P.numClipIntersection,O.vertexAlphas=P.vertexAlphas,O.vertexTangents=P.vertexTangents,O.toneMapping=P.toneMapping}function pf(x,P,O,F,D){P.isScene!==!0&&(P=Se),y.resetTextureUnits();const re=P.fog,me=F.isMeshStandardMaterial?P.environment:null,Me=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vt,ye=(F.isMeshStandardMaterial?N:g).get(F.envMap||me),ze=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ue=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),De=!!O.morphAttributes.position,ht=!!O.morphAttributes.normal,rt=!!O.morphAttributes.color;let wt=$t;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(wt=M.toneMapping);const Zt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Je=Zt!==void 0?Zt.length:0,Oe=Pe.get(F),na=f.state.lights;if(j===!0&&(he===!0||x!==S)){const Rt=x===S&&F.id===K;Le.setState(F,x,Rt)}let aa=!1;F.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==na.state.version||Oe.outputColorSpace!==Me||D.isBatchedMesh&&Oe.batching===!1||!D.isBatchedMesh&&Oe.batching===!0||D.isInstancedMesh&&Oe.instancing===!1||!D.isInstancedMesh&&Oe.instancing===!0||D.isSkinnedMesh&&Oe.skinning===!1||!D.isSkinnedMesh&&Oe.skinning===!0||D.isInstancedMesh&&Oe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Oe.instancingColor===!1&&D.instanceColor!==null||Oe.envMap!==ye||F.fog===!0&&Oe.fog!==re||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Le.numPlanes||Oe.numIntersection!==Le.numIntersection)||Oe.vertexAlphas!==ze||Oe.vertexTangents!==Ue||Oe.morphTargets!==De||Oe.morphNormals!==ht||Oe.morphColors!==rt||Oe.toneMapping!==wt||Te.isWebGL2===!0&&Oe.morphTargetsCount!==Je)&&(aa=!0):(aa=!0,Oe.__version=F.version);let Ei=Oe.currentProgram;aa===!0&&(Ei=an(F,P,D));let Io=!1,dr=!1,sa=!1;const ut=Ei.getUniforms(),Ti=Oe.uniforms;if(ue.useProgram(Ei.program)&&(Io=!0,dr=!0,sa=!0),F.id!==K&&(K=F.id,dr=!0),Io||S!==x){ut.setValue(I,"projectionMatrix",x.projectionMatrix),ut.setValue(I,"viewMatrix",x.matrixWorldInverse);const Rt=ut.map.cameraPosition;Rt!==void 0&&Rt.setValue(I,Re.setFromMatrixPosition(x.matrixWorld)),Te.logarithmicDepthBuffer&&ut.setValue(I,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ut.setValue(I,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,dr=!0,sa=!0)}if(D.isSkinnedMesh){ut.setOptional(I,D,"bindMatrix"),ut.setOptional(I,D,"bindMatrixInverse");const Rt=D.skeleton;Rt&&(Te.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),ut.setValue(I,"boneTexture",Rt.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}D.isBatchedMesh&&(ut.setOptional(I,D,"batchingTexture"),ut.setValue(I,"batchingTexture",D._matricesTexture,y));const oa=O.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0&&Te.isWebGL2===!0)&&Be.update(D,O,Ei),(dr||Oe.receiveShadow!==D.receiveShadow)&&(Oe.receiveShadow=D.receiveShadow,ut.setValue(I,"receiveShadow",D.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Ti.envMap.value=ye,Ti.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),dr&&(ut.setValue(I,"toneMappingExposure",M.toneMappingExposure),Oe.needsLights&&ff(Ti,sa),re&&F.fog===!0&&ne.refreshFogUniforms(Ti,re),ne.refreshMaterialUniforms(Ti,F,X,V,fe),jr.upload(I,Do(Oe),Ti,y)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(jr.upload(I,Do(Oe),Ti,y),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ut.setValue(I,"center",D.center),ut.setValue(I,"modelViewMatrix",D.modelViewMatrix),ut.setValue(I,"normalMatrix",D.normalMatrix),ut.setValue(I,"modelMatrix",D.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Rt=F.uniformsGroups;for(let la=0,gf=Rt.length;la<gf;la++)if(Te.isWebGL2){const Oo=Rt[la];Ve.update(Oo,Ei),Ve.bind(Oo,Ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ei}function ff(x,P){x.ambientLightColor.needsUpdate=P,x.lightProbe.needsUpdate=P,x.directionalLights.needsUpdate=P,x.directionalLightShadows.needsUpdate=P,x.pointLights.needsUpdate=P,x.pointLightShadows.needsUpdate=P,x.spotLights.needsUpdate=P,x.spotLightShadows.needsUpdate=P,x.rectAreaLights.needsUpdate=P,x.hemisphereLights.needsUpdate=P}function mf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,P,O){Pe.get(x.texture).__webglTexture=P,Pe.get(x.depthTexture).__webglTexture=O;const F=Pe.get(x);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,P){const O=Pe.get(x);O.__webglFramebuffer=P,O.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(x,P=0,O=0){A=x,L=P,R=O;let F=!0,D=null,re=!1,me=!1;if(x){const Me=Pe.get(x);Me.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(I.FRAMEBUFFER,null),F=!1):Me.__webglFramebuffer===void 0?y.setupRenderTarget(x):Me.__hasExternalTextures&&y.rebindTextures(x,Pe.get(x.texture).__webglTexture,Pe.get(x.depthTexture).__webglTexture);const ye=x.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(me=!0);const ze=Pe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ze[P])?D=ze[P][O]:D=ze[P],re=!0):Te.isWebGL2&&x.samples>0&&y.useMultisampledRTT(x)===!1?D=Pe.get(x).__webglMultisampledFramebuffer:Array.isArray(ze)?D=ze[O]:D=ze,E.copy(x.viewport),H.copy(x.scissor),G=x.scissorTest}else E.copy(J).multiplyScalar(X).floor(),H.copy($).multiplyScalar(X).floor(),G=oe;if(ue.bindFramebuffer(I.FRAMEBUFFER,D)&&Te.drawBuffers&&F&&ue.drawBuffers(x,D),ue.viewport(E),ue.scissor(H),ue.setScissorTest(G),re){const Me=Pe.get(x.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,Me.__webglTexture,O)}else if(me){const Me=Pe.get(x.texture),ye=P||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.__webglTexture,O||0,ye)}K=-1},this.readRenderTargetPixels=function(x,P,O,F,D,re,me){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Pe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){ue.bindFramebuffer(I.FRAMEBUFFER,Me);try{const ye=x.texture,ze=ye.format,Ue=ye.type;if(ze!==Pt&&ce.convert(ze)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Ue===tr&&(_e.has("EXT_color_buffer_half_float")||Te.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ue!==ei&&ce.convert(Ue)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===ii&&(Te.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=x.width-F&&O>=0&&O<=x.height-D&&I.readPixels(P,O,F,D,ce.convert(ze),ce.convert(Ue),re)}finally{const ye=A!==null?Pe.get(A).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(x,P,O=0){const F=Math.pow(2,-O),D=Math.floor(P.image.width*F),re=Math.floor(P.image.height*F);y.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,x.x,x.y,D,re),ue.unbindTexture()},this.copyTextureToTexture=function(x,P,O,F=0){const D=P.image.width,re=P.image.height,me=ce.convert(O.format),Me=ce.convert(O.type);y.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment),P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,x.x,x.y,D,re,me,Me,P.image.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,x.x,x.y,P.mipmaps[0].width,P.mipmaps[0].height,me,P.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,F,x.x,x.y,me,Me,P.image),F===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(x,P,O,F,D=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const re=x.max.x-x.min.x+1,me=x.max.y-x.min.y+1,Me=x.max.z-x.min.z+1,ye=ce.convert(F.format),ze=ce.convert(F.type);let Ue;if(F.isData3DTexture)y.setTexture3D(F,0),Ue=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)y.setTexture2DArray(F,0),Ue=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const De=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),rt=I.getParameter(I.UNPACK_SKIP_PIXELS),wt=I.getParameter(I.UNPACK_SKIP_ROWS),Zt=I.getParameter(I.UNPACK_SKIP_IMAGES),Je=O.isCompressedTexture?O.mipmaps[D]:O.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Je.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,x.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,x.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,x.min.z),O.isDataTexture||O.isData3DTexture?I.texSubImage3D(Ue,D,P.x,P.y,P.z,re,me,Me,ye,ze,Je.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ue,D,P.x,P.y,P.z,re,me,Me,ye,Je.data)):I.texSubImage3D(Ue,D,P.x,P.y,P.z,re,me,Me,ye,ze,Je),I.pixelStorei(I.UNPACK_ROW_LENGTH,De),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,rt),I.pixelStorei(I.UNPACK_SKIP_ROWS,wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt),D===0&&F.generateMipmaps&&I.generateMipmap(Ue),ue.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?y.setTextureCube(x,0):x.isData3DTexture?y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?y.setTexture2DArray(x,0):y.setTexture2D(x,0),ue.unbindTexture()},this.resetState=function(){L=0,R=0,A=null,ue.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===xn?"display-p3":"srgb",t.unpackColorSpace=ke.workingColorSpace===mr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ot?pi:Qa}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===pi?ot:Vt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Xp extends ho{}Xp.prototype.isWebGL1Renderer=!0;class Jn{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=i}clone(){return new Jn(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class jp extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class uo extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const po=new U,fo=new U,mo=new Qe,Qn=new ps,Yr=new Tr;class qp extends at{constructor(e=new Kt,t=new uo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,a=t.count;n<a;n++)po.fromBufferAttribute(t,n-1),fo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=po.distanceTo(fo);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(n),Yr.radius+=a,e.ray.intersectsSphere(Yr)===!1)return;mo.copy(n).invert(),Qn.copy(e.ray).applyMatrix4(mo);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new U,h=new U,p=new U,d=new U,m=this.isLineSegments?2:1,_=i.index,v=i.attributes.position;if(_!==null){const f=Math.max(0,o.start),u=Math.min(_.count,o.start+o.count);for(let T=f,M=u-1;T<M;T+=m){const w=_.getX(T),L=_.getX(T+1);if(c.fromBufferAttribute(v,w),h.fromBufferAttribute(v,L),Qn.distanceSqToSegment(c,h,d,p)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:p.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),u=Math.min(v.count,o.start+o.count);for(let T=f,M=u-1;T<M;T+=m){if(c.fromBufferAttribute(v,T),h.fromBufferAttribute(v,T+1),Qn.distanceSqToSegment(c,h,d,p)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:p.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}}const go=new U,_o=new U;class Yp extends qp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,a=t.count;n<a;n+=2)go.fromBufferAttribute(t,n),_o.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+go.distanceTo(_o);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $n extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$a,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const vo={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Kp{constructor(e,t,i){const n=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){s++,a===!1&&n.onStart!==void 0&&n.onStart(h,o,s),a=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,s),o===s&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){const p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,d=c.length;p<d;p+=2){const m=c[p],_=c[p+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const Zp=new Kp;class ea{constructor(e){this.manager=e!==void 0?e:Zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ea.DEFAULT_MATERIAL_NAME="__DEFAULT";class Jp extends ea{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=vo.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const s=nr("img");function l(){h(),vo.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(p){h(),n&&n(p),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class xo extends ea{constructor(e){super(e)}load(e,t,i,n){const a=new xt,o=new Jp(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,n),a}}class Mo extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Qp extends Mo{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ta=new Qe,So=new U,yo=new U;class $p{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vn,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;So.setFromMatrixPosition(e.matrixWorld),t.position.copy(So),yo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yo),t.updateMatrixWorld(),ta.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ta),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ta)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ef extends $p{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tf extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new ef}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rf extends Yp{constructor(e=10,t=10,i=4473924,n=8947848){i=new Fe(i),n=new Fe(n);const a=t/2,o=e/t,s=e/2,l=[],c=[];for(let d=0,m=0,_=-s;d<=t;d++,_+=o){l.push(-s,0,_,s,0,_),l.push(_,0,-s,_,0,s);const v=d===a?i:n;v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3,v.toArray(c,m),m+=3}const h=new Kt;h.setAttribute("position",new It(l,3)),h.setAttribute("color",new It(c,3));const p=new uo({vertexColors:!0,toneMapped:!1});super(h,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sn}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sn);const nf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAABOElEQVR4nO3dQQ0AIAwEQYJBJODfBSJ4TJrsWNj0e11nuDvcXqEKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVACsAVgCsAFgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVACsAVgCsAFgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYATS9n/9L/y/41QVgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVACsAVgCsAFgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVACsAVgCsAFgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArADYA7d7Bgw+QW0wAAAAAElFTkSuQmCC",af="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAABN0lEQVR4nO3csQkAMQwEQeHK3fl/EQ4GwQ7XwaJUM3d279u9M6EKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVACsAVgCsAFgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVACsAVgCsAFgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYATj9QP91d/e6AKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVACsAVgCsAFgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVACsAVgCsAFgBsAJgBcAKgBUAKwBWAKwAWAGwAmAFwAqAFQArAFYArABYAbACYAXACoAVAPsBoTvAfaZHID0AAAAASUVORK5CYII=",Kr=await zo(()=>import("./rapier-KEdpT7OA.js").then(async r=>(await r.__tla,r)),__vite__mapDeps([])),Zr=document.querySelector("canvas");if(!Zr)throw new Error("No canvas element found!");const Jr=new ho({canvas:Zr,antialias:!0});Jr.shadowMap.enabled=!0;const $i=new bt(75);$i.position.z=5,$i.position.y=5,$i.rotation.x=Po(-35);const Eo=()=>{const r=Zr.getBoundingClientRect(),e=window.devicePixelRatio??1,t=r.width/r.height;Jr.setPixelRatio(e),Jr.setSize(r.width,r.height,!1),$i.aspect=t,$i.updateProjectionMatrix()};Eo(),uf(Zr,Eo);const li=new jp;li.background=new Fe("darkgrey"),li.fog=new Jn("darkgrey",10,50);const To=new Qp("white","grey",.5);To.position.set(0,20,0),li.add(To);const Qr=new tf("white",3);Qr.position.set(10,10,10),Qr.castShadow=!0,Qr.shadow.mapSize=new Ge(1024,1024),li.add(Qr);const ia=new xo().load(nf);ia.wrapT=hi,ia.wrapS=hi,new $n({map:ia});const ra=new xo().load(af);ra.wrapT=hi,ra.wrapS=hi;const sf=new $n({map:ra}),of=new $n({color:"white"}),$r=100,en=new rf($r,$r,0,0);en.material.opacity=.2,en.material.transparent=!0,en.position.y=.001,li.add(en);const lf=new Vr($r,$r),tn=new Ft(lf,of);tn.rotation.x=Po(-90),tn.receiveShadow=!0,li.add(tn);function bo(r,e=1){const t=r.geometry.getAttribute("position"),i=r.geometry.getAttribute("normal"),n=r.geometry.getAttribute("uv");for(let a=0;a<t.count;a++){let o=0,s=0;const l=Math.abs(i.getX(a)),c=Math.abs(i.getY(a)),h=Math.abs(i.getZ(a));l>=c&&l>=h&&(o=t.getZ(a),s=t.getY(a)),c>=l&&c>=h&&(o=t.getX(a),s=t.getZ(a)),h>=l&&h>=c&&(o=t.getX(a),s=t.getY(a)),n.setXY(a,o*e,s*e)}}bo(tn);const cf={x:0,y:-9.81,z:0},rn=new Kr.World(cf);rn.createCollider(Kr.ColliderDesc.cuboid(100,.1,100));let Ao=[],wo=6,hf=6,Ro=6;for(let r=0;r<wo;r++)for(let e=0;e<hf;e++)for(let t=0;t<Ro;t++){let i=Kr.RigidBodyDesc.dynamic().setTranslation(r*.5-wo/2*.5,e*.5+5,t*.5-Ro/2*.5),n=rn.createRigidBody(i),a=Kr.ColliderDesc.cuboid(.5/2,.5/2,.5/2);rn.createCollider(a,n);const o=new Ft(new Xi(.5,.5,.5),sf);o.castShadow=!0,o.receiveShadow=!0,bo(o),li.add(o),Ao.push({body:n,mesh:o})}function Co(){rn.step(),Ao.forEach(r=>{r.mesh.position.set(r.body.translation().x,r.body.translation().y,r.body.translation().z),r.mesh.quaternion.set(r.body.rotation().x,r.body.rotation().y,r.body.rotation().z,r.body.rotation().w)}),Jr.render(li,$i),requestAnimationFrame(Co)}Co();function uf(r,e){const t=new ResizeObserver(i=>{i.forEach(n=>{e(n.target)})});return t.observe(r),()=>{t.disconnect()}}function Po(r){return r*Math.PI/180}})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}