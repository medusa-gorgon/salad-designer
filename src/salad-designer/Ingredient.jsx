import { useRef, useState } from 'react';
import styled from 'styled-components/macro';

const Ingredient = (props) => {
  const [servingCount, setServingCount] = useState(1);

  let servingSize = props.g * servingCount;
  let servingPrice = props.price * servingCount;

  const countInputEl = useRef(null);

  const decreaseBy1 = () => {
    if (countInputEl.current.value > 1) {
      countInputEl.current.value = Number(countInputEl.current.value) - 1;
      setServingCount(servingCount - 1);

      props.setTotalWeight(props.totalWeight - props.g);
      props.setTotalCost(props.totalCost - props.price);
    }
  };

  const increaseBy1 = () => {
    setServingCount(Number(servingCount) + 1);
    countInputEl.current.value = Number(countInputEl.current.value) + 1;

    props.setTotalWeight(props.totalWeight + props.g);
    props.setTotalCost(props.totalCost + props.price);
  };

  const deleteIngredient = () => {
    props.setAdded(props.added.filter((ing) => ing.id !== props.id));
    props.setTotalWeight(props.totalWeight - servingSize);
    props.setTotalCost(props.totalCost - servingPrice);
  };

  return (
    <div>
      <Block>
        <span>{props.name}</span>
        <Form>
          <label htmlFor='servings'>servings:</label>
          <Input ref={countInputEl} type='text' id='servings' defaultValue={1} readOnly></Input>
          <Button
            onClick={(e) => {
              e.preventDefault();
              decreaseBy1();
            }}
          >
            -
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              increaseBy1();
            }}
          >
            +
          </Button>
        </Form>
        <span>{servingSize + 'g'}</span>
        <span>{servingPrice.toFixed(2) + '€'}</span>
        <CloseButton onClick={deleteIngredient}>×</CloseButton>
      </Block>
    </div>
  );
};

export default Ingredient;

const Block = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 3fr 1fr 1fr;
  align-items: center;
  background-color: #f2f2f2;
  padding: 20px;
  margin-bottom: 5px;
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
const CloseButton = styled.span`
  position: absolute;
  top: -10px;
  right: -5px;
  line-height: 1;
  padding: 10px;
  font-size: 30px;
  align-self: end;
  color: black;
  cursor: pointer;
  &:hover {
    color: #f2994a;
  }
`;
