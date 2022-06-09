const getData = require('../../src/data/entries');
const mockAxios = require('axios');

jest.mock('axios');
mockAxios.get.mockResolvedValue({ data: {} });

describe('Data', () => {
  afterEach(jest.clearAllMocks);

  test('get api entries', async () => {
    const result = await getData('cat');
    expect(result).toEqual({});
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
