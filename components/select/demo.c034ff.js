(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1427:function(n,s,a){n.exports={longlist:a(1566),scroll:a(1567)}},1566:function(n,s){n.exports={content:["article",["p","虚拟滚动，处理 ",["code","10000"]," 行数据："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n  options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    value<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>\n    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-2/4<span class="token punctuation">"</span></span>\n    <span class="token attr-name">searchable</span>\n    <span class="token attr-name">filterOption</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>inputValue<span class="token punctuation">,</span> option<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>inputValue<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>props<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n  <span class="token punctuation">></span></span>\n    <span class="token punctuation">{</span>options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select.Option</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex</span> <span class="token attr-name">items-center"</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span>\n            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mr-8</span> <span class="token attr-name">w-24</span> <span class="token attr-name">h-24"</span>\n            <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://wxa.wxs.qq.com/mpweb/delivery/legacy/moment-preview/placeholder/vid.png<span class="token punctuation">"</span></span>\n            <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span>\n          <span class="token punctuation">/></span></span>\n          <span class="token punctuation">{</span>value<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select.Option</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>'},["code",'const options = []\nfor (let i = 0; i < 10000; i++) {\n  const value = `${i.toString(36)}${i}`\n  options.push({\n    value,\n  })\n}\n\nreturn (\n  <Select\n    className="w-2/4"\n    searchable\n    filterOption={(inputValue, option) => {\n      if (inputValue.includes(option.props.value)) {\n        return true\n      }\n      return false\n    }}\n  >\n    {options.map(({ value }) => (\n      <Select.Option value={value} key={value}>\n        <div className="flex items-center">\n          <img\n            className="mr-8 w-24 h-24"\n            src="https://wxa.wxs.qq.com/mpweb/delivery/legacy/moment-preview/placeholder/vid.png"\n            alt=""\n          />\n          {value}\n        </div>\n      </Select.Option>\n    ))}\n  </Select>\n)']],["h2","Alert"],["h3","虚拟滚动与 dropdownMatchSelectWidth Prop"],["p","当 ",["code","dropdownMatchSelectWidth"]," 为 ",["code","false"]," 时，虚拟滚动将失效。在 adui 2.0 前，此 Prop 默认为 ",["code","false"],"，现在改为 ",["code","true"],"，请注意对样式的影响。"]],meta:{order:1,title:{"zh-CN":"内部驱动","en-US":"Type"},filename:"components/select/demo/longlist.md"}}},1567:function(n,s){n.exports={content:["article",["p","使用 ",["code","onPopupScroll"]," 滚动加载数据："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> getOptions <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">36</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span>\n    options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> options\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>options<span class="token punctuation">,</span> setOptions<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>loadTimes<span class="token punctuation">,</span> setLoadTimes<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-2/4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mb-12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>已加载次数：<span class="token punctuation">{</span>loadTimes<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>\n      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-full<span class="token punctuation">"</span></span>\n      <span class="token attr-name">onPopupScroll</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> <span class="token punctuation">{</span> scrollHeight<span class="token punctuation">,</span> scrollTop<span class="token punctuation">,</span> offsetHeight <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>scrollTop <span class="token operator">+</span> offsetHeight <span class="token operator">></span> scrollHeight <span class="token operator">-</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          <span class="token function">setLoadTimes</span><span class="token punctuation">(</span>loadTimes <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n          <span class="token function">setOptions</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>options<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n    <span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select.Option</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>value<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select.Option</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>'},["code",'const getOptions = () => {\n  const options = []\n  for (let i = 0; i < 10; i++) {\n    const value = `${i.toString(36)}${i}`\n    options.push({\n      value,\n    })\n  }\n  return options\n}\nconst [options, setOptions] = useState(getOptions())\nconst [loadTimes, setLoadTimes] = useState(0)\n\nreturn (\n  <div className="w-2/4">\n    <div className="mb-12">已加载次数：{loadTimes}</div>\n    <Select\n      className="w-full"\n      onPopupScroll={(e) => {\n        const { scrollHeight, scrollTop, offsetHeight } = e.target\n        if (scrollTop + offsetHeight > scrollHeight - 32) {\n          setLoadTimes(loadTimes + 1)\n          setOptions([...options, ...getOptions()])\n        }\n      }}\n    >\n      {options.map(({ value }) => (\n        <Select.Option key={value} value={value}>\n          {value}\n        </Select.Option>\n      ))}\n    </Select>\n  </div>\n)']]],meta:{order:0,title:{"zh-CN":"滚动加载","en-US":"Scroll"},filename:"components/select/demo/scroll.md"}}}}]);