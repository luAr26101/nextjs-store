import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
  // const { userId } = auth();
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <div className='relative w-6 h-6 rounded-full overflow-hidden'>
        <Image
          src={profileImage}
          alt='Profile Image'
          className='object-cover'
          fill
        />
      </div>
    );
  }
  return <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />;
}

export default UserIcon;
