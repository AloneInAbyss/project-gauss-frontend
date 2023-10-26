import { MatchMediaMock } from './match-media-mock';

describe('MatchMediaMock', () => {
  it('should call all methods from MatchMediaMock', () => {
    MatchMediaMock.addEventListener();
    MatchMediaMock.removeEventListener();
    MatchMediaMock.onchange();
    MatchMediaMock.addListener();
    MatchMediaMock.removeListener();
    const result = MatchMediaMock.dispatchEvent();
    expect(result).toBeFalse();
  });
});
