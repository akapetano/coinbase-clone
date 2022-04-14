import { PortfolioWrapper } from '../PortfolioWrapper/PortfolioWrapper';
import { PortfolioTable } from '../PortfolioTable/PortfolioTable';
import { PortfolioTableHead } from '../PortfolioTableHead/PortfolioTableHead';
import { PortfolioTableBody } from '../PortfolioTableBody/PortfolioTableBody';
import { BalanceChart } from '../../../core/BalanceChart/BalanceChart';
import { chartData, chartOptions } from '../../../../static/chart';

export const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <BalanceChart data={chartData} options={chartOptions} />
      <PortfolioTable>
        <PortfolioTableHead />
        <PortfolioTableBody />
      </PortfolioTable>
    </PortfolioWrapper>
  );
};
