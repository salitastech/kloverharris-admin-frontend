'use client';
import { Dictionary } from '@app/_dictionaries/type';
import React from 'react';

const defaultLangContext: Dictionary = {};
const LangContext = React.createContext(defaultLangContext);

export { LangContext };
