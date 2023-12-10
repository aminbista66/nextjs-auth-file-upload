"use client";
import { KeyRound, UserRound, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { BASE_URL } from "@/utils/constant";
import axios from "axios";
import toast from "react-hot-toast";
import Cookie from "js-cookie";
// import { redirect } from "next/navigation";

type Props = {};

const Login = (props: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  
  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${BASE_URL}/authuser/login/`,
        credentials
      );
      Cookie.set("access", response.data.access);
      Cookie.set("refresh", response.data.refresh);
      toast.success("user logged in successfully");
      window.location.href = "/profile" 
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
      setCredentials({ username: "", password: "" });
    }
  };

  return (
    <div className="bg-white text-black min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-[30px]">
        <div className=" font-semibold text-2xl flex justify-center items-center">
          Welcome back
        </div>
        <div className="w-full flex flex-col gap-[20px]">
          <div className=" bg-gray-100 rounded-xl h-[60px] w-[300px] flex gap-[20px] items-center px-4">
            <div className="flex justify-center items-center">
              <UserRound className=" text-gray-500" />
            </div>
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent outline-none border-none placeholder:text-gray-500"
              placeholder="Username"
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </div>
          <div className=" bg-gray-100 rounded-xl h-[60px] w-[300px] flex gap-[20px] items-center px-4">
            <div className="flex justify-center items-center">
              <KeyRound className=" text-gray-500" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              className="bg-transparent outline-none border-none placeholder:text-gray-500"
              placeholder="Password"
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <div className="flex justify-center items-center">
              {showPassword ? (
                <Eye
                  className=" text-gray-500 !text-sm"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              ) : (
                <EyeOff
                  className=" text-gray-500 !text-sm"
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              )}
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="text-gray-700 text-sm">
              don't have and account?{" "}
              <span className="text-blue-500 hover:underline">register</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {loading ? (
            <button
              className="bg-gray-300 rounded-xl text-lg text-gray-500 px-16 py-4 cursor-not-allowed"
              disabled
            >
              loading...
            </button>
          ) : (
            <button
              className="bg-gray-800 rounded-xl text-lg text-white px-16 py-4"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
