import * as React from 'react'
import type { SVGProps } from 'react'
const SvgChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M0 9.984h6v7.74H0v-7.74m14-4.838h6v12.578h-6V5.146ZM7 .308h6v17.416H7V.308Zm-5 11.61v3.871h2v-3.87H2m7-9.675V15.79h2V2.243H9m7 4.838v8.708h2V7.081h-2"
    />
  </svg>
)
export default SvgChartIcon
