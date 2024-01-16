import "./globals.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import classes from "./page.module.css";

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
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
