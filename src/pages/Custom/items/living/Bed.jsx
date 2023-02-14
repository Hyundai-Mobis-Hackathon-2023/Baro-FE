import useSpline from '@splinetool/r3f-spline';

const Bed = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/r6gPOaAbiX4hfryP/scene.splinecode');
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
      <group name='Bed' scale={0.07} position={position}>
        <mesh
          name='Cube 17'
          geometry={nodes['Cube 17'].geometry}
          material={materials['Cube 17 Material']}
          castShadow
          receiveShadow
          position={[0.41, -20.98, -35.41]}
          rotation={[-Math.PI / 2, 0, 1.55]}
          scale={[1.07, 1.07, 0.81]}
        />
        <mesh
          name='Cube 16'
          geometry={nodes['Cube 16'].geometry}
          material={materials['Cube 16 Material']}
          castShadow
          receiveShadow
          position={[2.35, 3.66, -57.32]}
          rotation={[-0.68, -0.02, 1.56]}
          scale={[0.64, 0.64, 0.98]}
        />
        <group name='Empty Object 2' position={[-0.02, 0, -3.6]}>
          <mesh
            name='Cylinder'
            geometry={nodes.Cylinder.geometry}
            material={materials['Bed Wood']}
            castShadow
            receiveShadow
            position={[2.08, -1, -70.28]}
            rotation={[1.57, Math.PI / 2, 0]}
            scale={[2.18, 2.18, 2.37]}
          />
          <mesh
            name='Cube 15'
            geometry={nodes['Cube 15'].geometry}
            material={materials['Bed Wood']}
            castShadow
            receiveShadow
            position={[37.42, -13.3, 71.03]}
            rotation={[0, -0.02, 0]}
            scale={[0.58, 0.88, 0.9]}
          />
          <mesh
            name='Cube 151'
            geometry={nodes['Cube 151'].geometry}
            material={materials['Bed Wood']}
            castShadow
            receiveShadow
            position={[-37.15, -13.3, 69.79]}
            rotation={[0, -0.02, 0]}
            scale={[0.67, 0.88, 0.9]}
          />
          <mesh
            name='Cube 12'
            geometry={nodes['Cube 12'].geometry}
            material={materials['Bed Wood']}
            castShadow
            receiveShadow
            position={[-0.02, -14.69, 70.41]}
            rotation={[0, -0.02, 0]}
            scale={[0.89, 0.88, 0.9]}
          />
          <mesh
            name='Cube 14'
            geometry={nodes['Cube 14'].geometry}
            material={materials['Bed Wood']}
            castShadow
            receiveShadow
            position={[2.07, -25.46, -70.37]}
            rotation={[1.57, Math.PI / 2, 0]}
            scale={[1.62, 1.62, 1.55]}
          />
          <mesh
            name='Cube 121'
            geometry={nodes['Cube 121'].geometry}
            material={materials['Cube 121 Material']}
            castShadow
            receiveShadow
            position={[0.67, -29.32, 4.19]}
            rotation={[0, 1.55, 0]}
            scale={[1.62, 1.62, 1.58]}
          />
        </group>
        <mesh
          name='Cube 152'
          geometry={nodes['Cube 152'].geometry}
          material={materials['Cube 152 Material']}
          castShadow
          receiveShadow
          position={[0.44, -20.29, 12.45]}
          rotation={[0, 1.55, 0]}
          scale={[1.73, 1.23, 1.65]}
        />
        <mesh
          name='Cube 74'
          geometry={nodes['Cube 74'].geometry}
          material={materials['Cube 74 Material']}
          castShadow
          receiveShadow
          position={[0.65, -15.47, 0.59]}
          rotation={[0, 1.55, 0]}
          scale={[1.62, 1.62, 1.6]}
        />
      </group>
    </>
  );
};

export default Bed;
