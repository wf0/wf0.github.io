import{_ as s,c as t,D as i,a as n,N as l,a5 as o,J as r,o as d}from"./chunks/framework.DCUvzp74.js";import"./chunks/theme.G4trTUnd.js";const f=JSON.parse('{"title":"SelectionRangeProvider","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/SelectionRangeProvider.md","filePath":"api/languages/SelectionRangeProvider.md","lastUpdated":1720600471000}'),p={name:"api/languages/SelectionRangeProvider.md"};function h(c,e,k,g,m,E){const a=r("backTop");return d(),t("div",null,[e[0]||(e[0]=i("h1",{id:"selectionrangeprovider",tabindex:"-1"},[n("SelectionRangeProvider "),i("a",{class:"header-anchor",href:"#selectionrangeprovider","aria-label":'Permalink to "SelectionRangeProvider"'},"​")],-1)),l(a),e[1]||(e[1]=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.SelectionRangeProvider.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.SelectionRangeProvider.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SelectionRangeProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    provideSelectionRanges</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">positions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProviderResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SelectionRange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[][]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="provideselectionranges" tabindex="-1">provideSelectionRanges <a class="header-anchor" href="#provideselectionranges" aria-label="Permalink to &quot;provideSelectionRanges&quot;">​</a></h2><ul><li>语法：<code>provideSelectionRanges(model, positions, token): ProviderResult&lt;SelectionRange[][]&gt;</code></li><li>参数： <ul><li><code>model</code>: <a href="/api/editor/ITextModel.html">ITextModel</a></li><li><code>positions</code>: <a href="/api/Position.html">Position</a>[]</li><li><code>token</code>: <a href="/api/CancellationToken.html">CancellationToken</a></li></ul></li><li>返回值：<a href="/api/languages/ProviderResult.html">ProviderResult</a>&lt;<a href="/api/languages/SelectionRange.html">SelectionRange</a>[][]&gt;</li></ul>`,4))])}const R=s(p,[["render",h]]);export{f as __pageData,R as default};
