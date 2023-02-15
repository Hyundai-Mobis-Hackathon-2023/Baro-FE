import useSpline from '@splinetool/r3f-spline';

const Sofa = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/FLN3lxbaewQdAKqC/scene.splinecode');

  return (
    <>
      <group name='Sofa' position={position} rotation={[0, -Math.PI / 1, 0]} scale={0.03}>
        <group name='resize' position={[0, -80, 0]}>
          <mesh
            name='Cube 63'
            geometry={nodes['Cube 63'].geometry}
            material={nodes['Cube 63'].material}
            castShadow
            receiveShadow
            position={[-44.03, 9.64, 68.26]}
            rotation={[-Math.PI / 2, 1.13, -Math.PI / 2]}
            scale={[1.42, 0.81, 0.94]}
          />
          <mesh
            name='Cube 631'
            geometry={nodes['Cube 631'].geometry}
            material={nodes['Cube 631'].material}
            castShadow
            receiveShadow
            position={[-44.03, 9.64, -67.03]}
            rotation={[-Math.PI / 2, 1.13, -Math.PI / 2]}
            scale={[1.42, 0.81, 0.94]}
          />
          <mesh
            name='Cube 66'
            geometry={nodes['Cube 66'].geometry}
            material={nodes['Cube 66'].material}
            castShadow
            receiveShadow
            position={[-53.31, -28.69, -1.24]}
            rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
            scale={[1.17, 0.81, 1.37]}
          />
          <mesh
            name='Cube 67'
            geometry={nodes['Cube 67'].geometry}
            material={nodes['Cube 67'].material}
            castShadow
            receiveShadow
            position={[9.19, -18.23, -147.01]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
            scale={[1.17, 0.81, 1.37]}
          />
          <mesh
            name='Cube 65'
            geometry={nodes['Cube 65'].geometry}
            material={nodes['Cube 65'].material}
            castShadow
            receiveShadow
            position={[9.19, -18.23, 144.64]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
            scale={[1.17, 0.81, 1.37]}
          />
          <mesh
            name='Cube 64'
            geometry={nodes['Cube 64'].geometry}
            material={nodes['Cube 64'].material}
            castShadow
            receiveShadow
            position={[23.91, -51, -1.91]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.17, 0.81, 1.37]}
          />
          <mesh
            name='Cube 60'
            geometry={nodes['Cube 60'].geometry}
            material={nodes['Cube 60'].material}
            castShadow
            receiveShadow
            position={[23.91, -26.12, 68.26]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.42, 0.81, 1.37]}
          />
          <mesh
            name='Cube 59'
            geometry={nodes['Cube 59'].geometry}
            material={nodes['Cube 59'].material}
            castShadow
            receiveShadow
            position={[23.91, -26.12, -67.03]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.42, 0.81, 1.37]}
          />
        </group>
      </group>
    </>
  );
};

export default Sofa;
