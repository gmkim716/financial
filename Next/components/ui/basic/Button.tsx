interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-gray-600 p-3 rounded text-white">{children}</button>
  );
}
