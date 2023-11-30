import * as React from 'react'
import type { SVGProps } from 'react'
const SvgConnectionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#connections-icon_svg__a)">
      <path
        fill="currentColor"
        d="m11.972 7.434 1.297 1.297a6.416 6.416 0 0 1 0 9.075l-.325.324A6.417 6.417 0 1 1 3.87 9.055l1.297 1.297a4.583 4.583 0 1 0 6.482 6.482l.325-.325a4.584 4.584 0 0 0 0-6.48L10.675 8.73l1.298-1.296h-.001m6.158 5.51-1.296-1.296a4.585 4.585 0 0 0-1.478-7.491 4.584 4.584 0 0 0-5.004 1.01l-.325.324a4.583 4.583 0 0 0 0 6.48l1.298 1.298-1.298 1.296-1.296-1.296a6.416 6.416 0 0 1 0-9.075l.325-.324a6.417 6.417 0 1 1 9.075 9.075h-.001"
      />
    </g>
    <defs>
      <clipPath id="connections-icon_svg__a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgConnectionsIcon
