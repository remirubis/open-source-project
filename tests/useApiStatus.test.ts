import { renderHook } from '@testing-library/react-hooks';
import useAPIStatus from '../src/useAPIStatus';

// Mock global.fetch
beforeAll(() => {
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('useAPIStatus', () => {
  it('should initially set API status to online if fetch is successful', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true });

    const { result, waitForNextUpdate } = renderHook(() =>
      useAPIStatus('https://example.com/api', { interval: 1000 })
    );

    await waitForNextUpdate();

    expect(result.current.isOnline).toBe(true);
    expect(result.current.lastChecked).toBeInstanceOf(Date);
  });

  it('should set API status to offline if fetch fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    const { result, waitForNextUpdate } = renderHook(() =>
      useAPIStatus('https://example.com/api', { interval: 1000 })
    );

    await waitForNextUpdate();

    expect(result.current.isOnline).toBe(false);
    expect(result.current.lastChecked).toBeInstanceOf(Date);
  });

  it('should update API status on interval', async () => {
    jest.useFakeTimers();
    (global.fetch as jest.Mock)
      .mockResolvedValueOnce({ ok: true })
      .mockRejectedValueOnce(new Error('Network error'));

    const { result, waitForNextUpdate } = renderHook(() =>
      useAPIStatus('https://example.com/api', { interval: 5000 })
    );

    jest.advanceTimersByTime(5000);

    await waitForNextUpdate();

    expect(result.current.isOnline).toBe(false);
    expect(result.current.lastChecked).toBeInstanceOf(Date);

    jest.useRealTimers();
  });
});
