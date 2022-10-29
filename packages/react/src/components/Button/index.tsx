import { CircleNotch } from 'phosphor-react'
import { colors } from '@afrodis-ui/tokens'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { ButtonSt } from './styles'

export interface ButtonProps extends ComponentProps<typeof ButtonSt> {
  as?: ElementType
  isLoading?: boolean
  children: ReactNode
  focusBorderColor?: keyof typeof colors | string
}

export function Button({
  as,
  isLoading = false,
  focusBorderColor = colors.gray800,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonSt {...rest} css={{ '--focus-border-color': focusBorderColor }}>
      {isLoading ? (
        <CircleNotch
          className="animate-spin"
          size={18}
          weight="bold"
          color="white"
        />
      ) : (
        children
      )}
    </ButtonSt>
  )
}

Button.displayName = 'Button'
