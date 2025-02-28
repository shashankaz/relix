import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MessagesSquare, PhoneCall, Send, Twitter } from "lucide-react";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";

const items = [
  { id: "residential-design", label: "Residential Design" },
  { id: "commercial-design", label: "Commercial Design" },
  { id: "space-planning", label: "Space Planning" },
  { id: "furniture-selection", label: "Furniture Selection" },
  { id: "lighting-design", label: "Lighting Design" },
  { id: "other", label: "Other" },
] as const;

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  services: z
    .array(z.string())
    .min(1, { message: "Please select at least one service." }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      services: [],
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}contact/new-contact`,
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phoneNumber: values.phoneNumber,
          message: values.message,
          services: values.services,
          src: "Relix ltd",
        }
      );

      if (response.status === 201) {
        toast.success(response.data.message);
        form.reset();
      }
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          toast.error(error.response.data.message);
        } else if (error.response?.status === 500) {
          toast.error("Something went wrong. Please try again later.");
        }
      } else {
        toast.error("An unknown error occurred. Please try again.");
      }
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div className="relative overflow-hidden bg-background">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:72px_72px]"
        style={{
          maskImage:
            "radial-gradient(circle at center, black, transparent 80%)",
        }}
      />

      <div className="relative flex flex-col items-center justify-center py-10 md:py-20 px-4">
        <div className="max-w-4xl w-full space-y-10">
          <div className="text-center mb-8">
            <h6 className="text-lg font-semibold mb-2">
              Contact <span>Us</span>
            </h6>
            <h1
              className="text-4xl md:text-5xl font-semibold font-playwrite"
              style={{ lineHeight: "1.4" }}
            >
              Let's Connect & Transform Spaces
            </h1>
            <p className="md:text-lg text-muted-foreground mt-4">
              Get in touch with us to discuss your ideas and bring your vision
              to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="First name"
                            {...field}
                            className="bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Last name"
                            {...field}
                            className="bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="you@company.com"
                          {...field}
                          className="bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+91 99999 99999"
                          {...field}
                          className="bg-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Leave us a message..."
                          className="resize-none bg-white"
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="services"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Services</FormLabel>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {items.map((item) => (
                          <div
                            className="flex items-center gap-2"
                            key={item.id}
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-medium">
                              {item.label}
                            </FormLabel>
                          </div>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Send message
                </Button>
              </form>
            </Form>

            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-semibold mb-1">Chat with us</h2>
                <p className="text-muted-foreground">
                  Speak to our friendly team via live chat.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <MessagesSquare className="h-5 w-5" />
                    <span className="font-medium hover:underline cursor-pointer">
                      Start a live chat
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    <span className="font-medium hover:underline cursor-pointer">
                      Shoot us an email
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Twitter className="h-5 w-5" />
                    <span className="font-medium hover:underline cursor-pointer">
                      Message us on X
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-1">Call us</h2>
                <p className="text-muted-foreground">
                  Call our team Mon-Fri from 8am to 5pm.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <PhoneCall className="h-5 w-5" />
                  <span className="font-medium hover:underline cursor-pointer">
                    +91 99999 99999
                  </span>
                </div>
              </div>

              {/* <div>
                <h2 className="text-xl font-semibold mb-1">Visit us</h2>
                <p className="text-muted-foreground">
                  Chat to us in person at our Manhattan HQ.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold hover:underline cursor-pointer">
                    100 Smith Street, New York, NY 10001
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
