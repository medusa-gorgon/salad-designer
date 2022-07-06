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
        <div>{props.name}</div>
        <div>
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
        </div>
        <div className='serving'>
          <div>{servingSize + 'g'}</div>
          <div>{servingPrice.toFixed(2) + '€'}</div>
        </div>

        <CloseButton aria-label='remove ingredient' onClick={deleteIngredient}>
          ×
        </CloseButton>
      </Block>
    </div>
  );
};

export default Ingredient;

const Block = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  align-items: center;
  justify-items: center;
  background-color: var(--fieldBg);
  padding: 15px;
  margin-bottom: 5px;
  border-radius: 10px;
  font-size: 25px;
  border: 2px solid var(--border);
  & div:not(:last-of-type) {
    padding-right: 10px;
  }
  .serving {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  @media (max-width: 48rem) {
    display: flex;
    flex-direction: column;
    & div:not(:last-of-type) {
      padding: 0 0 10px 0;
    }
  }
`;
const Button = styled.button`
  width: 50px;
  height: 50px;
  border: 2px solid var(--border);
  border-radius: 5px;
  font-size: 1.563rem;
  background-color: var(--buttonBg);
  color: var(--primary);
  margin-right: 10px;
  transition: all 0.3s;
  &:hover {
    background-color: var(--accent);
  }
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: var(--fieldBg);
  justify-content: space-between;
`;
const Input = styled.input`
  font-size: 1.563rem;
  border-radius: 5px;
  width: 60px;
  text-align: right;
  color: var(--primary);
  background-color: var(--bg);
  border: 1px solid var(--border);
  margin: 0 10px;
`;
const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -5px;
  line-height: 1;
  padding: 10px;
  font-size: 1.875rem;
  align-self: end;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    color: var(--accent);
  }
`;
