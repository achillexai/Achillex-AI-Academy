import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { MessagesSquare, Trash2 } from "lucide-react";
import { TutorForm } from "./TutorForm";
import { useToast } from "@/components/hooks/use-toast";
import { useRouter } from "next/navigation";
import SkeletonLoader from "./Loader";
import axios from "axios";

interface Tutor {
  id: string;
  name: string;
  description: string;
  src: string;
  userName: string;
  _count: {
    messages: number;
  };
}

interface Category {
  id: string;
  name: string;
}

const TutorsComponent: React.FC = () => {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<"list" | "create" | "manage">(
    "list"
  );
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [tutorsRes, categoriesRes] = await Promise.all([
          axios.get("/api/tutor"),
          axios.get("/api/categories"),
        ]);
        setTutors(tutorsRes.data);
        setCategories(categoriesRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Individual tutor deletion
  const handleDeleteTutor = async (tutorId: string) => {
    try {
      await axios.delete(`/api/tutor/admin-call/${tutorId}`);
      setTutors(tutors.filter((tutor) => tutor.id !== tutorId));
      toast({
        description: "Tutor deleted successfully.",
      });
      router.refresh();
    } catch (error) {
      toast({
        description: "Something went wrong.",
        variant: "destructive",
      });
      console.error("Error deleting tutor:", error);
    }
  };

  // Delete all tutors
  const handleDeleteAllTutors = async () => {
    try {
      await axios.delete("/api/tutor/admin-call/all");
      setTutors([]);
      setIsDeleteDialogOpen(false);
      toast({
        description: "All tutors deleted successfully.",
      });
      router.refresh();
    } catch (error) {
      toast({
        description: "Something went wrong.",
        variant: "destructive",
      });
      console.error("Error deleting tutors:", error);
    }
  };

  const renderContent = () => {
    if (loading) {
      return <SkeletonLoader />;
    }

    if (activeView === "create") {
      return (
        <Card className="bg-white rounded-lg border shadow-md">
          <CardContent>
            <ScrollArea className="h-[calc(60vh-100px)] mt-4">
              <TutorForm
                categories={categories}
                onClose={() => setActiveView("list")}
              />
            </ScrollArea>
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className="bg-white rounded-lg border shadow-md">
        <CardContent className="mt-10 min-h-[48vh]">
          {tutors.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative w-64 h-64">
                <Image
                  fill
                  className="cyanscale"
                  src="/empty.png"
                  alt="Empty"
                />
              </div>
              <p className="text-base text-muted-foreground">
                No tutors found.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-4 lg:gap-6 pb-10">
              {tutors.map((tutor) => (
                <Card
                  key={tutor.id}
                  className="bg-white rounded-xl shadow-md hover:scale-105 transition-all border relative h-full"
                >
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-3 z-10"
                    onClick={() => handleDeleteTutor(tutor.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <CardHeader className="flex items-center justify-center text-center text-muted-foreground space-y-2 p-2 sm:p-4 lg:p-6">
                    <div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
                      <Image
                        src={tutor.src ?? "/placeholder.png"}
                        fill
                        className="object-cover rounded-xl"
                        alt="Tutor"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <p className="font-medium text-black text-sm sm:text-base lg:text-lg line-clamp-1">
                        {tutor.name}
                      </p>
                      <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm line-clamp-2">
                        {tutor.description}
                      </p>
                    </div>
                  </CardHeader>
                  <CardFooter className="flex items-center justify-between text-[10px] sm:text-xs p-2 sm:p-4 text-muted-foreground mt-auto">
                    <p className="lowercase text-gray-500 truncate max-w-[60px] sm:max-w-[100px]">
                      @{tutor.userName}
                    </p>
                    <div className="flex items-center text-gray-500">
                      <MessagesSquare
                        className="w-2 h-2 sm:w-3 sm:h-3 mr-1"
                        color="#6b7280"
                      />
                      {tutor._count.messages}
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="w-full px-2 sm:container sm:mx-auto sm:px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">AI Tutor Management</h1>
        <div className="flex space-x-2">
          <Button
            onClick={() => setActiveView("manage")}
            disabled={activeView === "list" || activeView === "manage"}
          >
            Manage Tutors
          </Button>
          <Button
            onClick={() => setActiveView("create")}
            disabled={activeView === "create"}
          >
            Create Tutor
          </Button>
          <Button
            variant="destructive"
            onClick={() => setIsDeleteDialogOpen(true)}
          >
            Delete All Tutors
          </Button>
        </div>
      </div>
      {renderContent()}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete all
              tutors.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteAllTutors}>
              Delete All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default TutorsComponent;
