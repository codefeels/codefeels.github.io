(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[508],{3905:function(e,t,n){"use strict";n.d(t,{kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,h=f["".concat(s,".").concat(m)]||f[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"===typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7446:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2021-12-07-waiting",function(){return n(8103)}])},8461:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:(0,r.jsx)("a",{href:"/",children:"Return home"})}),(0,r.jsx)("div",{className:"blog",children:t})]})}},8103:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});n(7294);var r=n(3905),a=n(8461);function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o={},l=function(e){var t=e.children;return(0,r.kt)(a.default,null,t)};function s(e){var t=e.components,n=i(e,["components"]);return(0,r.kt)(l,Object.assign({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"Waiting for feedback"),(0,r.kt)("p",null,"Sometimes an issue comes up where an enhancement has damaged the core codebase\nand therefore there are bugs on the main branch"),(0,r.kt)("p",null,"Sometimes, basically removing the enhancement, or disabling it, will fix it"),(0,r.kt)("p",null,'So, I oftentimes will make a PR to this effect and say, "here is a fix, it\nbasically removes the enhancement, and fixes a bug. This is a bug users\ndefinitely will definitely run into, so we should probably merge this and\nrelease it so that they don\'t run into it". what I normally get in response to\nthis is crickets'),(0,r.kt)("p",null,"I can guess at some reasons why my coworkers are avoiding this issue maybe. For\nexample"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'they don\'t want to "duplicate work" by undoing the enhancement on the master\nbranch (and later redoing it)')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"they have pride in their feature and don't want to see it undone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"they are trying to be sensitive to the feelings of the person who originally\ndeveloped the enhancement, and avoid undoing it")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'they are not "satisfied" with the PR that removes the enhancement, and would\nrather see a fix to the enhancement')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"they are busy and don't have time to respond to requests to review, pings in\nchat messages, and tagged in pr comments"))),(0,r.kt)("p",null,"So, generally, there is very little feedback on these PRs, so I just have to\nsit around and feel anxious, and like a brat expecting people to care about\nthis thing. Oftentimes it took me a fair amount of debugging to even make such\na PR, since it is sometimes pretty unexpected why enhancement X would break\nsome core thing Y so the silence makes me feel unappreciated in addition to all\nthis."),(0,r.kt)("p",null,"Note that my team has generally not been great about code reviews so this is\njust an aspect to this, I fairly frequently merge my own PRs if they are small\nbut in a case where it rolls back someone's work, I definitely feel like\nincluding them in the review process."),(0,r.kt)("p",null,"Overall, this is not really just about waiting for feedback. It's about remote\nwork. It's about teamwork and communication and code review culture. It's also\na pandemic, everyones busy, dropping balls, etc. If I find ways to improve,\nwill update this post."))}s.isMDXComponent=!0}},function(e){e.O(0,[774,888,179],(function(){return t=7446,e(e.s=t);var t}));var t=e.O();_N_E=t}]);