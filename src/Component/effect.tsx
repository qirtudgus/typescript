import React, { useState,useEffect} from 'react';
interface interfaceStr { id:string}

const Effect = () => {
    const [state, setState] = useState<number>(1)
    const [str, setStr] = useState<interfaceStr>({id:''})

    //useEffect 자체가 값을 리턴하는 경우는 없기때문에 js방식과 똑같이 사용하면 된다.
    useEffect(()=>{
        console.log(`${state}`)
    },[state])

    const count = () => {
        setState(state + 1)
    }

    // input 이벤트는 각 이벤트에 커서를 대서 타입을 참고한다.
    const inputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setStr({...str,id:e.target.value})
    }

    return(
        <>
        <button onClick={count}>증가</button>
        <p>{state}</p>
        <input  name="id" onChange={inputChange}></input>
        <p>{str.id}</p>
        </>
    )
}

export default Effect;