import React, { useState } from "react";
import AllJobs from "./Components/AllJobs";
import CreateJob from "./Components/CreateJob";

function App() {
  const [showCreateJobModal, setShowCreateJobModal] = useState(false);
  return (
    <>
      <CreateJob
        show={showCreateJobModal}
        onClose={() => {
          setShowCreateJobModal(false);
        }}
      />
      <AllJobs
        createJobOnClick={() => {
          setShowCreateJobModal(true);
        }}
      />
    </>
  );
}

export default App;
