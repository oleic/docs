(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(139)),c={id:"mapping-godaddy",title:"Mapping Domain from GoDaddy"},i={unversionedId:"mapping-godaddy",id:"mapping-godaddy",isDocsHomePage:!1,title:"Mapping Domain from GoDaddy",description:"This section covers how to map a domain hosted or purchased on GoDaddy to Hashnode.",source:"@site/docs/mapping-godaddy.md",slug:"/mapping-godaddy",permalink:"/docs/mapping-godaddy",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/mapping-godaddy.md",version:"current"},p=[],l={toc:p};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section covers how to map a domain hosted or purchased on GoDaddy to Hashnode."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Create an account on ",Object(r.b)("a",{parentName:"li",href:"https://www.godaddy.com/hosting"},"GoDaddy"),". ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1611179630405/GdUQMW8EU.png?auto=compress",alt:"GoDaddy Homepage"})),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Purchase your preferred domain.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After completing the purchase, you will be redirected to the product page. Here, you will see your domain."))),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1611180845987/xntjkGFbX.png?auto=compress",alt:"Domain name"})),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"On the domain card, click on the ",Object(r.b)("strong",{parentName:"li"},"Kebab menu icon")," and select ",Object(r.b)("strong",{parentName:"li"},"Manage DNS"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1611179781074/zkCvOsACE.png?auto=compress",alt:"Domain Card"})),Object(r.b)("ol",{start:5},Object(r.b)("li",{parentName:"ol"},"Click on the ",Object(r.b)("strong",{parentName:"li"},"Add")," button on the DNS management page to add the ",Object(r.b)("inlineCode",{parentName:"li"},"A record")," on your domain.")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1611180996708/jNpmbSdZX.png?auto=compress",alt:"Add Button"})),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"Select ",Object(r.b)("inlineCode",{parentName:"li"},"A")," as the type, and add ",Object(r.b)("inlineCode",{parentName:"li"},"@")," or  ",Object(r.b)("inlineCode",{parentName:"li"},"blog")," as the host. Finally, point it to ",Object(r.b)("inlineCode",{parentName:"li"},"192.241.200.144"),".")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1611179878013/XY7ZtaCrx.png?auto=compress",alt:"A record"})),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"Click on ",Object(r.b)("strong",{parentName:"li"},"Save"),".")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Domain propagation (the process whereby nameservers update across the internet to reflect a change in a domain's DNS record) takes 0 - 48 hours to start working in all locations across the internet. Once your domain propagates, we will automatically provision an SSL certificate for you when you visit your blog for the first time.")))}d.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,u=s["".concat(c,".").concat(m)]||s[m]||b[m]||r;return n?o.a.createElement(u,i(i({ref:t},l),{},{components:n})):o.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);