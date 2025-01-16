import{_ as e,c as t,D as s,a as l,N as n,a5 as h,J as o,o as r}from"./chunks/framework.DCUvzp74.js";import"./chunks/theme.G4trTUnd.js";const y=JSON.parse('{"title":"IEditorMinimapOptions","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/IEditorMinimapOptions.md","filePath":"api/editor/IEditorMinimapOptions.md","lastUpdated":1720599564000}'),d={name:"api/editor/IEditorMinimapOptions.md"};function p(k,i,c,u,E,F){const a=o("backTop");return r(),t("div",null,[i[0]||(i[0]=s("h1",{id:"ieditorminimapoptions",tabindex:"-1"},[l("IEditorMinimapOptions "),s("a",{class:"header-anchor",href:"#ieditorminimapoptions","aria-label":'Permalink to "IEditorMinimapOptions"'},"​")],-1)),n(a),i[1]||(i[1]=h(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorMinimapOptions.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorMinimapOptions.html</a></p></details><p>编辑器最小映射的配置选项</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IEditorMinimapOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    autohide</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    enabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    maxColumn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    renderCharacters</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    scale</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    sectionHeaderFontSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    sectionHeaderLetterSpacing</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    showMarkSectionHeaders</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    showRegionSectionHeaders</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    showSlider</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;always&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;mouseover&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    side</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;right&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;left&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    size</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;proportional&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fill&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;fit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="autohide" tabindex="-1">autohide <a class="header-anchor" href="#autohide" aria-label="Permalink to &quot;autohide&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：是否自动隐藏</li></ul><h2 id="enabled" tabindex="-1">enabled <a class="header-anchor" href="#enabled" aria-label="Permalink to &quot;enabled&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：是否启用</li></ul><h2 id="maxcolumn" tabindex="-1">maxColumn <a class="header-anchor" href="#maxcolumn" aria-label="Permalink to &quot;maxColumn&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：最大列数</li></ul><h2 id="rendercharacters" tabindex="-1">renderCharacters <a class="header-anchor" href="#rendercharacters" aria-label="Permalink to &quot;renderCharacters&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：是否渲染字符</li></ul><h2 id="scale" tabindex="-1">scale <a class="header-anchor" href="#scale" aria-label="Permalink to &quot;scale&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：缩放</li></ul><h2 id="sectionheaderfontsize" tabindex="-1">sectionHeaderFontSize <a class="header-anchor" href="#sectionheaderfontsize" aria-label="Permalink to &quot;sectionHeaderFontSize&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：字体大小</li></ul><h2 id="sectionheaderletterspacing" tabindex="-1">sectionHeaderLetterSpacing <a class="header-anchor" href="#sectionheaderletterspacing" aria-label="Permalink to &quot;sectionHeaderLetterSpacing&quot;">​</a></h2><ul><li>类型：<code>number</code></li><li>描述：字间距</li></ul><h2 id="showmarksectionheaders" tabindex="-1">showMarkSectionHeaders <a class="header-anchor" href="#showmarksectionheaders" aria-label="Permalink to &quot;showMarkSectionHeaders&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：是否显示标记区标题</li></ul><h2 id="showregionsectionheaders" tabindex="-1">showRegionSectionHeaders <a class="header-anchor" href="#showregionsectionheaders" aria-label="Permalink to &quot;showRegionSectionHeaders&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li><li>描述：是否显示区域标题</li></ul><h2 id="showslider" tabindex="-1">showSlider <a class="header-anchor" href="#showslider" aria-label="Permalink to &quot;showSlider&quot;">​</a></h2><ul><li>类型：<code>&quot;always&quot; | &quot;mouseover&quot;</code></li><li>描述：是否显示滑块</li></ul><h2 id="side" tabindex="-1">side <a class="header-anchor" href="#side" aria-label="Permalink to &quot;side&quot;">​</a></h2><ul><li>类型：<code>&quot;right&quot; | &quot;left&quot;</code></li><li>描述：侧边</li></ul><h2 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-label="Permalink to &quot;size&quot;">​</a></h2><ul><li>类型：<code>&quot;proportional&quot; | &quot;fill&quot; | &quot;fit&quot;</code></li><li>描述：大小</li></ul>`,27))])}const b=e(d,[["render",p]]);export{y as __pageData,b as default};
