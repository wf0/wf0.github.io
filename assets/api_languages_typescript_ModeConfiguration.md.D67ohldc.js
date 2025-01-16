import{_ as e,c as n,D as a,a as l,N as t,a5 as o,J as h,o as r}from"./chunks/framework.DCUvzp74.js";import"./chunks/theme.G4trTUnd.js";const F=JSON.parse('{"title":"ModeConfiguration","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/typescript/ModeConfiguration.md","filePath":"api/languages/typescript/ModeConfiguration.md","lastUpdated":1720600766000}'),d={name:"api/languages/typescript/ModeConfiguration.md"};function p(k,i,c,g,u,m){const s=h("backTop");return r(),n("div",null,[i[0]||(i[0]=a("h1",{id:"modeconfiguration",tabindex:"-1"},[l("ModeConfiguration "),a("a",{class:"header-anchor",href:"#modeconfiguration","aria-label":'Permalink to "ModeConfiguration"'},"​")],-1)),t(s),i[1]||(i[1]=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.ModeConfiguration.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.ModeConfiguration.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ModeConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    codeActions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    completionItems</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    definitions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    diagnostics</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    documentHighlights</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    documentRangeFormattingEdits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    documentSymbols</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    hovers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    inlayHints</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    onTypeFormattingEdits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    references</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    rename</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    signatureHelp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="codeactions" tabindex="-1">codeActions <a class="header-anchor" href="#codeactions" aria-label="Permalink to &quot;codeActions&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置代码操作提供程序。</li></ul><h2 id="completionitems" tabindex="-1">completionItems <a class="header-anchor" href="#completionitems" aria-label="Permalink to &quot;completionItems&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置代码补全提供程序。</li></ul><h2 id="definitions" tabindex="-1">definitions <a class="header-anchor" href="#definitions" aria-label="Permalink to &quot;definitions&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置定义提供程序。</li></ul><h2 id="diagnostics" tabindex="-1">diagnostics <a class="header-anchor" href="#diagnostics" aria-label="Permalink to &quot;diagnostics&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置诊断提供程序。</li></ul><h2 id="documenthighlights" tabindex="-1">documentHighlights <a class="header-anchor" href="#documenthighlights" aria-label="Permalink to &quot;documentHighlights&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置高亮引用提供程序。</li></ul><h2 id="documentrangeformattingedits" tabindex="-1">documentRangeFormattingEdits <a class="header-anchor" href="#documentrangeformattingedits" aria-label="Permalink to &quot;documentRangeFormattingEdits&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置格式化提供程序。</li></ul><h2 id="documentsymbols" tabindex="-1">documentSymbols <a class="header-anchor" href="#documentsymbols" aria-label="Permalink to &quot;documentSymbols&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置符号提供程序。</li></ul><h2 id="hovers" tabindex="-1">hovers <a class="header-anchor" href="#hovers" aria-label="Permalink to &quot;hovers&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置悬停提供程序。</li></ul><h2 id="inlayhints" tabindex="-1">inlayHints <a class="header-anchor" href="#inlayhints" aria-label="Permalink to &quot;inlayHints&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置提示提供程序。</li></ul><h2 id="ontypeformattingedits" tabindex="-1">onTypeFormattingEdits <a class="header-anchor" href="#ontypeformattingedits" aria-label="Permalink to &quot;onTypeFormattingEdits&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置格式化提供程序。</li></ul><h2 id="references" tabindex="-1">references <a class="header-anchor" href="#references" aria-label="Permalink to &quot;references&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置引用提供程序。</li></ul><h2 id="rename" tabindex="-1">rename <a class="header-anchor" href="#rename" aria-label="Permalink to &quot;rename&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置重命名提供程序。</li></ul><h2 id="signaturehelp" tabindex="-1">signatureHelp <a class="header-anchor" href="#signaturehelp" aria-label="Permalink to &quot;signatureHelp&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述: 定义是否启用内置签名帮助提供程序。</li></ul>`,28))])}const b=e(d,[["render",p]]);export{F as __pageData,b as default};
