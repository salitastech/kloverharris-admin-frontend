import React from "react";

import {
  Avatar,
  AvatarGroup,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Tab,
  Typography,
  styled,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { Div } from "@jumbo/shared";
import { JumboCard } from "@jumbo/components";
import { getAssetPath } from "@app/_utilities/helpers";
import { ASSET_AVATARS } from "@app/_utilities/constants/paths";
import { TabContext, TabList } from "@mui/lab";

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 24,
  height: 48,
  width: 48,
  borderRadius: "50%",
  minWidth: 42,
  marginRight: 16,
  padding: theme.spacing(1),
  alignItems: "center",
  justifyContent: "center",
  border: `solid 1px ${theme.palette.divider}`,
}));

const About = () => {
  const [value, setValue] = React.useState<string>("1");

  const handleChange = ({}, newValue: string) => {
    setValue(newValue);
  };

  return (
    <JumboCard
      title={"About"}
      action={
        <TabContext value={value}>
          <Div
            sx={{
              marginTop: -2.25,
              marginBottom: -2.5,
              "& .MuiTab-root": {
                py: 2.5,
              },
            }}
          >
            <TabList aria-label="lab API tabs example" onChange={handleChange}>
              <Tab label="Overview" value="1" />
              <Tab label="Work" value="2" />
              <Tab label="Education" value="3" />
            </TabList>
          </Div>
        </TabContext>
      }
      headerSx={{
        borderBottom: 1,
        borderColor: "divider",
      }}
      contentWrapper
    >
      <List
        disablePadding
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: (theme) => theme.spacing(0, -2),
        }}
      >
        <ListItem
          sx={{
            width: { xs: "100%", sm: "50%", xl: "33.33%" },
          }}
        >
          <StyledListItemIcon>
            <ApartmentIcon fontSize={"inherit"} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              <Typography
                fontSize={"12px"}
                variant="h6"
                color="text.secondary"
                mb={0.5}
              >
                Works at
              </Typography>
            }
            secondary={
              <Typography variant="body1" color="text.primary">
                G-axon Tech Pvt. Ltd.
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          sx={{
            width: { xs: "100%", sm: "50%", xl: "33.33%" },
          }}
        >
          <StyledListItemIcon>
            <CakeOutlinedIcon fontSize={"inherit"} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              <Typography
                fontSize={"12px"}
                variant="h6"
                color="text.secondary"
                mb={0.5}
              >
                Birthday
              </Typography>
            }
            secondary={
              <Typography variant="body1" color="text.primary">
                Oct 25, 1984
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          sx={{
            width: { xs: "100%", sm: "50%", xl: "33.33%" },
          }}
        >
          <StyledListItemIcon>
            <SchoolOutlinedIcon fontSize={"inherit"} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              <Typography
                fontSize={"12px"}
                variant="h6"
                color="text.secondary"
                mb={0.5}
              >
                Went to
              </Typography>
            }
            secondary={
              <Typography variant="body1" color="text.primary">
                Oxford University
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          sx={{
            width: { xs: "100%", sm: "50%", xl: "33.33%" },
          }}
        >
          <StyledListItemIcon>
            <CottageOutlinedIcon fontSize={"inherit"} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              <Typography
                fontSize={"12px"}
                variant="h6"
                color="text.secondary"
                mb={0.5}
              >
                Lives in London
              </Typography>
            }
            secondary={
              <Typography variant="body1" color="text.primary">
                From Switzerland
              </Typography>
            }
          />
        </ListItem>
        <ListItem
          sx={{
            width: { xs: "100%", xl: "66.67%" },
          }}
        >
          <StyledListItemIcon>
            <GroupsOutlinedIcon fontSize={"inherit"} />
          </StyledListItemIcon>
          <ListItemText
            primary={
              <Typography
                fontSize={"12px"}
                variant="h6"
                color="text.secondary"
                mb={0.5}
              >
                4 Family Members
              </Typography>
            }
            secondary={
              <Typography component={"div"} variant={"body1"}>
                <Stack direction={"row"} flexWrap={"wrap"} sx={{}}>
                  <AvatarGroup
                    max={5}
                    sx={{
                      ".MuiAvatar-root": {
                        height: 32,
                        width: 32,
                        fontSize: 13,
                        background: (theme) => theme.palette.grey[600],
                      },
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={getAssetPath(
                        `${ASSET_AVATARS}/avatar6.jpg`,
                        "32x32"
                      )}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src={getAssetPath(
                        `${ASSET_AVATARS}/avatar5.jpg`,
                        "32x32"
                      )}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src={getAssetPath(
                        `${ASSET_AVATARS}/avatar3.jpg`,
                        "32x32"
                      )}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src={getAssetPath(
                        `${ASSET_AVATARS}/avatar4.jpg`,
                        "32x32"
                      )}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src={getAssetPath(
                        `${ASSET_AVATARS}/avatar7.jpg`,
                        "32x32"
                      )}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src={getAssetPath(
                        `${ASSET_AVATARS}/avatar8.jpg`,
                        "32x32"
                      )}
                    />
                  </AvatarGroup>
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
