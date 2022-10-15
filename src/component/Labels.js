import api from '../store/api'
import { getLabels } from '../helpers/helpers';

export default function Labels() {

  const { data, isFetching, isError } = api.useGetLabelsQuery()

  if (isFetching || isError) return;

  return (
    <>
      {getLabels(data, 'type').map((item, i) => <LabelComponent key={i} {...item} />)}
    </>
  )
}


function LabelComponent({ type, color, percent }) {
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div className="w-2 h2 rounded py-3" style={{ background: color }}></div>
        <h3 className="text-md">{type}</h3>
      </div>
      <h3 className="font-bold">{Math.round(percent)}%</h3>
    </div>
  )
}
