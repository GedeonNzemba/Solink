import React from 'react'
import { headerNames } from '../../utils/types'

interface IProps {
    primary?: true 
    secondary?: true
    borderDoubled?: true
 }

const Head = ({borderDoubled, primary, secondary}: IProps) => {

    return (
        <thead>
            <tr className={`${primary ? 'bg-SOLINK_WINE' : secondary ? 'bg-SOLINK_BLUE' : 'bg-SOLINK_GREEN'} text-center drop-shadow-md`} >
                {headerNames && headerNames.map((item, index) => {
                    return (
                        <th className={`${borderDoubled ? 'table--double-border' : 'border-transparent  border-l'} w-1/6 min-w-[160px] capitalize text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 `} key={index}>
                            {item?.name}
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}

export default Head