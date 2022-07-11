import React from 'react'
import { headerNames } from '../../utils/types'

const Head = () => {

    return (
        <thead>
            <tr className="bg-SOLINK_WINE text-center drop-shadow-md" >
                {headerNames && headerNames.map((item, index) => {
                    return (
                        <th className="w-1/6 min-w-[160px] capitalize text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent" key={index}>
                            {item?.name}
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}

export default Head