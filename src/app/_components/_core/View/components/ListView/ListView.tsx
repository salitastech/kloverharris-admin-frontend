'use client';
import React from 'react';

interface ListViewProps<T> {
  dataSource: T[];
  renderItem: React.ElementType;
}
function ListView<T>({ dataSource, renderItem }: ListViewProps<T>) {
  let Component = renderItem;
  return (
    <div>
      {dataSource.map((item, index) => (
        <Component item={item} key={index} />
      ))}
    </div>
  );
}

export { ListView };
