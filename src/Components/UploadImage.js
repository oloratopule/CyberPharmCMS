import React,{useState} from 'react';

export default function UploadImage() {
const [image, setImage] = useState(null)
const handleChange = e => {
    if(e.target.files[0]){

    }
}

    return (
        <input type="file" onChange={handleChange}/>
    );
}
