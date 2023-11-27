import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "VistUn",
  description: "VistUn",
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
