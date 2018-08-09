import cc from "classcat";
import * as m from "mithril";
import BaseControl, { IBaseControl } from "./BaseControl";
import Value from "./Value";

interface ITextField extends IBaseControl<string> {
}

class TextField extends BaseControl<ITextField, string> {
  protected controls() {
    return <input oninput={m.withAttr("value", this.value)}
      type="text"
      class={cc(["form-control", { "is-invalid": !this.value.isValid() }])} />;
  }
}

export default TextField;
