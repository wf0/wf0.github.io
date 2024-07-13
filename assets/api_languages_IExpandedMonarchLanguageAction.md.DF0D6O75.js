import{_ as s,c as n,I as e,j as a,a as t,a6 as l,o as h,D as r}from"./chunks/framework.CYBeC69b.js";const y=JSON.parse('{"title":"IExpandedMonarchLanguageAction","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/IExpandedMonarchLanguageAction.md","filePath":"api/languages/IExpandedMonarchLanguageAction.md","lastUpdated":1720600471000}'),o={name:"api/languages/IExpandedMonarchLanguageAction.md"},d=a("h1",{id:"iexpandedmonarchlanguageaction",tabindex:"-1"},[t("IExpandedMonarchLanguageAction "),a("a",{class:"header-anchor",href:"#iexpandedmonarchlanguageaction","aria-label":'Permalink to "IExpandedMonarchLanguageAction"'},"​")],-1),k=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IExpandedMonarchLanguageAction.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IExpandedMonarchLanguageAction.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IExpandedMonarchLanguageAction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    bracket</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    cases</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    goBack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    group</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IMonarchLanguageAction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    next</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    nextEmbedded</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    switchTo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    token</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="bracket" tabindex="-1">bracket <a class="header-anchor" href="#bracket" aria-label="Permalink to &quot;bracket&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="cases" tabindex="-1">cases <a class="header-anchor" href="#cases" aria-label="Permalink to &quot;cases&quot;">​</a></h2><ul><li>类型：<code>Object</code></li><li>描述：从字符串映射到ILanguageAction</li></ul><h2 id="goback" tabindex="-1">goBack <a class="header-anchor" href="#goback" aria-label="Permalink to &quot;goBack&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：返回流中的n个字符</li></ul><h2 id="group" tabindex="-1">group <a class="header-anchor" href="#group" aria-label="Permalink to &quot;group&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/IMonarchLanguageAction.html">IMonarchLanguageAction</a>[]</li><li>描述：一个数组，其中每个元素都是一个ILanguageAction</li></ul><h2 id="log" tabindex="-1">log <a class="header-anchor" href="#log" aria-label="Permalink to &quot;log&quot;">​</a></h2><ul><li>类型：<code>string</code></li><li>描述：将消息记录到浏览器控制台窗口</li></ul><h2 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next&quot;">​</a></h2><ul><li>类型：<code>string</code></li><li>描述：下一个状态</li></ul><h2 id="nextembedded" tabindex="-1">nextEmbedded <a class="header-anchor" href="#nextembedded" aria-label="Permalink to &quot;nextEmbedded&quot;">​</a></h2><ul><li>类型：<code>string</code></li><li>描述：下一个嵌套语言</li></ul><h2 id="switchto" tabindex="-1">switchTo <a class="header-anchor" href="#switchto" aria-label="Permalink to &quot;switchTo&quot;">​</a></h2><ul><li>类型：<code>string</code></li><li>描述：下一个状态</li></ul><h2 id="token" tabindex="-1">token <a class="header-anchor" href="#token" aria-label="Permalink to &quot;token&quot;">​</a></h2><ul><li>类型：<code>string</code></li><li>描述：令牌类型</li></ul>`,20);function p(c,g,u,E,F,b){const i=r("backTop");return h(),n("div",null,[d,e(i),k])}const x=s(o,[["render",p]]);export{y as __pageData,x as default};
