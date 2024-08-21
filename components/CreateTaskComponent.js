"use client";

import * as React from "react";
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

export function AccountDetailsForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader
          subheader="Edite y guarde una tarea a la vez"
          title="Crear tarea"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>

            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Titulo de la tarea</InputLabel>
                <OutlinedInput
                  //   defaultValue=""
                  label="First name"
                  name="firstName"
                />
              </FormControl>
            </Grid>

            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Tarea</InputLabel>
                <OutlinedInput
                  //   defaultValue=""
                  label="Tarea"
                  name="Tarea"
                />
              </FormControl>
            </Grid>

            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Fecha</InputLabel>
                <OutlinedInput
                  //   defaultValue="alrededordelsol@planetas.sol"
                  label="Fecha de la tarea"
                  name="email"
                />
              </FormControl>
            </Grid>
            
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button
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
      </Card>
    </form>
  );
}
