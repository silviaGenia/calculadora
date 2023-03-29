"use client";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { red } from "@mui/material/colors";

import styles from "./Calculadora.module.css";
import { TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const color = red[50];

export default function CalculadoraPage() {
  return (
    <div className={styles.container}>
      <div className={`${styles.center} ${styles.mb}`}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          className={styles.radius}
          sx={{ bgcolor: color }}
        />
      </div>
      <div>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 3 }}
          alignItems="center"
        >
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">7</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">8</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">9</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">+</Typography>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">4</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">5</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">6</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">-</Typography>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">1</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">2</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">3</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">=</Typography>
            </Item>
          </Grid>

          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">0</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">,</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">C</Typography>
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item>
              <Typography variant="h4">/</Typography>
            </Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
