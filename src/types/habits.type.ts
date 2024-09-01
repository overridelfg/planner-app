export interface IHabitsResponse {
  _id: string;
  name: string;
  order: number;
  color: string;
  duration: number;
  userId: string;
}

export type TypeHabitFormState = Partial<Omit<IHabitsResponse, "_id">>;

export interface UpdateOrderDTO {
  habitId1: string;
  habitId2: string;
  order1: number;
  order2: number;
}
