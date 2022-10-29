import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',
  border: '2px solid $indigo400',
  padding: '$1',

  variants: {
    size: {
      sm: {
        width: '$12',
        height: '$12',
      },
      md: {
        width: '$16',
        height: '$16',
      },
      lg: {
        width: '$20',
        height: '$20',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',
  background: '$indigo200',
  borderRadius: 'inherit',

  svg: {
    width: '$6',
    height: '$6',
  },
})
