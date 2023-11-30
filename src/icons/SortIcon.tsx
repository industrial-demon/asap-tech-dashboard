import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M5 13.513 0 8.471h10l-5 5.042M5 .067 0 5.109h10L5 .067Z"
    />
  </svg>
)
export default SvgSortIcon
