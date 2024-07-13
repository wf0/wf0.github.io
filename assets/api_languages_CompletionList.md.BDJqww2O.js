import{_ as a,c as e,I as t,j as s,a as n,a6 as l,o,D as p}from"./chunks/framework.CYBeC69b.js";const y=JSON.parse('{"title":"CompletionList","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/CompletionList.md","filePath":"api/languages/CompletionList.md","lastUpdated":1720600471000}'),h={name:"api/languages/CompletionList.md"},r=s("h1",{id:"completionlist",tabindex:"-1"},[n("CompletionList "),s("a",{class:"header-anchor",href:"#completionlist","aria-label":'Permalink to "CompletionList"'},"​")],-1),d=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionList.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.CompletionList.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CompletionList</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    incomplete</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    suggestions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CompletionItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    dispose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="incomplete" tabindex="-1">incomplete <a class="header-anchor" href="#incomplete" aria-label="Permalink to &quot;incomplete&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li></ul><h2 id="suggestions" tabindex="-1">suggestions <a class="header-anchor" href="#suggestions" aria-label="Permalink to &quot;suggestions&quot;">​</a></h2><ul><li>类型: <a href="/api/languages/CompletionItem.html">CompletionItem</a>[]</li></ul><h2 id="dispose" tabindex="-1">dispose <a class="header-anchor" href="#dispose" aria-label="Permalink to &quot;dispose&quot;">​</a></h2><ul><li>语法: <code>dispose(): void</code></li></ul>`,8);function c(k,m,g,u,_,E){const i=p("backTop");return o(),e("div",null,[r,t(i),d])}const b=a(h,[["render",c]]);export{y as __pageData,b as default};