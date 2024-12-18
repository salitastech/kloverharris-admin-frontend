"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Button,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";

const ListAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [summary, setSummary] = useState({});
  const [pagination, setPagination] = useState({});
  const [filters, setFilters] = useState({
    search: "",
    role: "",
    is_active: "",
    is_employee: "",
    sort_by: "created_at",
    sort_direction: "desc",
  });

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/v1/users/list", {
        params: filters,
      });
      setUsers(response.data.data.users);
      setSummary(response.data.data.summary);
      setPagination(response.data.data.pagination);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handlePageChange = (event, newPage) => {
    setFilters({ ...filters, page: newPage + 1 });
  };

  const handleExport = async (format) => {
    try {
      const response = await axios.get(`/api/v1/admin/users/export`, {
        params: { ...filters, format },
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `users.${format}`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error exporting users", error);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Manage Users
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">{summary.total_users || 0}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Users</Typography>
              <Typography variant="h4">{summary.active_users || 0}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Inactive Users</Typography>
              <Typography variant="h4">{summary.inactive_users || 0}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Employees</Typography>
              <Typography variant="h4">{summary.employees || 0}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filters */}
      <Box mt={3} display="flex" gap={2}>
        <TextField
          label="Search"
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
        />
        <Select
          name="role"
          value={filters.role}
          onChange={handleFilterChange}
          displayEmpty
        >
          <MenuItem value="">All Roles</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="user">User</MenuItem>
        </Select>
        <Select
          name="is_active"
          value={filters.is_active}
          onChange={handleFilterChange}
          displayEmpty
        >
          <MenuItem value="">All Status</MenuItem>
          <MenuItem value={1}>Active</MenuItem>
          <MenuItem value={0}>Inactive</MenuItem>
        </Select>
        <Select
          name="is_employee"
          value={filters.is_employee}
          onChange={handleFilterChange}
          displayEmpty
        >
          <MenuItem value="">All Users</MenuItem>
          <MenuItem value={1}>Employees</MenuItem>
          <MenuItem value={0}>Non-Employees</MenuItem>
        </Select>
      </Box>

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.first_name}</TableCell>
                <TableCell>{user.last_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.roles.join(", ")}</TableCell>
                <TableCell>{user.is_active ? "Active" : "Inactive"}</TableCell>
                <TableCell>
                  <Button variant="contained" size="small">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={pagination.total || 0}
        page={(pagination.current_page || 1) - 1}
        onPageChange={handlePageChange}
        rowsPerPage={pagination.per_page || 10}
        rowsPerPageOptions={[10]}
      />

      {/* Export Buttons */}
      <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="contained" onClick={() => handleExport("csv")}>
          Export CSV
        </Button>
        <Button variant="contained" onClick={() => handleExport("pdf")}>
          Export PDF
        </Button>
      </Box>
    </Box>
  );
};

export default ListAllUsers;
