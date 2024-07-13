import{c as t,I as i,j as s,a as k,a6 as n,o as r,D as a}from"./chunks/framework.CYBeC69b.js";const p=s("h1",{id:"jsonschema",tabindex:"-1"},[k("JSONSchema "),s("a",{class:"header-anchor",href:"#jsonschema","aria-label":'Permalink to "JSONSchema"'},"​")],-1),o=n(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.JSONSchema.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.json.JSONSchema.html</a></p></details><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    $comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    $id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    $ref</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    $schema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    additionalItems</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    additionalProperties</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    allOf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    allowComments</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    allowTrailingCommas</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    anyOf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    contains</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    defaultSnippets</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        body</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        bodyText</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        label</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        markdownDescription</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    definitions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    dependencies</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaMap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">prop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    deprecationMessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    description</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    doNotSuggest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    enum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    enumDescriptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    errorMessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    examples</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    exclusiveMaximum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    exclusiveMinimum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    format</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    if</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    items</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    markdownDescription</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    markdownEnumDescriptions</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    maxItems</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    maxLength</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    maxProperties</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    maximum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    minItems</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    minLength</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    minProperties</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    minimum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    multipleOf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    not</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    oneOf</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    pattern</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    patternErrorMessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    patternProperties</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    properties</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaMap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    propertyNames</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    required</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    suggestSortText</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    then</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> JSONSchemaRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    title</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    type</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[];</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    uniqueItems</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="快捷链接" tabindex="-1">快捷链接 <a class="header-anchor" href="#快捷链接" aria-label="Permalink to &quot;快捷链接&quot;">​</a></h2>`,3),d=n('<h2 id="comment" tabindex="-1">$comment <a class="header-anchor" href="#comment" aria-label="Permalink to &quot;$comment&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="id" tabindex="-1">$id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;$id&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="ref" tabindex="-1">$ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;$ref&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="schema" tabindex="-1">$schema <a class="header-anchor" href="#schema" aria-label="Permalink to &quot;$schema&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="additionalitems" tabindex="-1">additionalItems <a class="header-anchor" href="#additionalitems" aria-label="Permalink to &quot;additionalItems&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a></li></ul><h2 id="additionalproperties" tabindex="-1">additionalProperties <a class="header-anchor" href="#additionalproperties" aria-label="Permalink to &quot;additionalProperties&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a></li></ul><h2 id="allof" tabindex="-1">allOf <a class="header-anchor" href="#allof" aria-label="Permalink to &quot;allOf&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a>[]</li></ul><h2 id="allowcomments" tabindex="-1">allowComments <a class="header-anchor" href="#allowcomments" aria-label="Permalink to &quot;allowComments&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="allowtrailingcommas" tabindex="-1">allowTrailingCommas <a class="header-anchor" href="#allowtrailingcommas" aria-label="Permalink to &quot;allowTrailingCommas&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="anyof" tabindex="-1">anyOf <a class="header-anchor" href="#anyof" aria-label="Permalink to &quot;anyOf&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a>[]</li></ul><h2 id="const" tabindex="-1">const <a class="header-anchor" href="#const" aria-label="Permalink to &quot;const&quot;">​</a></h2><ul><li>类型：<code>any</code></li></ul><h2 id="contains" tabindex="-1">contains <a class="header-anchor" href="#contains" aria-label="Permalink to &quot;contains&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a></li></ul><h2 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-label="Permalink to &quot;default&quot;">​</a></h2><ul><li>类型：<code>any</code></li></ul><h2 id="defaultsnippets" tabindex="-1">defaultSnippets <a class="header-anchor" href="#defaultsnippets" aria-label="Permalink to &quot;defaultSnippets&quot;">​</a></h2><ul><li>类型：<code>{ body?: any; bodyText?: string; description?: string; label?: string; markdownDescription?: string; }[]</code></li></ul><h2 id="definitions" tabindex="-1">definitions <a class="header-anchor" href="#definitions" aria-label="Permalink to &quot;definitions&quot;">​</a></h2><ul><li>类型：<code>{ [name: string]</code>: <a href="/api/languages/json/JSONSchema.html">JSONSchema</a><code> }</code></li></ul><h2 id="dependencies" tabindex="-1">dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;dependencies&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaMap.html">JSONSchemaMap</a> <code>| { [prop: string]</code>: <code>string[] }</code></li></ul><h2 id="deprecationmessage" tabindex="-1">deprecationMessage <a class="header-anchor" href="#deprecationmessage" aria-label="Permalink to &quot;deprecationMessage&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="description" tabindex="-1">description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;description&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="donotsuggest" tabindex="-1">doNotSuggest <a class="header-anchor" href="#donotsuggest" aria-label="Permalink to &quot;doNotSuggest&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul><h2 id="else" tabindex="-1">else <a class="header-anchor" href="#else" aria-label="Permalink to &quot;else&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a></li></ul><h2 id="enum" tabindex="-1">enum <a class="header-anchor" href="#enum" aria-label="Permalink to &quot;enum&quot;">​</a></h2><ul><li>类型：<code>any[]</code></li></ul><h2 id="enumdescriptions" tabindex="-1">enumDescriptions <a class="header-anchor" href="#enumdescriptions" aria-label="Permalink to &quot;enumDescriptions&quot;">​</a></h2><ul><li>类型：<code>string[]</code></li></ul><h2 id="errormessage" tabindex="-1">errorMessage <a class="header-anchor" href="#errormessage" aria-label="Permalink to &quot;errorMessage&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="examples" tabindex="-1">examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;examples&quot;">​</a></h2><ul><li>类型：<code>any[]</code></li></ul><h2 id="exclusivemaximum" tabindex="-1">exclusiveMaximum <a class="header-anchor" href="#exclusivemaximum" aria-label="Permalink to &quot;exclusiveMaximum&quot;">​</a></h2><ul><li>类型：<code>number | boolean</code></li></ul><h2 id="exclusiveminimum" tabindex="-1">exclusiveMinimum <a class="header-anchor" href="#exclusiveminimum" aria-label="Permalink to &quot;exclusiveMinimum&quot;">​</a></h2><ul><li>类型：<code>number | boolean</code></li></ul><h2 id="format" tabindex="-1">format <a class="header-anchor" href="#format" aria-label="Permalink to &quot;format&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="id-1" tabindex="-1">id <a class="header-anchor" href="#id-1" aria-label="Permalink to &quot;id&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="if" tabindex="-1">if <a class="header-anchor" href="#if" aria-label="Permalink to &quot;if&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a></li></ul><h2 id="items" tabindex="-1">items <a class="header-anchor" href="#items" aria-label="Permalink to &quot;items&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a> | <a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a>[]</li></ul><h2 id="markdowndescription" tabindex="-1">markdownDescription <a class="header-anchor" href="#markdowndescription" aria-label="Permalink to &quot;markdownDescription&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="markdownenumdescriptions" tabindex="-1">markdownEnumDescriptions <a class="header-anchor" href="#markdownenumdescriptions" aria-label="Permalink to &quot;markdownEnumDescriptions&quot;">​</a></h2><ul><li>类型：<code>string[]</code></li></ul><h2 id="maxitems" tabindex="-1">maxItems <a class="header-anchor" href="#maxitems" aria-label="Permalink to &quot;maxItems&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="maxlength" tabindex="-1">maxLength <a class="header-anchor" href="#maxlength" aria-label="Permalink to &quot;maxLength&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="maxproperties" tabindex="-1">maxProperties <a class="header-anchor" href="#maxproperties" aria-label="Permalink to &quot;maxProperties&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="maximum" tabindex="-1">maximum <a class="header-anchor" href="#maximum" aria-label="Permalink to &quot;maximum&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="minitems" tabindex="-1">minItems <a class="header-anchor" href="#minitems" aria-label="Permalink to &quot;minItems&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="minlength" tabindex="-1">minLength <a class="header-anchor" href="#minlength" aria-label="Permalink to &quot;minLength&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="minproperties" tabindex="-1">minProperties <a class="header-anchor" href="#minproperties" aria-label="Permalink to &quot;minProperties&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="minimum" tabindex="-1">minimum <a class="header-anchor" href="#minimum" aria-label="Permalink to &quot;minimum&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="multipleof" tabindex="-1">multipleOf <a class="header-anchor" href="#multipleof" aria-label="Permalink to &quot;multipleOf&quot;">​</a></h2><ul><li>类型：<code>number</code></li></ul><h2 id="not" tabindex="-1">not <a class="header-anchor" href="#not" aria-label="Permalink to &quot;not&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a></li></ul><h2 id="oneof" tabindex="-1">oneOf <a class="header-anchor" href="#oneof" aria-label="Permalink to &quot;oneOf&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a>[]</li></ul><h2 id="pattern" tabindex="-1">pattern <a class="header-anchor" href="#pattern" aria-label="Permalink to &quot;pattern&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="patternerrormessage" tabindex="-1">patternErrorMessage <a class="header-anchor" href="#patternerrormessage" aria-label="Permalink to &quot;patternErrorMessage&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="patternproperties" tabindex="-1">patternProperties <a class="header-anchor" href="#patternproperties" aria-label="Permalink to &quot;patternProperties&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaMap.html">JSONSchemaMap</a></li></ul><h2 id="properties" tabindex="-1">properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;properties&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaMap.html">JSONSchemaMap</a></li></ul><h2 id="propertynames" tabindex="-1">propertyNames <a class="header-anchor" href="#propertynames" aria-label="Permalink to &quot;propertyNames&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a></li></ul><h2 id="required" tabindex="-1">required <a class="header-anchor" href="#required" aria-label="Permalink to &quot;required&quot;">​</a></h2><ul><li>类型：<code>string[]</code></li></ul><h2 id="suggestsorttext" tabindex="-1">suggestSortText <a class="header-anchor" href="#suggestsorttext" aria-label="Permalink to &quot;suggestSortText&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="then" tabindex="-1">then <a class="header-anchor" href="#then" aria-label="Permalink to &quot;then&quot;">​</a></h2><ul><li>类型：<a href="/api/languages/json/JSONSchemaRef.html">JSONSchemaRef</a></li></ul><h2 id="title" tabindex="-1">title <a class="header-anchor" href="#title" aria-label="Permalink to &quot;title&quot;">​</a></h2><ul><li>类型：<code>string</code></li></ul><h2 id="type" tabindex="-1">type <a class="header-anchor" href="#type" aria-label="Permalink to &quot;type&quot;">​</a></h2><ul><li>类型：<code>string | string[]</code></li></ul><h2 id="uniqueitems" tabindex="-1">uniqueItems <a class="header-anchor" href="#uniqueitems" aria-label="Permalink to &quot;uniqueItems&quot;">​</a></h2><ul><li>类型：<code>boolean</code></li></ul>',108),F=JSON.parse('{"title":"JSONSchema","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/json/JSONSchema.md","filePath":"api/languages/json/JSONSchema.md","lastUpdated":1720600766000}'),c={name:"api/languages/json/JSONSchema.md"},y=Object.assign(c,{setup(g){const e=[{icon:"P",title:"$comment",link:"comment"},{icon:"P",title:"$id",link:"id"},{icon:"P",title:"$ref",link:"ref"},{icon:"P",title:"$schema",link:"schema"},{icon:"P",link:"additionalItems"},{icon:"P",link:"additionalProperties"},{icon:"P",link:"allOf"},{icon:"P",link:"allowComments"},{icon:"P",link:"allowTrailingCommas"},{icon:"P",link:"anyOf"},{icon:"P",link:"const"},{icon:"P",link:"contains"},{icon:"P",link:"default"},{icon:"P",link:"defaultSnippets"},{icon:"P",link:"definitions"},{icon:"P",link:"dependencies"},{icon:"P",link:"deprecationMessage"},{icon:"P",link:"description"},{icon:"P",link:"doNotSuggest"},{icon:"P",link:"else"},{icon:"P",link:"enum"},{icon:"P",link:"enumDescriptions"},{icon:"P",link:"errorMessage"},{icon:"P",link:"examples"},{icon:"P",link:"exclusiveMaximum"},{icon:"P",link:"exclusiveMinimum"},{icon:"P",link:"format"},{icon:"P",link:"id"},{icon:"P",link:"if"},{icon:"P",link:"items"},{icon:"P",link:"markdownDescription"},{icon:"P",link:"markdownEnumDescriptions"},{icon:"P",link:"maxItems"},{icon:"P",link:"maxLength"},{icon:"P",link:"maxProperties"},{icon:"P",link:"maximum"},{icon:"P",link:"minItems"},{icon:"P",link:"minLength"},{icon:"P",link:"minProperties"},{icon:"P",link:"minimum"},{icon:"P",link:"multipleOf"},{icon:"P",link:"not"},{icon:"P",link:"oneOf"},{icon:"P",link:"pattern"},{icon:"P",link:"patternErrorMessage"},{icon:"P",link:"patternProperties"},{icon:"P",link:"properties"},{icon:"P",link:"propertyNames"},{icon:"P",link:"required"},{icon:"P",link:"suggestSortText"},{icon:"P",link:"then"},{icon:"P",link:"title"},{icon:"P",link:"type"},{icon:"P",link:"uniqueItems"}];return(m,u)=>{const l=a("backTop"),h=a("dataItems");return r(),t("div",null,[p,i(l),o,i(h,{data:e}),d])}}});export{F as __pageData,y as default};