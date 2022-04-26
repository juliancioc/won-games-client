import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors,
  size?: 'small' | 'medium'
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium',
}: HeadingProps) => (
  <S.Wrapper
    lineColor={lineColor}
    size={size} color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
  >

    {children}
  </S.Wrapper>
)

export default Heading
