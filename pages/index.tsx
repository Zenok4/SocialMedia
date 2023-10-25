import PostFormCard from "../components/PostFormCard";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";
import LoginPage from "./login";
import { UserContextProvider } from "../components/context/UserContext";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

export default function Home() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  function fetchPosts() {
    supabase
      .from("posts")
      .select("id, content, created_at, photos, profiles(id, avatar, name)")
      .is("parent", null)
      .order("created_at", { ascending: false })
      .then((result) =>
        // @ts-ignore: Object is possibly 'null'.
        setPosts(result.data)
      );
  }

  if (!session) {
    return <LoginPage />;
  }

  return (
    <Layout>
      <UserContextProvider>
        <PostFormCard onPost={fetchPosts} />
        {posts?.length > 0 &&
          posts.map((post) => <PostCard key={post["id"]} {...(Object.assign(post))} />)}
      </UserContextProvider>
    </Layout>
  );
}
