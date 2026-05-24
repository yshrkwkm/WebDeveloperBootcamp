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
import Clicker from './Clicker';
import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';
import TogglerCounter from './TogglerCounter';
import ColorBox from './ColorBox';
import ColorBoxGrid from './ColorBoxGrid';

const data = [
  {id: 1, item: '卵', quantity: 12, completed: false},
  {id: 2, item: '牛乳', quantity: 1, completed: true},
  {id: 3, item: '鶏むね肉', quantity: 4, completed: false},
  {id: 4, item: 'にんじん', quantity: 6, completed: true},
];

const colors = [
  '#E91E63',
  '#9C27B0',
  '#673AB7',
  '#3F51B5',
  '#2196F3',
  '#03A9F4',
  '#00BCD4',
  '#009688',
  '#4CAF50',
  '#8BC34A',
  '#CDDC39',
  '#FFEB3B',
  '#FFC107',
  '#FF9800',
  '#FF5722',
];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors}/>
      {/* <ColorBox colors={colors}/> */}
      {/* <TogglerCounter /> */}
      {/* <Counter /> */}
      {/* <Clicler message='やっほー' buttonText='クリックしてください' /> */}
      {/* <Clicker message='クリックしないでよ！' buttonText='クリックしないで！！' /> */}
      {/* <ShoppingList items={data} /> */}
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
