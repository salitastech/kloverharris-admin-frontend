'use client';
import { Avatar, AvatarGroup } from '@mui/material';
import { customers } from '../../data';

const Customer = () => {
  return (
    <AvatarGroup
      max={4}
      sx={{
        '& .MuiAvatar-root': {
          width: 48,
          height: 48,
        },
      }}
    >
      {customers.map((customer, index) => (
        <Avatar alt={customer.title} src={customer.profilePic} key={index} />
      ))}
    </AvatarGroup>
  );
};

export { Customer };
