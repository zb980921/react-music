export interface SvgIconProps {
  name: string
  prefix?: string
  color?: string
  size?: number
  [key: string]: string | undefined | number
}

export default function SvgIcon({
  name,
  prefix = 'icon',
  color = '#333',
  size = 20,
  ...props
}: SvgIconProps) {
  const symbolId = `#${prefix}-${name}`
  const px = `${size}px`
  const style = { color, width: px, height: px }

  return (
    <svg {...props} aria-hidden="true" style={style}>
      <use href={symbolId} fill={color} />
    </svg>
  )
}
