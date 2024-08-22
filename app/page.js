"use client";

import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import LatestTasks from "../components/LatestTasks";
import { useSelector } from "react-redux";
import { tasks } from "../lib/features/taskSlice";
import { Paper, Typography } from "@mui/material";

export default function Page() {
  const allTasks = useSelector(tasks);

  const totalTasks = allTasks.length;
  const completedTasks = allTasks.filter(task => task.status === 'terminada').length;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper 
          elevation={3} 
          style={{
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#f5f5f5",
            textAlign: "center",
          }}
        >
          <Typography variant="h6">Resumen de Tareas</Typography>
          <Typography variant="body1">
            Total de tareas: {totalTasks}
          </Typography>
          <Typography variant="body1">
            Tareas completadas: {completedTasks}
          </Typography>
        </Paper>
      </Grid>
      
      <Grid lg={8} md={12} xs={12}>
        {totalTasks === 0 ? (
          <div>No hay tareas creadas</div>
        ) : (
          <LatestTasks tasks={allTasks} sx={{ height: "100%" }} />
        )}
      </Grid>
    </Grid>
  );
}

