import{_ as s,c as t,D as e,a as n,N as l,a5 as o,J as r,o as h}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const v=JSON.parse('{"title":"RenameProvider","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/RenameProvider.md","filePath":"api/languages/RenameProvider.md","lastUpdated":1720600471000}'),p={name:"api/languages/RenameProvider.md"};function d(k,i,c,m,g,E){const a=r("backTop");return h(),t("div",null,[i[0]||(i[0]=e("h1",{id:"renameprovider",tabindex:"-1"},[n("RenameProvider "),e("a",{class:"header-anchor",href:"#renameprovider","aria-label":'Permalink to "RenameProvider"'},"​")],-1)),l(a),i[1]||(i[1]=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.RenameProvider.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.RenameProvider.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RenameProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    provideRenameEdits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">newName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProviderResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WorkspaceEdit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Rejection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    resolveRenameLocation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProviderResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RenameLocation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Rejection</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="providerenameedits" tabindex="-1">provideRenameEdits <a class="header-anchor" href="#providerenameedits" aria-label="Permalink to &quot;provideRenameEdits&quot;">​</a></h2><ul><li>语法：<code>provideRenameEdits(model, position, newName, token): ProviderResult&lt;WorkspaceEdit &amp; Rejection&gt;</code></li><li>参数： <ul><li><code>model</code>: <a href="/api/editor/ITextModel.html">ITextModel</a></li><li><code>position</code>: <a href="/api/Position.html">Position</a></li><li><code>newName</code>: <code>string</code></li><li><code>token</code>: <a href="/api/CancellationToken.html">CancellationToken</a></li></ul></li><li>返回值：<a href="/api/languages/ProviderResult.html">ProviderResult</a>&lt;<a href="/api/languages/WorkspaceEdit.html">WorkspaceEdit</a> &amp; <a href="/api/languages/Rejection.html">Rejection</a>&gt;</li></ul><h2 id="resolverenamelocation" tabindex="-1">resolveRenameLocation <a class="header-anchor" href="#resolverenamelocation" aria-label="Permalink to &quot;resolveRenameLocation&quot;">​</a></h2><ul><li>语法：<code>resolveRenameLocation(model, position, token): ProviderResult&lt;RenameLocation &amp; Rejection&gt;</code></li><li>参数： <ul><li><code>model</code>: <a href="/api/editor/ITextModel.html">ITextModel</a></li><li><code>position</code>: <a href="/api/Position.html">Position</a></li><li><code>token</code>: <a href="/api/CancellationToken.html">CancellationToken</a></li></ul></li><li>返回值：<a href="/api/languages/ProviderResult.html">ProviderResult</a>&lt;<a href="/api/languages/RenameLocation.html">RenameLocation</a> &amp; <a href="/api/languages/Rejection.html">Rejection</a>&gt;</li></ul>`,6))])}const F=s(p,[["render",d]]);export{v as __pageData,F as default};
