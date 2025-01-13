import{c as r,D as a,a as o,N as s,a5 as n,J as l,o as p}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const m=JSON.parse('{"title":"EditorLayoutInfo","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/EditorLayoutInfo.md","filePath":"api/editor/EditorLayoutInfo.md","lastUpdated":1720599564000}'),d={name:"api/editor/EditorLayoutInfo.md"},y=Object.assign(d,{setup(k){const e=[{icon:"P",link:"contentLeft"},{icon:"P",link:"contentWidth"},{icon:"P",link:"decorationsLeft"},{icon:"P",link:"decorationsWidth"},{icon:"P",link:"glyphMarginDecorationLaneCount"},{icon:"P",link:"glyphMarginLeft"},{icon:"P",link:"glyphMarginWidth"},{icon:"P",link:"height"},{icon:"P",link:"horizontalScrollbarHeight"},{icon:"P",link:"isViewportWrapping"},{icon:"P",link:"isWordWrapMinified"},{icon:"P",link:"lineNumbersLeft"},{icon:"P",link:"lineNumbersWidth"},{icon:"P",link:"minimap"},{icon:"P",link:"overviewRuler"},{icon:"P",link:"verticalScrollbarWidth"},{icon:"P",link:"viewportColumn"},{icon:"P",link:"width"},{icon:"P",link:"wrappingColumn"}];return(c,i)=>{const t=l("backTop"),h=l("dataItems");return p(),r("div",null,[i[0]||(i[0]=a("h1",{id:"editorlayoutinfo",tabindex:"-1"},[o("EditorLayoutInfo "),a("a",{class:"header-anchor",href:"#editorlayoutinfo","aria-label":'Permalink to "EditorLayoutInfo"'},"​")],-1)),s(t),i[1]||(i[1]=n(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.EditorLayoutInfo.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.EditorLayoutInfo.html</a></p></details><p>编辑器的内部布局详细信息。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EditorLayoutInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    contentLeft</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    contentWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    decorationsLeft</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    decorationsWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    glyphMarginDecorationLaneCount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    glyphMarginLeft</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    glyphMarginWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    horizontalScrollbarHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    isViewportWrapping</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    isWordWrapMinified</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    lineNumbersLeft</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    lineNumbersWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    minimap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EditorMinimapLayoutInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    overviewRuler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OverviewRulerPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    verticalScrollbarWidth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    viewportColumn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    width</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    wrappingColumn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="快捷链接" tabindex="-1">快捷链接 <a class="header-anchor" href="#快捷链接" aria-label="Permalink to &quot;快捷链接&quot;">​</a></h2>`,4)),s(h,{data:e}),i[2]||(i[2]=n('<h2 id="contentleft" tabindex="-1">contentLeft <a class="header-anchor" href="#contentleft" aria-label="Permalink to &quot;contentLeft&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：内容的左侧位置（实际文本）</li></ul><h2 id="contentwidth" tabindex="-1">contentWidth <a class="header-anchor" href="#contentwidth" aria-label="Permalink to &quot;contentWidth&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：内容的宽度（实际文本）</li></ul><h2 id="decorationsleft" tabindex="-1">decorationsLeft <a class="header-anchor" href="#decorationsleft" aria-label="Permalink to &quot;decorationsLeft&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：线条装饰的左侧位置。</li></ul><h2 id="decorationswidth" tabindex="-1">decorationsWidth <a class="header-anchor" href="#decorationswidth" aria-label="Permalink to &quot;decorationsWidth&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：线条装饰的宽度。</li></ul><h2 id="glyphmargindecorationlanecount" tabindex="-1">glyphMarginDecorationLaneCount <a class="header-anchor" href="#glyphmargindecorationlanecount" aria-label="Permalink to &quot;glyphMarginDecorationLaneCount&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：要在图示符边距中渲染的装饰车道数。</li></ul><h2 id="glyphmarginleft" tabindex="-1">glyphMarginLeft <a class="header-anchor" href="#glyphmarginleft" aria-label="Permalink to &quot;glyphMarginLeft&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：图示符边距的左侧位置。</li></ul><h2 id="glyphmarginwidth" tabindex="-1">glyphMarginWidth <a class="header-anchor" href="#glyphmarginwidth" aria-label="Permalink to &quot;glyphMarginWidth&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：字形边距的宽度。</li></ul><h2 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-label="Permalink to &quot;height&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：完全编辑器高度。</li></ul><h2 id="horizontalscrollbarheight" tabindex="-1">horizontalScrollbarHeight <a class="header-anchor" href="#horizontalscrollbarheight" aria-label="Permalink to &quot;horizontalScrollbarHeight&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：水平滚动条的高度。</li></ul><h2 id="isviewportwrapping" tabindex="-1">isViewportWrapping <a class="header-anchor" href="#isviewportwrapping" aria-label="Permalink to &quot;isViewportWrapping&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="iswordwrapminified" tabindex="-1">isWordWrapMinified <a class="header-anchor" href="#iswordwrapminified" aria-label="Permalink to &quot;isWordWrapMinified&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="linenumbersleft" tabindex="-1">lineNumbersLeft <a class="header-anchor" href="#linenumbersleft" aria-label="Permalink to &quot;lineNumbersLeft&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：行号的左侧位置。</li></ul><h2 id="linenumberswidth" tabindex="-1">lineNumbersWidth <a class="header-anchor" href="#linenumberswidth" aria-label="Permalink to &quot;lineNumbersWidth&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：行号的宽度。</li></ul><h2 id="minimap" tabindex="-1">minimap <a class="header-anchor" href="#minimap" aria-label="Permalink to &quot;minimap&quot;">​</a></h2><ul><li>类型：<a href="/api/editor/EditorMinimapLayoutInfo.html">EditorMinimapLayoutInfo</a></li><li>描述：最小映射的布局信息</li></ul><h2 id="overviewruler" tabindex="-1">overviewRuler <a class="header-anchor" href="#overviewruler" aria-label="Permalink to &quot;overviewRuler&quot;">​</a></h2><ul><li>类型：<a href="/api/editor/OverviewRulerPosition.html">OverviewRulerPosition</a></li><li>描述：概览标尺的位置。</li></ul><h2 id="verticalscrollbarwidth" tabindex="-1">verticalScrollbarWidth <a class="header-anchor" href="#verticalscrollbarwidth" aria-label="Permalink to &quot;verticalScrollbarWidth&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：垂直滚动条的宽度。</li></ul><h2 id="viewportcolumn" tabindex="-1">viewportColumn <a class="header-anchor" href="#viewportcolumn" aria-label="Permalink to &quot;viewportColumn&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：适合视口线上的列数（典型字符）。</li></ul><h2 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-label="Permalink to &quot;width&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：宽度</li></ul><h2 id="wrappingcolumn" tabindex="-1">wrappingColumn <a class="header-anchor" href="#wrappingcolumn" aria-label="Permalink to &quot;wrappingColumn&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul>',38))])}}});export{m as __pageData,y as default};
