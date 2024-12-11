import React from 'react';
import { recentActivities } from '../../data';
import { RecentActivityItem } from '../RecentActivityItem';

const RecentActivitiesList = () => {
  return (
    <React.Fragment>
      {recentActivities.map((item, index) => (
        <RecentActivityItem item={item} key={index} />
      ))}
    </React.Fragment>
  );
};

export { RecentActivitiesList };
