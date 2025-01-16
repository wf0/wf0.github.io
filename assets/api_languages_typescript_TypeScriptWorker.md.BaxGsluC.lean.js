import{_ as e,c as t,D as s,a as l,N as n,a5 as h,J as o,o as k}from"./chunks/framework.DCUvzp74.js";import"./chunks/theme.G4trTUnd.js";const u=JSON.parse('{"title":"TypeScriptWorker","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/typescript/TypeScriptWorker.md","filePath":"api/languages/typescript/TypeScriptWorker.md","lastUpdated":1720600766000}'),p={name:"api/languages/typescript/TypeScriptWorker.md"};function d(r,i,g,E,c,y){const a=o("backTop");return k(),t("div",null,[i[0]||(i[0]=s("h1",{id:"typescriptworker",tabindex:"-1"},[l("TypeScriptWorker "),s("a",{class:"header-anchor",href:"#typescriptworker","aria-label":'Permalink to "TypeScriptWorker"'},"​")],-1)),n(a),i[1]||(i[1]=h(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.TypeScriptWorker.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.typescript.TypeScriptWorker.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TypeScriptWorker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    findRenameLocations</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">positon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">findInStrings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">findInComments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">providePrefixAndSuffixTextForRename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">readonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getCodeFixesAtPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">errorCodes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">formatOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">readonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getCompilerOptionsDiagnostics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Diagnostic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getCompletionEntryDetails</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">entry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getCompletionsAtPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getDefinitionAtPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">readonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getDocumentHighlights</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">filesToSearch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">readonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getEmitOutput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">emitOnlyDtsFiles</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">forceDtsEmit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EmitOutput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getFormattingEditsAfterKeystroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">postion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getFormattingEditsForDocument</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getFormattingEditsForRange</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getNavigationTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getQuickInfoAtPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getReferencesAtPosition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getRenameInfo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">positon</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getScriptText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getSemanticDiagnostics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Diagnostic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getSignatureHelpItems</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">position</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getSuggestionDiagnostics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Diagnostic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getSyntacticDiagnostics</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Diagnostic</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    provideInlayHints</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fileName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">readonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="findrenamelocations" tabindex="-1">findRenameLocations <a class="header-anchor" href="#findrenamelocations" aria-label="Permalink to &quot;findRenameLocations&quot;">​</a></h2><ul><li>语法：<code>findRenameLocations(fileName, positon, findInStrings, findInComments, providePrefixAndSuffixTextForRename): Promise&lt;readonly any[]&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>positon</code>: <code>number</code></li><li><code>findInStrings</code>: <code>boolean</code></li><li><code>findInComments</code>: <code>boolean</code></li><li><code>providePrefixAndSuffixTextForRename</code>: <code>boolean</code></li></ul></li><li>返回值：<code>Promise&lt;readonly any[]&gt;</code></li><li>描述：获取在指定文件和位置重命名项目时应更新的其他引用。</li></ul><h2 id="getcodefixesatposition" tabindex="-1">getCodeFixesAtPosition <a class="header-anchor" href="#getcodefixesatposition" aria-label="Permalink to &quot;getCodeFixesAtPosition&quot;">​</a></h2><ul><li>语法：<code>getCodeFixesAtPosition(fileName, start, end, errorCodes, formatOptions): Promise&lt;readonly any[]&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>start</code>: <code>number</code></li><li><code>end</code>: <code>number</code></li><li><code>errorCodes</code>: <code>number[]</code></li><li><code>formatOptions</code>: <code>any</code></li></ul></li><li>返回值：<code>Promise&lt;readonly any[]&gt;</code></li><li>描述：获取在指定文件和位置的错误代码上可用的代码修复。</li></ul><h2 id="getcompileroptionsdiagnostics" tabindex="-1">getCompilerOptionsDiagnostics <a class="header-anchor" href="#getcompileroptionsdiagnostics" aria-label="Permalink to &quot;getCompilerOptionsDiagnostics&quot;">​</a></h2><ul><li>语法：<code>getCompilerOptionsDiagnostics(fileName): Promise&lt;Diagnostic[]&gt;</code></li><li>参数：<code>fileName</code>: <code>string</code></li><li>返回值：<code>Promise&lt;</code><a href="/api/languages/typescript/Diagnostic.html">Diagnostic</a><code>[]&gt;</code></li><li>描述：获取在指定文件中可用的编译器选项诊断。</li></ul><h2 id="getcompletionentrydetails" tabindex="-1">getCompletionEntryDetails <a class="header-anchor" href="#getcompletionentrydetails" aria-label="Permalink to &quot;getCompletionEntryDetails&quot;">​</a></h2><ul><li>语法：<code>getCompletionEntryDetails(fileName, position, entry): Promise&lt;any&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>position</code>: <code>number</code></li><li><code>entry</code>: <code>string</code></li></ul></li><li>返回值：<code>Promise&lt;any&gt;</code></li><li>描述：获取在指定文件和位置的补全条目详细信息。</li></ul><h2 id="getcompletionsatposition" tabindex="-1">getCompletionsAtPosition <a class="header-anchor" href="#getcompletionsatposition" aria-label="Permalink to &quot;getCompletionsAtPosition&quot;">​</a></h2><ul><li>语法：<code>getCompletionsAtPosition(fileName, position): Promise&lt;any&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>position</code>: <code>number</code></li></ul></li><li>返回值：<code>Promise&lt;any&gt;</code></li><li>描述：获取在指定文件和位置的补全条目。</li></ul><h2 id="getdefinitionatposition" tabindex="-1">getDefinitionAtPosition <a class="header-anchor" href="#getdefinitionatposition" aria-label="Permalink to &quot;getDefinitionAtPosition&quot;">​</a></h2><ul><li>语法：<code>getDefinitionAtPosition(fileName, position): Promise&lt;readonly any[]&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>position</code>: <code>number</code></li></ul></li><li>返回值：<code>Promise&lt;readonly any[]&gt;</code></li><li>描述：获取在指定文件和位置的引用。</li></ul><h2 id="getdocumenthighlights" tabindex="-1">getDocumentHighlights <a class="header-anchor" href="#getdocumenthighlights" aria-label="Permalink to &quot;getDocumentHighlights&quot;">​</a></h2><ul><li>语法：<code>getDocumentHighlights(fileName, position, filesToSearch): Promise&lt;readonly any[]&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>position</code>: <code>number</code></li><li><code>filesToSearch</code>: <code>string[]</code></li></ul></li><li>返回值：<code>Promise&lt;readonly any[]&gt;</code></li><li>描述：获取在指定文件和位置的引用。</li></ul><h2 id="getemitoutput" tabindex="-1">getEmitOutput <a class="header-anchor" href="#getemitoutput" aria-label="Permalink to &quot;getEmitOutput&quot;">​</a></h2><ul><li>语法：<code>getEmitOutput(fileName, emitOnlyDtsFiles?, forceDtsEmit?): Promise&lt;EmitOutput&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>emitOnlyDtsFiles?</code>: <code>boolean</code></li><li><code>forceDtsEmit?</code>: <code>boolean</code></li></ul></li><li>返回值：<code>Promise&lt;</code><a href="/api/languages/typescript/EmitOutput.html">EmitOutput</a><code>&gt;</code></li><li>描述：获取在指定文件和位置的输出。</li></ul><h2 id="getformattingeditsafterkeystroke" tabindex="-1">getFormattingEditsAfterKeystroke <a class="header-anchor" href="#getformattingeditsafterkeystroke" aria-label="Permalink to &quot;getFormattingEditsAfterKeystroke&quot;">​</a></h2><ul><li>语法：<code>getFormattingEditsAfterKeystroke(fileName, postion, ch, options): Promise&lt;any[]&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>postion</code>: <code>number</code></li><li><code>ch</code>: <code>string</code></li><li><code>options</code>: <code>any</code></li></ul></li><li>返回值：<code>Promise&lt;any[]&gt;</code></li><li>描述：获取在给定的击键之后应该应用的格式更改。</li></ul><h2 id="getformattingeditsfordocument" tabindex="-1">getFormattingEditsForDocument <a class="header-anchor" href="#getformattingeditsfordocument" aria-label="Permalink to &quot;getFormattingEditsForDocument&quot;">​</a></h2><ul><li>语法：<code>getFormattingEditsForDocument(fileName, options): Promise&lt;any[]&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>options</code>: <code>any</code></li></ul></li><li>返回值：<code>Promise&lt;any[]&gt;</code></li><li>描述：获取应该应用于格式化给定文件的更改。</li></ul><h2 id="getformattingeditsforrange" tabindex="-1">getFormattingEditsForRange <a class="header-anchor" href="#getformattingeditsforrange" aria-label="Permalink to &quot;getFormattingEditsForRange&quot;">​</a></h2><ul><li>语法：<code>getFormattingEditsForRange(fileName, start, end, options): Promise&lt;any[]&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>start</code>: <code>number</code></li><li><code>end</code>: <code>number</code></li><li><code>options</code>: <code>any</code></li></ul></li><li>返回值：<code>Promise&lt;any[]&gt;</code></li><li>描述：获取应用于格式化文件中给定范围的更改。</li></ul><h2 id="getnavigationtree" tabindex="-1">getNavigationTree <a class="header-anchor" href="#getnavigationtree" aria-label="Permalink to &quot;getNavigationTree&quot;">​</a></h2><ul><li>语法：<code>getNavigationTree(fileName): Promise&lt;any&gt;</code></li><li>参数：<code>fileName</code>: <code>string</code></li><li>返回值：<code>Promise&lt;any&gt;</code></li><li>描述：获取在指定文件中的导航树。</li></ul><h2 id="getquickinfoatposition" tabindex="-1">getQuickInfoAtPosition <a class="header-anchor" href="#getquickinfoatposition" aria-label="Permalink to &quot;getQuickInfoAtPosition&quot;">​</a></h2><ul><li>语法：<code>getQuickInfoAtPosition(fileName, position): Promise&lt;any&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>position</code>: <code>number</code></li></ul></li><li>返回值：<code>Promise&lt;any&gt;</code></li><li>描述：获取在指定文件和位置的快速信息。</li></ul><h2 id="getreferencesatposition" tabindex="-1">getReferencesAtPosition <a class="header-anchor" href="#getreferencesatposition" aria-label="Permalink to &quot;getReferencesAtPosition&quot;">​</a></h2><ul><li>语法：<code>getReferencesAtPosition(fileName, position): Promise&lt;readonly any[]&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>position</code>: <code>number</code></li></ul></li><li>返回值：<code>Promise&lt;readonly any[]&gt;</code></li><li>描述：获取在指定文件和位置的引用。</li></ul><h2 id="getrenameinfo" tabindex="-1">getRenameInfo <a class="header-anchor" href="#getrenameinfo" aria-label="Permalink to &quot;getRenameInfo&quot;">​</a></h2><ul><li>语法：<code>getRenameInfo(fileName, positon, options): Promise&lt;any&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>positon</code>: <code>number</code></li><li><code>options</code>: <code>any</code></li></ul></li><li>返回值：<code>Promise&lt;any&gt;</code></li><li>描述：获取在指定文件和位置的重命名信息。</li></ul><h2 id="getscripttext" tabindex="-1">getScriptText <a class="header-anchor" href="#getscripttext" aria-label="Permalink to &quot;getScriptText&quot;">​</a></h2><ul><li>语法：<code>getScriptText(fileName): Promise&lt;string&gt;</code></li><li>参数：<code>fileName</code>: <code>string</code></li><li>返回值：<code>Promise&lt;string&gt;</code></li><li>描述：获取在指定文件中的脚本文本。</li></ul><h2 id="getsemanticdiagnostics" tabindex="-1">getSemanticDiagnostics <a class="header-anchor" href="#getsemanticdiagnostics" aria-label="Permalink to &quot;getSemanticDiagnostics&quot;">​</a></h2><ul><li>语法：<code>getSemanticDiagnostics(fileName): Promise&lt;Diagnostic[]&gt;</code></li><li>参数：<code>fileName</code>: <code>string</code></li><li>返回值：<code>Promise&lt;</code><a href="/api/languages/typescript/Diagnostic.html">Diagnostic</a><code>[]&gt;</code></li><li>描述：获取在指定文件中的语义诊断。</li></ul><h2 id="getsignaturehelpitems" tabindex="-1">getSignatureHelpItems <a class="header-anchor" href="#getsignaturehelpitems" aria-label="Permalink to &quot;getSignatureHelpItems&quot;">​</a></h2><ul><li>语法：<code>getSignatureHelpItems(fileName, position): Promise&lt;any&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>position</code>: <code>number</code></li></ul></li><li>返回值：<code>Promise&lt;any&gt;</code></li><li>描述：获取在指定文件和位置的签名帮助项。</li></ul><h2 id="getsuggestiondiagnostics" tabindex="-1">getSuggestionDiagnostics <a class="header-anchor" href="#getsuggestiondiagnostics" aria-label="Permalink to &quot;getSuggestionDiagnostics&quot;">​</a></h2><ul><li>语法：<code>getSuggestionDiagnostics(fileName): Promise&lt;Diagnostic[]&gt;</code></li><li>参数：<code>fileName</code>: <code>string</code></li><li>返回值：<code>Promise&lt;</code><a href="/api/languages/typescript/Diagnostic.html">Diagnostic</a><code>[]&gt;</code></li><li>描述：获取在指定文件中的建议诊断。</li></ul><h2 id="getsyntacticdiagnostics" tabindex="-1">getSyntacticDiagnostics <a class="header-anchor" href="#getsyntacticdiagnostics" aria-label="Permalink to &quot;getSyntacticDiagnostics&quot;">​</a></h2><ul><li>语法：<code>getSyntacticDiagnostics(fileName): Promise&lt;Diagnostic[]&gt;</code></li><li>参数：<code>fileName</code>: <code>string</code></li><li>返回值：<code>Promise&lt;</code><a href="/api/languages/typescript/Diagnostic.html">Diagnostic</a><code>[]&gt;</code></li><li>描述：获取在指定文件中的语法诊断。</li></ul><h2 id="provideinlayhints" tabindex="-1">provideInlayHints <a class="header-anchor" href="#provideinlayhints" aria-label="Permalink to &quot;provideInlayHints&quot;">​</a></h2><ul><li>语法：<code>provideInlayHints(fileName, start, end): Promise&lt;readonly any[]&gt;</code></li><li>参数： <ul><li><code>fileName</code>: <code>string</code></li><li><code>start</code>: <code>number</code></li><li><code>end</code>: <code>number</code></li></ul></li><li>返回值：<code>Promise&lt;readonly any[]&gt;</code></li><li>描述：获取在指定文件中的提示。</li></ul>`,44))])}const f=e(p,[["render",d]]);export{u as __pageData,f as default};
