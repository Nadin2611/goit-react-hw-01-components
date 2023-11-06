import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  border-collapse: collapse;
  margin-top: ${props => props.theme.spacing(5)};
`;

export const TableHeader = styled.thead``;
export const TableHeaderRow = styled.tr``;

export const TableHeaderCell = styled.th`
  width: 33.33%;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.small};
  line-height: 2;
  text-transform: uppercase;
  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.white};
  }
`;

export const TableRow = styled.tr`
  font-size: ${props => props.theme.fontSizes.small};
  &:nth-child(even) {
    background-color: #f2f2f2; /* Колір для парних рядків */
  }
  &:nth-child(odd) {
    background-color: #ffffff; /* Колір для непарних рядків */
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

export const TableBody = styled.tbody``;
