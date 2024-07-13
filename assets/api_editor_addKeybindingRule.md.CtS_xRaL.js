import{_ as e,c as a,I as n,j as i,a as t,a6 as d,o as l,D as o}from"./chunks/framework.CYBeC69b.js";const E=JSON.parse('{"title":"addKeybindingRule","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/addKeybindingRule.md","filePath":"api/editor/addKeybindingRule.md","lastUpdated":1720599564000}'),p={name:"api/editor/addKeybindingRule.md"},r=i("h1",{id:"addkeybindingrule",tabindex:"-1"},[t("addKeybindingRule "),i("a",{class:"header-anchor",href:"#addkeybindingrule","aria-label":'Permalink to "addKeybindingRule"'},"​")],-1),h=d(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#functions/editor.addKeybindingRule.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#functions/editor.addKeybindingRule.html</a></p></details><ul><li><p>语法：<code>addKeybindingRule(rule): void</code></p></li><li><p>参数：<code>rule</code>:<a href="/api/editor/IKeybindingRule.html">IKeybindingRule</a></p></li><li><p>返回值：<code>IDisposable</code>:<a href="/api/IDisposable.html">IDisposable</a></p><p>返回值是一个IDisposable对象，调用dispose()方法可以移除命令。</p></li><li><p>描述：添加一个快捷键规则。</p></li><li><p>示例：</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">editor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addKeybindingRule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    keybinding: KeyMod.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chord</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(KeyMod.CtrlCmd </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> KeyCode.KeyM),</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // command?: string | null;  // 暂未理解字段含义及用法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // commandArgs?: any;  // 暂未理解字段含义及用法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // when?: string | null;  // 暂未理解字段含义及用法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div>`,3);function c(k,g,u,y,m,b){const s=o("backTop");return l(),a("div",null,[r,n(s),h])}const f=e(p,[["render",c]]);export{E as __pageData,f as default};
