(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1396:function(n,a,s){n.exports={disabledDays:s(1544),maxRange:s(1545),renderDay:s(1546)}},1544:function(n,a){n.exports={content:["article",["p","使用 ",["code","maxDate"],"，",["code","minDate"]," 及 ",["code","disabledDays"]," 限制可选择的日期："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> setValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment" spellcheck="true">/**\n * 示例限制：一个月前，一个月后，所有星期天，所有 6 号\n */</span>\n<span class="token keyword">const</span> oneMonthBefore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> oneMonthLater <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\noneMonthBefore<span class="token punctuation">.</span><span class="token function">setMonth</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>\noneMonthLater<span class="token punctuation">.</span><span class="token function">setMonth</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span>\n    <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span></span>\n    <span class="token attr-name">maxDate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>oneMonthLater<span class="token punctuation">}</span></span>\n    <span class="token attr-name">minDate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>oneMonthBefore<span class="token punctuation">}</span></span>\n    <span class="token attr-name">disabledDays</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> day<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> day<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">6</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setValue</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">/></span></span>\n<span class="token punctuation">)</span>'},["code","const [value, setValue] = useState(new Date())\n/**\n * 示例限制：一个月前，一个月后，所有星期天，所有 6 号\n */\nconst oneMonthBefore = new Date()\nconst oneMonthLater = new Date()\noneMonthBefore.setMonth(new Date().getMonth() - 1)\noneMonthLater.setMonth(new Date().getMonth() + 1)\n\nreturn (\n  <DatePicker\n    value={value}\n    maxDate={oneMonthLater}\n    minDate={oneMonthBefore}\n    disabledDays={(day) => day.getDay() === 0 || day.getDate() === 6}\n    onChange={(val) => setValue(val)}\n  />\n)"]]],meta:{order:1,title:{"zh-CN":"限制选择","en-US":"DisabledDays"},filename:"components/date-picker/demo/disabledDays.md"}}},1545:function(n,a){n.exports={content:["article",["p","使用 ",["code","onStartDaySelect"]," 与 ",["code","onEndDaySelect"]," 限制最多选连续 7 天："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>startDay<span class="token punctuation">,</span> setStartDay<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> oneWeekBefore\n<span class="token keyword">let</span> oneWeekLater\n<span class="token keyword">if</span> <span class="token punctuation">(</span>startDay<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  oneWeekBefore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>startDay<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">7</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n  oneWeekLater <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>startDay<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">7</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker.RangePicker</span>\n    <span class="token attr-name">disabledDays</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>\n      startDay <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>day <span class="token operator">&lt;</span> oneWeekBefore <span class="token operator">||</span> day <span class="token operator">></span> oneWeekLater<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span></span>\n    <span class="token attr-name">onStartDaySelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setStartDay</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">onEndDaySelect</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">setStartDay</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n  <span class="token punctuation">/></span></span>\n<span class="token punctuation">)</span>'},["code","const [startDay, setStartDay] = useState(null)\nlet oneWeekBefore\nlet oneWeekLater\nif (startDay) {\n  oneWeekBefore = new Date(startDay.getTime() - 7 * 24 * 60 * 60 * 1000)\n  oneWeekLater = new Date(startDay.getTime() + 7 * 24 * 60 * 60 * 1000)\n}\n\nreturn (\n  <DatePicker.RangePicker\n    disabledDays={(day) =>\n      startDay && (day < oneWeekBefore || day > oneWeekLater)\n    }\n    onStartDaySelect={(day) => setStartDay(day)}\n    onEndDaySelect={() => setStartDay(null)}\n  />\n)"]]],meta:{order:2,title:{"zh-CN":"范围","en-US":"maxRange"},filename:"components/date-picker/demo/maxRange.md"}}},1546:function(n,a){n.exports={content:["article",["p","使用 ",["code","renderDay"]," 自定义每个日期的显示；使用 ",["code","dropdownRender"]," 自定义下拉框显示："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> <span class="token punctuation">[</span>date<span class="token punctuation">,</span> setDate<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">return</span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span>\n    <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>date<span class="token punctuation">}</span></span>\n    <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setDate<span class="token punctuation">}</span></span>\n    <span class="token attr-name">shortcuts</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token punctuation">:</span> <span class="token string">"祖国母亲生日"</span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">"2022-10-01"</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">renderDay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> today <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token keyword">const</span> isToday <span class="token operator">=</span>\n        day<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> today<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n        day<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> today<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>\n        day<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> today<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>isToday<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-12</span> <span class="token attr-name">font-bold"</span><span class="token punctuation">></span></span>今天<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token punctuation">}</span>\n      <span class="token keyword">return</span> day<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n    <span class="token attr-name">dropdownRender</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>popup<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>React.Fragment</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>popup<span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex</span> <span class="token attr-name">items-center</span> <span class="token attr-name">justify-center</span> <span class="token attr-name">p-8</span> <span class="token attr-name">shadow-t-tp-gray-100"</span><span class="token punctuation">></span></span>\n          <span class="token operator">&lt;</span>Button\n            theme<span class="token operator">=</span><span class="token string">"light"</span>\n            onClick<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n              <span class="token function">setDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">></span></span>\n            回到今天\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>React.Fragment</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span>\n    triggerElement<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">rightIcon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>triangle-down<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>选择日期<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n<span class="token punctuation">)</span>'},["code",'const [date, setDate] = useState(new Date())\n\nreturn (\n  <DatePicker\n    value={date}\n    onChange={setDate}\n    shortcuts={[{ label: "祖国母亲生日", value: new Date("2022-10-01") }]}\n    renderDay={(day) => {\n      const today = new Date()\n      const isToday =\n        day.getFullYear() === today.getFullYear() &&\n        day.getMonth() === today.getMonth() &&\n        day.getDate() === today.getDate()\n      if (isToday) {\n        return <div className="text-12 font-bold">今天</div>\n      }\n      return day.getDate()\n    }}\n    dropdownRender={(popup) => (\n      <React.Fragment>\n        {popup}\n        <div className="flex items-center justify-center p-8 shadow-t-tp-gray-100">\n          <Button\n            theme="light"\n            onClick={() => {\n              setDate(new Date())\n            }}\n          >\n            回到今天\n          </Button>\n        </div>\n      </React.Fragment>\n    )}\n    triggerElement={<Button rightIcon="triangle-down">选择日期</Button>}\n  />\n)']]],meta:{order:0,title:{"zh-CN":"renderDay","en-US":"renderDay"},filename:"components/date-picker/demo/renderDay.md"}}}}]);