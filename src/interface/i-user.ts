export interface IUser {
  id?: number,
  name: string,
  age: number,
  city?: string, // city est 'optionnel'
  // city: string | undefined,  // Equivalent à ligne ci-dessus
}
