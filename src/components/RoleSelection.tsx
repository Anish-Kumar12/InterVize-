import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

export default function RoleSelection() {
  const router = useRouter();
  const { user } = useUser();
  const updateUserRole = useMutation(api.users.updateUserRole);

  const handleRoleSelection = async (role: "candidate" | "interviewer") => {
    if (!user) return;
    await updateUserRole({ clerkId: user.id, role });
    router.refresh();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Select Your Role</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">Please select whether you are a candidate or an interviewer.</p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => handleRoleSelection("candidate")}>Candidate</Button>
          <Button onClick={() => handleRoleSelection("interviewer")}>Interviewer</Button>
        </div>
      </div>
    </div>
  );
}