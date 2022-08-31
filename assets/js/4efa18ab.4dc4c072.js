"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2049],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),c=l(t),d=a,f=c["".concat(u,".").concat(d)]||c[d]||p[d]||o;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var m={};for(var u in n)hasOwnProperty.call(n,u)&&(m[u]=n[u]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},43154:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return p}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=(t(8539),["components"]),m={description:"Author: @wingkwong | https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"},u="0421 - Maximum XOR of Two Numbers in an Array",l={unversionedId:"0400-0499/maximum-xor-of-two-numbers-in-an-array",id:"0400-0499/maximum-xor-of-two-numbers-in-an-array",title:"0421 - Maximum XOR of Two Numbers in an Array",description:"Author: @wingkwong | https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",source:"@site/solutions/0400-0499/0421-maximum-xor-of-two-numbers-in-an-array.md",sourceDirName:"0400-0499",slug:"/0400-0499/maximum-xor-of-two-numbers-in-an-array",permalink:"/leetcode-the-hard-way/solutions/0400-0499/maximum-xor-of-two-numbers-in-an-array",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tree/main/solutions/0400-0499/0421-maximum-xor-of-two-numbers-in-an-array.md",tags:[],version:"current",sidebarPosition:421,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"},sidebar:"tutorialSidebar",previous:{title:"0417 - Pacific Atlantic Water Flow (Medium)",permalink:"/leetcode-the-hard-way/solutions/0400-0499/pacific-atlantic-water-flow-medium"},next:{title:"0435 - Non-overlapping Intervals (Medium)",permalink:"/leetcode-the-hard-way/solutions/0400-0499/non-overlapping-intervals-medium"}},s={},p=[{value:"Problem Link",id:"problem-link",level:2},{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Bit Masking + Set + Two Sum Idea",id:"approach-1-bit-masking--set--two-sum-idea",level:2}],c={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"0421---maximum-xor-of-two-numbers-in-an-array"},"0421 - Maximum XOR of Two Numbers in an Array"),(0,o.kt)("h2",{id:"problem-link"},"Problem Link"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"},"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/")),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Given an integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),", return ",(0,o.kt)("em",{parentName:"p"},"the maximum result of")," ",(0,o.kt)("inlineCode",{parentName:"p"},"nums[i] XOR nums[j]"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"0 <= i <= j < n"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [3,10,5,25,2,8]\nOutput: 28\nExplanation: The maximum result is 5 XOR 25 = 28.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]\nOutput: 127 \n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums.length <= 2 * 10^5")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= nums[i] <= 2^31 - 1"))),(0,o.kt)("h2",{id:"approach-1-bit-masking--set--two-sum-idea"},"Approach 1: Bit Masking + Set + Two Sum Idea"),(0,o.kt)("p",null,"In order to maximise the answer, we can construct the max XOR from the leftmost bit. The best answer is always all bits set. Hence, we can check bit by bit. We need to find two numbers such that its XOR starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"1000...000"),", then find ",(0,o.kt)("inlineCode",{parentName:"p"},"1100..000,")," then ",(0,o.kt)("inlineCode",{parentName:"p"},"1110...000"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"1111...000")," and till ",(0,o.kt)("inlineCode",{parentName:"p"},"1111...111"),". We build each mask to extract the prefix of length ",(0,o.kt)("inlineCode",{parentName:"p"},"(L - i)")," in binary representation of each number by using ",(0,o.kt)("inlineCode",{parentName:"p"},"num & mask"),". Then apply Two Sum idea, if the complement exists in the set, then we can update answer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findMaximumXOR(vector<int>& nums) {\n        int ans = 0, mask = 0;\n        for(int i = 31; i >= 0; i--){\n           unordered_set<int> s;\n            mask |= (1 << i);\n            for (auto x : nums) s.insert(mask & x);\n            int best = ans | (1 << i);\n            for(auto pref : s){\n                if(s.find(pref ^ best) != s.end()){\n                    ans = best;\n                    break;\n                }\n            }\n        }\n        return ans;\n    }\n};\n")))}d.isMDXComponent=!0},8539:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.name;return r.createElement("div",{className:"solution-author-wrapper"},r.createElement("span",null,"This solution is written by ",n))}}}]);