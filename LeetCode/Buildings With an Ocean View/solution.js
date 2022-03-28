const findBuildings = (heights) => {
  let tallestBuilding = heights[heights.length - 1]
  let buildingWithView = [heights.length - 1]

  for (let i = heights.length - 2; i >= 0; i--) {
    if (heights[i] > tallestBuilding) {
      tallestBuilding = heights[i]
      // buildingWithView = [i, ...buildingWithView] too slow since you are iterating over array to copy it over
      buildingWithView.push(i)
    }
  }
  return buildingWithView.reverse()
}

console.log(findBuildings([4, 2, 3, 1]))
console.log(findBuildings([4, 3, 2, 1]))
console.log(findBuildings([1, 3, 2, 4]))
