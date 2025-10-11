import data from "@/data/data.json";

export type dataType = "home" | "work" | "skill" | "experience" | "education" | "contact";

export const getData = (dataType: dataType) => {
  return data[dataType];
};

export const getMonthDiff = (fromDate: string, toDate: string) => {
  let currentTime: number;
  currentTime = new Date(toDate).getTime();
  if (toDate === "now") currentTime = new Date().getTime();
  const prevTime = new Date(fromDate).getTime();
  const months = Math.ceil((currentTime - prevTime) / 2629746000);
  if (Math.floor(months / 12)) {
    const yr = Math.floor(months / 12);
    const remainingMonth = months % 12;
    return remainingMonth ? `${yr} yr - ${remainingMonth} mos` : `${yr} yr`;
  } else {
    return `${months} mos`;
  }
};

export const getLocalDateString = (date: string) => {
  if (date === "now") {
    return new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  }
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};
