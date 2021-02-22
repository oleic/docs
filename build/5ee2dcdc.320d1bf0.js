(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{139:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),b=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=b(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=b(r),m=a,d=l["".concat(c,".").concat(m)]||l[m]||s[m]||o;return r?n.a.createElement(d,p(p({ref:t},u),{},{components:r})):n.a.createElement(d,p({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var u=2;u<o;u++)c[u]=r[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return p})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),o=(r(0),r(139)),c={id:"github-backup",title:"Auto GitHub Backups"},p={unversionedId:"github-backup",id:"github-backup",isDocsHomePage:!1,title:"Auto GitHub Backups",description:"You can automatically backup your published posts as markdown files to a public or private repository on GitHub. Backups are also updated automatically upon any edit or delete change.",source:"@site/docs/github-backup.md",slug:"/github-backup",permalink:"/docs/github-backup",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/github-backup.md",version:"current"},i=[],u={toc:i};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can automatically backup your published posts as markdown files to a public or private repository on GitHub. Backups are also updated automatically upon any edit or delete change."),Object(o.b)("hr",null),Object(o.b)("p",null,"Here is how to set up automatic GitHub backups on your blog:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a ",Object(o.b)("a",{parentName:"p",href:"https://github.new/"},"new repository")," on GitHub to store your articles, probably named ",Object(o.b)("strong",{parentName:"p"},"hashnode-backups")," or ",Object(o.b)("strong",{parentName:"p"},"articles"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log in to your Hashnode account.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Click on your ",Object(o.b)("strong",{parentName:"p"},"profile picture")," at the bottom-left corner of the page on ",Object(o.b)("em",{parentName:"p"},"desktop")," screen or top-right corner on ",Object(o.b)("em",{parentName:"p"},"mobile")," screen."))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1600711465204/4Mb1R5qj8.png?auto=compress",alt:"Hashnode's Feed"})),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Click on the ",Object(o.b)("strong",{parentName:"li"},"Blog Dashboard")," option from the popup modal to access your blog's dashboard.")),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1601380906521/1QhsZ20tP.png?auto=compress",alt:"Hashnode's Feed"})),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to ",Object(o.b)("strong",{parentName:"p"},"BACKUP")," and click the ",Object(o.b)("strong",{parentName:"p"},"Hashnode GitHub App")," link provided to install the Hashnode GitHub App in the repository you created. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},'Select "one repository" (the repository you created) and click on ',Object(o.b)("strong",{parentName:"p"},"Save"),"."))),Object(o.b)("p",null,Object(o.b)("img",{parentName:"p",src:"https://cdn.hashnode.com/res/hashnode/image/upload/v1611067017327/gNs4WB9xS.png?auto=compress",alt:"Hashnode's Feed"})),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},"Upon successful installation, we will automatically backup your published articles to the created repository and update them upon any change.")))}b.isMDXComponent=!0}}]);