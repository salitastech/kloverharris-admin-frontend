"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const DemoBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    country_id: "",
    create_account: "",
    sort_by: "created_at",
    sort_direction: "desc",
  });
  const [summaryCounts, setSummaryCounts] = useState({
    unseen: 0,
    total: 0,
    completed: 0,
    pending: 0,
  });

  useEffect(() => {
    fetchBookings();
    fetchSummaryCounts();
  }, [filters]);
  const handleViewClick = (id: number) => {
    console.log(`Viewing details for booking ID: ${id}`);
    // Navigate to  detail page
  };

  const fetchBookings = async () => {
    try {
      const response = await fetch(
        `/api/v1/demo-bookings?search=${filters.search}&country_id=${filters.country_id}&create_account=${filters.create_account}&sort_by=${filters.sort_by}&sort_direction=${filters.sort_direction}`
      );
      const data = await response.json();
      if (data.status === "Success") {
        setBookings(data.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch bookings", error);
    }
  };

  const fetchSummaryCounts = async () => {
    try {
      const response = await fetch(`/api/v1/demo-bookings/summary`);
      const data = await response.json();
      if (data.status === "Success") {
        setSummaryCounts(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch summary counts", error);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const countries = [
    { id: 1, name: "United States" },
    { id: 2, name: "Canada" },
    { id: 3, name: "Nigeria" },
  ]; // Replace with real country data

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Manage Demo Bookings
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Unseen Requests</Typography>
              <Typography variant="h4">{summaryCounts.unseen}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Requests</Typography>
              <Typography variant="h4">{summaryCounts.total}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Completed Demos</Typography>
              <Typography variant="h4">{summaryCounts.completed}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Pending Demos</Typography>
              <Typography variant="h4">{summaryCounts.pending}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filters and Sorts */}
      <Box mb={4} display="flex" gap={2} flexWrap="wrap">
        <TextField
          label="Search"
          name="search"
          variant="outlined"
          value={filters.search}
          onChange={handleFilterChange}
        />
        <TextField
          select
          label="Country"
          name="country_id"
          variant="outlined"
          value={filters.country_id}
          onChange={handleFilterChange}
        >
          {countries.map((country) => (
            <MenuItem key={country.id} value={country.id}>
              {country.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Create Account"
          name="create_account"
          variant="outlined"
          value={filters.create_account}
          onChange={handleFilterChange}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="1">Yes</MenuItem>
          <MenuItem value="0">No</MenuItem>
        </TextField>
        <TextField
          select
          label="Sort By"
          name="sort_by"
          variant="outlined"
          value={filters.sort_by}
          onChange={handleFilterChange}
        >
          <MenuItem value="created_at">Created At</MenuItem>
          <MenuItem value="first_name">First Name</MenuItem>
          <MenuItem value="last_name">Last Name</MenuItem>
        </TextField>
        <TextField
          select
          label="Sort Direction"
          name="sort_direction"
          variant="outlined"
          value={filters.sort_direction}
          onChange={handleFilterChange}
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </TextField>
        <Button variant="contained" onClick={fetchBookings}>
          Apply Filters
        </Button>
      </Box>

      {/* Bookings Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Workmail</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking: any) => (
              <TableRow key={booking.id}>
                <TableCell>{booking.first_name}</TableCell>
                <TableCell>{booking.last_name}</TableCell>
                <TableCell>{booking.workmail}</TableCell>
                <TableCell>{booking.country}</TableCell>
                <TableCell>{booking.created_at}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleViewClick(booking.id)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DemoBookings;
