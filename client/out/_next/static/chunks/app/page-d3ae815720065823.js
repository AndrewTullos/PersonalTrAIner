(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3203:function(A,t,e){Promise.resolve().then(e.t.bind(e,1749,23)),Promise.resolve().then(e.t.bind(e,5250,23)),Promise.resolve().then(e.bind(e,6680)),Promise.resolve().then(e.bind(e,4914)),Promise.resolve().then(e.bind(e,8231)),Promise.resolve().then(e.bind(e,8697)),Promise.resolve().then(e.bind(e,1284)),Promise.resolve().then(e.bind(e,6937)),Promise.resolve().then(e.bind(e,4852)),Promise.resolve().then(e.bind(e,1016)),Promise.resolve().then(e.bind(e,9239)),Promise.resolve().then(e.bind(e,7609)),Promise.resolve().then(e.bind(e,1862)),Promise.resolve().then(e.bind(e,7824)),Promise.resolve().then(e.bind(e,989)),Promise.resolve().then(e.bind(e,6467)),Promise.resolve().then(e.bind(e,5219)),Promise.resolve().then(e.bind(e,9675)),Promise.resolve().then(e.bind(e,1254)),Promise.resolve().then(e.bind(e,2661)),Promise.resolve().then(e.bind(e,3589)),Promise.resolve().then(e.bind(e,4455)),Promise.resolve().then(e.bind(e,4239)),Promise.resolve().then(e.bind(e,7470)),Promise.resolve().then(e.bind(e,6314)),Promise.resolve().then(e.bind(e,1341)),Promise.resolve().then(e.bind(e,2071)),Promise.resolve().then(e.bind(e,819)),Promise.resolve().then(e.bind(e,84)),Promise.resolve().then(e.bind(e,8424))},6937:function(A,t,e){"use strict";e.r(t),e.d(t,{GrayscaleTransitionImage:function(){return B}});var i=e(7437),s=e(2265),r=e(6691),E=e.n(r),h=e(7909),a=e(4570),g=e(728),o=e(5258);let n=(0,h.E)(E());function B(A){let t=(0,s.useRef)(null),{scrollYProgress:e}=(0,a.v)({target:t,offset:["start 65%","end 35%"]}),r=(0,g.H)(e,[0,.5,1],[1,0,1]),h=o.Y`grayscale(${r})`;return(0,i.jsxs)("div",{ref:t,className:"group relative",children:[(0,i.jsx)(n,{alt:"",style:{filter:h},...A}),(0,i.jsx)("div",{className:"pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100","aria-hidden":"true",children:(0,i.jsx)(E(),{alt:"",...A})})]})}},4852:function(A,t,e){"use strict";e.r(t),e.d(t,{GridPattern:function(){return h}});var i=e(7437),s=e(2265),r=e(7909);function E(A){let{x:t,y:e,...s}=A;return(0,i.jsx)(r.E.path,{transform:`translate(${-32*e+96*t} ${160*e})`,d:"M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z",...s})}function h(A){let{yOffset:t=0,interactive:e=!1,...r}=A,h=(0,s.useId)(),a=(0,s.useRef)(null),g=(0,s.useRef)(),o=(0,s.useRef)(0),[n,B]=(0,s.useState)([]);return(0,s.useEffect)(()=>{if(e)return window.addEventListener("mousemove",A),()=>{window.removeEventListener("mousemove",A)};function A(A){var e,i;if(!a.current)return;let s=a.current.getBoundingClientRect(),r=A.clientX-s.left,E=A.clientY-s.top;!(r<0)&&!(E<0)&&!(r>s.width)&&!(E>s.height)&&(r=r-s.width/2-32,E-=t,r+=Math.tan(.2)*E,r=Math.floor(r/96),E=Math.floor(E/160),((null===(e=g.current)||void 0===e?void 0:e[0])!==r||(null===(i=g.current)||void 0===i?void 0:i[1])!==E)&&(g.current=[r,E],B(A=>{let t=o.current++;return[...A,[r,E,t]].filter(A=>!(A[0]===r&&A[1]===E&&A[2]!==t))})))}},[t,e]),(0,i.jsxs)("svg",{ref:a,"aria-hidden":"true",...r,children:[(0,i.jsx)("rect",{width:"100%",height:"100%",fill:`url(#${h})`,strokeWidth:"0"}),(0,i.jsxs)("svg",{x:"50%",y:t,strokeWidth:"0",className:"overflow-visible",children:[[[1,1],[2,2],[4,3],[6,2],[7,4],[5,5]].map(A=>(0,i.jsx)(E,{x:A[0],y:A[1]},`${A}`)),n.map(A=>(0,i.jsx)(E,{x:A[0],y:A[1],animate:{opacity:[0,1,0]},transition:{duration:1,times:[0,0,1]},onAnimationComplete:()=>{B(t=>t.filter(t=>t[2]!==A[2]))}},A[2]))]}),(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:h,width:"96",height:"480",x:"50%",patternUnits:"userSpaceOnUse",patternTransform:`translate(0 ${t})`,fill:"none",children:(0,i.jsx)("path",{d:"M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128"})})})]})}},6680:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/graduation.137b04f5.jpg",height:1600,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAABhEv/xAAWEAEBAQAAAAAAAAAAAAAAAAABAAP/2gAIAQEAAQUCdAv/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAXEAADAQAAAAAAAAAAAAAAAAAAARES/9oACAEBAAY/AphH/8QAFhAAAwAAAAAAAAAAAAAAAAAAAAEh/9oACAEBAAE/IXlx/9oADAMBAAIAAwAAABAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPxB//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Qj//EABcQAQEBAQAAAAAAAAAAAAAAAAFhANH/2gAIAQEAAT8QXKpDk3//2Q==",blurWidth:8,blurHeight:5}},4914:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/jars.8b4cb929.jpg",height:1800,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAG2B//EABYQAAMAAAAAAAAAAAAAAAAAAAESE//aAAgBAQABBQIvX//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/Aa//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPwGP/8QAGBAAAgMAAAAAAAAAAAAAAAAAABEhMTL/2gAIAQEABj8C1Do//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEhMYH/2gAIAQEAAT8hgOlMH//aAAwDAQACAAMAAAAQC//EABURAQEAAAAAAAAAAAAAAAAAAABB/9oACAEDAQE/EIf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAQf/aAAgBAgEBPxC3/8QAGRABAAIDAAAAAAAAAAAAAAAAAQARIVGx/9oACAEBAAE/EC0lqgJtWOz/2Q==",blurWidth:8,blurHeight:6}},8231:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/punch-clock.0f0ec94a.jpg",height:1600,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABkAp//8QAFhABAQEAAAAAAAAAAAAAAAAAAQMC/9oACAEBAAEFAo7Wn//EABURAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDAQE/AZf/xAAWEQADAAAAAAAAAAAAAAAAAAAAAjH/2gAIAQIBAT8Ban//xAAWEAEBAQAAAAAAAAAAAAAAAAABAIH/2gAIAQEABj8Cdb//xAAVEAEBAAAAAAAAAAAAAAAAAAAAcf/aAAgBAQABPyGxj//aAAwDAQACAAMAAAAQC//EABURAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEDAQE/EIf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EF//xAAYEAADAQEAAAAAAAAAAAAAAAABESEAMf/aAAgBAQABPxAkNCXtR3//2Q==",blurWidth:8,blurHeight:5}},9239:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-dark.1ff7dc9b.svg",height:36,width:184,blurWidth:0,blurHeight:0}},7609:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.456aa9d9.svg",height:36,width:184,blurWidth:0,blurHeight:0}},1862:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-dark.7370ef3f.svg",height:36,width:184,blurWidth:0,blurHeight:0}},7824:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.12f31c2f.svg",height:36,width:184,blurWidth:0,blurHeight:0}},989:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-dark.645d638e.svg",height:36,width:184,blurWidth:0,blurHeight:0}},6467:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.bfd3e7d6.svg",height:36,width:184,blurWidth:0,blurHeight:0}},5219:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-dark.e87ae13a.svg",height:36,width:184,blurWidth:0,blurHeight:0}},9675:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.da1195d8.svg",height:36,width:184,blurWidth:0,blurHeight:0}},1254:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-dark.ac5d2e8d.svg",height:36,width:184,blurWidth:0,blurHeight:0}},2661:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.249606f6.svg",height:36,width:184,blurWidth:0,blurHeight:0}},3589:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-dark.ad8a4f58.svg",height:36,width:184,blurWidth:0,blurHeight:0}},4455:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.e19f9c9b.svg",height:36,width:184,blurWidth:0,blurHeight:0}},4239:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-dark.353d4760.svg",height:36,width:184,blurWidth:0,blurHeight:0}},7470:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.ada2d552.svg",height:36,width:184,blurWidth:0,blurHeight:0}},6314:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-dark.4785dd63.svg",height:36,width:184,blurWidth:0,blurHeight:0}},1341:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/logo-light.f6ce2960.svg",height:36,width:184,blurWidth:0,blurHeight:0}},2071:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/laptop.22dcb094.jpg",height:3e3,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABiCf/xAAWEAEBAQAAAAAAAAAAAAAAAAACAAT/2gAIAQEAAQUCWxG//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAGBAAAwEBAAAAAAAAAAAAAAAAAQMRMQD/2gAIAQEABj8CjGWYAM7/xAAYEAACAwAAAAAAAAAAAAAAAAAAASFRYf/aAAgBAQABPyHLYhhR/9oADAMBAAIAAwAAABAL/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8Qj//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPxB0/8QAGRAAAgMBAAAAAAAAAAAAAAAAASEAETFR/9oACAEBAAE/ED14mU2Y5yf/2Q==",blurWidth:6,blurHeight:8}},819:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/meeting.0efc6edc.jpg",height:1600,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABuEv/xAAWEAEBAQAAAAAAAAAAAAAAAAACAwH/2gAIAQEAAQUCnrU//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Br//EABYRAAMAAAAAAAAAAAAAAAAAAAABMf/aAAgBAgEBPwFQ/8QAFxABAAMAAAAAAAAAAAAAAAAAEgAhMv/aAAgBAQAGPwJO9T//xAAYEAEAAwEAAAAAAAAAAAAAAAABABFBUf/aAAgBAQABPyE+1Yx2f//aAAwDAQACAAMAAAAQ9//EABURAQEAAAAAAAAAAAAAAAAAAAAx/9oACAEDAQE/ELf/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPxBs/8QAGRABAAIDAAAAAAAAAAAAAAAAEQABMUFh/9oACAEBAAE/EFBNbRrg4T//2Q==",blurWidth:8,blurHeight:5}},84:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/me.f48ad824.jpg",height:1e3,width:1e3,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABvCP/xAAWEAADAAAAAAAAAAAAAAAAAAABERT/2gAIAQEAAQUCZr//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAZEAACAwEAAAAAAAAAAAAAAAABEQASI2H/2gAIAQEABj8CehDrwT//xAAZEAEAAgMAAAAAAAAAAAAAAAABESEAMfD/2gAIAQEAAT8hhbqwQ6uvP//aAAwDAQACAAMAAAAQ/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPxCv/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Qj//EABgQAQADAQAAAAAAAAAAAAAAAAERITEA/9oACAEBAAE/EF1OAlpmMRdtdT3/2Q==",blurWidth:8,blurHeight:8}},8424:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/whiteboard.2d6ee65a.jpg",height:1800,width:2400,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/aAAwDAQACEAMQAAABoGn/AP/EABcQAQADAAAAAAAAAAAAAAAAAAEAAgT/2gAIAQEAAQUCtoSf/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQMAAiH/2gAIAQMBAT8BaywOT//EABcRAAMBAAAAAAAAAAAAAAAAAAABAwL/2gAIAQIBAT8BnPLR/8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEhMTL/2gAIAQEABj8Cyrg//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAERMVH/2gAIAQEAAT8hXq7aT//aAAwDAQACAAMAAAAQ/wD/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAwEBPxAMK//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPxDSJf/EABgQAQADAQAAAAAAAAAAAAAAAAEAEUFR/9oACAEBAAE/EOYpZAHEZ//Z",blurWidth:8,blurHeight:6}}},function(A){A.O(0,[314,749,13,284,971,938,744],function(){return A(A.s=3203)}),_N_E=A.O()}]);