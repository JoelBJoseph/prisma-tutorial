import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import User from "./component/User"

export default async function Home(){
    const session = await getServerSession(authOptions)

  return (
      <div className={"container"}>
        <button><Link href={"/login"}>Sign In</Link></button><br/>
        <button><Link href={"/signup"}>Sign Up</Link></button><br/>
          <pre>{JSON.stringify(session)}</pre>
          <User/>
      </div>
  );
}