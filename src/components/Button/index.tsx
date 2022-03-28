import { ReactNode, MouseEvent } from 'react'

import * as S from './styles'

export type ButtonProps = {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: ReactNode
  onClick?: () => (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ 
  children, 
  size = 'medium', 
  fullWidth = false, 
  icon, ...props 
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidth={fullWidth} {...props} hasIcon={!!icon}>
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
