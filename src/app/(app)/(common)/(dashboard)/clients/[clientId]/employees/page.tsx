'use client';

import {
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { IEmployee } from '../../../../../../../interfaces';
import { useFetchCompanyEmployeesQuery } from '../../../../../../../lib/redux/api/company.api';

export async function getStaticProps(context) {
  console.log({ context });
  const data = {};
  return { props: { data }, revalidate: 10 };
}

const ListAllEmployees = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortField, setSortField] = useState('hire_date');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredEmployees, setFilteredEmployees] = useState<IEmployee[]>([]);
  const { clientId }: any = useParams();
  const { data, isLoading } = useFetchCompanyEmployeesQuery({ id: clientId });

  const employees = data?.employees || [];

  useEffect(() => {
    if (!employees || employees.length === 0) {
      setFilteredEmployees([]);
      return;
    }

    let result = [...employees];

    // Filter by status
    if (statusFilter) {
      result = result.filter((employee) =>
        statusFilter === 'active' ? employee.is_active : !employee.is_active
      );
    }

    // Search by name
    if (search) {
      result = result.filter((employee) =>
        `${employee.user.first_name} ${employee.user.last_name}`
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Sort by the selected field
    // result.sort((a, b) => {
    //   const fieldA =
    //     sortField === 'company'
    //       ? a.company.company_name
    //       : a[sortField as keyof IEmployee];
    //   const fieldB =
    //     sortField === 'company'
    //       ? b.company.company_name
    //       : b[sortField as keyof IEmployee];

    //   if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
    //   if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
    //   return 0;
    // });

    setFilteredEmployees(result);
  }, [search, statusFilter, sortField, sortOrder, employees]);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant='h2' gutterBottom>
        List All Employees
      </Typography>

      {/* Metrics Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='h6'>Total Employees</Typography>
              <Typography variant='h5'>0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='h6'>Active Employees</Typography>
              <Typography variant='h5'>0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='h6'>Inactive Employees</Typography>
              <Typography variant='h5'>0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='h6'>Male Employees</Typography>
              <Typography variant='h5'>0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='h6'>Female Employees</Typography>
              <Typography variant='h5'>0</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filters */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          fullWidth
          label='Search by Name'
          variant='outlined'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            label='Status'
          >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='active'>Active</MenuItem>
            <MenuItem value='inactive'>Inactive</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            label='Sort By'
          >
            <MenuItem value='hire_date'>Hire Date</MenuItem>
            <MenuItem value='created_at'>Created Date</MenuItem>
            <MenuItem value='company'>Company Client</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Order</InputLabel>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            label='Order'
          >
            <MenuItem value='asc'>Ascending</MenuItem>
            <MenuItem value='desc'>Descending</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Employees Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Hire Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>
                  {employee.user.first_name} {employee.user.last_name}
                </TableCell>
                {/* <TableCell>{employee.company_name}</TableCell> */}
                <TableCell>{employee.job_title}</TableCell>
                {/* <TableCell>{employee.hire_date}</TableCell> */}
                <TableCell>
                  {employee.is_active ? 'Active' : 'Inactive'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListAllEmployees;
