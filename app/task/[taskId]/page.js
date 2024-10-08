"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { updateTask } from "../../../lib/features/taskSlice";
import { setComentaries } from "../../../lib/features/taskSlice";
import { v4 as uuidv4 } from "uuid";

const states = [
  { value: "activa", label: "Activa" },
  { value: "proceso", label: "En proceso" },
  { value: "terminada", label: "Terminada" },
];

const priority = [
  { value: "normal", label: "Normal" },
  { value: "moderada", label: "Moderada" },
  { value: "urgente", label: "Urgente" },
];

export default function CreateTaskComponent({ params }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const comentaries = useSelector((state) => state.task.comentaries);
  const [task, setTaskData] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const foundTask = tasks.find((t) => t.id === params.taskId);
    if (foundTask) {
      setTaskData(foundTask);
    }
  }, [params.taskId, tasks]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedTask = {
      id: task.id,
      title: formData.get("tituloTarea"),
      description: formData.get("tarea"),
      status: formData.get("Estado"),
      prioridad: formData.get("Prioridad"),
      vencimiento: formData.get("Vencimiento"),
      assignedTo: formData.get("asignadoA"),
      createdAt: task.createdAt,
    };

    const comentario = formData.get("comentaries").trim();
    const updatedComentaries = {
      id: uuidv4(),
      comentario: comentario,
      createdAt: new Date(),
    };

    dispatch(updateTask(updatedTask));

    if (comentario) {
      dispatch(setComentaries(updatedComentaries));
    }

    setShowAlert(true);
    event.target.reset();

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  if (!task) return <div>Cargando...</div>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader subheader="Edita o finaliza la tarea" title="Editar" />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Titulo de la tarea</InputLabel>
                  <OutlinedInput
                    label="Titulo de la tarea"
                    name="tituloTarea"
                    defaultValue={task.title}
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
                    defaultValue={task.description}
                  />
                </FormControl>
              </Grid>

              <Grid xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Asignado a</InputLabel>
                  <OutlinedInput
                    label="Asignado a"
                    name="asignadoA"
                    defaultValue={task.assignedTo}
                  />
                </FormControl>
              </Grid>

              <Grid md={6} xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Estado</InputLabel>
                  <Select
                    defaultValue={task.status}
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
                    defaultValue={task.prioridad}
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
                <FormControl fullWidth>
                  <InputLabel>Vencimiento</InputLabel>
                  <OutlinedInput
                    label="Vencimiento"
                    name="Vencimiento"
                    type="date"
                    defaultValue={task.vencimiento}
                  />
                </FormControl>
              </Grid>

              <Grid xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Comentarios</InputLabel>
                  <OutlinedInput label="Comentarios" name="comentaries" />
                </FormControl>
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
              Guardado exitosamente.
            </Alert>
          )}
        </Card>
      </form>

      <div className="mt-5 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Comentarios de la tarea</h3>
        <ul className="list-disc list-inside space-y-4">
          {comentaries.map((comentario, index) => (
            <li key={index} className="text-gray-700">
              {comentario.comentario}
              <p className="text-sm text-gray-500 mt-1">
                {new Date(comentario.createdAt).toLocaleString()}{" "}
                {/* Format the date */}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
