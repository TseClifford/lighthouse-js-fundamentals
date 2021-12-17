const judgeVegetable = function (vegetables, metric) {
  let rating = 0
  let winner = ''
  for (let entry of vegetables) {
    if (entry[metric] > rating) {
      rating = entry[metric]
      winner = entry.submitter
    }
  }
  return winner
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))