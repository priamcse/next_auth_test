import Form from "@/components/Form";
import LoginForm from "@/components/LoginForm";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";
// import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authConfig);
  // console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? <>Welcome Back {session?.user?.name}</> : <LoginForm />}
      <Form />
    </main>
  );
}
