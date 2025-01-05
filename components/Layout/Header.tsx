import HeaderDecorator from "@/components/Decorators/HeaderDecorator";

interface HeaderProps {
  onLogoClick: () => void;
}

function Header({ onLogoClick }: HeaderProps) {
  return (
    <HeaderDecorator>
      <h1 
        className="font-ps2p text-2xl text-background font-bold tracking-widest cursor-pointer"
        onClick={onLogoClick}
      >
        Pokedex
      </h1>
    </HeaderDecorator>
  );
};

export default Header;
