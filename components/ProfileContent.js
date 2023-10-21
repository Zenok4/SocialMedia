import Card from "./Card";
import PostCard from "./PostCard";
import FriendsInfo from "./FriendsInfo";
import { useEffect, useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

function ProfileContent({activetab, userId}) {
    const [posts, setPosts] = useState([]);
    const [profile, setProfile] = useState(null);
    const supabase = useSupabaseClient();

    useEffect(() => {
        if(!userId)
            return;
        if(activetab === 'posts') {
            loadPosts().then(() => {})        
        }
    }, [userId])

    async function loadPosts(){
        const posts = await userPosts(userId)
        const profile = await userProfile(userId)
        setPosts(posts)
        setProfile(profile)
    }

    async function userPosts(userId) {
        const {data} = await supabase.from('posts')
        .select('id, content, created_at, photos, author')
        .eq('author', userId);
        return data
    }

    async function userProfile(userId) {
        const {data} = await supabase
        .from('profiles')
        .select()
        .eq('id', userId);
        return data?.[0]
    }

    return (
        <div>
            {activetab === 'posts' && (
                <div>
                   {posts?.length > 0 && posts.map(post => (
                    <PostCard key={post.created_at} {...post} profiles={profile} />
                   ))}
                </div>
              )}
        
              {activetab === 'about' && (
                <Card>
                  <h2 className="text-3xl mb-2">About Me</h2>
                  <p className="mb-2 text-sm">
                    Mushishi - bộ anime kể về hành trình của trùng sư Ginko, khi mà anh
                    chỉ là nhân vật phụ trong mỗi tập phim, còn nhân vật chính là những
                    người mà Ginko đã gặp và giúp đỡ, mỗi tập phim trôi chậm một cách
                    không tưởng nhưng lại đem đến cảm giác như có gì đó hụt hẫng trong
                    tim. Xem xong thấy con người thật nhỏ bé trước thiên nhiên và nỗi cô
                    đơn của các nhân vật là thứ thật sự có ảnh hưởng đến chính người
                    xem.
                  </p>
                </Card>
              )}
        
              {activetab === 'friends' && (
                <Card>
                  <h2 className="text-3xl mb-2">Friends</h2>
        
                  <div>
                    <div className="border-b border-b-gray-300 p-4 -mx-4">
                      <FriendsInfo />
                    </div>
                  </div>
                </Card>
              )}
        
              {activetab === 'photos' && (
                <Card>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                      <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/383808881_710194344484265_6989659893149982666_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=ORz3UILkdWcAX9L5oEl&_nc_oc=AQllPYdlnvzEWTuCLItznuCJhffr1za86_1NCUFZhoTo8d3P5zU1TKkNm6GTDf_u-awYJi4aSKBgTIjLAmH5uucb&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCichKCqn1HAvLE8Zqk0Lz4vLAy6hJffFvgLhjxSxRx9A&oe=651943F2" />
                    </div>
                    <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                      <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/383808881_710194344484265_6989659893149982666_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=ORz3UILkdWcAX9L5oEl&_nc_oc=AQllPYdlnvzEWTuCLItznuCJhffr1za86_1NCUFZhoTo8d3P5zU1TKkNm6GTDf_u-awYJi4aSKBgTIjLAmH5uucb&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCichKCqn1HAvLE8Zqk0Lz4vLAy6hJffFvgLhjxSxRx9A&oe=651943F2" />
                    </div>
                    <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
                      <img src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/383808881_710194344484265_6989659893149982666_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=ORz3UILkdWcAX9L5oEl&_nc_oc=AQllPYdlnvzEWTuCLItznuCJhffr1za86_1NCUFZhoTo8d3P5zU1TKkNm6GTDf_u-awYJi4aSKBgTIjLAmH5uucb&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCichKCqn1HAvLE8Zqk0Lz4vLAy6hJffFvgLhjxSxRx9A&oe=651943F2" />
                    </div>
                  </div>
                </Card>
              )}
        </div>
    );
}

export default ProfileContent;