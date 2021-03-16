import React, { useCallback } from 'react';
import { Button, IconButton } from '@material-ui/core';

import { DropzoneDialogBase } from 'material-ui-dropzone';

import CloseIcon from '@material-ui/icons/Close';

const MuiDropzone = ({ setOpen, open, fileObjects, setFileObjects}) => {

    const addHandlerImages = useCallback(newFileObj => {
        console.log('onAdd: ', newFileObj);
        setFileObjects([].concat(fileObjects, newFileObj));
    }, [fileObjects, setFileObjects]);

    const deleteHandlerImages = useCallback(deleteFileObj => {
        console.log('onDelete', deleteFileObj);
        const newFileObjects = fileObjects.filter(file => {
            return file.data !== deleteFileObj.data && file;
        })
        setFileObjects(newFileObjects);
    }, [fileObjects, setFileObjects]);

    const saveHandlerImages = useCallback(() => {
        console.log('onSave: ', fileObjects);
        setOpen(false);
    }, [fileObjects, setOpen]);

    return (
        <>
            <Button style={{marginRight: '22px', marginTop: '12px'}} variant="contained" color="primary" onClick={() => setOpen(true)}>
                {!fileObjects.length ? 'Adicionar Imagem de fundo' : 'Remover Imagem de fundo'}
            </Button>
            <DropzoneDialogBase 
                dialogTitle={
                <IconButton 
                    style={{right: '12px', top: '8px', position: 'absolute', height: '12px'}}
                    onClick={() => setOpen(false)}
                >
                    <CloseIcon/>
                </IconButton>
                }
                dropzoneText="Arraste e solte a imagem aqui ou clique!"
                fileObjects={fileObjects}
                cancelButtonText={'Cancelar'}
                submitButtonText={'Enviar'}
                filesLimit={1}
                maxFileSize={5000000}
                open={open}
                onAdd={newFileObj => { addHandlerImages(newFileObj) }}
                onDelete={deleteFileObj => { deleteHandlerImages(deleteFileObj) }}
                onSave={() => { saveHandlerImages() }}
                showPreviews={true}
                showFileNamesInPreview={true}
            />
        </>
    );
};

export default MuiDropzone;