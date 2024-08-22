"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Grid from "@mui/material/Unstable_Grid2";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { TextField } from "@mui/material";
import { setTask } from "../lib/features/taskSlice";

const states = [
  { value: "activa", label: "Activa" },
  { value: "terminada", label: "Terminada" },
  { value: "proceso", label: "En proceso" },
];

const priority = [
  { value: "normal", label: "Normal" },
  { value: "moderada", label: "Moderada" },
  { value: "urgente", label: "Urgente" },
];

export function CreateTaskComponent() {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newTask = {
      id: `${Math.random().toString(36).substr(2, 9)}`,
      title: formData.get("tituloTarea"),
      description: formData.get("tarea"),
      status: formData.get("Estado"),
      vencimiento: formData.get("vencimiento"),
      prioridad: formData.get("Prioridad"),
      createdAt: new Date(),
    };

    dispatch(setTask(newTask));

    setShowAlert(true);

    event.target.reset();

    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader
            subheader="Edite y guarde una tarea a la vez"
            title="Tarea"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Titulo de la tarea</InputLabel>
                  <OutlinedInput
                    label="Titulo de la tarea"
                    name="tituloTarea"
                  />
                </FormControl>
              </Grid>

              <Grid xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Tarea</InputLabel>
                  <OutlinedInput
                    label="Tarea"
                    name="tarea"
                    multiline
                    rows={4}
                  />
                </FormControl>
              </Grid>

              <Grid md={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Estado</InputLabel>
                  <Select
                    defaultValue="activa"
                    label="Estado"
                    name="Estado"
                    variant="outlined"
                  >
                    {states.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>



              <Grid md={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Prioridad</InputLabel>
                  <Select
                    defaultValue="normal"
                    label="Prioridad"
                    name="Prioridad"
                    variant="outlined"
                  >
                    {priority.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>



              <Grid md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Fecha de Vencimiento"
                  name="vencimiento"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#121621",
                "&:hover": {
                  backgroundColor: "#635AFB",
                },
              }}
            >
              Guardar datos
            </Button>
          </CardActions>
          {showAlert && (
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Tarea guardada exitosamente.
            </Alert>
          )}
        </Card>
      </form>
    </>
  );
}
