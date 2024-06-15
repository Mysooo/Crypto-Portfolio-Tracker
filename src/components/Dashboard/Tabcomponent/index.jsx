import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../Grid';
import './styles.css'
export default function TabComponent({ coins }) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: '1.5rem', // corrected 'fontsize' to 'fontSize'
    fontFamily: "Inter",
    textTransform: "capitalize"
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
        <TabPanel value="grid">
        <div className='grid-flex'>
            {coins.map((coin, i) => (
              <Grid coin= {coin} key ={i}  />
            ))}
          </div>
        </TabPanel>
        <TabPanel value="list">
          <div>
            {coins.map((item, i) => (
              <p key={i}>
                {i + 1}.{item.id}
              </p>
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
