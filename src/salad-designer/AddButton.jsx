import styled from 'styled-components/macro';

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: 2px solid #aaaaaa;
  border-radius: 5px;
  font-size: 25px;
  background-color: #f2f2f2;
  width: 100%;
  &:hover {
    color: #aaaaaa;
  }
`;

const AddButton = ({ popup, setPopup }) => {
  return (
    <div>
      <Button
        onClick={() => {
          setPopup(!popup);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default AddButton;
