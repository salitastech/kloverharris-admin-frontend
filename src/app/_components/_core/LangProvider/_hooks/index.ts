import { useContext } from 'react';
import { LangContext } from '../LangContext';

export function useTranslation() {
  return useContext(LangContext);
}
