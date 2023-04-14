import React ,{useEffect, useState}from 'react'
import { useControls, buttonGroup, Leva } from "leva";
import { useDispatch, useSelector } from "react-redux";
import { dropTrigger, addColor } from "../features/Colors";
function Controls({colorList, setColorList}) {


const dispatch = useDispatch()
const [c, setControls] = useState({})

useEffect(() => {
    // Run this effect before the Leva controls are rendered
    console.log('Before controls')
    dispatch(addColor(colorList))
    console.log(colorList)
  }, [])
const controls = useControls(
      
    {
       
            gloss: {
                value: 0,
                min: 0,
                max: 1,
                step: 0.01,
            },
            // id: {

            //     value: colorList.id,
            //     transient: false,
            //     onChange: (c) =>
            //     {
            //         setColorList((prev) => ({...prev, id: c }));
            //     }, 
            // },
            side: {
                value: colorList.side,
                onChange: (c) =>
                {

                    setColorList((prev) => ({ ...prev, side: c }));

                }, transient: false
            },
            binding: {
                value: colorList.binding,
                onChange: (c) =>
                {
              
                    setColorList({ ...colorList.binding, binding: c });
                },
            },
            tablefront: {
                value: colorList.tablefront,
                onChange: (c) =>
                {
                    setColorList({ ...colorList.tablefront, tablefront: c });
                },
            },
            tableback: {
                value: colorList.tableback,
                onChange: (c) =>
                {
                    setColorList({ ...colorList.tableback, tableback: c });
                },
            },
            neckwood: {
                value: colorList.neckwood,
                onChange: (c) =>
                {
                    setColorList({ ...colorList.neckwood, neckwood: c });
                },
            },
            fretboard: {
                value: colorList.fretboard,
                onChange: (c) =>
                {
                    setColorList({ ...colorList.fretboard, fretboard: c });
                },
            },
            fretbinding: {
                value: colorList.fretbinding,
                onChange: (c) =>
                {
                    setColorList({ ...colorList.fretbinding, fretbinding: c });
                },
            },
            frets: {
                value: colorList.frets,
                onChange: (c) =>
                {
                    setColorList({ ...colorList.frets, frets: c });
                },
            },
            inlay: {
                value: colorList.inlay,
                onChange: (c) =>
                {
                    setColorList({ ...colorList.inlay, inlay: c });
                },
            },
            nut: {
                value: colorList.nut,
                onChange: (c) =>
                {
                    setColorList({ ...colorList.nut, nut: c });
                },
            },
            metalpieces: {
                value: colorList.metalpieces,
                onChange: (c) =>
                {
                    setColorList({ ...colorList.metalpieces, metalpieces: c });
                },
            },
            pickup_cover: {
                value: colorList.pickup_cover,
                onChange: (c) =>
                {
                    setColorList({ ...colorList.pickup_cover, pickup_cover: c });
                },
            },
            pickup_ring: {
                value: colorList.pickup_ring,
                onChange: (c) =>
                {
                    setColorList({ ...colorList.pickup_ring, pickup_ring: c });
                },
            },
            knobs: {
              value: colorList.knobs,
              onChange: (c) => {
                     setColorList({...colorList.knobs, knobs :c});
              },
            },
        }, [ setControls]
        );
   

      

      
    //   useEffect(() => {
    //     console.log('Controls')
    //     console.log(controls.side)
    // dispatch(addColor(colorList))
    // }, [controls])
    useEffect(() => {
        console.log('Controls')
        if (controls) {
          console.log(controls)
        }
        dispatch(addColor(colorList))
      }, [controls, dispatch, colorList])
    
  return (
<>     </>
  )
}

export default Controls