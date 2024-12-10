import SearchIcon from '@mui/icons-material/Search';
import { SxProps, Theme } from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from './style';

type SearchGlobalProps = {
  sx?: SxProps<Theme>;
};

const SearchGlobal = ({ sx }: SearchGlobalProps) => {
  return (
    <Search sx={sx ?? {}}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <StyledInputBase
        name='search-globally'
        placeholder='Search anything'
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export { SearchGlobal };
