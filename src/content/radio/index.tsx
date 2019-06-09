import * as React from 'react';

import Radio, {NativeRadioControl} from '@material/react-radio';
import {Cell, Grid, Row} from '@material/react-layout-grid';

export default () => <Grid>
  <Row>
    <Cell phoneColumns={4} tabletColumns={8} desktopColumns={12}>Choice your framework!</Cell>
    <Cell>
      <Radio label='Angular' key='angular'>
        <NativeRadioControl
          name='framework'
          value='angular'
          id='angular'
        />
      </Radio>
    </Cell>
    <Cell>
      <Radio label='React' key='react'>
        <NativeRadioControl
          name='framework'
          value='react'
          id='react'
        />
      </Radio>
    </Cell>
    <Cell>
      <Radio label='Vue' key='vue'>
        <NativeRadioControl
          name='framework'
          value='vue'
          id='vue'
        />
      </Radio>
    </Cell>
  </Row>
</Grid>;
