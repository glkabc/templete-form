
function findTreeData<T>(data: T, id: string): [number, T] | undefined {
  if (!Array.isArray(data)) return undefined;

  for(let i = 0; i < data.length; i++) {
    const children = data[i].children
    if (children && children.length > 0) {
      return findTreeData(children, id)
    }
  
    if (data[i].id === id) return [i, data]
  }
}

export {
  findTreeData
}