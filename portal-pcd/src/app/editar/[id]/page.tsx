import Editar from "@/components/Editar/Editar";
import React from "react";

export default function EditarPage({ params }: { params: { id: string } }) {
  return <Editar id={params.id} />;
}
  