import useSpline from '@splinetool/r3f-spline';

const Speaker = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/U7l91LXUoF6Y6Ipb/scene.splinecode');

  return (
    <>
      <group name='Speaker' scale={0.05} position={position}>
        <group name='hi' position={[0, -40, 0]}>
          <group name='cd-4' position={[1.81, 44.79, -5.12]} rotation={[-Math.PI / 2, 0, 0]} scale={0.18}>
            <mesh
              name='Cube'
              geometry={nodes.Cube.geometry}
              material={nodes.Cube.material}
              castShadow
              receiveShadow
              position={[46.2, -124.61, 7.27]}
              rotation={[0, 0, -1.75]}
              scale={1.28}
            />
            <mesh
              name='Cylinder 2'
              geometry={nodes['Cylinder 2'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[-89.13, -155.17, 5.27]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={1.28}
            />
            <mesh
              name='Cylinder'
              geometry={nodes.Cylinder.geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[86.56, -127.47, 7.09]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={1.28}
            />
            <mesh
              name='Rectangle 2'
              geometry={nodes['Rectangle 2'].geometry}
              material={materials['wall-livingroom']}
              castShadow
              receiveShadow
              position={[4.53, -22.14, -42.46]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={1.28}
            />
            <mesh
              name='红色'
              geometry={nodes.红色.geometry}
              material={materials['pink-light']}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[-1.94, -1.51, 2.72]}
              scale={[0.72, 0.09, 0.72]}
            />
            <mesh
              name='Cylinder1'
              geometry={nodes.Cylinder1.geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[0, 0, 0]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={[0.72, 0.09, 0.72]}
            />
          </group>
          <group name='cabinet' position={[-17.13, 3.39, 0]} rotation={[0, -Math.PI / 2, 0]} scale={[0.16, 0.18, 0.2]}>
            <mesh
              name='Merged Geometry 2'
              geometry={nodes['Merged Geometry 2'].geometry}
              material={nodes['Merged Geometry 2'].material}
              castShadow
              receiveShadow
              position={[-2.64, 12.06, 142.41]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[5.06, 5.47, 6.11]}
            />
            <mesh
              name='Merged Geometry'
              geometry={nodes['Merged Geometry'].geometry}
              material={nodes['Merged Geometry'].material}
              castShadow
              receiveShadow
              position={[-3.3, -46.08, 131.27]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[5.06, 5.47, 6.11]}
            />
            <mesh
              name='Cube 2'
              geometry={nodes['Cube 2'].geometry}
              material={materials['wood-3']}
              castShadow
              receiveShadow
              position={[0, -49.69, -97.57]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1, 0.88, 1]}
            />
          </group>
        </group>
      </group>
    </>
  );
};

export default Speaker;
