import * as React from 'react';

import {ChipSet, Chip} from '@material/react-chips';
import {Cell, Row} from '@material/react-layout-grid';

export default () => <Row>
  <Cell>
    <ChipSet>
      <Chip id='summer' label='Summer'/>
      <Chip id='winter' label='Winter'/>
    </ChipSet>
  </Cell>
</Row>;
