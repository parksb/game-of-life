import * as m from "mithril";

import Email from "./Email";
import Password from "./Password";
import Submit from "./Submit";
import TextField from "./TextField";
import Value, { IValue } from "./Value";

interface IForm {
  onsubmit?: () => void;
}

class Form implements m.ClassComponent<IForm> {
  public static Email = Email;
  public static Password = Password;
  public static Submit = Submit;
  public static TextField = TextField;
  public static Value = Value;
  // tslint:disable-next-line:variable-name
  private __attrs: IForm;
  private onsubmitAttrs?: () => void;

  public oninit({attrs}: m.CVnode<IForm>) {
    this.onsubmitAttrs = attrs.onsubmit;
  }

  public view(vnode: m.CVnode<IForm>) {
    return <form onsubmit={(event) => this.onsubmit(event)}>
      {vnode.children}
    </form>;
  }

  private onsubmit(event: Event) {
    event.preventDefault();

    if (this.onsubmitAttrs) {
      this.onsubmitAttrs();
    }
  }
}

export { IValue };
export default Form;
