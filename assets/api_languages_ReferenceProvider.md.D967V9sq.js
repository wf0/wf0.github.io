import{_ as a,c as s,I as t,j as e,a as n,a6 as r,o as l,D as o}from"./chunks/framework.CYBeC69b.js";const _=JSON.parse('{"title":"ReferenceProvider","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/ReferenceProvider.md","filePath":"api/languages/ReferenceProvider.md","lastUpdated":1720600471000}'),h={name:"api/languages/ReferenceProvider.md"},d=e("h1",{id:"referenceprovider",tabindex:"-1"},[n("ReferenceProvider "),e("a",{class:"header-anchor",href:"#referenceprovider","aria-label":'Permalink to "ReferenceProvider"'},"​")],-1),p=r(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.ReferenceProvider.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.ReferenceProvider.html</a></p></details><p>引用提供程序接口定义了扩展和查找引用功能之间的约定。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ReferenceProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    provideReferences</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">context</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProviderResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Location</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="providereferences" tabindex="-1">provideReferences <a class="header-anchor" href="#providereferences" aria-label="Permalink to &quot;provideReferences&quot;">​</a></h2><ul><li>语法：<code>provideReferences(model, position, context, token): ProviderResult&lt;Location[]&gt;</code></li><li>参数： <ul><li><code>model</code>: <a href="/api/editor/ITextModel.html">ITextModel</a></li><li><code>position</code>: <a href="/api/Position.html">Position</a></li><li><code>context</code>: <a href="/api/languages/ReferenceContext.html">ReferenceContext</a></li><li><code>token</code>: <a href="/api/CancellationToken.html">CancellationToken</a></li></ul></li><li>返回值：<a href="/api/languages/ProviderResult.html">ProviderResult</a>&lt;<a href="/api/languages/Location.html">Location</a>[]&gt;</li><li>描述：为给定的职位和文件提供一组项目范围的参考资料。</li></ul>`,5);function c(k,g,f,E,m,u){const i=o("backTop");return l(),s("div",null,[d,t(i),p])}const y=a(h,[["render",c]]);export{_ as __pageData,y as default};