import { FC } from "react";

type CardProps = {
  name: string;
  age?: string; //? optional
};

const Card: FC<CardProps> = ({ name, age = 18 }) => {
  //default props
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Card;

/*
function Card({ name, age }: CardProps) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default Card;
*/
