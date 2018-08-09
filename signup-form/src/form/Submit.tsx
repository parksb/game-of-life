import * as m from "mithril";

interface ISubmit {
  label: string;
  disabled?: boolean;
}

class Submit implements m.ClassComponent<ISubmit> {
  // tslint:disable-next-line:variable-name
  private __attrs: ISubmit;

  public view({attrs}: m.CVnode<ISubmit>) {
    return <div class="form-group row">
      <div class="col-sm-10 offset-sm-2">
        <button type="submit" class="btn btn-primary" disabled={attrs.disabled || false}>{attrs.label}</button>
      </div>
    </div>;
  }
}

export default Submit;
