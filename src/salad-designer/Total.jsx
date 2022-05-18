import styled from 'styled-components/macro';

const Total = ({ totalWeight, totalCost, targetCost, targetWeight }) => {
  return (
    <div>
      <Block>
        <div>
          <span className={totalCost > targetCost ? 'above-target' : ''}>total cost: {totalCost.toFixed(2)}€ </span>
          {totalCost > targetCost && (
            <span className='above-target'> ({(totalCost - targetCost).toFixed(2)}€ over target) </span>
          )}
        </div>
        <div>
          <span className={totalWeight > targetWeight ? 'above-target' : ''}>total weight: {totalWeight}g </span>
          {totalWeight > targetWeight && (
            <span className='above-target'> ({totalWeight - targetWeight}g over target) </span>
          )}
        </div>
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

  .above-target {
    color: red;
  }
`;
