'use client';
import type { PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

const RecoilContextProvider = ({ children }: PropsWithChildren) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContextProvider;
