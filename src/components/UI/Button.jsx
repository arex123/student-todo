import React from 'react'
import { Button } from '@chakra-ui/react'

const ButtonGroup = (props) => {
  return (
    <Button colorScheme='blue' className="w-20 mt-6" type={props.type || 'button'} onClick={props.onClick}> {props.children}</Button>
  )
}

export default ButtonGroup