import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const n="feedback-form-state",o=document.querySelector(".feedback-form"),t=o.querySelector("input"),a=o.querySelector("textarea");u();o.addEventListener("input",l);o.addEventListener("submit",m);function m(e){if(e.preventDefault(),t.value.trim()!==""&&a.value.trim()!==""){const r={email:t.value,message:a.value};console.log(r),localStorage.removeItem(n),e.currentTarget.reset()}}function l(){const e={email:t.value,message:a.value};localStorage.setItem(n,JSON.stringify(e))}function u(){const e=localStorage.getItem(n);if(e){const{email:r,message:s}=JSON.parse(e);t.value=r,a.value=s}}
//# sourceMappingURL=commonHelpers2.js.map
