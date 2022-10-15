import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import Labels from './Labels'
import api from '../store/api'
import { chartData, getTotal } from '../helpers/helpers'
import Error from './Error'
import Loader from './Loader/Loader'


Chart.register(ArcElement);


export default function Graph() {

  const { data, isFetching, isError } = api.useGetLabelsQuery()

  if (isError) {
    return <Error />
  }

  if (isFetching) {
    return <Loader />
  }

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          <Doughnut {...chartData(data)}></Doughnut>
          <h4 className="mb-4 font-bold title">
            Всего
            <span className="block text-3xl text-red-400">{getTotal(data).toFixed(2)} BYN</span>
          </h4>
        </div>

        <div className="flex flex-col py-10 gap-4">
          <Labels />
        </div>
      </div>
    </div>
  )
}
