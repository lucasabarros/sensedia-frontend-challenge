import React, { Suspense } from "react";
import { LayoutContainer, MainContent } from "./Layout.styles";
import { LayoutProps } from "./Layout.types";
import {
  headerAriaLabel,
  mainAriaLabel,
  footerAriaLabel,
} from "./Layout.constants";
import { Header, Footer } from "@components/LazyComponents/LazyComponents";

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Suspense fallback={<div>Loading Header...</div>}>
        <header
          role="banner"
          aria-label={headerAriaLabel}
          data-testid="layout-header">
          <Header />
        </header>
      </Suspense>

      <MainContent
        role="main"
        aria-label={mainAriaLabel}
        data-testid="layout-main">
        {children}
      </MainContent>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <footer
          role="contentinfo"
          aria-label={footerAriaLabel}
          data-testid="layout-footer">
          <Footer />
        </footer>
      </Suspense>
    </LayoutContainer>
  );
};
