(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1478:function(n,s){n.exports={content:["article",["p","Hunt UI 引入了以下功能类，以控制元素内的文字行高。"],["p","相关 CSS 属性：",["code","line-height"]],["pre",{lang:"json classes",highlighted:'{\n  <span class="token string">"leading-none"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-12"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 12px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-14"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 14px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-16"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 16px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-17"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 17px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-18"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 18px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-20"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 20px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-24"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 24px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-25"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 25px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-28"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 28px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-32"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 32px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-36"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 36px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-40"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 40px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-42"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 42px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-48"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 48px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-52"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 52px<span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"leading-64"</span><span class="token punctuation">:</span> "line<span class="token operator">-</span>height<span class="token punctuation">:</span> 64px<span class="token comment" spellcheck="true">;"</span>\n}'},["code",'{\n  "leading-none": "line-height: 1;",\n  "leading-12": "line-height: 12px;",\n  "leading-14": "line-height: 14px;",\n  "leading-16": "line-height: 16px;",\n  "leading-17": "line-height: 17px;",\n  "leading-18": "line-height: 18px;",\n  "leading-20": "line-height: 20px;",\n  "leading-24": "line-height: 24px;",\n  "leading-25": "line-height: 25px;",\n  "leading-28": "line-height: 28px;",\n  "leading-32": "line-height: 32px;",\n  "leading-36": "line-height: 36px;",\n  "leading-40": "line-height: 40px;",\n  "leading-42": "line-height: 42px;",\n  "leading-48": "line-height: 48px;",\n  "leading-52": "line-height: 52px;",\n  "leading-64": "line-height: 64px;"\n}']],["pre",{lang:"jsx acss",highlighted:'return <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-16 space-y-30 bg-tp-gray-50 rounded-6"</span><span class="token operator">></span>\n    {<span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token number">52</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n      <span class="token operator">&lt;</span>div key<span class="token operator">=</span>{o} className<span class="token operator">=</span><span class="token string">"flex items-center text-14"</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"flex-none mr-16 w-100 text-tp-gray-600"</span><span class="token operator">></span>{`leading<span class="token operator">-</span>${o}`}<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n        <span class="token operator">&lt;</span>span\n          className<span class="token operator">=</span><span class="token string">"flex-1 min-w-0 text-tp-gray-800 truncate"</span>\n          style<span class="token operator">=</span>{{ lineHeight<span class="token punctuation">:</span> `${o}px` }}\n        <span class="token operator">></span>\n          Hunt UI 的组件由有状态组件（Class Component），函数式组件（Functional\n          Component）组成。\n        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token punctuation">)</span><span class="token punctuation">)</span>}\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>'},["code",'return (\n  <div className="p-16 space-y-30 bg-tp-gray-50 rounded-6">\n    {[14, 18, 24, 28, 32, 36, 42, 48, 52, 64].map((o) => (\n      <div key={o} className="flex items-center text-14">\n        <span className="flex-none mr-16 w-100 text-tp-gray-600">{`leading-${o}`}</span>\n        <span\n          className="flex-1 min-w-0 text-tp-gray-800 truncate"\n          style={{ lineHeight: `${o}px` }}\n        >\n          Hunt UI 的组件由有状态组件（Class Component），函数式组件（Functional\n          Component）组成。\n        </span>\n      </div>\n    ))}\n  </div>\n)']]],meta:{title:"Line Height",filename:"doc/acss/line-height.md"}}}}]);