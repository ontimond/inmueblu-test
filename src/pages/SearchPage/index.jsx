import { Container, Grid, Tab, TabsList } from "@mui/material";
import React from "react";
import { MainLayout } from "../../layout/MainLayout";
import { SearchBar } from "./SearchBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { PropertyList } from "./PropertyList";
import { Box } from "@mui/system";
import { Map } from "./Map";
import { grey } from "@mui/material/colors";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function SearchPage() {
  const [value, setValue] = React.useState("1");
  const [properties, setProperties] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    // Read properties.json file using axios
    axios.get("properties.json").then((response) => {
      setProperties(response.data.properties);
    });
  }, []);

  return (
    <MainLayout>
      <Box sx={{ height: 1, display: "flex", flexDirection: "column" }}>
        <SearchBar />
        <TabContext value={value} sx={{ width: 1 }}>
          <Box display={{ sx: "block", md: "none" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
              >
                <Tab label="Lista de Propiedades" value="1" />
                <Tab label="Vista del mapa" value="2" />
              </TabList>
            </Box>
          </Box>
          {value === "1" && (
            <TabPanel
              value="1"
              sx={{
                padding: 0,
                height: 1,
                display: "inline-flex",
                flexGrow: 1,
              }}
            >
              <Grid container>
                <Grid item xs={12} md={7}>
                  <Box
                    sx={{
                      pl: { xs: "17px", md: "100px" },
                      pr: { xs: "17px", md: "0px" },
                      height: "100%",
                      maxHeight: "100%",
                      overflow: "auto",
                      borderRight: {
                        md: "1px solid #B8BAC6",
                        xs: "none",
                      },
                    }}
                  >
                    <PropertyList properties={properties} />
                  </Box>
                </Grid>
                <Grid item xs={0} md={5} display={{ xs: "none", md: "block" }}>
                  <Map properties={properties} />
                </Grid>
              </Grid>
            </TabPanel>
          )}
          {value === "2" && (
            <TabPanel
              value="2"
              sx={{
                padding: 0,
                height: { xs: 1, md: 0 },
                display: "inline-flex",
              }}
            >
              <Box sx={{ width: 1 }}>
                <Map></Map>
              </Box>
            </TabPanel>
          )}
        </TabContext>
      </Box>
    </MainLayout>
  );
}
