import { type ReactNode } from "react";

export interface SidebarItemsGroupProps {
  children: ReactNode[];
}

function SidebarItemsGroupSeparator() {
  return <div className="my-1 h-[1px] w-full shrink-0 bg-[#2e2e2e]" />;
}

export function SidebarItemsGroup({ children }: SidebarItemsGroupProps) {
  return (
    <>
      <SidebarItemsGroupSeparator />
      {children}
      <SidebarItemsGroupSeparator />
    </>
  );
}
