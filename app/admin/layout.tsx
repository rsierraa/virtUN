import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "virtUN Admin",
  description: "virtUN Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
