import React, { useState, Children, Fragment } from 'react'
import styled from 'styled-components'
import { ReactElementTreeBranch } from '../interfaces'

export const CursorPointer = styled.span`
  cursor: pointer;
`

interface Props extends ReactElementTreeBranch {}

const Collapsible = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(!Children.count(children))

  return (
    <Fragment>
      <CursorPointer onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? ' -' : ' +'}
      </CursorPointer>
      {isOpen ? children : null}
    </Fragment>
  )
}

export default Collapsible
