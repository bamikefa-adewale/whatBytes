import { SidebarLinks } from "../ui/SidebarLinks";

export const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="w-80 border-r lg:block hidden">
        <nav className="p-4 space-y-2">
          <SidebarLinks />
        </nav>
      </aside>
    </>
  );
};
