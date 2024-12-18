"use client";

import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    MenuItem,
    Switch,
    FormControlLabel,
    IconButton,
} from "@mui/material";
import { AddCircle } from "@mui/icons-material";
const companyClients = [
    { id: 1, name: "Acme Corporation" },
    { id: 2, name: "Tech Innovations" },
    { id: 3, name: "Global Solutions" },
]; // Replace with API data
const jobLevels = ["Entry-Level", "Mid-Level", "Senior-Level"];
const employmentTypes = ["full-time", "part-time", "contract", "internship"];
const salaryCurrencies = ["USD", "EUR", "NGN"]; // Example currencies

const CreateNewJob = () => {
    const [formData, setFormData] = useState({
        company_id: "",
        uploader_id: "", // Replace with authenticated user's ID
        title: "",
        category: "",
        department: "",
        job_level: "",
        employment_type: "",
        description: "",
        responsibilities: "",
        qualifications: "",
        additional_info: "",
        location: "",
        city: "",
        state: "",
        country: "",
        is_remote: false,
        min_salary: "",
        max_salary: "",
        salary_currency: "",
        is_active: true,
        is_featured: false,
        is_local: false,
        application_deadline: "",
        hiring_process: [],
        tags: [],
    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };
    const handleHiringProcessChange = (index: number, value: string) => {
        const newProcess = [...formData.hiring_process];
        newProcess[index].description = value;
        setFormData({ ...formData, hiring_process: newProcess });
    };

    const addHiringProcessStep = () => {
        setFormData((prevState) => ({
            ...prevState,
            hiring_process: [...prevState.hiring_process, { step: prevState.hiring_process.length + 1, description: "" }],
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
    };

    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: 4, mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create New Job
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                select
                                label="Company"
                                name="company_id"
                                value={formData.company_id}
                                onChange={handleChange}
                                variant="outlined"
                                required
                            >
                                {companyClients.map((company) => (
                                    <MenuItem key={company.id} value={company.id}>
                                        {company.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        {/* Job Details */}
                        <Grid item xs={12}>
                            <Typography variant="h6">Job Information</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Job Title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Category"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                select
                                label="Job Level"
                                name="job_level"
                                value={formData.job_level}
                                onChange={handleChange}
                                variant="outlined"
                            >
                                {jobLevels.map((level) => (
                                    <MenuItem key={level} value={level}>
                                        {level}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                select
                                label="Employment Type"
                                name="employment_type"
                                value={formData.employment_type}
                                onChange={handleChange}
                                variant="outlined"
                            >
                                {employmentTypes.map((type) => (
                                    <MenuItem key={type} value={type}>
                                        {type}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>

                        {/* Description */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Responsibilities"
                                name="responsibilities"
                                value={formData.responsibilities}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Qualifications"
                                name="qualifications"
                                value={formData.qualifications}
                                onChange={handleChange}
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                        </Grid>

                        {/* Location */}
                        <Grid item xs={12}>
                            <Typography variant="h6">Location Information</Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="City"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="State"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={formData.is_remote}
                                        onChange={handleChange}
                                        name="is_remote"
                                    />
                                }
                                label="Remote Job"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={formData.is_featured}
                                        onChange={handleChange}
                                        name="is_featured"
                                    />
                                }
                                label="Featured on Website"
                            />
                        </Grid>


                        {/* Salary */}
                        <Grid item xs={12}>
                            <Typography variant="h6">Compensation</Typography>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Minimum Salary"
                                name="min_salary"
                                type="number"
                                value={formData.min_salary}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Maximum Salary"
                                name="max_salary"
                                type="number"
                                value={formData.max_salary}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                select
                                label="Salary Currency"
                                name="salary_currency"
                                value={formData.salary_currency}
                                onChange={handleChange}
                                variant="outlined"
                            >
                                {salaryCurrencies.map((currency) => (
                                    <MenuItem key={currency} value={currency}>
                                        {currency}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                          {/* Hiring Process */}
            <Grid item xs={12}>
              <Typography variant="h6">Hiring Process</Typography>
              {formData.hiring_process.map((step, index) => (
                <Box key={index} display="flex" alignItems="center" mb={1}>
                  <Typography variant="body1" sx={{ mr: 2 }}>
                    Step {step.step}:
                  </Typography>
                  <TextField
                    fullWidth
                    value={step.description}
                    onChange={(e) => handleHiringProcessChange(index, e.target.value)}
                    variant="outlined"
                  />
                </Box>
              ))}
              <IconButton onClick={addHiringProcessStep}>
                <AddCircle />
              </IconButton>
            </Grid>
                        {/* Application Deadline */}
                        <Grid item xs={12}>
                            {/* <DatePicker
                                label="Application Deadline"
                                value={formData.application_deadline}
                                onChange={(newValue) =>
                                    setFormData({ ...formData, application_deadline: newValue })
                                }
                                renderInput={(params) => <TextField {...params} fullWidth />}
                            /> */}
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={formData.is_featured}
                                            onChange={handleChange}
                                            name="is_active"
                                        />
                                    }
                                    label="Publish Now"
                                />
                            </Grid>
                            {/* Submit Button */}
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

export default CreateNewJob;
