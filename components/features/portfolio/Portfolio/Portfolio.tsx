import { PortfolioWrapper } from '../PortfolioWrapper/PortfolioWrapper';
import { PortfolioTable } from '../PortfolioTable/PortfolioTable';
import { PortfolioTableHead } from '../PortfolioTableHead/PortfolioTableHead';
import { PortfolioTableBody } from '../PortfolioTableBody/PortfolioTableBody';
import { Content } from '../Content/Content';
import { Chart } from '../../../core/Chart/Chart';
import { useEffect, useCallback, useState } from 'react';

export const Portfolio = ({ walletAddress, thirdwebTokens, sanityTokens }) => {
  const [walletBalance, setWalletBalance] = useState(0);

  const tokenToUsd = useCallback(() => {}, []);

  for (const token of sanityTokens) {
    tokenToUsd[token.contractAddress] = Number(token.usdPrice);
  }

  useEffect(() => {
    const calculateTotalBalance = async () => {
      const totalBalance = await Promise.all(
        thirdwebTokens.map(async (token) => {
          const balance = await token.balanceOf(walletAddress);
          return (
            Number(balance.displayValue) *
            tokenToUsd[token.contractWrapper.readContract.address]
          );
        })
      );
      setWalletBalance(totalBalance.reduce((acc, curr) => acc + curr, 0));
    };

    calculateTotalBalance();
  }, [thirdwebTokens, sanityTokens, walletAddress, tokenToUsd]);

  // convert all of my tokens into USD
  return (
    <PortfolioWrapper>
      <Content>
        <Chart walletBalance={walletBalance} />
        <PortfolioTable>
          <PortfolioTableHead />
          <PortfolioTableBody />
        </PortfolioTable>
      </Content>
    </PortfolioWrapper>
  );
};
