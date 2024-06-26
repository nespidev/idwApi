
import React, { useState } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx';
import './AlojamientosAdmin.css';
import AddAlojamiento from '../components/form/alojamientos/AddAlojamiento.jsx';
import GetAlojamiento from '../components/form/alojamientos/GetAlojamiento.jsx';
import DeleteAlojamiento from '../components/form/alojamientos/DeleteAlojamiento.jsx';
import EditAlojamiento from '../components/form/alojamientos/EditAlojamientos.jsx';
import AllAlojamientos from '../components/form/alojamientos/AllAlojamientos.jsx';
import AlojamientosTipo from '../components/form/alojamientos-tipo/AlojamientosTipo.jsx';
import Servicios from '../components/form/alojamientos-servicios/Servicios.jsx';
import Imagenes from '../components/form/alojamientos-imagenes/Imagenes.jsx';

export default function AlojamientosAdmin() {
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh(prev => !prev);
    };

    return (
        <>
        <section className="intro">
            <h1>Administrar Alojamientos</h1>
            <p> </p>
        </section>

        <div className = "pagina-alojamientos">

            <Sidebar></Sidebar>
            <div className='pagina-alojamientos-seccion'>
                <Routes>

                        <Route path={'/'} element={<AddAlojamiento onAdd={handleRefresh}/>}></Route>
                        <Route path='get' element={<GetAlojamiento />}></Route>
                        <Route path='delete' element={<DeleteAlojamiento />}></Route>
                        <Route path='edit' element={<EditAlojamiento />}></Route>
                        <Route path='all' element={<AllAlojamientos />}></Route>
                        <Route path='tipos' element={<AlojamientosTipo />}></Route>
                        <Route path='servicios' element={<Servicios />}></Route>
                        <Route path='imagenes' element={<Imagenes />}></Route>

                </Routes>
            </div>
        </div>
    </>
    );
}
