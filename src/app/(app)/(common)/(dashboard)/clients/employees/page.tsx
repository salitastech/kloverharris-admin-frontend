"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

type Employee = {
  id: number;
  user: { first_name: string; last_name: string; email: string };
  company: { company_name: string };
  job_title: string;
  department: string;
  hire_date: string;
  is_active: boolean;
  gender: string;
};

type Props = {
  employees: Employee[];
  meta: {
    total_employees: number;
    active_employees: number;
    inactive_employees: number;
    male_employees: number;
    female_employees: number;
  };
};

const ListAllEmployees = ({ employees, meta }: Props) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortField, setSortField] = useState("hire_date");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    if (!employees || employees.length === 0) {
      setFilteredEmployees([]);
      return;
    }

    let result = [...employees];

    // Filter by status
    if (statusFilter) {
      result = result.filter((employee) =>
        statusFilter === "active"
          ? employee.is_active
          : !employee.is_active
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
    result.sort((a, b) => {
      const fieldA = sortField === "company"
        ? a.company.company_name
        : a[sortField as keyof Employee];
      const fieldB = sortField === "company"
        ? b.company.company_name
        : b[sortField as keyof Employee];

      if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredEmployees(result);
  }, [search, statusFilter, sortField, sortOrder, employees]);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h2" gutterBottom>
        List All Employees
      </Typography>

      {/* Metrics Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Employees</Typography>
              <Typography variant="h5">0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Employees</Typography>
              <Typography variant="h5">0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Inactive Employees</Typography>
              <Typography variant="h5">0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Male Employees</Typography>
              <Typography variant="h5">0</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Female Employees</Typography>
              <Typography variant="h5">0</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filters */}
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <TextField
          fullWidth
          label="Search by Name"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            label="Status"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            label="Sort By"
          >
            <MenuItem value="hire_date">Hire Date</MenuItem>
            <MenuItem value="created_at">Created Date</MenuItem>
            <MenuItem value="company">Company Client</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Order</InputLabel>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            label="Order"
          >
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
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
                <TableCell>{employee.company.company_name}</TableCell>
                <TableCell>{employee.job_title}</TableCell>
                <TableCell>{employee.hire_date}</TableCell>
                <TableCell>
                  {employee.is_active ? "Active" : "Inactive"}
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