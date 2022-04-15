import { PortfolioWrapper } from '../PortfolioWrapper/PortfolioWrapper';
import { PortfolioTable } from '../PortfolioTable/PortfolioTable';
import { PortfolioTableHead } from '../PortfolioTableHead/PortfolioTableHead';
import { PortfolioTableBody } from '../PortfolioTableBody/PortfolioTableBody';
import { Content } from '../Content/Content';
import { Chart } from '../../../core/Chart/Chart';

export const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <Content>
        <Chart />
        <PortfolioTable>
          <PortfolioTableHead />
          <PortfolioTableBody />
        </PortfolioTable>
      </Content>
    </PortfolioWrapper>
  );
};
