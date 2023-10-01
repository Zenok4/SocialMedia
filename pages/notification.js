import Link from "next/link";
import Avatar from "../components/Avatar";
import Card from "../components/Card";
import Layout from "../components/Layout";

function NotificationPage() {
  return (
    <Layout>
      <h1 className="text-6xl mb-4 text-gray-300">Notification</h1>
      <Card noPadding={true}>
        <div>
          <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
            <Link href={'/profile'}>
              <Avatar src="https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/383809791_625424656411779_6730571169640789735_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-7&_nc_sid=49d041&_nc_ohc=cMrD6AXgNVMAX-HTw2P&_nc_ht=scontent.fdad3-6.fna&oh=00_AfCTzNki1eDvXqhf3MiVFUWBXBxWgq-3jJAwa4hNTB-GxA&oe=651A3896" />
            </Link>
            <div>
              <Link
                href="/profile"
                className="font-semibold mr-1 hover:underline"
              >
                John Smith
              </Link>
              liked
              <Link href="" className="ml-1 text-socialBlue hover:underline">
                your photos
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

export default NotificationPage;
