import{_ as i,c as e,I as t,j as s,a as n,a6 as o,o as h,D as l}from"./chunks/framework.CYBeC69b.js";const y=JSON.parse('{"title":"IJSONWorker","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/json/IJSONWorker.md","filePath":"api/languages/json/IJSONWorker.md","lastUpdated":1720600766000}'),r={name:"api/languages/json/IJSONWorker.md"},c=s("h1",{id:"ijsonworker",tabindex:"-1"},[n("IJSONWorker "),s("a",{class:"header-anchor",href:"#ijsonworker","aria-label":'Permalink to "IJSONWorker"'},"​")],-1),p=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.IJSONWorker.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.IJSONWorker.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IJSONWorker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getMatchingSchemas</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MatchingSchema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    parseJSONDocument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">uri</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">JSONDocument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="getmatchingschemas" tabindex="-1">getMatchingSchemas <a class="header-anchor" href="#getmatchingschemas" aria-label="Permalink to &quot;getMatchingSchemas&quot;">​</a></h2><ul><li>语法：<code>getMatchingSchemas(uri): Promise&lt;MatchingSchema[]&gt;</code></li><li>参数：<code>uri</code>：<code>string</code></li><li>返回值：<code>Promise&lt;</code><a href="/api/languages/json/MatchingSchema.html">MatchingSchema</a><code>&gt;</code></li></ul><h2 id="parsejsondocument" tabindex="-1">parseJSONDocument <a class="header-anchor" href="#parsejsondocument" aria-label="Permalink to &quot;parseJSONDocument&quot;">​</a></h2><ul><li>语法：<code>parseJSONDocument(uri): Promise&lt;JSONDocument&gt;</code></li><li>参数：<code>uri</code>：<code>string</code></li><li>返回值：<code>Promise&lt;</code><a href="/api/languages/json/JSONDocument.html">JSONDocument</a><code>&gt;</code></li></ul>`,6);function k(d,g,m,u,E,S){const a=l("backTop");return h(),e("div",null,[c,t(a),p])}const N=i(r,[["render",k]]);export{y as __pageData,N as default};