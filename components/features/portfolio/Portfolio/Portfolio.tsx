import { PortfolioTableContainer } from '../PortfolioTableContainer/PortfolioTableContainer';
import { PortfolioWrapper } from '../PortfolioWrapper/PortfolioWrapper';
import { PortfolioTable } from '../PortfolioTable/PortfolioTable';
import { PortfolioTableItem } from '../PortfolioTableItem/PortfolioTableItem';
import { PortfolioTitle } from '../PortfolioTitle/PortfolioTitle';
import { Divider, Table } from '@chakra-ui/react';
import { PortfolioTableRow } from '../PortfolioTableRow/PortfolioTableRow';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <PortfolioTableContainer>
        <PortfolioTable>
          <PortfolioTableItem>
            <PortfolioTitle>Your Assets</PortfolioTitle>
          </PortfolioTableItem>
          <Divider />
          <Table>
            <PortfolioTableItem>
              <PortfolioTableRow>
                <div>Name</div>
                <div>Balance</div>
                <div>Price</div>
                <div>Allocation</div>
                <div>Allocation</div>
                <div>
                  <BsThreeDotsVertical />
                </div>
              </PortfolioTableRow>
            </PortfolioTableItem>
          </Table>
        </PortfolioTable>
      </PortfolioTableContainer>
    </PortfolioWrapper>
  );
};
