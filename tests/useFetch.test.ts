import { renderHook } from '@testing-library/react-hooks';
import useFetch from '../src/useFetch';

beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('useFetch', () => {
  it('should handle initial state correctly', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve({ data: 'Test data' }),
    });
    

    const { result, waitForNextUpdate } = renderHook(() => useFetch({ url: 'https://example.com' }));

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeNull();
    expect(result.current.data).toBeNull();

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
    expect(result.current.data).toEqual({ data: 'Test data' });
  });
});
