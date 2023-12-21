import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as p,a as n,b as s,e as c,f as l}from"./app-sDmYHnVy.js";const i="/assets/99-1-KEHy5WSy.jpg",r="/assets/99-2-DgQC3xG6.jpg",u={},d=n("h1",{id:"d99-recover-binary-search-tree",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#d99-recover-binary-search-tree","aria-hidden":"true"},"#"),s(" d99. Recover Binary Search Tree")],-1),k={id:"題目-連結",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#題目-連結","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/recover-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"},b=l('<blockquote><p>You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake. Recover the tree without changing its structure.</p></blockquote><h3 id="翻譯" tabindex="-1"><a class="header-anchor" href="#翻譯" aria-hidden="true">#</a> 翻譯</h3><blockquote><p>給定一個二元搜尋樹 (BST) 的 root ，其中樹的兩個節點的值被錯誤地交換了。恢復樹而不改變其結構。</p></blockquote><h3 id="測試資料" tabindex="-1"><a class="header-anchor" href="#測試資料" aria-hidden="true">#</a> 測試資料</h3><blockquote><p>Example 1: 範例 1：</p></blockquote><img src="'+i+'" width="50%"><blockquote><p>Input: root = [1,3,null,null,2]</p></blockquote><blockquote><p>Output: [3,1,null,null,2]</p></blockquote><blockquote><p>Explanation: 3 cannot be a left child of 1 because 3 &gt; 1. Swapping 1 and 3 makes the BST valid.</p></blockquote><blockquote><p>Example 2: 範例 2：</p></blockquote><img src="'+r+`" width="50%"><blockquote><p>Input: root = [3,1,4,null,null,2]</p></blockquote><blockquote><p>Output: [2,1,4,null,null,3]</p></blockquote><blockquote><p>Explanation: 2 cannot be in the right subtree of 3 because 2 &lt; 3. Swapping 2 and 3 makes the BST valid.</p></blockquote><h3 id="解題思路" tabindex="-1"><a class="header-anchor" href="#解題思路" aria-hidden="true">#</a> 解題思路</h3><blockquote><p>這題也算簡單，需要知道 BST 中序是由小到大。只要找到兩數值排序怪怪的就就把他們作交換</p></blockquote><h3 id="程式碼" tabindex="-1"><a class="header-anchor" href="#程式碼" aria-hidden="true">#</a> 程式碼</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify root in-place instead.
 */</span>
<span class="token comment">// [3,1,4,null,null,2]</span>
<span class="token comment">//       3</span>
<span class="token comment">//      / \\</span>
<span class="token comment">//     1   4</span>
<span class="token comment">//        /</span>
<span class="token comment">//       2</span>
<span class="token comment">//</span>
<span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> node1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> node2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token comment">// 1 2 3</span>
<span class="token comment">// 3 2 1</span>

<span class="token keyword">var</span> <span class="token function-variable function">recoverTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  node1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  node2 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token function">solve</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">[</span>node1<span class="token punctuation">.</span>val<span class="token punctuation">,</span> node2<span class="token punctuation">.</span>val<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>node2<span class="token punctuation">.</span>val<span class="token punctuation">,</span> node1<span class="token punctuation">.</span>val<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token function-variable function">solve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token function">solve</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>prev <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> prev<span class="token punctuation">.</span>val <span class="token operator">&gt;</span> node<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node1<span class="token punctuation">)</span> node1 <span class="token operator">=</span> prev<span class="token punctuation">;</span>
    node2 <span class="token operator">=</span> node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  prev <span class="token operator">=</span> node<span class="token punctuation">;</span>

  <span class="token function">solve</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function h(f,y){const a=t("ExternalLinkIcon");return o(),p("div",null,[d,n("h3",k,[v,s(" 題目 "),n("a",m,[s("連結"),c(a)])]),b])}const g=e(u,[["render",h],["__file","99.html.vue"]]);export{g as default};
