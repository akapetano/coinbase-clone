import { PortfolioWrapper } from '../PortfolioWrapper/PortfolioWrapper';
import { PortfolioTable } from '../PortfolioTable/PortfolioTable';
import { PortfolioTableHead } from '../PortfolioTableHead/PortfolioTableHead';
import { PortfolioTableBody } from '../PortfolioTableBody/PortfolioTableBody';

export const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <PortfolioTable>
        <PortfolioTableHead />
        <PortfolioTableBody />
      </PortfolioTable>
    </PortfolioWrapper>
  );
};
