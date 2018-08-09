import * as m from "mithril";
import Value, { IValue } from "./Value";

let controlIdSeq = 1;

export interface IBaseControl<T, U = T> {
  value: IValue<string>;
  label: string;
}

class BaseControl<Attrs extends IBaseControl<T, U>, T, U = T> implements m.ClassComponent<Attrs> {
  protected value: IValue<string>;
  private label: string;
  private controlId: string;
  // tslint:disable-next-line:variable-name
  private __attrs: Attrs;

  public oninit({ attrs }: m.CVnode<Attrs>) {
    this.value = attrs.value;
    this.label = attrs.label;
    this.controlId = `__control${controlIdSeq++}`;
  }

  public view(vnode: m.CVnode<Attrs>) {
    return <div class="form-group row">
      <label for={this.controlId} class="col-sm-2 col-form-label">{this.label}</label>
      <div class="col-sm-10">
        {this.controls()}
        {!this.value.isValid() &&
        <div class="invalid-feedback">{this.value.error()}</div>}
      </div>
    </div>;
  }

  protected controls(): m.Children { return; }
}

export default BaseControl;
