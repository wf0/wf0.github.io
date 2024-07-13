import{_ as i,c as e,I as t,j as s,a as n,a6 as l,o as h,D as r}from"./chunks/framework.CYBeC69b.js";const f=JSON.parse('{"title":"DiagnosticRelatedInformation","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/typescript/DiagnosticRelatedInformation.md","filePath":"api/languages/typescript/DiagnosticRelatedInformation.md","lastUpdated":1720600766000}'),p={name:"api/languages/typescript/DiagnosticRelatedInformation.md"},o=s("h1",{id:"diagnosticrelatedinformation",tabindex:"-1"},[n("DiagnosticRelatedInformation "),s("a",{class:"header-anchor",href:"#diagnosticrelatedinformation","aria-label":'Permalink to "DiagnosticRelatedInformation"'},"​")],-1),k=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.DiagnosticRelatedInformation.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.DiagnosticRelatedInformation.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DiagnosticRelatedInformation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    category</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    code</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        fileName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    messageText</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DiagnosticMessageChain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    start</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="category" tabindex="-1">category <a class="header-anchor" href="#category" aria-label="Permalink to &quot;category&quot;">​</a></h2><ul><li>类型：<code>0 | 1 | 2 | 3</code></li><li>描述：诊断类别：警告=0，错误=1，建议=2，消息=3</li></ul><h2 id="code" tabindex="-1">code <a class="header-anchor" href="#code" aria-label="Permalink to &quot;code&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="file" tabindex="-1">file <a class="header-anchor" href="#file" aria-label="Permalink to &quot;file&quot;">​</a></h2><ul><li>类型：<code> fileName: string }</code></li><li>描述：TypeScriptWorker删除除fileName属性以外的所有属性，以避免序列化循环JSON结构。</li></ul><h2 id="length" tabindex="-1">length <a class="header-anchor" href="#length" aria-label="Permalink to &quot;length&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="messagetext" tabindex="-1">messageText <a class="header-anchor" href="#messagetext" aria-label="Permalink to &quot;messageText&quot;">​</a></h2><ul><li>类型：<code>string |</code> <a href="/api/languages/typescript/DiagnosticMessageChain.html">DiagnosticMessageChain</a></li></ul><h2 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;start&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul>`,14);function d(c,g,m,y,u,E){const a=r("backTop");return h(),e("div",null,[o,t(a),k])}const b=i(p,[["render",d]]);export{f as __pageData,b as default};
