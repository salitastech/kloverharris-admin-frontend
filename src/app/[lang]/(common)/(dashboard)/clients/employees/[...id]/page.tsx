"use client";

import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import { employeeMockData } from "./data"; // Import mock data

const EmployeeProfile = () => {
  const employee = employeeMockData;

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {/* Employee Details */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                src={employee.user.avatar}
                alt={`${employee.user.first_name} ${employee.user.last_name}`}
                sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
              />
              <Typography variant="h5">
                {employee.user.first_name} {employee.user.last_name}
              </Typography>
              <Typography color="text.secondary">
                {employee.job_title} - {employee.department}
              </Typography>
              <Button variant="contained" color="error" sx={{ mt: 2 }}>
                Disable Account
              </Button>
              <Button variant="contained" sx={{ mt: 2, ml: 2 }}>
                Reset Password
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Company Information */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Company Details</Typography>
              <Typography>{employee.company.company_name}</Typography>
              <Typography>Email: {employee.company.email}</Typography>
              <Typography>Phone: {employee.company.phone_number}</Typography>
              <Typography>Address: {employee.company.address}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Leave Management */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Leave Management</Typography>
              <Typography>Leave Days Left: {employee.leave_days_left}</Typography>
              <Typography>
                Next Leave Date: {employee.leave_management.next_leave_date}
              </Typography>
              <Typography>Pending Leave Requests:</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Type</TableCell>
                      <TableCell>Start Date</TableCell>
                      <TableCell>End Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employee.leave_management.pending_requests.map((leave) => (
                      <TableRow key={leave.id}>
                        <TableCell>{leave.type}</TableCell>
                        <TableCell>{leave.start_date}</TableCell>
                        <TableCell>{leave.end_date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Resume Download */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Resume</Typography>
              <Button
                variant="contained"
                color="primary"
                href={employee.resume}
                download
              >
                Download Resume
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Activity Log */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Activity Log</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Activity</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employee.activity_log.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell>{log.activity}</TableCell>
                        <TableCell>{log.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Tickets */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Tickets</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Subject</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employee.tickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell>{ticket.subject}</TableCell>
                        <TableCell>{ticket.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployeeProfile;
