프론트엔드 개발자에게 중앙 정렬을 어떻게 하냐고 물어보면 inline 요소는 text-align 속성을 center로 지정하고, block 요소는 margin 속성을 auto로 지정한다고 대답할 겁니다.
그런데 좌우가 아니라 위아래 수직 정렬을 어떻게 하겠냐고 물어보면 대답을 선뜻 못하거나 굉장히 다양한 답변들이 나옵니다.
그 여러 방법들 중에 개발자들이 사용하면서도 "왜 되는거지?"라고 의구심을 많이 품게 되는 vertical-align에 대해서 자세히 써보려고 합니다.

벤더사들의 구현에 따라 달라질 수 있지만 [표준 명세서](https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align)에서는 vertical-align에 대한 설명을 이렇게 시작합니다.

```
이 속성은 line box 안에서 inline-level 요소에 의해 생성되는 박스들의 수직 위치에 영향을 미칩니다.
```

inline-level 요소는 우리가 display 속성을 inline, inline-block, inline-table 등으로 지정한 inline 요소들을 말하는데요.

```
Inline-level elements are those elements of the source document that do not form new blocks of content; the content is distributed in lines (e.g., emphasized pieces of text within a paragraph, inline images, etc.). The following values of the 'display' property make an element inline-level: 'inline', 'inline-table', and 'inline-block'. Inline-level elements generate inline-level boxes, which are boxes that participate in an inline formatting context.

An inline box is one that is both inline-level and whose contents participate in its containing inline formatting context. A non-replaced element with a 'display' value of 'inline' generates an inline box. Inline-level boxes that are not inline boxes (such as replaced inline-level elements, inline-block elements, and inline-table elements) are called atomic inline-level boxes because they participate in their inline formatting context as a single opaque box.

https://www.w3.org/TR/CSS2/visuren.html#inline-formatting
```

```
The following values align the element relative to the line box. Since the element may have children aligned relative to it (which in turn may have descendants aligned relative to them), these values use the bounds of the aligned subtree. The aligned subtree of an inline element contains that element and the aligned subtrees of all children inline elements whose computed 'vertical-align' value is not 'top' or 'bottom'. The top of the aligned subtree is the highest of the tops of the boxes in the subtree, and the bottom is analogous.

top
Align the top of the aligned subtree with the top of the line box.
bottom
Align the bottom of the aligned subtree with the bottom of the line box.
The baseline of an 'inline-table' is the baseline of the first row of the table.

The baseline of an 'inline-block' is the baseline of its last line box in the normal flow, unless it has either no in-flow line boxes or if its 'overflow' property has a computed value other than 'visible', in which case the baseline is the bottom margin edge.
```
