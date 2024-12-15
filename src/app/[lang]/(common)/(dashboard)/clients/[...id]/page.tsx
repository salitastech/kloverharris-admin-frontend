'use client';

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
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
import React, { useEffect, useState } from 'react';

// Mock data for the tables
const mockAdmins = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
];

const mockEmployees = [
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Employee' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Employee' },
];

const mockJobRoles = [
  { id: 1, title: 'Software Engineer', status: 'Open' },
  { id: 2, title: 'Product Manager', status: 'Open' },
];

const mockInterviews = [
  { id: 1, jobTitle: 'Software Engineer', status: 'Pending' },
  { id: 2, jobTitle: 'Product Manager', status: 'Scheduled' },
];

const ShowClientProfile = ({ clientId }: { clientId: string }) => {
  const [search, setSearch] = useState('');
  const [admins, setAdmins] = useState(mockAdmins);
  const [employees, setEmployees] = useState(mockEmployees);
  const [jobRoles, setJobRoles] = useState(mockJobRoles);
  const [interviews, setInterviews] = useState(mockInterviews);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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

  useEffect(() => {}, [clientId]);

  return (
    <Container maxWidth='lg'>
      <Typography variant='h4' gutterBottom>
        Company Client Profile
      </Typography>

      <Grid container spacing={3}>
        {/* Company Details Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant='h6'>Company Information</Typography>
            <Box sx={{ marginTop: 2 }}>
              {/* Add company details here, such as company name, email, etc. */}
            </Box>
          </Paper>
        </Grid>

        {/* Admins Table */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant='h6' gutterBottom>
              Company Admins
            </Typography>
            <Box
              sx={{
                marginBottom: 2,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <TextField
                variant='outlined'
                label='Search Admins'
                value={search}
                onChange={handleSearch}
                size='small'
                sx={{ width: '40%' }}
              />
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {admins
                    .filter((admin) =>
                      admin.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((admin) => (
                      <TableRow key={admin.id}>
                        <TableCell>{admin.name}</TableCell>
                        <TableCell>{admin.email}</TableCell>
                        <TableCell>{admin.role}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component='div'
              count={admins.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </Paper>
        </Grid>

        {/* Employees Table */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant='h6' gutterBottom>
              Employees
            </Typography>
            <Box
              sx={{
                marginBottom: 2,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <TextField
                variant='outlined'
                label='Search Employees'
                value={search}
                onChange={handleSearch}
                size='small'
                sx={{ width: '40%' }}
              />
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employees
                    .filter((employee) =>
                      employee.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.role}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component='div'
              count={employees.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
            />
          </Paper>
        </Grid>

        {/* Open Job Roles Table */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant='h6' gutterBottom>
              Open Job Roles
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Job Title</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jobRoles.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell>{job.title}</TableCell>
                      <TableCell>{job.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Open Interviews Table */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant='h6' gutterBottom>
              Open Interviews
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Job Title</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {interviews.map((interview) => (
                    <TableRow key={interview.id}>
                      <TableCell>{interview.jobTitle}</TableCell>
                      <TableCell>{interview.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Action Buttons */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant='contained' color='primary'>
              Manage Employees
            </Button>
            <Button variant='contained' color='secondary'>
              Disable Company
            </Button>
            <Button variant='contained'>Send Message</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShowClientProfile;
