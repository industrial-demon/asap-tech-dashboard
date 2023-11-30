import * as React from 'react'
import type { SVGProps } from 'react'
const SvgPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="currentColor"
    {...props}
  >
    <path d="M9 9V5h2v4h4v2h-4v4H9v-4H5V9zm1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10m0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18" />
  </svg>
)
export default SvgPlusIcon
