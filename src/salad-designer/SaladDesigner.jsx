import React, { useEffect, useState } from 'react';
import DataService from 'simple-localstorage-data-service-stub';
import Ingredient from './Ingredient';
import styled from 'styled-components/macro';
import AddButton from './AddButton';
import NewPopUp from './NewPopUp';

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
        <Ingredient name='Pasta' g='100' price='0,2' />
        <AddButton />
        <NewPopUp />
        {/* <label htmlFor='input'>Form</label>
      <input type='file' id='input' onInput={handleFileInput} /> */}
      </Container>
    </>
  );
};

export default SaladDesigner;
