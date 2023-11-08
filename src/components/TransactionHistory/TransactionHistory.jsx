import {
  Table,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableRow,
  TableCell,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHeader>
        <TableHeaderRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableCell className="left">{type}</TableCell>
              <TableCell className="right">{amount}</TableCell>
              <TableCell className="center">{currency}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
