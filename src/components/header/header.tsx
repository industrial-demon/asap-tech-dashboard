import { ReactNode } from "react";
// import { useTheme } from '../../shared/providers/theme-provider'
import { UserDropdown } from "~/ui-kit/lib/user-dropdown/user-dropdown";
import { ThemeSwitcher } from "~/components/theme-switcher/theme-switcher";
import { NavPanel } from "~/shared/ui/NavPanel/nav-panel";
import { routes } from "~/shared/config/routes";
import { useRouter,  } from 'next/navigation'
const imgSrc =
  "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80";

export const Header = ({
  navPanel,
  themeSwitcher,
}: {
  navPanel: ReactNode;
  themeSwitcher: ReactNode;
}) => {

  // const login = useLogoutMutation()

  return (
    <header>
      <div className="h-[92px] flex shadow-headerBottom dark:bg-grey-90 gap-0  max-lg:text-red-600  border-b border-transparent dark:border-grey-60  @md/header:flex-row">
        <div className="bg-green-60 px-16 flex w-[358px] text-white text-4xl gap-3 items-center justify-center">
          <span className="font-light">TECH</span>
          <span className="font-semibold">ASAP</span>
        </div>
        <div className="flex justify-between ml-[78px]">
           <NavPanel routes={routes}/>

          <div className="flex gap-5 items-center justify-between">
            <ThemeSwitcher theme={"dark"} />
            <div className="mr-4">
              <UserDropdown
                src={imgSrc}
                userNane="Joe SDfdvsdfdfgvdfdfvgdfd"
                // onLogoutClick={login.mutate}
                // onMyAccountClick={() => {
                //   console.log("my account");
                // }}
                // onSettingClick={() => {
                //   console.log("settings");
                // }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
