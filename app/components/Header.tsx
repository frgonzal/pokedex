interface HeaderProps {
  onLogoClick: () => void;
}

function Header({ onLogoClick }: HeaderProps) {
  return (
    <div className="relative h-min flex items-center justify-center border-b-4 border-black py-1">
      <div className="absolute top-0 left-0 w-full h-[40%] bg-red-600"></div>
      <div className="absolute top-[40%] left-0 w-full h-[20%] bg-red-700"></div>
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-red-800"></div>

      <h1 
        onClick={onLogoClick}
        className="z-50 font-ps2p text-2xl text-white font-bold tracking-widest cursor-pointer">
        Pokedex
      </h1>
    </div>
  );
};

export default Header;
