"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

type Client = {
  id: string;
  company_name: string;
  registration_number?: string;
  email: string;
  phone_number?: string;
  website?: string;
  region?: string;
  city?: string;
  postal_code?: string;
  address?: string;
  industry?: string;
  is_active: boolean;
  country: { id: number; name: string };
  meta: {
    created_at: string;
    last_profile_update: string;
    total_number_of_employees: number;
  };
};

const ListAllClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [search, setSearch] = useState("");
  const [countryId, setCountryId] = useState("");
  const [industry, setIndustry] = useState("");
  const [isActive, setIsActive] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchClients = async () => {
    try {
      const queryParams = new URLSearchParams({
        search,
        country_id: countryId,
        industry,
        is_active: isActive,
        sort_direction: sortDirection,
        page: (page + 1).toString(),
        per_page: rowsPerPage.toString(),
      }).toString();

      const response = await fetch(
        `/api/v1/company-clients?${queryParams}`
      );

      if (response.ok) {
        const { data, meta } = await response.json();
        setClients(data);
        setTotal(meta.total);
      } else {
        console.error("Failed to fetch clients.");
      }
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [search, countryId, industry, isActive, sortDirection, page, rowsPerPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setCountryId(e.target.value as string);
  };

  const handleIndustryChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setIndustry(e.target.value as string);
  };

  const handleStatusChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setIsActive(e.target.value as string);
  };

  const handleSortChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setSortDirection(e.target.value as "asc" | "desc");
  };

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        List and Manage Company Clients
      </Typography>

      <Paper sx={{ padding: 3, marginBottom: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Search by Company Name"
              value={search}
              onChange={handleSearchChange}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Country</InputLabel>
              <Select value={countryId} onChange={handleCountryChange} label="Country">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="1">United States</MenuItem>
                <MenuItem value="2">Canada</MenuItem>
                <MenuItem value="3">Nigeria</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Industry</InputLabel>
              <Select value={industry} onChange={handleIndustryChange} label="Industry">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Finance">Finance</MenuItem>
                <MenuItem value="Technology">Technology</MenuItem>
                <MenuItem value="Healthcare">Healthcare</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Status</InputLabel>
              <Select value={isActive} onChange={handleStatusChange} label="Status">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="1">Active</MenuItem>
                <MenuItem value="0">Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Sort Direction</InputLabel>
              <Select value={sortDirection} onChange={handleSortChange} label="Sort Direction">
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
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
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.company_name}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone_number || "N/A"}</TableCell>
                <TableCell>{client.industry || "N/A"}</TableCell>
                <TableCell>{client.country?.name || "N/A"}</TableCell>
                <TableCell>{client.meta.total_number_of_employees}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
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
