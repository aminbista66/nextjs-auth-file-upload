"use client";
import React from "react";
import toast from "react-hot-toast";
import FileUpload from "@/components/FileUpload";

type Props = {
  params: any;
};

const Profile = ({ params }: Props) => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <FileUpload/>
    </div>
  );
};

export default Profile;
