import{_ as a,c as i,I as s,j as e,a as n,a6 as o,o as r,D as l}from"./chunks/framework.V0McN4Tf.js";const x=JSON.parse('{"title":"CompletionContext","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/CompletionContext.md","filePath":"api/languages/CompletionContext.md","lastUpdated":1720600471000}'),p={name:"api/languages/CompletionContext.md"},h=e("h1",{id:"completioncontext",tabindex:"-1"},[n("CompletionContext "),e("a",{class:"header-anchor",href:"#completioncontext","aria-label":'Permalink to "CompletionContext"'},"​")],-1),c=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionContext.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionContext.html</a></p></details><p>包含有关触发完成提供程序(<a href="/api/languages/CompletionItemProvider.html#providecompletionitems">completion provider</a>)的上下文的其他信息。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CompletionContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    triggerCharacter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    triggerKind</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CompletionTriggerKind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="triggercharacter" tabindex="-1">triggerCharacter <a class="header-anchor" href="#triggercharacter" aria-label="Permalink to &quot;triggerCharacter&quot;">​</a></h2><ul><li>类型：<code>string</code></li><li>描述：触发完成项提供程序的字符。</li></ul><h2 id="triggerkind" tabindex="-1">triggerKind <a class="header-anchor" href="#triggerkind" aria-label="Permalink to &quot;triggerKind&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/CompletionTriggerKind.html">CompletionTriggerKind</a></li><li>描述：触发完成项提供程序的类型。</li></ul>`,7);function d(g,m,k,C,u,_){const t=l("backTop");return r(),i("div",null,[h,s(t),c])}const E=a(p,[["render",d]]);export{x as __pageData,E as default};