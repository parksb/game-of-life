import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MDCButton from '@material/react-button';
import MaterialIcon from "@material/react-material-icon";

const styles = require('./index.scss');

const Component = () => <div className={styles.container}>
  <h1>Button</h1>
  <div className={styles.wrapper}>
    <MDCButton className={styles.component}>default</MDCButton>
    <MDCButton className={styles.component} raised={true}>raised</MDCButton>
    <MDCButton className={styles.component} unelevated={true}>unelevated</MDCButton>
    <MDCButton className={styles.component} outlined={true}>outlined</MDCButton>
    <MDCButton className={styles.component} dense={true}>dense</MDCButton>
    <MDCButton className={styles.component} icon={<MaterialIcon icon={'stars'}/>}>icon</MDCButton>
    <MDCButton className={styles.component} trailingIcon={<MaterialIcon icon={'cached'}/>}>trailing-icon</MDCButton>
    <MDCButton className={styles.component} disabled={true}>disabled</MDCButton>
  </div>
</div>;

ReactDOM.render(<Component/>, document.getElementById('app'));
