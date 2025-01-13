import{_ as e,c as t,D as a,a as n,N as l,a5 as h,J as p,o as r}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const y=JSON.parse('{"title":"InlineCompletion","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/InlineCompletion.md","filePath":"api/languages/InlineCompletion.md","lastUpdated":1720600471000}'),o={name:"api/languages/InlineCompletion.md"};function k(d,i,c,g,m,E){const s=p("backTop");return r(),t("div",null,[i[0]||(i[0]=a("h1",{id:"inlinecompletion",tabindex:"-1"},[n("InlineCompletion "),a("a",{class:"header-anchor",href:"#inlinecompletion","aria-label":'Permalink to "InlineCompletion"'},"​")],-1)),l(s),i[1]||(i[1]=h(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlineCompletion.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.InlineCompletion.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InlineCompletion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    additionalTextEdits</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ISingleEditOperation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    command</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    completeBracketPairs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    filterText</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    insertText</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        snippet</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    range</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IRange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="additionaltextedits" tabindex="-1">additionalTextEdits <a class="header-anchor" href="#additionaltextedits" aria-label="Permalink to &quot;additionalTextEdits&quot;">​</a></h2><ul><li>类型：<a href="/api/editor/ISingleEditOperation.html">ISingleEditOperation</a>[]</li><li>描述：选择此完成时应用的附加文本编辑的可选数组。编辑不得与主编辑重叠，也不得与其本身重叠。</li></ul><h2 id="command" tabindex="-1">command <a class="header-anchor" href="#command" aria-label="Permalink to &quot;command&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/Command.html">Command</a></li></ul><h2 id="completebracketpairs" tabindex="-1">completeBracketPairs <a class="header-anchor" href="#completebracketpairs" aria-label="Permalink to &quot;completeBracketPairs&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：是否应自动完成括号对。</li></ul><h2 id="filtertext" tabindex="-1">filterText <a class="header-anchor" href="#filtertext" aria-label="Permalink to &quot;filterText&quot;">​</a></h2><ul><li>类型：<code>string</code></li><li>描述：用于排序和筛选的过滤文本。</li></ul><h2 id="inserttext" tabindex="-1">insertText <a class="header-anchor" href="#inserttext" aria-label="Permalink to &quot;insertText&quot;">​</a></h2><ul><li>类型：<code>string</code> | <code>{ snippet: string; }</code></li><li>描述：插入文本。</li></ul><h2 id="range" tabindex="-1">range <a class="header-anchor" href="#range" aria-label="Permalink to &quot;range&quot;">​</a></h2><ul><li>类型：<a href="/api/IRange.html">IRange</a></li><li>描述：可选的插入文本范围。</li></ul>`,14))])}const f=e(o,[["render",k]]);export{y as __pageData,f as default};
