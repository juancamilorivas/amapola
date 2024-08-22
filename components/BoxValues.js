import React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function BoxValues({ sx, value, text, color }) {
  return (
    <Card sx={sx}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                {text}
              </Typography>
              <Typography variant="h4">{value}</Typography>
            </Stack>

            {color === 'red' ? (
              <Avatar sx={{ backgroundColor: '#635AFB', height: '56px', width: '56px' }}>
                <CheckCircleIcon fontSize="var(--icon-fontSize-lg)" />
              </Avatar>
            ) : (
              <Avatar sx={{ backgroundColor: '#F49C31', height: '56px', width: '56px' }}>
                <OfflinePinIcon fontSize="var(--icon-fontSize-lg)" />
              </Avatar>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
