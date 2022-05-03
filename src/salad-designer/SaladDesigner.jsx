import React, {useEffect, useState} from "react";
import DataService from "simple-localstorage-data-service-stub";

console.log("im here")

const dataService = DataService({flush: true});

const SaladDesigner = (props) => {
  console.log("initialized");
  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [businessLogic, setBusinessLogic] = useState(null);
  const [salads, setSalads] = useState([]);

  useEffect(() => {
    console.log('retrieving data...?')
    dataService.get('products').then(response => setProducts(response))
  }, [])

  const onSaveClick = () => {
    dataService.saveData().then(() => console.log('saved!'));
  }

  const handleFileInput = (event) => {
    dataService.uploadFileInput(event).then(r => {
      event.target.value = null;
      console.log("done!", {r})
    })
  }

  return <>
    <label htmlFor="input">Form</label>
    <input type="file" id="input" onInput={handleFileInput}/>
  </>
}

export default SaladDesigner;
