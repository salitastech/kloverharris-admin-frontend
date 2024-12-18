"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";

type Application = {
  id: number;
  status: string;
  submitted_at: string;
  reviewed_at: string | null;
  expected_salary: number | null;
  currency: string;
  user: {
    first_name: string;
    last_name: string;
    email: string;
  };
  career_job: {
    title: string;
    slug: string;
  };
};

const ManageJobApplications = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortField, setSortField] = useState("submitted_at");
  const [sortDirection, setSortDirection] = useState("desc");
  const [summary, setSummary] = useState({
    totalApplications: 0,
    pending: 0,
    accepted: 0,
    rejected: 0,
  });

  const router = useRouter();

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/v1/applications?search=${search}&status=${statusFilter}&sort_by=${sortField}&sort_direction=${sortDirection}`
      );
      if (response.ok) {
        const data = await response.json();
        setApplications(data.data);
        setSummary(data.meta); // Assume API includes summary metrics in meta
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApplications();
  }, [search, statusFilter, sortField, sortDirection]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Manage Job Applications
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                Total Applications
              </Typography>
              <Typography variant="h4">{summary.totalApplications}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="warning.main">
                Pending
              </Typography>
              <Typography variant="h4">{summary.pending}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="success.main">
                Accepted
              </Typography>
              <Typography variant="h4">{summary.accepted}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="error.main">
                Rejected
              </Typography>
              <Typography variant="h4">{summary.rejected}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filters and Search */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search by Applicant Name or Job Title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select
            fullWidth
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="accepted">Accepted</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Select
            fullWidth
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            displayEmpty
          >
            <MenuItem value="submitted_at">Submission Date</MenuItem>
            <MenuItem value="reviewed_at">Reviewed Date</MenuItem>
            <MenuItem value="expected_salary">Expected Salary</MenuItem>
          </Select>
        </Grid>
      </Grid>

      {/* Table */}
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Applicant</TableCell>
                <TableCell>Job</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Expected Salary</TableCell>
                <TableCell>Submitted At</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell>
                    {app.user.first_name} {app.user.last_name}
                    <br />
                    <small>{app.user.email}</small>
                  </TableCell>
                  <TableCell>{app.career_job.title}</TableCell>
                  <TableCell>{app.status}</TableCell>
                  <TableCell>
                    {app.expected_salary
                      ? `${app.currency} ${app.expected_salary}`
                      : "N/A"}
                  </TableCell>
                  <TableCell>{new Date(app.submitted_at).toLocaleString()}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default ManageJobApplications;
