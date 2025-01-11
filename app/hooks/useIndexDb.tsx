import { useEffect, useState, useCallback } from "react";

// Define types for the records and operations
interface DBRecord {
  id: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface UseIndexedDBResult<T extends DBRecord> {
  addRecord: (record: T) => Promise<T>;
  getRecord: (id: string | number) => Promise<T | undefined>;
  getAllRecords: () => Promise<T[]>;
  updateRecord: (record: T) => Promise<T>;
  deleteRecord: (id: string | number) => Promise<void>;
  clearStore: () => Promise<void>;
  error: Error | null;
}

const useIndexedDB = <T extends DBRecord>(
  dbName: string,
  storeName: string,
  version: number,
  indexes: {
    name: string;
    keyPath: string;
    options?: IDBIndexParameters;
  }[] = []
): UseIndexedDBResult<T> => {
  const [db, setDb] = useState<IDBDatabase | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const request = indexedDB.open(dbName, version);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // Create object store if it doesn't exist
      if (!db.objectStoreNames.contains(storeName)) {
        const objectStore = db.createObjectStore(storeName, { keyPath: "id" });

        // Create indexes
        indexes.forEach(({ name, keyPath, options }) => {
          if (!objectStore.indexNames.contains(name)) {
            objectStore.createIndex(name, keyPath, options);
          }
        });
      }
    };

    request.onsuccess = (event) => {
      setDb((event.target as IDBOpenDBRequest).result);
    };

    request.onerror = (event) => {
      setError(
        new Error(`Database error: ${(event.target as IDBOpenDBRequest).error}`)
      );
    };

    return () => {
      db?.close();
    };
  }, [db, dbName, indexes, storeName, version]);

  // Add record
  const addRecord = useCallback(
    async (record: T): Promise<T> => {
      if (!db) throw new Error("Database not initialized");

      return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.add(record);

        request.onsuccess = () => resolve(record);
        request.onerror = () => reject(request.error);
      });
    },
    [db, storeName]
  );

  // Get single record
  const getRecord = useCallback(
    async (id: string | number): Promise<T | undefined> => {
      if (!db) throw new Error("Database not initialized");

      return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readonly");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.get(id);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    },
    [db, storeName]
  );

  // Get all records
  const getAllRecords = useCallback(async (): Promise<T[]> => {
    if (!db) throw new Error("Database not initialized");

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], "readonly");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.getAll();

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }, [db, storeName]);

  // Update record
  const updateRecord = useCallback(
    async (record: T): Promise<T> => {
      if (!db) throw new Error("Database not initialized");

      return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.put(record);

        request.onsuccess = () => resolve(record);
        request.onerror = () => reject(request.error);
      });
    },
    [db, storeName]
  );

  // Delete record
  const deleteRecord = useCallback(
    async (id: string | number): Promise<void> => {
      if (!db) throw new Error("Database not initialized");

      return new Promise((resolve, reject) => {
        const transaction = db.transaction([storeName], "readwrite");
        const objectStore = transaction.objectStore(storeName);
        const request = objectStore.delete(id);

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
      });
    },
    [db, storeName]
  );

  // Clear store
  const clearStore = useCallback(async (): Promise<void> => {
    if (!db) throw new Error("Database not initialized");

    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.clear();

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }, [db, storeName]);

  return {
    addRecord,
    getRecord,
    getAllRecords,
    updateRecord,
    deleteRecord,
    clearStore,
    error,
  };
};

export default useIndexedDB;
