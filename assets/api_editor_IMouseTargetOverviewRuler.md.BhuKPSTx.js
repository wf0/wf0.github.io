import{_ as i,c as s,I as t,j as e,a as l,a6 as n,o as r,D as o}from"./chunks/framework.CYBeC69b.js";const _=JSON.parse('{"title":"IMouseTargetOverviewRuler","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/IMouseTargetOverviewRuler.md","filePath":"api/editor/IMouseTargetOverviewRuler.md","lastUpdated":1720599564000}'),h={name:"api/editor/IMouseTargetOverviewRuler.md"},p=e("h1",{id:"imousetargetoverviewruler",tabindex:"-1"},[l("IMouseTargetOverviewRuler "),e("a",{class:"header-anchor",href:"#imousetargetoverviewruler","aria-label":'Permalink to "IMouseTargetOverviewRuler"'},"​")],-1),k=n(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetOverviewRuler.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetOverviewRuler.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IMouseTargetOverviewRuler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    element</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HTMLElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    mouseColumn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    position</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    range</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OVERVIEW_RULER</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="element" tabindex="-1">element <a class="header-anchor" href="#element" aria-label="Permalink to &quot;element&quot;">​</a></h2><ul><li>类型: <code>HTMLElement</code></li></ul><h2 id="mousecolumn" tabindex="-1">mouseColumn <a class="header-anchor" href="#mousecolumn" aria-label="Permalink to &quot;mouseColumn&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述：所需的鼠标列（例如，当position.column被固定为文本长度时——在一行的文本后面单击）。</li></ul><h2 id="position" tabindex="-1">position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;position&quot;">​</a></h2><ul><li>类型: <a href="/api/Position.html">Position</a></li></ul><h2 id="range" tabindex="-1">range <a class="header-anchor" href="#range" aria-label="Permalink to &quot;range&quot;">​</a></h2><ul><li>类型: <a href="/api/Range.html">Range</a></li></ul><h2 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h2><ul><li>类型: <a href="/api/editor/MouseTargetType.html#overview-ruler">OVERVIEW_RULER</a></li></ul>`,12);function d(u,c,m,g,E,v){const a=o("backTop");return r(),s("div",null,[p,t(a),k])}const F=i(h,[["render",d]]);export{_ as __pageData,F as default};
