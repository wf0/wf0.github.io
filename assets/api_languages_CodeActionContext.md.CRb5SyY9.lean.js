import{_ as e,c as t,D as i,a as n,N as l,a5 as o,J as r,o as h}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const E=JSON.parse('{"title":"CodeActionContext","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/CodeActionContext.md","filePath":"api/languages/CodeActionContext.md","lastUpdated":1720600471000}'),p={name:"api/languages/CodeActionContext.md"};function d(c,a,k,g,m,u){const s=r("backTop");return h(),t("div",null,[a[0]||(a[0]=i("h1",{id:"codeactioncontext",tabindex:"-1"},[n("CodeActionContext "),i("a",{class:"header-anchor",href:"#codeactioncontext","aria-label":'Permalink to "CodeActionContext"'},"​")],-1)),l(s),a[1]||(a[1]=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeActionContext.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CodeActionContext.html</a></p></details><p>包含有关运行代码操作的上下文的其他诊断信息。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CodeActionContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    markers</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IMarkerData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    only</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    trigger</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CodeActionTriggerType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="markers" tabindex="-1">markers <a class="header-anchor" href="#markers" aria-label="Permalink to &quot;markers&quot;">​</a></h2><ul><li>类型： <a href="/api/editor/IMarkerData.html">IMarkerData</a></li><li>描述：一系列诊断。</li></ul><h2 id="only" tabindex="-1">only <a class="header-anchor" href="#only" aria-label="Permalink to &quot;only&quot;">​</a></h2><ul><li>类型： <code>string</code></li><li>描述：请求返回的操作类型。</li></ul><h2 id="trigger" tabindex="-1">trigger <a class="header-anchor" href="#trigger" aria-label="Permalink to &quot;trigger&quot;">​</a></h2><ul><li>类型： <a href="/api/languages/CodeActionTriggerType.html">CodeActionTriggerType</a></li><li>描述：请求代码操作的原因。</li></ul>`,9))])}const f=e(p,[["render",d]]);export{E as __pageData,f as default};
