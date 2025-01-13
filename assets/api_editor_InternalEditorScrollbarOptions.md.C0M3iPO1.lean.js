import{_ as l,c as e,D as a,a as r,N as n,a5 as t,J as o,o as h}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const F=JSON.parse('{"title":"InternalEditorScrollbarOptions","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/InternalEditorScrollbarOptions.md","filePath":"api/editor/InternalEditorScrollbarOptions.md","lastUpdated":1720599564000}'),k={name:"api/editor/InternalEditorScrollbarOptions.md"};function p(d,i,c,b,u,E){const s=o("backTop");return h(),e("div",null,[i[0]||(i[0]=a("h1",{id:"internaleditorscrollbaroptions",tabindex:"-1"},[r("InternalEditorScrollbarOptions "),a("a",{class:"header-anchor",href:"#internaleditorscrollbaroptions","aria-label":'Permalink to "InternalEditorScrollbarOptions"'},"​")],-1)),n(s),i[1]||(i[1]=t(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.InternalEditorScrollbarOptions.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.InternalEditorScrollbarOptions.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InternalEditorScrollbarOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    alwaysConsumeMouseWheel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    arrowSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    handleMouseWheel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    horizontal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ScrollbarVisibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    horizontalHasArrows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    horizontalScrollbarSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    horizontalSliderSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    ignoreHorizontalScrollbarInContentHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    scrollByPage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    useShadows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    vertical</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ScrollbarVisibility</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    verticalHasArrows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    verticalScrollbarSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    verticalSliderSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="alwaysconsumemousewheel" tabindex="-1">alwaysConsumeMouseWheel <a class="header-anchor" href="#alwaysconsumemousewheel" aria-label="Permalink to &quot;alwaysConsumeMouseWheel&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li></ul><h2 id="arrowsize" tabindex="-1">arrowSize <a class="header-anchor" href="#arrowsize" aria-label="Permalink to &quot;arrowSize&quot;">​</a></h2><ul><li>类型: <code>number</code></li></ul><h2 id="handlemousewheel" tabindex="-1">handleMouseWheel <a class="header-anchor" href="#handlemousewheel" aria-label="Permalink to &quot;handleMouseWheel&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li></ul><h2 id="horizontal" tabindex="-1">horizontal <a class="header-anchor" href="#horizontal" aria-label="Permalink to &quot;horizontal&quot;">​</a></h2><ul><li>类型: <a href="/api/editor/ScrollbarVisibility.html">ScrollbarVisibility</a></li></ul><h2 id="horizontalhasarrows" tabindex="-1">horizontalHasArrows <a class="header-anchor" href="#horizontalhasarrows" aria-label="Permalink to &quot;horizontalHasArrows&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li></ul><h2 id="horizontalscrollbarsize" tabindex="-1">horizontalScrollbarSize <a class="header-anchor" href="#horizontalscrollbarsize" aria-label="Permalink to &quot;horizontalScrollbarSize&quot;">​</a></h2><ul><li>类型: <code>number</code></li></ul><h2 id="horizontalslidersize" tabindex="-1">horizontalSliderSize <a class="header-anchor" href="#horizontalslidersize" aria-label="Permalink to &quot;horizontalSliderSize&quot;">​</a></h2><ul><li>类型: <code>number</code></li></ul><h2 id="ignorehorizontalscrollbarincontentheight" tabindex="-1">ignoreHorizontalScrollbarInContentHeight <a class="header-anchor" href="#ignorehorizontalscrollbarincontentheight" aria-label="Permalink to &quot;ignoreHorizontalScrollbarInContentHeight&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li></ul><h2 id="scrollbypage" tabindex="-1">scrollByPage <a class="header-anchor" href="#scrollbypage" aria-label="Permalink to &quot;scrollByPage&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li></ul><h2 id="useshadows" tabindex="-1">useShadows <a class="header-anchor" href="#useshadows" aria-label="Permalink to &quot;useShadows&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li></ul><h2 id="vertical" tabindex="-1">vertical <a class="header-anchor" href="#vertical" aria-label="Permalink to &quot;vertical&quot;">​</a></h2><ul><li>类型: <a href="/api/editor/ScrollbarVisibility.html">ScrollbarVisibility</a></li></ul><h2 id="verticalhasarrows" tabindex="-1">verticalHasArrows <a class="header-anchor" href="#verticalhasarrows" aria-label="Permalink to &quot;verticalHasArrows&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li></ul><h2 id="verticalscrollbarsize" tabindex="-1">verticalScrollbarSize <a class="header-anchor" href="#verticalscrollbarsize" aria-label="Permalink to &quot;verticalScrollbarSize&quot;">​</a></h2><ul><li>类型: <code>number</code></li></ul><h2 id="verticalslidersize" tabindex="-1">verticalSliderSize <a class="header-anchor" href="#verticalslidersize" aria-label="Permalink to &quot;verticalSliderSize&quot;">​</a></h2><ul><li>类型: <code>number</code></li></ul>`,30))])}const m=l(k,[["render",p]]);export{F as __pageData,m as default};
