import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Upload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function Header() {
  const { userData } = useContext(AppContext);
  return (
    <main className="flex-grow flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
      <Card className="w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-2xl lg:max-w-3xl p-4 sm:p-6 md:p-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 sm:mb-6 md:mb-8">
          {userData ? userData.name : "Anonymous"}'s Personal Summariser
        </h1>
        <div className="space-y-4">
          <Textarea
            placeholder="Enter text to summarise..."
            className="w-full min-h-[100px] max-h-[200px] sm:max-h-[250px] md:max-h-[300px] resize-none text-sm sm:text-base"
          />
          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4">
            <Button className="w-full sm:w-auto">Summarise</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload File
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Upload File</SheetTitle>
                  <SheetDescription>
                    Upload a file to summarise its content.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-4">
                  <Input type="file" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Card>
    </main>
  );
}
