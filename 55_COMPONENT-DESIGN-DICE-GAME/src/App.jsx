import BoxGrid from "./BoxGrid";
// import Dice from "./Dice";
// import LuckyN from "./luckyN";
// import { sum } from './utils';

// function lessThan4(dice) {
//   return sum(dice) < 4;
// }

// function allSameValue(dice) {
//   return dice.every((v) => v === dice[0])
// }

function App() {
  return (
    <>
      <BoxGrid />
      {/* <LuckyN title='4より小さくしよう' numDice={2} winCheck={lessThan4}/>
      <LuckyN title='全部同じ値にしよう' numDice={2} winCheck={allSameValue}/> */}
    </>
  );
}

export default App
