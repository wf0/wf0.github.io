import{_ as s,c as e,I as t,j as a,a as n,a6 as l,o as h,D as o}from"./chunks/framework.V0McN4Tf.js";const F=JSON.parse('{"title":"LanguageServiceDefaults","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/html/LanguageServiceDefaults.md","filePath":"api/languages/html/LanguageServiceDefaults.md","lastUpdated":1720600766000}'),g={name:"api/languages/html/LanguageServiceDefaults.md"},p=a("h1",{id:"languageservicedefaults",tabindex:"-1"},[n("LanguageServiceDefaults "),a("a",{class:"header-anchor",href:"#languageservicedefaults","aria-label":'Permalink to "LanguageServiceDefaults"'},"​")],-1),r=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.html.LanguageServiceDefaults.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.html.LanguageServiceDefaults.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LanguageServiceDefaults</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    languageId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    modeConfiguration</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> languages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ModeConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    onDidChange</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IEvent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">languages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">LanguageServiceDefaults</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> languages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setModeConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">modeConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="languageid" tabindex="-1">languageId <a class="header-anchor" href="#languageid" aria-label="Permalink to &quot;languageId&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="modeconfiguration" tabindex="-1">modeConfiguration <a class="header-anchor" href="#modeconfiguration" aria-label="Permalink to &quot;modeConfiguration&quot;">​</a></h2><ul><li>类型：<a href="/api/languages.html">languages</a>.<a href="/api/languages/html.html">html</a>.<a href="/api/languages/html/ModeConfiguration.html">ModeConfiguration</a>[]</li></ul><h2 id="ondidchange" tabindex="-1">onDidChange <a class="header-anchor" href="#ondidchange" aria-label="Permalink to &quot;onDidChange&quot;">​</a></h2><ul><li>类型：<a href="/api/IEvent.html">IEvent</a>&lt;<a href="/api/languages.html">languages</a>.<a href="/api/languages/html.html">html</a>.<a href="/api/languages/html/LanguageServiceDefaults.html">LanguageServiceDefaults</a>&gt;</li></ul><h2 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h2><ul><li>类型：<a href="/api/languages.html">languages</a>.<a href="/api/languages/html.html">html</a>.<a href="/api/languages/html/Options.html">Options</a></li></ul><h2 id="setmodeconfiguration" tabindex="-1">setModeConfiguration <a class="header-anchor" href="#setmodeconfiguration" aria-label="Permalink to &quot;setModeConfiguration&quot;">​</a></h2><ul><li>语法：<code>setModeConfiguration(modeConfiguration): void</code></li><li>参数：<code>modeConfiguration</code>: <a href="/api/languages.html">languages</a>.<a href="/api/languages/html.html">html</a>.<a href="/api/languages/html/ModeConfiguration.html">ModeConfiguration</a></li></ul><h2 id="setoptions" tabindex="-1">setOptions <a class="header-anchor" href="#setoptions" aria-label="Permalink to &quot;setOptions&quot;">​</a></h2><ul><li>语法：<code>setOptions(options): void</code></li><li>参数：<code>options</code>: <a href="/api/languages.html">languages</a>.<a href="/api/languages/html.html">html</a>.<a href="/api/languages/html/Options.html">Options</a></li></ul>`,14);function k(d,u,c,E,m,f){const i=o("backTop");return h(),e("div",null,[p,t(i),r])}const C=s(g,[["render",k]]);export{F as __pageData,C as default};