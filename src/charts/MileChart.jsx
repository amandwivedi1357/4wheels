
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { mileStatistics } from '../components/admin/dummy'

export default function MileChart() {
  return (
    <ResponsiveContainer width={'100%'} >
    <BarChart data={mileStatistics} >
      <XAxis dataKey={'name'} stroke="#2884ff"/>
      <Bar
      barSize={30}
      dataKey={'mileStats'} stroke="#2884ff" fill="#2884ff"/>

      <Tooltip wrapperClassName="tooltip_style" cursor={false}/>
    </BarChart>
  </ResponsiveContainer>
  )
}
