import useSpline from '@splinetool/r3f-spline';

const Lamp = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/r1cfeXH2n-oW75EV/scene.splinecode');

  return (
    <>
      <group name='Lamp' position={position} scale={0.017}>
        <group name='resize' position={[0, 200, 0]}>
          <mesh
            name='Sphere'
            geometry={nodes.Sphere.geometry}
            material={materials['Untitled Material']}
            castShadow
            receiveShadow
            position={[-53.25, 403.22, 1.25]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={1}
          />
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
            name='Cylinder 2'
            geometry={nodes['Cylinder 2'].geometry}
            material={materials.black}
            castShadow
            receiveShadow
            position={[-54.23, 325.3, 0.88]}
            rotation={[0, 0, 0]}
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

export default Lamp;
