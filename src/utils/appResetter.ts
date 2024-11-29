const resetApp = async () => {
  localStorage.clear();
  sessionStorage.clear();

  window.location.href = "/";
};

export default resetApp;
