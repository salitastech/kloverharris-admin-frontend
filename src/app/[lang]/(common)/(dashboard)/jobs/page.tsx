"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  TablePagination,
} from "@mui/material";

const ListJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    company_id: "",
    location: "",
    employment_type: "",
    category: "",
    is_active: "",
    sort_by: "created_at",
    sort_direction: "desc",
    page: 0,
    limit: 10,
  });
  const [totalJobs, setTotalJobs] = useState(0);

  const employmentTypes = ["full-time", "part-time", "contract", "internship"];
  const categories = ["Engineering", "Marketing", "Sales", "HR"];
  const companies = [
    { id: 1, name: "Company A" },
    { id: 2, name: "Company B" },
  ]; // Replace with API response

  useEffect(() => {
    fetchJobs();
  }, [filters]);

  const fetchJobs = async () => {
    try {
      const query = new URLSearchParams(filters).toString();
      const response = await fetch(`/api/v1/jobs?${query}`);
      const data = await response.json();
      if (response.ok) {
        setJobs(data.data.jobs);
        setTotalJobs(data.meta.total);
      } else {
        console.error("Failed to fetch jobs:", data);
      }
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value, page: 0 }));
  };

  const handlePageChange = (event, newPage) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  const handleRowsPerPageChange = (event) => {
    setFilters((prev) => ({ ...prev, limit: parseInt(event.target.value, 10), page: 0 }));
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
      Job List
      </Typography>

      <Box display="flex" gap={2} flexWrap="wrap" marginBottom={2}>
        <TextField
          label="Search"
          name="search"
          value={filters.search}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
        />
        <FormControl variant="outlined" size="small">
          <InputLabel>Company</InputLabel>
          <Select
            name="company_id"
            value={filters.company_id}
            onChange={handleFilterChange}
            label="Company"
          >
            <MenuItem value="">All</MenuItem>
            {companies.map((company) => (
              <MenuItem key={company.id} value={company.id}>
                {company.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Location"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          variant="outlined"
          size="small"
        />
        <FormControl variant="outlined" size="small">
          <InputLabel>Employment Type</InputLabel>
          <Select
            name="employment_type"
            value={filters.employment_type}
            onChange={handleFilterChange}
            label="Employment Type"
          >
            <MenuItem value="">All</MenuItem>
            {employmentTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small">
          <InputLabel>Category</InputLabel>
          <Select
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            label="Category"
          >
            <MenuItem value="">All</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small">
          <InputLabel>Status</InputLabel>
          <Select
            name="is_active"
            value={filters.is_active}
            onChange={handleFilterChange}
            label="Status"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value={1}>Active</MenuItem>
            <MenuItem value={0}>Inactive</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Employment Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.slug}>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.company?.name || "N/A"}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.employment_type}</TableCell>
                <TableCell>{job.is_active ? "Active" : "Inactive"}</TableCell>
                <TableCell>{job.created_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={totalJobs}
        page={filters.page}
        onPageChange={handlePageChange}
        rowsPerPage={filters.limit}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Container>
  );
};

export default ListJobs;
