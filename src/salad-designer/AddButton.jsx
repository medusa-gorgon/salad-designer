import styled from 'styled-components/macro';

const AddButton = ({ setPopup }) => {
  return (
    <div>
      <Button
        aria-label='open ingredient list popup'
        onClick={() => {
          setPopup(true);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default AddButton;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: 2px solid var(--border);
  border-radius: 5px;
  font-size: 1.563rem;
  background-color: var(--fieldBg);
  width: 100%;
  color: var(--primary);
  transition: all 0.3s;
  &:hover {
    color: var(--border);
  }
`;
