import{_ as a,c as e,I as l,j as i,a as t,a6 as n,o as r,D as h}from"./chunks/framework.CYBeC69b.js";const b=JSON.parse('{"title":"Environment","description":"","frontmatter":{},"headers":[],"relativePath":"api/Environment.md","filePath":"api/Environment.md","lastUpdated":1720599564000}'),o={name:"api/Environment.md"},k=i("h1",{id:"environment",tabindex:"-1"},[t("Environment "),i("a",{class:"header-anchor",href:"#environment","aria-label":'Permalink to "Environment"'},"​")],-1),p=n(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/Environment.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/Environment.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    baseUrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    globalAPI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    createTrustedTypesPolicy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">policyName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">policyOptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ITrustedTypePolicy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getWorker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">workerId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Worker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Worker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getWorkerUrl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">workerId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="baseurl" tabindex="-1">baseUrl <a class="header-anchor" href="#baseurl" aria-label="Permalink to &quot;baseUrl&quot;">​</a></h2><ul><li>类型：<code>string</code></li><li>描述：编辑器源所在的基本url（包含vs文件夹）</li></ul><h2 id="globalapi" tabindex="-1">globalAPI <a class="header-anchor" href="#globalapi" aria-label="Permalink to &quot;globalAPI&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：是否启用全局API</li></ul><h2 id="createtrustedtypespolicy" tabindex="-1">createTrustedTypesPolicy <a class="header-anchor" href="#createtrustedtypespolicy" aria-label="Permalink to &quot;createTrustedTypesPolicy&quot;">​</a></h2><ul><li>语法：<code>createTrustedTypesPolicy(policyName, policyOptions?): ITrustedTypePolicy</code></li><li>参数： <ul><li><code>policyName</code>: <code>string</code></li><li><code>policyOptions?</code>: <a href="/api/ITrustedTypePolicyOptions.html">ITrustedTypePolicyOptions</a></li></ul></li><li>描述：创建受信任类型策略（与window.trustedTypes.createPolicy相同的API）</li></ul><h2 id="getworker" tabindex="-1">getWorker <a class="header-anchor" href="#getworker" aria-label="Permalink to &quot;getWorker&quot;">​</a></h2><ul><li>语法：<code>getWorker(workerId, label): Worker | Promise&lt;Worker&gt;</code></li><li>参数： <ul><li><code>workerId</code>: <code>string</code></li><li><code>label</code>: <code>string</code></li></ul></li><li>描述：获取worker。（注意：如果定义了getWorker，则不会调用getWorkerUrl。）</li></ul><h2 id="getworkerurl" tabindex="-1">getWorkerUrl <a class="header-anchor" href="#getworkerurl" aria-label="Permalink to &quot;getWorkerUrl&quot;">​</a></h2><ul><li>语法：<code>getWorkerUrl(workerId, label): string</code></li><li>参数： <ul><li><code>workerId</code>: <code>string</code></li><li><code>label</code>: <code>string</code></li></ul></li><li>描述：获取worker的url。</li></ul>`,12);function d(c,E,g,y,u,m){const s=h("backTop");return r(),e("div",null,[k,l(s),p])}const _=a(o,[["render",d]]);export{b as __pageData,_ as default};
