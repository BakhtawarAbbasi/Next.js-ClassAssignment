import { AppProps } from "next/app";
// import { Provider } from "@shadcn/ui";
import { Provider } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
