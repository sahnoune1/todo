(()=>{"use strict";function e(e,t,n,o){const l=`listFoot${t}`;let i=JSON.parse(localStorage.getItem(l))||[];for(let t=0;t<n.length;t++){const r=`foot4-${t}`;n[t].classList.add(r),n[t].addEventListener("click",(()=>{n[t].parentNode.remove(),e.innerHTML="";const r=o.querySelectorAll(".foot1");console.log(r),i=[];for(let e=0;e<r.length;e++)i.push(r[e].innerHTML);localStorage.setItem(l,JSON.stringify(i)),console.log(i)}))}}function t(e,t,n,o,l){t.setAttribute("type","text"),t.setAttribute("id","titles"),t.setAttribute("name","title"),t.setAttribute("value",l),t.setAttribute("required",!0),e.appendChild(t),n.setAttribute("type","submit"),n.setAttribute("id","submits"),n.setAttribute("value","submit"),e.appendChild(n),o.setAttribute("type","button"),o.setAttribute("id","submit"),o.setAttribute("value","cancel"),e.appendChild(o)}function n(e,n,o,l,i,r){const s=`listFoot${o}`;let c=JSON.parse(localStorage.getItem(s))||[];e.addEventListener("click",(()=>{let e=!1,d=n.querySelector(`.middleForm.form${o}`);const a=r.querySelector(".foot1");if(d&&(e=!0,n.removeChild(d)),!e&&!n.innerHTML){d=document.createElement("form"),d.setAttribute("class",`middleForm form${o}`),n.appendChild(d);const e=document.createElement("input"),r=document.createElement("input"),u=document.createElement("input");t(d,e,r,u,a.innerHTML),u.addEventListener("click",(()=>{n.innerHTML=""})),d.addEventListener("submit",(t=>{const o=c.indexOf(a.innerHTML);console.log(o),console.log(c[o]),t.preventDefault(),l.innerHTML=e.value,e.innerHTML="",n.removeChild(d);const r=i.querySelectorAll(".foot1");c=[];for(let e=0;e<r.length;e++)c.push(r[e].innerHTML);localStorage.setItem(s,JSON.stringify(c))}))}}))}function o(o,l,i,r,s,c,d){console.log("piss");const a=`listFoot${r}`;let u=JSON.parse(localStorage.getItem(a))||[];if(u)for(const t of u){const l=document.createElement("div");l.setAttribute("class","foot1");const i=document.createElement("button");i.setAttribute("class","foot4"),i.innerHTML="delete";const d=document.createElement("button");d.setAttribute("class","foot5"),d.innerHTML="EDIT";const a=document.createElement("div");a.classList.add("fat",`fat${r}`),a.appendChild(l),a.appendChild(i),a.appendChild(d),c.appendChild(a),l.innerHTML=t;const u=o.querySelectorAll(".foot4");console.log(u),e(s,r,u,o),n(d,s,r,l,o,a)}l.addEventListener("click",(()=>{if(!i[r]&&!s.innerHTML){const m=document.createElement("form");m.setAttribute("class",`formMiddle form${r}`),s.appendChild(m);const p=document.createElement("input"),b=document.createElement("input"),f=document.createElement("input");n=m,a=b,u=f,(l=p).setAttribute("type","text"),l.setAttribute("id","titles"),l.setAttribute("name","title"),l.setAttribute("placeholder","title"),l.setAttribute("required",!0),l.setAttribute("maxlength","10"),l.setAttribute("minlength","3"),n.appendChild(l),a.setAttribute("type","submit"),a.setAttribute("id","submits"),a.setAttribute("value","submit"),n.appendChild(a),u.setAttribute("type","button"),u.setAttribute("id","submit"),u.setAttribute("value","cancel"),n.appendChild(u),function(e,t,n,o){e.addEventListener("click",(()=>{t.innerHTML="",o[n]=null}))}(f,s,r,i),i[r]=m,console.log(i[r]),function(n,o,l,i,r,s,c,d){const a=`listFoot${c}`;let u=JSON.parse(localStorage.getItem(a))||[];o.addEventListener("submit",(m=>{m.preventDefault();const p=document.createElement("div");p.setAttribute("class","foot1");const b=document.createElement("button");b.setAttribute("class","foot4"),b.innerHTML="delete";const f=document.createElement("button");f.setAttribute("class","foot5"),f.innerHTML="EDIT";const A=document.createElement("div");A.classList.add("fat",`fat${c}`),A.appendChild(p),A.appendChild(b),A.appendChild(f),l.appendChild(A),i=d.value,p.innerHTML=i,u||(u=[]),u.push(p.innerHTML),d.value="",r.removeChild(o),s[c]=null;const g=n.querySelectorAll(".foot4");console.log(g),e(r,c,g,n),function(e,n,o,l,i,r){const s=`listFoot${o}`;let c=JSON.parse(localStorage.getItem(s))||[];e.addEventListener("click",(()=>{let e=!1,d=n.querySelector(`.middleForm.form${o}`);if(d&&(e=!0,n.removeChild(d)),!e&&!n.innerHTML){d=document.createElement("form"),d.setAttribute("class",`middleForm form${o}`),n.appendChild(d);const e=document.createElement("input"),a=document.createElement("input"),u=document.createElement("input");t(d,e,a,u,i),u.addEventListener("click",(()=>{n.innerHTML=""})),d.addEventListener("submit",(t=>{const o=c.indexOf(i);console.log(o),console.log(c[o]),t.preventDefault(),l.innerHTML=e.value,i=e.value,e.innerHTML="",n.removeChild(d);const a=r.querySelectorAll(".foot1");c=[];for(let e=0;e<a.length;e++)c.push(a[e].innerHTML);localStorage.setItem(s,JSON.stringify(c))}))}}))}(f,r,c,p,i,n),localStorage.setItem(a,JSON.stringify(u)),console.log("really?")}))}(o,m,c,d,s,i,r,p)}var n,l,a,u}))}function l(e,t,n,l,i){t.value="";let r=[];for(let t=0;t<e.children.length;t++)i[t].addEventListener("click",(()=>{let e=document.querySelector(`.page.project-${t}`);if(!e){e=document.createElement("div"),e.setAttribute("class",`page project-${t}`);const i=document.createElement("div");i.setAttribute("class","head"),i.innerHTML=`project${t}`;const s=document.createElement("div");s.setAttribute("class","middle");const c=document.createElement("div");c.setAttribute("class","foot"),e.appendChild(i),e.appendChild(s),e.appendChild(c),l.appendChild(e),o(e,i,r,t,s,c,n)}const i=document.querySelector(".page:not([style*='none'])");i&&i!==e&&(i.style.display="none"),e.style.display="block"}))}function i(e,t,n,o,i,r,s){e.addEventListener("click",(e=>{const c=e.target.parentNode.firstChild.innerHTML;t.removeChild(n);const d=o.findIndex((e=>e===c));let a=document.querySelector(`.project-${d}`);if(-1!==d){o.splice(d,1),a&&a.remove(),localStorage.removeItem(`listFoot${d}`);for(let e=d;e<o.length;e++){const t=`listFoot${e}`,n=localStorage.getItem(`listFoot${e+1}`);n&&(localStorage.setItem(t,n),localStorage.removeItem(`listFoot${e+1}`));const o=document.querySelector(`.project-${e+1}`);o&&(o.classList.remove(`project-${e+1}`),o.classList.add(`project-${e}`))}localStorage.setItem("listItems",JSON.stringify(o)),l(t,i,r,s,document.querySelectorAll(".last"))}console.log(t.children.length)}))}const r=document.querySelector(".add"),s=document.querySelector(".inside"),c=document.querySelector(".main");let d=[],a=[];r.addEventListener("click",(()=>{let e=document.querySelector(".form1");if(!e){e=document.createElement("form"),e.setAttribute("class","form1"),s.appendChild(e);const r=document.createElement("input");t=e,o=document.createElement("input"),(n=r).setAttribute("type","text"),n.setAttribute("id","title"),n.setAttribute("name","title"),n.setAttribute("maxlength","10"),n.setAttribute("minlength","3"),t.appendChild(n),o.setAttribute("type","submit"),o.setAttribute("id","submit"),o.setAttribute("value","submit"),t.appendChild(o),function(e,t,n,o,r,s,c){const d=document.querySelector(".list"),a=localStorage.getItem("listItems");if(a){r=JSON.parse(a);for(const e of r){const t=document.createElement("div");t.setAttribute("class","contour");const n=document.createElement("div");n.setAttribute("class","last"),n.innerHTML=e;const a=document.createElement("button");a.setAttribute("class","x"),a.innerHTML="delete",t.appendChild(n),t.appendChild(a),d.appendChild(t);const u=document.querySelectorAll(".last");l(d,o,s,c,u),i(a,d,t,r,o,s,c)}}e.addEventListener("submit",(e=>{if(e.preventDefault(),t=o.value,n.includes(t))return void alert("type again");n.push(t);const a=document.createElement("div");a.setAttribute("class","contour");const u=document.createElement("div");u.setAttribute("class","last"),u.innerHTML=t;const m=document.createElement("button");m.setAttribute("class","x"),m.innerHTML="delete",a.appendChild(u),a.appendChild(m),d.appendChild(a),r.push(t),localStorage.setItem("listItems",JSON.stringify(r));const p=document.querySelectorAll(".last");console.log(p.length),l(d,o,s,c,p),i(m,d,a,r,o,s,c)}))}(e,void 0,d,r,a,void 0,c)}var t,n,o}))})();