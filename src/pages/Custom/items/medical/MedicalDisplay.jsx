import useSpline from '@splinetool/r3f-spline';

const MedicalDisplay = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/ASV1Z2w49GedHnCL/scene.splinecode');
  return (
    <>
      <group name='MedicalInfo' position={position} rotation={[0, -1.44, 0]} scale={0.01}>
        <group name='resize' position={[0, 40, 0]}>
          <group name='computer' position={[-233.67, 551.1, 42.67]} rotation={[-Math.PI, 1.3, -Math.PI]} scale={5.42}>
            <mesh
              name='Merged Geometry 10'
              geometry={nodes['Merged Geometry 10'].geometry}
              material={nodes['Merged Geometry 10'].material}
              castShadow
              receiveShadow
            />
            <mesh
              name='Cube'
              geometry={nodes.Cube.geometry}
              material={nodes.Cube.material}
              castShadow
              receiveShadow
              position={[-7.18, 5.56, 0]}
              scale={[1, 1.08, 1]}
            />
          </group>
          <mesh
            name='Cube 5'
            geometry={nodes['Cube 5'].geometry}
            material={nodes['Cube 5'].material}
            castShadow
            receiveShadow
            position={[37.09, -270.06, 5.4]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={1.53}
          />
          <mesh
            name='Cylinder'
            geometry={nodes.Cylinder.geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[45.52, -462.67, 0]}
            rotation={[0, 0, 0]}
            scale={1.53}
          />
        </group>
      </group>
    </>
  );
};

export default MedicalDisplay;
