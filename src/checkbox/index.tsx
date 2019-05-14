import * as React from 'react';

import Checkbox from "@material/react-checkbox";
import {Cell, Row} from '@material/react-layout-grid';

const styles = require('./index.scss');

export default () => <Row>
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
</Row>;
