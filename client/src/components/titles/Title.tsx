import React from 'react'
import { TITLE } from '../../utils/types'

const Title = ({name}:TITLE) => {
  return <h3 className="font-medium leading-tight capitalize text-3xl mt-0 mb-2 text-SOLINK_GREEN">{name}</h3>
}

export default Title