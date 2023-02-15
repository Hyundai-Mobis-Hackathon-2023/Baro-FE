import useSpline from '@splinetool/r3f-spline';

const MedicalBed = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/nhrmt-tAhfPNRw2t/scene.splinecode');
  return (
    <>
      <group name='MedicalBed' rotation={[0, -Math.PI / 2, 0]} scale={0.045} position={position}>
        <group name='resize' position={[0, -40, 0]}>
          <mesh
            name='Cube 70'
            geometry={nodes['Cube 70'].geometry}
            material={materials['Cube 70 Material']}
            castShadow
            receiveShadow
            position={[-141.88, 23.18, 63.51]}
            rotation={[-2.08, -1.07, -0.56]}
            scale={1.08}
          />
          <mesh
            name='Cube 69'
            geometry={nodes['Cube 69'].geometry}
            material={materials['Cube 69 Material']}
            castShadow
            receiveShadow
            position={[-135.21, 26.93, -54.39]}
            rotation={[-Math.PI / 2, -1.13, 0]}
            scale={1.08}
          />
          <mesh
            name='Cube 68'
            geometry={nodes['Cube 68'].geometry}
            material={materials['Cube 68 Material']}
            castShadow
            receiveShadow
            position={[-172.28, 21.84, 44.78]}
            rotation={[-Math.PI / 2, -0.61, 0]}
            scale={1.08}
          />
          <mesh
            name='Cube 67'
            geometry={nodes['Cube 67'].geometry}
            material={materials['Cube 67 Material']}
            castShadow
            receiveShadow
            position={[-172.28, 21.84, -62.81]}
            rotation={[-Math.PI / 2, -0.61, 0]}
            scale={1.08}
          />
          <mesh
            name='Cube 65'
            geometry={nodes['Cube 65'].geometry}
            material={materials['Cube 65 Material']}
            castShadow
            receiveShadow
            position={[-209.67, -0.68, -4.75]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
          <mesh
            name='Cube 64'
            geometry={nodes['Cube 64'].geometry}
            material={materials['Cube 64 Material']}
            castShadow
            receiveShadow
            position={[62.36, -22.43, 1.2]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1}
          />
          <mesh
            name='Cube 63'
            geometry={nodes['Cube 63'].geometry}
            material={materials.white}
            castShadow
            receiveShadow
            position={[14.35, -30.32, -0.27]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={1}
          />
        </group>
      </group>
    </>
  );
};

export default MedicalBed;
