import{_ as n,c as e,D as i,a as t,N as l,a5 as d,J as o,o as r}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const b=JSON.parse('{"title":"FoldingRange","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/FoldingRange.md","filePath":"api/languages/FoldingRange.md","lastUpdated":1720600471000}'),h={name:"api/languages/FoldingRange.md"};function p(g,a,k,c,m,u){const s=o("backTop");return r(),e("div",null,[a[0]||(a[0]=i("h1",{id:"foldingrange",tabindex:"-1"},[t("FoldingRange "),i("a",{class:"header-anchor",href:"#foldingrange","aria-label":'Permalink to "FoldingRange"'},"​")],-1)),l(s),a[1]||(a[1]=d(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.FoldingRange.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.FoldingRange.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FoldingRange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    end</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    kind</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> FoldingRangeKind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    start</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="end" tabindex="-1">end <a class="header-anchor" href="#end" aria-label="Permalink to &quot;end&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：要折叠的范围的基于一的终点线。折叠区域以行的最后一个字符结束。</li></ul><h2 id="kind" tabindex="-1">kind <a class="header-anchor" href="#kind" aria-label="Permalink to &quot;kind&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/FoldingRangeKind.html">FoldingRangeKind</a></li><li>描述：描述折叠范围的种类，如Comment或Region。该类型用于对折叠范围进行分类，并由“折叠所有注释”等命令使用。有关标准化种类的枚举，请参见FoldingRangeKind。</li></ul><h2 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;start&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：要折叠的范围的基于一的起始线。折叠区域以行的第一个字符开始。</li></ul>`,8))])}const f=n(h,[["render",p]]);export{b as __pageData,f as default};
