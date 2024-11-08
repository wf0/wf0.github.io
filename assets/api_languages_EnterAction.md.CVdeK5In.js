import{_ as i,c as t,I as s,j as a,a as n,a6 as l,o,D as r}from"./chunks/framework.V0McN4Tf.js";const b=JSON.parse('{"title":"EnterAction","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/EnterAction.md","filePath":"api/languages/EnterAction.md","lastUpdated":1720600471000}'),h={name:"api/languages/EnterAction.md"},p=a("h1",{id:"enteraction",tabindex:"-1"},[n("EnterAction "),a("a",{class:"header-anchor",href:"#enteraction","aria-label":'Permalink to "EnterAction"'},"​")],-1),c=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.EnterAction.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.EnterAction.html</a></p></details><p>描述按Enter键时要执行的操作。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EnterAction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    appendText</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    indentAction</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IndentAction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    removeText</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="appendtext" tabindex="-1">appendText <a class="header-anchor" href="#appendtext" aria-label="Permalink to &quot;appendText&quot;">​</a></h2><ul><li>类型：<code>string</code></li><li>描述：描述要附加在新行之后和缩进之后的文本。</li></ul><h2 id="indentaction" tabindex="-1">indentAction <a class="header-anchor" href="#indentaction" aria-label="Permalink to &quot;indentAction&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/IndentAction.html">IndentAction</a></li><li>描述：描述如何处理缩进。</li></ul><h2 id="removetext" tabindex="-1">removeText <a class="header-anchor" href="#removetext" aria-label="Permalink to &quot;removeText&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：描述要删除的文本。</li></ul>`,9);function d(k,g,m,E,u,_){const e=r("backTop");return o(),t("div",null,[p,s(e),c])}const f=i(h,[["render",d]]);export{b as __pageData,f as default};
