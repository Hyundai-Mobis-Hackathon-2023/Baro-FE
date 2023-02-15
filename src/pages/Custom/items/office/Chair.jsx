import useSpline from '@splinetool/r3f-spline';

const Chair = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/vudEi1EAUjCnPydp/scene.splinecode');
  return (
    <>
      <group name='Chair' rotation={[0, -Math.PI / 2, 0]} position={position} scale={0.04}>
        <group name='resize' position={[0, -40, 0]}>
          <mesh
            name='Merged Geometry'
            geometry={nodes['Merged Geometry'].geometry}
            material={nodes['Merged Geometry'].material}
            castShadow
            receiveShadow
            position={[-3.38, -10.75, 1.12]}
            rotation={[0, 1.13, 0]}
            scale={1.34}
          />
          <mesh
            name='Cube 63'
            geometry={nodes['Cube 63'].geometry}
            material={nodes['Cube 63'].material}
            castShadow
            receiveShadow
            position={[-35.5, 33.58, -0.44]}
            rotation={[-Math.PI / 2, 1.13, -Math.PI / 2]}
            scale={[1.31, 0.81, 0.94]}
          />
          <mesh
            name='Cube 60'
            geometry={nodes['Cube 60'].geometry}
            material={nodes['Cube 60'].material}
            castShadow
            receiveShadow
            position={[30.78, -13.7, -0.42]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.31, 0.81, 1.37]}
          />
        </group>
      </group>
    </>
  );
};

export default Chair;
