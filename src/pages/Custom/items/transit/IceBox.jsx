import useSpline from '@splinetool/r3f-spline';

const IceBox = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/FQDiyRMBvhbfwmQq/scene.splinecode');

  return (
    <>
      <group name='Icebox' rotation={[0, -Math.PI / 2, 0]} scale={0.05} position={position}>
        <group name='resize' position={[0, 10, 0]}>
          <group name='interaction-open' position={[-48.49, 61.88, 18.41]}>
            <mesh
              name='Cube 8'
              geometry={nodes['Cube 8'].geometry}
              material={nodes['Cube 8'].material}
              castShadow
              receiveShadow
              position={[93.86, 1.83, 27.97]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[0.18, 0.18, 0.16]}
            />
            <mesh
              name='Rectangle 7'
              geometry={nodes['Rectangle 7'].geometry}
              material={materials['Rectangle 7 Material']}
              castShadow
              receiveShadow
              position={[54.59, 0, 0.01]}
              rotation={[0, 0, 0]}
              scale={[0.21, 0.21, 0.19]}
            />
          </group>
          <group name='Group 19' position={[6.18, -37.07, 29.8]}>
            <mesh
              name='Cube 44'
              geometry={nodes['Cube 44'].geometry}
              material={nodes['Cube 44'].material}
              castShadow
              receiveShadow
              position={[39.19, 33.1, 16.58]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[0.18, 0.18, 0.16]}
            />
            <mesh
              name='Rectangle 8'
              geometry={nodes['Rectangle 8'].geometry}
              material={materials['Rectangle 8 Material']}
              castShadow
              receiveShadow
              position={[0, 0, -11.38]}
              rotation={[0, 0, 0]}
              scale={[0.21, 0.21, 0.19]}
            />
          </group>
          <mesh
            name='Boolean'
            geometry={nodes.Boolean.geometry}
            material={nodes.Boolean.material}
            castShadow
            receiveShadow
            position={[6.1, 0, -25.47]}
          />
        </group>
      </group>
    </>
  );
};

export default IceBox;
