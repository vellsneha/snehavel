/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NDA_ACCESS_PASSWORD_HASH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "@social/*.js" {
  import type { ComponentType } from "react";
  const component: ComponentType<Record<string, unknown>>;
  export default component;
}

declare module "@social/utils/LayoutIsland" {
  import type { ReactNode } from "react";
  export default function LayoutIsland(props: { children: ReactNode }): JSX.Element;
}
