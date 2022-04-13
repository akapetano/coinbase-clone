import { DashboardWrapper } from '../components/features/dashboard/DashboardWrapper/DashboardWrapper';
import { Header } from '../components/shared/Header/Header';
import { MainContainer } from '../components/shared/MainContainer/MainContainer';
import { Main } from '../components/shared/Main/Main';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <MainContainer>
        <Header />
        <Main />
      </MainContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
