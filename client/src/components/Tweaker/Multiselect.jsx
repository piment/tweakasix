import React, { useEffect, useState } from "react";
import { MultiSelect } from 'primereact/multiselect';
// import 'primereact/resources/themes/lara-light-blue/theme.css';   // theme
import 'primereact/resources/primereact.css'; 
import './Multiselect.css' 
import 'primeicons/primeicons.css';                                 // icons
import { useDispatch, useSelector } from "react-redux";
import { textureAdd } from "../../features/TextureReducer";
// import 'primeflex/primeflex.css'; 


export default function TextureSelect({selectedParts, setSelectedParts, fileid}) {
 const partsTx = useSelector((state) => state.texture_data.texture_assign)
 
 const partsAv = Object.keys(partsTx).map((part) => ({name : part, file: fileid}))
 
 const [partsSelected, setPartsSelected] = useState([])



const dispatch = useDispatch()


useEffect(() => {
console.log('partouze', partsSelected)
dispatch(textureAdd(partsSelected))
},[partsSelected])

  
const handleSelect = (e) => {
setPartsSelected(e.value)

}


    return (
        <div className="multi-sel" key={fileid}>
            <MultiSelect value={partsSelected} onChange={(e) => {
                console.log(e),
            setPartsSelected(e.value)}
        } options={partsAv} optionLabel="name" 
                placeholder="Select Parts" maxSelectedLabels={3}  />
        </div>
    );
}