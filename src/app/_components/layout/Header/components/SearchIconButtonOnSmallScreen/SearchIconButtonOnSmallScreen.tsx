import { useSmallScreen } from '@app/_hooks';
import { JumboIconButton } from '@jumbo/components';
import SearchIcon from '@mui/icons-material/Search';

type SearchIconButtonOnSmallScreenProps = {
  onClick: (value: boolean) => void;
};

function SearchIconButtonOnSmallScreen({
  onClick,
}: SearchIconButtonOnSmallScreenProps) {
  const smallScreen = useSmallScreen();

  if (!smallScreen) return null;

  return (
    <JumboIconButton elevation={23} onClick={() => onClick(true)}>
      <SearchIcon fontSize={'small'} />
    </JumboIconButton>
  );
}

export { SearchIconButtonOnSmallScreen };
