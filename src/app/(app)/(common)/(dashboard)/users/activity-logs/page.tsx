"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import axios from "axios";

const ListActivityLogs = () => {
  const [logs, setLogs] = useState([]);
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [filters, setFilters] = useState({
    user_uuid: "",
    action: "",
    role: "",
    company_client_id: "",
    sort_by: "performed_at",
    sort_direction: "desc",
  });
  const [pagination, setPagination] = useState({});
  const [selectedLog, setSelectedLog] = useState(null);
  const [open, setOpen] = useState(false);

  const fetchLogs = async () => {
    try {
      const { data } = await axios.get("/users/activity-log", {
        params: filters,
      });
      setLogs(data.data.data);
      setPagination(data.data.meta);
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/admin/users");
      setUsers(data.data.users.map((user) => ({ id: user.id, name: `${user.first_name} ${user.last_name}` })));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchCompanies = async () => {
    try {
      const { data } = await axios.get("/api/v1/admin/companies");
      setCompanies(data.data.companies.map((company) => ({ id: company.id, name: company.company_name })));
    } catch (error) {
      console.error("Error fetching companies:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchCompanies();
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSortChange = (sortBy) => {
    setFilters({
      ...filters,
      sort_by: sortBy,
      sort_direction: filters.sort_direction === "asc" ? "desc" : "asc",
    });
  };

  const handleRowClick = (log) => {
    setSelectedLog(log);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedLog(null);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Activity Logs
      </Typography>

      {/* Filters */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
        <TextField
          label="Search by Action"
          name="action"
          value={filters.action}
          onChange={handleFilterChange}
          variant="outlined"
        />
        <Select
          name="user_uuid"
          value={filters.user_uuid}
          onChange={handleFilterChange}
          displayEmpty
          variant="outlined"
        >
          <MenuItem value="">All Users</MenuItem>
          {users.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
        <Select
          name="company_client_id"
          value={filters.company_client_id}
          onChange={handleFilterChange}
          displayEmpty
          variant="outlined"
        >
          <MenuItem value="">All Companies</MenuItem>
          {companies.map((company) => (
            <MenuItem key={company.id} value={company.id}>
              {company.name}
            </MenuItem>
          ))}
        </Select>
        <Select
          name="role"
          value={filters.role}
          onChange={handleFilterChange}
          displayEmpty
          variant="outlined"
        >
          <MenuItem value="">All Roles</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="User">User</MenuItem>
          {/* Add more roles as needed */}
        </Select>
        <Button variant="contained" onClick={fetchLogs}>
          Apply Filters
        </Button>
      </Box>

      {/* Activity Logs Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => handleSortChange("user_uuid")}>
                User Name
              </TableCell>
              <TableCell onClick={() => handleSortChange("action")}>
                Action
              </TableCell>
              <TableCell>Description</TableCell>
              <TableCell onClick={() => handleSortChange("performed_at")}>
                Performed At
              </TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id} onClick={() => handleRowClick(log)}>
                <TableCell>{log.user_name}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>{log.description}</TableCell>
                <TableCell>{log.performed_at}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleRowClick(log)}>
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ marginTop: 2, display: "flex", justifyContent: "space-between" }}>
        <Button
          disabled={pagination.current_page === 1}
          onClick={() =>
            setFilters({ ...filters, page: pagination.current_page - 1 })
          }
        >
          Previous
        </Button>
        <Typography>
          Page {pagination.current_page} of {pagination.total_pages}
        </Typography>
        <Button
          disabled={pagination.current_page === pagination.total_pages}
          onClick={() =>
            setFilters({ ...filters, page: pagination.current_page + 1 })
          }
        >
          Next
        </Button>
      </Box>

      {/* View Log Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Activity Details</DialogTitle>
        <DialogContent>
          {selectedLog && (
            <>
              <Typography>
                <strong>User:</strong> {selectedLog.user_name}
              </Typography>
              <Typography>
                <strong>Action:</strong> {selectedLog.action}
              </Typography>
              <Typography>
                <strong>Description:</strong> {selectedLog.description}
              </Typography>
              <Typography>
                <strong>IP Address:</strong> {selectedLog.ip_address}
              </Typography>
              <Typography>
                <strong>User Agent:</strong> {selectedLog.user_agent}
              </Typography>
              <Typography>
                <strong>Performed At:</strong> {selectedLog.performed_at}
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ListActivityLogs;
