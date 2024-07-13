import{_ as i,c as e,I as t,j as s,a as n,a6 as l,o as h,D as r}from"./chunks/framework.CYBeC69b.js";const m=JSON.parse('{"title":"ObjectASTNode","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/json/ObjectASTNode.md","filePath":"api/languages/json/ObjectASTNode.md","lastUpdated":1720600766000}'),o={name:"api/languages/json/ObjectASTNode.md"},p=s("h1",{id:"objectastnode",tabindex:"-1"},[n("ObjectASTNode "),s("a",{class:"header-anchor",href:"#objectastnode","aria-label":'Permalink to "ObjectASTNode"'},"​")],-1),d=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.ObjectASTNode.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.ObjectASTNode.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ObjectASTNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    children</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ASTNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    length</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    offset</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    parent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ASTNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    properties</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PropertyASTNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;object&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="children" tabindex="-1">children <a class="header-anchor" href="#children" aria-label="Permalink to &quot;children&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/ASTNode.html">ASTNode</a>[]</li></ul><h2 id="length" tabindex="-1">length <a class="header-anchor" href="#length" aria-label="Permalink to &quot;length&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="offset" tabindex="-1">offset <a class="header-anchor" href="#offset" aria-label="Permalink to &quot;offset&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="parent" tabindex="-1">parent <a class="header-anchor" href="#parent" aria-label="Permalink to &quot;parent&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/ASTNode.html">ASTNode</a></li></ul><h2 id="properties" tabindex="-1">properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;properties&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/PropertyASTNode.html">PropertyASTNode</a>[]</li></ul><h2 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h2><ul><li>类型：<code>&#39;object&#39;</code></li></ul><h2 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-label="Permalink to &quot;value&quot;">​</a></h2><ul><li>类型：<code>string | number | boolean</code></li></ul>`,16);function k(c,g,u,b,y,E){const a=r("backTop");return h(),e("div",null,[p,t(a),d])}const A=i(o,[["render",k]]);export{m as __pageData,A as default};