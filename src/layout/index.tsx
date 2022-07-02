import { PropsWithChildren } from "react";
import Page from "material/page";
import Main from "material/main";
import Greeting from "widgets/greeting";

function Layout({ children }: PropsWithChildren) {
  return (
    <Page>
      <Main>
        {children}
        <Greeting />
      </Main>
    </Page>
  );
}

export default Layout;
