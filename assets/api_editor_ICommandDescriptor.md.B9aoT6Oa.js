import{_ as i,c as e,I as t,j as a,a as n,a6 as r,o,D as l}from"./chunks/framework.CYBeC69b.js";const f=JSON.parse('{"title":"ICommandDescriptor","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/ICommandDescriptor.md","filePath":"api/editor/ICommandDescriptor.md","lastUpdated":1720599564000}'),d={name:"api/editor/ICommandDescriptor.md"},p=a("h1",{id:"icommanddescriptor",tabindex:"-1"},[n("ICommandDescriptor "),a("a",{class:"header-anchor",href:"#icommanddescriptor","aria-label":'Permalink to "ICommandDescriptor"'},"​")],-1),h=r(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICommandDescriptor.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.ICommandDescriptor.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ICommandDescriptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    run</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ICommandHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h2><ul><li>类型: <code>string</code></li><li>描述:命令的唯一ID</li></ul><h2 id="run" tabindex="-1">run <a class="header-anchor" href="#run" aria-label="Permalink to &quot;run&quot;">​</a></h2><ul><li>类型: <a href="/api/editor/ICommandHandler.html">ICommandHandler</a></li><li>描述：当命令被触发时将执行的回调</li></ul>`,6);function c(m,k,_,u,g,C){const s=l("backTop");return o(),e("div",null,[p,t(s),h])}const b=i(d,[["render",c]]);export{f as __pageData,b as default};
