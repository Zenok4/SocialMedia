import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

function SavePostPage() {
  return (
    <Layout>
      <h1 className="text-6xl mb-4 text-gray-300">Saved Post</h1>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </Layout>
  );
}

export default SavePostPage;
