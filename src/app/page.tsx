import Index from "@/components/Dashboard";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

import { Metadata } from "next";

export const metadata:Metadata={
  title:'Protein Bind a platform for drug research',
  description:"this is a description for protein bind",
}


export default function Home() {
  return (
    <>
      <DefaultLayout>
        <p>Hello dashboard page</p>
        <Index/>
      </DefaultLayout>
    </>
  );
}
