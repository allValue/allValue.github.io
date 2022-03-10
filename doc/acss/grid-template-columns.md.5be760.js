(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1470:function(n,s){n.exports={content:["article",["p","Hunt UI 引入了以下功能类，以控制 ",["code","grid"]," 容器的列布局。"],["p","相关 CSS 属性：",["code","grid-template-columns"]],["pre",{lang:"json classes",highlighted:'{\n  <span class="token string">"grid-cols-1"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-2"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-3"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-4"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-5"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-6"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-7"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-8"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-9"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-10"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-11"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-12"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;",</span>\n  <span class="token string">"grid-cols-none"</span><span class="token punctuation">:</span> "grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token punctuation">:</span> none<span class="token comment" spellcheck="true">;"</span>\n}'},["code",'{\n  "grid-cols-1": "grid-template-columns: repeat(1, minmax(0, 1fr));",\n  "grid-cols-2": "grid-template-columns: repeat(2, minmax(0, 1fr));",\n  "grid-cols-3": "grid-template-columns: repeat(3, minmax(0, 1fr));",\n  "grid-cols-4": "grid-template-columns: repeat(4, minmax(0, 1fr));",\n  "grid-cols-5": "grid-template-columns: repeat(5, minmax(0, 1fr));",\n  "grid-cols-6": "grid-template-columns: repeat(6, minmax(0, 1fr));",\n  "grid-cols-7": "grid-template-columns: repeat(7, minmax(0, 1fr));",\n  "grid-cols-8": "grid-template-columns: repeat(8, minmax(0, 1fr));",\n  "grid-cols-9": "grid-template-columns: repeat(9, minmax(0, 1fr));",\n  "grid-cols-10": "grid-template-columns: repeat(10, minmax(0, 1fr));",\n  "grid-cols-11": "grid-template-columns: repeat(11, minmax(0, 1fr));",\n  "grid-cols-12": "grid-template-columns: repeat(12, minmax(0, 1fr));",\n  "grid-cols-none": "grid-template-columns: none;"\n}']],["pre",{lang:"jsx acss",highlighted:'return <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"grid grid-cols-3 gap-8 p-16 w-full text-white text-center bg-tp-gray-100 rounded-4"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">4</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">5</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">6</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">7</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">8</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"px-16 py-10 bg-green rounded-4"</span><span class="token operator">></span><span class="token number">9</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>'},["code",'return (\n  <div className="grid grid-cols-3 gap-8 p-16 w-full text-white text-center bg-tp-gray-100 rounded-4">\n    <div className="px-16 py-10 bg-green rounded-4">1</div>\n    <div className="px-16 py-10 bg-green rounded-4">2</div>\n    <div className="px-16 py-10 bg-green rounded-4">3</div>\n    <div className="px-16 py-10 bg-green rounded-4">4</div>\n    <div className="px-16 py-10 bg-green rounded-4">5</div>\n    <div className="px-16 py-10 bg-green rounded-4">6</div>\n    <div className="px-16 py-10 bg-green rounded-4">7</div>\n    <div className="px-16 py-10 bg-green rounded-4">8</div>\n    <div className="px-16 py-10 bg-green rounded-4">9</div>\n  </div>\n)']]],meta:{title:"Grid Template Columns",filename:"doc/acss/grid-template-columns.md"}}}}]);