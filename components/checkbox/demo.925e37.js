(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1390:function(n,a,s){n.exports={basic:s(1540)}},1540:function(n,a){n.exports={content:["article",["p","气泡提示帮助信息："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox.Group</span>\n    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span>\n    <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token attr-name">helper</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>气泡提示帮助信息<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      多选\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>多选<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Checkbox</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>多选<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Checkbox.Group</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>'},["code",'const [value, setValue] = useState([1])\nreturn (\n  <Checkbox.Group\n    size="mini"\n    value={value}\n    onChange={(value) => setValue(value)}\n  >\n    <Checkbox value={1} helper="气泡提示帮助信息">\n      多选\n    </Checkbox>\n    <Checkbox value={2}>多选</Checkbox>\n    <Checkbox value={3}>多选</Checkbox>\n  </Checkbox.Group>\n)']]],meta:{order:0,title:{"zh-CN":"内部驱动","en-US":"Type"},filename:"components/checkbox/demo/basic.md"}}}}]);