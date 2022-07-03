import  propTypes  from 'prop-types';

import { Table, TableBody, TableBodyRow, TableBodyText, TableHead, TableHeader, TableHeadRow } from './ui/TransactionHistiory/index';

export const TransactionHistory = ({ items }) => {
  return (
    <Table class="transaction-history">
      <TableHead>
        <TableHeadRow>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </TableHeadRow>
      </TableHead>

      <TableBody>
        {items.map(item => (<TableBodyRow key={item.id}>
          <TableBodyText>{item.type}</TableBodyText>
          <TableBodyText>{item.amount}</TableBodyText>
          <TableBodyText>{item.currency}</TableBodyText>
        </TableBodyRow>))}
      </TableBody>
    </Table>
  )

};

TransactionHistory.propTypes = {
  items: propTypes.array.isRequired,
}