import React from "react";
import LeftPane from "./LeftPane/LeftPane";
import classes from "./Main.module.css";
import RightPane from "./RightPane/RightPane";
import { QueryClient, QueryClientProvider } from "react-query";
const client = new QueryClient();
const Main = () => {
  return (
    <div className={classes.main}>
      <QueryClientProvider client={client}>
 
          <LeftPane />
        
          <RightPane />
      
      </QueryClientProvider>
    </div>
  );
};

export default Main;
