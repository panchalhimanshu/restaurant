import { redirect } from "@remix-run/node";
import { isAuthenticated } from '~/utils/auth';

export const loader = () => {
  if (isAuthenticated()) {
    return redirect("/dashboard");
  }
  return redirect("/login");
};

export default function Index() {
  return null;
}