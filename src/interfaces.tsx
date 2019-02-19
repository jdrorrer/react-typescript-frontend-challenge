import { ReactChild } from 'react'

interface Branch {
  text: string
}

export interface TreeBranch extends Branch {
  children?: Array<TreeBranch>
}

export interface ReactElementTreeBranch extends Branch {
  children?: Array<ReactChild> | ReactChild
}
