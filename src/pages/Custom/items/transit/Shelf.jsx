import useSpline from '@splinetool/r3f-spline';

const Shelf = ({ position }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/fBvb6nQfVAtVcMer/scene.splinecode');
  return (
    <>
      <group name='Shelf' scale={0.05} position={position}>
        <group name='resize' position={[0, 20, 0]}>
          <mesh
            name='Cube'
            geometry={nodes.Cube.geometry}
            material={materials['wood-red-light']}
            castShadow
            receiveShadow
            position={[-9.51, -51.57, -9.43]}
            rotation={[-Math.PI / 2, 0, 0.38]}
            scale={1}
          />
          <mesh
            name='Pyramid'
            geometry={nodes.Pyramid.geometry}
            material={materials['blue-2-dark']}
            castShadow
            receiveShadow
            position={[-8.45, -3.19, 25.54]}
            rotation={[0, Math.PI / 9, 0]}
            scale={1}
          />
          <group name='Group 77' position={[-6.75, 35.39, -3.58]}>
            <mesh
              name='Cube 7'
              geometry={nodes['Cube 7'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[1.38, -8.91, 34.48]}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 3'
              geometry={nodes['Cube 3'].geometry}
              material={materials.pink}
              castShadow
              receiveShadow
              position={[1.3, -5.33, 23.72]}
              rotation={[Math.PI / 3, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 6'
              geometry={nodes['Cube 6'].geometry}
              material={materials['wall-livingroom']}
              castShadow
              receiveShadow
              position={[0.17, -5.88, 14.26]}
              rotation={[1.13, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 8'
              geometry={nodes['Cube 8'].geometry}
              material={materials['yellow-light']}
              castShadow
              receiveShadow
              position={[0.3, -2.86, 6.2]}
              rotation={[0.8, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 5'
              geometry={nodes['Cube 5'].geometry}
              material={materials['yellow-light']}
              castShadow
              receiveShadow
              position={[0.3, -0.97, -24.22]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 81'
              geometry={nodes['Cube 81'].geometry}
              material={materials['Untitled Material']}
              castShadow
              receiveShadow
              position={[1.8, -1, -2.93]}
              rotation={[0.32, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 4'
              geometry={nodes['Cube 4'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[1.8, 0, -28.49]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 82'
              geometry={nodes['Cube 82'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[0.3, -2.83, -8.28]}
              rotation={[0.4, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 2'
              geometry={nodes['Cube 2'].geometry}
              material={materials.grey}
              castShadow
              receiveShadow
              position={[0.3, -2.57, -32.43]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube 83'
              geometry={nodes['Cube 83'].geometry}
              material={materials.black}
              castShadow
              receiveShadow
              position={[0, -1.1, -17.47]}
              rotation={[-0.05, -Math.PI / 2, 0]}
              scale={0.14}
            />
            <mesh
              name='Cube1'
              geometry={nodes.Cube1.geometry}
              material={materials.purple}
              castShadow
              receiveShadow
              position={[-0.76, 0.57, -39.97]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.14}
            />
          </group>
          <group name='cd-2 2' position={[-12.25, -4.79, -33.48]} scale={0.14}>
            <mesh
              name='Merged Geometry'
              geometry={nodes['Merged Geometry'].geometry}
              material={nodes['Merged Geometry'].material}
              castShadow
              receiveShadow
              position={[8.71, -21.84, 49.72]}
              scale={7.05}
            />
            <mesh
              name='Cube2'
              geometry={nodes.Cube2.geometry}
              material={materials['wood-red']}
              castShadow
              receiveShadow
              position={[-9.72, -3.84, -79.8]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <group name='Group 19' position={[6.89, 10.69, 22.42]}>
              <mesh
                name='Ellipse 2'
                geometry={nodes['Ellipse 2'].geometry}
                material={materials['yellow-light']}
                castShadow
                receiveShadow
                position={[-1.4, 1.52, 4.21]}
                rotation={[-0.59, -0.18, -1.73]}
                scale={0.77}
              />
              <mesh
                name='Cube 21'
                geometry={nodes['Cube 21'].geometry}
                material={materials.grey}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[-0.59, -0.18, -0.16]}
                scale={0.77}
              />
            </group>
          </group>
          <mesh
            name='Merged Geometry1'
            geometry={nodes['Merged Geometry1'].geometry}
            material={nodes['Merged Geometry1'].material}
            castShadow
            receiveShadow
          />
        </group>
      </group>
    </>
  );
};

export default Shelf;
