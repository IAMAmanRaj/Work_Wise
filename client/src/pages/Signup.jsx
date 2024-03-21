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
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit=()=>{
    console.log(username,email,password)
  }
  return (
    <div className="w-full h-[100vh] bg-black flex flex-col gap-8 items-center justify-center">
      <h1 className="w-1/2 text-2xl text-white text-center ">welcome</h1>

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create account</CardTitle>
          <CardDescription>let's get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input id="username" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder="your username" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={email}  onChange={(e)=>{setemail(e.target.value)}} placeholder="your email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" value={password}  onChange={(e)=>{setpassword(e.target.value)}}  placeholder="your password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to={"/signin"}>
            <Button variant="outline">Already have an account? SignIn</Button>
          </Link>
          <Button
            onClick={() => {
              handleSubmit
            }}
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
