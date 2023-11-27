"use client";
import Link from "next/link";
import Container from "../Container";
import { MdDashboard, MdLibraryAdd } from "react-icons/md";
import AdminNavItem from "./AdminNavItem";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const pathname = usePathname();
  return (
    <div className="w-full shadow-sm top-20 border-b-[1px] pt-4">
      <Container>
        <div className="flex flex-row items-center justify-between md:justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
          <Link href={"/admin"}>
            <AdminNavItem
              icon={MdDashboard}
              label="Summary"
              selected={pathname === "/admin"}
            />
          </Link>
          <Link href={"/admin/add-products"}>
            <AdminNavItem
              icon={MdLibraryAdd}
              label="Crear Productos"
              selected={pathname === "/admin/add-products"}
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
