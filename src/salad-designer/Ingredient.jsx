import styled from 'styled-components/macro';

const Block = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  justify-content: space-between;
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
  return (
    <div>
      <Block>
        <span>{props.name}</span>
        <Form>
          <label servings=''>servings:</label>
          <Input type='text' id='servings' defaultValue='1'></Input>
          <Button>-</Button>
          <Button>+</Button>
        </Form>
        <span>{props.g + 'g'}</span>
        <span>{props.price + '€'}</span>
      </Block>
    </div>
  );
};

export default Ingredient;
