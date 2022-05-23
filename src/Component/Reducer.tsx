import React, {useReducer} from 'react';

//리듀서의 action type 선언
type Action = { type:'INCREASE'} | {type:'DECREASE'} |{type:'ALERT'};

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
    const onIncrease = () => {dispatch({type:'INCREASE'})}
    const onDecrease = () => {dispatch({type:'DECREASE'})}
    const onAlert = () => {dispatch({type:'ALERT'})}



    return(
        <>
        <button onClick={onIncrease}>증가</button>
        <button onClick={onDecrease}>감소</button>
        <button onClick={onAlert}>10증가 알림창</button>
        <p>{state}</p>
        </>
    )
}

export default Reducer;