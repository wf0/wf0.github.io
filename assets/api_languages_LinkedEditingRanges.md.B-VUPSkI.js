import{_ as i,c as e,I as n,j as a,a as t,a6 as l,o as r,D as d}from"./chunks/framework.CYBeC69b.js";const b=JSON.parse('{"title":"LinkedEditingRanges","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/LinkedEditingRanges.md","filePath":"api/languages/LinkedEditingRanges.md","lastUpdated":1720600471000}'),o={name:"api/languages/LinkedEditingRanges.md"},h=a("h1",{id:"linkededitingranges",tabindex:"-1"},[t("LinkedEditingRanges "),a("a",{class:"header-anchor",href:"#linkededitingranges","aria-label":'Permalink to "LinkedEditingRanges"'},"​")],-1),p=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LinkedEditingRanges.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.LinkedEditingRanges.html</a></p></details><p>表示可以与用于描述有效内容的单词模式一起编辑的范围列表。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LinkedEditingRanges</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    ranges</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IRange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    wordPattern</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="ranges" tabindex="-1">ranges <a class="header-anchor" href="#ranges" aria-label="Permalink to &quot;ranges&quot;">​</a></h2><ul><li>类型：<a href="/api/IRange.html">IRange</a>[]</li><li>描述：可以一起编辑的范围列表。范围必须具有相同的长度和文本内容。范围不能重叠</li></ul><h2 id="wordpattern" tabindex="-1">wordPattern <a class="header-anchor" href="#wordpattern" aria-label="Permalink to &quot;wordPattern&quot;">​</a></h2><ul><li>类型：<code>RegExp</code></li><li>描述：一种可选的单词模式，用于描述给定范围的有效内容。如果没有提供模式，将使用语言配置的单词模式。</li></ul>`,7);function g(k,c,E,m,_,u){const s=d("backTop");return r(),e("div",null,[h,n(s),p])}const y=i(o,[["render",g]]);export{b as __pageData,y as default};
