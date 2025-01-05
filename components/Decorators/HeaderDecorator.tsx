interface HeaderDecoratorProps {
  children: React.ReactNode;
}

function HeaderDecorator({ children }: HeaderDecoratorProps) {
  return (
    <div className="relative w-screen h-min flex items-center justify-center border-b-4 border-foreground py-1">
      <div className="z-0 absolute top-0 left-0 w-full h-[40%] bg-primary"></div>
      <div className="z-0 absolute top-[40%] left-0 w-full h-[20%] bg-mid_red"></div>
      <div className="z-0 absolute bottom-0 left-0 w-full h-[40%] bg-dark_red"></div>

      <div className="z-10 relative">
        { children }
      </div>
    </div>
  );
};

export default HeaderDecorator;

