import { TreeBranch } from '../interfaces'

const sortNodesAndChildren = (nodes: Array<TreeBranch>) => {
  nodes.sort((a: TreeBranch, b: TreeBranch) => {
    const aText = a.text.toUpperCase()
    const bText = b.text.toUpperCase()
    if (aText < bText) return -1
    if (aText > bText) return 1
    return 0
  })
  nodes.forEach((node: TreeBranch) => {
    if (node.children && node.children.length > 0) {
      sortNodesAndChildren(node.children)
    }
  })

  return nodes
}

const useSort = (tree: Array<TreeBranch>) => {
  const sortedTree = sortNodesAndChildren(tree)
  return { sortedTree }
}

export default useSort
