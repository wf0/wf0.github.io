import{_ as s,c as t,D as a,a as l,N as n,a5 as r,J as d,o}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const F=JSON.parse('{"title":"IEditOperationBuilder","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/IEditOperationBuilder.md","filePath":"api/editor/IEditOperationBuilder.md","lastUpdated":1720599564000}'),h={name:"api/editor/IEditOperationBuilder.md"};function p(k,i,c,E,g,u){const e=d("backTop");return o(),t("div",null,[i[0]||(i[0]=a("h1",{id:"ieditoperationbuilder",tabindex:"-1"},[l("IEditOperationBuilder "),a("a",{class:"header-anchor",href:"#ieditoperationbuilder","aria-label":'Permalink to "IEditOperationBuilder"'},"​")],-1)),n(e),i[1]||(i[1]=r(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditOperationBuilder.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditOperationBuilder.html</a></p></details><p>用于命令编辑操作的生成器和助手</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IEditOperationBuilder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    addEditOperation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">forceMoveMarkers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    addTrackedEditOperation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">forceMoveMarkers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    trackSelection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">selection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">trackPreviousOnEmpty</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="addeditoperation" tabindex="-1">addEditOperation <a class="header-anchor" href="#addeditoperation" aria-label="Permalink to &quot;addEditOperation&quot;">​</a></h2><ul><li>语法：<code>addEditOperation(range, text, forceMoveMarkers?): void</code></li><li>参数： <ul><li><code>range</code>: <a href="/api/IRange.html">IRange</a></li><li><code>text</code>: <code>string</code></li><li><code>forceMoveMarkers</code>: <code>boolean</code></li></ul></li><li>描述：添加新的编辑操作（替换操作）。</li></ul><h2 id="addtrackededitoperation" tabindex="-1">addTrackedEditOperation <a class="header-anchor" href="#addtrackededitoperation" aria-label="Permalink to &quot;addTrackedEditOperation&quot;">​</a></h2><ul><li>语法：<code>addTrackedEditOperation(range, text, forceMoveMarkers?): void</code></li><li>参数： <ul><li><code>range</code>: <a href="/api/IRange.html">IRange</a></li><li><code>text</code>: <code>string</code></li><li><code>forceMoveMarkers</code>: <code>boolean</code></li></ul></li><li>描述：添加新的编辑操作（替换操作）。反向编辑将在ICursorStateComputerData.getInverseEditOperations（）中访问</li></ul><h2 id="trackselection" tabindex="-1">trackSelection <a class="header-anchor" href="#trackselection" aria-label="Permalink to &quot;trackSelection&quot;">​</a></h2><ul><li>语法：<code>trackSelection(selection, trackPreviousOnEmpty?): string</code></li><li>参数： <ul><li><code>selection</code>: <a href="/api/Selection.html">Selection</a></li><li><code>trackPreviousOnEmpty</code>: <code>boolean</code></li></ul></li><li>描述：应用编辑操作时跟踪选择。将尽最大努力不扩大选择范围。空选择将钳制到附近的角色。</li></ul>`,9))])}const f=s(h,[["render",p]]);export{F as __pageData,f as default};
