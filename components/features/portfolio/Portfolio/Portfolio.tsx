import { PortfolioWrapper } from '../PortfolioWrapper/PortfolioWrapper';
import { PortfolioTable } from '../PortfolioTable/PortfolioTable';
import { PortfolioTableHead } from '../PortfolioTableHead/PortfolioTableHead';
import { PortfolioTableBody } from '../PortfolioTableBody/PortfolioTableBody';
import { Content } from '../Content/Content';
import { Chart } from '../../../core/Chart/Chart';
import { useState, useEffect } from 'react';

export const Portfolio = () => {
  const [sanityTokens, setSanityTokens] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
      try {
        const coins = await fetch(
          "https://14a9ey4u.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
        );
        const tempSanityTokens = await coins.json();
        console.log(tempSanityTokens.result);
        setSanityTokens(tempSanityTokens.result);
      } catch (error) {
        console.log(error);
      }
    };
    getCoins();
  }, []);

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
