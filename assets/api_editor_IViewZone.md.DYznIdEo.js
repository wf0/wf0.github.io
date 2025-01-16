import{_ as e,c as n,D as s,a as l,N as t,a5 as h,J as o,o as r}from"./chunks/framework.DCUvzp74.js";import"./chunks/theme.G4trTUnd.js";const F=JSON.parse('{"title":"IViewZone","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/IViewZone.md","filePath":"api/editor/IViewZone.md","lastUpdated":1720599564000}'),d={name:"api/editor/IViewZone.md"};function p(k,i,c,u,m,g){const a=o("backTop");return r(),n("div",null,[i[0]||(i[0]=s("h1",{id:"iviewzone",tabindex:"-1"},[l("IViewZone "),s("a",{class:"header-anchor",href:"#iviewzone","aria-label":'Permalink to "IViewZone"'},"​")],-1)),t(a),i[1]||(i[1]=h(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IViewZone.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IViewZone.html</a></p></details><p>视图区域是一个完整的水平矩形，它向下“推”文本。编辑器在渲染时为视图区域保留空间。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IViewZone</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    afterColumn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    afterColumnAffinity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PositionAffinity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    afterLineNumber</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    domNode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HTMLElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    heightInLines</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    heightInPx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    marginDomNode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HTMLElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    minWidthInPx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    onComputedHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">height</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    onDomNodeTop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    ordinal</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    showInHiddenAreas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    suppressMouseDown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="aftercolumn" tabindex="-1">afterColumn <a class="header-anchor" href="#aftercolumn" aria-label="Permalink to &quot;afterColumn&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述：此区域应出现在其后面的列。如果未设置，将使用afterLineNumber的maxLineColumn。这与换行有关。</li></ul><h2 id="aftercolumnaffinity" tabindex="-1">afterColumnAffinity <a class="header-anchor" href="#aftercolumnaffinity" aria-label="Permalink to &quot;afterColumnAffinity&quot;">​</a></h2><ul><li>类型: <a href="/api/editor/PositionAffinity.html">PositionAffinity</a></li><li>描述：如果设置，则此区域应出现在其后。如果未设置，则此区域应出现在其后。</li></ul><h2 id="afterlinenumber" tabindex="-1">afterLineNumber <a class="header-anchor" href="#afterlinenumber" aria-label="Permalink to &quot;afterLineNumber&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述: 此区域应出现在此行之后。</li></ul><h2 id="domnode" tabindex="-1">domNode <a class="header-anchor" href="#domnode" aria-label="Permalink to &quot;domNode&quot;">​</a></h2><ul><li>类型: <code>HTMLElement</code></li><li>描述: 此区域应包含的HTML元素。</li></ul><h2 id="heightinlines" tabindex="-1">heightInLines <a class="header-anchor" href="#heightinlines" aria-label="Permalink to &quot;heightInLines&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述: 此区域应占多少行。</li></ul><h2 id="heightinpx" tabindex="-1">heightInPx <a class="header-anchor" href="#heightinpx" aria-label="Permalink to &quot;heightInPx&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述: 此区域应占多少像素。</li></ul><h2 id="margindomnode" tabindex="-1">marginDomNode <a class="header-anchor" href="#margindomnode" aria-label="Permalink to &quot;marginDomNode&quot;">​</a></h2><ul><li>类型: <code>HTMLElement</code></li><li>描述: 视图区域的可选dom节点，该节点将放置在边距区域中。</li></ul><h2 id="minwidthinpx" tabindex="-1">minWidthInPx <a class="header-anchor" href="#minwidthinpx" aria-label="Permalink to &quot;minWidthInPx&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述: 此区域应具有的最小宽度。</li></ul><h2 id="oncomputedheight" tabindex="-1">onComputedHeight <a class="header-anchor" href="#oncomputedheight" aria-label="Permalink to &quot;onComputedHeight&quot;">​</a></h2><ul><li>类型: <code>((height) =&gt; void)</code></li><li>参数：<code>height</code>：<code>number</code></li><li>描述: 此区域高度更改时调用。</li></ul><h2 id="ondomnodetop" tabindex="-1">onDomNodeTop <a class="header-anchor" href="#ondomnodetop" aria-label="Permalink to &quot;onDomNodeTop&quot;">​</a></h2><ul><li>类型: <code>((top) =&gt; void)</code></li><li>参数：<code>top</code>：<code>number</code></li><li>描述: 此区域位置更改时调用。</li></ul><h2 id="ordinal" tabindex="-1">ordinal <a class="header-anchor" href="#ordinal" aria-label="Permalink to &quot;ordinal&quot;">​</a></h2><ul><li>类型: <code>number</code></li><li>描述: 此区域在渲染时显示的顺序。</li></ul><h2 id="showinhiddenareas" tabindex="-1">showInHiddenAreas <a class="header-anchor" href="#showinhiddenareas" aria-label="Permalink to &quot;showInHiddenAreas&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 此区域是否应显示在隐藏区域中。</li></ul><h2 id="suppressmousedown" tabindex="-1">suppressMouseDown <a class="header-anchor" href="#suppressmousedown" aria-label="Permalink to &quot;suppressMouseDown&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 此区域是否应阻止鼠标事件。</li></ul>`,29))])}const b=e(d,[["render",p]]);export{F as __pageData,b as default};
