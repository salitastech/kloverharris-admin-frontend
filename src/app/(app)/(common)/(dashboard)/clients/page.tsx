'use client';

import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
  type SortDirection,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { useLazyFetchAllCompaniesQuery } from '../../../../../lib/redux/api/company.api';

const ListAllClients = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [countryId, setCountryId] = useState('');
  const [industry, setIndustry] = useState('');
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [total, setTotal] = useState(0);

  const queryParams = useMemo(
    () => ({
      search,
      country_id: countryId,
      industry,
      is_active: isActive,
      sort_direction: sortDirection,
      page: page + 1,
      per_page: rowsPerPage,
    }),
    [search, countryId, industry, isActive, sortDirection, page, rowsPerPage]
  );

  const [fetchData, { data }] = useLazyFetchAllCompaniesQuery({
    refetchOnFocus: true,
  });

  const handleFetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetchData(queryParams).unwrap();
      if (res) {
        setTotal(res.pagination.total_pages);
        setRowsPerPage(res.pagination.per_page);
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  const rowsPerPageOptions = total
    ? Array.from(
        { length: Math.ceil(total / rowsPerPage) },
        (_, index) => (index + 1) * rowsPerPage
      )
    : [];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCountryChange = (e: SelectChangeEvent) => {
    setCountryId(e.target.value);
  };

  const handleIndustryChange = (e: SelectChangeEvent) => {
    setIndustry(e.target.value);
  };

  const handleStatusChange = ({ target: { value } }: SelectChangeEvent) => {
    if (value == 'active') setIsActive(true);
    else if (value == 'inactive') setIsActive(false);
  };

  const handleSortChange = (e: SelectChangeEvent) => {
    setSortDirection(e.target.value as SortDirection);
  };

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    handleFetchData();
  }, [queryParams]);

  return (
    <Container maxWidth='lg'>
      <Typography variant='h4' gutterBottom>
        List and Manage Company Clients
      </Typography>

      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Search by Company Name'
              value={search}
              onChange={handleSearchChange}
              variant='outlined'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant='outlined'>
              <InputLabel>Country</InputLabel>
              <Select
                value={countryId}
                onChange={handleCountryChange}
                label='Country'
              >
                <MenuItem value=''>All</MenuItem>
                <MenuItem value='1'>United States</MenuItem>
                <MenuItem value='2'>Canada</MenuItem>
                <MenuItem value='3'>Nigeria</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant='outlined'>
              <InputLabel>Industry</InputLabel>
              <Select
                value={industry}
                onChange={handleIndustryChange}
                label='Industry'
              >
                <MenuItem value=''>All</MenuItem>
                <MenuItem value='Finance'>Finance</MenuItem>
                <MenuItem value='Technology'>Technology</MenuItem>
                <MenuItem value='Healthcare'>Healthcare</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant='outlined'>
              <InputLabel>Status</InputLabel>
              <Select
                value={String(isActive)}
                onChange={handleStatusChange}
                label='Status'
              >
                <MenuItem value='all'>All</MenuItem>
                <MenuItem value='active'>Active</MenuItem>
                <MenuItem value='inactive'>Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant='outlined'>
              <InputLabel>Sort Direction</InputLabel>
              <Select
                value={String(sortDirection)}
                onChange={handleSortChange}
                label='Sort Direction'
              >
                <MenuItem value='asc'>Ascending</MenuItem>
                <MenuItem value='desc'>Descending</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Industry</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Employees</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell>Loading...</TableCell>
              </TableRow>
            ) : (
              data?.data?.map((client) => (
                <TableRow
                  key={client.id}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#f5f5f5',
                      cursor: 'pointer',
                    },
                  }}
                  onClick={() => router.push(`/clients/${client.id}`)}
                >
                  <TableCell>{client.company_name}</TableCell>
                  <TableCell>{client.email}</TableCell>
                  <TableCell>{client.phone_number || 'N/A'}</TableCell>
                  <TableCell>{client.industry || 'N/A'}</TableCell>
                  <TableCell>{client.country?.name || 'N/A'}</TableCell>
                  <TableCell>{client.meta.total_number_of_employees}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[...rowsPerPageOptions]}
          component='div'
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </TableContainer>
    </Container>
  );
};

export default ListAllClients;
