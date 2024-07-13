import{_ as a,c as n,I as h,j as s,a as k,a6 as t,o as l,D as e}from"./chunks/framework.CYBeC69b.js";const u=JSON.parse('{"title":"IEncodedLineTokens","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/IEncodedLineTokens.md","filePath":"api/languages/IEncodedLineTokens.md","lastUpdated":1720600471000}'),p={name:"api/languages/IEncodedLineTokens.md"},d=s("h1",{id:"iencodedlinetokens",tabindex:"-1"},[k("IEncodedLineTokens "),s("a",{class:"header-anchor",href:"#iencodedlinetokens","aria-label":'Permalink to "IEncodedLineTokens"'},"​")],-1),r=t(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IEncodedLineTokens.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IEncodedLineTokens.html</a></p></details><p>行标记化的结果。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IEncodedLineTokens</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    endState</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    tokens</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Uint32Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="endstate" tabindex="-1">endState <a class="header-anchor" href="#endstate" aria-label="Permalink to &quot;endState&quot;">​</a></h2><ul><li>类型: <a href="/api/languages/IState.html">IState</a></li><li>描述：标记化结束状态。将持有指向此对象的指针，并且在返回指针后，标记化器不应修改该对象。</li></ul><h2 id="tokens" tabindex="-1">tokens <a class="header-anchor" href="#tokens" aria-label="Permalink to &quot;tokens&quot;">​</a></h2><ul><li>类型: <code>Uint32Array</code></li><li>描述：行上的标记采用二进制编码格式。每个令牌占用两个数组索引。</li><li>示例：</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">at offset </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> startIndex</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">at offset </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> metadata Meta data is </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> binary </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3322</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2222</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2222</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1111</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1111</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0000</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1098</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7654</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3210</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9876</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5432</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1098</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 7654</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3210</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">---------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bbbb bbbb bfff ffff ffFF </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">FFTT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LLLL</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LLLL</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">L</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EncodedLanguageId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bits): Use getEncodedLanguageId to get the encoded </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a language.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> StandardTokenType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bits): Other </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Comment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, String </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, RegEx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">F</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FontStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bits): None </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Italic </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Bold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Underline </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Strikethrough </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foreground </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ColorId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bits)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">b </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> background </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ColorId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bits)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">The color value for each colorId is defined </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IStandaloneThemeData.customTokenColors: e.g. colorId </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is stored </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IStandaloneThemeData.customTokenColors[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]. Color id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> means no color, id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> is for the </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foreground color, id </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> for the </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> background.</span></span></code></pre></div>`,8);function E(g,o,F,y,C,c){const i=e("backTop");return l(),n("div",null,[d,h(i),r])}const f=a(p,[["render",E]]);export{u as __pageData,f as default};
