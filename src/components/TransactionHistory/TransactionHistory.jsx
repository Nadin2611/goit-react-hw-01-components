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
              <TableCell style={{ textAlign: 'left', paddingLeft: '120px' }}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </TableCell>
              <TableCell style={{ textAlign: 'right', paddingRight: '100px' }}>
                {amount}
              </TableCell>
              <TableCell style={{ textAlign: 'center' }}>{currency}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
