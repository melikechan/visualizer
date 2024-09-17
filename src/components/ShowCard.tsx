interface ShowCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function ShowCard({
  children,
  ...props
}: ShowCardProps) {
  return (
    <div className={`flex flex-col items-center justify-center p-4 bg-gray-300/50 dark:bg-gray-600/50 rounded-lg shadow-md ${props.className}`}>
      {children}
    </div>
  );
}
