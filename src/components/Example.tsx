import * as React from "react";
//look up the documentation on this 👆
export interface ExampleProps {
  message: string;
}

// const Example = ({ message }: ExampleProps) => {
//   return <h1>{message}</h1>;
// };

// const Example = ({ message }: { message: string }) => {
//   return <h1>{message}</h1>;
// };

export const Example: React.FC<ExampleProps> = ({ message }) => {
  return <h1>{message}</h1>;
};
