import React, { ForwardedRef, forwardRef, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  type?: 'button';
}
type Ref = HTMLButtonElement;

const Forward2 = forwardRef<Ref, Props>((props, ref) => {
  return (
    <button ref={ref} type={props.type}>
      하하하
    </button>
  );
});

const Forward = forwardRef(
  ({
    ref,
    children,
    text,
  }: {
    children: JSX.Element;
    ref: ForwardedRef<HTMLInputElement>;
    text: string;
  }) => {
    return (
      <>
        <input
          ref={ref}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
          onClick={(e: React.MouseEvent<HTMLInputElement>) => {}}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {}}
          onWheel={(e: React.WheelEvent<HTMLInputElement>) => {}}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => {}}
          onDragEnd={(e: React.DragEvent<HTMLInputElement>) => {}}
        ></input>
      </>
    );
  },
);

export default Forward;
