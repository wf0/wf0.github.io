import{_ as s,c as t,I as e,j as a,a as n,a6 as l,o as h,D as o}from"./chunks/framework.V0McN4Tf.js";const D=JSON.parse('{"title":"DocumentHighlight","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/DocumentHighlight.md","filePath":"api/languages/DocumentHighlight.md","lastUpdated":1720600471000}'),r={name:"api/languages/DocumentHighlight.md"},g=a("h1",{id:"documenthighlight",tabindex:"-1"},[n("DocumentHighlight "),a("a",{class:"header-anchor",href:"#documenthighlight","aria-label":'Permalink to "DocumentHighlight"'},"​")],-1),c=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentHighlight.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.DocumentHighlight.html</a></p></details><p>文档高亮显示是文本文档中值得特别注意的范围。通常，文档高亮显示是通过更改其范围的背景色来可视化的。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DocumentHighlight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    kind</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> DocumentHighlightKind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    range</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IRange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="kind" tabindex="-1">kind <a class="header-anchor" href="#kind" aria-label="Permalink to &quot;kind&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/DocumentHighlightKind.html">DocumentHighlightKind</a></li><li>描述：高亮显示类型，默认为文本。</li></ul><h2 id="range" tabindex="-1">range <a class="header-anchor" href="#range" aria-label="Permalink to &quot;range&quot;">​</a></h2><ul><li>类型：<a href="/api/IRange.html">IRange</a></li><li>描述：高亮显示的范围。</li></ul>`,7);function p(d,k,m,u,_,f){const i=o("backTop");return h(),t("div",null,[g,e(i),c])}const b=s(r,[["render",p]]);export{D as __pageData,b as default};