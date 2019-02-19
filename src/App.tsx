import React, { Component } from 'react'
import styled from 'styled-components'
import tree from './testJson'
import Tree from './components/part-1'
import useSort from './helpers/part-2'
import { TreeBranch } from './interfaces'

export const AppContainer = styled.div`
  text-align: left;
`

class App extends Component {
  render() {
    const { sortedTree } = useSort(tree)
    return (
      <AppContainer>
        <ul>
          {sortedTree.map((branch: TreeBranch, index: number) => {
            return <Tree key={index} {...branch} />
          })}
        </ul>
      </AppContainer>
    )
  }
}

export default App
