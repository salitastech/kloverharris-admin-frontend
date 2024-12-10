'use client';
import { JumboConfigContextType } from '@jumbo/types';
import React from 'react';
import { JumboConfigContext } from './JumboConfigContext';

type JumboConfigProviderProps = JumboConfigContextType & {
  children: React.ReactNode;
};

function JumboConfigProvider({ children, ...props }: JumboConfigProviderProps) {
  return (
    <JumboConfigContext.Provider value={{ ...props }}>
      {children}
    </JumboConfigContext.Provider>
  );
}

export { JumboConfigProvider };
