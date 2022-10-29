import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ size = 'md', ...rest }: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...rest} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
