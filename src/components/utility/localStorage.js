//
//
//
//local storage save korbo data but age data thakle
// ta sathe save korte hobe tai save er age get korte hobe

const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplication = getStoredJobApplication();
  const exist = storedJobApplication.find((jobId) => jobId === id);
  if (!exist) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplication)
    );
  }
};

export { getStoredJobApplication, saveJobApplication };
