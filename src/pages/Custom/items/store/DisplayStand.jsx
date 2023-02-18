import useSpline from '@splinetool/r3f-spline';

const DisplayStand = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/ARHZouwakvFMozVY/scene.splinecode');
  return (
    <>
      <group name='Cabinet' rotation={[-Math.PI, 0, -Math.PI]} scale={0.045} position={position}>
        <group name='resize' position={[0, 18, 0]}>
          <mesh
            name='Cube 57'
            geometry={nodes['Cube 57'].geometry}
            material={nodes['Cube 57'].material}
            castShadow
            receiveShadow
            position={[51.11, -73.72, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={1}
          />
          <mesh
            name='Cube 62'
            geometry={nodes['Cube 62'].geometry}
            material={materials['blue-2-dark']}
            castShadow
            receiveShadow
            position={[0, 111.04, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.32, 0.91, 1]}
          />
          <mesh
            name='Cube 61'
            geometry={nodes['Cube 61'].geometry}
            material={materials['Cube 61 Material']}
            castShadow
            receiveShadow
            position={[0, 101.26, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.32, 0.91, 1]}
          />
          <mesh
            name='Cube 60'
            geometry={nodes['Cube 60'].geometry}
            material={materials['Cube 60 Material']}
            castShadow
            receiveShadow
            position={[-0.95, 53.74, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 63'
            geometry={nodes['Cube 63'].geometry}
            material={materials['Cube 63 Material']}
            castShadow
            receiveShadow
            position={[52.05, -82.05, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 59'
            geometry={nodes['Cube 59'].geometry}
            material={materials['Cube 59 Material']}
            castShadow
            receiveShadow
            position={[-0.95, 6.32, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1.3, 0.91, 1]}
          />
          <mesh
            name='Cube 571'
            geometry={nodes['Cube 571'].geometry}
            material={nodes['Cube 571'].material}
            castShadow
            receiveShadow
            position={[-1.06, -79.94, -8.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1}
          />
        </group>
      </group>
    </>
  );
};

export default DisplayStand;
