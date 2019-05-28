import * as React from 'react';

import Button from '@material/react-button';
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from '@material/react-card';
import MaterialIcon from "@material/react-material-icon";
import {Cell, Grid, Row} from '@material/react-layout-grid';

const styles = require('./index.scss');

export default () => <Grid className={styles.container}>
  <Row>
    {
      Array(12).fill(0).map((v, i) => i + 1).map((key) => <Cell key={key} desktopColumns={3}>
        <Card>
          <CardPrimaryContent>
            <CardMedia square imageUrl='https://avatars3.githubusercontent.com/u/20078201?s=460&v=4' />
          </CardPrimaryContent>

          <CardActions>
            <CardActionButtons>
              <Button>Click Me</Button>
            </CardActionButtons>
            <CardActionIcons>
              <MaterialIcon icon='favorite_border' />
            </CardActionIcons>
          </CardActions>
        </Card>
      </Cell>)
    }
  </Row>
</Grid>;
