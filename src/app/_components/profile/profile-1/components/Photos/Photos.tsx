import { JumboCard } from '@jumbo/components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  CardActions,
  CardContent,
  ImageList,
  ImageListItem,
  Link,
} from '@mui/material';
import Image from 'next/image';

interface Item {
  img: string;
  title?: string;
}

const itemData: Item[] = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
  },
];

const Photos = () => {
  return (
    <JumboCard title={'Photos'}>
      <CardContent sx={{ py: 0 }}>
        <ImageList
          sx={{ width: '100%', m: 0, borderRadius: 2.5 }}
          cols={3}
          rowHeight={'auto'}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <Image
                src={`${item.img}?w=120&h=120&fit=crop&auto=format`}
                objectFit='crop'
                width={120}
                height={120}
                alt={item.title || 'Photo'}
                loading='lazy'
                className='MuiImageListItem-img'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
      <CardActions sx={{ py: 2.5 }}>
        <Link href='#' underline='none'>
          Go to gallery <ArrowForwardIcon sx={{ verticalAlign: 'middle' }} />
        </Link>
      </CardActions>
    </JumboCard>
  );
};

export { Photos };
