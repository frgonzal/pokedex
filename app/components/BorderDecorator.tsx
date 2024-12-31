interface BorderDecoratorProps {
  children: React.ReactNode;
}
    
function BorderDecorator({ children }: BorderDecoratorProps) {
  return (
    <div className="relative w-full border-4 border-black rounded-md">
      <div className="z-0 absolute top-0 left-0 h-full w-4 bg-red-600"></div>
      <div className="z-0 absolute top-0 right-0 h-full w-4 bg-red-600"></div>
      <div className="z-0 absolute top-0 left-4 h-full w-[calc(100%-2rem)] border-4 border-red-200"></div>
      <div className="z-20 relative py-2 px-8">
        {children}
      </div>
    </div>
  );
};

export default BorderDecorator;