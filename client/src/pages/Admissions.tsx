import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { insertApplicationSchema, type InsertApplication } from "@shared/schema";
import { queryClient, apiRequest } from "@/lib/queryClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, Users, CheckCircle } from "lucide-react";

export default function Admissions() {
  const { toast } = useToast();
  
  const form = useForm<InsertApplication>({
    resolver: zodResolver(insertApplicationSchema),
    defaultValues: {
      studentName: "",
      dateOfBirth: "",
      grade: "",
      parentName: "",
      parentEmail: "",
      parentPhone: "",
      address: "",
      previousSchool: "",
    },
  });
  
  const createApplicationMutation = useMutation({
    mutationFn: async (data: InsertApplication) => {
      const response = await apiRequest("POST", "/api/applications", data);
      const text = await response.text();
      return text ? JSON.parse(text) : null;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/applications"] });
      toast({
        title: "Application Submitted Successfully",
        description: "Thank you for applying. We will review your application and contact you within 5-7 business days.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: InsertApplication) => {
    createApplicationMutation.mutate(data);
  };
  
  const grades = [
    "Nursery",
    "LKG",
    "UKG",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11 (Science)",
    "Class 11 (Commerce)",
    "Class 11 (Arts)",
    "Class 12 (Science)",
    "Class 12 (Commerce)",
    "Class 12 (Arts)",
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-saffron via-orange-600 to-amber-600 bg-clip-text text-transparent dark:from-amber-400 dark:via-orange-500 dark:to-saffron">
              Admissions
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join the Excellence Academy family. Limited seats available for academic year 2025-26.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="border-amber-200 dark:border-amber-800 text-center" data-testid="card-admission-feature-1">
              <CardHeader>
                <BookOpen className="w-12 h-12 mx-auto mb-2 text-saffron" />
                <CardTitle>CBSE Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive CBSE syllabus with focus on conceptual learning and skill development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-amber-200 dark:border-amber-800 text-center" data-testid="card-admission-feature-2">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto mb-2 text-saffron" />
                <CardTitle>Excellence in Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Consistent academic results with high board exam scores and competitive exam success.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-amber-200 dark:border-amber-800 text-center" data-testid="card-admission-feature-3">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-2 text-saffron" />
                <CardTitle>Experienced Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Dedicated teachers with expertise in CBSE curriculum and student mentoring.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-saffron" />
                  Admission Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-saffron/10 flex items-center justify-center text-sm font-semibold text-saffron">
                    1
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Submit online application form</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-saffron/10 flex items-center justify-center text-sm font-semibold text-saffron">
                    2
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Entrance assessment (for applicable grades)</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-saffron/10 flex items-center justify-center text-sm font-semibold text-saffron">
                    3
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Parent-principal interaction</p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-saffron/10 flex items-center justify-center text-sm font-semibold text-saffron">
                    4
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Admission confirmation & fee payment</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2 border-amber-200 dark:border-amber-800">
              <CardHeader>
                <CardTitle className="text-2xl">Application Form</CardTitle>
                <CardDescription>Fill in the details below to apply for admission</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Student Information</div>
                    
                    <FormField
                      control={form.control}
                      name="studentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Student Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Student's full name" 
                              {...field} 
                              data-testid="input-student-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Birth</FormLabel>
                            <FormControl>
                              <Input 
                                type="date" 
                                {...field} 
                                data-testid="input-dob"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="grade"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Applying for Grade</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-grade">
                                  <SelectValue placeholder="Select grade" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {grades.map((grade) => (
                                  <SelectItem key={grade} value={grade}>
                                    {grade}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="previousSchool"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Previous School (if any)</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Name of previous school" 
                              {...field}
                              value={field.value || ""}
                              data-testid="input-previous-school"
                            />
                          </FormControl>
                          <FormDescription className="text-xs">
                            Leave blank if applying for pre-primary
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-6 mb-2">Parent/Guardian Information</div>
                    
                    <FormField
                      control={form.control}
                      name="parentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent/Guardian Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Parent's full name" 
                              {...field} 
                              data-testid="input-parent-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="parentEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="parent@example.com" 
                                {...field} 
                                data-testid="input-parent-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="parentPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="+91 98765 12345" 
                                {...field} 
                                data-testid="input-parent-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Residential Address</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Complete address with pincode" 
                              className="min-h-[80px]" 
                              {...field} 
                              data-testid="input-address"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-saffron hover:bg-orange-600 text-white"
                      disabled={createApplicationMutation.isPending}
                      data-testid="button-submit-application"
                    >
                      {createApplicationMutation.isPending ? "Submitting..." : "Submit Application"}
                    </Button>
                    
                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      By submitting this form, you agree to our terms and conditions. Our admissions team will contact you within 5-7 business days.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
