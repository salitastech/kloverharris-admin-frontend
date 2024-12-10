import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '@app/_components/_core/SearchGlobal/style';
import SearchIcon from '@mui/icons-material/Search';

const SearchMessages = () => {
  return (
    <Search
      sx={{
        '& .MuiInputBase-root': {
          border: 1,
          borderColor: 'divider',
          backgroundColor: (theme) => theme.palette.background.paper,
        },
      }}
    >
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder='Search messages...'
        inputProps={{ 'aria-label': 'search' }}
        sx={{ boxShadow: (theme) => theme.shadows[0] }}
      />
    </Search>
  );
};

export { SearchMessages };
