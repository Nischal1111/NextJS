import { Montserrat} from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../utils/theme';


const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
        <ThemeProvider theme={theme}r>
        <Nav/>
        {children}
        </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}