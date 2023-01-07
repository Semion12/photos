import * as React from 'react';
import { Box, Tab, Tabs, TextField } from "@mui/material"
import { useState } from 'react';

export const Menu = ({ categories, inputValue, changeInputValue, currentCategory, ChangeCurrentCategory }) => {
    return (

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tabs value={currentCategory} onChange={ChangeCurrentCategory} centered>
                {categories.map((category, i) => {

                    return <Tab key={i} sx={{ backgroundColor: '#fff', marginRight: '10px' }} label={category.name} />
                })}


            </Tabs>
            <TextField
                sx={{ backgroundColor: '#fff' }}

                id="filled-hidden-label-small"
                value={inputValue}
                variant="outlined"
                size="normal"
                onChange={(e) => changeInputValue(e.target.value)}
            />

        </Box>
    )
}