import{_ as n,c as t,I as i,j as e,a as s,a6 as l,o as d,D as r}from"./chunks/framework.CYBeC69b.js";const x=JSON.parse('{"title":"IndentationRule","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/IndentationRule.md","filePath":"api/languages/IndentationRule.md","lastUpdated":1720600471000}'),h={name:"api/languages/IndentationRule.md"},p=e("h1",{id:"indentationrule",tabindex:"-1"},[s("IndentationRule "),e("a",{class:"header-anchor",href:"#indentationrule","aria-label":'Permalink to "IndentationRule"'},"​")],-1),o=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IndentationRule.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.IndentationRule.html</a></p></details><p>描述一种语言的缩进规则。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IndentationRule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    decreaseIndentPattern</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    increaseIndentPattern</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    indentNextLinePattern</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    unIndentedLinePattern</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RegExp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="decreaseindentpattern" tabindex="-1">decreaseIndentPattern <a class="header-anchor" href="#decreaseindentpattern" aria-label="Permalink to &quot;decreaseIndentPattern&quot;">​</a></h2><ul><li>类型: <code>RegExp</code></li><li>描述：如果一行与此模式匹配，那么它之后的所有行都应该取消缩进一次（直到另一个规则匹配为止）。</li></ul><h2 id="increaseindentpattern" tabindex="-1">increaseIndentPattern <a class="header-anchor" href="#increaseindentpattern" aria-label="Permalink to &quot;increaseIndentPattern&quot;">​</a></h2><ul><li>类型: <code>RegExp</code></li><li>描述：如果一行与此模式匹配，那么它之后的所有行都应该缩进一次（直到另一条规则匹配为止）。</li></ul><h2 id="indentnextlinepattern" tabindex="-1">indentNextLinePattern <a class="header-anchor" href="#indentnextlinepattern" aria-label="Permalink to &quot;indentNextLinePattern&quot;">​</a></h2><ul><li>类型: <code>RegExp</code></li><li>描述：如果一行与此模式匹配，则只应将其后面的下一行缩进一次。</li></ul><h2 id="unindentedlinepattern" tabindex="-1">unIndentedLinePattern <a class="header-anchor" href="#unindentedlinepattern" aria-label="Permalink to &quot;unIndentedLinePattern&quot;">​</a></h2><ul><li>类型: <code>RegExp</code></li><li>描述：如果一条线与此模式匹配，则不应更改其缩进，也不应根据其他规则对其进行求值。</li></ul>`,11);function c(k,u,g,E,m,_){const a=r("backTop");return d(),t("div",null,[p,i(a),o])}const F=n(h,[["render",c]]);export{x as __pageData,F as default};