import{_ as e,c as t,D as s,a as l,N as n,a5 as o,J as h,o as r}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const y=JSON.parse('{"title":"IMouseTargetOutsideEditor","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/IMouseTargetOutsideEditor.md","filePath":"api/editor/IMouseTargetOutsideEditor.md","lastUpdated":1720599564000}'),d={name:"api/editor/IMouseTargetOutsideEditor.md"};function p(k,i,u,c,g,E){const a=h("backTop");return r(),t("div",null,[i[0]||(i[0]=s("h1",{id:"imousetargetoutsideeditor",tabindex:"-1"},[l("IMouseTargetOutsideEditor "),s("a",{class:"header-anchor",href:"#imousetargetoutsideeditor","aria-label":'Permalink to "IMouseTargetOutsideEditor"'},"​")],-1)),n(a),i[1]||(i[1]=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetOutsideEditor.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IMouseTargetOutsideEditor.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IMouseTargetOutsideEditor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    element</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HTMLElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    mouseColumn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    outsideDistance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    outsidePosition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;right&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;left&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;above&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;below&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    position</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    range</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OUTSIDE_EDITOR</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="element" tabindex="-1">element <a class="header-anchor" href="#element" aria-label="Permalink to &quot;element&quot;">​</a></h2><ul><li>类型: <code>HTMLElement</code></li><li>描述:目标元素</li></ul><h2 id="mousecolumn" tabindex="-1">mouseColumn <a class="header-anchor" href="#mousecolumn" aria-label="Permalink to &quot;mouseColumn&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述:鼠标相对于目标元素的列</li></ul><h2 id="outsidedistance" tabindex="-1">outsideDistance <a class="header-anchor" href="#outsidedistance" aria-label="Permalink to &quot;outsideDistance&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述:鼠标相对于目标元素的距离</li></ul><h2 id="outsideposition" tabindex="-1">outsidePosition <a class="header-anchor" href="#outsideposition" aria-label="Permalink to &quot;outsidePosition&quot;">​</a></h2><ul><li>类型: <code>&quot;right</code></li><li>描述:鼠标相对于目标元素的位置</li></ul><h2 id="position" tabindex="-1">position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;position&quot;">​</a></h2><ul><li>类型: <a href="/api/Position.html">Position</a></li><li>描述:鼠标相对于目标元素的位置</li></ul><h2 id="range" tabindex="-1">range <a class="header-anchor" href="#range" aria-label="Permalink to &quot;range&quot;">​</a></h2><ul><li>类型: <a href="/api/Range.html">Range</a></li><li>描述:鼠标相对于目标元素的范围</li></ul><h2 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h2><ul><li>类型: <a href="/api/editor/MouseTargetType.html#outside-editor">OUTSIDE_EDITOR</a></li><li>描述:目标类型</li></ul>`,16))])}const b=e(d,[["render",p]]);export{y as __pageData,b as default};
