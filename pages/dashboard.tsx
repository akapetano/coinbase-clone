import { DashboardWrapper } from '../components/features/dashboard/DashboardWrapper/DashboardWrapper';
import { Header } from '../components/shared/Header/Header';
import { MainContainer } from '../components/shared/MainContainer/MainContainer';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <MainContainer>
        <Header />
      </MainContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
