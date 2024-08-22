"use client";

import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import LatestTasks from "../components/LatestTasks";
import BoxValues from "../components/BoxValues";
import { useSelector } from "react-redux";
import { tasks } from "../lib/features/taskSlice";

export default function Page() {
  const allTasks = useSelector(tasks);

  const totalTasks = allTasks.length;
  const completedTasks = allTasks.filter(
    (task) => task.status === "terminada"
  ).length;

  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <BoxValues
          sx={{ height: "100%" }}
          text="Total tareas"
          value={totalTasks}
          color="red"
        />
      </Grid>

      <Grid lg={3} sm={6} xs={12}>
        <BoxValues
          sx={{ height: "100%" }}
          text="Tareas terminadas"
          value={completedTasks}
          color="orange"
        />
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
