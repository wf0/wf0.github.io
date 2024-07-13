import{_ as i,c as e,I as n,j as a,a as l,a6 as t,o as h,D as k}from"./chunks/framework.CYBeC69b.js";const b=JSON.parse('{"title":"IMonarchLanguage","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/IMonarchLanguage.md","filePath":"api/languages/IMonarchLanguage.md","lastUpdated":1720600471000}'),r={name:"api/languages/IMonarchLanguage.md"},o=a("h1",{id:"imonarchlanguage",tabindex:"-1"},[l("IMonarchLanguage "),a("a",{class:"header-anchor",href:"#imonarchlanguage","aria-label":'Permalink to "IMonarchLanguage"'},"​")],-1),p=t(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IMonarchLanguage.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IMonarchLanguage.html</a></p></details><p>语言定义</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IMonarchLanguage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    brackets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IMonarchLanguageBracket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    defaultToken</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    ignoreCase</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    includeLF</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    start</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    tokenPostfix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    tokenizer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IMonarchLanguageRule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    unicode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="brackets" tabindex="-1">brackets <a class="header-anchor" href="#brackets" aria-label="Permalink to &quot;brackets&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/IMonarchLanguageBracket.html">IMonarchLanguageBracket</a>[]</li><li>描述：例如[[“｛”，“｝”，&#39;delimiter.curli&#39;]]</li></ul><h2 id="defaulttoken" tabindex="-1">defaultToken <a class="header-anchor" href="#defaulttoken" aria-label="Permalink to &quot;defaultToken&quot;">​</a></h2><ul><li>类型：<code>string</code></li><li>描述：如果令牌化器中没有匹配项，则分配此令牌类（默认的“source”）</li></ul><h2 id="ignorecase" tabindex="-1">ignoreCase <a class="header-anchor" href="#ignorecase" aria-label="Permalink to &quot;ignoreCase&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：语言区分大小写</li></ul><h2 id="includelf" tabindex="-1">includeLF <a class="header-anchor" href="#includelf" aria-label="Permalink to &quot;includeLF&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：在行尾包括换行符（以字符的形式）默认为false</li></ul><h2 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;start&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：标记化器中的开始符号（默认情况下使用第一个条目）</li></ul><h2 id="tokenpostfix" tabindex="-1">tokenPostfix <a class="header-anchor" href="#tokenpostfix" aria-label="Permalink to &quot;tokenPostfix&quot;">​</a></h2><ul><li>类型：<code>string</code></li><li>描述：附加到每个令牌类</li></ul><h2 id="tokenizer" tabindex="-1">tokenizer <a class="header-anchor" href="#tokenizer" aria-label="Permalink to &quot;tokenizer&quot;">​</a></h2><ul><li>类型：<code>{ [name: string]: </code><a href="/api/languages/IMonarchLanguageRule.html">IMonarchLanguageRule</a><code>[] }</code></li><li>描述：令牌化器规则</li></ul><h2 id="unicode" tabindex="-1">unicode <a class="header-anchor" href="#unicode" aria-label="Permalink to &quot;unicode&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：是否支持Unicode字符集</li></ul>`,19);function d(c,g,u,E,F,y){const s=k("backTop");return h(),e("div",null,[o,n(s),p])}const f=i(r,[["render",d]]);export{b as __pageData,f as default};