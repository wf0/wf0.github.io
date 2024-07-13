import{c as h,I as a,j as i,a as r,a6 as e,o,D as s}from"./chunks/framework.CYBeC69b.js";const k=i("h1",{id:"ikeyboardevent",tabindex:"-1"},[r("IKeyboardEvent "),i("a",{class:"header-anchor",href:"#ikeyboardevent","aria-label":'Permalink to "IKeyboardEvent"'},"​")],-1),d=e(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/IKeyboardEvent.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/IKeyboardEvent.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IKeyboardEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    _standardKeyboardEventBrand</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    altGraphKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    altKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    browserEvent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> KeyboardEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    code</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    ctrlKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    keyCode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> KeyCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    metaKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    shiftKey</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HTMLElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    equals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">keybinding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    preventDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    stopPropagation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="快捷链接" tabindex="-1">快捷链接 <a class="header-anchor" href="#快捷链接" aria-label="Permalink to &quot;快捷链接&quot;">​</a></h2>`,3),p=e('<h2 id="standardkeyboardeventbrand" tabindex="-1">_standardKeyboardEventBrand <a class="header-anchor" href="#standardkeyboardeventbrand" aria-label="Permalink to &quot;_standardKeyboardEventBrand&quot;">​</a></h2><ul><li>类型：<code>true</code></li></ul><h2 id="altgraphkey" tabindex="-1">altGraphKey <a class="header-anchor" href="#altgraphkey" aria-label="Permalink to &quot;altGraphKey&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="altkey" tabindex="-1">altKey <a class="header-anchor" href="#altkey" aria-label="Permalink to &quot;altKey&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="browserevent" tabindex="-1">browserEvent <a class="header-anchor" href="#browserevent" aria-label="Permalink to &quot;browserEvent&quot;">​</a></h2><ul><li>类型：<code>KeyboardEvent</code></li></ul><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;code&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="ctrlkey" tabindex="-1">ctrlKey <a class="header-anchor" href="#ctrlkey" aria-label="Permalink to &quot;ctrlKey&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="keycode" tabindex="-1">keyCode <a class="header-anchor" href="#keycode" aria-label="Permalink to &quot;keyCode&quot;">​</a></h2><ul><li>类型：<a href="/api/KeyCode.html">KeyCode</a></li></ul><h2 id="metakey" tabindex="-1">metaKey <a class="header-anchor" href="#metakey" aria-label="Permalink to &quot;metaKey&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="shiftkey" tabindex="-1">shiftKey <a class="header-anchor" href="#shiftkey" aria-label="Permalink to &quot;shiftKey&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="target" tabindex="-1">target <a class="header-anchor" href="#target" aria-label="Permalink to &quot;target&quot;">​</a></h2><ul><li>类型：<code>HTMLElement</code></li></ul><h2 id="equals" tabindex="-1">equals <a class="header-anchor" href="#equals" aria-label="Permalink to &quot;equals&quot;">​</a></h2><ul><li>语法：<code>equals(keybinding: number): boolean</code></li><li>参数：<code>keybinding</code>：<code>number</code></li></ul><h2 id="preventdefault" tabindex="-1">preventDefault <a class="header-anchor" href="#preventdefault" aria-label="Permalink to &quot;preventDefault&quot;">​</a></h2><ul><li>语法：<code>stopPropagation(): void</code></li><li>描述：阻止默认行为</li></ul><h2 id="stoppropagation" tabindex="-1">stopPropagation <a class="header-anchor" href="#stoppropagation" aria-label="Permalink to &quot;stopPropagation&quot;">​</a></h2><ul><li>语法：<code>stopPropagation(): void</code></li><li>描述：阻止事件冒泡</li></ul>',26),b=JSON.parse('{"title":"IKeyboardEvent","description":"","frontmatter":{},"headers":[],"relativePath":"api/IKeyboardEvent.md","filePath":"api/IKeyboardEvent.md","lastUpdated":1720599564000}'),c={name:"api/IKeyboardEvent.md"},F=Object.assign(c,{setup(y){const t=[{icon:"P",link:"_standardKeyboardEventBrand"},{icon:"P",link:"altGraphKey"},{icon:"P",link:"altKey"},{icon:"P",link:"browserEvent"},{icon:"P",link:"code"},{icon:"P",link:"ctrlKey"},{icon:"P",link:"keyCode"},{icon:"P",link:"metaKey"},{icon:"P",link:"shiftKey"},{icon:"P",link:"target"},{icon:"M",link:"equals"},{icon:"M",link:"preventDefault"},{icon:"M",link:"stopPropagation"}];return(E,g)=>{const n=s("backTop"),l=s("dataItems");return o(),h("div",null,[k,a(n),d,a(l,{data:t}),p])}}});export{b as __pageData,F as default};