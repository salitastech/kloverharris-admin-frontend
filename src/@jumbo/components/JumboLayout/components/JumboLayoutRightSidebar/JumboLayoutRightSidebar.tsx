import React from "react";
import { useJumboLayout } from "../../hooks";
import { JumboLayoutDrawer } from "../JumboLayoutSidebar/JumboLayoutDrawer";
import { JumboLayoutRside } from "./JumboLayoutRside";

export function JumboLayoutRightSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  const { rightSidebarOptions } = useJumboLayout();

  if (rightSidebarOptions?.drawer) {
    return <JumboLayoutDrawer>{children}</JumboLayoutDrawer>;
  }
  return <JumboLayoutRside>{children}</JumboLayoutRside>;
}
