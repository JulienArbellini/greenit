import{a as O,n as va,t as ra}from"./disclose-version.7pOt-K0F.js";import"./legacy.DBmJDQxd.js";import{a7 as ua,b as _a,am as sa,h as g,s as S,a as ha,ab as pa,O as da,ai as ta,H as ga,r as J,c as D,f as T,ae as ba,an as C,d as ia,e as la,p as xa,ao as wa,L as P,ap as q,aq as Q,ar as Y,as as ma,ah as Aa,at as ya,au as Na,a6 as Ea,av as ka,a3 as Ta,G as W,aw as Ma,aa as Ia,ax as B,N as za,ay as Ca,t as H,g as M,i as I,m as Ha,j as Z}from"./runtime.2SSwYnVA.js";import{p as V}from"./props.FQjrW_87.js";import{s as j}from"./render.B358DNcu.js";function La(e,a){return a}function Ra(e,a,r,s){for(var i=[],n=a.length,c=0;c<n;c++)ma(a[c].e,i,!0);var p=n>0&&i.length===0&&r!==null;if(p){var _=r.parentNode;Aa(_),_.append(r),s.clear(),N(e,a[0].prev,a[n-1].next)}ya(i,()=>{for(var m=0;m<n;m++){var u=a[m];p||(s.delete(u.k),N(e,u.prev,u.next)),Na(u.e,!p)}})}function Sa(e,a,r,s,i,n=null){var c=e,p={flags:a,items:new Map,first:null},_=(a&sa)!==0;if(_){var m=e;c=g?S(pa(m)):m.appendChild(ua())}g&&ha();var u=null,b=!1;_a(()=>{var h=r(),t=da(h)?h:h==null?[]:ta(h),o=t.length;if(b&&o===0)return;b=o===0;let v=!1;if(g){var E=c.data===ga;E!==(o===0)&&(c=J(),S(c),D(!1),v=!0)}if(g){for(var d=null,x,w=0;w<o;w++){if(T.nodeType===8&&T.data===ba){c=T,v=!0,D(!1);break}var A=t[w],l=s(A,w);x=na(T,p,d,null,A,l,w,i,a),p.items.set(l,x),d=x}o>0&&S(J())}if(!g){var f=Ea;Da(t,p,c,i,a,(f.f&C)!==0,s)}n!==null&&(o===0?u?ia(u):u=la(()=>n(c)):u!==null&&xa(u,()=>{u=null})),v&&D(!0),r()}),g&&(c=T)}function Da(e,a,r,s,i,n,c,p){var U,$,F,K;var _=(i&ka)!==0,m=(i&(q|Y))!==0,u=e.length,b=a.items,h=a.first,t=h,o,v=null,E,d=[],x=[],w,A,l,f;if(_)for(f=0;f<u;f+=1)w=e[f],A=c(w,f),l=b.get(A),l!==void 0&&((U=l.a)==null||U.measure(),(E??(E=new Set)).add(l));for(f=0;f<u;f+=1){if(w=e[f],A=c(w,f),l=b.get(A),l===void 0){var fa=t?t.e.nodes_start:r;v=na(fa,a,v,v===null?a.first:v.next,w,A,f,s,i),b.set(A,v),d=[],x=[],t=v.next;continue}if(m&&Oa(l,w,f,i),l.e.f&C&&(ia(l.e),_&&(($=l.a)==null||$.unfix(),(E??(E=new Set)).delete(l))),l!==t){if(o!==void 0&&o.has(l)){if(d.length<x.length){var z=x[0],y;v=z.prev;var G=d[0],L=d[d.length-1];for(y=0;y<d.length;y+=1)aa(d[y],z,r);for(y=0;y<x.length;y+=1)o.delete(x[y]);N(a,G.prev,L.next),N(a,v,G),N(a,L,z),t=z,v=L,f-=1,d=[],x=[]}else o.delete(l),aa(l,t,r),N(a,l.prev,l.next),N(a,l,v===null?a.first:v.next),N(a,v,l),v=l;continue}for(d=[],x=[];t!==null&&t.k!==A;)(n||!(t.e.f&C))&&(o??(o=new Set)).add(t),x.push(t),t=t.next;if(t===null)continue;l=t}d.push(l),v=l,t=l.next}if(t!==null||o!==void 0){for(var k=o===void 0?[]:ta(o);t!==null;)(n||!(t.e.f&C))&&k.push(t),t=t.next;var R=k.length;if(R>0){var ca=i&sa&&u===0?r:null;if(_){for(f=0;f<R;f+=1)(F=k[f].a)==null||F.measure();for(f=0;f<R;f+=1)(K=k[f].a)==null||K.fix()}Ra(a,k,ca,b)}}_&&wa(()=>{var X;if(E!==void 0)for(l of E)(X=l.a)==null||X.apply()}),P.first=a.first&&a.first.e,P.last=v&&v.e}function Oa(e,a,r,s){s&q&&Q(e.v,a),s&Y?Q(e.i,r):e.i=r}function na(e,a,r,s,i,n,c,p,_,m){var u=(_&q)!==0,b=(_&Ma)===0,h=u?b?Ta(i):W(i):i,t=_&Y?W(c):c,o={i:t,v:h,k:n,a:null,e:null,prev:r,next:s};try{return o.e=la(()=>p(e,h,t),g),o.e.prev=r&&r.e,o.e.next=s&&s.e,r===null?a.first=o:(r.next=o,r.e.next=o.e),s!==null&&(s.prev=o,s.e.prev=o.e),o}finally{}}function aa(e,a,r){for(var s=e.next?e.next.e.nodes_start:r,i=a?a.e.nodes_start:r,n=e.e.nodes_start;n!==s;){var c=Ia(n);i.before(n),n=c}}function N(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function Ba(e,a,r,s){var i=e.__attributes??(e.__attributes={});g&&(i[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||i[a]!==(i[a]=r)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[B]=r),r==null?e.removeAttribute(a):typeof r!="string"&&Va(e).includes(a)?e[a]=r:e.setAttribute(a,r))}var ea=new Map;function Va(e){var a=ea.get(e.nodeName);if(a)return a;ea.set(e.nodeName,a=[]);for(var r,s=e,i=Element.prototype;i!==s;){r=Ca(s);for(var n in r)r[n].set&&a.push(n);s=za(s)}return a}function Qa(e){if(!g&&e.loading==="lazy"){var a=e.src;e[B]=null,e.loading="eager",e.removeAttribute("src"),requestAnimationFrame(()=>{e[B]!=="eager"&&(e.loading="lazy"),e.src=a})}}function qa(e,a){var r=e.__className,s=oa(a);g&&e.getAttribute("class")===s?e.__className=s:(r!==s||g&&e.getAttribute("class")!==s)&&(s===""?e.removeAttribute("class"):e.setAttribute("class",s),e.__className=s)}function Ya(e,a){var r=e.__className,s=oa(a);g&&e.className===s?e.__className=s:(r!==s||g&&e.className!==s)&&(a==null?e.removeAttribute("class"):e.className=s,e.__className=s)}function oa(e){return e??""}var Ga=va('<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="w-full" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg" width="342" height="35"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"></path></svg>');function Wa(e,a){let r=V(a,"color",8,"fill-black");var s=Ga(),i=M(s);I(s),H(()=>qa(i,r())),O(e,s)}var Ua=ra('<a class="block rounded-md px-4 py-2 hover:bg-gray-200"> </a>'),$a=ra('<label for="sidebarToggle"> </label> <input type="checkbox" id="sidebarToggle" class="hidden svelte-19lms9i"> <label for="sidebarToggle" class="pointer-events-none absolute right-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 svelte-19lms9i"><section class="fixed right-0 top-0 z-50 h-screen w-80 translate-x-full transform bg-white bg-opacity-100 p-10 transition-all duration-300 svelte-19lms9i"><div class="mb-10 flex w-full justify-end"><label for="sidebarToggle" class="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></label></div> <!></section></label>',1);function Za(e,a){let r=V(a,"text",8),s=V(a,"textColor",8,"black");var i=$a(),n=Ha(i),c=M(n,!0);I(n);var p=Z(n,4),_=M(p),m=Z(M(_),2);Sa(m,0,()=>["x","y","s","3"],La,(u,b)=>{var h=Ua(),t=M(h);H(()=>j(t,`Model ${b.toUpperCase()??""}`)),I(h),H(()=>Ba(h,"href",`/model-${b??""}`)),O(u,h)}),I(_),I(p),H(()=>{Ya(n,`cursor-pointer bg-black bg-opacity-10 px-4 py-[0.3rem] font-big text-sm backdrop-blur-lg transition-all duration-300 hover:bg-opacity-30 ${s()??""} rounded`),j(c,r())}),O(e,i)}export{Wa as L,Za as M,Ya as a,Sa as e,Qa as h,La as i,Ba as s};