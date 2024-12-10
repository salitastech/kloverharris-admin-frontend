import { Dictionary } from '@app/_dictionaries/type';
import 'server-only';

interface LocaleDictionary {
  [x: string]: () => Dictionary;
}

const dictionaries: LocaleDictionary = {
  'en-US': () =>
    import('@app/_dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  return dictionaries[locale]();
};
