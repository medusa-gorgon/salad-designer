import { useState } from 'react';
import styled from 'styled-components/macro';

const Header = ({ saladTypes, setCurrentSize, currentSize }) => {
  const [expanded, setExpanded] = useState(false);
  const changeSize = (e) => {
    const val = e.target.value;
    const size = saladTypes.find((sz) => sz.size === val);
    setCurrentSize(size);
  };

  return (
    <div>
      <Block>
        <h1 className='title'>Salad</h1>

        {currentSize && (
          <Select
            aria-expanded={expanded}
            onClick={() => {
              setExpanded(!expanded);
            }}
            name=''
            id=''
            onChange={changeSize}
            value={currentSize.size}
          >
            {saladTypes !== null &&
              saladTypes.map((size) => (
                <option key={size.size} value={size.size}>
                  {size.size}
                </option>
              ))}
          </Select>
        )}
      </Block>
      {currentSize ? (
        <Target>Target cost / weight: {`${currentSize.targetCost.toFixed(2)}€ / ${currentSize.targetWeight}g`}</Target>
      ) : (
        <Target>Target cost / weight: {`0€ / 0g`}</Target>
      )}
    </div>
  );
};

export default Header;

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.563rem;
  border-bottom: 1px solid var(--border);
  .title {
    color: var(--buttonBg);
  }
`;
const Select = styled.select`
  padding: 5px;
  border: 2px solid var(--border);
  border-radius: 5px;
  font-size: 1.25rem;
  background-color: var(--accent);
  width: fit-content;
  color: var(--primary);
`;
const Target = styled.div`
  font-size: 1.1rem;
`;
