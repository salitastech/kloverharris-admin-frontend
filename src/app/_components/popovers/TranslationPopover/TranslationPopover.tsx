import { JumboIconButton } from '@jumbo/components/JumboIconButton';
import { Span } from '@jumbo/shared';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import ReactCountryFlag from 'react-country-flag';

const TranslationPopover = () => {
  const pathname = usePathname();
  const router = useRouter();

  const supportedLngs: {
    [key: string]: { name: string; flag: string };
  } = {
    'en-US': { name: 'English', flag: 'GB' },
  };

  // Extract language code from pathname
  const pathSegments = pathname.split('/');
  const currentLanguageCode =
    pathSegments.length > 1 && /^[a-z]{2}-[A-Z]{2}$/.test(pathSegments[1])
      ? pathSegments[1]
      : 'en-US';

  const currentFlag = supportedLngs[currentLanguageCode]?.flag || 'GB';

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    if (/^[a-z]{2}-[A-Z]{2}$/.test(language)) {
      if (
        pathSegments.length > 1 &&
        /^[a-z]{2}-[A-Z]{2}$/.test(pathSegments[1])
      ) {
        pathSegments[1] = language;
      } else {
        pathSegments.splice(1, 0, language);
      }

      const newPathname = pathSegments.join('/');
      router.push(newPathname);
      handleClose();
    }
  };

  return (
    <Span sx={{ mr: 2.5 }}>
      <JumboIconButton onClick={handleClick} elevation={23}>
        <ReactCountryFlag
          countryCode={currentFlag}
          svg
          style={{ width: 20, height: 'auto' }}
        />
      </JumboIconButton>
      <Menu
        anchorEl={anchorEl}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={handleClose}
        sx={{
          mt: 2,
        }}
      >
        {Object.entries(supportedLngs).map(([code, { name, flag }]) => (
          <MenuItem key={code} onClick={() => handleLanguageChange(code)}>
            <ListItemIcon>
              <ReactCountryFlag
                countryCode={flag}
                svg
                style={{ width: 24, height: 16 }}
              />
            </ListItemIcon>
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Menu>
    </Span>
  );
};

export { TranslationPopover };
