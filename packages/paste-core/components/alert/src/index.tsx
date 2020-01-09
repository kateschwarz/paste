import * as React from 'react';
import * as PropTypes from 'prop-types';
import {ValueOf} from '@twilio-paste/types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {Button} from '@twilio-paste/button';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {ErrorIcon} from '@twilio-paste/icons/esm/ErrorIcon';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {WarningIcon} from '@twilio-paste/icons/esm/WarningIcon';

export const ROLES = {
  error: 'alert',
  neutral: 'status',
  warning: 'alert',
} as const;
export const VARIANTS = {
  error: 'error',
  neutral: 'neutral',
  warning: 'warning',
} as const;
export const BACKGROUND_COLORS = {
  error: 'colorBackgroundErrorLightest',
  neutral: 'colorBackgroundNeutralLightest',
  warning: 'colorBackgroundWarningLightest',
} as const;
export const BORDER_COLORS = {
  error: 'colorBorderErrorLight',
  neutral: 'colorBorderNeutralLight',
  warning: 'colorBorderWarningLight',
} as const;

export type Variants = ValueOf<typeof VARIANTS>;
export type BackgroundColors = ValueOf<typeof BACKGROUND_COLORS>;
export type BorderColors = ValueOf<typeof BORDER_COLORS>;
export type Roles = ValueOf<typeof ROLES>;

export interface AlertProps {
  id?: never;
  className?: never;
  children: NonNullable<React.ReactNode>;
  onDismiss?: () => void;
  role?: string;
  variant: Variants;
}

const getBackgroundColor = (variant: Variants): BackgroundColors => {
  switch (variant) {
    case VARIANTS.error:
      return BACKGROUND_COLORS.error;
    case VARIANTS.warning:
      return BACKGROUND_COLORS.warning;
    case VARIANTS.neutral:
    default:
      return BACKGROUND_COLORS.neutral;
  }
};

const getBorderColor = (variant: Variants): BorderColors => {
  switch (variant) {
    case VARIANTS.error:
      return BORDER_COLORS.error;
    case VARIANTS.warning:
      return BORDER_COLORS.warning;
    case VARIANTS.neutral:
    default:
      return BORDER_COLORS.neutral;
  }
};

const renderAlertIcon = (variant: Variants): React.ReactElement => {
  switch (variant) {
    case VARIANTS.error:
      return <ErrorIcon iconColor="colorTextErrorDark" decorative={false} title="error: " size="sizeIcon30" />;
    case VARIANTS.warning:
      return <WarningIcon iconColor="colorTextWarningDark" decorative={false} title="warning: " size="sizeIcon30" />;
    case VARIANTS.neutral:
    default:
      return <InformationIcon iconColor="colorTextIcon" decorative={false} title="information: " size="sizeIcon30" />;
  }
};

const getComputedRole = (variant: Variants, role: string | undefined): string | Roles => {
  if (role != null) return role;
  if (variant === VARIANTS.error || variant === VARIANTS.warning) {
    return ROLES.error;
  }
  return ROLES.neutral;
};

const Alert: React.FC<AlertProps> = ({children, onDismiss, variant, role, ...props}) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      backgroundColor={getBackgroundColor(variant)}
      borderColor={getBorderColor(variant)}
      borderBottomWidth="borderWidth20"
      borderBottomStyle="solid"
      paddingLeft="space70"
      paddingRight="space70"
      paddingTop="space40"
      paddingBottom="space30"
      role={getComputedRole(variant, role)}
    >
      <MediaObject>
        <MediaFigure spacing="space40">{renderAlertIcon(variant)}</MediaFigure>
        <MediaBody>{children}</MediaBody>
        {onDismiss && typeof onDismiss === 'function' && (
          <MediaFigure align="end" spacing="space70">
            <Button onClick={onDismiss} variant="link" size="reset">
              <CloseIcon iconColor="colorTextIcon" decorative={false} title="dismiss this alert" size="sizeIcon30" />
            </Button>
          </MediaFigure>
        )}
      </MediaObject>
    </Box>
  );
};
Alert.propTypes = {
  children: PropTypes.node.isRequired,
  onDismiss: PropTypes.func,
  role: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(VARIANTS)).isRequired as React.Validator<keyof typeof VARIANTS>,
};
Alert.displayName = 'Alert';
export {Alert};
