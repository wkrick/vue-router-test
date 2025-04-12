export class Apparel {
  readonly label: string
  weight!: string
  quality!: string
  trait!: string

  constructor(label: string) {
    this.label = label
  }
}
