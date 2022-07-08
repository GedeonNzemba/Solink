/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { TABLE_BODY_VALUE } from '../../utils/types'
import Body from './Body'
import Head from './Head'

const Table = ({value}: TABLE_BODY_VALUE) => {
    return (
        <section className="bg-white py-20 lg:py-[120px]">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="max-w-full overflow-x-auto">
                            <table className="table-auto w-full">
                                <Head />
                                {/* <Body value={value} /> */}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Table