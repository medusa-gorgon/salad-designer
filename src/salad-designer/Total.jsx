import styled from 'styled-components/macro';

const Total = ({ totalWeight, totalCost }) => {
  return (
    <div>
      <Block>
        <span>total cost: {totalCost}€ </span>
        <span>total weight: {totalWeight}g </span>
      </Block>
    </div>
  );
};

export default Total;

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px;
`;
