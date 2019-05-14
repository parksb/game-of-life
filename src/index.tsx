import * as React from 'react';
import * as ReactDOM from 'react-dom';

import classnames from 'classnames';
import Button from '@material/react-button';
import Checkbox from '@material/react-checkbox';
import MaterialIcon from "@material/react-material-icon";

const styles = require('./index.scss');

const Component = () => <div className={styles.container}>
  <h1>Button</h1>
  <div className={styles.wrapper}>
    <Button className={styles.component}>default</Button>
    <Button className={styles.component} raised={true}>raised</Button>
    <Button className={styles.component} unelevated={true}>unelevated</Button>
    <Button className={styles.component} outlined={true}>outlined</Button>
    <Button className={styles.component} dense={true}>dense</Button>
    <Button className={styles.component} icon={<MaterialIcon icon={'stars'}/>}>icon</Button>
    <Button className={styles.component} trailingIcon={<MaterialIcon icon={'cached'}/>}>trailing-icon</Button>
    <Button className={styles.component} disabled={true}>disabled</Button>
  </div>
  <h1>Checkbox</h1>
  <div className={styles.wrapper}>
    <div className={classnames([styles.component, styles.checkbox])}>
      <Checkbox nativeControlId='checkbox1' className={styles.check}/>
      <label htmlFor='checkbox1' className={styles.label}>Checkbox1</label>
    </div>
    <div className={classnames([styles.component, styles.checkbox])}>
      <Checkbox nativeControlId='checkbox2' className={styles.check} indeterminate={true}/>
      <label htmlFor='checkbox2' className={styles.label}>Checkbox2</label>
    </div>
    <div className={classnames([styles.component, styles.checkbox])}>
      <Checkbox nativeControlId='checkbox3' className={styles.check} disabled={true}/>
      <label htmlFor='checkbox3' className={styles.label}>Checkbox3</label>
    </div>
  </div>
</div>;

ReactDOM.render(<Component/>, document.getElementById('app'));
