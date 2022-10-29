import React from 'react'

import {
  StyledToast,
  StyledToastWrapper,
  StyledToastAction,
  StyledToastTitle,
  StyledToastDescription,
  StyledToastViewport,
} from './styles'

export interface ToastWrapperProps
  extends React.ComponentProps<typeof StyledToastWrapper> {}

export function ToastWrapper({ children, ...props }: ToastWrapperProps) {
  return <StyledToastWrapper {...props}>{children}</StyledToastWrapper>
}

export interface ToastProps extends React.ComponentProps<typeof StyledToast> {}

export function Toast({ children, ...props }: ToastProps) {
  return <StyledToast {...props}>{children}</StyledToast>
}

export const ToastAction = StyledToastAction
ToastAction.displayName = 'ToastAction'

export const ToastTitle = StyledToastTitle
ToastTitle.displayName = 'ToastTitle'

export const ToastDescription = StyledToastDescription
ToastDescription.displayName = 'ToastDescription'

export const ToastViewport = StyledToastViewport
ToastViewport.displayName = 'ToastViewport'
