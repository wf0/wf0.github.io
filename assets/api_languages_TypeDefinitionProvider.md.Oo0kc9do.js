import{_ as a,c as s,I as t,j as i,a as n,a6 as o,o as l,D as r}from"./chunks/framework.CYBeC69b.js";const v=JSON.parse('{"title":"TypeDefinitionProvider","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/TypeDefinitionProvider.md","filePath":"api/languages/TypeDefinitionProvider.md","lastUpdated":1720600471000}'),p={name:"api/languages/TypeDefinitionProvider.md"},d=i("h1",{id:"typedefinitionprovider",tabindex:"-1"},[n("TypeDefinitionProvider "),i("a",{class:"header-anchor",href:"#typedefinitionprovider","aria-label":'Permalink to "TypeDefinitionProvider"'},"​")],-1),h=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.TypeDefinitionProvider.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.TypeDefinitionProvider.html</a></p></details><p>类型定义提供程序接口定义扩展和转到类型定义功能之间的约定。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TypeDefinitionProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    provideTypeDefinition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProviderResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Definition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="providetypedefinition" tabindex="-1">provideTypeDefinition <a class="header-anchor" href="#providetypedefinition" aria-label="Permalink to &quot;provideTypeDefinition&quot;">​</a></h2><ul><li>语法：<code>provideTypeDefinition(model, position, token): ProviderResult&lt;Definition&gt;</code></li><li>参数： <ul><li><code>model</code>: <a href="/api/editor/ITextModel.html">ITextModel</a></li><li><code>position</code>: <a href="/api/Position.html">Position</a></li><li><code>token</code>: <a href="/api/CancellationToken.html">CancellationToken</a></li></ul></li><li>返回值：<a href="/api/languages/ProviderResult.html">ProviderResult</a>&lt;<a href="/api/languages/Definition.html">Definition</a>&gt;</li><li>描述：提供给定位置处符号的类型定义和文档。</li></ul>`,5);function k(c,f,g,y,E,m){const e=r("backTop");return l(),s("div",null,[d,t(e),h])}const _=a(p,[["render",k]]);export{v as __pageData,_ as default};