import useSpline from '@splinetool/r3f-spline';

const Table = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/NOGPQZYE7UXhmdgX/scene.splinecode');
  return (
    <>
      <group name='Table' position={position} scale={0.005}>
        <mesh
          name='Cube 3'
          geometry={nodes['Cube 3'].geometry}
          material={materials['table-ao']}
          castShadow
          receiveShadow
          position={[231.35, -29.75, -676.32]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={1.42}
        />
        <mesh
          name='Cube 31'
          geometry={nodes['Cube 31'].geometry}
          material={materials['table-ao']}
          castShadow
          receiveShadow
          position={[-249.64, -29.75, -676.32]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={1.42}
        />
        <mesh
          name='Cube 2'
          geometry={nodes['Cube 2'].geometry}
          material={materials['table-ao']}
          castShadow
          receiveShadow
          position={[231.35, -29.75, 886.09]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={1.42}
        />
        <mesh
          name='Cube'
          geometry={nodes.Cube.geometry}
          material={materials['table-ao']}
          castShadow
          receiveShadow
          position={[-249.64, -29.75, 886.09]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={1.42}
        />
        <mesh
          name='Rectangle'
          geometry={nodes.Rectangle.geometry}
          material={materials['Rectangle Material']}
          castShadow
          receiveShadow
          position={[0, 230.16, 109]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={1}
        />
      </group>
      <directionalLight
        name='Directional Light'
        castShadow
        intensity={0.62}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-40}
        shadow-camera-right={40}
        shadow-camera-top={40}
        shadow-camera-bottom={-500}
        position={[-1091.88, 300, 300]}
      />
    </>
  );
};

export default Table;
