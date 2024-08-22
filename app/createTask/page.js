import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import { CreateTaskComponent } from '../../components/CreateTaskComponent';


export default function Page() {
  return (
    <Stack spacing={3} >
      <div>
        <Typography variant="h4">Crear tarea</Typography>
      </div>
      <Grid container spacing={3}>
     
        <Grid lg={8} md={6} xs={12}>
          <CreateTaskComponent />
        </Grid>
      </Grid>
    </Stack>
  );
}
