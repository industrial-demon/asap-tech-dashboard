import * as React from 'react'
import type { SVGProps } from 'react'
const SvgClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 20.032c-5.523 0-10-4.357-10-9.731S4.477.57 10 .57s10 4.356 10 9.73c0 5.374-4.477 9.73-10 9.73m0-1.947c2.122 0 4.157-.82 5.657-2.28A7.68 7.68 0 0 0 18 10.301a7.68 7.68 0 0 0-2.343-5.505A8.114 8.114 0 0 0 10 2.516c-2.122 0-4.157.82-5.657 2.28A7.68 7.68 0 0 0 2 10.301a7.68 7.68 0 0 0 2.343 5.504A8.114 8.114 0 0 0 10 18.085m1-7.784h4v1.946H9V5.436h2V10.3"
    />
  </svg>
)
export default SvgClockIcon
