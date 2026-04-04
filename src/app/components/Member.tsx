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
    <div className="p-5 bg-white rounded-2xl flex w-96 justify-center">
      <div className="info self-center text-center">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="flex justify-center">
          <p className="text-lg font-bold text-blue-400 mr-1">{position}</p>
          <p className="text-lg text-gray-400">({pronouns})</p>
        </div>
      </div>
    </div>
  );
}
