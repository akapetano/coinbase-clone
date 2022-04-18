import { PortfolioWrapper } from '../PortfolioWrapper/PortfolioWrapper';
import { PortfolioTable } from '../PortfolioTable/PortfolioTable';
import { PortfolioTableHead } from '../PortfolioTableHead/PortfolioTableHead';
import { PortfolioTableBody } from '../PortfolioTableBody/PortfolioTableBody';
import { Content } from '../Content/Content';
import { Chart } from '../../../core/Chart/Chart';

export const Portfolio = ({ walletAddress, thirdwebTokens, sanityTokens }) => {
  thirdwebTokens[2]
    ?.balanceOf(walletAddress)
    .then((balance) => console.log(Number(balance.displayValue)));

  // convert all of my tokens into USD 02:05:35
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
