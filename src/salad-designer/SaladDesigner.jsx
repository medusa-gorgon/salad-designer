import React, { useEffect, useState } from 'react';
import DataService from 'simple-localstorage-data-service-stub';
import Ingredient from './Ingredient';
import styled from 'styled-components/macro';
import AddButton from './AddButton';
import NewPopUp from './NewPopUp';
import Total from './Total';
import Header from './Header';

console.log('im here');

const sizes = [
  { size: 'large', targetCost: 3.5, targetWeight: 550 },
  { size: 'medium', targetCost: 2.5, targetWeight: 300 },
  { size: 'small', targetCost: 1.5, targetWeight: 150 },
];

const dataService = DataService();

const SaladDesigner = (props) => {
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [businessLogic, setBusinessLogic] = useState(null);
  const [salads, setSalads] = useState([]);
  const [popup, setPopup] = useState(false);
  const [added, setAdded] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);
  const [currentSize, setCurrentSize] = useState({ size: 'large', targetCost: 3.5, targetWeight: 550 });

  useEffect(() => {
    dataService.get('products').then((response) => {
      setProducts(response);
      console.log(response);
    });

    // [...]
  }, []);

  // Example of data file save.
  const onSaveClick = () => {
    dataService.saveData().then(() => console.log('saved!'));
  };

  // Example of data file upload.
  const handleFileInput = (event) => {
    dataService.uploadFileInput(event).then((r) => {
      event.target.value = null;
      console.log('done!', { r });
    });
  };

  return (
    <>
      <Container onClick={(e) => (e.target !== <NewPopUp /> && popup ? setPopup(false) : '')}>
        <Header
          totalCost={totalCost}
          totalWeight={totalWeight}
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
        <Total totalCost={totalCost} totalWeight={totalWeight} />
        {added !== null
          ? added.map((ing) => (
              <Ingredient
                targetCost={currentSize.targetCost}
                targetWeight={currentSize.targetWeight}
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

        {/* <label htmlFor='input'>Form</label>
      <input type='file' id='input' onInput={handleFileInput} /> */}
      </Container>
      {popup ? (
        <NewPopUp
          targetCost={currentSize.targetCost}
          targetWeight={currentSize.targetWeight}
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
  height: 100vh;
  padding: 15px;
`;
