import cc from "classcat";
import * as m from "mithril";
import BaseControl, { IBaseControl } from "./BaseControl";
import Value from "./Value";

interface IPassword extends IBaseControl<string> {
}

class Password extends BaseControl<IPassword, string> {
  protected controls() {
    return <input oninput={m.withAttr("value", this.value)}
      type="password"
      class={cc(["form-control", { "is-invalid": !this.value.isValid() }])} />;
  }
}

export default Password;
