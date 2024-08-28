import MainNavigation from "./MainNavigation";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="flex items-center p-3 py-8 justify-between">
      <Logo />
      <MainNavigation />
      <Button type="secundary">Join</Button>
    </div>
  );
};

export default Header;
