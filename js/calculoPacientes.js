function calculoPacientes(pacientes) {
  const nPacientes = pacientes.length;
  const nMayoresEdad = pacientes
    .filter(elemento => elemento.paciente.edad >= 18)
    .length;
  const nHombresDiabeticos = pacientes
    .filter(elemento => elemento.dieta === "Diabetes"
      && elemento.paciente.sexo === "H")
    .length;
  const totalDiasIngreso = pacientes
    .reduce((acc, elemento) => acc + elemento.diasIngresado, 0);
  const nMujeres = pacientes
    .filter(elemento => elemento.paciente.sexo === "M");
  const mediaEdadMujeres0 = nMujeres
    .reduce((acc, elemento) => acc + elemento.paciente.edad, 0)
    / nMujeres.length;
  const mediaEdadMujeres = mediaEdadMujeres0.toFixed(2);

  const pacientesCalculo = {
    nPacientes,
    nMayoresEdad,
    nHombresDiabeticos,
    totalDiasIngreso,
    mediaEdadMujeres,
  };
  return pacientesCalculo;
}
