export interface ITransaction {
  id: string;
  title: string;
  amount: number;
  createdAt: string;
  type: string;
  category: {
    id: string;
    name: string;
    color: string;
  };
}
