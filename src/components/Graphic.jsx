import { VictoryPie, VictoryContainer } from 'victory'
import { totals } from '../tools/totals'

export function Graphic () {
  const { balance, expenses } = totals()

  if (balance === 0 && expenses === 0) {
    return (
      <VictoryPie data={[{ x: '', y: 1 }]} colorScale={['#198754']} />
    )
  }

  return (
    <VictoryPie
      data={[
        { x: 'income', y: balance },
        { x: 'expenses', y: expenses }
      ]}
      colorScale={['#198754', '#dc3545']}
      style={{
        labels: {
          fill: '#fff3cd',
          padding: -80
        }
      }}
      animate={{
        duration: 2000
      }}
      containerComponent={<VictoryContainer responsive />}
    />

  )
}
