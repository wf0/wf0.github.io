import{_ as s,c as e,D as t,a as n,N as r,a5 as o,J as l,o as p}from"./chunks/framework.DCUvzp74.js";import"./chunks/theme.G4trTUnd.js";const u=JSON.parse('{"title":"OnTypeFormattingEditProvider","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/OnTypeFormattingEditProvider.md","filePath":"api/languages/OnTypeFormattingEditProvider.md","lastUpdated":1720600471000}'),d={name:"api/languages/OnTypeFormattingEditProvider.md"};function h(k,i,g,c,E,m){const a=l("backTop");return p(),e("div",null,[i[0]||(i[0]=t("h1",{id:"ontypeformattingeditprovider",tabindex:"-1"},[n("OnTypeFormattingEditProvider "),t("a",{class:"header-anchor",href:"#ontypeformattingeditprovider","aria-label":'Permalink to "OnTypeFormattingEditProvider"'},"​")],-1)),r(a),i[1]||(i[1]=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.OnTypeFormattingEditProvider.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.OnTypeFormattingEditProvider.html</a></p></details><p>文档格式设置提供程序接口定义扩展和格式设置功能之间的约定。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OnTypeFormattingEditProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    autoFormatTriggerCharacters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    provideOnTypeFormattingEdits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ProviderResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">TextEdit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="autoformattriggercharacters" tabindex="-1">autoFormatTriggerCharacters <a class="header-anchor" href="#autoformattriggercharacters" aria-label="Permalink to &quot;autoFormatTriggerCharacters&quot;">​</a></h2><ul><li>类型：<code>string[]</code></li></ul><h2 id="provideontypeformattingedits" tabindex="-1">provideOnTypeFormattingEdits <a class="header-anchor" href="#provideontypeformattingedits" aria-label="Permalink to &quot;provideOnTypeFormattingEdits&quot;">​</a></h2><ul><li>语法：<code>provideOnTypeFormattingEdits(model, position, ch, options, token): ProviderResult&lt;TextEdit[]&gt;</code></li><li>参数： <ul><li><code>model</code>：<a href="/api/editor/ITextModel.html">ITextModel</a></li><li><code>position</code>：<a href="/api/Position.html">Position</a></li><li><code>ch</code>：<code>string</code></li><li><code>options</code>：<a href="/api/languages/FormattingOptions.html">FormattingOptions</a></li><li><code>token</code>：<a href="/api/CancellationToken.html">CancellationToken</a></li></ul></li><li>返回值：<a href="/api/languages/ProviderResult.html">ProviderResult</a>&lt;<a href="/api/languages/TextEdit.html">TextEdit</a>[]&gt;</li><li>描述：键入字符后提供格式编辑。</li></ul>`,7))])}const f=s(d,[["render",h]]);export{u as __pageData,f as default};
