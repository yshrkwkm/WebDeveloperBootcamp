import './App.css'
import Chicken from './Chicken';
import Greeter from './Greeter';
import Die from './Die';
import ListPicker from './ListPicker';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import ColorList from './ColorList';
import Slots from './Slots';

function App() {
  return (
    <div>
      <Slots val1='🍒' val2='🍒' val3='🍒' />
      <Slots val1='🍒' val2='🍌' val3='🍒' />
      {/* <Heading color='magenta' text='ようこそ！' fontsize='20px' />
      <Heading color='teal' text='ほげほげ' fontsize='48px' />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />

      <ColorList colors={['red', 'pink', 'purple', 'teal']} />
      <ColorList colors={['olive', 'orangered', 'grey']} /> */}
      {/* <ListPicker values={[1, 2, 3]} />
      <ListPicker values={['a', 'b', 'c']} /> */}
      {/* <Greeter person="太郎" from="田中" />
      <Greeter />
      <Greeter person="三郎" from="鈴木" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
    </div>
  )
}

export default App
