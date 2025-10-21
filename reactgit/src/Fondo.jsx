import React, { useState } from 'react';
import PostIt from './PostIt';

function Fondo() {
    const [notas, setNotas] = useState([
        { titulo: "Uno", descripcion: "Post-it Uno." },
        { titulo: "Dos", descripcion: "Post-it Dos." },
        { titulo: "Tres", descripcion: "Post-it Tres." },
        { titulo: "Cuatro", descripcion: "Post-it Cuatro." },
        { titulo: "Quinto", descripcion: "Post-it Cinco." }
    ]);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const agregarNota = () => {
        if (titulo.trim() && descripcion.trim()) {
            setNotas([...notas, { titulo, descripcion }]);
            setTitulo('');
            setDescripcion('');
        }
    };

    const eliminarNota = (idxEliminar) => {
        setNotas(notas.filter((_, idx) => idx !== idxEliminar));
    };

    return (
        <div>
            <h1 className='font-weight-bold'>Post It Simulator!</h1>
            <div className="d-flex">
                <input
                    type="text"
                    placeholder="Titulo"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    className="form-control"
                />
                <input
                    type="text"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                    className="form-control"
                />
                <button onClick={agregarNota} className="btn btn-dark">AGREGAR</button>
            </div>
            <div className="mt-5">
                <ul className="row">
                    {notas.map((nota, idx) => (
                        <PostIt
                            key={idx}
                            titulo={nota.titulo}
                            descripcion={nota.descripcion}
                            onEliminar={() => eliminarNota(idx)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Fondo;