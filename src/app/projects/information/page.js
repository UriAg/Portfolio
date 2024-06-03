"use client";
import { Suspense } from "react";
import SearchParamsHandler from "./SearchParamasHandler";

const Details = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <SearchParamsHandler />
    </Suspense>
  );
};

export default Details;
