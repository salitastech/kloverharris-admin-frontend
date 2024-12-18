import React from 'react';

import { ASSET_AVATARS } from '@app/_utilities/constants/paths';
import { getAssetPath } from '@app/_utilities/helpers';
import { JumboCard } from '@jumbo/components';
import { LocationCityOutlined } from '@mui/icons-material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import {
  Avatar,
  AvatarGroup,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import Link from 'next/link';
import type { ICompany } from '../../../../../../interfaces';

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 24,
  height: 48,
  width: 48,
  borderRadius: '50%',
  minWidth: 42,
  marginRight: 16,
  padding: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'center',
  border: `solid 1px ${theme.palette.divider}`,
}));

const About = (company?: ICompany) => {
  const [value, setValue] = React.useState<string>('1');

  const handleChange = ({}, newValue: string) => {
    setValue(newValue);
  };

  return (
    <JumboCard
      title={'About'}
      // action={
      //   <TabContext value={value}>
      //     <Div
      //       sx={{
      //         marginTop: -2.25,
      //         marginBottom: -2.5,
      //         "& .MuiTab-root": {
      //           py: 2.5,
      //         },
      //       }}
      //     >
      //       <TabList aria-label="lab API tabs example" onChange={handleChange}>
      //         <Tab label="Overview" value="1" />
      //         <Tab label="Work" value="2" />
      //         <Tab label="Education" value="3" />
      //       </TabList>
      //     </Div>
      //   </TabContext>
      // }
      headerSx={{ borderBottom: 1, borderColor: 'divider' }}
      contentWrapper
    >
      <List
        disablePadding
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: (theme) => theme.spacing(0, -2),
        }}
      >
        <ListItem sx={{ width: { xs: '100%', sm: '50%', xl: '33.33%' } }}>
          <StyledListItemIcon>
            <ApartmentIcon fontSize={'inherit'} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              <Typography
                fontSize={'12px'}
                variant='h6'
                color='text.secondary'
                mb={0.5}
              >
                Industry
              </Typography>
            }
            secondary={
              <Typography variant='body1' color='text.primary'>
                {company?.industry}
              </Typography>
            }
          />
        </ListItem>

        <ListItem
          sx={{
            width: { xs: '100%', sm: '50%', xl: '33.33%' },
          }}
        >
          <StyledListItemIcon>
            <LocationCityOutlined fontSize={'inherit'} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              <Typography
                fontSize={'12px'}
                variant='h6'
                color='text.secondary'
                mb={0.5}
              >
                Address
              </Typography>
            }
            secondary={
              <Typography variant='body1' color='text.primary'>
                {company?.address + ', '} {company?.country?.name}
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          sx={{
            width: { xs: '100%', xl: '66.67%' },
          }}
        >
          <StyledListItemIcon>
            <GroupsOutlinedIcon fontSize={'inherit'} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              <Typography
                fontSize={'12px'}
                variant='h6'
                color='text.secondary'
                mb={0.5}
              >
                {company?.meta?.total_number_of_employees} Employees
              </Typography>
            }
            secondary={
              <Typography component={'div'} variant={'body1'}>
                <Stack direction={'row'} flexWrap={'wrap'} sx={{}}>
                  <Link
                    href={`/clients/${company?.id}/employees`}
                    tw='!cursor-pointer'
                  >
                    <AvatarGroup
                      max={3}
                      sx={{
                        '.MuiAvatar-root': {
                          height: 32,
                          width: 32,
                          fontSize: 13,
                          background: (theme) => theme.palette.grey[600],
                        },
                      }}
                    >
                      {Array.from({
                        length:
                          Number(company?.meta?.total_number_of_employees) || 4,
                      })
                        .map((_, index) => (
                          <Avatar
                            alt='Remy Sharp'
                            src={getAssetPath(
                              `${ASSET_AVATARS}/avatar${index + 2}.jpg`,
                              '32x32'
                            )}
                          />
                        ))}
                    </AvatarGroup>
                  </Link>
                </Stack>
              </Typography>
            }
          />
        </ListItem>
      </List>
    </JumboCard>
  );
};

export { About };
