import { DashboardWrapper } from '../components/features/dashboard/DashboardWrapper/DashboardWrapper';
import { Header } from '../components/shared/Header/Header';
import { MainContainer } from '../components/shared/MainContainer/MainContainer';
import { Main } from '../components/shared/Main/Main';
import { Sidebar } from '../components/shared/Sidebar/Sidebar';

const Dashboard = ({ walletAddress }) => {
  return (
    <DashboardWrapper>
      <Sidebar />
      <MainContainer>
        <Header walletAddress={walletAddress} />
        <Main />
      </MainContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
