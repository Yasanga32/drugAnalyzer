import React from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const ProfilePage = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <p className="text-gray-500">This page is currently under development.</p>
      </div>
    </DefaultLayout>
  );
};

export default ProfilePage;
