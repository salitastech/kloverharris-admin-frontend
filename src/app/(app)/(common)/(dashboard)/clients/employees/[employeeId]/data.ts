export const employeeMockData = {
    id: 1,
    user: {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone_number: "+123456789",
      avatar: "/path/to/avatar.jpg",
      is_active: true,
    },
    company: {
      company_name: "Acme Corporation",
      email: "info@acme.com",
      address: "123 Main St, Springfield",
      phone_number: "+987654321",
    },
    job_title: "Software Engineer",
    department: "Engineering",
    role: "Employee",
    hire_date: "2023-01-15",
    start_date: "2023-01-01",
    end_date: null,
    gender: "Male",
    marital_status: "Single",
    address: {
      address_line_1: "456 Elm St",
      address_line_2: "Suite 300",
      city: "Springfield",
      state: "IL",
      postal_code: "62701",
    },
    emergency_contact: {
      name: "Jane Doe",
      phone: "+123456789",
      relation: "Sister",
    },
    resume: "/path/to/resume.pdf",
    leave_days_left: 10,
    tickets: [
      { id: 1, subject: "Login Issue", status: "Resolved" },
      { id: 2, subject: "Leave Request Error", status: "Pending" },
    ],
    activity_log: [
      { id: 1, activity: "Updated profile details", date: "2024-01-01" },
      { id: 2, activity: "Submitted a leave request", date: "2024-01-02" },
    ],
    leave_management: {
      pending_requests: [
        { id: 1, type: "Annual Leave", start_date: "2024-02-01", end_date: "2024-02-10" },
      ],
      next_leave_date: "2024-02-01",
    },
  };
  