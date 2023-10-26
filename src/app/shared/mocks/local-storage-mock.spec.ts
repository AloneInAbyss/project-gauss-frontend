import { AvailableLanguages } from '../models/available-languages-enum';
import { LocalStorageKeys } from '../models/local-storage-keys-enum';
import { LocalStorageMock } from './local-storage-mock';

describe('LocalStorageMock', () => {
  it('should call all methods from LocalStorageMock', () => {
    LocalStorageMock.setItem(LocalStorageKeys.LANGUAGE, AvailableLanguages.PT);
    expect(LocalStorageMock.getItem(LocalStorageKeys.LANGUAGE)).toBe(AvailableLanguages.PT);

    LocalStorageMock.removeItem(LocalStorageKeys.LANGUAGE);
    expect(LocalStorageMock.getItem(LocalStorageKeys.LANGUAGE)).toBeNull();
    
    LocalStorageMock.setItem(LocalStorageKeys.LANGUAGE, AvailableLanguages.PT);
    LocalStorageMock.clear();
    expect(LocalStorageMock.getItem(LocalStorageKeys.LANGUAGE)).toBeNull();
  });
});
