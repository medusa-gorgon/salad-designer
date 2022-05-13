import React, { useEffect, useState } from 'react';
import DataService from 'simple-localstorage-data-service-stub';
import Ingredient from './Ingredient';
import styled from 'styled-components/macro';
import AddButton from './AddButton';
import NewPopUp from './NewPopUp';
import Total from './Total';

console.log('im here');

const dataService = DataService();

const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  padding: 15px;
`;
const SaladDesigner = (props) => {
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [businessLogic, setBusinessLogic] = useState(null);
  const [salads, setSalads] = useState([]);
  const [popup, setPopup] = useState(false);
  const [added, setAdded] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

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
      <Container>
        <Total totalCost={totalCost} totalWeight={totalWeight} />
        {added !== null
          ? added.map((ing) => (
              <Ingredient
                totalCost={totalCost}
                totalWeight={totalWeight}
                setTotalCost={setTotalCost}
                setTotalWeight={setTotalWeight}
                key={ing.id}
                name={ing.name}
                g={ing.weightPerServing}
                price={ing.costPerServing}
                added={added}
                setAdded={setAdded}
              />
            ))
          : ''}
        <AddButton popup={popup} setPopup={setPopup} />
        {popup ? (
          <NewPopUp
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
        {/* <label htmlFor='input'>Form</label>
      <input type='file' id='input' onInput={handleFileInput} /> */}
      </Container>
    </>
  );
};

export default SaladDesigner;
