import{_ as a,c as e,I as t,j as s,a as n,a6 as o,o as r,D as h}from"./chunks/framework.CYBeC69b.js";const y=JSON.parse('{"title":"ICursorPositionChangedEvent","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/ICursorPositionChangedEvent.md","filePath":"api/editor/ICursorPositionChangedEvent.md","lastUpdated":1720599564000}'),l={name:"api/editor/ICursorPositionChangedEvent.md"},p=s("h1",{id:"icursorpositionchangedevent",tabindex:"-1"},[n("ICursorPositionChangedEvent "),s("a",{class:"header-anchor",href:"#icursorpositionchangedevent","aria-label":'Permalink to "ICursorPositionChangedEvent"'},"​")],-1),d=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICursorPositionChangedEvent.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICursorPositionChangedEvent.html</a></p></details><p>描述光标位置已更改的事件。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ICursorPositionChangedEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    position</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    reason</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CursorChangeReason</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    secondaryPositions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    source</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="position" tabindex="-1">position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;position&quot;">​</a></h2><ul><li>类型：<a href="/api/Position.html">Position</a></li></ul><h2 id="reason" tabindex="-1">reason <a class="header-anchor" href="#reason" aria-label="Permalink to &quot;reason&quot;">​</a></h2><ul><li>类型：<a href="/api/editor/CursorChangeReason.html">CursorChangeReason</a></li></ul><h2 id="secondarypositions" tabindex="-1">secondaryPositions <a class="header-anchor" href="#secondarypositions" aria-label="Permalink to &quot;secondaryPositions&quot;">​</a></h2><ul><li>类型：<a href="/api/Position.html">Position</a>[]</li></ul><h2 id="source" tabindex="-1">source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;source&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul>`,11);function c(k,u,g,E,C,m){const i=h("backTop");return r(),e("div",null,[p,t(i),d])}const P=a(l,[["render",c]]);export{y as __pageData,P as default};
