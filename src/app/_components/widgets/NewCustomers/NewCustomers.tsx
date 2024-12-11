'use client';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { Customer } from './components';

const NewCustomers = ({title}:{title:React.ReactNode}) => {
  return (
    <JumboCard
      title={title}
      contentWrapper
      contentSx={{ px: 3, pb: 3, pt: 2 }}
    >
      <Div sx={{ display: 'flex', pb: '2px' }}>
        <Customer />
      </Div>
    </JumboCard>
  );
};

export { NewCustomers };
