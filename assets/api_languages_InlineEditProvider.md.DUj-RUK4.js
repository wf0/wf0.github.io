import{_ as s,c as t,D as e,a as n,N as l,a5 as d,J as r,o}from"./chunks/framework.DCUvzp74.js";import"./chunks/theme.G4trTUnd.js";const f=JSON.parse('{"title":"InlineEditProvider","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/InlineEditProvider.md","filePath":"api/languages/InlineEditProvider.md","lastUpdated":1720600471000}'),h={name:"api/languages/InlineEditProvider.md"};function p(k,i,E,c,g,u){const a=r("backTop");return o(),t("div",null,[i[0]||(i[0]=e("h1",{id:"inlineeditprovider",tabindex:"-1"},[n("InlineEditProvider "),e("a",{class:"header-anchor",href:"#inlineeditprovider","aria-label":'Permalink to "InlineEditProvider"'},"​")],-1)),l(a),i[1]||(i[1]=d(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlineEditProvider.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlineEditProvider.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InlineEditProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    freeInlineEdit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">edit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    provideInlineEdit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProviderResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="泛型" tabindex="-1">泛型 <a class="header-anchor" href="#泛型" aria-label="Permalink to &quot;泛型&quot;">​</a></h2><ul><li><code>T extends IInlineEdit =</code> <a href="/api/languages/IInlineEdit.html">IInlineEdit</a></li></ul><h2 id="freeinlineedit" tabindex="-1">freeInlineEdit <a class="header-anchor" href="#freeinlineedit" aria-label="Permalink to &quot;freeInlineEdit&quot;">​</a></h2><ul><li>语法：<code>freeInlineEdit(edit): void</code></li><li>参数：<code>edit</code>: <code>T</code></li></ul><h2 id="provideinlineedit" tabindex="-1">provideInlineEdit <a class="header-anchor" href="#provideinlineedit" aria-label="Permalink to &quot;provideInlineEdit&quot;">​</a></h2><ul><li>语法：<code>provideInlineEdit(model, context, token): ProviderResult&lt;T&gt;</code></li><li>参数： <ul><li><code>model</code>: <a href="/api/editor/ITextModel.html">ITextModel</a></li><li><code>context</code>: <a href="/api/languages/IInlineEditContext.html">IInlineEditContext</a></li><li><code>token</code>: <a href="/api/CancellationToken.html">CancellationToken</a></li></ul></li><li>返回值：<a href="/api/languages/ProviderResult.html">ProviderResult</a><code>&lt;T&gt;</code></li></ul>`,8))])}const y=s(h,[["render",p]]);export{f as __pageData,y as default};
