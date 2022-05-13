import { useRef, useState } from 'react';
import styled from 'styled-components/macro';

const Block = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr 1fr;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  font-size: 25px;
  border: 2px solid #aaaaaa;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: 2px solid #aaaaaa;
  border-radius: 5px;
  font-size: 25px;
  background-color: #c1c1c1;
`;
const Form = styled.form`
  width: 45%;
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  justify-content: space-between;
`;
const Input = styled.input`
  font-size: 25px;
  border-radius: 5px;
  width: 100px;
  text-align: right;
`;

const Ingredient = (props) => {
  const [count, setCount] = useState(1);

  let servingSize = props.g * count;
  let servingPrice = Math.round(props.price * count * 100) / 100;

  const inputEl = useRef(null);
  const changeServing = (action) => {
    if (action === 'increase') {
      setCount(Number(count) + 1);
      inputEl.current.value = Number(inputEl.current.value) + 1;
      props.setTotalWeight(props.totalWeight + props.g);
      props.setTotalCost(Math.round((props.totalCost + props.price) * 100) / 100);
    } else if (action === 'decrease') {
      inputEl.current.value = Number(inputEl.current.value) - 1;
      setCount(count - 1);
      props.setTotalWeight(props.totalWeight - props.g);
      props.setTotalCost(Math.round((props.totalCost - props.price) * 100) / 100);
    }
    if (inputEl.current.value === 0) {
      console.log(props.added.indexOf(props.name));
      console.log('count 0');
      // props.setAdded(props.added.splice(props.added.indexOf(props.name), 1));
    }
  };

  return (
    <div>
      <Block>
        <span>{props.name}</span>
        <Form>
          <label servings=''>servings:</label>
          <Input ref={inputEl} type='text' id='servings' defaultValue={1}></Input>
          <Button
            onClick={(e) => {
              e.preventDefault();
              changeServing('decrease');
            }}
          >
            -
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              changeServing('increase');
            }}
          >
            +
          </Button>
        </Form>
        <span>{servingSize + 'g'}</span>
        <span>{servingPrice + '€'}</span>
      </Block>
    </div>
  );
};

export default Ingredient;
