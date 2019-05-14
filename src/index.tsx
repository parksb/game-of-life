import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Button from '@material/react-button';
import Checkbox from '@material/react-checkbox';
import MaterialIcon from "@material/react-material-icon";
import {Cell, Grid, Row} from '@material/react-layout-grid';


const styles = require('./index.scss');

const Component = () => <Grid>
  <h1>Button</h1>
  <Row>
    <Cell><Button>default</Button></Cell>
    <Cell><Button raised={true}>raised</Button></Cell>
    <Cell><Button unelevated={true}>unelevated</Button></Cell>
    <Cell><Button outlined={true}>outlined</Button></Cell>
    <Cell><Button dense={true}>dense</Button></Cell>
    <Cell><Button icon={<MaterialIcon icon={'stars'}/>}>icon</Button></Cell>
    <Cell><Button trailingIcon={<MaterialIcon icon={'cached'}/>}>trailing-icon</Button></Cell>
    <Cell><Button disabled={true}>disabled</Button></Cell>
  </Row>
  <h1>Checkbox</h1>
  <Row>
    <Cell className={styles.checkbox}>
      <Checkbox nativeControlId='checkbox1' className={styles.check}/>
      <label htmlFor='checkbox1' className={styles.label}>Checkbox1</label>
    </Cell>
    <Cell className={styles.checkbox}>
      <Checkbox nativeControlId='checkbox2' className={styles.check} indeterminate={true}/>
      <label htmlFor='checkbox2' className={styles.label}>Checkbox2</label>
    </Cell>
    <Cell className={styles.checkbox}>
      <Checkbox nativeControlId='checkbox3' className={styles.check} disabled={true}/>
      <label htmlFor='checkbox3' className={styles.label}>Checkbox3</label>
    </Cell>
  </Row>
</Grid>;

ReactDOM.render(<Component/>, document.getElementById('app'));
