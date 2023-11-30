import * as React from 'react'
import type { SVGProps } from 'react'
const SvgAdminIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#admin-icon_svg__a)">
      <path
        fill="currentColor"
        d="M11 12.833v1.834a5.5 5.5 0 0 0-5.5 5.5H3.667A7.334 7.334 0 0 1 11 12.833m0-.916a5.499 5.499 0 0 1-5.5-5.5c0-3.04 2.461-5.5 5.5-5.5s5.5 2.46 5.5 5.5c0 3.038-2.461 5.5-5.5 5.5m0-1.834a3.666 3.666 0 0 0 3.667-3.666A3.666 3.666 0 0 0 11 2.75a3.666 3.666 0 0 0-3.667 3.667A3.666 3.666 0 0 0 11 10.083m8.25 5.5h.917v4.584h-7.334v-4.584h.917v-.916a2.75 2.75 0 1 1 5.5 0v.916m-1.833 0v-.916a.916.916 0 1 0-1.834 0v.916h1.834"
      />
    </g>
    <defs>
      <clipPath id="admin-icon_svg__a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgAdminIcon
