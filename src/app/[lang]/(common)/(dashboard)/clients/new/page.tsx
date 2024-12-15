"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Container,
  Paper,
  MenuItem,
} from "@mui/material";

const countries = [
  { id: 1, name: "United States" },
  { id: 2, name: "Canada" },
  { id: 3, name: "Nigeria" },
]; // Replace with your countries API response

const AddNewClientPage = () => {
  const [formData, setFormData] = useState({
    company_name: "",
    email: "",
    phone_number: "",
    registration_number: "",
    website: "",
    address: "",
    city: "",
    region: "",
    postal_code: "",
    country_id: "",
    admin: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      job_title: "Company Admin",
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name.startsWith("admin.")) {
      const key = name.split(".")[1];
      setFormData((prevState) => ({
        ...prevState,
        admin: { ...prevState.admin, [key]: value },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/v1/company-client/profile/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Company client created successfully!");
        setFormData({
          company_name: "",
          email: "",
          phone_number: "",
          registration_number: "",
          website: "",
          address: "",
          city: "",
          region: "",
          postal_code: "",
          country_id: "",
          admin: {
            first_name: "",
            last_name: "",
            email: "",
            phone_number: "",
            job_title: "Company Admin",
          },
        });
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("Failed to create company client. Please check your inputs.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 4, mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Add New Company Client
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Company Details */}
            <Grid item xs={12}>
              <Typography variant="h6">Company Information</Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Company Name"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                type="email"
                label="Company Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Registration Number"
                name="registration_number"
                value={formData.registration_number}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                multiline
                rows={2}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="State/Region"
                name="region"
                value={formData.region}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Postal Code"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Country"
                name="country_id"
                value={formData.country_id}
                onChange={handleChange}
                variant="outlined"
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Admin Details */}
            <Grid item xs={12}>
              <Typography variant="h6">Admin Information</Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="First Name"
                name="admin.first_name"
                value={formData.admin.first_name}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Last Name"
                name="admin.last_name"
                value={formData.admin.last_name}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                type="email"
                label="Admin Email"
                name="admin.email"
                value={formData.admin.email}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Admin Phone Number"
                name="admin.phone_number"
                value={formData.admin.phone_number}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Job Title"
                name="admin.job_title"
                value={formData.admin.job_title}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ textAlign: "right" }}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AddNewClientPage;
