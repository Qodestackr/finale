export const colorScale = [
  {
    scale: 'Best Route',
    color: '#720000'
  },
  {
    scale: 'Second Option',
    color: '#f44336'
  },
  {
    scale: 'Third Option',
    color: '#ff9800'
  },
  {
    scale: 'Fourth Option',
    color: '#ffeb3b'
  },
  {
    scale: 'Fifth Option',
    color: '#4caf50'
  },
  {
    scale: 'Other',
    color: '#33c9dc'
  },
]

export const getMagnitudeScaleColor = (magnitude: number) => {
  if (magnitude >= 8.0) {
    return '#720000'
  }
  if (magnitude >= 7.0) {
    return '#f44336'
  }
  if (magnitude >= 6.1) {
    return '#ff9800'
  }
  if (magnitude >= 5.5) {
    return '#ffeb3b'
  }
  if (magnitude >= 2.5) {
    return '#4caf50'
  }

  return '#33c9dc'
}

// cyan - #33c9dc
// green - #4caf50
// yellow - #ffeb3b
// orange - #ff9800
// red - #f44336
// darkred - #720000