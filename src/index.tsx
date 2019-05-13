import * as React from 'react';
import * as ReactDOM from 'react-dom';

const styles = require('./index.scss');

const Component = () => <div className={styles.container}>
  <h1>Button</h1>
  <div className={styles.wrapper}></div>
</div>;

ReactDOM.render(<Component/>, document.getElementById('app'));
