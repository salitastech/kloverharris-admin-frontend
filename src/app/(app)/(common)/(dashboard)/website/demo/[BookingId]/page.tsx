"use client";

import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Typography,
    Card,
    CardContent,
    Grid,
    CircularProgress,
} from "@mui/material";
import { useRouter } from "next/navigation";

type BookingDetail = {
    id: number;
    first_name: string;
    last_name: string;
    workmail: string;
    phone_number: string;
    create_account: boolean;
    services_interested_in: string[];
    role: string;
    employee_headcount: string;
    country: string;
    additional_details: string;
    demo_completed: boolean;
    user: {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        avatar: string;
    } | null;
    created_at: string;
    updated_at: string;
};

const DemoRequestBookingDetail = ({ bookingId }: { bookingId: number }) => {
    const [booking, setBooking] = useState<BookingDetail | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const fetchBookingDetails = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/v1/demo-bookings/${bookingId}`);
            if (response.ok) {
                const data = await response.json();
                setBooking(data.data);
            } else {
                console.error("Failed to fetch booking details");
            }
        } catch (error) {
            console.error("Error fetching booking details:", error);
        }
        setLoading(false);
    };

    const markAsCompleted = async () => {
        try {
            const response = await fetch(`/api/v1/demo-bookings/${bookingId}/complete`, {
                method: "POST",
            });
            if (response.ok) {
                alert("Demo marked as completed");
                fetchBookingDetails(); // Refresh the booking details
            } else {
                console.error("Failed to mark demo as completed");
            }
        } catch (error) {
            console.error("Error marking demo as completed:", error);
        }
    };

    const deleteBooking = async () => {
        if (confirm("Are you sure you want to delete this booking request?")) {
            try {
                const response = await fetch(`/api/v1/demo-bookings/${bookingId}`, {
                    method: "DELETE",
                });
                if (response.ok) {
                    alert("Booking request deleted successfully");
                    router.push("/demo-bookings");
                } else {
                    console.error("Failed to delete booking request");
                }
            } catch (error) {
                console.error("Error deleting booking request:", error);
            }
        }
    };

    useEffect(() => {
        fetchBookingDetails();
    }, []);

    if (loading || !booking) {
        return <CircularProgress />;
    }

    return (
        <Box>
            <Typography variant="h4" gutterBottom>
                Demo Booking Request Details
            </Typography>

            <Card sx={{ mb: 4 }}>
                <CardContent>
                    <Typography variant="h6">Request Details</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography>
                                <strong>Name:</strong> {booking.first_name} {booking.last_name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography>
                                <strong>Email:</strong> {booking.workmail}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography>
                                <strong>Phone:</strong> {booking.phone_number || "N/A"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography>
                                <strong>Country:</strong> {booking.country || "N/A"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography>
                                <strong>Role:</strong> {booking.role || "N/A"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography>
                                <strong>Employee Headcount:</strong> {booking.employee_headcount || "N/A"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                <strong>Services Interested In:</strong>{" "}
                                {booking.services_interested_in?.join(", ") || "N/A"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                <strong>Additional Details:</strong>{" "}
                                {booking.additional_details || "N/A"}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                <strong>Demo Completed:</strong>{" "}
                                {booking.demo_completed ? "Yes" : "No"}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {booking.user && (
                <Card sx={{ mb: 4 }}>
                    <CardContent>
                        <Typography variant="h6">User Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography>
                                    <strong>Name:</strong> {booking.user.first_name} {booking.user.last_name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>
                                    <strong>Email:</strong> {booking.user.email}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <img
                                    src={booking.user.avatar || "/default-avatar.png"}
                                    alt="Avatar"
                                    style={{ width: "100px", borderRadius: "50%" }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                >
                                    View User Profile
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )}

            <Box display="flex" gap={2}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={markAsCompleted}
                    disabled={booking.demo_completed}
                >
                    Mark as Completed
                </Button>
                <Button variant="outlined" color="error" onClick={deleteBooking}>
                    Delete Booking
                </Button>
            </Box>
        </Box>
    );
};

export default DemoRequestBookingDetail;
