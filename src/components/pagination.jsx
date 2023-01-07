import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({page, changePage}) {
    return (
      <Stack spacing={2}>
        <Pagination page={page} count={10} onChange = {changePage} />
        
      </Stack>
    );
  }