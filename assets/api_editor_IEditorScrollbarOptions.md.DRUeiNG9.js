import{_ as s,c as l,I as e,j as i,a as t,a6 as n,o,D as r}from"./chunks/framework.CYBeC69b.js";const m=JSON.parse('{"title":"IEditorScrollbarOptions","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/IEditorScrollbarOptions.md","filePath":"api/editor/IEditorScrollbarOptions.md","lastUpdated":1720599564000}'),h={name:"api/editor/IEditorScrollbarOptions.md"},k=i("h1",{id:"ieditorscrollbaroptions",tabindex:"-1"},[t("IEditorScrollbarOptions "),i("a",{class:"header-anchor",href:"#ieditorscrollbaroptions","aria-label":'Permalink to "IEditorScrollbarOptions"'},"​")],-1),d=n(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorScrollbarOptions.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorScrollbarOptions.html</a></p></details><p>编辑器滚动条的配置选项</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IEditorScrollbarOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    alwaysConsumeMouseWheel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    arrowSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    handleMouseWheel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    horizontal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;auto&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;visible&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hidden&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    horizontalHasArrows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    horizontalScrollbarSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    horizontalSliderSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    ignoreHorizontalScrollbarInContentHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    scrollByPage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    useShadows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    vertical</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;auto&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;visible&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hidden&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    verticalHasArrows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    verticalScrollbarSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    verticalSliderSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="alwaysconsumemousewheel" tabindex="-1">alwaysConsumeMouseWheel <a class="header-anchor" href="#alwaysconsumemousewheel" aria-label="Permalink to &quot;alwaysConsumeMouseWheel&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述：始终使用鼠标滚轮事件（始终对浏览器事件调用preventDefault（）和stopPropagation（））。默认为true。注意：无法使用updateOptions（）更新此选项</li></ul><h2 id="arrowsize" tabindex="-1">arrowSize <a class="header-anchor" href="#arrowsize" aria-label="Permalink to &quot;arrowSize&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述：滚动条箭头的大小。默认为11。</li></ul><h2 id="handlemousewheel" tabindex="-1">handleMouseWheel <a class="header-anchor" href="#handlemousewheel" aria-label="Permalink to &quot;handleMouseWheel&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述：是否处理鼠标滚轮事件。默认为true。</li></ul><h2 id="horizontal" tabindex="-1">horizontal <a class="header-anchor" href="#horizontal" aria-label="Permalink to &quot;horizontal&quot;">​</a></h2><ul><li>类型: <code>&quot;auto&quot; | &quot;visible&quot; | &quot;hidden&quot;</code></li><li>描述：水平滚动条的显示方式。默认为&quot;auto&quot;。</li></ul><h2 id="horizontalhasarrows" tabindex="-1">horizontalHasArrows <a class="header-anchor" href="#horizontalhasarrows" aria-label="Permalink to &quot;horizontalHasArrows&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述：是否显示水平滚动条的箭头。默认为true。</li></ul><h2 id="horizontalscrollbarsize" tabindex="-1">horizontalScrollbarSize <a class="header-anchor" href="#horizontalscrollbarsize" aria-label="Permalink to &quot;horizontalScrollbarSize&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述：水平滚动条的大小。默认为10。</li></ul><h2 id="horizontalslidersize" tabindex="-1">horizontalSliderSize <a class="header-anchor" href="#horizontalslidersize" aria-label="Permalink to &quot;horizontalSliderSize&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述：水平滚动条滑块的大小。默认为10。</li></ul><h2 id="ignorehorizontalscrollbarincontentheight" tabindex="-1">ignoreHorizontalScrollbarInContentHeight <a class="header-anchor" href="#ignorehorizontalscrollbarincontentheight" aria-label="Permalink to &quot;ignoreHorizontalScrollbarInContentHeight&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述：是否忽略水平滚动条在内容高度中的影响。默认为false。</li></ul><h2 id="scrollbypage" tabindex="-1">scrollByPage <a class="header-anchor" href="#scrollbypage" aria-label="Permalink to &quot;scrollByPage&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述：是否使用页面滚动。默认为false。</li></ul><h2 id="useshadows" tabindex="-1">useShadows <a class="header-anchor" href="#useshadows" aria-label="Permalink to &quot;useShadows&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述：是否使用阴影。默认为true。</li></ul><h2 id="vertical" tabindex="-1">vertical <a class="header-anchor" href="#vertical" aria-label="Permalink to &quot;vertical&quot;">​</a></h2><ul><li>类型: <code>&quot;auto&quot; | &quot;visible&quot; | &quot;hidden&quot;</code></li><li>描述：垂直滚动条的显示方式。默认为&quot;auto&quot;。</li></ul><h2 id="verticalhasarrows" tabindex="-1">verticalHasArrows <a class="header-anchor" href="#verticalhasarrows" aria-label="Permalink to &quot;verticalHasArrows&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述：是否显示垂直滚动条的箭头。默认为true。</li></ul><h2 id="verticalscrollbarsize" tabindex="-1">verticalScrollbarSize <a class="header-anchor" href="#verticalscrollbarsize" aria-label="Permalink to &quot;verticalScrollbarSize&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述：垂直滚动条的大小。默认为10。</li></ul><h2 id="verticalslidersize" tabindex="-1">verticalSliderSize <a class="header-anchor" href="#verticalslidersize" aria-label="Permalink to &quot;verticalSliderSize&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述：垂直滚动条滑块的大小。默认为10。</li></ul>`,31);function p(c,u,b,E,g,F){const a=r("backTop");return o(),l("div",null,[k,e(a),d])}const q=s(h,[["render",p]]);export{m as __pageData,q as default};
