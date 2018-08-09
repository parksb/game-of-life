declare module "*.css" {
  const styles: { [key: string]: string };
  export = styles;
}

import * as m from "mithril";

declare global {
  namespace JSX {
    interface Element extends m.Vnode<any, any> { }
    interface ElementClass extends m.Comp<any, any> { }
    interface ElementAttributesProperty { __attrs: any; }
    interface ElementChildrenAttribute { children: {}; }
    interface IntrinsicElements {
      [elementName: string]: m.Attributes;
    }
  }
}
