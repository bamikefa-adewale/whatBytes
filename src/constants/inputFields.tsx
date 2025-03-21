export interface inputFieldsItems {
  id: number;
  name: "rank" | "percentile" | "currentScore";
  label: string;
  placeholder: string;
}

export const inputFields: inputFieldsItems[] = [
  {
    id: 1,
    label: "Rank",
    name: "rank",
    placeholder: "Enter rank",
  },
  {
    id: 2,
    label: "Percentile",
    name: "percentile",
    placeholder: "Enter percentile",
  },
  {
    id: 3,
    label: "Current Score (out of 15)",
    name: "currentScore",
    placeholder: "Enter score",
  },
];
