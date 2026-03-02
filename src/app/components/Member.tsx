import Image from "next/image";

interface MemberProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  position: string;
  pronouns: string;
  photoPath?: string;
}

export default function Member({
  name,
  position,
  pronouns,
  photoPath,
}: MemberProps) {
  console.log(photoPath);
  return (
    <div className="p-5 pr-16 bg-white rounded-2xl flex w-96">
      <div className="relative h-20 w-20 mr-5">
        <Image
          className="object-cover rounded-full"
          src="/ClubPhotos/1.jpg"
          alt="cshs"
          fill
        />
      </div>

      <div className="info self-center">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="flex">
          <p className="text-lg font-bold text-blue-400 mr-1">{position}</p>
          <p className="text-lg text-gray-400">({pronouns})</p>
        </div>
      </div>
    </div>
  );
}
