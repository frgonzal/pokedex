import HeaderDecorator from "@/components/Decorators/HeaderDecorator";

function Header() {
  return (
    <HeaderDecorator>
      <h1 className="font-ps2p text-2xl text-background font-bold tracking-widest cursor-pointer">
        <a href="/">
          Pokedex
        </a>
      </h1>
    </HeaderDecorator>
  );
};

export default Header;
