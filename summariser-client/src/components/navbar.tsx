import { Button } from "@/components/ui/button";
import { AppContext } from "@/context/AppContext";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function Navbar() {
  const navigate = useNavigate();

  const { userData, backendUrl, setUserData, setIsLoggedIn } =
    useContext(AppContext);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.get(
        backendUrl + "/api/auth/send-verify-otp"
      );
      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.get(backendUrl + "/api/auth/logout");
      data.success && setIsLoggedIn(false);
      data.success && setUserData(null);
      navigate("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="p-2 sm:p-4 flex justify-end">
      <div className="space-x-2">
        {userData ? (
          <div>
            {userData.name[0].toUpperCase()}
            <div>
              <ul>
                {!userData.isAccountVerified && (
                  <li onClick={sendVerificationOtp}>Verify Email</li>
                )}
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          </div>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            size="sm"
            className="text-xs sm:text-sm sm:size-default"
          >
            Login
          </Button>
        )}
      </div>
    </nav>
  );
}
