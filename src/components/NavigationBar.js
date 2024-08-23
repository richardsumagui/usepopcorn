import { useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import NumResults from "./NumResults";

const NavigationBar = () => {
    const [query, setQuery] = useState("");
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar query={query} setQuery={setQuery}/>
      <NumResults />
    </nav>
  );
};
export default NavigationBar;
