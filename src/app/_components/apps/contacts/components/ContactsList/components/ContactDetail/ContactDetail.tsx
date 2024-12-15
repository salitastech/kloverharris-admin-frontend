import CloseIcon from "@mui/icons-material/Close";
import {
  alpha,
  Avatar,
  ListItem,
  IconButton,
  ListItemAvatar,
  CardHeader,
  ListItemText,
  List,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Div } from "@jumbo/shared";
import { LabelChips } from "../../../../../common_components/LabelChips";
import { ContactProps } from "@app/_components/apps/_types/ContactTypes";

const ContactDetail = ({
  contact,
  onClose,
}: {
  contact: ContactProps;
  onClose: () => void;
}) => {
  return (
    <Div sx={{ m: (theme) => theme.spacing(-2.5, -3) }}>
      <CardHeader
        title={contact?.name}
        subheader={contact?.designation}
        avatar={<Avatar src={contact?.profile_pic} />}
        action={
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        }
      />
      <List disablePadding>
        <ListItem sx={{ px: 4 }}>
          <ListItemAvatar sx={{ minWidth: 66 }}>
            <Avatar
              variant="rounded"
              sx={{
                height: 48,
                width: 48,
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.15),
              }}
            >
              <CorporateFareIcon sx={{ color: "primary.light" }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant={"body1"} color={"text.secondary"} mb={0.5}>
                Company
              </Typography>
            }
            secondary={
              <Typography variant={"h5"} mb={0}>
                {contact?.company}
              </Typography>
            }
          />
        </ListItem>
        <Divider component={"li"} />
        <ListItem sx={{ px: 4 }}>
          <ListItemAvatar sx={{ minWidth: 66 }}>
            <Avatar
              variant="rounded"
              sx={{
                height: 48,
                width: 48,
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.15),
              }}
            >
              <MailOutlineIcon sx={{ color: "primary.light" }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant={"body1"} color={"text.secondary"} mb={0.5}>
                Email
              </Typography>
            }
            secondary={
              <Typography variant={"h5"} mb={0}>
                {contact?.email}
              </Typography>
            }
          />
        </ListItem>
        <Divider component={"li"} />
        <ListItem sx={{ px: 4 }}>
          <ListItemAvatar sx={{ minWidth: 66 }}>
            <Avatar
              variant="rounded"
              sx={{
                height: 48,
                width: 48,
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.15),
              }}
            >
              <LabelOutlinedIcon sx={{ color: "primary.light" }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant={"body1"} color={"text.secondary"} mb={0.5}>
                Labels
              </Typography>
            }
            secondary={
              <Typography component={"div"}>
                <LabelChips
                  spacing={1}
                  size={"small"}
                  labelsArray={contact?.labels}
                  mapKeys={{ label: "name", color: "color" }}
                />
              </Typography>
            }
          />
        </ListItem>
        <Divider component={"li"} />
      </List>
      <Stack spacing={1} direction={"row"} sx={{ px: 4, py: 2 }}>
        <IconButton
          size={"large"}
          sx={{
            backgroundColor: (theme) => theme.palette.grey[400],
            color: "common.white",

            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          <ForumOutlinedIcon fontSize={"medium"} color={"inherit"} />
        </IconButton>
        <IconButton
          size={"large"}
          sx={{
            backgroundColor: (theme) => theme.palette.grey[400],
            color: "common.white",

            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          <LocalPhoneIcon fontSize={"medium"} color={"inherit"} />
        </IconButton>
      </Stack>
    </Div>
  );
};

export { ContactDetail };
