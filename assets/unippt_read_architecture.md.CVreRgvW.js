import{_ as n,c as t,D as i,a as h,N as p,a5 as k,J as l,o as e}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const r="/unippt-jgt.png",d="/unippt-yjsjgt.png",b=JSON.parse('{"title":"项目架构","description":"","frontmatter":{"navbar":false},"headers":[],"relativePath":"unippt/read/architecture.md","filePath":"unippt/read/architecture.md","lastUpdated":1729841289000}'),E={name:"unippt/read/architecture.md"};function g(c,s,y,o,F,A){const a=l("backTop");return e(),t("div",null,[s[0]||(s[0]=i("h1",{id:"项目架构",tabindex:"-1"},[h("项目架构 "),i("a",{class:"header-anchor",href:"#项目架构","aria-label":'Permalink to "项目架构"'},"​")],-1)),p(a),s[1]||(s[1]=k('<p><img src="'+r+'"><img src="'+d+`"></p><p>结构图如上，在架构上，借鉴了 <a href="https://hufe.club/canvas-editor-docs/" target="_blank" rel="noreferrer">canvas-editor</a> 的优秀思路，向外暴露 UniPPTX 核心模块，并提供用户可操作对象：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UniPPTX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> command</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Command</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Command API</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> eventBus</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventBus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EventBusMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 事件监听器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> register</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注册快捷键</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> destroy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 销毁编辑器方法</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> render</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 重新渲染</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>在协同部分，将 Yjs 与 Draw 进行唯一联系，降低协同部分对源功能代码的侵入，同时也将 Yjs 模块与其他模块进行解耦，提升可阅读性、可维护性。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Draw.ts 提供唯一方法 广播协同数据，其他模块需要协同，调用此方法即可</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 广播 websocket</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">broadcast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data: YjsSendData) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.websocket) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.websocket.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// WebSocket.ts 中，监听协同事件，通过唯一的 draw 参数，实现事件的响应</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 任何的事件，都直接触发 draw eventHandle 即可</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.ymap.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">observe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">transaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (transaction.local) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 本地触发的 observer 不需要观察</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onYjsEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,5))])}const C=n(E,[["render",g]]);export{b as __pageData,C as default};
