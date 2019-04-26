프론트엔드 개발자에게 중앙 정렬을 어떻게 하냐고 물어보면 inline 요소는 text-align 속성을 center로 지정하고, block 요소는 margin 속성을 auto로 지정한다고 대답할 겁니다.
그런데 좌우가 아니라 위아래 수직 정렬을 어떻게 하겠냐고 물어보면 대답을 선뜻 못하거나 굉장히 다양한 답변들이 나옵니다.
그 여러 방법들 중에 개발자들이 사용하면서도 "왜 되는거지?"라고 의구심을 많이 품게 되는 vertical-align에 대해서 자세히 써보려고 합니다.

벤더사들의 구현에 따라 달라질 수 있지만 [표준 명세서](https://www.w3.org/TR/CSS2/visudet.html#propdef-vertical-align)에서는 vertical-align에 대한 설명을 이렇게 시작합니다.

```
이 속성은 line box 안에서 inline-level 요소에 의해 생성되는 박스들의 수직 위치에 영향을 미칩니다.
```

inline-level 요소는 한 줄에 나열할 수 있는 요소들을 말합니다.
display 속성을 inline, inline-block, inline-table 등으로 지정해서 만들 수 있는데요.
이 요소들에 의해서 만들어진 가상의 박스들은 곧 해당 요소의 크기를 나타냅니다.

간단한 예를 들자면 아래처럼 css가 적용된 요소의 박스 크기는 100\*100px입니다.
```
.box {
  display: inline-block;
  width: 100px;
  height: 100px;
}
```
inline은 inline-block와 다르게 width/height가 아니라 폰트 매트릭스에 따른 계산이 필요하므로 추후에 다루겠습니다.

아무튼 각 줄마다 이런 inline-level 박스들을 가지고 있는 박스를 line box라고 하는데요.
이 line box를 이해하면 vertical-align에 적용 가능한 값들 중 top/bottom을 완벽하게 이해할 수 있습니다.
왜냐하면 top은 line box의 최상단에, bottom은 line box의 최하단에 정렬시켜주기 때문인데요.
그렇다면 line-box는 어떻게 계산되는 걸까요?

많은 조건들이 있지만 첫 번째로 inline-level 요소들의 높이를 계산해서 가장 큰 값을 가져옵니다.
아래의 예시를 보시죠!
```
.box {
  display: inline-block;
  width: 100px;
}
.big { height: 300px; }
.medium { height: 200px; }
.small { height: 100px; }
.top { vertical-align: top; }
.bottom { vertical-align: bottom; }
```
```
<div>
  <div class="box small top"></div>
  <div class="box big top"></div>
  <div class="box small bottom"></div>
</div>
```
(렌더링된 화면)
높이가 300px인 박스 한 개와 100px인 박스 두 개를 만들었습니다.
그리고 작은 박스 두 개에 각각 top과 bottom을 줬는데요.
보시다시피 가장 큰 inline-level 요소인 300px 박스를 기준으로 최상단과 하단에 배치됩니다.
큰 박스에는 top을 줬지만 line box와 높이가 같으므로 위치의 변화는 없습니다.

```
<div>
  <div class="box small top"></div>
  <div class="box big top"></div>
  <div class="box small bottom"></div>
  <div class="box medium bottom"></div>
</div>
```
높이가 200px인 박스를 추가했지만 여전히 가장 큰 높이는 300px이므로, 높이가 300px인 line box를 기준으로 수직정렬됩니다.
