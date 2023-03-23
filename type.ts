export interface TaskList {
  id?: string;
  title: string;
  info: string;
  Date: string | number;
  status: "ongoing" | "backlog" | "completed";
  bgColor: "red" | "green" | "blue" | "yellow";
};

export type NavItems = {
  title: string;
  icon: string;
  to: string;
}
