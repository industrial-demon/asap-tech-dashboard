import * as React from 'react'
import type { SVGProps } from 'react'
const SvgDashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#dashboard-icon_svg__a)">
      <path
        fill="currentColor"
        d="M11 1.833A9.166 9.166 0 0 1 20.167 11 9.166 9.166 0 0 1 11 20.167 9.166 9.166 0 0 1 1.833 11 9.166 9.166 0 0 1 11 1.833Zm0 1.834a7.334 7.334 0 1 0 0 14.667 7.334 7.334 0 0 0 0-14.667Zm0 .916c.933 0 1.82.2 2.62.558l-1.433 1.431a4.584 4.584 0 0 0-4.428 7.669l-1.297 1.297-.143-.148A6.417 6.417 0 0 1 11 4.583m5.86 3.798c.357.8.557 1.687.557 2.619a6.4 6.4 0 0 1-1.88 4.538l-1.296-1.297a4.576 4.576 0 0 0 1.186-4.428L16.86 8.38m-1.972-2.567 1.298 1.297-3.414 3.415a1.833 1.833 0 1 1-1.298-1.298l3.415-3.414"
      />
    </g>
    <defs>
      <clipPath id="dashboard-icon_svg__a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgDashboardIcon
