import * as ToastPrimitive from '@radix-ui/react-toast'
import { rgba } from 'polished'
import { colors } from '@afrodis-ui/tokens'
import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 20

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const StyledToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const StyledToast = styled(ToastPrimitive.Root, {
  borderRadius: '$md',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$4',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: '$4',
  alignItems: 'center',
  outline: 'none',

  '&:focus': {
    boxShadow: `0 0 0 3px ${rgba(colors.indigo400, 0.7)}`,
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },

  border: '2px solid',
  color: '$gray100',

  variants: {
    state: {
      default: {
        backgroundColor: '$gray500',
        borderColor: '$gray400',
      },
      success: {
        backgroundColor: rgba(colors.success, 0.2),
        borderColor: '$success',

        svg: {
          color: '$success',
        },
      },
      danger: {
        backgroundColor: rgba(colors.danger, 0.2),
        borderColor: '$danger',

        svg: {
          color: '$danger',
        },
      },
      warning: {
        backgroundColor: rgba(colors.warning, 0.2),
        borderColor: '$warning',

        svg: {
          color: '$warning',
        },
      },
    },
  },

  defaultVariants: {
    state: 'success ',
  },
})

export const StyledToastTitle = styled(ToastPrimitive.Title, {
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: 500,
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray100',
})

export const StyledToastDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  fontFamily: '$default',
  lineHeight: '$base',
})

export const StyledToastAction = styled(ToastPrimitive.Action, {
  all: 'unset',
  gridArea: 'action',
  fontSize: '$xl',
  borderRadius: '$sm',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$1',

  '&:focus': {
    boxShadow: `0 0 0 3px ${rgba(colors.indigo400, 0.7)}`,
  },
})

export const StyledToastWrapper = ToastPrimitive.Provider
