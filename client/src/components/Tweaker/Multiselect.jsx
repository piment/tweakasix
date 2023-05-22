import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
// import 'primereact/resources/themes/lara-light-blue/theme.css';   // theme
import 'primereact/resources/primereact.css'; 
import './Multiselect.css' 
import 'primeicons/primeicons.css';                                 // icons
// import 'primeflex/primeflex.css'; 


export default function TextureSelect({selectedParts, setSelectedParts, fileid}) {
    const parts = [
        { name: 'Front' },
        { name: 'Back'},
        { name: 'Side'},
        { name: 'Neck' },
        { name: 'Pickguard' }
    ];
  
    return (
        <div className="multi-sel" key={fileid}>
            <MultiSelect value={selectedParts} onChange={(e) => setSelectedParts(e.value)} options={parts} optionLabel="name" 
                placeholder="Select Parts" maxSelectedLabels={3}  />
        </div>
    );
}