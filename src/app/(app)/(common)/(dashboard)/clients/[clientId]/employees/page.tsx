'use client';

import {
  Box,
  Card,
  CardContent,
  Chip,
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
import dayjs from 'dayjs';
import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { useFetchCompanyEmployeesQuery } from '../../../../../../../lib/redux/api/company.api';

const ListAllEmployees = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortField, setSortField] = useState('hire_date');
  const [sortOrder, setSortOrder] = useState('asc');
  const { clientId }: any = useParams();
  const { data, isLoading } = useFetchCompanyEmployeesQuery(
    { id: clientId },
    { refetchOnFocus: true }
  );
  const employees = data?.employees || [];
  const meta = (data || {})?.meta;
  // const [filteredEmployees, setFilteredEmployees] = useState<IEmployee[]>([
  //   ...employees,
  // ]);

  const filteredEmployees = useMemo(() => {
    const result = [...employees];
    return result;
  }, [employees, search]);

  // useEffect(() => {
  //   // if (!employees || employees.length === 0) {
  //   //   setFilteredEmployees([]);
  //   //   return;
  //   // }

  //   //   // Sort by the selected field
  //   //   // result.sort((a, b) => {
  //   //   //   const fieldA =
  //   //   //     sortField === 'company'
  //   //   //       ? a.company.company_name
  //   //   //       : a[sortField as keyof IEmployee];
  //   //   //   const fieldB =
  //   //   //     sortField === 'company'
  //   //   //       ? b.company.company_name
  //   //   //       : b[sortField as keyof IEmployee];

  //   //   //   if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
  //   //   //   if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
  //   //   //   return 0;
  //   // //   // });

  //   setFilteredEmployees((prev) => {
  //     let result = [...prev];

  //     // Filter by status
  //     if (statusFilter) {
  //       result = result.filter((employee) =>
  //         statusFilter === 'active' ? employee.is_active : !employee.is_active
  //       );
  //     }

  //     // Search by name
  //     if (search) {
  //       result = result.filter((employee) =>
  //         `${employee.user.first_name} ${employee.user.last_name}`
  //           .toLowerCase()
  //           .includes(search.toLowerCase())
  //       );
  //     }
  //     return result;
  //   });
  // }, [search, statusFilter, sortField, sortOrder, employees]);

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
              <Typography variant='h5'>{meta?.total_employees || 0}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='h6'>Active Employees</Typography>
              <Typography variant='h5'>
                {meta?.active_employees || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='h6'>Inactive Employees</Typography>
              <Typography variant='h5'>
                {meta?.inactive_employees || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='h6'>Male Employees</Typography>
              <Typography variant='h5'>{meta?.male_employees || 0}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant='h6'>Female Employees</Typography>
              <Typography variant='h5'>
                {meta?.female_employees || 0}
              </Typography>
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
          {isLoading ? (
            <>Loading...</>
          ) : filteredEmployees.length == 0 ? (
            <>No Data to Show</>
          ) : (
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>
                    {employee.user.first_name} {employee.user.last_name}
                  </TableCell>
                  {/* <TableCell>{employee.company_name}</TableCell> */}
                  <TableCell>{employee.job_title}</TableCell>
                  {/* <TableCell>{employee.hire_date}</TableCell> */}
                  <TableCell>{employee.job_title}</TableCell>
                  <TableCell>
                    {dayjs(new Date(employee.hire_date)).format('DD-MM-YYYY')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color={employee.is_active ? 'success' : 'error'}
                      label={employee.is_active ? 'Active' : 'Inactive'}
                      size={'small'}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListAllEmployees;
