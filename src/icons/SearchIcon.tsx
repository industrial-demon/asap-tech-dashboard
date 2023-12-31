import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#search-icon_svg__a)">
      <path
        fill="currentColor"
        d="m15.026 13.848 3.569 3.568-1.18 1.179-3.568-3.57a7.466 7.466 0 0 1-4.68 1.642c-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.467 7.467 0 0 1-1.641 4.68m-1.672-.619A5.814 5.814 0 0 0 15 9.167a5.832 5.832 0 0 0-5.834-5.834 5.831 5.831 0 0 0-5.833 5.834A5.832 5.832 0 0 0 9.166 15a5.815 5.815 0 0 0 4.063-1.646l.125-.125"
      />
    </g>
    <defs>
      <clipPath id="search-icon_svg__a">
        <path fill="currentColor" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSearchIcon
