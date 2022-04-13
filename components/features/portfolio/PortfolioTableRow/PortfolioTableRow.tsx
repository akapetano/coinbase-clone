import { Tr, TableRowProps } from '@chakra-ui/react';

export const PortfolioTableRow = ({ children }: TableRowProps) => {
  return (
    <Tr
      className="tableRow"
      width="100%"
      display="flex"
      justifyContent="space-between"
    >
      {children}
    </Tr>
  );
};
