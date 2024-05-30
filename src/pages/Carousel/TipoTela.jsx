import React from "react";
import Carousel from "./carousel";
import { NavLink } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./TipoTela.css";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  Button,
  CardMedia,
} from "@mui/material";
import "../Styles/stylesPages.css";
import imagem1 from '../../imagens/laranja3.png'

export default function TipoTela() {
  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>

      <div className="telas">
        <div className="recepcao">
          <Box width='300px'>
            <Card >
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image= {imagem1}
                  alt='unsplash image'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Recepção
                  </Typography>
                  <p>
                      Exibe as empresas que estão alocadas no condomínio. E as suas respectivas salas.
                    </p>
                </CardContent>
                <CardActions>
                  <Button size='small'>
                    <NavLink to="/telas/tvRecepcao" target="blank">
                      Selecionar
                    </NavLink>
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Box>
        </div>

        <div className="torre">
          <Box width="300px">
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={imagem1}
                  alt="unsplash image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Torre
                  </Typography>
                  <p>
                    Exibe informativos.
                  </p>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <NavLink to="/telas/tvTorre" target="blank">
                      Selecionar
                    </NavLink>
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Box>
        </div>
      </div>

      {/* <div className="telas">
    <div className="recepcao">
      <NavLink to="/telas/tvRecepcao" target="blank">
        <h1>Tv Recepção</h1>
      </NavLink>
      </div>
      <div className="torre">
      <NavLink to="/telas/tvTorre" target="blank">
        <h1>Tv Torre</h1>
      </NavLink>
    </div>
  </div> */}
    </>
  );
}
