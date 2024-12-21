import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="p-2 sm:p-4 flex justify-end">
      <div className="space-x-2">
        <Button
          onClick={() => navigate("/login")}
          variant="outline"
          size="sm"
          className="text-xs sm:text-sm sm:size-default"
        >
          Login
        </Button>
        <Button size="sm" className="text-xs sm:text-sm sm:size-default">
          Sign Up
        </Button>
      </div>
    </nav>
  );
}
