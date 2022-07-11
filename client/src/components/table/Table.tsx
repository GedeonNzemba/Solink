import React, { Children, ReactNode } from 'react'

interface IProps {
    children: ReactNode
    borderDoubled?: true
    // any other props you might have
  }

const Table = ({ borderDoubled, children }: IProps): JSX.Element => {
    return (
        <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
                <div className="max-w-full overflow-x-auto">
                    <table className={`${borderDoubled && 'border-double border-4 border-SOLINK_WINE'} table-auto w-full drop-shadow-md`}>
                        {children}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table