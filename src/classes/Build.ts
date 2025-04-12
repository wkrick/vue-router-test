import { Apparel } from './Apparel'

export class Build {
  apparel = [
    new Apparel('Head'),
    new Apparel('Chest'),
    new Apparel('Shoulders'),
    new Apparel('Waist'),
    new Apparel('Hands'),
    new Apparel('Legs'),
    new Apparel('Feet'),
  ]

  constructor(state = '') {
    console.log('Build constructor called')
    this.state = state
  }

  get state(): string {
    console.log('get build.state')
    let s = ''

    // WEIGHT
    this.apparel.forEach((item) => {
      s += item.weight || '_'
    })

    // QUALITY
    this.apparel.forEach((item) => {
      s += item.quality || '_'
    })

    // TRAIT
    this.apparel.forEach((item) => {
      s += item.trait || '_'
    })

    if (!s.replace(/_/g, '').length) {
      s = ''
    }
    return s
  }

  set state(s: string) {
    console.log('set build.state')

    if (s.length) {
      // map the state string to the build data.  order is important!

      let i = 0

      // WEIGHT
      this.apparel.forEach((item) => {
        item.weight = s[i++].replace('_', '')
      })

      // QUALITY
      this.apparel.forEach((item) => {
        item.quality = s[i++].replace('_', '')
      })

      // TRAIT
      this.apparel.forEach((item) => {
        item.trait = s[i++].replace('_', '')
      })
    } else {
      // clear everything

      // APPAREL
      this.apparel.forEach((item) => {
        item.weight = ''
        item.quality = ''
        item.trait = ''
      })
    }
  }
}
