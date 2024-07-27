import * as React from 'react';
import { Grid } from '@mui/material';
import TvsTab from '../../components/tabelaTvs/tabelaTvs';
import Navbar from "../../components/navbar/Navbar";
import "../Styles/stylesPages.css";
import "./Telas.css";
import CustomButton from "../../components/button/button";
import { Link, NavLink } from 'react-router-dom'


const mezzaninoItems = [
    {
        title: 'TV Recepção',
        status: "manutencao",
      },
      {
        title: 'TV Auditório',
        status: "ativo",
      },
      {
        title: 'TV Torre 01',
        status: "inativo",
      },
];


const primeiroAndarItems = [
    {
        title: 'TV Sala 104',
        status: "manutencao",
      },
      {
        title: 'TV Sala 105',
        status: "ativo",
      },
      {
        title: 'TV Sala 106',
        status: "inativo",
      },
];

const segundoAndarItems = [
    {
        title: 'TV Sala 201',
        status: "inativo",
      },
      {
        title: 'TV Sala 204',
        status: "ativo",
      },
      {
        title: 'TV Sala 207',
        status: "inativo",
      },
];

const terceiroAndarItems = [
    {
        title: 'TV Sala 301',
        status: "inativo",
      },
      {
        title: 'TV Sala 302',
        status: "inativo",
      },
      {
        title: 'TV Sala 303',
        status: "inativo",
      },
];

const quartoAndarItems = [
    {
        title: 'TV Sala 402',
        status: "manutencao",
      },
      {
        title: 'TV Sala 406',
        status: "manutencao",
      },
      {
        title: 'TV Sala 401',
        status: "manutencao",
      },
];

const quintoAndarItems = [
    {
        title: 'TV Sala 501',
        status: "ativo",
      },
      {
        title: 'TV Sala 503',
        status: "ativo",
      },
      {
        title: 'TV Sala 505',
        status: "ativo",
      },
];

const sextoAndarItems = [
    {
        title: 'TV Sala 602',
        status: "manutencao",
      },
      {
        title: 'TV Sala 604',
        status: "ativo",
      },
      {
        title: 'TV Sala 601',
        status: "inativo",
      },
];

const andares = [
    { title: "Mezanino", items: mezzaninoItems },
    { title: "1º Andar", items: primeiroAndarItems },
    { title: "2º Andar", items: segundoAndarItems },
    { title: "3º Andar", items: terceiroAndarItems },
    { title: "4º Andar", items: quartoAndarItems },
    { title: "5º Andar", items: quintoAndarItems },
    { title: "6º Andar", items: sextoAndarItems },
  ];

  
function Telas () {

    return (
        <>
        <div className="NavBar">
            <Navbar />
        </div>

        
        <Grid container spacing={1} className='painelTela'>
        {andares.map((andar, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={1.6} xl={1}>
            <TvsTab title={andar.title} items={andar.items} status={andar.status} />
          </Grid>
        ))}
        
      </Grid>
      
      
      


        </>
    )
}

export default Telas;
