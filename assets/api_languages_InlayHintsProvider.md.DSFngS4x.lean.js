import{_ as n,c as l,D as a,a as e,N as t,a5 as h,J as r,o as d}from"./chunks/framework.DCUvzp74.js";import"./chunks/theme.G4trTUnd.js";const v=JSON.parse('{"title":"InlayHintsProvider","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/InlayHintsProvider.md","filePath":"api/languages/InlayHintsProvider.md","lastUpdated":1720600471000}'),o={name:"api/languages/InlayHintsProvider.md"};function p(k,i,g,y,c,E){const s=r("backTop");return d(),l("div",null,[i[0]||(i[0]=a("h1",{id:"inlayhintsprovider",tabindex:"-1"},[e("InlayHintsProvider "),a("a",{class:"header-anchor",href:"#inlayhintsprovider","aria-label":'Permalink to "InlayHintsProvider"'},"​")],-1)),t(s),i[1]||(i[1]=h(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlayHintsProvider.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlayHintsProvider.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InlayHintsProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    displayName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    onDidChangeInlayHints</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    provideInlayHints</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProviderResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InlayHintList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    resolveInlayHint</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">hint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProviderResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">InlayHint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="displayname" tabindex="-1">displayName <a class="header-anchor" href="#displayname" aria-label="Permalink to &quot;displayName&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="ondidchangeinlayhints" tabindex="-1">onDidChangeInlayHints <a class="header-anchor" href="#ondidchangeinlayhints" aria-label="Permalink to &quot;onDidChangeInlayHints&quot;">​</a></h2><ul><li>类型：<a href="/api/IEvent.html">IEvent</a><code>&lt;void&gt;</code></li></ul><h2 id="provideinlayhints" tabindex="-1">provideInlayHints <a class="header-anchor" href="#provideinlayhints" aria-label="Permalink to &quot;provideInlayHints&quot;">​</a></h2><ul><li>语法：<code>provideInlayHints(model, range, token): ProviderResult&lt;InlayHintList&gt;</code></li><li>参数： <ul><li><code>model</code>：<a href="/api/editor/ITextModel.html">ITextModel</a></li><li><code>range</code>: <a href="/api/Range.html">Range</a></li><li><code>token</code>: <a href="/api/CancellationToken.html">CancellationToken</a></li></ul></li><li>返回值：<a href="/api/languages/ProviderResult.html">ProviderResult</a>&lt;<a href="/api/languages/InlayHint.html">InlayHint</a>&gt;</li></ul><h2 id="resolveinlayhint" tabindex="-1">resolveInlayHint <a class="header-anchor" href="#resolveinlayhint" aria-label="Permalink to &quot;resolveInlayHint&quot;">​</a></h2><ul><li>语法：<code>resolveInlayHint(hint, token): ProviderResult&lt;InlayHint&gt;</code></li><li>参数： <ul><li><code>hint</code>：<a href="/api/languages/InlayHint.html">InlayHint</a></li><li><code>token</code>：<a href="/api/CancellationToken.html">CancellationToken</a></li></ul></li><li>返回值：<a href="/api/languages/ProviderResult.html">ProviderResult</a>&lt;<a href="/api/languages/InlayHint.html">InlayHint</a>&gt;</li></ul>`,10))])}const F=n(o,[["render",p]]);export{v as __pageData,F as default};
