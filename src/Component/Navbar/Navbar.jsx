import { useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo_01.png";
import { useEffect, useState } from "react";
import { Sidebar } from "../Sidebar";
import { AccountMenu } from "./AccountMenu";
import { MainMenu } from "./MainMenu";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [showbtn, setShowBtn] = useState(false);
  const [accountSetting, setAccountSetting] = useState(true);
  const [accountNavigate, setAccountNavigate] = useState(true);
  const [dropdown,setDropDown]=useState(false)
  const [setting, setSetting] = useState(false);
  const [dropDownIcon, setDropDownIcon] = useState(false);
  const dropDown=()=>{
    setDropDown(!dropdown)
    }
    const dropDownsIcons=()=>{
    setDropDown(!dropdown)
    setDropDownIcon(!dropDownIcon)
  }
  function set() {
    return setSetting(!setting);
  }
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    const userLogin = sessionStorage.getItem("userID");
    const employee = sessionStorage.getItem("userRole");
    if (userLogin !== null) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
    if (employee != null && employee === "employee") {
      setAccountSetting(false);
      setAccountNavigate(false);
    }
  }, []);

  const ClearStorage = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };
  function aside() {
    return setSidebar(!sidebar);
  }
  return (
    <>
      <Sidebar onclose={aside} check={sidebar} show={showbtn} setDropDownIcon={setDropDownIcon}  dropDown={dropDown} dropDownIcon={dropDownIcon} dropDownsIcons={dropDownsIcons} dropdown={dropdown} />
      <section
        style={{ transitionDelay: "2s" }}
        className="sticky top-0 z-40 items-center bg-gradient-to-r from-primary from-50% to-skyBlue flex justify-center"
      >
        <section className="max-w-screen-2xl w-full flex items-center justify-between px-5 py-2 mx-2">
          <div className="py-2">
            <img className="max-w-[250px] w-full" src={logo} alt="not found" />
            {/* max-w-[100px] */}
          </div>

          <MainMenu
            showbtn={showbtn}
            currentPath={currentPath}
            set={set}
            accountNavigate={accountNavigate}
            aside={aside}
            dropdown={dropdown}
            dropDown={dropDown}
            dropDownIcon={dropDownIcon}
            dropDownsIcons={dropDownsIcons}
          />
          <AccountMenu
            setting={setting}
            accountSetting={accountSetting}
            set={set}
            ClearStorage={ClearStorage}
          />
        </section>
      </section>
    </>
  );
};

//dropdown
// Mobile
// Web
// Cloud
// Security
// DevOps
