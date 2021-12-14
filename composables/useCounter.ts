//状态共享
export const useCounter = () => useState<number>('counter', () => 1)