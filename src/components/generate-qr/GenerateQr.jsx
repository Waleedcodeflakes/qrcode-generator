import React from 'react'
import './generateqr.css'
import { Link } from 'react-router-dom'
import { QRCodeCanvas } from 'qrcode.react'
import { useState, useRef } from 'react'

const GenerateQr = () => {
    const [text, setText] = useState("");
    const [qrName, setQrName] = useState('')
    const canvasRef = useRef(null);


    const downloadQr = () => {
        

    // const canvas = document.querySelector('canvas');
    if (!text) {
        alert("No QR code to download.");
        return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
        alert("QR code not available.");
        return;
    }
    const pngUrl = canvas.toDataURL('image/png')
    .replace('image/png', 'image/octet-system');
    

    if (pngUrl) {
        const link = document.createElement('a');

    link.href = pngUrl;
    link.download= qrName ? qrName : 'qr-code.png';
    link.click();
    } else {
        alert('Qr code not found')
    }

     
  }
  return (
    <div className='qr-generate'>
        <div className='w-85 m-auto'>
            <div className='qr-top'>
                <div className='backto-home flex w-60 justify-b'>
                    <Link to='/' className='flex c-gap-1'><i className="fa-solid fa-arrow-left-long"></i><p>Back</p></Link>
                    <h3 className='fs-20 fw-700'>Enter Content</h3>
                </div>
            </div>
            <div className='qr-gen-container w-100'>
                <div className='w-50 m-auto' style={{boxSizing: 'border-box'}}>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Put your link here' required/><br/>
                    <input type="text" value={qrName} onChange={(e) => setQrName(e.target.value)} placeholder='Name you QR (Option)' /><br/>
                    <div className='qr-preview flex m-auto w-100'>
                    
                       {/* {text &&  <QRCodeCanvas value={text} size={200} />}
                        */}
                        <div style={{ width: 200, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc', backgroundColor: '#f9f9f9' }}>
                        {text ? (
                            <QRCodeCanvas ref={canvasRef} value={text} size={200} />
                        ) : (
                            <span style={{ color: '#999', fontSize: 16 }}>QR Preview</span>
                        )}
                        </div>
                    </div>
                    <div className='flex w-100 c-gap-1'>
                        <button disabled={!text} onClick={downloadQr}>Download QR</button>
                        {/* <input  type="submit" name="" value='Download QR' /> */}
                        <input className='transparent' type="submit" value="Share QR"  />

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GenerateQr