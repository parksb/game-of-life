import cc from "classcat";
import * as m from "mithril";
import BaseControl, { IBaseControl } from "./BaseControl";
import Value from "./Value";

interface IEmail extends IBaseControl<string> {
}

class Email extends BaseControl<IEmail, string> {
  public oninit(vnode: m.CVnode<IEmail>) {
    super.oninit(vnode);
    this.oninput(this.value());
  }

  protected controls() {
    return <input oninput={m.withAttr("value", (value) => this.oninput(value))}
      type="email"
      class={cc(["form-control", { "is-invalid": !this.value.isValid() }])} />;
  }

  private oninput(value) {
    this.value(value);
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      this.value.error(null);
    } else {
      this.value.error("Input a valid email");
    }
  }
}

export default Email;
