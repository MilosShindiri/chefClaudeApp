import chefClaudeLogo from "/images/chef-claude-icon.png";

export default function Header() {
  return (
    <header>
      <img src={chefClaudeLogo} alt="chefClaudeLogo" className="headerImg" />
      <span className="headerText">Chef Claude</span>
    </header>
  );
}
