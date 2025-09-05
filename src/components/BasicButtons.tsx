import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({ title }:{ title?: string}) {
  return (
    <Stack spacing={2} direction="row">
      <Button sx={{ width: 300 }} variant="contained">{title ? title : "Prettify"}</Button>
    </Stack>
  );
}