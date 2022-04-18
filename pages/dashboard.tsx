import { DashboardWrapper } from '../components/features/dashboard/DashboardWrapper/DashboardWrapper';
import { Header } from '../components/shared/Header/Header';
import { MainContainer } from '../components/shared/MainContainer/MainContainer';
import { Main } from '../components/shared/Main/Main';
import { Sidebar } from '../components/shared/Sidebar/Sidebar';
import { useState, useEffect } from 'react';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_KEY,
    ethers.getDefaultProvider(
      `https://rinkeby.infura.io/v3/33f18a9bdf984c63ab2ff627ed31758e`
    )
  )
);

const Dashboard = ({ walletAddress }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdwebTokens, setThirdwebTokens] = useState([]);

  useEffect(() => {
    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(
        "https://14a9ey4u.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D"
      );
      const sanityTokens = (await coins.json()).result;
      setSanityTokens(sanityTokens);

      setThirdwebTokens(
        sanityTokens.map((token) => sdk.getToken(token.contractAddress))
      );
    };
    getSanityAndThirdWebTokens();
  }, []);

  // console.log('Sanity', sanityTokens);
  // console.log('Thirdweb', thirdwebTokens);

  return (
    <DashboardWrapper>
      <Sidebar />
      <MainContainer>
        <Header
          walletAddress={walletAddress}
          sanityTokens={sanityTokens}
          thirdwebTokens={thirdwebTokens}
        />
        <Main
          walletAddress={walletAddress}
          sanityTokens={sanityTokens}
          thirdwebTokens={thirdwebTokens}
        />
      </MainContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
