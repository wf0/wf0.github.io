import{_ as a,c as s,I as t,j as e,a as n,a6 as l,o,D as r}from"./chunks/framework.CYBeC69b.js";const R=JSON.parse('{"title":"SelectionRangeProvider","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/SelectionRangeProvider.md","filePath":"api/languages/SelectionRangeProvider.md","lastUpdated":1720600471000}'),d={name:"api/languages/SelectionRangeProvider.md"},h=e("h1",{id:"selectionrangeprovider",tabindex:"-1"},[n("SelectionRangeProvider "),e("a",{class:"header-anchor",href:"#selectionrangeprovider","aria-label":'Permalink to "SelectionRangeProvider"'},"​")],-1),p=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.SelectionRangeProvider.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.SelectionRangeProvider.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SelectionRangeProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    provideSelectionRanges</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">positions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProviderResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">SelectionRange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[][]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="provideselectionranges" tabindex="-1">provideSelectionRanges <a class="header-anchor" href="#provideselectionranges" aria-label="Permalink to &quot;provideSelectionRanges&quot;">​</a></h2><ul><li>语法：<code>provideSelectionRanges(model, positions, token): ProviderResult&lt;SelectionRange[][]&gt;</code></li><li>参数： <ul><li><code>model</code>: <a href="/api/editor/ITextModel.html">ITextModel</a></li><li><code>positions</code>: <a href="/api/Position.html">Position</a>[]</li><li><code>token</code>: <a href="/api/CancellationToken.html">CancellationToken</a></li></ul></li><li>返回值：<a href="/api/languages/ProviderResult.html">ProviderResult</a>&lt;<a href="/api/languages/SelectionRange.html">SelectionRange</a>[][]&gt;</li></ul>`,4);function c(k,g,E,m,u,v){const i=r("backTop");return o(),s("div",null,[h,t(i),p])}const S=a(d,[["render",c]]);export{R as __pageData,S as default};