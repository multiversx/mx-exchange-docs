import React from "react";
import Layout from "@theme/Layout";
import Homepage from "@site/src/components/Homepage";

export default function Home() {
  return (
    <Layout
      title="Docs"
      description="xExchange is a platform for trading and engaging with decentralized finance running on the MultiversX Network. use cases and the new internet economy."
    >
      <Homepage />
    </Layout>
  );
}
