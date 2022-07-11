import React, { Children } from 'react'

const TD = ({ children }: {children: React.ReactNode}): JSX.Element => {
  return  <td className=" drop-shadow-md text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
    {children}
  </td>
}
export default TD
