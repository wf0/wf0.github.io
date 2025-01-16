import{_ as o,c as r,D as e,a as i,N as s,a5 as l,J as n,o as d}from"./chunks/framework.DCUvzp74.js";import"./chunks/theme.G4trTUnd.js";const p="/unipptx-storage.png",k=JSON.parse('{"title":"数据存储方案及优化","description":"","frontmatter":{"navbar":false},"headers":[],"relativePath":"unippt/read/storage.md","filePath":"unippt/read/storage.md","lastUpdated":1729841289000}'),c={name:"unippt/read/storage.md"};function m(h,a,u,b,f,_){const t=n("backTop");return d(),r("div",null,[a[0]||(a[0]=e("h1",{id:"数据存储方案及优化",tabindex:"-1"},[i("数据存储方案及优化 "),e("a",{class:"header-anchor",href:"#数据存储方案及优化","aria-label":'Permalink to "数据存储方案及优化"'},"​")],-1)),s(t),a[1]||(a[1]=l('<h2 id="存储方案" tabindex="-1">存储方案 <a class="header-anchor" href="#存储方案" aria-label="Permalink to &quot;存储方案&quot;">​</a></h2><p>目前使用的存储方案是 JSON.stringify() 字符串存储到 DB 中<code>（也就是 eventBus.on(&#39;saved&#39;)、command.executeSave() 的返回值）</code>。</p><img src="'+p+'"><h2 id="存在的问题" tabindex="-1">存在的问题 <a class="header-anchor" href="#存在的问题" aria-label="Permalink to &quot;存在的问题&quot;">​</a></h2><ol><li>从上面的图看，每次修改一个元素，都会导致整个文档重新序列化，然后写入 DB，这显然是非常耗时的；</li><li>目前多媒体存储序列化时，转出的是 base64 编码字符串，这无疑增加存储字符长度；</li></ol><h2 id="优化方案" tabindex="-1">优化方案 <a class="header-anchor" href="#优化方案" aria-label="Permalink to &quot;优化方案&quot;">​</a></h2><p>针对上诉存在的问题，提出下列可能的优化方向，仅供讨论：</p><ol><li>减少文档的序列化次数，只对修改的元素进行序列化，然后写入 DB；</li><li>减少多媒体的序列化长度，如使用 base64 编码，转出为二进制，再转出为 base64 编码，这样，只需要一次序列化，减少一半的存储字符长度；</li><li>考虑压缩算法，如 LZMA、LZ4 等，对文档进行压缩，再写入 DB，这样，只需要一次压缩，减少一半的存储字符长度；</li><li>考虑使用增量更新，只更新修改的元素，而不是整个文档，这样，只需要一次序列化，减少一半的存储字符长度；</li></ol>',8))])}const B=o(c,[["render",m]]);export{k as __pageData,B as default};
