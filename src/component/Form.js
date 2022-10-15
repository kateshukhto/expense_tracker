import { useForm } from 'react-hook-form'
import List from './List';
import api from '../store/api';

export default function Form() {
  const { register, handleSubmit, resetField } = useForm();
  const [addTransaction] = api.useAddTransactionMutation();

  const onSubmit = (data) => {
    if (!data) return;
    addTransaction(data).unwrap();
    resetField('name')
    resetField('amount')
  }
  return (
    <div className="form max-w-sm mx-auto- w-96">
      <h1 className="font-bold pb-4 text-xl">Расходы</h1>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input type="text" {...register('name')} placeholder="Аренда, ланч..." className="form-input" />
          </div>
          <select className="form-input" {...register('type')}>
            <option value="Телефон">Телефон</option>
            <option value="Дом">Дом</option>
            <option value="Здоровье">Здоровье</option>
            <option value="Покупки" default>Покупки</option>
            <option value="Продукты">Продукты</option>
            <option value="Кафе">Кафе</option>
            <option value="Другое">Другое</option>
          </select>
          <div className="input-group">
            <input type="text" {...register('amount')} placeholder="Сумма" className="form-input" />
          </div>
          <div className="submit-btn">
            <button type='submit' className="border py-2 text-white bg-indigo-500 w-full">Добавить</button>
          </div>
        </div>
      </form>
      <List />
    </div>
  )
}


