import { keyframes } from '@stitches/react'
import { styled } from '../../styles'

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const ButtonSt = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',
  transition: 'background 0.2s ease',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '.animate-spin': {
    animation: `${spin} 1s linear infinite`,
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$indigo500',

        '&:not(:disabled):hover': {
          background: '$indigo400',
        },

        '&:disabled': {
          opacity: 0.5,
        },
      },

      secondary: {
        color: '$indigo400',
        border: '2px solid $indigo500',

        '&:not(:disabled):hover': {
          background: '$indigo500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
          opacity: 0.5,
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          opacity: 0.5,
        },
      },
    },

    size: {
      sm: {
        height: 34,
      },

      md: {
        height: 38,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
