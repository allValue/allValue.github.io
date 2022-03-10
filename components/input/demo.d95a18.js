(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1406:function(n,a,s){n.exports={cleave:s(1551),contentJustify:s(1552),limit:s(1553),textarea:s(1554)}},1551:function(n,a){n.exports={content:["article",["p","输入内容格式（",["a",{title:null,href:"https://github.com/nosir/cleave.js"},"cleave.js"],"）"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>date<span class="token punctuation">,</span> setDate<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"2020-01-21"</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>password<span class="token punctuation">,</span> setPassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"1234567"</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>phone<span class="token punctuation">,</span> setPhone<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"135 0123 4567"</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">[</span>upper<span class="token punctuation">,</span> setUpper<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"ABC"</span><span class="token punctuation">)</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>date<span class="token punctuation">}</span></span>\n      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> target<span class="token punctuation">:</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> date <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">)</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">setDate(date)}</span>\n      <span class="token attr-name">cleaveOptions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        delimiter<span class="token punctuation">:</span> <span class="token string">"-"</span><span class="token punctuation">,</span>\n        blocks<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mr-16<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>phone<span class="token punctuation">}</span></span>\n      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> target<span class="token punctuation">:</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> phone <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">)</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">setPhone(phone)}</span>\n      <span class="token attr-name">cleaveOptions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        blocks<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mr-16<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>\n      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> target<span class="token punctuation">:</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> password <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">)</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">setPassword(password)}</span>\n      <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>mr-16<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>\n      <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>upper<span class="token punctuation">}</span></span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>upper<span class="token punctuation">"</span></span>\n      <span class="token attr-name">cleaveOptions</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> uppercase<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> target<span class="token punctuation">:</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> upper <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">)</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">setUpper(upper)}</span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>'},["code",'const [date, setDate] = useState("2020-01-21")\nconst [password, setPassword] = useState("1234567")\nconst [phone, setPhone] = useState("135 0123 4567")\nconst [upper, setUpper] = useState("ABC")\n\nreturn (\n  <React.Fragment>\n    <Input\n      value={date}\n      onChange={({ target: { value: date } }) => setDate(date)}\n      cleaveOptions={{\n        delimiter: "-",\n        blocks: [4, 2, 2],\n      }}\n      className="mr-16"\n    />\n    <Input\n      value={phone}\n      onChange={({ target: { value: phone } }) => setPhone(phone)}\n      cleaveOptions={{\n        blocks: [3, 4, 4],\n      }}\n      className="mr-16"\n    />\n    <Input\n      value={password}\n      type="password"\n      onChange={({ target: { value: password } }) => setPassword(password)}\n      className="mr-16"\n    />\n    <Input\n      value={upper}\n      type="upper"\n      cleaveOptions={{ uppercase: true }}\n      onChange={({ target: { value: upper } }) => setUpper(upper)}\n    />\n  </React.Fragment>\n)']],["h2","Alert"],["h3","关于 Cleave.js"],["p","利用 ",["code","cleaveOptions"]," 可以实现手机号、日期、数字及自定义格式。",["br"],"除此之外，还可通过 ",["code","cleaveOptions={{ uppercase: true }}"]," 开启英文字母大写的功能。"]],meta:{order:2,title:{"zh-CN":"输入内容格式","en-US":"Cleave"},filename:"components/input/demo/cleave.md"}}},1552:function(n,a){n.exports={content:["article",["p",["code","contentJustify"]," 内容自适应宽度："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"contentJustify"</span><span class="token punctuation">)</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>\n    <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span>\n    <span class="token attr-name">contentJustify</span>\n    <span class="token attr-name">rightElement={&lt;Icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>edit-outlined<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    className<span class="token operator">=</span><span class="token string">"min-w-100"</span>\n    theme<span class="token operator">=</span><span class="token string">"light"</span>\n    onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> target<span class="token punctuation">:</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> val <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setValue</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">}</span>\n    value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n<span class="token punctuation">)</span>'},["code",'const [value, setValue] = useState("contentJustify")\n\nreturn (\n  <Input\n    size="large"\n    contentJustify\n    rightElement={<Icon icon="edit-outlined" />}\n    className="min-w-100"\n    theme="light"\n    onChange={({ target: { value: val } }) => setValue(val)}\n    value={value}\n  />\n)']]],meta:{order:3,title:{"zh-CN":"内容自适应宽度","en-US":"contentJustify"},filename:"components/input/demo/contentJustify.md"}}},1553:function(n,a){n.exports={content:["article",["p","字符数限制："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span>\n    <span class="token attr-name">limit</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> target<span class="token punctuation">:</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> val <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">)</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">setValue(val)}</span>\n    <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-240<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n<span class="token punctuation">)</span>'},["code",'const [value, setValue] = useState("")\n\nreturn (\n  <Input\n    limit={10}\n    onChange={({ target: { value: val } }) => setValue(val)}\n    value={value}\n    className="w-240"\n  />\n)']],["h2","Alert"],["h3","关于字符数限制"],["p","1.默认开启 ",["code","countHanzi"],"，一个汉字计算为 ",["strong","1"]," 字数，数字与英文计算为 ",["strong","0.5"]," 字数；你可以关闭此 Prop，那样所有字符都计算为 ",["strong","1"]," 字数；",["br"],"2.使用 ",["code","limit"]," Prop 时，",["code","Input"]," 必须是外部控制的（即传入 ",["code","value"]," ），否则 ",["code","defaultValue"]," 会透传给原生 ",["code","<input />"]," 元素处理，在这样的设计下组件内部并没有存储当前的值，因此也没有办法去计算 ",["code","limit"]," 了。"]],meta:{order:0,title:{"zh-CN":"字数限制","en-US":"Limit"},filename:"components/input/demo/limit.md"}}},1554:function(n,a){n.exports={content:["article",["p","段落文本输入 ",["code","Input.Textarea"],"："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input.Textarea</span>\n    <span class="token attr-name">limit</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">15</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span> target<span class="token punctuation">:</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> val <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">)</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">setValue(val)}</span>\n    <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n    <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>w-240</span> <span class="token attr-name">h-120"</span>\n  <span class="token punctuation">/></span></span>\n<span class="token punctuation">)</span>'},["code",'const [value, setValue] = useState("")\nreturn (\n  <Input.Textarea\n    limit={15}\n    onChange={({ target: { value: val } }) => setValue(val)}\n    value={value}\n    className="w-240 h-120"\n  />\n)']]],meta:{order:1,title:{"zh-CN":"段落文本","en-US":"Textarea"},filename:"components/input/demo/textarea.md"}}}}]);