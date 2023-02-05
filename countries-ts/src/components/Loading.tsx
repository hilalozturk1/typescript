import React, { FunctionComponent } from "react";

interface ILoading {
  loading: boolean;
  children: React.ReactNode;
}

const Loading: FunctionComponent<ILoading> = ({ loading, children }) => {
  if (loading) {
    return <p>loading... </p>;
  }

  return <>{children}</>;
};

export default Loading;
