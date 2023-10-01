import Avatar from "./Avatar";

function FriendsInfo() {
  return (
    <div className="flex gap-2">
      <Avatar src="https://saiwa.ai/wp-content/uploads/2022/12/Image-Processing-.webp" />
      <div>
        <h3 className="font-bold text-xl">John</h3>
        <div className="text-sm leading-3">5 mutual friends</div>
      </div>
    </div>
  );
}

export default FriendsInfo;
