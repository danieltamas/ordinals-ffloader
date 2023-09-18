// © 2023 Daniel Tamas <https://twitter.com/dani_wam>
// The fflate code is an adaptation to use the bare
// minimum functionality of the npm fflate package.
// Read more here about how to use it: 
// https://github.com/danieltamas/ordinals-ffloader
//
// Read more here https://www.npmjs.com/package/fflate
// The fflate package has been created and developed by
// 101arrowz -> thank you for making the web faster and
// bitcoin text based inscriptions (json, javascript, txt, etc )
// smaller
// 
// The purpose of this simple loader is to help people use it
// easier and configurable, without the need of parsing this code
// from other inscriptions ( bad practice ) and to encourage
// compressing of data when storing it on blockchains
//
// The code regarding the compression was not created by
// me. The current inscription is a simple user friendly
// utility to help others build better.
//
// At the time of inscribing this, the cost to put it
// on Bitcoin was 0.00055000 BTC. Do make use of it and
// build awesome stuff using recursiveness and ordinals and more.

(async() => {
    try {
        const u=Uint8Array,A=Uint16Array,_=Uint32Array,rr=new u([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),nr=new u([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pr=new u([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tr=function(r,t){for(var n=new A(31),e=0;e<31;++e)n[e]=t+=1<<r[e-1];for(var i=new _(n[30]),e=1;e<30;++e)for(var s=n[e];s<n[e+1];++s)i[s]=s-n[e]<<5|e;return[n,i]},er=tr(rr,2),ir=er[0],gr=er[1];ir[28]=258,gr[258]=28;var ar=tr(nr,0),yr=ar[0],Fr=ar[1],q=new A(32768);for(o=0;o<32768;++o)m=(o&43690)>>>1|(o&21845)<<1,m=(m&52428)>>>2|(m&13107)<<2,m=(m&61680)>>>4|(m&3855)<<4,q[o]=((m&65280)>>>8|(m&255)<<8)>>>1;var m,o,C=function(r,t,n){for(var e=r.length,i=0,s=new A(t);i<e;++i)r[i]&&++s[r[i]-1];var c=new A(t);for(i=0;i<t;++i)c[i]=c[i-1]+s[i-1]<<1;var h;if(n){h=new A(1<<t);var a=15-t;for(i=0;i<e;++i)if(r[i])for(var f=i<<4|r[i],p=t-r[i],w=c[r[i]-1]++<<p,z=w|(1<<p)-1;w<=z;++w)h[q[w]>>>a]=f}else for(h=new A(e),i=0;i<e;++i)r[i]&&(h[i]=q[c[r[i]-1]++]>>>15-r[i]);return h},F=new u(288);for(o=0;o<144;++o)F[o]=8;var o;for(o=144;o<256;++o)F[o]=9;var o;for(o=256;o<280;++o)F[o]=7;var o;for(o=280;o<288;++o)F[o]=8;var o,or=new u(32);for(o=0;o<32;++o)or[o]=5;var o;var wr=C(F,9,1);var mr=C(or,5,1),R=function(r){for(var t=r[0],n=1;n<r.length;++n)r[n]>t&&(t=r[n]);return t},l=function(r,t,n){var e=t/8|0;return(r[e]|r[e+1]<<8)>>(t&7)&n},$=function(r,t){var n=t/8|0;return(r[n]|r[n+1]<<8|r[n+2]<<16)>>(t&7)},xr=function(r){return(r+7)/8|0},fr=function(r,t,n){(t==null||t<0)&&(t=0),(n==null||n>r.length)&&(n=r.length);var e=new(r.BYTES_PER_ELEMENT==2?A:r.BYTES_PER_ELEMENT==4?_:u)(n-t);return e.set(r.subarray(t,n)),e};var zr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(r,t,n){var e=new Error(t||zr[r]);if(e.code=r,Error.captureStackTrace&&Error.captureStackTrace(e,y),!n)throw e;return e},Ar=function(r,t,n){var e=r.length;if(!e||n&&n.f&&!n.l)return t||new u(0);var i=!t||n,s=!n||n.i;n||(n={}),t||(t=new u(e*3));var c=function(X){var d=t.length;if(X>d){var b=new u(Math.max(d*2,X));b.set(t),t=b}},h=n.f||0,a=n.p||0,f=n.b||0,p=n.l,w=n.d,z=n.m,U=n.n,I=e*8;do{if(!p){h=l(r,a,1);var B=l(r,a+1,3);if(a+=3,B)if(B==1)p=wr,w=mr,z=9,U=5;else if(B==2){var G=l(r,a,31)+257,Y=l(r,a+10,15)+4,W=G+l(r,a+5,31)+1;a+=14;for(var S=new u(W),O=new u(19),v=0;v<Y;++v)O[pr[v]]=l(r,a+v*3,7);a+=Y*3;for(var j=R(O),vr=(1<<j)-1,hr=C(O,j,1),v=0;v<W;){var J=hr[l(r,a,vr)];a+=J&15;var g=J>>>4;if(g<16)S[v++]=g;else{var M=0,E=0;for(g==16?(E=3+l(r,a,3),a+=2,M=S[v-1]):g==17?(E=3+l(r,a,7),a+=3):g==18&&(E=11+l(r,a,127),a+=7);E--;)S[v++]=M}}var K=S.subarray(0,G),x=S.subarray(G);z=R(K),U=R(x),p=C(K,z,1),w=C(x,U,1)}else y(1);else{var g=xr(a)+4,Z=r[g-4]|r[g-3]<<8,k=g+Z;if(k>e){s&&y(0);break}i&&c(f+Z),t.set(r.subarray(g,k),f),n.b=f+=Z,n.p=a=k*8,n.f=h;continue}if(a>I){s&&y(0);break}}i&&c(f+131072);for(var lr=(1<<z)-1,cr=(1<<U)-1,L=a;;L=a){var M=p[$(r,a)&lr],T=M>>>4;if(a+=M&15,a>I){s&&y(0);break}if(M||y(2),T<256)t[f++]=T;else if(T==256){L=a,p=null;break}else{var Q=T-254;if(T>264){var v=T-257,D=rr[v];Q=l(r,a,(1<<D)-1)+ir[v],a+=D}var P=w[$(r,a)&cr],N=P>>>4;P||y(3),a+=P&15;var x=yr[N];if(N>3){var D=nr[N];x+=$(r,a)&(1<<D)-1,a+=D}if(a>I){s&&y(0);break}i&&c(f+131072);for(var V=f+Q;f<V;f+=4)t[f]=t[f-x],t[f+1]=t[f+1-x],t[f+2]=t[f+2-x],t[f+3]=t[f+3-x];f=V}}n.l=p,n.p=L,n.b=f,n.f=h,p&&(h=1,n.m=z,n.d=w,n.n=U)}while(!h);return f==t.length?t:fr(t,0,f)};var Mr=new u(0);var Tr=function(r){(r[0]!=31||r[1]!=139||r[2]!=8)&&y(6,"invalid gzip data");var t=r[3],n=10;t&4&&(n+=r[10]|(r[11]<<8)+2);for(var e=(t>>3&1)+(t>>4&1);e>0;e-=!r[n++]);return n+(t&2)},Ur=function(r){var t=r.length;return(r[t-4]|r[t-3]<<8|r[t-2]<<16|r[t-1]<<24)>>>0};function sr(r,t){return Ar(r.subarray(Tr(r),-8),t||new u(Ur(r)))}var H=typeof TextDecoder<"u"&&new TextDecoder,Sr=0;try{H.decode(Mr,{stream:!0}),Sr=1}catch{}var Dr=function(r){for(var t="",n=0;;){var e=r[n++],i=(e>127)+(e>223)+(e>239);if(n+i>r.length)return[t,fr(r,n-1)];i?i==3?(e=((e&15)<<18|(r[n++]&63)<<12|(r[n++]&63)<<6|r[n++]&63)-65536,t+=String.fromCharCode(55296|e>>10,56320|e&1023)):i&1?t+=String.fromCharCode((e&31)<<6|r[n++]&63):t+=String.fromCharCode((e&15)<<12|(r[n++]&63)<<6|r[n++]&63):t+=String.fromCharCode(e)}};function ur(r,t){if(t){for(var n="",e=0;e<r.length;e+=16384)n+=String.fromCharCode.apply(null,r.subarray(e,e+16384));return n}else{if(H)return H.decode(r);var i=Dr(r),s=i[0],c=i[1];return c.length&&y(8),s}}"function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout&&setTimeout;(typeof self!='undefined'?self:window).fflate={gunzipSync:sr,strFromU8:ur};

        const { strFromU8, gunzipSync } = window.fflate;
        const { searchParams } = new URL(window.location);
        const inscriptionId = searchParams.get('inscriptionId');

        if(!inscriptionId){
            throw new Error('Please provide an inscription id');
        }

        const inscription = await fetch(`/content/${inscriptionId}`);

        if(!inscription || [400,404].includes(inscription.status)){
            throw new Error(inscription.statusText);
        }
        
        const buffer = await inscription.arrayBuffer();
        const script = strFromU8(gunzipSync(new Uint8Array(buffer)));
        
        const el = document.createElement('script');
        el.innerHTML = script;
        document.head.appendChild(el);
    }catch(err){
        console.error('[ fflate error ]', err.message)
    }
})()