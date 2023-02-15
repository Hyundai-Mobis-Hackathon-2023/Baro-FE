import useSpline from '@splinetool/r3f-spline';

const CustomCar = () => {
  const { nodes, materials } = useSpline('https://prod.spline.design/1K9dXTRd394qmkDV/scene.splinecode');

  return (
    <>
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
      <group name='car' position={[-3, 3, 5]} scale={0.05}>
        <mesh
          name='Ellipse 3'
          geometry={nodes['Ellipse 3'].geometry}
          material={materials['Ellipse 3 Material']}
          castShadow
          receiveShadow
          position={[143.39, -190.48, 202.11]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name='Ellipse 31'
          geometry={nodes['Ellipse 31'].geometry}
          material={materials['Ellipse 31 Material']}
          castShadow
          receiveShadow
          position={[-135.98, -190.48, 202.11]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name='Ellipse 2'
          geometry={nodes['Ellipse 2'].geometry}
          material={materials['Ellipse 2 Material']}
          castShadow
          receiveShadow
          position={[143.39, -190.48, -207.38]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name='Ellipse'
          geometry={nodes.Ellipse.geometry}
          material={materials['Ellipse Material']}
          castShadow
          receiveShadow
          position={[-135.98, -190.48, -207.38]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name='Rectangle'
          geometry={nodes.Rectangle.geometry}
          material={materials['Rectangle Material']}
          castShadow
          receiveShadow
          position={[178.02, 27.98, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name='Rectangle 2'
          geometry={nodes['Rectangle 2'].geometry}
          material={materials['Rectangle 2 Material']}
          castShadow
          receiveShadow
          position={[0.02, 27.98, -300]}
        />
        <mesh
          name='Rectangle 3'
          geometry={nodes['Rectangle 3'].geometry}
          material={materials['Rectangle 3 Material']}
          castShadow
          receiveShadow
          position={[0.11, -189.04, 0]}
          rotation={[-Math.PI / 2, -0.01, Math.PI / 2]}
          scale={1}
        />
      </group>
    </>
  );
};

export default CustomCar;
