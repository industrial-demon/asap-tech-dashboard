import * as React from 'react'
import type { SVGProps } from 'react'
const SvgManageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#manage-icon_svg__a)">
      <path
        fill="currentColor"
        d="M2.75 15.583h16.5v1.834H2.75v-1.834m0-5.5H5.5v2.75H2.75v-2.75m4.583 0h2.75v2.75h-2.75v-2.75m-4.583-5.5H5.5v2.75H2.75v-2.75m9.167 0h2.75v2.75h-2.75v-2.75m4.583 0h2.75v2.75H16.5v-2.75m-4.583 5.5h2.75v2.75h-2.75v-2.75m4.583 0h2.75v2.75H16.5v-2.75m-9.167-5.5h2.75v2.75h-2.75v-2.75"
      />
    </g>
    <defs>
      <clipPath id="manage-icon_svg__a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgManageIcon
