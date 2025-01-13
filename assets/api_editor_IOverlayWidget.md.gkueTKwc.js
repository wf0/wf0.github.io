import{_ as t,c as e,D as a,a as l,N as n,a5 as o,J as h,o as d}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const F=JSON.parse('{"title":"IOverlayWidget","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/IOverlayWidget.md","filePath":"api/editor/IOverlayWidget.md","lastUpdated":1720599564000}'),r={name:"api/editor/IOverlayWidget.md"};function p(k,i,g,c,E,y){const s=h("backTop");return d(),e("div",null,[i[0]||(i[0]=a("h1",{id:"ioverlaywidget",tabindex:"-1"},[l("IOverlayWidget "),a("a",{class:"header-anchor",href:"#ioverlaywidget","aria-label":'Permalink to "IOverlayWidget"'},"​")],-1)),n(s),i[1]||(i[1]=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IOverlayWidget.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IOverlayWidget.html</a></p></details><p>覆盖窗口小部件在文本的顶部进行渲染。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IOverlayWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    allowEditorOverflow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    onDidLayout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getDomNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HTMLElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getMinContentWidthInPx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IOverlayWidgetPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="alloweditoroverflow" tabindex="-1">allowEditorOverflow <a class="header-anchor" href="#alloweditoroverflow" aria-label="Permalink to &quot;allowEditorOverflow&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：在可能溢出编辑器的视图dom节点的位置渲染此覆盖小部件。</li></ul><h2 id="ondidlayout" tabindex="-1">onDidLayout <a class="header-anchor" href="#ondidlayout" aria-label="Permalink to &quot;onDidLayout&quot;">​</a></h2><ul><li>类型：<code>IEvent&lt;void&gt;</code></li><li>描述：当小部件布局发生变化时触发。</li></ul><h2 id="getdomnode" tabindex="-1">getDomNode <a class="header-anchor" href="#getdomnode" aria-label="Permalink to &quot;getDomNode&quot;">​</a></h2><ul><li>语法：<code>getDomNode(): HTMLElement</code></li><li>描述：返回小部件的dom节点。</li></ul><h2 id="getid" tabindex="-1">getId <a class="header-anchor" href="#getid" aria-label="Permalink to &quot;getId&quot;">​</a></h2><ul><li>语法：<code>getId(): string</code></li><li>描述：返回小部件的id。</li></ul><h2 id="getmincontentwidthinpx" tabindex="-1">getMinContentWidthInPx <a class="header-anchor" href="#getmincontentwidthinpx" aria-label="Permalink to &quot;getMinContentWidthInPx&quot;">​</a></h2><ul><li>语法：<code>getMinContentWidthInPx?(): number</code></li><li>描述：返回小部件的最小内容宽度。</li></ul><h2 id="getposition" tabindex="-1">getPosition <a class="header-anchor" href="#getposition" aria-label="Permalink to &quot;getPosition&quot;">​</a></h2><ul><li>语法：<code>getPosition(): IOverlayWidgetPosition</code></li><li>返回值：<a href="/api/editor/IOverlayWidgetPosition.html">IOverlayWidgetPosition</a></li><li>描述：返回小部件的位置。</li></ul>`,15))])}const v=t(r,[["render",p]]);export{F as __pageData,v as default};
