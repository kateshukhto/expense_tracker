import 'boxicons'
import api from "../store/api"

const colors = {
  "Телефон": "#EB2E4C",
  "Дом": "#EDA712",
  "Здоровье": "#14A663",
  "Покупки": "#1675F0",
  "Продукты": "#6366F1",
  "Кафе": "#BA8C2B",
  "Другое": "#2B2E2F"
}


export default function List() {
  const { data, isFetching, isError } = api.useGetTransactionsQuery()
  if (isFetching || isError) return;

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">История</h1>
      {
        data.map((el) => <Transaction key={el._id} {...el} />)
      }
    </div>
  )
}

function Transaction({ name, type, amount, _id }) {

  const [deleteTransaction] = api.useDeleteTransactionMutation();

  const handleDelete = (e) => {
    deleteTransaction({ _id: e.target.dataset.id })
  }

  return (
    <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{ borderRight: `8px solid ${colors[type]}` }}>
      <button className="px-3" onClick={handleDelete}>
        <box-icon data-id={_id} size="18px" color={colors[type]} name="trash"></box-icon>
      </button>
      <span className="block w-full">{name}</span>
      <span className="block w-full">{amount} BYN</span>
    </div>
  )
}

