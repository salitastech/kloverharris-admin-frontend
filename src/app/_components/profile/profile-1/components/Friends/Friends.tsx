import { Typography, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import { JumboCard } from "@jumbo/components";
import { Span } from "@jumbo/shared";
import { FriendProps, friendsData } from "../../data";

const StyledBadge = styled(Badge)(({ theme }) => ({
  paddingBottom: "75%",
  display: "flex",

  "& .MuiBadge-badge": {
    top: "15px",
    right: "14px",
    boxShadow: `0 0 0 1px ${theme.palette.common.white}`,
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: 8,

  "&::after": {
    content: "''",
    position: "absolute",
    display: "inline-block",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: alpha(theme.palette.common.black, 0.25),
    background: `linear-gradient(${alpha(theme.palette.common.black, 0.1)}, ${alpha(theme.palette.common.black, 0.95)})`,
  },
}));

const StyledBadgeContent = styled("div")({
  position: "absolute",
  left: 10,
  right: 10,
  bottom: 6,
});

const Item = styled("div")({
  width: "33.33%",
  padding: "0 5px",
  marginBottom: "10px",
});

const Friends = () => {
  return (
    <JumboCard
      title={
        <Typography variant={"h4"} mb={0}>
          Friends - 530{" "}
          <Span sx={{ color: "text.secondary", fontSize: 13 }}>
            (27 Mutual)
          </Span>
        </Typography>
      }
      contentWrapper
      contentSx={{ pt: 0 }}
    >
      <Stack direction="row" flexWrap={"wrap"} sx={{ margin: "0 -5px" }}>
        {friendsData.map((item: FriendProps, index: number) => (
          <Item key={index}>
            <StyledBadge
              overlap={"circular"}
              variant={"dot"}
              color={item.color}
            >
              <StyledAvatar
                alt={"Remy Sharp"}
                src={item.profilePic}
                variant={"rounded"}
              />
              <StyledBadgeContent>
                <Typography
                  fontSize={"small"}
                  noWrap
                  variant="body2"
                  color="common.white"
                >
                  {item.name}
                </Typography>
              </StyledBadgeContent>
            </StyledBadge>
          </Item>
        ))}
      </Stack>
    </JumboCard>
  );
};

export { Friends };
