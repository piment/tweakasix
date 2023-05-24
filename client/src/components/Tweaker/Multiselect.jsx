import React, { useEffect, useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
// import 'primereact/resources/themes/lara-light-blue/theme.css';   // theme
import 'primereact/resources/primereact.css'; 
import './Multiselect.css' 
import 'primeicons/primeicons.css';                                 // icons
import { useDispatch, useSelector } from "react-redux";
import { textureAdd, textureDelete } from "../../features/TextureReducer";
// import 'primeflex/primeflex.css'; 


export default function TextureSelect({selectedParts, setSelectedParts, fileModName}) {
 const partsTx = useSelector((state) => state.texture_data.texture_assign)
 console.log(fileModName)
 const partsAv = Object.keys(partsTx).map((part) => ({name : part, file: fileModName}))
 
 console.log(partsTx, partsAv)
//  const [partsSelected, setPartsSelected] = useState([])



const dispatch = useDispatch()


useEffect(() => {

dispatch(textureAdd(selectedParts))
},[selectedParts])

  
const handleSelect = (e) => {
 console.log(selectedParts)
    if(selectedParts.length > e.value.length){
        const removed = selectedParts.filter(part => !e.value.includes(part))
        dispatch(textureDelete(removed))

    
    }


    setSelectedParts(e.value)

}


    return (
        <div className="multi-sel" key={fileModName}>
            <MultiSelect value={selectedParts} onChange={(e) => {
                // console.log(e),
            // setPartsSelected(e.value)
            handleSelect(e)
        }} 
        options={partsAv} optionLabel="name" 
                placeholder="Select Parts" maxSelectedLabels={3}  />
        </div>
    );
}