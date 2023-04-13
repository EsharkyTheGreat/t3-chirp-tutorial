import { type NextPage } from "next";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api"

const Home: NextPage = () => {
  const { data } = api.posts.getAll.useQuery();


  const user = useUser();
  return (
    <>
      <div>
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
      </div>
      <div>
        {data?.map((post) => (<div key={post.id}>{post.content}</div>))}
      </div>
    </>
  );
};

export default Home;
