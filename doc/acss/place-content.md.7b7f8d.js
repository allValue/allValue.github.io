(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1488:function(n,s){n.exports={content:["article",["p","Hunt UI 引入了以下功能类，以同时控制 ",["code","flex"]," 和 ",["code","grid"]," 内内容主轴和交叉轴的对齐方式。"],["p","相关 CSS 属性：",["code","place-content"]],["pre",{lang:"json classes",highlighted:'{\n  <span class="token string">"place-content-center"</span><span class="token punctuation">:</span> "place<span class="token operator">-</span>content<span class="token punctuation">:</span> center<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"place-content-start"</span><span class="token punctuation">:</span> "place<span class="token operator">-</span>content<span class="token punctuation">:</span> start<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"place-content-end"</span><span class="token punctuation">:</span> "place<span class="token operator">-</span>content<span class="token punctuation">:</span> end<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"place-content-between"</span><span class="token punctuation">:</span> "place<span class="token operator">-</span>content<span class="token punctuation">:</span> space<span class="token operator">-</span>between<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"place-content-around"</span><span class="token punctuation">:</span> "place<span class="token operator">-</span>content<span class="token punctuation">:</span> space<span class="token operator">-</span>around<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"place-content-evenly"</span><span class="token punctuation">:</span> "place<span class="token operator">-</span>content<span class="token punctuation">:</span> space<span class="token operator">-</span>evenly<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"place-content-stretch"</span><span class="token punctuation">:</span> "place<span class="token operator">-</span>content<span class="token punctuation">:</span> stretch<span class="token comment" spellcheck="true">;"</span>\n}'},["code",'{\n  "place-content-center": "place-content: center;",\n  "place-content-start": "place-content: start;",\n  "place-content-end": "place-content: end;",\n  "place-content-between": "place-content: space-between;",\n  "place-content-around": "place-content: space-around;",\n  "place-content-evenly": "place-content: space-evenly;",\n  "place-content-stretch": "place-content: stretch;"\n}']],["pre",{lang:"jsx acss",highlighted:'return <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"grid grid-cols-3 place-content-center p-16 w-full h-200 text-white text-center bg-tp-gray-100 rounded-4"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-4 h-40"</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"leading-40 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-4 h-40"</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"leading-40 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-4 h-40"</span><span class="token operator">></span>\n      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"leading-40 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>'},["code",'return (\n  <div className="grid grid-cols-3 place-content-center p-16 w-full h-200 text-white text-center bg-tp-gray-100 rounded-4">\n    <div className="p-4 h-40">\n      <div className="leading-40 bg-green rounded-4">1</div>\n    </div>\n    <div className="p-4 h-40">\n      <div className="leading-40 bg-green rounded-4">2</div>\n    </div>\n    <div className="p-4 h-40">\n      <div className="leading-40 bg-green rounded-4">3</div>\n    </div>\n  </div>\n)']]],meta:{title:"Place Content",filename:"doc/acss/place-content.md"}}}}]);