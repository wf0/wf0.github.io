import{_ as t,c as n,D as i,a as e,N as l,a5 as r,J as h,o as p}from"./chunks/framework.DCUvzp74.js";import"./chunks/theme.G4trTUnd.js";const F=JSON.parse('{"title":"IMarkdownString","description":"","frontmatter":{},"headers":[],"relativePath":"api/IMarkdownString.md","filePath":"api/IMarkdownString.md","lastUpdated":1720599564000}'),o={name:"api/IMarkdownString.md"};function k(d,s,c,u,g,m){const a=h("backTop");return p(),n("div",null,[s[0]||(s[0]=i("h1",{id:"imarkdownstring",tabindex:"-1"},[e("IMarkdownString "),i("a",{class:"header-anchor",href:"#imarkdownstring","aria-label":'Permalink to "IMarkdownString"'},"​")],-1)),l(a),s[1]||(s[1]=r(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/IMarkdownString.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/IMarkdownString.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IMarkdownString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    baseUri</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UriComponents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    isTrusted</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MarkdownStringTrustedOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    supportHtml</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    supportThemeIcons</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    uris</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">href</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UriComponents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="baseuri" tabindex="-1">baseUri <a class="header-anchor" href="#baseuri" aria-label="Permalink to &quot;baseUri&quot;">​</a></h2><ul><li>类型：<a href="/api/UriComponents.html">UriComponents</a></li></ul><h2 id="istrusted" tabindex="-1">isTrusted <a class="header-anchor" href="#istrusted" aria-label="Permalink to &quot;isTrusted&quot;">​</a></h2><ul><li>类型：<code>boolean</code> | <a href="/api/MarkdownStringTrustedOptions.html">MarkdownStringTrustedOptions</a></li></ul><h2 id="supporthtml" tabindex="-1">supportHtml <a class="header-anchor" href="#supporthtml" aria-label="Permalink to &quot;supportHtml&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="supportthemeicons" tabindex="-1">supportThemeIcons <a class="header-anchor" href="#supportthemeicons" aria-label="Permalink to &quot;supportThemeIcons&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="uris" tabindex="-1">uris <a class="header-anchor" href="#uris" aria-label="Permalink to &quot;uris&quot;">​</a></h2><ul><li>类型：<code>{ [href: string]: UriComponents; }</code></li><li>参数：<code>[href: string]: </code><a href="/api/UriComponents.html">UriComponents</a></li></ul><h2 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul>`,14))])}const b=t(o,[["render",k]]);export{F as __pageData,b as default};
