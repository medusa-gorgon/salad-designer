import styled from 'styled-components/macro';

const Header = ({ saladTypes, setCurrentSize, currentSize, totalCost, totalWeight }) => {
  const changeSize = (e) => {
    const val = e.target.value;
    const size = Object.keys(saladTypes).find((sz) => sz === val);
    const sizeObj = saladTypes[size];

    if (totalWeight <= sizeObj.targetWeight && totalCost <= sizeObj.targetCost) {
      setCurrentSize(sizeObj);
    }
  };

  return (
    <div>
      <Block>
        <h1>Salad</h1>
        <Select name='' id='' onChange={changeSize}>
          {saladTypes !== null &&
            Object.keys(saladTypes).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
        </Select>
      </Block>
      {currentSize ? (
        <div>Target cost / weight: {`${currentSize.targetCost}€ / ${currentSize.targetWeight}g`}</div>
      ) : (
        <div>Target cost / weight: {`0€ / 0g`}</div>
      )}
    </div>
  );
};

export default Header;

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
