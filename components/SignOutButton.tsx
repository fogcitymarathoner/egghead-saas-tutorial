"use client";

import { signOutAction } from "@/actions/users";
import { useTransition } from "react";
function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  const handleClickSignOutButton = () => {
    startTransition(async () => {
      const { errorMessage } = await signOutAction();
      if (!errorMessage) {
        console.log("Successfully signed out");
      } else {
        console.log('Something bad happened in the signout compoent')
        console.log(errorMessage);
      }
    });
  };

  return (
    <button
      className="bg-black border-white border w-48 py-2 rounded-md hover:bg-emerald-950"
      onClick={() => handleClickSignOutButton()}
      disabled={isPending}
    >
      {isPending ? "Signing out..." : "Sign Out"}
    </button>
  );
}

export default SignOutButton;
