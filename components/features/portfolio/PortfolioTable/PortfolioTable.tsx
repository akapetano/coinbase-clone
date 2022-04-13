import { Table, TableProps } from '@chakra-ui/react';

export const PortfolioTable = ({ children }: TableProps) => {
  return <Table width="100%">{children}</Table>;
};
