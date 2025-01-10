/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useCallback } from "react";
import useIndexedDB from "./useIndexDb";
import { UserBrand, BrandChoice } from "../types/useType";

export const useBannerStore = () => {
  const [currentBrand, setCurrentBrand] = useState<UserBrand | null>(null);

  const { addRecord, getRecord, getAllRecords, updateRecord, deleteRecord } =
    useIndexedDB<UserBrand>("bannerDB", "brands", 1, [
      { name: "Brand", keyPath: "Brand" },
      { name: "createdAt", keyPath: "createdAt" },
    ]);

  const saveBrand = useCallback(
    async (brandData: Partial<BrandChoice>) => {
      try {
        const newBrand: UserBrand = {
          id: currentBrand?.id || crypto.randomUUID(),
          Brand: brandData.BrandName || "",
          userChoice: {
            ...currentBrand?.userChoice,
            ...brandData,
          } as BrandChoice,
          createdAt: Date.now(),
        };

        if (currentBrand?.id) {
          await updateRecord(newBrand);
        } else {
          await addRecord(newBrand);
        }

        setCurrentBrand(newBrand);
        return newBrand;
      } catch (error) {
        console.error("Error saving brand:", error);
        throw error;
      }
    },
    [currentBrand, addRecord, updateRecord]
  );

  return {
    currentBrand,
    setCurrentBrand,
    saveBrand,
  };
};
