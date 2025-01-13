import{_ as a,c as e,D as t,a as n,N as o,a5 as l,J as r,o as p}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const u=JSON.parse('{"title":"IContentWidgetPosition","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/IContentWidgetPosition.md","filePath":"api/editor/IContentWidgetPosition.md","lastUpdated":1720599564000}'),h={name:"api/editor/IContentWidgetPosition.md"};function d(k,i,c,f,g,y){const s=r("backTop");return p(),e("div",null,[i[0]||(i[0]=t("h1",{id:"icontentwidgetposition",tabindex:"-1"},[n("IContentWidgetPosition "),t("a",{class:"header-anchor",href:"#icontentwidgetposition","aria-label":'Permalink to "IContentWidgetPosition"'},"​")],-1)),o(s),i[1]||(i[1]=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IContentWidgetPosition.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IContentWidgetPosition.html</a></p></details><p>用于呈现内容小部件的位置。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IContentWidgetPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    position</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    positionAffinity</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> PositionAffinity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    preference</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ContentWidgetPositionPreference</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    secondaryPosition</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="position" tabindex="-1">position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;position&quot;">​</a></h2><ul><li>类型：<a href="/api/IPosition.html">IPosition</a></li><li>描述：内容小部件的位置。</li></ul><h2 id="positionaffinity" tabindex="-1">positionAffinity <a class="header-anchor" href="#positionaffinity" aria-label="Permalink to &quot;positionAffinity&quot;">​</a></h2><ul><li>类型：<a href="/api/editor/PositionAffinity.html">PositionAffinity</a></li><li>描述：多个视图位置引用同一（模型）位置时的放置首选项。当涉及到注入的文本时，这起到了一定的作用。</li></ul><h2 id="preference" tabindex="-1">preference <a class="header-anchor" href="#preference" aria-label="Permalink to &quot;preference&quot;">​</a></h2><ul><li>类型：<a href="/api/editor/ContentWidgetPositionPreference.html">ContentWidgetPositionPreference</a>[]</li><li>描述：位置的首选项，按首选项的顺序排列。</li></ul><h2 id="secondaryposition" tabindex="-1">secondaryPosition <a class="header-anchor" href="#secondaryposition" aria-label="Permalink to &quot;secondaryPosition&quot;">​</a></h2><ul><li>类型：<a href="/api/IPosition.html">IPosition</a></li><li>描述：如果存在，则表示内容小部件的位置。</li></ul>`,11))])}const E=a(h,[["render",d]]);export{u as __pageData,E as default};
