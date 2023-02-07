import { useEffect, useState } from 'react';

export default function Test() {
  const [init, setInit] = useState('기본값');

  const [lazyInit, setLazyInit] = useState(() => {
    return 5 + 10 + '하하';
  });

  const genericFunc = <T extends {}>(text: T): T => {
    console.log(typeof text);
    return text;
  };

  interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
  }

  interface 함수인터페이스 {
    (a: string, b: string): boolean;
  }

  const 함수: 함수인터페이스 = (a, b) => {
    console.log(a.length);
    return false;
  };

  // ShoppingItem에 있는 키중 한가지가 T가 된다 -> 함수는 'name' | 'price' | 'stock'만 쓸 수 있다.
  function getShoppingItemOption<T extends keyof ShoppingItem>(item: T): T {
    return item;
  }

  useEffect(() => {
    함수('11', 'ㅋ');
    genericFunc('zzz');
    getShoppingItemOption('name');
    setInit('uesEffect 변경 값');
  }, []);

  return (
    <>
      <div>{init}</div>
      <div>{lazyInit}</div>
    </>
  );
}
