import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, boolean, number} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Grid, Column} from '../src';

storiesOf('Utilities|Grid', module)
  .addDecorator(withKnobs)
  .add('Grid - 12 Columns', () => {
    return (
      <Grid>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40" width="100%">
            Column
          </Box>
        </Column>
      </Grid>
    );
  })
  .add('Grid - Two Column Span', () => {
    return (
      <Grid gutter="space20">
        <Column span={2}>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40" width="100%">
            Column (2 column width)
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLighter" height="size40" width="100%">
            Column
          </Box>
        </Column>
        <Column>
          <Box backgroundColor="colorBackgroundPrimaryLight" height="size40" width="100%">
            Column
          </Box>
        </Column>
      </Grid>
    );
  });
