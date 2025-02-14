type TTagProps = {
  name: string;
};

export default function Tag({ name }: TTagProps) {
  return (
    <div className="bg-gray-2 text-gray-10 flex h-6 items-center justify-center rounded-full px-2 text-sm">
      {name}
    </div>
  );
}
