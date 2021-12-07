(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[508],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},h),{},{components:n})):r.createElement(m,i({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"===typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7446:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2021-12-07-waiting",function(){return n(8103)}])},8461:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"/",children:"Return home"})}),(0,r.jsx)("div",{className:"blog",children:t})]})}},8103:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});n(7294);var r=n(3905),a=n(8461);function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={},l=function(e){var t=e.children;return(0,r.kt)(a.default,null,t)};function c(e){var t=e.components,n=o(e,["components"]);return(0,r.kt)(l,Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Waiting for feedback"),(0,r.kt)("p",null,"Sometimes an issue comes up where an enhancement has damaged the core codebase\nand therefore there are bugs on the main branch"),(0,r.kt)("p",null,"Sometimes, basically removing the enhancement, or disabling it, will fix it"),(0,r.kt)("p",null,'So, I oftentimes will make a PR to this effect and say, "here is a fix, it\nbasically removes the enhancement, and fixes a bug. This is a bug users\ndefinitely will definitely run into, so we should probably merge this and\nrelease it so that they don\'t run into it". what I normally get in response to\nthis is crickets'),(0,r.kt)("p",null,"I can guess at some reasons why my coworkers are avoiding this issue maybe. For\nexample"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'they don\'t want to "duplicate work" by undoing the enhancement on the master\nbranch (and later redoing it)')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"they have pride in their feature and don't want to see it undone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"they are trying to be sensitive to the feelings of the person who originally\ndeveloped the enhancement, and avoid undoing it")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'they are not "satisfied" with the PR that removes the enhancement, and would\nrather see a fix to the enhancement'))),(0,r.kt)("p",null,"The reality though is there is often very little feedback on these PRs that I\nmake, so I just have to sit around with anxiety. There are currently at least 3\nof these on my codebase from enhancements I did not make, but which I created\nfixes for that basically rollback portions of these enhancements. Oftentimes\ntook me pretty deep debugging to even figure out that one weird enhancement had\nsuch a weird knock on effect to create bug X and so with the silence from my\nteam, i feel unappreciated in addition to all this."),(0,r.kt)("p",null,"This is, perhaps, not really unique to my particular scenario. The feelings\nthat I get from this, anxiety and feeling unappreciated, can happen in many\nother scenarios, exacerbated by remote work, pandemic, team culture, etc. I\nhope to work to make things better somehow though"))}c.isMDXComponent=!0}},function(e){e.O(0,[774,888,179],(function(){return t=7446,e(e.s=t);var t}));var t=e.O();_N_E=t}]);