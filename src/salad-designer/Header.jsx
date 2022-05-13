import { useState } from 'react';
import styled from 'styled-components/macro';

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  font-size: 25px;
  border-bottom: 1px solid #aaaaaa;
`;
const Select = styled.select`
  padding: 5px;
  border: 2px solid #aaaaaa;
  border-radius: 5px;
  font-size: 20px;
  background-color: #f2994a;
  width: fit-content;
`;

const Header = (props) => {
  const sizes = [
    { size: 'large', targetCost: 3.5, targetWeight: 550 },
    { size: 'medium', targetCost: 2.5, targetWeight: 300 },
    { size: 'small', targetCost: 1.5, targetWeight: 150 },
  ];

  const [currentSize, setCurrentSize] = useState({ size: 'large', targetCost: 3.5, targetWeight: 550 });

  const handleChange = (e) => {
    const val = e.target.value;

    setCurrentSize(sizes.find((sz) => sz.size === val));
  };

  return (
    <div>
      <Block>
        <h1>Salad</h1>
        <Select name='' id='' onChange={handleChange}>
          {sizes.map((size) => (
            <option key={size.size} value={size.size}>
              {size.size}
            </option>
          ))}
        </Select>
      </Block>
      <div>Target cost / weight: {`${currentSize.targetCost}€ / ${currentSize.targetWeight}g`}</div>
    </div>
  );
};

export default Header;
