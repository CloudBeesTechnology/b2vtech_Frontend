import { LiaSignOutAltSolid } from "react-icons/lia";
import { IoPerson } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const AccountMenu = ({setting,accountSetting,set,ClearStorage}) => {
  return (
    <>
     {setting && (
            <div className="fixed top-[5.9rem] flex flex-col gap-8 font-semibold p-5 px-8 max-sm:p-5 max-sm:text-lg right-2 text-white text-xl bg-primary">
              {accountSetting ? (
                <>
                  <NavLink
                    to="/account"
                    className="flex items-center gap-3"
                    onClick={set}
                  >
                    <span>
                      <IoPerson />
                    </span>
                    Account Setting
                  </NavLink>{" "}
                  <NavLink
                    to="/"
                    className="flex items-center gap-3 "
                    onClick={() => {
                      set();
                      ClearStorage();
                    }}
                  >
                    <span>
                      <LiaSignOutAltSolid />
                    </span>
                    Sign out
                  </NavLink>
                </>
              ) : (
                <div>
                  {" "}
                  <div className="flex flex-col gap-3">
                    <NavLink
                      to="/employeeProfile"
                      className="flex items-center gap-3"
                      onClick={set}
                    >
                      <span>
                        <IoPerson />
                      </span>
                      Profile
                    </NavLink>{" "}
                    <NavLink
                      to="/"
                      className="flex items-center gap-3 "
                      onClick={() => {
                        set();
                        ClearStorage();
                      }}
                    >
                      <span>
                        <LiaSignOutAltSolid />
                      </span>
                      Sign out
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          )}
    </>
  )
}
