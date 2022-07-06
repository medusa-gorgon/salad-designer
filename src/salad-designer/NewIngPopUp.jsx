import { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components/macro';

const NewIngPopUp = ({ products, setPopup, setAdded, added, totalCost, totalWeight, setTotalCost, setTotalWeight }) => {
  const selectEl = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const saveIng = (e) => {
    const currentProduct = products.find((pr) => pr.id.toString() === selectEl.current.value.toString());
    e.preventDefault();

    if (!added.includes(currentProduct)) {
      setAdded([...added, currentProduct]);

      setTotalCost(totalCost + Number(currentProduct.costPerServing));
      setTotalWeight(totalWeight + Number(currentProduct.weightPerServing));
    }
    setPopup(false);
  };

  return (
    <div>
      <Block>
        <CloseButton aria-label='close popup' onClick={() => setPopup(false)}>
          ×
        </CloseButton>
        <div>Choose your ingredient:</div>
        <select
          aria-expanded={expanded}
          onClick={() => {
            setExpanded(!expanded);
          }}
          className='select'
          name=''
          id=''
          ref={selectEl}
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <Button aria-label='save ingredient' onClick={saveIng}>
          Save
        </Button>
      </Block>
    </div>
  );
};

export default NewIngPopUp;

const Block = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 310px;
  width: 35%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg);
  justify-content: space-around;
  padding: 20px;
  border-radius: 10px;
  font-size: 1.563rem;
  border: 2px solid var(--border);
  color: var(--primary);

  .select {
    color: var(--primary);
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: 2px solid var(--border);
  border-radius: 5px;
  font-size: 1.563rem;
  background-color: var(--accent);
  width: 100%;
  color: var(--primary);
  transition: all 0.3s;
  &:hover {
    color: var(--bg);
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -5px;
  line-height: 1;
  padding: 10px;
  font-size: 1.875rem;
  align-self: end;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: var(--accent);
  }
`;
