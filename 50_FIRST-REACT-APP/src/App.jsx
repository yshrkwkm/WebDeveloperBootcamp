import './App.css'
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';

const data = [
  {id: 1, item: '卵', quantity: 12, completed: false},
  {id: 2, item: '牛乳', quantity: 1, completed: true},
  {id: 3, item: '鶏むね肉', quantity: 4, completed: false},
  {id: 4, item: 'にんじん', quantity: 6, completed: true},
];

function App() {
  return (
    <div>
      <ShoppingList items={data} />
      {/* <Slots val1='🍒' val2='🍒' val3='🍒' />
      <Slots val1='🍒' val2='🍌' val3='🍒' />
      <Heading color='magenta' text='ようこそ！' fontsize='20px' />
      <Heading color='teal' text='ほげほげ' fontsize='48px' />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={['red', 'pink', 'purple', 'teal']} />
      <ColorList colors={['olive', 'orangered', 'grey']} />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={['a', 'b', 'c']} />
      <Greeter person="太郎" from="田中" />
      <Greeter />
      <Greeter person="三郎" from="鈴木" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
    </div>
  )
}

export default App
