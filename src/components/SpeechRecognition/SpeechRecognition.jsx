import React, {useEffect} from 'react';
import Speechrecognition, { useSpeechRecognition} from 'react-speech-recognition';
import {IconMicrophone} from '@tabler/icons-react'

const SpeechrecognitionComponent = ({setSourceText}) => {
    const {transcript, listening } = useSpeechRecognition();

    useEffect(()=>{
        setSourceText(transcript)
    },[transcript,setSourceText])

    const handlingVoiceRecording = () => {
        if(listening){
            Speechrecognition.stopListening();
        }else{
            Speechrecognition.startListening();
        }
    }

    return (
        <div>
            <IconMicrophone 
            size={22}
            className='text-gray-400'
            onClick={handlingVoiceRecording}/>
        </div>
    );
};

export default SpeechrecognitionComponent;