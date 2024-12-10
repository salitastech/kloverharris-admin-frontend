import { NavbarGroup, NavbarItem } from '@jumbo/types';
import { isNavGroup, isNavItem, isNavSection } from '@jumbo/utilities/helpers';
import { JumboNavGroup, JumboNavItem } from '..';
import { JumboNavSection } from '../JumboNavSection';

type JumboNavIdentifierProps = {
  item: NavbarGroup | NavbarItem;
  isNested?: boolean;
  isFirstSection?: boolean;
};

function JumboNavIdentifier({
  item,
  isNested = false,
  isFirstSection = false,
}: JumboNavIdentifierProps) {
  
  if (isNavGroup(item)) {
    return <JumboNavGroup item={item} />;
  } else if (isNavSection(item)) {
    return <JumboNavSection item={item} isFirstSection={isFirstSection} />;
  } else if (isNavItem(item)) {
    return <JumboNavItem item={item} isNested={isNested} />;
  }

  return null;
}

export { JumboNavIdentifier };
