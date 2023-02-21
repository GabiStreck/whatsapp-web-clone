import { ThemeProvider } from "@material-ui/core/styles";

import Loading from "../components/core/Loading";
import { ChatsProvider } from "../context/ChatsProvider";
import { useUserAuth } from "../hooks/useUserAuth";
import { theme } from "../styles/theme";

import Login from "./login";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const { user, loading } = useUserAuth();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <ChatsProvider>
        <Component {...pageProps} />
      </ChatsProvider>
    </ThemeProvider>
  );
}

export default MyApp;
