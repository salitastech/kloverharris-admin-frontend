"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
  applicationId: number;
};

const JobApplicationDetail = ({ applicationId }: Props) => {
  const [application, setApplication] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchApplicationDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`job/application/${applicationId}`);
        if (response.ok) {
          const data = await response.json();
          setApplication(data.data);
        } else {
          console.error("Failed to fetch application details");
        }
      } catch (error) {
        console.error("Error:", error);
      }
      setLoading(false);
    };

    fetchApplicationDetails();
  }, [applicationId]);

  if (loading) return <CircularProgress />;

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Job Application Details
      </Typography>

      <Grid container spacing={4}>
        {/* User Profile Section */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Applicant Information</Typography>
              <Box display="flex" alignItems="center" mt={2} mb={3}>
                <Avatar
                  src={application.user?.avatar_url || ""}
                  alt={application.user?.first_name || "Avatar"}
                  sx={{ width: 56, height: 56, marginRight: 2 }}
                />
                <Box>
                  <Typography>
                    {application.user?.first_name} {application.user?.last_name}
                  </Typography>
                  <Typography variant="body2">{application.user?.email}</Typography>
                </Box>
              </Box>
              <Button
                variant="outlined"
              
              >
                View User Profile
              </Button>

              {/* Downloads Section */}
              <Box mt={4}>
                <Typography variant="h6">Documents</Typography>
                {application.uploads.resume_path && (
                  <Button
                    href={application.uploads.resume_path}
                    target="_blank"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                  >
                    Download Resume
                  </Button>
                )}
                {application.uploads.cover_letter && (
                  <Button
                    href={application.uploads.cover_letter}
                    target="_blank"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                  >
                    Download Cover Letter
                  </Button>
                )}
                {application.uploads.additional_documents.length > 0 &&
                  application.uploads.additional_documents.map((doc: string, index: number) => (
                    <Button
                      key={index}
                      href={doc}
                      target="_blank"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2 }}
                    >
                      Download Document {index + 1}
                    </Button>
                  ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Job Details Section */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Job Details</Typography>
              <Typography>
                <strong>Title:</strong> {application.career_job?.title}
              </Typography>
              <Typography>
                <strong>Category:</strong> {application.career_job?.category}
              </Typography>
              <Typography>
                <strong>Job Level:</strong> {application.career_job?.job_level}
              </Typography>
              <Typography>
                <strong>Employment Type:</strong>{" "}
                {application.career_job?.employment_type}
              </Typography>
              <Typography>
                <strong>Location:</strong> {application.career_job?.location}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Description:</strong>
                <br />
                {application.career_job?.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Company Client Section */}
      {application.career_job?.company_client && (
        <Grid item xs={12} sx={{ mt: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Company Information</Typography>
              <Typography>
                <strong>Company Name:</strong>{" "}
                {application.career_job.company_client.company_name}
              </Typography>
              <Typography>
                <strong>Email:</strong>{" "}
                {application.career_job.company_client.email}
              </Typography>
              <Typography>
                <strong>Phone:</strong>{" "}
                {application.career_job.company_client.phone_number}
              </Typography>
              <Typography>
                <strong>Website:</strong>{" "}
                {application.career_job.company_client.website}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )}

      {/* Action Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary">
          Invite to Interview
        </Button>
        <Button variant="contained" color="secondary">
          Share Application
        </Button>
        <Button variant="contained" color="success">
          Send Email to Applicant
        </Button>
      </Box>
    </Box>
  );
};

export default JobApplicationDetail;
