import{_ as e,c as i,I as n,j as a,a as t,a6 as l,o as r,D as o}from"./chunks/framework.V0McN4Tf.js";const _=JSON.parse('{"title":"Hover","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/Hover.md","filePath":"api/languages/Hover.md","lastUpdated":1720600471000}'),h={name:"api/languages/Hover.md"},c=a("h1",{id:"hover",tabindex:"-1"},[t("Hover "),a("a",{class:"header-anchor",href:"#hover","aria-label":'Permalink to "Hover"'},"​")],-1),p=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.Hover.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.Hover.html</a></p></details><p>悬停表示符号或单词的附加信息。悬停在类似工具提示的小部件中进行渲染。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Hover</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    canDecreaseVerbosity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    canIncreaseVerbosity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    contents</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IMarkdownString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    range</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IRange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="candecreaseverbosity" tabindex="-1">canDecreaseVerbosity <a class="header-anchor" href="#candecreaseverbosity" aria-label="Permalink to &quot;canDecreaseVerbosity&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述：可以减少悬停的冗长程度</li></ul><h2 id="canincreaseverbosity" tabindex="-1">canIncreaseVerbosity <a class="header-anchor" href="#canincreaseverbosity" aria-label="Permalink to &quot;canIncreaseVerbosity&quot;">​</a></h2><ul><li>类型: <code>boolean</code></li><li>描述：可以增加悬停的冗长程度</li></ul><h2 id="contents" tabindex="-1">contents <a class="header-anchor" href="#contents" aria-label="Permalink to &quot;contents&quot;">​</a></h2><ul><li>类型: <a href="/api/IMarkdownString.html">IMarkdownString</a>[]</li><li>描述：内容</li></ul><h2 id="range" tabindex="-1">range <a class="header-anchor" href="#range" aria-label="Permalink to &quot;range&quot;">​</a></h2><ul><li>类型: <a href="/api/IRange.html">IRange</a></li><li>描述：范围</li></ul>`,11);function d(k,g,u,b,y,m){const s=o("backTop");return r(),i("div",null,[c,n(s),p])}const v=e(h,[["render",d]]);export{_ as __pageData,v as default};