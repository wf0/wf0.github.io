import{_ as a,c as s,I as n,j as i,a as t,a6 as d,o as l,D as o}from"./chunks/framework.V0McN4Tf.js";const R=JSON.parse('{"title":"LinkedEditingRangeProvider","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/LinkedEditingRangeProvider.md","filePath":"api/languages/LinkedEditingRangeProvider.md","lastUpdated":1720600471000}'),r={name:"api/languages/LinkedEditingRangeProvider.md"},h=i("h1",{id:"linkededitingrangeprovider",tabindex:"-1"},[t("LinkedEditingRangeProvider "),i("a",{class:"header-anchor",href:"#linkededitingrangeprovider","aria-label":'Permalink to "LinkedEditingRangeProvider"'},"​")],-1),p=d(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LinkedEditingRangeProvider.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LinkedEditingRangeProvider.html</a></p></details><p>链接编辑范围提供程序接口定义扩展和链接编辑功能之间的约定。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LinkedEditingRangeProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    provideLinkedEditingRanges</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProviderResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">LinkedEditingRanges</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="providelinkededitingranges" tabindex="-1">provideLinkedEditingRanges <a class="header-anchor" href="#providelinkededitingranges" aria-label="Permalink to &quot;provideLinkedEditingRanges&quot;">​</a></h2><ul><li>语法：<code>provideLinkedEditingRanges(model, position, token): ProviderResult&lt;LinkedEditingRanges&gt;</code></li><li>参数： <ul><li><code>model</code>: <a href="/api/editor/ITextModel.html">ITextModel</a></li><li><code>position</code>: <a href="/api/IPosition.html">IPosition</a></li><li><code>token</code>: <a href="/api/CancellationToken.html">CancellationToken</a></li></ul></li><li>返回值：<a href="/api/languages/ProviderResult.html">ProviderResult</a>&lt;<a href="/api/languages/LinkedEditingRanges.html">LinkedEditingRanges</a>&gt;</li><li>描述：提供链接编辑范围。</li></ul>`,5);function k(g,c,E,m,u,v){const e=o("backTop");return l(),s("div",null,[h,n(e),p])}const f=a(r,[["render",k]]);export{R as __pageData,f as default};