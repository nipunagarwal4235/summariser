import { AppContext } from "@/context/AppContext";
import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";

export default function EmailVerify() {
  axios.defaults.withCredentials = true;
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const { backendUrl, isLoggedIn, userData, getUserData } =
    useContext(AppContext);

  const navigate = useNavigate();

  const handleInput = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    if (
      e.currentTarget.value.length > 0 &&
      index < inputRefs.current.length - 1
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      e.currentTarget.value.length === 0 &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const otpArray = inputRefs.current.map((e) => e?.value);
      const otp = otpArray.join("");
      const { data } = await axios.post(
        backendUrl + "/api/auth/verify-account",
        {
          otp,
        }
      );

      if (data.success) {
        toast.success(data.message);

        getUserData();
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    isLoggedIn &&
      userData &&
      userData.isAccountVerified &&
      navigate("/dashboard");
  }, [isLoggedIn, userData]);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Email Verify OTP</h1>
        <p>Enter the 6 digit code sent to your email</p>
        <p>The otp is 888888</p>
        <div className="flex justify-between mb-8" onPaste={handlePaste}>
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                required
                className="w-12 h-12 text-center border rounded"
                ref={(el) => (inputRefs.current[i] = el)}
                onInput={(e) => handleInput(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            ))}
        </div>
        <button>Verify Email</button>
      </form>
    </div>
  );
}
