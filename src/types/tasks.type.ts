export enum EnumTaskPriority {
  low = "low",
  medium = "medium",
  high = "high",
}

export interface ITasksResponse {
  _id: string;
  createdAt: string;
  updatedAt?: string;
  name: string;
  priority?: EnumTaskPriority;
  isCompleted: boolean;
  userId: string;
}

export type TypeTaskFormState = Partial<
  Omit<ITasksResponse, "_id" | "updatedAt" | "userId">
>;
