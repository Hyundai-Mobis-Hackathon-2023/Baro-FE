import useSpline from '@splinetool/r3f-spline';

const Plant = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/k5FM7JUYyCTGLhTk/scene.splinecode');
  return (
    <>
      <group name='Plant' position={position} rotation={[-Math.PI, 0.03, -Math.PI]} scale={0.01}>
        <mesh
          name='Merged Geometry'
          geometry={nodes['Merged Geometry'].geometry}
          material={materials['']}
          castShadow
          receiveShadow
          position={[-2.59, 123.1, 14.55]}
          rotation={[-Math.PI, -0.03, -Math.PI]}
          scale={5.92}
        />
        <mesh
          name='Cylinder 3'
          geometry={nodes['Cylinder 3'].geometry}
          material={materials['blue-2']}
          castShadow
          receiveShadow
          position={[3.61, -174.85, 10.39]}
          rotation={[0, 0, 0]}
          scale={[1.9, 1.42, 1.9]}
        />
        <mesh
          name='Merged Geometry 2'
          geometry={nodes['Merged Geometry 2'].geometry}
          material={materials.purple}
          castShadow
          receiveShadow
          position={[1.83, -258.66, 9.94]}
          rotation={[-Math.PI, -0.03, -Math.PI]}
          scale={5.92}
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

export default Plant;
