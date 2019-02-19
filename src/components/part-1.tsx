import React from 'react'
import { TreeBranch } from '../interfaces'
import Collapsible from './part-3'

interface Props extends TreeBranch {}

const renderChildren = (arr: Array<TreeBranch>) => {
  return <ul>{arr.map(renderChild)}</ul>
}

const renderChild = (child: TreeBranch, index: number) => {
  return <Tree key={index} {...child} />
}

const Tree = ({ text, children }: Props) => (
  <li>
    {text}
    {children ? (
      <Collapsible text={text}>{renderChildren(children)}</Collapsible>
    ) : null}
  </li>
)

export default Tree
