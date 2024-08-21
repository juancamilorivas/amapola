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
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Unstable_Grid2";

const states = [
  { value: "alabama", label: "Alabama" },
  { value: "new-york", label: "New York" },
  { value: "san-francisco", label: "San Francisco" },
  { value: "los-angeles", label: "Los Angeles" },
];

export function AccountDetailsForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader
          subheader="Edite y guarde su informacion personal"
          title="Perfil"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Primer nombre</InputLabel>
                <OutlinedInput
                  defaultValue="Nicolas"
                  label="First name"
                  name="firstName"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Segundo nombre</InputLabel>
                <OutlinedInput
                  defaultValue="Copernico"
                  label="Last name"
                  name="lastName"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Correo electronico</InputLabel>
                <OutlinedInput
                  defaultValue="alrededordelsol@planetas.sol"
                  label="Correo electronico"
                  name="email"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Numero celular</InputLabel>
                <OutlinedInput
                  label="Numero Celular"
                  name="Telefono"
                  type="tel"
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel>Estado</InputLabel>
          
                <Select
                  defaultValue="new-york"
                  label="State"
                  name="state"
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
                <InputLabel>Ciudad</InputLabel>
                <OutlinedInput label="City" />
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
