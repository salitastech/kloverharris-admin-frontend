import { Div } from '@jumbo/shared';
import { SxProps, Theme } from '@mui/material';
import Link from '@mui/material/Link';

type LogoProps = {
  mini?: boolean;
  mode: 'light' | 'semi-dark' | 'dark';
  sx?: SxProps<Theme>;
};
const Logo = ({ mini = false, mode = 'light', sx }: LogoProps) => {
  return (
    <Div sx={{ display: 'inline-flex', ...sx }}>
      <Link href={'/'}>
        Kloverharris Logo
        {/* {!mini ? (
          <Image
            src={
              mode === 'light'
                ? `/assets/images/logo.png`
                : `/assets/images/logo-white.png`
            }
            alt=''
            width={110}
            height={35}
          />
        ) : (
          <Image
            src={
              mode === 'light'
                ? `/assets/images/logo-short.png`
                : `/assets/images/logo-short-white.png`
            }
            alt=''
            width={35}
            height={35}
          />
        )} */}
      </Link>
    </Div>
  );
};

export { Logo };
