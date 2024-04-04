import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = "FE Blog 2024 - " + title;
    return () => {
      document.title = "FE Blog 2024";
    };
  }, [title]);
};

export default usePageTitle;
