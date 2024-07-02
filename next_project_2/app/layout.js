import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../utils/theme';
import Provider from "../utils/QueryProvider"

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
        <Provider>
              <Nav />
              {children}
        </Provider>
            </ThemeProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
