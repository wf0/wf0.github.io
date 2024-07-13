import{_ as i,c as e,I as l,j as a,a as t,a6 as n,o as h,D as r}from"./chunks/framework.CYBeC69b.js";const b=JSON.parse('{"title":"LanguageFilter","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/LanguageFilter.md","filePath":"api/languages/LanguageFilter.md","lastUpdated":1720600471000}'),o={name:"api/languages/LanguageFilter.md"},p=a("h1",{id:"languagefilter",tabindex:"-1"},[t("LanguageFilter "),a("a",{class:"header-anchor",href:"#languagefilter","aria-label":'Permalink to "LanguageFilter"'},"​")],-1),k=n(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LanguageFilter.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LanguageFilter.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LanguageFilter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    exclusive</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    hasAccessToAllModels</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    isBuiltin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    language</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    notebookType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    pattern</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IRelativePattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    scheme</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="exclusive" tabindex="-1">exclusive <a class="header-anchor" href="#exclusive" aria-label="Permalink to &quot;exclusive&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li></ul><h2 id="hasaccesstoallmodels" tabindex="-1">hasAccessToAllModels <a class="header-anchor" href="#hasaccesstoallmodels" aria-label="Permalink to &quot;hasAccessToAllModels&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述：此提供程序是在UI线程中实现的。</li></ul><h2 id="isbuiltin" tabindex="-1">isBuiltin <a class="header-anchor" href="#isbuiltin" aria-label="Permalink to &quot;isBuiltin&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述：此提供程序是内置的。</li></ul><h2 id="language" tabindex="-1">language <a class="header-anchor" href="#language" aria-label="Permalink to &quot;language&quot;">​</a></h2><ul><li>类型: <code>string</code></li><li>描述：此提供程序支持的语言。</li></ul><h2 id="notebooktype" tabindex="-1">notebookType <a class="header-anchor" href="#notebooktype" aria-label="Permalink to &quot;notebookType&quot;">​</a></h2><ul><li>类型: <code>string</code></li><li>描述：此提供程序支持的笔记本类型。</li></ul><h2 id="pattern" tabindex="-1">pattern <a class="header-anchor" href="#pattern" aria-label="Permalink to &quot;pattern&quot;">​</a></h2><ul><li>类型: <code>string</code> | <a href="/api/languages/IRelativePattern.html">IRelativePattern</a></li><li>描述：此提供程序支持的URI方案。</li></ul><h2 id="scheme" tabindex="-1">scheme <a class="header-anchor" href="#scheme" aria-label="Permalink to &quot;scheme&quot;">​</a></h2><ul><li>类型: <code>string</code></li><li>描述：此提供程序支持的URI方案。</li></ul>`,16);function d(c,g,u,F,E,y){const s=r("backTop");return h(),e("div",null,[p,l(s),k])}const _=i(o,[["render",d]]);export{b as __pageData,_ as default};