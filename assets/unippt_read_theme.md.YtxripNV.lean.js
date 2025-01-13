import{_ as n,c as l,D as a,a as p,N as h,a5 as t,J as k,o as e}from"./chunks/framework.Blj2-Ajd.js";import"./chunks/theme.CmCrfLpF.js";const E="/unipptx-root-theme.png",D=JSON.parse('{"title":"自定义系统级主题方案","description":"","frontmatter":{"navbar":false},"headers":[],"relativePath":"unippt/read/theme.md","filePath":"unippt/read/theme.md","lastUpdated":1729841289000}'),r={name:"unippt/read/theme.md"};function o(d,s,c,g,y,m){const i=k("backTop");return e(),l("div",null,[s[0]||(s[0]=a("h1",{id:"自定义系统级主题方案",tabindex:"-1"},[p("自定义系统级主题方案 "),a("a",{class:"header-anchor",href:"#自定义系统级主题方案","aria-label":'Permalink to "自定义系统级主题方案"'},"​")],-1)),h(i),s[1]||(s[1]=t(`<p>为了将系统主题定制功能交还用户，本项目采用默认值实现的主题，用户只需要提供指定名称变量，即可覆盖默认效果：</p><h2 id="可配置主题名" tabindex="-1">可配置主题名 <a class="header-anchor" href="#可配置主题名" aria-label="Permalink to &quot;可配置主题名&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/** </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 本项目仅提供样式，可在此基础上，进行拓展（应用本身不提供切换主题功能） </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 为了用户更便捷的定制主题，因此应该将 root 的权限交给用户，使用默认值处理</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 系统主题色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-main-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #ff5e00;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 系列色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-main-color-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #fff3e6;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-main-color-2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #ffd1a3;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-main-color-3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #ffb87a;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-main-color-4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #ff9d52;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-main-color-5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #ff7e29;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-main-color-6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #ff5e00;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-main-color-7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #d94800;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-main-color-8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #b33600;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-main-color-9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #8c2500;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-main-color-10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #661800;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 主背景颜色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #f9f9f9;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 统一边框颜色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-border-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #eee;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 文字颜色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-text-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #333333;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 快捷键提示小文字(shortcut)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-text-info-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #93a2b3;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 菜单项(顶部菜单、二级菜单、右键菜单)的背景色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-menu-background-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #fff;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 菜单子项 hover 背景色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-menu-hover-bgcolor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #f1f1f1;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 阴影颜色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-box-shadow-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: rgba(0, 0, 0, 0.1);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// 滚动条滑块颜色</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@konva-scrollbar-thumb-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: #a9a9a9;</span></span></code></pre></div><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><p>在任意地方，配置 html:root{} 的变量，即可覆盖默认值:</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>上诉的变量，必须以 <code>--</code> 开头，去除 <code>@</code>，否则无效。</p></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- css 方案 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">:root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    --konva-main-color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">#ff5e00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- javascript 方案 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;--konva-main-color&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#ff5e00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="预览" tabindex="-1">预览 <a class="header-anchor" href="#预览" aria-label="Permalink to &quot;预览&quot;">​</a></h2><img src="`+E+'">',9))])}const F=n(r,[["render",o]]);export{D as __pageData,F as default};
