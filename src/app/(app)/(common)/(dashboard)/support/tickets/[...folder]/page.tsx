import { MailDetail, MailsList } from '@app/_components/apps/mails';

const MailAppPage = ({ params: { folder } }: { params: any }) => {
  if (folder[0] === 'messages') return <MailDetail />;
  return <MailsList />;
};

export default MailAppPage;
