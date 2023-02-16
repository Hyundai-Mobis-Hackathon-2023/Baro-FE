import useSpline from '@splinetool/r3f-spline';

const Casher = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/QbDQI4C-0QQLH9WZ/scene.splinecode');
  return (
    <>
      <group name='Casher' scale={0.05} position={position}>
        <group name='resize' position={[0, -15, 0]}>
          <group name='Group'>
            <group name='lamp' position={[-14.47, -27.02, -43.61]} scale={0.78}>
              <mesh
                name='Cylinder 3'
                geometry={nodes['Cylinder 3'].geometry}
                material={materials['wood-red-light']}
                castShadow
                receiveShadow
                position={[-0.22, 56.27, 0.66]}
                scale={0.42}
              />
              <mesh
                name='Cylinder 4'
                geometry={nodes['Cylinder 4'].geometry}
                material={materials['Cylinder 4 Material']}
                castShadow
                receiveShadow
                position={[0.1, 107.98, -0.3]}
                scale={0.42}
              />
              <mesh
                name='Cylinder 6'
                geometry={nodes['Cylinder 6'].geometry}
                material={materials['wood-red-light']}
                castShadow
                receiveShadow
                position={[-0.09, 125.26, -0.3]}
                scale={0.42}
              />
              <mesh
                name='Cylinder 2'
                geometry={nodes['Cylinder 2'].geometry}
                material={materials['wood-red-light']}
                castShadow
                receiveShadow
                position={[-0.1, 20.93, 0.3]}
                scale={0.42}
              />
            </group>
            <group name='cabinet-bedroom' position={[0, -44.32, 0]} scale={[0.75, 1, 1]}>
              <mesh
                name='Cube 65'
                geometry={nodes['Cube 65'].geometry}
                material={nodes['Cube 65'].material}
                castShadow
                receiveShadow
                position={[0.4, 4.1, 0]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={1}
              />
              <mesh
                name='Cube 64'
                geometry={nodes['Cube 64'].geometry}
                material={nodes['Cube 64'].material}
                castShadow
                receiveShadow
                position={[1.12, 4.1, 0]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={1}
              />
              <mesh
                name='Cube 63'
                geometry={nodes['Cube 63'].geometry}
                material={nodes['Cube 63'].material}
                castShadow
                receiveShadow
                position={[0, 4.1, 0]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={1}
              />
            </group>
          </group>
          <mesh
            name='Cube'
            geometry={nodes.Cube.geometry}
            material={materials['wood-red-light']}
            castShadow
            receiveShadow
            position={[-5.76, -2.2, 3.26]}
            rotation={[-Math.PI / 2, 0, 0.38]}
            scale={1}
          />
          <mesh
            name='Pyramid'
            geometry={nodes.Pyramid.geometry}
            material={materials['blue-2-dark']}
            castShadow
            receiveShadow
            position={[0.64, 1.59, 43.38]}
            rotation={[0, Math.PI / 9, 0]}
            scale={1}
          />
        </group>
      </group>
    </>
  );
};

export default Casher;
