import { useRef } from 'react';
import styled from 'styled-components/macro';

const Block = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 250px;
  width: 35%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  justify-content: space-around;
  padding: 20px;
  border-radius: 10px;
  font-size: 25px;
  border: 2px solid #aaaaaa;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: 2px solid #aaaaaa;
  border-radius: 5px;
  font-size: 25px;
  background-color: #f2994a;
  width: 100%;
  &:hover {
    color: white;
  }
`;

const NewPopUp = ({
  products,
  setPopup,
  setAdded,
  added,
  totalCost,
  totalWeight,
  setTotalCost,
  setTotalWeight,
  targetCost,
  targetWeight,
}) => {
  const selectEl = useRef(null);

  const saveIng = (e) => {
    const currentProduct = products.find((pr) => pr.id.toString() === selectEl.current.value.toString());
    e.preventDefault();
    if (
      !(
        totalWeight + currentProduct.weightPerServing > targetWeight ||
        totalCost + currentProduct.costPerServing > targetCost
      )
    ) {
      if (!added.includes(currentProduct)) {
        setAdded([...added, currentProduct]);
      }
      setTotalCost(Math.round((totalCost + Number(currentProduct.costPerServing)) * 100) / 100);

      setTotalWeight(totalWeight + Number(currentProduct.weightPerServing));
    }
    setPopup(false);
  };

  return (
    <div>
      <Block>
        <div>Choose your ingredient:</div>
        <select name='' id='' ref={selectEl}>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
        <Button onClick={saveIng}>Save</Button>
      </Block>
    </div>
  );
};

export default NewPopUp;
