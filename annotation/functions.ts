const add = (a: number, b: number): number => {
  return a + b;
};

const throwError = (message: string): string => {
  if(!message) throw new Error(message);

  return message;
}