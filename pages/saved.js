import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { UserContextProvider } from "../components/context/UserContext";

function SavePostPage() {
  const [posts, setPosts] = useState([]);
  const session = useSession();
  const supabase = useSupabaseClient();
  useEffect(() => {
    if (!session?.user?.id) {
      return;
    }
    supabase
      .from("saved_posts")
      .select("post_id")
      .eq("user_id", session.user.id)
      .then((result) => {
        const postsIds = result.data.map((item) => item.post_id);
        supabase
          .from("posts")
          .select("*, profiles(*)")
          .in("id", postsIds)
          .order("created_at", { ascending: false })
          .then((result) => setPosts(result.data));
      });
  }, [posts]);
  return (
    <Layout>
      <UserContextProvider>
        <h1 className="text-6xl mb-4 text-gray-300">Saved Post</h1>
        {posts.length > 0 &&
          posts.map((post) => (
            <div key={post.id}>
              <PostCard {...post} />
            </div>
          ))}
      </UserContextProvider>
    </Layout>
  );
}

export default SavePostPage;
