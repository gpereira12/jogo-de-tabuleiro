import React, { useState, useRef, useCallback } from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';

import { Button, LinearProgress } from '@material-ui/core';

import Form from './componentes/MuiForm';
import BoardGame from './componentes/BoardGame';


import './App.css';

const App = () => {
  const componentRef = useRef();
  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ disableButton, setDisableButton ] = useState(false);
  const [ housesText, setHousesText ] = useState([]);
  const [ housesQuantity, setHousesQuantity ] = useState(5);
  const [fileObjects, setFileObjects] = useState([]);
  const [open, setOpen] = useState(false);

  const createBoardGame = useCallback(() => {
    setIsSubmitting(true);

    setTimeout(() => {
      exportComponentAsJPEG(componentRef, 'Jogo Tabuleiro');
      setIsSubmitting(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Form 
        housesQuantity={housesQuantity} 
        setHousesQuantity={setHousesQuantity} 
        housesText={housesText} 
        setHousesText={setHousesText}
        setDisableButton={setDisableButton}
        fileObjects={fileObjects}
        setFileObjects={setFileObjects}
        open={open}
        setOpen={setOpen}
      />
      {isSubmitting && <LinearProgress />}
      <Button style={{marginRight: '22px'}} variant="contained" color="primary" onClick={() => setOpen(true)}>
          Adicionar Imagem de fundo
      </Button>
      <Button
        variant="contained"
        color="primary"
        disabled={isSubmitting || disableButton}
        onClick={createBoardGame}
      >
        {isSubmitting ? 'Gerando tabuleiro...' : 'Gerar Tabuleiro'}
      </Button>
      <BoardGame 
        ref={componentRef}
        fileObjects={fileObjects}
        housesText={housesText} 
        setHousesText={setHousesText}
        housesQuantity={housesQuantity} 
        setHousesQuantity={setHousesQuantity} 
      />
    </div>
  );
}

export default App;
