import styled from 'styled-components/macro';
const Block = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
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

const NewPopUp = (props) => {
  return (
    <div>
      <Block>
        <div>Choose your ingredient:</div>
        <select name='' id=''>
          <option value='pasta'>Pasta</option>
        </select>
        <Button>Save</Button>
      </Block>
    </div>
  );
};

export default NewPopUp;
