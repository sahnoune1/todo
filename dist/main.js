(()=>{"use strict";function t(t,e,n,l){const o=`listFoot${e}`;let i=JSON.parse(localStorage.getItem(o))||[];for(let e=0;e<n.length;e++){const r=`foot4-${e}`;n[e].classList.add(r),n[e].addEventListener("click",(()=>{n[e].parentNode.remove(),t.innerHTML="";const r=l.querySelectorAll(".foot1");console.log(r),i=[];for(let t=0;t<r.length;t++)i.push(r[t].innerHTML);localStorage.setItem(o,JSON.stringify(i)),console.log(i)}))}}function e(t,e,n,l,o){e.setAttribute("type","text"),e.setAttribute("id","titles"),e.setAttribute("name","title"),e.setAttribute("value",o),e.setAttribute("required",!0),t.appendChild(e),n.setAttribute("type","submit"),n.setAttribute("id","submits"),n.setAttribute("value","submit"),t.appendChild(n),l.setAttribute("type","button"),l.setAttribute("id","submit"),l.setAttribute("value","cancel"),t.appendChild(l)}function n(t,n,l,o,i,r){const s=`listFoot${l}`;let c=JSON.parse(localStorage.getItem(s))||[];t.addEventListener("click",(()=>{let t=!1,d=n.querySelector(`.middleForm.form${l}`);const a=r.querySelector(".foot1");if(d&&(t=!0,n.removeChild(d)),!t&&!n.innerHTML){d=document.createElement("form"),d.setAttribute("class",`middleForm form${l}`),n.appendChild(d);const t=document.createElement("input"),r=document.createElement("input"),u=document.createElement("input");e(d,t,r,u,a.innerHTML),u.addEventListener("click",(()=>{n.innerHTML=""})),d.addEventListener("submit",(e=>{const l=c.indexOf(a.innerHTML);console.log(l),console.log(c[l]),e.preventDefault(),o.innerHTML=t.value,t.innerHTML="",n.removeChild(d);const r=i.querySelectorAll(".foot1");c=[];for(let t=0;t<r.length;t++)c.push(r[t].innerHTML);localStorage.setItem(s,JSON.stringify(c))}))}}))}function l(l,o,i,r,s,c,d){console.log("piss");const a=`listFoot${r}`;let u=JSON.parse(localStorage.getItem(a))||[];if(u)for(const e of u){const o=document.createElement("div");o.setAttribute("class","foot1");const i=document.createElement("button");i.setAttribute("class","foot4"),i.innerHTML="delete";const d=document.createElement("button");d.setAttribute("class","foot5"),d.innerHTML="EDIT";const a=document.createElement("div");a.classList.add("fat",`fat${r}`),a.appendChild(o),a.appendChild(i),a.appendChild(d),c.appendChild(a),o.innerHTML=e;const u=l.querySelectorAll(".foot4");console.log(u),t(s,r,u,l),n(d,s,r,o,l,a)}o.addEventListener("click",(()=>{if(!i[r]&&!s.innerHTML){const m=document.createElement("form");m.setAttribute("class",`formMiddle form${r}`),s.appendChild(m);const p=document.createElement("input"),b=document.createElement("input"),f=document.createElement("input");n=m,a=b,u=f,(o=p).setAttribute("type","text"),o.setAttribute("id","titles"),o.setAttribute("name","title"),o.setAttribute("placeholder","title"),o.setAttribute("required",!0),o.setAttribute("maxlength","10"),o.setAttribute("minlength","3"),n.appendChild(o),a.setAttribute("type","submit"),a.setAttribute("id","submits"),a.setAttribute("value","submit"),n.appendChild(a),u.setAttribute("type","button"),u.setAttribute("id","submit"),u.setAttribute("value","cancel"),n.appendChild(u),function(t,e,n,l){t.addEventListener("click",(()=>{e.innerHTML="",l[n]=null}))}(f,s,r,i),i[r]=m,console.log(i[r]),function(n,l,o,i,r,s,c,d){const a=`listFoot${c}`;let u=JSON.parse(localStorage.getItem(a))||[];l.addEventListener("submit",(m=>{m.preventDefault();const p=document.createElement("div");p.setAttribute("class","foot1");const b=document.createElement("button");b.setAttribute("class","foot4"),b.innerHTML="delete";const f=document.createElement("button");f.setAttribute("class","foot5"),f.innerHTML="EDIT";const v=document.createElement("div");v.classList.add("fat",`fat${c}`),v.appendChild(p),v.appendChild(b),v.appendChild(f),o.appendChild(v),i=d.value,p.innerHTML=i,u||(u=[]),u.push(p.innerHTML),d.value="",r.removeChild(l),s[c]=null;const A=n.querySelectorAll(".foot4");console.log(A),t(r,c,A,n),function(t,n,l,o,i,r){const s=`listFoot${l}`;let c=JSON.parse(localStorage.getItem(s))||[];t.addEventListener("click",(()=>{let t=!1,d=n.querySelector(`.middleForm.form${l}`);if(d&&(t=!0,n.removeChild(d)),!t&&!n.innerHTML){d=document.createElement("form"),d.setAttribute("class",`middleForm form${l}`),n.appendChild(d);const t=document.createElement("input"),a=document.createElement("input"),u=document.createElement("input");e(d,t,a,u,i),u.addEventListener("click",(()=>{n.innerHTML=""})),d.addEventListener("submit",(e=>{const l=c.indexOf(i);console.log(l),console.log(c[l]),e.preventDefault(),o.innerHTML=t.value,i=t.value,t.innerHTML="",n.removeChild(d);const a=r.querySelectorAll(".foot1");c=[];for(let t=0;t<a.length;t++)c.push(a[t].innerHTML);localStorage.setItem(s,JSON.stringify(c))}))}}))}(f,r,c,p,i,n),localStorage.setItem(a,JSON.stringify(u)),console.log("really?")}))}(l,m,c,d,s,i,r,p)}var n,o,a,u}))}function o(t,e,n,o,i){t.value="";let r=[];for(let t=0;t<i.length;t++)i[t].addEventListener("click",(()=>{let i=document.querySelector(`.page.project-${t}`);if(!i){i=document.createElement("div"),i.setAttribute("class",`page project-${t}`);const n=document.createElement("div");n.setAttribute("class","head"),n.innerHTML=`project${t}`;const s=document.createElement("div");s.setAttribute("class","middle");const c=document.createElement("div");c.setAttribute("class","foot"),i.appendChild(n),i.appendChild(s),i.appendChild(c),o.appendChild(i),l(i,n,r,t,s,c,e)}null!==n&&(n.style.display="none"),i.style.display="block",n=i}))}const i=document.querySelector(".add"),r=document.querySelector(".inside"),s=document.querySelector(".main");let c=[],d=[];i.addEventListener("click",(()=>{let t=document.querySelector(".form1");if(!t){t=document.createElement("form"),t.setAttribute("class","form1"),r.appendChild(t);const i=document.createElement("input");e=t,l=document.createElement("input"),(n=i).setAttribute("type","text"),n.setAttribute("id","title"),n.setAttribute("name","title"),n.setAttribute("maxlength","10"),n.setAttribute("minlength","3"),e.appendChild(n),l.setAttribute("type","submit"),l.setAttribute("id","submit"),l.setAttribute("value","submit"),e.appendChild(l),function(t,e,n,l,i,r,s,c){const d=document.querySelector(".list"),a=localStorage.getItem("listItems");if(a){i=JSON.parse(a);for(const t of i){const e=document.createElement("div");e.setAttribute("class","contour");const n=document.createElement("div");n.setAttribute("class","last"),n.innerHTML=t;const i=document.createElement("button");i.setAttribute("class","x"),i.innerHTML="delete",e.appendChild(n),e.appendChild(i),d.appendChild(e);const s=document.querySelectorAll(".last");o(l,r,null,c,s)}}t.addEventListener("submit",(t=>{if(t.preventDefault(),e=l.value,n.includes(e))return void alert("type again");n.push(e);const s=document.createElement("div");s.setAttribute("class","contour");const a=document.createElement("div");a.setAttribute("class","last"),a.innerHTML=e;const u=document.createElement("button");u.setAttribute("class","x"),u.innerHTML="delete",s.appendChild(a),s.appendChild(u),d.appendChild(s),i.push(e),localStorage.setItem("listItems",JSON.stringify(i));const m=document.querySelectorAll(".last");o(l,r,null,c,m),u.addEventListener("click",(t=>{const e=t.target.parentNode.firstChild.innerHTML;d.removeChild(s);const n=i.findIndex((t=>t===e));let l=document.querySelector(`.project-${n}`);if(-1!==n){i.splice(n,1),l&&l.remove(),localStorage.removeItem(`listFoot${n}`);for(let t=n;t<i.length;t++){const e=`listFoot${t}`,n=localStorage.getItem(`listFoot${t+1}`);n&&(localStorage.setItem(e,n),localStorage.removeItem(`listFoot${t+1}`));const l=document.querySelector(`.project-${t+1}`);l&&(l.classList.remove(`project-${t+1}`),l.classList.add(`project-${t}`))}localStorage.setItem("listItems",JSON.stringify(i))}}))}))}(t,void 0,c,i,d,void 0,0,s)}var e,n,l}))})();