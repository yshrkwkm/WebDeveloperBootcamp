import './App.css'
import PropertyList from './PropertyList';

const properties = [
  { id: 202001, name: '砂丘の離れ', rating: 4.9, price: 18000},
  { id: 202002, name: '霧立つ山の庵', rating: 4.8, price: 30000},
  { id: 202003, name: '月見の庵', rating: 4.75, price: 36000},
  { id: 202004, name: '杉の木の隠れ家', rating: 4.9, price: 14400},
  { id: 202005, name: '波音の宿', rating: 4.7, price: 16800},
  { id: 202006, name: '炭焼き小屋', rating: 4.69, price: 11500},
];

function App() {
  return (
    <div>
      <PropertyList properties={properties} />
    </div>
  );
}

export default App
