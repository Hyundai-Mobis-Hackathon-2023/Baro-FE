import useSpline from '@splinetool/r3f-spline';

const Tv = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/TvyWnSsDqZOUNlPS/scene.splinecode');
  return (
    <>
      <group name='TV' scale={0.05} position={position}>
        <group name='tv' position={[-1.36, -20.8, -27.9]} scale={0.85}>
          <mesh
            name='Merged Geometry'
            geometry={nodes['Merged Geometry'].geometry}
            material={materials['grey-material']}
            castShadow
            receiveShadow
            position={[3.38, 52.36, 9.76]}
            scale={1.18}
          />
          <group name='Group 37' position={[-23.86, -15.89, 48.61]}>
            <mesh
              name='Merged Geometry1'
              geometry={nodes['Merged Geometry1'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[0.36, -16.36, -0.2]}
            />
            <mesh
              name='Cylinder 2'
              geometry={nodes['Cylinder 2'].geometry}
              material={materials['grey-material']}
              castShadow
              receiveShadow
              position={[0.52, 4.76, 5.08]}
              rotation={[-2.62, 0, -Math.PI / 2]}
              scale={0.86}
            />
            <mesh
              name='Cylinder'
              geometry={nodes.Cylinder.geometry}
              material={materials['grey-material']}
              castShadow
              receiveShadow
              position={[0.52, 19.77, 5.08]}
              rotation={[-Math.PI, 0, -Math.PI / 2]}
              scale={0.86}
            />
            <mesh
              name='Cube 61'
              geometry={nodes['Cube 61'].geometry}
              material={materials['wood-red']}
              castShadow
              receiveShadow
              position={[2, 0, -0.02]}
              rotation={[0, -Math.PI / 2, 0]}
            />
          </group>
          <mesh
            name='Cube 62'
            geometry={nodes['Cube 62'].geometry}
            material={materials['grey-material']}
            castShadow
            receiveShadow
            position={[-19.33, -63.01, -1.68]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            name='Cube 60'
            geometry={nodes['Cube 60'].geometry}
            material={materials['orange-1']}
            castShadow
            receiveShadow
            position={[8.37, -28.09, -0.92]}
          />
          <mesh
            name='Cube 59'
            geometry={nodes['Cube 59'].geometry}
            material={materials['wood-red']}
            castShadow
            receiveShadow
            position={[8.37, -27.85, -0.89]}
          />
          <mesh
            name='Cube 58'
            geometry={nodes['Cube 58'].geometry}
            material={materials['grey-material']}
            castShadow
            receiveShadow
            position={[8.37, -27.85, -0.89]}
          />
        </group>
      </group>
    </>
  );
};

export default Tv;
