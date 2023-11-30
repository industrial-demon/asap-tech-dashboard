import * as React from 'react'
import type { SVGProps } from 'react'
const SvgMonitorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#monitor-icon_svg__a)">
      <path
        fill="currentColor"
        d="M11 18.333a7.333 7.333 0 1 0 0-14.666 7.333 7.333 0 0 0 0 14.666m0 1.834A9.166 9.166 0 0 1 1.833 11 9.166 9.166 0 0 1 11 1.833 9.166 9.166 0 0 1 20.167 11 9.166 9.166 0 0 1 11 20.167m0-5.5a3.667 3.667 0 1 0 0-7.334 3.667 3.667 0 0 0 0 7.334m0 1.833a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0-3.667a1.833 1.833 0 1 1 0-3.666 1.833 1.833 0 0 1 0 3.666"
      />
    </g>
    <defs>
      <clipPath id="monitor-icon_svg__a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMonitorIcon
