import * as utils from './index'

describe('Utils', () => {
  it('should convert tons to kilograms', () => {
    const tons = 123

    const kilograms = utils.tonsToKilograms(tons)

    expect(kilograms).toBe(tons * 1000)
  })

  it('should convert kilograms to tons', () => {
    const kilograms = 12345

    const tons = utils.kilogramsToTons(kilograms)

    expect(tons).toBe(kilograms / 1000)
  })
})
