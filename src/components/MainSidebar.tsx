import React, { useState } from 'react';
import Sidebar from 'react-sidebar';

const MainSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const onSetSidebarOpen = (open: boolean) => {
    setSidebarOpen(open);
  };

  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      styles={{ sidebar: { backgroundColor: "black", width: "100px" } }}
    >
      <button onClick={() => setSidebarOpen(true)}>Open sidebar</button>
    </Sidebar>
  );
};

export default Sidebar;
