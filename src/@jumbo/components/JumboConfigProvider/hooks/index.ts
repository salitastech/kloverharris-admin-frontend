import React from 'react';
import { JumboConfigContext } from '../JumboConfigContext';

function useJumboConfig() {
  return React.useContext(JumboConfigContext);
}

export { useJumboConfig };
