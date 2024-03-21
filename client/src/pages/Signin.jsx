import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Signin() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
  return (
    <div className="w-full h-[100vh] bg-black flex flex-col gap-8 items-center justify-center">
      <h1 className="w-1/2 text-2xl text-white text-center ">welcome</h1>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Fill in the details</CardTitle>
          <CardDescription>let's get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="your password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to={"/signup"}>
            <Button variant="outline">Don't Have an account? Register</Button>
          </Link>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
