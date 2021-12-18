/* eslint-disable no-undef */
export interface CacheStore {}

export class LocalSavePurchases {
  constructor (private readonly cacheStore: CacheStore) {}
}

export class CacheStoreSpy implements CacheStore {
  deleteCallsCount = 0
}

describe('LocalSavePurchases', () => {
  test('Should not delete cache on sut.init', () => {
    const cacheStore = new CacheStoreSpy()
    new LocalSavePurchases(cacheStore)
    expect(cacheStore.deleteCallsCount).toBe(0)
  })
})
