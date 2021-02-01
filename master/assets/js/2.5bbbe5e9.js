(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{578:function(a,t,s){a.exports=s.p+"assets/img/simpleMerkleTree.35a69100.png"},579:function(a,t,s){a.exports=s.p+"assets/img/existProof.16d0e856.png"},580:function(a,t,s){a.exports=s.p+"assets/img/absence1.9fe56931.png"},581:function(a,t,s){a.exports=s.p+"assets/img/absence2.d0d2b33b.png"},582:function(a,t,s){a.exports=s.p+"assets/img/absence3.c3f6007e.png"},583:function(a,t,s){a.exports=s.p+"assets/img/substoreProof.10b5e7ad.png"},584:function(a,t,s){a.exports=s.p+"assets/img/commitValidation.dd75cbe3.png"},585:function(a,t,s){a.exports=s.p+"assets/img/updateValidatorToHeight.6ff55d6c.png"},830:function(a,t,s){"use strict";s.r(t);var o=s(1),e=Object(o.a)({},(function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"规范"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#规范"}},[a._v("#")]),a._v(" 规范")]),a._v(" "),o("p",[a._v("该规范描述了如何实现 LCD。 LCD 支持模块化 API。 目前，仅支持 ICS0（TendermintAPI），ICS1（密钥 API）和 ICS20（Key API）。 如有必要，后续可以包含更多 API。")]),a._v(" "),o("h2",{attrs:{id:"构建并验证-abci-状态的证明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#构建并验证-abci-状态的证明"}},[a._v("#")]),a._v(" 构建并验证 ABCI 状态的证明")]),a._v(" "),o("p",[a._v("众所周知，基于 cosmos-sdk 的应用程序的存储包含多个子库。 每个子目录由 IAVL 存储实现。 这些子组件由简单的 Merkle 树组成。 创建树时，我们需要从这些子库中提取名字、高度和存储根哈希以构建一组简单的 Merkle 叶节点，然后计算从叶节点到根的哈希。 简单 Merkle 树的根哈希是 AppHash，它将包含在块头中。")]),a._v(" "),o("p",[o("img",{attrs:{src:s(578),alt:"Simple Merkle Tree"}})]),a._v(" "),o("p",[a._v("正如我们在"),o("a",{attrs:{href:"https://github.com/irisnet/cosmos-sdk/tree/bianjie/lcd_spec/docs/spec/lcd#trust-propagation",target:"_blank",rel:"noopener noreferrer"}},[a._v("LCD 信任传播"),o("OutboundLink")],1),a._v("中所讨论的那样，可以通过检查针对可信验证人集的投票权来验证 AppHash。 这里我们只需要建立从 ABCI 状态到 AppHash 的证明。 证据包含两部分：")]),a._v(" "),o("ul",[o("li",[a._v("IAVL 证明")]),a._v(" "),o("li",[a._v("子库到 AppHash 的证明")])]),a._v(" "),o("h3",{attrs:{id:"iavl-证明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#iavl-证明"}},[a._v("#")]),a._v(" IAVL 证明")]),a._v(" "),o("p",[a._v("证明有两种类型：存在证明和缺席证明。 如果查询密钥存在于 IAVL 存储中，则它返回键值及其存在证明。 另一方面，如果密钥不存在，那么它只返回缺席证明，这可以证明密钥肯定不存在。")]),a._v(" "),o("h3",{attrs:{id:"iavl-存在证明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#iavl-存在证明"}},[a._v("#")]),a._v(" IAVL 存在证明")]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDb21taXRJRCBzdHJ1Y3QgewogICAgVmVyc2lvbiBpbnQ2NAogICAgSGFzaCAgICBbXWJ5dGUKfQoKdHlwZSBzdG9yZUNvcmUgc3RydWN0IHsKICAgIENvbW1pdElEIENvbW1pdElECn0KCnR5cGUgTXVsdGlTdG9yZUNvbW1pdElEIHN0cnVjdCB7CiAgICBOYW1lIHN0cmluZwogICAgQ29yZSBzdG9yZUNvcmUKfQoKdHlwZSBwcm9vZklubmVyTm9kZSBzdHJ1Y3QgewogICAgSGVpZ2h0ICBpbnQ4CiAgICBTaXplICAgIGludDY0CiAgICBWZXJzaW9uIGludDY0CiAgICBMZWZ0ICAgIFtdYnl0ZQogICAgUmlnaHQgICBbXWJ5dGUKfQoKdHlwZSBLZXlFeGlzdHNQcm9vZiBzdHJ1Y3QgewogICAgTXVsdGlTdG9yZUNvbW1pdEluZm8gW11NdWx0aVN0b3JlQ29tbWl0SUQgLy8g5omA5pyJ5a2Q5bqT5o+Q5LqkaWQKICAgIFN0b3JlTmFtZSBzdHJpbmcgLy8g5b2T5YmN5a2Q5bqT5ZCN5a2XCiAgICBIZWlnaHQgIGludDY0IC8vIOW9k+WJjeWtkOW6k+aPkOS6pOmrmOW6pgogICAgUm9vdEhhc2ggY21uLkhleEJ5dGVzIC8vIOatpCBJQVZMIOagkeeahOagueWTiOW4jAogICAgVmVyc2lvbiAgaW50NjQgLy8g5q2kIElBVkwg5qCR5LitIGtleS12YWx1ZSDnmoTniYjmnKzlj7cKICAgIElubmVyTm9kZXMgW11wcm9vZklubmVyTm9kZSAvLyDku47moLnoioLngrnliLAga2V5LXZhbHVlIOWPtuWtkOiKgueCueeahOi3r+W+hAp9Cg=="}}),a._v(" "),o("p",[a._v("存在证据的数据结构如上所示。 构建和验证存在证明的过程如下所示：")]),a._v(" "),o("p",[o("img",{attrs:{src:s(579),alt:"Exist Proof"}})]),a._v(" "),o("p",[a._v("构建证明的步骤：")]),a._v(" "),o("ul",[o("li",[a._v("从根节点访问 IAVL 树")]),a._v(" "),o("li",[a._v("记录 InnerNodes 中的访问节点")]),a._v(" "),o("li",[a._v("找到目标叶节点后，将叶节点版本赋值给证明版本")]),a._v(" "),o("li",[a._v("将当前 IAVL 树高赋值给证明高度")]),a._v(" "),o("li",[a._v("将当前 IAVL 树根哈希赋值给证明根哈希")]),a._v(" "),o("li",[a._v("将当前的子目录名称赋值给证明 StoreName")]),a._v(" "),o("li",[a._v("从 multistore 读取指定高度的 commitInfo 并将其赋值给证明 StoreCommitInfo")])]),a._v(" "),o("p",[a._v("验证证明的步骤：")]),a._v(" "),o("ul",[o("li",[a._v("使用证明版本中的键、值构建叶节点")]),a._v(" "),o("li",[a._v("计算叶节点哈希")]),a._v(" "),o("li",[a._v("将哈希值分配给第一个 innerNode 的 rightHash，然后计算第一个 innerNode 哈希值")]),a._v(" "),o("li",[a._v("传播哈希计算过程。 如果先前的 innerNode 是下一个 innerNode 的左子节点，则将先前的 innerNode 散列分配给下一个 innerNode 的左散列。否则，将先前的 innerNode 散列分配给下一个 innerNode 的右散列")]),a._v(" "),o("li",[a._v("最后 innerNode 的哈希应该等于此证明的根哈希， 否则证明无效。")])]),a._v(" "),o("h3",{attrs:{id:"iavl-缺席证明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#iavl-缺席证明"}},[a._v("#")]),a._v(" IAVL 缺席证明")]),a._v(" "),o("p",[a._v("众所周知，所有 IAVL 叶节点都按每个叶节点的密钥排序。 因此，我们可以在 IAVL 树的整个密钥集中计算出目标密钥的位置。 如下图所示，我们可以找到左键和右键。 如果我们可以证明左键和右键肯定存在，并且它们是相邻的节点，那么目标密钥肯定不存在。")]),a._v(" "),o("p",[o("img",{attrs:{src:s(580),alt:"Absence Proof1"}})]),a._v(" "),o("p",[a._v("如果目标密钥大于最右边的叶节点或小于最左边的叶子节点，则目标密钥肯定不存在。")]),a._v(" "),o("p",[o("img",{attrs:{src:s(581),alt:"Absence Proof2"}}),o("img",{attrs:{src:s(582),alt:"Absence Proof3"}})]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBwcm9vZkxlYWZOb2RlIHN0cnVjdCB7CiAgICBLZXlCeXRlcyAgIGNtbi5IZXhCeXRlcwogICAgVmFsdWVCeXRlcyBjbW4uSGV4Qnl0ZXMKICAgIFZlcnNpb24gICAgaW50NjQKfQoKdHlwZSBwYXRoV2l0aE5vZGUgc3RydWN0IHsKICAgIElubmVyTm9kZXMgW11wcm9vZklubmVyTm9kZQogICAgTm9kZSBwcm9vZkxlYWZOb2RlCn0KCnR5cGUgS2V5QWJzZW50UHJvb2Ygc3RydWN0IHsKICAgIE11bHRpU3RvcmVDb21taXRJbmZvIFtdTXVsdGlTdG9yZUNvbW1pdElECiAgICBTdG9yZU5hbWUgc3RyaW5nCiAgICBIZWlnaHQgIGludDY0CiAgICBSb290SGFzaCBjbW4uSGV4Qnl0ZXMKICAgIExlZnQgICpwYXRoV2l0aE5vZGUgLy8gUHJvb2YgdGhlIGxlZnQga2V5IGV4aXN0CiAgICBSaWdodCAqcGF0aFdpdGhOb2RlICAvL1Byb29mIHRoZSByaWdodCBrZXkgZXhpc3QKfQo="}}),a._v(" "),o("p",[a._v("以上是缺席证明的数据结构。 构建证据的步骤：")]),a._v(" "),o("ul",[o("li",[a._v("从根节点访问 IAVL 树")]),a._v(" "),o("li",[a._v("获取整个密钥集中密钥的对应索引（标记为 INDEX）")]),a._v(" "),o("li",[a._v("如果返回的索引等于 0，则右索引应为 0，且左节点不存在")]),a._v(" "),o("li",[a._v("如果返回的索引等于整个密钥集的大小，则左节点索引应为 INDEX-1，且右节点不存在")]),a._v(" "),o("li",[a._v("否则，右节点索引应为 INDEX，左节点索引应为 INDEX-1")]),a._v(" "),o("li",[a._v("将当前 IAVL 树高赋值给证明高度")]),a._v(" "),o("li",[a._v("将当前 IAVL 树根哈希赋值给证明根哈希")]),a._v(" "),o("li",[a._v("将当前的子目录名称赋值给证明 StoreName")]),a._v(" "),o("li",[a._v("从 multistore 读取指定高度的 commitInfo 并将其赋值给证明 StoreCommitInfo")])]),a._v(" "),o("p",[a._v("验证证明的步骤：")]),a._v(" "),o("ul",[o("li",[a._v("如果只存在右节点，请验证其存在的证明，并验证它是否是最左侧的节点")]),a._v(" "),o("li",[a._v("如果仅存在左节点，请验证其存在的证据，并验证它是否是最右侧的节点")]),a._v(" "),o("li",[a._v("如果右节点和左节点都存在，请验证它们是否相邻")])]),a._v(" "),o("h3",{attrs:{id:"substores-到-apphash-的证明"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#substores-到-apphash-的证明"}},[a._v("#")]),a._v(" Substores 到 AppHash 的证明")]),a._v(" "),o("p",[a._v("在验证了 IAVL 证明之后，我们就可以开始验证针对 AppHash 的 substore 证明。 首先，迭代 MultiStoreCommitInfo 并通过证明 StoreName 找到 substore commitID。 验证 commitID 中的哈希是否等于证明根哈希，如果不相等则证明无效。 然后通过 substore name 的哈希对 substore commitInfo 数组进行排序。 最后，使用所有 substore commitInfo 数组构建简单的 Merkle 树，并验证 Merkle 根哈希值是否等于 appHash。")]),a._v(" "),o("p",[o("img",{attrs:{src:s(583),alt:"substore proof"}})]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBTaW1wbGVIYXNoRnJvbVR3b0hhc2hlcyhsZWZ0IFtdYnl0ZSwgcmlnaHQgW11ieXRlKSBbXWJ5dGUgewogICAgdmFyIGhhc2hlciA9IHJpcGVtZDE2MC5OZXcoKQoKICAgIGVyciA6PSBlbmNvZGVCeXRlU2xpY2UoaGFzaGVyLCBsZWZ0KQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcGFuaWMoZXJyKQogICAgfQoKICAgIGVyciA9IGVuY29kZUJ5dGVTbGljZShoYXNoZXIsIHJpZ2h0KQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcGFuaWMoZXJyKQogICAgfQoKICAgIHJldHVybiBoYXNoZXIuU3VtKG5pbCkKfQoKZnVuYyBTaW1wbGVIYXNoRnJvbUhhc2hlcyhoYXNoZXMgW11bXWJ5dGUpIFtdYnl0ZSB7CiAgICAvLyBSZWN1cnNpdmUgaW1wbC4KICAgIHN3aXRjaCBsZW4oaGFzaGVzKSB7CiAgICAgICAgY2FzZSAwOgogICAgICAgICAgICByZXR1cm4gbmlsCiAgICAgICAgY2FzZSAxOgogICAgICAgICAgICByZXR1cm4gaGFzaGVzWzBdCiAgICAgICAgZGVmYXVsdDoKICAgICAgICAgICAgbGVmdCA6PSBTaW1wbGVIYXNoRnJvbUhhc2hlcyhoYXNoZXNbOihsZW4oaGFzaGVzKSsxKS8yXSkKICAgICAgICAgICAgcmlnaHQgOj0gU2ltcGxlSGFzaEZyb21IYXNoZXMoaGFzaGVzWyhsZW4oaGFzaGVzKSsxKS8yOl0pCiAgICAgICAgICAgIHJldHVybiBTaW1wbGVIYXNoRnJvbVR3b0hhc2hlcyhsZWZ0LCByaWdodCkKICAgIH0KfQo="}}),a._v(" "),o("h2",{attrs:{id:"根据验证人集验证区块头"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#根据验证人集验证区块头"}},[a._v("#")]),a._v(" 根据验证人集验证区块头")]),a._v(" "),o("p",[a._v("上面的小节中经常提到 appHash，但可信的 appHash 来自哪里？ 实际上，appHash 存在于区块头中，因此接下来我们需要针对 LCD 可信验证人集验证特定高度的区块头。 验证流程如下所示：")]),a._v(" "),o("p",[o("img",{attrs:{src:s(584),alt:"commit verification"}})]),a._v(" "),o("p",[a._v("当可信验证人集与区块头不匹配时，我们需要尝试将验证人集更新为此块的高度。 LCD 有一条规则，即每个验证人集的变化不应超过 1/3 投票权。 如果目标验证人集的投票权变化超过 1/3，则与可信验证人集进行比较。 我们必须验证，在目标验证人集之前是否存在隐含的验证人集变更。 只有当所有验证人集变更都遵循这条规则时，才能完成验证人集的更新。")]),a._v(" "),o("p",[a._v("例如：")]),a._v(" "),o("p",[o("img",{attrs:{src:s(585),alt:"Update validator set to height"}})]),a._v(" "),o("ul",[o("li",[a._v("更新到 10000，失败，变更太大")]),a._v(" "),o("li",[a._v("更新到 5050，失败，变更太大")]),a._v(" "),o("li",[a._v("更新至 2575，成功")]),a._v(" "),o("li",[a._v("更新至 5050，成功")]),a._v(" "),o("li",[a._v("更新到 10000，失败，变更太大")]),a._v(" "),o("li",[a._v("更新至 7525，成功")]),a._v(" "),o("li",[a._v("更新至 10000，成功")])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);