import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./client";

type Props = {
  children: ReactNode;
};

function ReactQueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default ReactQueryProvider;
