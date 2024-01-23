import "./globals.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import classes from "./page.module.css";
import { QueryProvider } from "../components/provider/QueryProvider";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}): JSX.Element {
  return (
    <html lang={locale}>
      <body className={classes.container}>
        <QueryProvider>
          <MantineProvider>{children}</MantineProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
