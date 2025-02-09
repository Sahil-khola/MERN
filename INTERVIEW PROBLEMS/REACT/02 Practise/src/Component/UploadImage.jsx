import React, { useState } from 'react'

const UploadImage = () => {
    const[image,setImage]=useState(null)
    function handelFile(event) {
        setImage(event.target.files[0])
    }
  return (
    <div>
      <input type="file" accept='image/*' onChange={handelFile} />
      {image && <img src={URL.createObjectURL(image)} />}
    </div>
  )
}

export default UploadImage;
