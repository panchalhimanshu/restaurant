import { Outlet } from "@remix-run/react";
import Layout from "~/components/Layout";
import ProtectedRoute from "~/components/ProtectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <Layout>
        <Outlet />
      </Layout>
    </ProtectedRoute>
  );
}
