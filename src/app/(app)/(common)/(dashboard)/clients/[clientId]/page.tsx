'use client';

import { Spinner } from '@app/_components/_core';
import {
  About,
  Biography,
  ProfileHeader,
  UserProfileSidebar,
} from '@app/_components/profile/profile-1';
import { ContentLayout } from '@app/_layout/ContentLayout';
import { ASSET_IMAGES } from '@app/_utilities/constants/paths';
import { getAssetPath } from '@app/_utilities/helpers';
import { useJumboTheme } from '@jumbo/components/JumboTheme/hooks';
import { Alert, AlertTitle, Stack } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  useFetchCompanyEmployeesQuery,
  useFetchCompanyProfileQuery,
} from '../../../../../../lib/redux/api/company.api';

// Mock company for the tables
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

type Params = { clientId: string };

const ShowClientProfile = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [admins, setAdmins] = useState(mockAdmins);
  const [jobRoles, setJobRoles] = useState(mockJobRoles);
  const [interviews, setInterviews] = useState(mockInterviews);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const profileLayoutOptions = useProfileLayout();

  const { clientId } = useParams<Params>();

  const {
    data: company,
    error,
    isLoading,
  } = useFetchCompanyProfileQuery(clientId, {
    refetchOnFocus: true,
  });

  const { data: employeesData, isLoading: employeesLoading } =
    useFetchCompanyEmployeesQuery({ id: clientId }, { refetchOnFocus: true });

  const employees = employeesData?.employees || [];

  // Todo:
  // const admins = employeesData?.employees.filter(
  //   (user) => user.role === EmployeeRole.Manager
  // );

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

  if (!clientId) {
    router.back();
    return;
  }

  if (isLoading) return <Spinner />;

  if (!isLoading && (error || !company)) {
    return (
      <Alert severity='error'>
        <AlertTitle>Error fetching company profile details</AlertTitle>
        An error occurred while fetching the profile.
      </Alert>
    );
  }

  return (
    <ContentLayout
      header={<ProfileHeader />}
      sidebar={<UserProfileSidebar />}
      {...profileLayoutOptions}
    >
      <Stack spacing={3.75}>
        <About />
        <Biography />
      </Stack>
    </ContentLayout>
    // <Container maxWidth='lg'>
    //   <Typography variant='h4' gutterBottom>
    //     Company Profile Information
    //   </Typography>

    //   <Grid container spacing={3}>
    //     {/* Company Details Section */}
    //     <Grid item xs={12}>
    //       <Paper elevation={3} sx={{ padding: 3 }}>
    //         <Box sx={{ marginTop: 2 }}>
    //           {/* Company Details */}
    //           <Stack spacing={1.5}>
    //             <Typography>
    //               <strong>Company Name:</strong>{' '}
    //               {company?.company_name || '---'}
    //             </Typography>
    //             <Typography>
    //               <strong>Registration Number:</strong>{' '}
    //               {company?.registration_number || '---'}
    //             </Typography>
    //             <Typography>
    //               <strong>Email:</strong>{' '}
    //               <a href='mailto:hharvey@reinger.com'>
    //                 {company?.email || '---'}
    //               </a>
    //             </Typography>
    //             <Typography>
    //               <strong>Phone Number:</strong>{' '}
    //               {company?.phone_number || '---'}
    //             </Typography>
    //             <Typography>
    //               <strong>Website:</strong>{' '}
    //               <a
    //                 href={company?.website || ''}
    //                 target='_blank'
    //                 rel='noopener noreferrer'
    //               >
    //                 {company?.website || '---'}
    //               </a>
    //             </Typography>
    //             <Typography>
    //               <strong>Region:</strong> {company?.region || '---'}
    //             </Typography>
    //             <Typography>
    //               <strong>City:</strong> {company?.city}
    //             </Typography>
    //             <Typography>
    //               <strong>Postal Code:</strong> {company?.postal_code}
    //             </Typography>
    //             <Typography>
    //               <strong>Address:</strong>
    //               {company?.address}
    //             </Typography>
    //             <Typography>
    //               <strong>Industry:</strong> {company?.industry}
    //             </Typography>
    //             <Typography>
    //               <strong>Country:</strong> {company?.country.name}{' '}
    //               {company?.country.iso3}
    //             </Typography>
    //             <Typography>
    //               <strong>Total Number of Employees:</strong>{' '}
    //               {company?.meta.total_number_of_employees}
    //             </Typography>
    //             <Stack direction='row' spacing={1} alignItems='center'>
    //               <Typography>
    //                 <strong>Status:</strong>
    //               </Typography>
    //               <Chip
    //                 label={!company?.is_active ? 'Inactive' : 'Active'}
    //                 color={!company?.is_active ? 'error' : 'success'}
    //                 variant='outlined'
    //                 sx={{ fontWeight: 'bold' }}
    //               />
    //             </Stack>
    //           </Stack>
    //         </Box>
    //       </Paper>
    //     </Grid>

    //     {/* Admins Table */}
    //     <Grid item xs={12}>
    //       <Paper elevation={3} sx={{ padding: 3 }}>
    //         <Typography variant='h6' gutterBottom>
    //           Company Admins
    //         </Typography>
    //         <Box
    //           sx={{
    //             marginBottom: 2,
    //             display: 'flex',
    //             justifyContent: 'space-between',
    //           }}
    //         >
    //           <TextField
    //             variant='outlined'
    //             label='Search Admins'
    //             value={search}
    //             onChange={handleSearch}
    //             size='small'
    //             sx={{ width: '40%' }}
    //           />
    //         </Box>
    //         <TableContainer component={Paper}>
    //           <Table>
    //             <TableHead>
    //               <TableRow>
    //                 <TableCell>Name</TableCell>
    //                 <TableCell>Email</TableCell>
    //                 <TableCell>Role</TableCell>
    //               </TableRow>
    //             </TableHead>
    //             <TableBody>
    //               {admins
    //                 .filter((admin) =>
    //                   admin.name.toLowerCase().includes(search.toLowerCase())
    //                 )
    //                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //                 .map((admin) => (
    //                   <TableRow key={admin.id}>
    //                     <TableCell>{admin.name}</TableCell>
    //                     <TableCell>{admin.email}</TableCell>
    //                     <TableCell>{admin.role}</TableCell>
    //                   </TableRow>
    //                 ))}
    //             </TableBody>
    //           </Table>
    //         </TableContainer>
    //         <TablePagination
    //           rowsPerPageOptions={[5, 10, 25]}
    //           component='div'
    //           count={admins.length}
    //           rowsPerPage={rowsPerPage}
    //           page={page}
    //           onPageChange={handlePageChange}
    //           onRowsPerPageChange={handleRowsPerPageChange}
    //         />
    //       </Paper>
    //     </Grid>

    //     {/* Employees Table */}
    //     <Grid item xs={12}>
    //       <Paper elevation={3} sx={{ padding: 3 }}>
    //         <Typography variant='h6' gutterBottom>
    //           Employees
    //         </Typography>
    //         <Box
    //           sx={{
    //             marginBottom: 2,
    //             display: 'flex',
    //             justifyContent: 'space-between',
    //           }}
    //         >
    //           <TextField
    //             variant='outlined'
    //             label='Search Employees'
    //             value={search}
    //             onChange={handleSearch}
    //             size='small'
    //             sx={{ width: '40%' }}
    //           />
    //         </Box>
    //         <TableContainer component={Paper}>
    //           <Table>
    //             <TableHead>
    //               <TableRow>
    //                 <TableCell>Name</TableCell>
    //                 <TableCell>Email</TableCell>
    //                 <TableCell>Role</TableCell>
    //               </TableRow>
    //             </TableHead>
    //             <TableBody>
    //               {employeesLoading ? (
    //                 <TableRow>Loading...</TableRow>
    //               ) : (
    //                 employees
    //                   ?.filter((employee) =>
    //                     employee.user.first_name
    //                       .toLowerCase()
    //                       .includes(search.toLowerCase())
    //                   )
    //                   .slice(
    //                     page * rowsPerPage,
    //                     page * rowsPerPage + rowsPerPage
    //                   )
    //                   .map((employee) => (
    //                     <TableRow
    //                       key={employee.id}
    //                       sx={{
    //                         '&:hover': {
    //                           backgroundColor: '#f5f5f5',
    //                           cursor: 'pointer',
    //                         },
    //                       }}
    //                       onClick={() =>
    //                         router.push(
    //                           `/clients/${company.id}/employees/${employee.id}`
    //                         )
    //                       }
    //                     >
    //                       <TableCell>{employee.user.first_name}</TableCell>
    //                       <TableCell>{employee.user.email}</TableCell>
    //                       <TableCell>{employee.role}</TableCell>
    //                     </TableRow>
    //                   ))
    //               )}
    //             </TableBody>
    //           </Table>
    //         </TableContainer>
    //         <TablePagination
    //           rowsPerPageOptions={[5, 10, 25]}
    //           component='div'
    //           count={employees.length}
    //           rowsPerPage={rowsPerPage}
    //           page={page}
    //           onPageChange={handlePageChange}
    //           onRowsPerPageChange={handleRowsPerPageChange}
    //         />
    //       </Paper>
    //     </Grid>

    //     {/* Open Job Roles Table */}
    //     <Grid item xs={12}>
    //       <Paper elevation={3} sx={{ padding: 3 }}>
    //         <Typography variant='h6' gutterBottom>
    //           Open Job Roles
    //         </Typography>
    //         <TableContainer component={Paper}>
    //           <Table>
    //             <TableHead>
    //               <TableRow>
    //                 <TableCell>Job Title</TableCell>
    //                 <TableCell>Status</TableCell>
    //               </TableRow>
    //             </TableHead>
    //             <TableBody>
    //               {jobRoles.map((job) => (
    //                 <TableRow key={job.id}>
    //                   <TableCell>{job.title}</TableCell>
    //                   <TableCell>{job.status}</TableCell>
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //         </TableContainer>
    //       </Paper>
    //     </Grid>

    //     {/* Open Interviews Table */}
    //     <Grid item xs={12}>
    //       <Paper elevation={3} sx={{ padding: 3 }}>
    //         <Typography variant='h6' gutterBottom>
    //           Open Interviews
    //         </Typography>
    //         <TableContainer component={Paper}>
    //           <Table>
    //             <TableHead>
    //               <TableRow>
    //                 <TableCell>Job Title</TableCell>
    //                 <TableCell>Status</TableCell>
    //               </TableRow>
    //             </TableHead>
    //             <TableBody>
    //               {interviews.map((interview) => (
    //                 <TableRow key={interview.id}>
    //                   <TableCell>{interview.jobTitle}</TableCell>
    //                   <TableCell>{interview.status}</TableCell>
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //         </TableContainer>
    //       </Paper>
    //     </Grid>

    //     {/* Action Buttons */}
    //     <Grid item xs={12}>
    //       <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
    //         <Button variant='contained' color='primary'>
    //           Manage Employees
    //         </Button>
    //         <Button variant='contained' color='secondary'>
    //           Disable Company
    //         </Button>
    //         <Button variant='contained'>Send Message</Button>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Container>
  );
};

const useProfileLayout = () => {
  const { theme } = useJumboTheme();
  return React.useMemo(
    () => ({
      headerOptions: {
        sx: {
          mt: -4,
          mb: -7.25,
          mx: { xs: -4, lg: -6 },
          p: { xs: theme.spacing(6, 4, 11), lg: theme.spacing(6, 6, 11) },
          background: `#002447 url(${getAssetPath(`${ASSET_IMAGES}/profile-bg.jpg`, '1920x580')}) no-repeat center`,
          backgroundSize: 'cover',
          color: 'common.white',
          position: 'relative',

          '&::after': {
            display: 'inline-block',
            position: 'absolute',
            content: `''`,
            inset: 0,
            backgroundColor: alpha(theme.palette.common.black, 0.65),
          },
        },
      },
      sidebarOptions: {
        sx: {
          mr: 3.75,
          width: { xs: '100%', lg: '33%' },
          [theme.breakpoints.down('lg')]: {
            minHeight: 0,
            mr: 0,
            order: 2,
            mt: 3.75,
          },
        },
      },
      wrapperOptions: {
        sx: {
          [theme.breakpoints.down('lg')]: {
            flexDirection: 'column',
          },
        },
        container: true,
      },
      mainOptions: {
        sx: {
          [theme.breakpoints.down('lg')]: {
            minHeight: 0,
          },
        },
      },
      contentOptions: {
        sx: {
          p: { lg: 0, sm: 0, xs: 0 },
        },
      },
    }),
    [theme]
  );
};

export default ShowClientProfile;
