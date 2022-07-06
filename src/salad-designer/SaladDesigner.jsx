import React, { useState } from 'react';
import Ingredient from './Ingredient';
import styled from 'styled-components/macro';
import AddButton from './AddButton';
import NewIngPopUp from './NewIngPopUp';
import Total from './Total';
import Header from './Header';
import data from '../data.json';

const SaladDesigner = (props) => {
  // eslint-disable-next-line
  const [products, setProducts] = useState(data.products); // eslint-disable-next-line
  const [businessLogic, setBusinessLogic] = useState(data.businessLogic.saladTypes);
  const [popup, setPopup] = useState(false);
  const [added, setAdded] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const [currentSize, setCurrentSize] = useState(data.businessLogic.saladTypes[2]);

  return (
    <>
      <Container onClick={(e) => (e.target !== <NewIngPopUp /> && popup ? setPopup(false) : '')}>
        <Header saladTypes={businessLogic} currentSize={currentSize} setCurrentSize={setCurrentSize} />
        <Total
          totalCost={totalCost}
          totalWeight={totalWeight}
          targetCost={currentSize && currentSize.targetCost}
          targetWeight={currentSize && currentSize.targetWeight}
        />
        {added !== null
          ? added.map((ing) => (
              <Ingredient
                totalCost={totalCost}
                totalWeight={totalWeight}
                setTotalCost={setTotalCost}
                setTotalWeight={setTotalWeight}
                key={ing.id}
                id={ing.id}
                name={ing.name}
                g={ing.weightPerServing}
                price={ing.costPerServing}
                added={added}
                setAdded={setAdded}
              />
            ))
          : ''}
        <AddButton setPopup={setPopup} />
      </Container>
      {popup ? (
        <NewIngPopUp
          totalCost={totalCost}
          totalWeight={totalWeight}
          setTotalCost={setTotalCost}
          setTotalWeight={setTotalWeight}
          products={products}
          setPopup={setPopup}
          added={added}
          setAdded={setAdded}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default SaladDesigner;

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 15px;
`;
