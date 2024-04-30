import React from "react";

export default function page() {
  return (
    <main className="grid grid-rows-[auto,auto] grid-flow-col  m-20 justify-between">
      {/*  matlab pehla pehla col fill ho ga phir dosra  */}
      <span>11.5k</span>
      <p>Tweets</p>
      <span>9.3k</span>
      <p>Followers</p>
      <span>776</span>
      <p>Following</p>
    </main>
  );
}

// In case of grid-cols-[auto,auto]  grid-flow-row

// while in case of grid-rows-[auto,auto] there is a need to wrie  grid-flow-col as it is not by default 
