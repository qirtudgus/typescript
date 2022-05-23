import React, {useReducer} from 'react';

//리듀서의 action type 선언
type Action = { type:'INCREASE'} | {type:'DECREASE'} |{type:'ALERT'};

type Color = 'red' | 'orange' | 'yellow';

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

type Action2 =
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: 'TOGGLE_GOOD' };
  function reducer2(state: State, action: Action2): State {
    switch (action.type) {
      case 'SET_COUNT':
        return {
          ...state,
          count: action.count // count가 자동완성되며, number 타입인걸 알 수 있습니다.
        };
      case 'SET_TEXT':
        return {
          ...state,
          text: action.text // text가 자동완성되며, string 타입인걸 알 수 있습니다.
        };
      case 'SET_COLOR':
        return {
          ...state,
          color: action.color // color 가 자동완성되며 color 가 Color 타입인걸 알 수 있습니다.
        };
      case 'TOGGLE_GOOD':
        return {
          ...state,
          isGood: !state.isGood
        };
      default:
        throw new Error('Unhandled action');
    }
  }

//리듀서 함수 선언
function reducer(state:number, action:Action):(number|any) {

    switch (action.type){
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        case 'ALERT' :
            {
                alert(`${state}입니다.`);
            return state + 10;
        }
        default :
            throw new Error ('unhandled action');
    }
}


const Reducer = () => {
    const [state, dispatch] = useReducer(reducer,0)
    const [state2, dispatch2] = useReducer(reducer2, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
      });

    const onIncrease = () => {dispatch({type:'INCREASE'})}
    const onDecrease = () => {dispatch({type:'DECREASE'})}
    const onAlert = () => {dispatch({type:'ALERT'})}


    const setCount = () => dispatch2({ type: 'SET_COUNT', count: 5 }); // count 를 넣지 않으면 에러발생
    const setText = () => dispatch2({ type: 'SET_TEXT', text: 'bye' }); // text 를 넣지 않으면 에러 발생
    const setColor = () => dispatch2({ type: 'SET_COLOR', color: 'orange' }); // orange 를 넣지 않으면 에러 발생
    const toggleGood = () => dispatch2({ type: 'TOGGLE_GOOD' });


    return(
        <>
        <button onClick={onIncrease}>증가</button>
        <button onClick={onDecrease}>감소</button>
        <button onClick={onAlert}>10증가 알림창</button>
        <p>{state}</p>
        <div>
      <p>
        <code>count: </code> {state2.count}
      </p>
      <p>
        <code>text: </code> {state2.text}
      </p>
      <p>
        <code>color: </code> {state2.color}
      </p>
      <p>
        <code>isGood: </code> {state2.isGood ? 'true' : 'false'}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
        </>
    )
}

export default Reducer;