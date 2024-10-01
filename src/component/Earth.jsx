import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"

const Earth = (props) => {

    const { nodes, materials } = useGLTF('/models/earth.glb')


    return (


        <group {...props} dispose={null}>
            <group rotation={[0, Math.PI/5, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['URF-Height_watr_0'].geometry}
                    material={materials.watr}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['URF-Height_Lampd_0'].geometry}
                    material={materials.Lampd}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes['URF-Height_Lampd_Ice_0'].geometry}
                    material={materials.Lampd_Ice}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/models/earth.glb')

export default Earth