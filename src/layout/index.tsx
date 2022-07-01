import { PropsWithChildren } from "react";
import Page from "material/page";
import Main from "material/main";
import Greeting from "widgets/greeting";
import Topbar from "./topbar";

function Layout({ children }: PropsWithChildren) {
  return (
    <Page>
      <Topbar />
      <Main>
        {children}
        <Greeting />
      </Main>
    </Page>
  );
}

export default Layout;
