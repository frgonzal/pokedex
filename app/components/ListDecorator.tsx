interface ListDecoratorProps {
  children: React.ReactNode;
}


function ListDecorator({ children }: ListDecoratorProps) {
    return (
    <div className="relative w-full border-4 border-black rounded-md">
      <div className="z-0 absolute top-0 left-0 h-full w-20 bg-red-600"></div>
      <div className="z-0 absolute top-0 left-20 h-full border-l-8 border-red-200"></div>
      <div className="z-20 relative">
        {children}
      </div>
    </div>
  );
};

export default ListDecorator;