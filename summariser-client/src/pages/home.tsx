import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}
