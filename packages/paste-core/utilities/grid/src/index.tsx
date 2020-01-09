import * as React from 'react';
import {ThemeShape} from '@twilio-paste/theme-tokens';
import {ResponsiveValue} from 'styled-system';
import {Box} from '@twilio-paste/box';
import {Flex} from '@twilio-paste/flex';
import {FlexboxProps, LayoutProps, MarginProps} from '@twilio-paste/style-props';

export interface GridProps {
  children: NonNullable<React.ReactNode>;
  gutter?: ResponsiveValue<keyof ThemeShape['space']>;
}

const getColumns = ({children}: GridProps): number => {
  return React.Children.count(children);
};

const Grid: React.FC<GridProps> = props => {
  const Count = getColumns(props);

  const GridColumns = React.Children.map(props.children, child =>
    React.isValidElement(child) ? React.cloneElement(child, {count: Count, gutter: props.gutter}) : child
  );

  return <Flex {...props}>{GridColumns}</Flex>;
};

Grid.displayName = 'Grid';

export interface ColumnProps extends Box {
  count?: number;
  gutter?: ResponsiveValue<keyof ThemeShape['space']>;
  offset?: number;
  span?: number;
}

const getSpan = ({span, count}: ColumnProps): {} => {
  if (span && count) {
    return `${(span / count) * 100}%`;
  }

  if (count !== undefined) {
    return `${(1 / count) * 100}%`;
  }

  return `${(1 / 12) * 100}%`;
};

const getColumnStyles = (props: ColumnProps): LayoutProps => {
  const styles: MarginProps & LayoutProps & FlexboxProps = {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    width: getSpan(props),
  };

  if (props.gutter) {
    styles.marginLeft = props.gutter;
    styles.marginRight = props.gutter;
  }

  return styles;
};

const Column: React.FC<ColumnProps> = props => {
  // const ColumnStyles = React.useMemo(() => getColumnStyles(props), [props]);
  return (
    <Box {...getColumnStyles(props)} display="flex">
      {props.children}
    </Box>
  );
};

Column.displayName = 'Column';

export {Grid, Column};
