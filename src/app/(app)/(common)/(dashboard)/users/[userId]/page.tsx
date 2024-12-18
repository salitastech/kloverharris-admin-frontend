"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";

const UserProfileDetail = ({ user }) => {
  const [manageRolesModalOpen, setManageRolesModalOpen] = useState(false);

  const handleManageRolesClick = () => {
    setManageRolesModalOpen(true);
  };

  const handleModalClose = () => {
    setManageRolesModalOpen(false);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Profile: {user.first_name} {user.last_name}
      </Typography>

      <Grid container spacing={2}>
        {/* User Info */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                  sx={{ width: 100, height: 100, margin: "0 auto" }}
                />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  {user.first_name} {user.last_name}
                </Typography>
                <Typography>{user.email}</Typography>
                <Typography>{user.phone_number}</Typography>
              </Box>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mr: 1 }}
                  onClick={() => console.log("View Employee Profile")}
                >
                  View Employee Profile
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  sx={{ mr: 1 }}
                  onClick={() => console.log("Deactivate User")}
                >
                  Deactivate User
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => console.log("Message User")}
                >
                  Message User
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Summaries */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6">Summaries</Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography>Total Applications</Typography>
                  <Typography variant="h5">{user.general_summary.total_applications}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Total Tickets</Typography>
                  <Typography variant="h5">{user.general_summary.total_tickets}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Total Interviews</Typography>
                  <Typography variant="h5">{user.general_summary.total_interviews}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Activities and Notifications */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Recent Activities</Typography>
              <List>
                {user.last_5_activities.map((activity, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={activity.action}
                      secondary={
                        activity.description + " on " + activity.created_at
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Button
                variant="text"
                onClick={() => console.log("View All Activities")}
              >
                View All
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Recent Notifications</Typography>
              <List>
                {user.last_5_notifications.map((notification, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={notification.title}
                      secondary={notification.message}
                    />
                  </ListItem>
                ))}
              </List>
              <Button
                variant="text"
                onClick={() => console.log("View All Notifications")}
              >
                View All
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Employee Details */}
        {user.is_employee && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6">Employee Details</Typography>
                <Typography>Job Title: {user.employee_details.job_title}</Typography>
                <Typography>Department: {user.employee_details.department}</Typography>
                <Typography>
                  Company: {user.employee_details.company_client}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => console.log("View Company Client Profile")}
                >
                  View Company Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>
        )}

        {/* Actions */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => console.log("Download as PDF")}
          >
            Download as PDF
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mx: 2 }}
            onClick={handleManageRolesClick}
          >
            Manage Roles & Permissions
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => console.log("Request Resume")}
          >
            Request Resume
          </Button>
        </Grid>
      </Grid>

      {/* Manage Roles Modal */}
      <Dialog
        open={manageRolesModalOpen}
        onClose={handleModalClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Manage Roles & Permissions</DialogTitle>
        <DialogContent>
          <TextField
            label="Add Role"
            fullWidth
            sx={{ mt: 2 }}
            placeholder="Enter role"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Close
          </Button>
          <Button onClick={() => console.log("Save Roles")} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default UserProfileDetail;
